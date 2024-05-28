<template>
	<HeaderSuiteComponent />
	<div class="heroSuite columnAlignCenter">
		<h1>Payment Methods</h1>
	</div>
</template>

<script>
import HeaderSuiteComponent from "@/suite/components/HeaderSuiteComponent.vue";

export default {
	name: "PaymentMethodsView",
	components: {
		HeaderSuiteComponent,
	},
};
</script>
<script setup>
import { onMounted, onUpdated, ref, watchEffect } from "vue";
import { collection, doc } from "firebase/firestore";
import { useDocument } from "vuefire";
import { db, functions } from "../firebase/init";
import { useAuthStore } from "../stores/auth.store";
import { httpsCallableFromURL } from "firebase/functions";

const store = useAuthStore();
const userData = useDocument(doc(collection(db, "clients"), store.user.uid));

onMounted(() => {
	// Watch for changes in the userData ref
	watchEffect(async () => {
		if (userData.value && userData.value.stripeId) {
			// Log the current data
			console.log(userData.value.stripeId);
			const getClientPaymentMethods = httpsCallableFromURL(
				functions,
				"https://getclientpaymentmethods-cgjqatnysa-uc.a.run.app"
			);
			await getClientPaymentMethods({ id: userData.value.stripeId }).then(
				(data) => {
					console.log(data);
				}
			);
		}
	});
});

// onMounted(async () => {
// 	console.log(userData.data);

// 	if (userData.value && userData.value.stripeId) {
// 		const paymentMethods = await stripe.paymentMethods.list({
// 			customer: userData.value.stripeId,
// 			type: "card",
// 		});
// 		console.log(paymentMethods);
// 	}
// });
</script>
