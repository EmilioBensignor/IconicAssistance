<template>
	<HeaderSuiteComponent />
	<div class="heroSuite columnAlignCenter">
		<h1>Payment Methods</h1>
		<v-skeleton-loader class="w-75 border mt-5" type="image" v-if="loading"></v-skeleton-loader>
		<div class="w-100 columnAlignCenter mt-5">
			<div class="columnAlignCenter" v-if="cards.length > 0 && !loading">
				<div v-for="card in cards" :key="card.id" class="card column bg-radioactive rounded-xl elevation-5 pa-5">
					<p class="cardBrand text-end align-self-end">{{ toUpperCase(card.card.brand) }}</p>
					<p class="text-end align-self-end">{{ capitalizeFirstLetter(card.card.funding) }}</p>
					<p class="cardName">{{ card.billing_details.name }}</p>
					<div>
						<p></p>
					</div>
					<p class="w-100 cardNumber text-center my-3">**** **** **** {{ card.card.last4 }}</p>
					<p>{{ card.card.exp_month }}/{{ card.card.exp_year }}</p>
				</div>
			</div>
			<p v-if="!loading && cards.length === 0">No payment method</p>
		</div>
	</div>
</template>

<script>
import HeaderSuiteComponent from "@/suite/components/HeaderSuiteComponent.vue";

export default {
	name: "PaymentMethodsView",
	components: {
		HeaderSuiteComponent,
	},
	methods: {
		capitalizeFirstLetter(value) {
			if (!value) return '';
			return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
		},
		toUpperCase(value) {
			if (!value) return '';
			return value.toUpperCase();
		}
	}
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
					console.log(data);
					cards.value = data.data.data;
					loading.value = false;
					console.log(cards.value)
				})
				.catch((err) => {
					console.log(err);
					loading.value = false;
				});
		}
	});
});
</script>

<style scoped>
.card {
	width: 100%;
}

.card p {
	color: white;
}

.cardBrand{
	font-size: 1.4rem;
}

.cardName {
	font-size: 1.2rem;
}

.cardNumber {
	font-size: 1rem;
	letter-spacing: 0.3rem;
}
</style>