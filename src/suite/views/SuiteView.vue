<template>
	<HeaderSuiteComponent />
	<div class="heroSuite column">
		<v-skeleton-loader
			class="w-75 px-3"
			type="heading"
			v-if="!userData || !userData.firstname"
		></v-skeleton-loader>
		<h1 class="pl-7 pr-1" v-else>
			Welcome,
			<span>{{ userData.firstname }}</span
			>!
		</h1>
	</div>
	<v-skeleton-loader
		class="w-75 border mx-7"
		v-if="!userData || !userData.firstname"
		type="image"
	></v-skeleton-loader>
	<SuiteActionsComponent :hasCCOnFile="userData.hasCCOnFile" v-else />
	<v-skeleton-loader
		class="w-75 px-3"
		type="article"
		v-if="!userData || !userData.firstname"
	></v-skeleton-loader>
	<ActiveTeamsComponent v-else />
	<v-skeleton-loader
		class="w-75 px-3"
		type="article"
		v-if="!userData || !userData.firstname"
	></v-skeleton-loader>
	<AssistantsComponent v-else />
</template>

<script>
import ROUTES_NAMES from "@/router/constants/ROUTES_NAMES";
import HeaderSuiteComponent from "@/suite/components/HeaderSuiteComponent.vue";
import SuiteActionsComponent from "@/suite/components/suite/SuiteActionsComponent.vue";
import ActiveTeamsComponent from "@/suite/components/suite/ActiveTeamsComponent.vue";
import AssistantsComponent from "@/suite/components/suite/AssistantsComponent.vue";
import { useAuthStore } from "@/suite/stores/auth.store";

export default {
	name: "SuiteView",
	components: {
		HeaderSuiteComponent,
		SuiteActionsComponent,
		ActiveTeamsComponent,
		AssistantsComponent,
	},
	data() {
		return {
			routes: ROUTES_NAMES,
			store: useAuthStore(),
		};
	},
};
</script>

<script setup>
import { collection, doc } from "firebase/firestore";
import { useDocument } from "vuefire";
import { db } from "../firebase/init";
const store = useAuthStore();
const userData = useDocument(doc(collection(db, "clients"), store.user.uid));
console.log(userData);
</script>
