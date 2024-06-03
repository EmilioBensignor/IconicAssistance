<template>
	<div class="column ga-3 my-5">
		<p class="titleSuite text-start">Assistants (<span>{{ assistants.length }}</span>)</p>
		<div v-if="assistants.length > 0">
			<AssistantCardComponent v-for="(assistant, index) in assistants" :key="index" :assistant="assistant" />
		</div>
		<p v-else class="text-start">You currently have no assistants</p>
	</div>
</template>

<script>
import AssistantCardComponent from "@/suite/components/assistants/AssistantCardComponent.vue"

export default {
	name: "AssistantsComponent",
	components: {
		AssistantCardComponent,
	},
	props: {
    assistants: {
      type: Array,
      required: true
    },
  }
};
</script>

<style>
.titleSuite {
	font-size: 1.3rem;
	font-weight: 600;
}
</style>
