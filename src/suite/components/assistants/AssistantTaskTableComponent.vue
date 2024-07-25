<template>
	<div class="bg-white rounded-xl elevation-3 pa-5">
		<div class="column">
			<div class="align-self-end">
				<button class="taskBtn py-3 px-5" @click="openDialog = true">
					+ Create Task
				</button>
			</div>
			<div>
				<div class="titles my-3">
					<p>ToDo</p>
				</div>
				<p v-if="todo.length === 0">There are no tasks</p>
				<ToDoComponent
					v-else
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
				<p v-if="completed.length === 0">There are no tasks</p>
				<ToDoComponent
					v-else
					:task="task"
					v-for="(task, index) in completed"
					:key="index"
					:moveTask="todoTask"
				/>
			</div>
		</div>
		<v-dialog v-model="openDialog">
			<v-card
				class="bg-suiteBg align-self-center rounded-lg"
				max-width="400"
				title="New task"
			>
				<form class="column ga-3 px-5" @submit.prevent="createNewTask">
					<div>
						<label for="name">Task</label>
						<v-text-field
							id="name"
							required
							v-model="newTask.name"
						></v-text-field>
					</div>
					<div>
						<label for="due_date">Due date</label>
						<v-date-picker
							id="due_date"
							:min="yesterday"
							required
							v-model="newTask.due_date"
						></v-date-picker>
					</div>
					<div>
						<label for="observations">Observations</label>
						<v-text-field
							id="observations"
							v-model="newTask.observations"
						></v-text-field>
					</div>
					<SecondaryBtn text="Create" :loading="loading">
					</SecondaryBtn>
				</form>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
import { computed } from "vue";

import ToDoComponent from "@/suite/components/assistants/ToDoComponent.vue";
import SecondaryBtn from "@/suite/components/buttons/SecondaryBtnComponent.vue";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "@/suite/firebase/init";

export default {
	components: {
		ToDoComponent,
		SecondaryBtn,
	},
	props: {
		tasks: {
			type: Array,
			required: true,
		},
		assistantId: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			completed: this.tasks.filter((task) => task.status),
			todo: this.tasks.filter((task) => !task.status),
			openDialog: false,
			yesterday: null,
			loading: false,
			newTask: {},
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
		async createNewTask() {
			this.loading = true;
			if (!this.newTask.name || !this.newTask.due_date) {
				//tirar error
				this.loading = false;
				return;
			}
			const task = { ...this.newTask };
			task.completed_at = null;
			task.created_at = new Date().toJSON();
			task.due_date = this.newTask.due_date.toJSON();
			task.status = false;
			const ref = doc(db, "assistants", this.assistantId);
			this.loading = false;
			await updateDoc(ref, { tasks: arrayUnion(task) })
				.then(() => {
					this.tasks.push(task);
					this.todo.push(task);
					this.loading = false;
					this.openDialog = false;
				})
				.catch((error) => {
					//tirar error
					this.loading = false;
				});
		},
	},
	mounted() {
		const today = new Date();
		this.yesterday = new Date(today);
		this.yesterday.setDate(today.getDate() - 1);
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
