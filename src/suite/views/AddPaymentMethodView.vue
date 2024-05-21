<template>
	<div id="checkout">
		<!-- Checkout will insert the payment form here -->
	</div>
</template>

<script setup>
import { onMounted } from "vue";
import { functions } from "../firebase/init";
import { httpsCallableFromURL } from "firebase/functions";
import { useAuthStore } from "../stores/auth.store";

const stripe = Stripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

onMounted(async () => {
	console.log("hola");
	const createCheckoutSession = httpsCallableFromURL(
		functions,
		"https://createcheckoutsession-cgjqatnysa-uc.a.run.app"
	);
	await createCheckoutSession()
		.then(async (res) => {
			const data = res.data;
			console.log(data);
			const clientSecret = data.clientSecret;
			const checkout = await stripe.initEmbeddedCheckout({
				clientSecret,
			});
			checkout.mount("#checkout");
		})
		.catch((error) => {
			console.log(error);
		});
});
</script>

<script>
import HeaderSuiteComponent from "@/suite/components/HeaderSuiteComponent.vue";

export default {
	name: "AddPaymentMethodView",
	components: {
		HeaderSuiteComponent,
	},
};
</script>
