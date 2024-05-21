<template>
	<div>
		<h1>add payment confirmation</h1>
		<p>{{ loading ? "Cargando..." : "Metodo de pago asociado" }}</p>
	</div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { functions } from "../firebase/init";
import { httpsCallableFromURL } from "firebase/functions";

const loading = ref(false);
onMounted(async () => {
	loading.value = true;
	const params = new Proxy(new URLSearchParams(window.location.search), {
		get: (searchParams, prop) => searchParams.get(prop),
	});
	const payment_id = params.session_id;
	const attatchPaymentMethod = httpsCallableFromURL(
		functions,
		"https://attatchpaymentmethod-cgjqatnysa-uc.a.run.app"
	);
	await attatchPaymentMethod({
		data: { session: payment_id, userId: userId.value },
	})
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
import HeaderSuiteComponent from "@/suite/components/HeaderSuiteComponent.vue";
import { userId } from "../services/auth.service";

export default {
	name: "AddPaymentMethodConfirmationView",
	components: {
		HeaderSuiteComponent,
	},
};
</script>
