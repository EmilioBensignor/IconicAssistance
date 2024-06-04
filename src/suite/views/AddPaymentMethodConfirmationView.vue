<template>
	<HeaderSuiteComponent />
	<div class="heroSuite columnAlignCenter">
		<h1 class="text-midnight ml-4" v-if="loading">Waiting for Payment Method</h1>
		<h1 class="text-midnight ml-4" v-else>Payment Method Saved</h1>
	</div>
	<div class="w-100 columnAlignCenter mt-5">
		<SpinnerComponent v-if="loading" />
		<div v-else class="confirmation columnAlignCenter rounded-xl elevation-5 pb-3">
			<div class="tick-container">
				<div class="tick"></div>
			</div>
			<p class="w-100 text-center">Your payment method has been saved.</p>
			<router-link class="secondaryButton elevation-5 mt-5" :to="routes.SUITE">Go back to Dashboard</router-link>
		</div>
	</div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { functions } from "../firebase/init";
import { httpsCallableFromURL } from "firebase/functions";
import { useAuthStore } from "../stores/auth.store";

//TODO: agregar estado de error
const store = useAuthStore();
const loading = ref(false);
onMounted(async () => {
	loading.value = true;
	const params = new Proxy(new URLSearchParams(window.location.search), {
		get: (searchParams, prop) => searchParams.get(prop),
	});
	const payment_id = params.session_id;
	if (!payment_id) {
		loading.value = false;
		return;
	}
	const attatchPaymentMethod = httpsCallableFromURL(
		functions,
		"https://attatchpaymentmethod-cgjqatnysa-uc.a.run.app"
	);
	await attatchPaymentMethod({ session: payment_id, userId: store.user.uid })
		.then((res) => {
			console.log(res);
			loading.value = false;
			console.log("Se asocio el metodo de pago");
		})
		.catch((error) => {
			console.log(error);
			loading.value = false;
		});
});
</script>

<script>
import ROUTES_NAMES from "@/router/constants/ROUTES_NAMES";
import HeaderSuiteComponent from "@/suite/components/HeaderSuiteComponent.vue";
import SpinnerComponent from "@/suite/components/loader/SpinnerComponent.vue";

export default {
	name: "AddPaymentMethodConfirmationView",
	components: {
		HeaderSuiteComponent,
		SpinnerComponent,
	},
	data(){
		return{
			routes: ROUTES_NAMES
		}
	}
};
</script>

<style scoped>
.confirmation {
	width: 60%;
	border: 3px solid #373ae6;
}

.tick-container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100px;
	width: 100px;
}

.tick {
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-color: #373ae6;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	animation: pop-in 0.5s ease-out;
}

.tick:after {
	content: '';
	position: absolute;
	width: 15px;
	height: 25px;
	border: solid white;
	border-width: 0 5px 5px 0;
	transform: rotate(45deg);
}

@keyframes pop-in {
	0% {
		transform: scale(0);
	}

	100% {
		transform: scale(1);
	}
}

@keyframes draw-tick {
	0% {
		width: 0;
		height: 0;
	}

	100% {
		width: 15px;
		height: 25px;
	}
}
</style>