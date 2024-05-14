const { onRequest } = require("firebase-functions/v2/https");
const stripe = require("stripe")(process.env.VITE_STRIPE_SECRET_KEY);
const admin = require("firebase-admin");
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
		ui_mode: "embedded",
		return_url:
			"https://www.iconicassistants.com/suite/add-payment-method-confirmation?session_id={CHECKOUT_SESSION_ID}",
	});
	res.send({ data: { clientSecret: session.client_secret } });
});

exports.attatchPaymentMethod = onRequest({ cors: true }, async (req, res) => {
	res.set("Access-Control-Allow-Origin", "*");
	const sessions = await stripe.checkout.sessions.list();
	const index = sessions.findIndex((e) => {
		return e.id === req.data;
	});
	const data = sessions[index];
	const clientEmail = data.customer_details.email;
	const setupIntentID = data.setup_intent;
	const customerId = await stripe.customers.list({
		email: clientEmail,
		limit: 1,
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
		{ customer: customerId.data[0].id }
	);
	res.send({ data: attachedPaymentMethod });
});

exports.getHubspotData = onRequest({ cors: true }, async (req, res) => {
	res.set("Access-Control-Allow-Origin", "*");
	const data = req.body;
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
		res.send({ data: "Error: falta usuario y/o contraseña" });
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
			res.send({ data: "Usuario no autorizado" });
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
			res.send({ data: "Error creando usuario" });
		});

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
			res.send({ data: "Usuario creado" });
		})
		.catch(() => {
			res.send({ data: "Error agregando usuario a base de datos" });
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
