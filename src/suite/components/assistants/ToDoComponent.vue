<template>
	<div class="toDoElement ga-2 column pb-3 pr-3">
		<div class="rowCenter ga-3 text-midnight">
			<v-checkbox
				v-model="task.status"
				:label="task.name"
				@click.prevent="moveTask(task)"
			></v-checkbox>
		</div>
		<div class="column pl-3">
			<div class="column ga-1">
				<p class="w-auto">Due date: {{ formattedDueDate }}</p>
				<p
					class="w-auto"
					v-if="
						formattedCompletedAt &&
						formattedCompletedAt.length !== 0
					"
				>
					Completed at: {{ formattedCompletedAt }}
				</p>
			</div>
			<div class="rowCenter align-self-end ga-1">
				<v-btn
					density="compact"
					icon="mdi-pencil"
					variant="text"
					color="radioactive"
					@click="openModal(task)"
				></v-btn>
				<v-btn
					density="compact"
					icon="mdi-delete"
					variant="text"
					color="radioactive"
					@click="deleteTask(task)"
				></v-btn>
			</div>
		</div>
	</div>
</template>

<script>
import { formatDate } from "@/suite/services/format.service";
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
		deleteTask: {
			type: Function,
			required: true,
		},
		openModal: {
			type: Function,
			required: true,
		},
	},
	computed: {
		formattedDueDate() {
			return this.task.due_date ? formatDate(this.task.due_date) : "";
		},
		formattedCompletedAt() {
			return this.task.completed_at
				? formatDate(this.task.completed_at)
				: "";
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
.toDoElement {
	border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}

.notStarted {
	color: red;
}

.completed {
	color: #373ae6;
}
</style>

<!-- .split("T")[0].replaceAll('-','/') -->
