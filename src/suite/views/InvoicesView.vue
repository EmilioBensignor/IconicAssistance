<template>
	<HeaderSuiteComponent />
	<div class="heroSuite columnAlignCenter">
		<h1 class="text-white ml-4">Invoices</h1>
	</div>
	<div class="suiteComponents mt-5">
		<v-skeleton-loader
			class="w-75 bg-suiteBg px-3"
			type="card"
			v-if="store.assistants === null"
		></v-skeleton-loader>
		<div
			class="column ga-7"
			v-if="
				store.invoices !== null &&
				store.invoices.data.invoices.length > 0
			"
		>
			<p>Next invoice</p>
			<div>
				<div class="d-flex ml-5">
					<p class="w-auto rounded-t-lg py-1 px-2 bg-white">
						{{
							new Date(next_invoice.properties.hs_due_date) >
							new Date()
								? "Due"
								: "Past due"
						}}
					</p>
				</div>
				<div
					class="w-100 bg-white column ga-5 rounded-lg elevation-5 pa-5"
				>
					<div class="rowCenter">
						<v-skeleton-loader
							v-if="!userData || !userData.firstname"
							type="text"
						></v-skeleton-loader>
						<p v-else class="cardLabel">{{ userData.firstname }}</p>
						<p class="text-end">
							{{
								formatDate(next_invoice.properties.hs_due_date)
							}}
						</p>
					</div>
					<div>
						<p class="cardLabel">Amount Billed:</p>
						<p>
							{{
								formatCurrency(
									next_invoice.properties.hs_amount_billed
								)
							}}
						</p>
						<p>{{ next_invoice.properties.invoice_status }}</p>
					</div>
				</div>
			</div>
			<p>Paid invoices</p>
			<div v-for="(invoice, index) in filtered_invoices" :key="index">
				<div class="d-flex ml-5">
					<p
						class="w-auto rounded-t-lg py-1 px-2 bg-white"
						v-if="invoice.properties.hs_invoice_status === 'open'"
					>
						{{
							new Date(invoice.properties.hs_due_date) >
							new Date()
								? "Due"
								: "Past due"
						}}
					</p>
					<p class="w-auto rounded-t-lg py-1 px-2 bg-white" v-else>
						{{
							invoice.properties.hs_invoice_status[0].toUpperCase() +
							invoice.properties.hs_invoice_status.slice(1)
						}}
					</p>
				</div>
				<div
					class="w-100 bg-white column ga-5 rounded-lg elevation-5 pa-5"
				>
					<div class="rowCenter">
						<v-skeleton-loader
							v-if="!userData || !userData.firstname"
							type="text"
						></v-skeleton-loader>
						<p v-else class="cardLabel">{{ userData.firstname }}</p>
						<p class="text-end">
							{{ formatDate(invoice.properties.hs_due_date) }}
						</p>
					</div>
					<div>
						<p class="cardLabel">Amount Billed:</p>
						<p>
							{{
								formatCurrency(
									invoice.properties.hs_amount_billed
								)
							}}
						</p>
						<p>{{ invoice.properties.invoice_status }}</p>
					</div>
				</div>
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
import { formatCurrency, formatDate } from "../services/format.service";
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
	setup() {
		formatCurrency(), formatDate();
	},
	computed: {
		filtered_invoices() {
			return this.store.invoices
				? this.store.invoices.data.invoices.filter(
						(inv) =>
							!["voided", "open"].includes(
								inv.properties.hs_invoice_status
							)
				  )
				: [];
		},
		next_invoice() {
			return this.store.invoices
				? this.store.invoices.data.invoices.find(
						(inv) => inv.properties.hs_invoice_status === "open"
				  )
				: [];
		},
	},
};
</script>

<script setup>
import { collection, doc } from "firebase/firestore";
import { useDocument } from "vuefire";
import { db } from "../firebase/init";
const store = useAuthStore();
const userData = useDocument(doc(collection(db, "clients"), store.user.uid));
</script>

<style scoped>
.futureInvoice {
	max-width: 300px;
	border: 3px solid #373ae6;
}

.pastInvoice {
	max-width: 300px;
	border: 3px solid #8c909c;
}

.cardLabel {
	font-weight: 600;
	font-size: 1.1rem;
}
</style>
