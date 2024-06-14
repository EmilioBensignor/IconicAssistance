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
	})
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
		.update({ hasCCOnFile: 'true' })
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

exports.getClientPaymentMethods = onRequest((req, res) => {
	cors(req, res, async () => {
		res.set("Access-Control-Allow-Methods", "POST");
		res.set("Access-Control-Allow-Headers", "Content-Type");
		res.set("Access-Control-Max-Age", "3600");
		const data = req.body.data;
		const stripeId = data.id;
		console.log(stripeId);
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
		const dealsResponse = await axios.get(
			`https://api.hubapi.com/crm/v4/objects/contacts/${hubspotId}/associations/deals?properties=dealname,amount&associations=contacts`,
			{ headers }
		);
		const dealIds = dealsResponse.data.results.map(
			(result) => result.toObjectId
		);

		const assistantIds = await Promise.all(
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

		const assistantsData = await Promise.all(
			assistantIds.map((assistantId) =>
				axios
					.get(
						`https://api.hubapi.com/crm/v3/objects/contacts/${assistantId}`,
						{
							headers,
							params: {
								properties: "phone, firstname, lastname, email",
							},
						}
					)
					.then((response) => response.data)
			)
		);

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
									"hs_amount_billed,hs_balance_due, hs_last_sent_date, hs_due_date,hs_number",
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
