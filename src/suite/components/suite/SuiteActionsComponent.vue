<template>
	<div
		v-if="!hasCCOnFile"
		class="action bg-suiteGray column ga-3 rounded-xl elevation-4 pa-5 my-5"
	>
		<p class="titleAction text-start font-weight-bold">
			Payment Method Required
		</p>
		<p class="text-start">
			Submit your payment method for future transactions
		</p>
		<router-link
			class="secondaryButton elevation-4"
			:to="routes.ADD_PAYMENT_METHOD"
			>ADD PAYMENT METHOD</router-link
		>
	</div>
</template>

<script>
import ROUTES_NAMES from "@/router/constants/ROUTES_NAMES";

export default {
	name: "SuiteActionsComponent",
	props: {
		hasCCOnFile: {
			type: Boolean,
			required: true,
		},
	},
	data() {
		return {
			routes: ROUTES_NAMES,
		};
	},
};
</script>

<style scoped>
.action p {
	width: 100% !important;
}

.titleAction {
	font-size: 1.2rem;
}

.secondaryButton {
	font-size: 1rem;
	padding: 4%;
}

/* SM */
@media only screen and (min-width: 400px) {
	.action {
		max-width: 350px;
	}
}
</style>
