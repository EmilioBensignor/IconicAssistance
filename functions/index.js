const {
	onRequest,
	onCall,
	HttpsError,
} = require("firebase-functions/v2/https");
const stripe = require("stripe")(process.env.VITE_STRIPE_SECRET_KEY);
const admin = require("firebase-admin");
const { default: axios } = require("axios");
const cors = require("cors")({ origin: true });

try {
	admin.initializeApp();
} catch (error) {
	console.log(error);
}
const db = admin.firestore();

function transformAssistantData(rawData) {
	const data = { ...rawData.data() };
	data.id = rawData.id;
	return data;
}
function transformClientData(rawData) {
	let data = {};
	data.firstname = rawData.data()["firstname"];
	data.lastname = rawData.data()["lastname"];
	data.email = rawData.data()["email"];
	data.phone = rawData.data()["phone"];
	data.company = rawData.data()["company"];
	data.id = rawData.id;
	return data;
}

function generateReferralCode(user) {
	const randomNum = Math.random() * 9000;
	return `#${user.firstname[0].toUpperCase()}${user.lastname[0].toUpperCase()}${Math.floor(
		1000 + randomNum
	)}`;
}

exports.createSetupIntent = onRequest({ cors: true }, async (req, res) => {
	res.set("Access-Control-Allow-Origin", "*");
	let customerId;
	const data = req.body.data;
	await db
		.collection("clients")
		.doc(data.userId)
		.get()
		.then((snap) => {
			customerId = snap.data();
		})
		.catch(() => {
			res.send({ data: "Unauthorized email." });
		});

	if (!customerId) {
		res.send({ data: "Error: no stripe customer with that id" });
	}

	const setupIntent = await stripe.setupIntents.create({
		customer: customerId.stripeId,
	});
	res.send({ data: { clientSecret: setupIntent.client_secret } });
});

exports.attatchPaymentMethod = onRequest({ cors: true }, async (req, res) => {
	res.set("Access-Control-Allow-Origin", "*");
	let customerId;
	const data = req.body.data;

	const setupIntentID = data.setup_intent;
	await db
		.collection("clients")
		.doc(data.userId)
		.get()
		.then((snap) => {
			customerId = snap.data();
		})
		.catch(() => {
			res.send({ data: "Unauthorized email." });
		});

	if (!customerId) {
		res.send({ data: "Error: no stripe customer with that id" });
	}
	const setupIntent = await stripe.setupIntents.retrieve(setupIntentID);
	const paymentMethod = await stripe.paymentMethods.retrieve(
		setupIntent.payment_method
	);
	const attachedPaymentMethod = await stripe.paymentMethods.attach(
		paymentMethod.id,
		{ customer: customerId.stripeId }
	);
	await db
		.collection("clients")
		.doc(data.userId)
		.update({ hasCCOnFile: "true" })
		.catch(() => {
			res.send({ data: "Error updating CC on DB." });
		});
	res.send({ data: attachedPaymentMethod });
});

exports.signUpClient = onRequest({ cors: true }, async (req, res) => {
	res.set("Access-Control-Allow-Origin", "*");
	const data = req.body.data;
	const email = data.email;
	const password = data.password;
	let userInformation;
	let userId;
	let allowedUsersSnap;

	if (!email || !password) {
		res.send({ data: "Email and/or password are missing." });
	}

	await db
		.collection("allowedUsers")
		.where("email", "=", email)
		.get()
		.then((snap) => {
			userInformation = snap.docs[0].data();
			allowedUsersSnap = snap;
		})
		.catch(() => {
			res.send({ data: "Unauthorized email." });
		});

	await admin
		.auth()
		.createUser({
			email: email,
			password: password,
		})
		.then((userRecord) => {
			userId = userRecord.uid;
		})
		.catch(() => {
			res.send({ data: "Error creating account." });
		});

	const customerId = await stripe.customers.list({
		email: email,
		limit: 1,
	});
	if (
		!customerId ||
		!customerId.data ||
		!customerId.data[0] ||
		!customerId.data[0].id
	) {
		res.send({ data: "Error: no stripe customer with that email" });
	} else {
		userInformation.stripeId = customerId.data[0].id;
	}

	// validar que no existe cliente con ese codigo, sino generar nuevo (while loop o do while)
	while (true) {
		const referral_code = generateReferralCode(userInformation);

		const snap = await db
			.collection("clients")
			.where("referral_code", "==", referral_code)
			.get();

		if (snap.size === 0) {
			userInformation.referral_code = referral_code;
			break;
		}
	}

	await db
		.collection("clients")
		.doc(userId)
		.set(userInformation)
		.then(async () => {
			allowedUsersSnap.forEach((doc) => {
				doc.ref.delete();
			});
		})
		.then(() => {
			res.send({ data: "User created." });
		})
		.catch(() => {
			res.send({ data: "Error adding user to database." });
		});
});

exports.signUpAssistant = onRequest({ cors: true }, async (req, res) => {
	res.set("Access-Control-Allow-Origin", "*");
	const data = req.body.data;
	const email = data.email;
	const password = data.password;
	let userInformation;
	let userId;
	let allowedUsersSnap;

	if (!email || !password) {
		res.send({ data: "Email and/or password are missing." });
	}

	await db
		.collection("allowedAssistants")
		.where("email", "=", email)
		.get()
		.then((snap) => {
			userInformation = snap.docs[0].data();
			userInformation.tasks = [];
			allowedUsersSnap = snap;
		})
		.catch(() => {
			res.send({ data: "Unauthorized email." });
		});

	await admin
		.auth()
		.createUser({
			email: email,
			password: password,
		})
		.then((userRecord) => {
			userId = userRecord.uid;
		})
		.catch(() => {
			res.send({ data: "Error creating account." });
		});

	await db
		.collection("assistants")
		.doc(userId)
		.set(userInformation)
		.then(async () => {
			allowedUsersSnap.forEach((doc) => {
				doc.ref.delete();
			});
		})
		.then(() => {
			res.send({ data: "User created." });
		})
		.catch(() => {
			res.send({ data: "Error adding user to database." });
		});
});

exports.getClientPaymentMethods = onRequest((req, res) => {
	cors(req, res, async () => {
		res.set("Access-Control-Allow-Methods", "POST");
		res.set("Access-Control-Allow-Headers", "Content-Type");
		res.set("Access-Control-Max-Age", "3600");
		const data = req.body.data;
		const stripeId = data.id;
		try {
			const paymentMethods = await stripe.paymentMethods.list({
				customer: stripeId,
				type: "card",
			});
			res.send({ data: paymentMethods });
		} catch (error) {
			res.status(500).send({ data: error });
		}
	});
});

exports.deleteClientPaymentMethod = onCall(async (data, context) => {
	const cardId = data.data.card_id;
	try {
		const remove = await stripe.paymentMethods.detach(cardId);
		return { data: remove };
	} catch (error) {
		throw new HttpsError("internal", error.message);
	}
});

exports.getAssistantsData = onCall(async (data, context) => {
	const hubspotId = data.data.hubspotId;
	const headers = {
		Authorization: `Bearer ${process.env.VITE_HUBSPOT_PRIVATE_APP_KEY}`,
	};

	try {
		// Fetch all deals associated with the given hubspotId in a single API call
		const dealsResponse = await axios.get(
			`https://api.hubapi.com/crm/v4/objects/contacts/${hubspotId}/associations/deals?properties=dealname,amount&associations=contacts`,
			{ headers }
		);

		const assistantDealMap = new Map();

		// Process each deal and map assistants to deals in a single loop
		await Promise.all(
			dealsResponse.data.results.map(async (result) => {
				const dealId = result.toObjectId;

				// Fetch all contacts associated with the deal in a single API call
				const contactsResponse = await axios.get(
					`https://api.hubapi.com/crm/v4/objects/deals/${dealId}/associations/contacts`,
					{ headers }
				);

				// Map assistants to their corresponding deal IDs
				contactsResponse.data.results.forEach((contact) => {
					if (contact.toObjectId !== hubspotId) {
						const assistantId = Number(contact.toObjectId);
						if (!assistantDealMap.has(assistantId)) {
							assistantDealMap.set(assistantId, dealId);
						}
					}
				});
			})
		);

		// Extract assistant IDs
		const assistantIds = Array.from(assistantDealMap.keys());

		if (assistantIds.length === 0) {
			return { assistants: [] };
		}

		// Fetch assistant data from Firestore in a single call
		const assistantsRawData = await db
			.collection("assistants")
			.where("hs_object_id", "in", assistantIds)
			.get();

		// Map assistants to their data and associated deal IDs
		const assistantsData = assistantsRawData.docs.map((doc) => {
			const assistantData = transformAssistantData(doc);
			assistantData.dealId = assistantDealMap.get(
				doc.data().hs_object_id
			);
			return assistantData;
		});

		return { assistants: assistantsData };
	} catch (err) {
		console.error(err);
		throw new HttpsError(
			"unknown",
			"An error occurred while fetching assistant data"
		);
	}
});

exports.getInvoicesData = onCall(async (data, context) => {
	const hubspotId = data.data.hubspotId;
	try {
		const invoicesResponse = await axios.get(
			`https://api.hubapi.com/crm/v3/objects/contacts/${hubspotId}/associations/invoices`,
			{
				headers: {
					Authorization: `Bearer ${process.env.VITE_HUBSPOT_PRIVATE_APP_KEY}`,
				},
			}
		);
		const invoiceIds = invoicesResponse.data.results.map(
			(result) => result.id
		);
		if (!invoiceIds) {
			return { invoices: { data: { invoices: [] } } };
		}
		const invoicesData = await Promise.all(
			invoiceIds.map((invoice) =>
				axios
					.get(
						`https://api.hubapi.com/crm/v3/objects/invoices/${invoice}`,
						{
							headers: {
								Authorization: `Bearer ${process.env.VITE_HUBSPOT_PRIVATE_APP_KEY}`,
							},
							params: {
								properties:
									"hs_amount_billed,hs_balance_due, hs_last_sent_date, hs_due_date,hs_number, hs_invoice_status",
							},
						}
					)
					.then((response) => response.data)
			)
		).then((results) => results.flat());
		return { invoices: invoicesData };
	} catch (error) {
		console.error(error);
		throw new HttpsError(
			"unknown",
			"An error occurred while fetching invoice data"
		);
	}
});

exports.getClientData = onCall(async (data, context) => {
	const hubspotId = data.data.hubspotId;
	const headers = {
		Authorization: `Bearer ${process.env.VITE_HUBSPOT_PRIVATE_APP_KEY}`,
	};

	try {
		const dealsResponse = await axios.get(
			`https://api.hubapi.com/crm/v4/objects/contacts/${hubspotId}/associations/deals?properties=dealname,amount&associations=contacts`,
			{ headers }
		);
		const dealIds = dealsResponse.data.results.map(
			(result) => result.toObjectId
		);

		const clientIds = await Promise.all(
			dealIds.map((deal) =>
				axios
					.get(
						`https://api.hubapi.com/crm/v4/objects/deals/${deal}/associations/contacts`,
						{ headers }
					)
					.then((response) =>
						response.data.results
							.filter(
								(contact) => contact.toObjectId !== hubspotId
							)
							.map((contact) => contact.toObjectId)
					)
			)
		).then((results) => results.flat());
		if (clientIds.length === 0) {
			return { client: [] };
		}
		const clientsRawData = await db
			.collection("clients")
			.where("hs_object_id", "in", clientIds)
			.get();
		const clientsData = clientsRawData.docs.map((doc) =>
			transformClientData(doc)
		);
		return { clients: clientsData };
	} catch (err) {
		console.error(err);
		throw new HttpsError(
			"unknown",
			"An error occurred while fetching assistant data"
		);
	}
});

exports.saveReviewToHubspot = onCall(async (data, context) => {
	const clientId = data.data.clientId;
	const assistantId = data.data.assistantId;
	const review = data.data.review;
	const dealId = data.data.dealId; // Deal ID passed as a parameter
	const clientFullName = data.data.clientFullName;
	const assistantFullName = data.data.assistantFullName;
	const headers = {
		Authorization: `Bearer ${process.env.VITE_HUBSPOT_PRIVATE_APP_KEY}`,
	};

	const formattedReview = `${review.score}/5\n${review.feedback}`;
	try {
		// Post a new ticket to HubSpot
		const ticketData = {
			properties: {
				hs_ticket_priority: "HIGH", // Update this as needed
				subject: `Review for Assistant ${assistantFullName} from Client ${clientFullName}`,
				content: formattedReview,
				hs_pipeline_stage: "1",
				hs_pipeline: "0",
			},
			associations: [
				{
					to: { id: dealId },
					types: [
						{
							associationCategory: "HUBSPOT_DEFINED",
							associationTypeId: 28,
						},
					],
				},
				{
					to: { id: assistantId },
					types: [
						{
							associationCategory: "HUBSPOT_DEFINED",
							associationTypeId: 16,
						},
					],
				},
				{
					to: { id: clientId },
					types: [
						{
							associationCategory: "HUBSPOT_DEFINED",
							associationTypeId: 16,
						},
					],
				},
			],
		};

		const ticketResponse = await axios.post(
			"https://api.hubapi.com/crm/v3/objects/tickets",
			ticketData,
			{ headers }
		);

		return { success: true, ticketId: ticketResponse.data.id };
	} catch (error) {
		console.error("Error saving review to HubSpot:", error.message);
		throw new HttpsError("internal", "Failed to save review to HubSpot.");
	}
});

// modelo completo de user:
// {
//     email: email,
//     emailVerified: false,
//     phoneNumber: "+11234567890",
//     password: data.password,
//     displayName: "John Doe",
//     photoURL: "http://www.example.com/12345678/photo.png",
//     disabled: false
//   }
