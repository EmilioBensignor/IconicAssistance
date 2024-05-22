<template>
	<div v-if="loading">Cargando...</div>
	<div id="checkout">
		<!-- Checkout will insert the payment form here -->
	</div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { functions } from "../firebase/init";
import { httpsCallableFromURL } from "firebase/functions";

const stripe = Stripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
const loading = ref(true);

onMounted(async () => {
	const createCheckoutSession = httpsCallableFromURL(
		functions,
		"https://createcheckoutsession-cgjqatnysa-uc.a.run.app"
	);
	await createCheckoutSession()
		.then(async (res) => {
			const data = res.data;
			const clientSecret = data.clientSecret;
			const checkout = await stripe.initEmbeddedCheckout({
				clientSecret,
			});
			checkout.mount("#checkout");
			loading.value = false;
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
