<template>
	<HeaderSuiteComponent />
	<div class="heroSuite columnAlignCenter">
		<h1 class="ml-4">Assistants</h1>
	</div>
	<div>
		<div v-if="store.assistants.data.assistants.length > 0">
			<AssistantCardComponent v-for="(assistant, index) in store.assistants.data.assistants" :key="index" :assistant="assistant" />
		</div>
		<p v-else class="text-start">You currently have no assistants</p>
	</div>
</template>

<script>
import { useAuthStore } from "@/suite/stores/auth.store";
import HeaderSuiteComponent from "@/suite/components/HeaderSuiteComponent.vue";
import AssistantCardComponent from "@/suite/components/assistants/AssistantCardComponent.vue"

export default {
	name: "AssistantsView",
	components: {
		HeaderSuiteComponent,
		AssistantCardComponent,
	},
	data() {
		return {
			store: useAuthStore(),
		};
	},
};
</script>