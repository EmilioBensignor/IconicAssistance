<template>
	<HeaderSuiteComponent />
	<div class="bg-suiteBg">
		<div class="heroSuite columnAlignCenter">
			<v-skeleton-loader
				class="w-75 align-self-start bg-lightViolet ml-7"
				type="heading"
				v-if="!userData || !userData.firstname"
			></v-skeleton-loader>
			<h1 class="text-white ml-4" v-else>
				Welcome,
				<span>{{ userData.firstname }}</span
				>!
			</h1>
		</div>
		<SkeletonSuiteComponent
			class="bg-suiteBg"
			v-if="store.assistants === null || store.invoices === null"
		/>
		<div class="suiteComponents column ga-10 pb-5 my-5" v-else>
			<SuiteActionsComponent
				:hasCCOnFile="userData.hasCCOnFile === 'true'"
			/>
			<AssistantsComponent
				:assistants="store.assistants.data.assistants"
			/>
			<NextInvoiceComponent
				v-if="store.invoices !== null"
				:nextInvoice="store.invoices.data.invoices[0]"
				:userData="userData"
				:formatCurrency="formatCurrency"
				:formatDate="formatDate"
			/>
		</div>
	</div>
</template>

<script>
import ROUTES_NAMES from "@/router/constants/ROUTES_NAMES";
import HeaderSuiteComponent from "@/suite/components/HeaderSuiteComponent.vue";
import SkeletonSuiteComponent from "@/suite/components/skeleton/SkeletonSuiteComponent.vue";
import SuiteActionsComponent from "@/suite/components/suite/SuiteActionsComponent.vue";
import AssistantsComponent from "@/suite/components/suite/AssistantsComponent.vue";
import NextInvoiceComponent from "@/suite/components/suite/NextInvoiceComponent.vue";
import { formatCurrency, formatDate } from "../services/format.service";
import { useAuthStore } from "@/suite/stores/auth.store";

export default {
	name: "SuiteView",
	components: {
		HeaderSuiteComponent,
		SkeletonSuiteComponent,
		SuiteActionsComponent,
		AssistantsComponent,
		NextInvoiceComponent,
	},
	data() {
		return {
			routes: ROUTES_NAMES,
			store: useAuthStore(),
		};
	},
	setup() {
		formatCurrency(), formatDate();
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
p {
	color: #120d40;
}
</style>
