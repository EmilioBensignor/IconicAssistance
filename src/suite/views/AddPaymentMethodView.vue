<template>
	<HeaderSuiteComponent />
	<div class="heroSuite columnAlignCenter">
		<h1>Add Payment Method</h1>
	</div>
	<SpinnerComponent v-if="loading" />
	<div class="bg-radioactive">
		<div id="checkout" class="bg-radioactive pt-10">
			<!-- Checkout will insert the payment form here -->
		</div>
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
import SpinnerComponent from "@/suite/components/loader/SpinnerComponent.vue";

export default {
	name: "AddPaymentMethodView",
	components: {
		HeaderSuiteComponent,
		SpinnerComponent,
	},
};
</script>

<style>
#checkout iframe {
	height: 100vh !important;
}
</style>