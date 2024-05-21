const { onRequest } = require("firebase-functions/v2/https");
const stripe = require("stripe")(process.env.VITE_STRIPE_SECRET_KEY);
const admin = require("firebase-admin");
const { documentId } = require("firebase/firestore");
try {
	admin.initializeApp();
} catch (error) {
	console.log(error);
}
const db = admin.firestore();

exports.createCheckoutSession = onRequest({ cors: true }, async (req, res) => {
	res.set("Access-Control-Allow-Origin", "*");
	const session = await stripe.checkout.sessions.create({
		payment_method_types: ["card"],
		mode: "setup",
		customer: req.data,
		ui_mode: "embedded",
		return_url:
			"https://www.iconicassistants.com/suite/add-payment-method-confirmation?session_id={CHECKOUT_SESSION_ID}",
	});
	res.send({ data: { clientSecret: session.client_secret } });
});

exports.attatchPaymentMethod = onRequest({ cors: true }, async (req, res) => {
	res.set("Access-Control-Allow-Origin", "*");
	let customerId;
	const data = await stripe.checkout.sessions.retrieve(req.data[0]);

	const setupIntentID = data.setup_intent;

	await db
		.collection("clients")
		.doc(req.data[1])
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
		{ customer: customerId }
	);
	res.send({ data: attachedPaymentMethod });
});

exports.getHubspotData = onRequest({ cors: true }, async (req, res) => {
	res.set("Access-Control-Allow-Origin", "*");
	const data = req.body;
	data.hasCCOnFile = false;
	try {
		await db
			.collection("allowedUsers")
			.add(data)
			.then((response) => {
				res.send({ data: response });
			});
	} catch (error) {
		console.log(error);
	}
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
	if (!customerId) {
		res.send({ data: "Error: no stripe customer with that email" });
	} else {
		userInformation.stripeId = customerId[0].id;
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
