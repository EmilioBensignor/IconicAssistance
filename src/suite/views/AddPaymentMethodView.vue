<template>
	<HeaderSuiteComponent />
	<div class="heroSuite columnAlignCenter">
		<h1 class="text-midnight ml-4">Add Payment Method</h1>
	</div>
	<SpinnerComponent v-if="loading" />
	<div class="columnAlignCenter mt-5">
		<div class="w-75">
			<v-text-field label="First name" v-model="firstName"></v-text-field>
		</div>
		<div class="w-75">
			<v-text-field label="Last name" v-model="lastName"></v-text-field>
		</div>
		<div id="card-element" class="w-75 rounded-xl elevation-3 pa-5">
			<!-- Stripe Elements will insert the payment form here -->
		</div>
		<p class="w-75 text-red text-center mt-5" v-if="errorMsg">
			{{ errorMsg }}
		</p>
		<SecondaryBtnComponent
			id="submit"
			@click.prevent="getSetupIntent()"
			v-if="!loading"
			text="Add Payment Method"
			:loading="loadingAttach"
		></SecondaryBtnComponent>
	</div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { functions } from "../firebase/init";
import { httpsCallableFromURL } from "firebase/functions";

const stripe = Stripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
const loading = ref(true);
const loadingAttach = ref(false);
const clientSecret = ref(null);
const store = useAuthStore();
const cardElement = ref(null);
const errorMsg = ref(null);
const firstName = ref("");
const lastName = ref("");
const style = {
	base: {
		color: "#120d40",
		fontFamily: "Poppins, sans-serif",
		fontSize: "1.2rem",
		"::placeholder": {
			color: "#120d40",
		},
	},
	invalid: {
		color: "#fa755a",
		iconColor: "#fa755a",
	},
};
onMounted(async () => {
	const createSetupIntent = httpsCallableFromURL(
		functions,
		"https://createsetupintent-cgjqatnysa-uc.a.run.app"
	);
	const res = await createSetupIntent({ userId: store.user.uid }).catch(
		(error) => {
			console.log(error);
		}
	);
	clientSecret.value = res.data.clientSecret;
	const elements = stripe.elements({
		clientSecret: clientSecret.value,
		currency: "usd",
	});
	cardElement.value = elements.create("card", {
		clientSecret: clientSecret.value,
		style,
	});
	cardElement.value.mount("#card-element");
	loading.value = false;
});
async function getSetupIntent() {
	loadingAttach.value = true;
	errorMsg.value = null;
	if (firstName.value.length === 0 || lastName.value.length === 0) {
		errorMsg.value = "First and last name are required";
		loadingAttach.value = false;
		return;
	}
	const { setupIntent, error } = await stripe.confirmCardSetup(
		clientSecret.value,
		{
			payment_method: {
				card: cardElement.value,
				billing_details: {
					name: `${firstName.value} ${lastName.value}`,
				},
			},
		}
	);
	if (error) {
		errorMsg.value = error.message;
		loadingAttach.value = false;
		return;
	} else {
		const attatchPaymentMethod = httpsCallableFromURL(
			functions,
			"https://attatchpaymentmethod-cgjqatnysa-uc.a.run.app"
		);
		await attatchPaymentMethod({
			setup_intent: setupIntent.id,
			userId: store.user.uid,
		})
			.then((res) => {
				console.log(res);
				loadingAttach.value = false;
				router.push(ROUTES_NAMES.ADD_PAYMENT_METHOD_CONFIRMATION);
			})
			.catch((error) => {
				console.log(error);
				loadingAttach.value = false;
			});
	}
}
</script>

<script>
import HeaderSuiteComponent from "@/suite/components/HeaderSuiteComponent.vue";
import SpinnerComponent from "@/suite/components/loader/SpinnerComponent.vue";
import { useAuthStore } from "../stores/auth.store";
import SecondaryBtnComponent from "../components/buttons/SecondaryBtnComponent.vue";
import router from "@/router";
import ROUTES_NAMES from "@/router/constants/ROUTES_NAMES";

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
