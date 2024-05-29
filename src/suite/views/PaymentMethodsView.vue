<template>
	<HeaderSuiteComponent />
	<div class="heroSuite columnAlignCenter">
		<h1>Payment Methods</h1>
		<p>Explicacion</p>
		<v-skeleton-loader
			class="w-75 border mt-5"
			type="image"
			v-if="loading"
		></v-skeleton-loader>
		<div class="w-100 columnAlignCenter mt-5">
			<div
				class="columnAlignCenter ga-5"
				v-if="cards.length > 0 && !loading"
			>
				<div
					v-for="card in cards"
					:key="card.id"
					class="card column bg-radioactive rounded-xl elevation-5 pa-5"
				>
					<p class="cardBrand text-end align-self-end">
						{{ toUpperCase(card.card.brand) }}
					</p>
					<p class="text-end align-self-end">
						{{ capitalizeFirstLetter(card.card.funding) }}
					</p>
					<p class="cardName">{{ card.billing_details.name }}</p>
					<div>
						<p></p>
					</div>
					<p class="w-100 cardNumber text-center my-3">
						**** **** **** {{ card.card.last4 }}
					</p>
					<div>
						<p>
							{{ card.card.exp_month }}/{{ card.card.exp_year }}
						</p>
						<p>
							{{ card.id === defaultCard ? "Default" : "" }}
						</p>
						<v-btn
							icon="mdi-delete"
							variant="text"
							@click="openModal(card.id)"
							v-if="cards.length > 1"
						></v-btn>
					</div>
				</div>
			</div>
			<p v-if="!loading && cards.length === 0">No payment method</p>
		</div>
		<v-dialog v-model="dialog">
			<v-card
				class="align-self-center ga-3 rounded-lg"
				max-width="400"
				title="Do you want to delete this card?"
			>
				<div class="d-flex justify-center ga-3 px-5">
					<v-btn
						class=""
						text="Cancel"
						@click="dialog = false"
					></v-btn>
					<v-btn
						class="bg-radioactive"
						text="Delete"
						@click="deletePaymentMethod()"
					></v-btn>
				</div>
			</v-card>
		</v-dialog>
		<router-link
			class="secondaryButton elevation-5 mt-5"
			:to="routes.ADD_PAYMENT_METHOD"
		>
			Add payment method
		</router-link>
	</div>
</template>

<script>
import HeaderSuiteComponent from "@/suite/components/HeaderSuiteComponent.vue";
import ROUTES_NAMES from "@/router/constants/ROUTES_NAMES";

export default {
	name: "PaymentMethodsView",
	components: {
		HeaderSuiteComponent,
	},
	methods: {
		capitalizeFirstLetter(value) {
			if (!value) return "";
			return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
		},
		toUpperCase(value) {
			if (!value) return "";
			return value.toUpperCase();
		},
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

const routes = ROUTES_NAMES;
const store = useAuthStore();
const userData = useDocument(doc(collection(db, "clients"), store.user.uid));
const loading = ref(true);
const cards = ref([]);
const defaultCard = ref(null);
const dialog = ref(false);
const selectedCard = ref(null);

function openModal(cardId) {
	selectedCard.value = cardId;
	dialog.value = true;
}
async function deletePaymentMethod() {
	const deleteClientPaymentMethod = httpsCallableFromURL(
		functions,
		"https://deleteclientpaymentmethod-cgjqatnysa-uc.a.run.app"
	);
	await deleteClientPaymentMethod({
		customer_id: userData.value.stripeId,
		card_id: selectedCard.value,
	})
		.then((data) => {
			console.log(data);
			const index = cards.value.findIndex(
				(card) => card.id === this.selectedCard
			);
			cards.value.splice(index, 1);
			defaultCard.value = cards.value[0].id;
		})
		.catch((err) => {
			console.log(err);
		});
}

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
					cards.value.sort((a, b) => a.created - b.created);
					defaultCard.value = cards.value[0].id;
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

<style scoped>
.card {
	width: 100%;
}

.card p {
	color: white;
}

.cardBrand {
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
