<template>
	<HeaderSuiteComponent />
	<div class="heroSuite columnAlignCenter">
		<h1 class="text-midnight ml-4">Assistant Actions</h1>
	</div>
	<div class="suiteComponents">
		<h2 v-if="assistantData">{{ assistantData.firstname }} Tasks</h2>
		<v-skeleton-loader
			class="w-75 mt-5"
			v-if="!assistantData && loading"
			type="card"
		></v-skeleton-loader>
		<div class="mt-5" v-if="assistantData && !loading">
			<AssistantTaskTableComponent
				:tasks="assistantData.tasks"
				:assistantId="assistantData.id"
			/>
		</div>
	</div>
</template>

<script>
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/init";
import router from "@/router";
import ROUTES_NAMES from "@/router/constants/ROUTES_NAMES";
import { formatDate } from "../services/format.service";

import HeaderSuiteComponent from "../components/HeaderSuiteComponent.vue";
import AssistantTaskTableComponent from "../components/assistants/AssistantTaskTableComponent.vue";
import { useAuthStore } from "../stores/auth.store";

export default {
	data() {
		return {
			assistantId: this.$route.params.id,
			assistantData: null,
			loading: true,
			store: useAuthStore(),
		};
	},
	components: {
		HeaderSuiteComponent,
		AssistantTaskTableComponent,
	},

	watch: {
		"store.assistants": {
			handler(newValue) {
				if (newValue && newValue.data && newValue.data.assistants) {
					this.assistantData = newValue.data.assistants.find(
						(assistant) => assistant.id === this.assistantId
					);
					if (this.assistantData) {
						this.loading = false;
					} else {
						router.push(ROUTES_NAMES.ASSISTANTS);
					}
				}
			},
			immediate: true, // Run handler immediately if the data is already present
		},
	},
	setup() {
		formatDate();
	},
};
</script>
