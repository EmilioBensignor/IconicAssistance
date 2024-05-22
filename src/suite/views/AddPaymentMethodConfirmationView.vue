<template>
	<HeaderSuiteComponent />
	<div class="heroSuite columnAlignCenter">
		<h1>add payment confirmation</h1>
	</div>
	<p>{{ loading ? "Cargando..." : "Metodo de pago asociado" }}</p>
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
import HeaderSuiteComponent from "@/suite/components/HeaderSuiteComponent.vue";

export default {
	name: "AddPaymentMethodConfirmationView",
	components: {
		HeaderSuiteComponent,
	},
};
</script>
