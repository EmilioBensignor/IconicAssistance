<template>
	<HeaderSuiteComponent />
	<div class="heroSuite columnAlignCenter">
		<h1 class="text-white ml-4">Payment Methods</h1>
		<p class="text-lila my-3">
			If you wish to modify or remove the payment method, you need to add
			a new one first and then delete the one that will no longer be used.
		</p>
		<v-skeleton-loader
			class="w-50 bg-lightViolet border mt-5"
			type="image"
			v-if="loading"
		></v-skeleton-loader>
		<div class="w-100 columnAlignCenter mt-5">
			<div
				class="rowCenter justify-center flex-wrap ga-5"
				v-if="cards.length > 0 && !loading"
			>
				<div v-for="card in cards" :key="card.id" class="cardContainer">
					<div v-if="card.id === defaultCard" class="d-flex ml-5">
						<p
							class="w-auto bg-suiteGray rounded-t-lg elevation-3 py-1 px-2"
						>
							Default
						</p>
					</div>
					<div
						class="card column bg-radioactive rounded-xl elevation-5 pa-5"
					>
						<p class="cardBrand text-end align-self-end">
							{{ toUpperCase(card.card.brand) }}
						</p>
						<p class="text-end align-self-end">
							{{ capitalizeFirstLetter(card.card.funding) }}
						</p>
						<p class="cardName">{{ card.billing_details.name }}</p>
						<p class="w-100 cardNumber text-center my-3">
							**** **** **** {{ card.card.last4 }}
						</p>
						<p>
							{{ card.card.exp_month }}/{{ card.card.exp_year }}
						</p>
						<v-btn
							class="h-auto w-auto align-self-end"
							icon="mdi-delete"
							variant="text"
							@click="openModal(card.id)"
							v-if="cards.length > 1"
						></v-btn>
					</div>
				</div>
			</div>
			<p class="text-lila" v-if="!loading && cards.length === 0">No payment method</p>
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
						:loading="loadingDelete"
					></v-btn>
				</div>
			</v-card>
		</v-dialog>
		<router-link
			class="secondaryButton bg-btnViolet elevation-5 mt-5"
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
import { httpsCallable, httpsCallableFromURL } from "firebase/functions";

const routes = ROUTES_NAMES;
const store = useAuthStore();
const userData = useDocument(doc(collection(db, "clients"), store.user.uid));
const loading = ref(true);
const cards = ref([]);
const defaultCard = ref(null);
const dialog = ref(false);
const selectedCard = ref(null);
const loadingDelete = ref(false);

function openModal(cardId) {
	selectedCard.value = cardId;
	dialog.value = true;
}
async function deletePaymentMethod() {
	loadingDelete.value = true;
	const deleteClientPaymentMethod = httpsCallable(
		functions,
		"deleteClientPaymentMethod"
	);
	await deleteClientPaymentMethod({
		card_id: selectedCard.value,
	})
		.then((data) => {
			console.log(data);
			const index = cards.value.findIndex(
				(card) => card.id === this.selectedCard
			);
			cards.value.splice(index, 1);
			defaultCard.value = cards.value[0].id;
			dialog.value = false;
			loadingDelete.value = false;
		})
		.catch((err) => {
			console.log(err);
			loadingDelete.value = false;
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

@media only screen and (min-width: 400px) {
	.card {
		max-width: 329px;
		width: 329px;
	}
}
</style>
