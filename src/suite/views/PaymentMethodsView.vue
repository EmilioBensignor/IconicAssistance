<template>
	<HeaderSuiteComponent />
	<div class="heroSuite columnAlignCenter">
		<h1>Payment Methods</h1>
		<div v-if="cards.length > 0 && !loading">
			<div v-for="card in cards" :key="card.id">
				<p>{{ card.card.brand }} {{ card.card.funding }}</p>
				<p>Terminada en {{ card.card.last4 }}</p>
			</div>
		</div>
		<p v-if="!loading && cards.length === 0">No payment method</p>
		<p v-if="loading">SKELETON</p>
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
import { onMounted, ref, watchEffect } from "vue";
import { collection, doc } from "firebase/firestore";
import { useDocument } from "vuefire";
import { db, functions } from "../firebase/init";
import { useAuthStore } from "../stores/auth.store";
import { httpsCallableFromURL } from "firebase/functions";

const store = useAuthStore();
const userData = useDocument(doc(collection(db, "clients"), store.user.uid));
const loading = ref(true);
const cards = ref([]);

onMounted(() => {
	watchEffect(async () => {
		if (userData.value && userData.value.stripeId) {
			const stripeId = userData.value.stripeId;
			const getClientPaymentMethods = httpsCallableFromURL(
				functions,
				"https://getclientpaymentmethods-cgjqatnysa-uc.a.run.app"
			);
			await getClientPaymentMethods({ id: stripeId })
				.then((data) => {
					cards.value = data.data.data;
					console.log(cards.value);
					loading.value = false;
				})
				.catch((err) => {
					console.log(err);
					loading.value = false;
				});
		}
	});
});
</script>
