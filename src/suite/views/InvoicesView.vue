<template>
	<HeaderSuiteComponent />
	<div class="heroSuite columnAlignCenter">
		<h1 class="text-midnight ml-4">Invoices</h1>
	</div>
	<div class="suiteComponents mt-5">
		<v-skeleton-loader
			class="w-50 px-3"
			type="card"
			v-if="store.assistants === null"
		></v-skeleton-loader>
		<div
			class="rowCenter flex-wrap ga-5"
			v-if="
				store.invoices !== null &&
				store.invoices.data.invoices.length > 0
			"
		>
			<div
				v-for="(invoice, index) in store.invoices.data.invoices"
				:key="index"
				class="elevation-5"
			>
				<p>{{ invoice.properties.hs_amount_billed }}</p>
				<p>{{ invoice.properties.hs_balance_due }}</p>
			</div>
		</div>
		<p
			v-if="
				store.invoices !== null &&
				store.invoices.data.invoices.length === 0
			"
			class="text-start"
		>
			You currently have no invoices
		</p>
	</div>
</template>

<script>
import HeaderSuiteComponent from "@/suite/components/HeaderSuiteComponent.vue";
import { useAuthStore } from "../stores/auth.store";

export default {
	name: "InvoicesView",
	components: {
		HeaderSuiteComponent,
	},
	data() {
		return {
			store: useAuthStore(),
		};
	},
};
</script>
