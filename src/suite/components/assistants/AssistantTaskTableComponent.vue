<template>
	<div class="bg-white rounded-xl elevation-3 pa-5 taskTable">
		<div class="column">
			<div class="align-self-end">
				<button class="taskBtn py-3 px-5" @click="openModalCreate">
					+ Create Task
				</button>
			</div>
			<div>
				<div class="titles mt-3 pb-3">
					<p>ToDo</p>
				</div>
				<p class="mt-3" v-if="todo.length === 0">There are no tasks</p>
				<ToDoComponent
					v-else
					:task="task"
					v-for="(task, index) in todo"
					:key="index"
					:moveTask="completeTask"
					:deleteTask="deleteTask"
					:openModal="openModalUpdate"
				/>
			</div>
			<div>
				<div class="titles mt-3 pb-3">
					<p>Completed</p>
				</div>
				<p class="mt-3" v-if="completed.length === 0">
					There are no tasks
				</p>
				<ToDoComponent
					v-else
					:task="task"
					v-for="(task, index) in completed"
					:key="index"
					:moveTask="todoTask"
					:deleteTask="deleteTask"
					:openModal="openModalUpdate"
				/>
			</div>
		</div>
		<v-dialog v-model="openDialog">
			<v-card
				class="dialogCard bg-suiteBg align-self-center rounded-lg"
				max-width="100%"
			>
				<v-toolbar class="bg-suiteBg">
					<v-toolbar-title>
						{{
							modalMode === "update" ? "Update task" : "New task"
						}}
					</v-toolbar-title>
					<v-btn icon="mdi-close" @click="openDialog = false"></v-btn>
				</v-toolbar>
				<form class="column ga-3 mt-3 px-5">
					<div class="column ga-3">
						<label for="name">Task</label>
						<v-text-field
							id="name"
							required
							v-model="newTask.name"
						></v-text-field>
						<p v-if="nameError !== null" class="text-red">
							{{ nameError }}
						</p>
					</div>
					<div class="column ga-3">
						<label for="due_date">Due date</label>
						<v-date-picker
							id="due_date"
							:min="yesterday"
							required
							width="100%"
							v-model="newTask.due_date"
						></v-date-picker>
						<p v-if="dueDateError !== null" class="text-red">
							{{ dueDateError }}
						</p>
					</div>
					<div class="column ga-3">
						<label for="observations">Observations</label>
						<v-text-field
							id="observations"
							v-model="newTask.observations"
						></v-text-field>
					</div>
					<SecondaryBtn
						v-if="modalMode !== 'update'"
						class="align-self-end mb-5"
						text="Create"
						@click.prevent="createNewTask"
						:loading="loading"
					>
					</SecondaryBtn>
					<SecondaryBtn
						v-else
						class="align-self-end mb-5"
						text="Update"
						@click.prevent="updateTask"
						:loading="loading"
					>
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
			modalMode: null,
			nameError: null,
			dueDateError: null,
		};
	},
	methods: {
		async completeTask(task) {
			const completed_at_date = new Date().toJSON();
			const taskIndex = this.tasks.findIndex((e) => e.name === task.name);
			this.tasks[taskIndex].status = true;
			this.tasks[taskIndex].completed_at = completed_at_date;
			const index = this.todo.findIndex((e) => e.name === task.name);
			this.todo[index].status = true;
			this.todo[index].completed_at = completed_at_date;
			const temp = { ...this.todo[index] };
			this.todo.splice(index, 1);
			this.completed.push(temp);
			const ref = doc(db, "assistants", this.assistantId);
			await updateDoc(ref, { tasks: this.tasks }).catch((error) => {
				console.log(error);
			});
		},
		async todoTask(task) {
			const taskIndex = this.tasks.findIndex((e) => e.name === task.name);
			this.tasks[taskIndex].status = false;
			this.tasks[taskIndex].completed_at = null;
			const index = this.completed.findIndex((e) => e.name === task.name);
			this.completed[index].status = false;
			this.completed[index].completed_at = null;
			const temp = { ...this.completed[index] };
			this.completed.splice(index, 1);
			this.todo.push(temp);
			const ref = doc(db, "assistants", this.assistantId);
			await updateDoc(ref, { tasks: this.tasks }).catch((error) => {
				console.log(error);
			});
		},
		async createNewTask() {
			this.nameError = null;
			this.dueDateError = null;
			this.loading = true;
			if (!this.newTask.name || !this.newTask.due_date) {
				if (!this.newTask.name) {
					this.nameError = "Task name is required";
				}
				if (!this.newTask.due_date) {
					this.dueDateError = "Due date is required";
				}
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
		async deleteTask(task) {
			this.loading = true;
			const index = this.tasks.findIndex((t) => t.name === task.name);
			this.tasks.splice(index, 1);
			const todoIndex = this.todo.findIndex((t) => t.name === task.name);
			if (todoIndex !== -1) {
				this.todo.splice(todoIndex, 1);
			} else {
				this.completed.splice(
					this.completed.findIndex((t) => t.name === task.name),
					1
				);
			}
			const ref = doc(db, "assistants", this.assistantId);
			await updateDoc(ref, { tasks: this.tasks })
				.then(() => {
					this.loading = false;
				})
				.catch((error) => {
					//tirar error
					console.log(error);
					this.loading = false;
				});
		},
		openModalUpdate(task) {
			this.nameError = null;
			this.dueDateError = null;
			this.modalMode = "update";
			this.newTask = { ...task };
			this.newTask["due_date"] = new Date(task.due_date);
			this.openDialog = true;
		},
		openModalCreate() {
			this.nameError = null;
			this.dueDateError = null;
			this.modalMode = "create";
			this.newTask = {};
			this.openDialog = true;
		},
		async updateTask() {
			this.nameError = null;
			this.dueDateError = null;
			if (!this.newTask.name || !this.newTask.due_date) {
				if (!this.newTask.name) {
					this.nameError = "Task name is required";
				}
				if (!this.newTask.due_date) {
					this.dueDateError = "Due date is required";
				}
				return;
			}
			this.loading = true;
			const updatedTask = { ...this.newTask };
			updatedTask["due_date"] = this.newTask["due_date"].toJSON();
			const index = this.tasks.findIndex(
				(t) => t.name === updatedTask.name
			);
			this.tasks[index] = updatedTask;
			const todoIndex = this.todo.findIndex(
				(t) => t.name === updatedTask.name
			);
			if (todoIndex !== -1) {
				this.todo[todoIndex] = updatedTask;
			} else {
				this.completed[
					this.completed.findIndex((t) => t.name === task.name)
				] = updatedTask;
			}
			const ref = doc(db, "assistants", this.assistantId);
			await updateDoc(ref, { tasks: this.tasks })
				.then(() => {
					this.openDialog = false;
					this.modalMode = null;
					this.newTask = {};
					this.loading = false;
				})
				.catch((error) => {
					//tirar error
					console.log(error);
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

.titles {
	border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}

.titles p {
	font-size: 1.2rem;
	font-weight: 500;
}
</style>

<style>
.taskTable .v-overlay__content {
	width: max-content !important;
	max-width: max-content !important;
}

.v-dialog .dialogCard .v-toolbar__content {
	justify-content: space-between;
}

.v-dialog .dialogCard .v-toolbar-title__placeholder {
	margin-left: 0.5rem;
}
</style>
