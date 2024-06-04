<template>
	<HeaderSuiteComponent />
	<div class="heroSuite columnAlignCenter">
		<h1 class="text-midnight ml-4">Assistants</h1>
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
				store.assistants !== null &&
				store.assistants.data.assistants.length > 0
			"
		>
			<AssistantCardComponent
				v-for="(assistant, index) in store.assistants.data.assistants"
				:key="index"
				:assistant="assistant"
			/>
		</div>
		<p
			v-if="
				store.assistants !== null &&
				store.assistants.data.assistants.length === 0
			"
			class="text-start"
		>
			You currently have no assistants
		</p>
	</div>
</template>

<script>
import { useAuthStore } from "@/suite/stores/auth.store";
import HeaderSuiteComponent from "@/suite/components/HeaderSuiteComponent.vue";
import AssistantCardComponent from "@/suite/components/assistants/AssistantCardComponent.vue";

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
