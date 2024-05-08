const {onRequest} = require("firebase-functions/v2/https");
const stripe = require("stripe")(process.env.VITE_STRIPE_SECRET_KEY);


exports.createCheckoutSession = onRequest( async(req, res) => {
    res.set('Access-Control-Allow-Origin', '*')
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'setup',
        ui_mode: 'embedded',
        return_url: 'https://www.iconicassistants.com/suite/add-payment-method-confirmation?session_id={CHECKOUT_SESSION_ID}'
      });
      res.send({data:{clientSecret: session.client_secret}});

});

exports.attatchPaymentMethod = onRequest(async(req, res) => {
    res.set('Access-Control-Allow-Origin', '*')
    const sessions = await stripe.checkout.sessions.list();
    const index = sessions.findIndex((e)=>{
        return e.id === req.data
    });
    const data = sessions[index]
    const clientEmail = data.customer_details.email
    const setupIntentID = data.setup_intent
    const customerId = await stripe.customers.list({ email: clientEmail, limit: 1 })
    if (!customerId) {
        res.send({data:'Error: no stripe customer with that id'})
    }
    const setupIntent = await stripe.setupIntents.retrieve(setupIntentID);
    const paymentMethod = await stripe.paymentMethods.retrieve(setupIntent.payment_method);
    const attachedPaymentMethod = await stripe.paymentMethods.attach(
        paymentMethod.id,
        {customer: customerId.data[0].id}
      );
  res.send({data:attachedPaymentMethod});
});
