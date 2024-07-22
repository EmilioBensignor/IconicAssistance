<template>
	<div class="bg-white rounded-xl elevation-3 pa-5">
		<div class="column">
			<div class="align-self-end">
				<button class="taskBtn py-3 px-5">+ Create Task</button>
			</div>
			<div>
				<div class="titles my-3">
					<p>ToDo</p>
				</div>
				<ToDoComponent
					:task="task"
					v-for="(task, index) in todo"
					:key="index"
					:moveTask="completeTask"
				/>
			</div>
			<div>
				<div class="titles my-3">
					<p>Completed</p>
				</div>
				<ToDoComponent
					:task="task"
					v-for="(task, index) in completed"
					:key="index"
					:moveTask="todoTask"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import { computed } from "vue";

import ToDoComponent from "@/suite/components/assistants/ToDoComponent.vue";

export default {
	components: {
		ToDoComponent,
	},
	props: {
		tasks: {
			type: Array,
			required: true,
		},
	},
	data() {
		return {
			completed: this.tasks.filter((task) => task.status),
			todo: this.tasks.filter((task) => !task.status),
		};
	},
	methods: {
		completeTask(task) {
			const index = this.todo.findIndex((e) => e.name === task.name);
			this.todo[index].status = true;
			const temp = { ...this.todo[index] };
			this.todo.splice(index, 1);
			this.completed.push(temp);
		},
		todoTask(task) {
			const index = this.completed.findIndex((e) => e.name === task.name);
			this.completed[index].status = false;
			const temp = { ...this.completed[index] };
			this.completed.splice(index, 1);
			this.todo.push(temp);
		},
	},
};
</script>

<style scoped>
.taskBtn {
	background-color: #373ae6;
	border: 1px solid #373ae6;
	border-radius: 20vw;
	color: white;
	font-size: 1rem;
	font-weight: 600;
	transition: all 0.2s;
}

.taskBtn:hover {
	background-color: white;
	color: #373ae6;
}

.titles p {
	font-size: 1.2rem;
	font-weight: 500;
}
</style>
