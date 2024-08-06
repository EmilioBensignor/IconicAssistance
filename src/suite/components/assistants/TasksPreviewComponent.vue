<template>
	<div v-for="(task, index) in assistant.tasks" :key="index">
		<p>{{ task.name }}</p>
	</div>
</template>
<script>
export default {
	data() {
		return {};
	},
	props: {
		assistant: {
			type: Object,
			required: true,
		},
	},
};
</script>
