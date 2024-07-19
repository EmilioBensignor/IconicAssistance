<template>
	<div class="toDoElement">
		<div class="rowCenter ga-3 text-midnight">
			<v-checkbox
				v-model="task.status"
				:label="task.name"
				@click.prevent="moveTask(task)"
			></v-checkbox>
		</div>
		<div class="rowCenter">
			<p>{{ task.due_date.split("T")[0] }}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		task: {
			type: Object,
			required: true,
		},
		moveTask: {
			type: Function,
			required: true,
		},
	},
};
</script>

<style>
.toDoElement .v-input__details {
	display: none;
}

.toDoElement .v-label {
	opacity: 1;
}
</style>

<style scoped>
.notStarted {
	color: red;
}

.completed {
	color: #373ae6;
}
</style>
