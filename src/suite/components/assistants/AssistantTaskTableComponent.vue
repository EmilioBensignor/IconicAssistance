<template>
	<v-data-table
		:headers="headers"
		:items="tasks"
		:sort-by="[{ key: 'due_date', order: 'asc' }]"
	>
		<template v-slot:top>
			<v-toolbar flat>
				<v-toolbar-title>Assistant Tasks</v-toolbar-title>
				<v-divider class="mx-4" inset vertical></v-divider>
				<v-spacer></v-spacer>
				<v-dialog v-model="dialog" max-width="500px">
					<template v-slot:activator="{ props }">
						<v-btn class="mb-2" color="primary" dark v-bind="props">
							New Task
						</v-btn>
					</template>
					<v-card>
						<v-card-title>
							<span class="text-h5">{{ formTitle }}</span>
						</v-card-title>

						<v-card-text>
							<v-container>
								<v-row>
									<v-col cols="12" md="4" sm="6">
										<v-text-field
											v-model="editedItem.name"
											label="Task name"
										></v-text-field>
									</v-col>
									<v-col cols="12" md="4" sm="6">
										<v-date-picker
											v-model="editedItem.due_date"
											label="Due Date"
										></v-date-picker>
									</v-col>
									<v-col cols="12" md="4" sm="6">
										<v-text-field
											v-model="editedItem.observations"
											label="Observations"
										></v-text-field>
									</v-col>
									<v-col cols="12" md="4" sm="6"> </v-col>
								</v-row>
							</v-container>
						</v-card-text>

						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn
								color="blue-darken-1"
								variant="text"
								@click="close"
							>
								Cancel
							</v-btn>
							<v-btn
								color="blue-darken-1"
								variant="text"
								@click="save"
							>
								Save
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-dialog>
				<v-dialog v-model="dialogDelete" max-width="500px">
					<v-card>
						<v-card-title class="text-h5"
							>Are you sure you want to delete this
							item?</v-card-title
						>
						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn
								color="blue-darken-1"
								variant="text"
								@click="closeDelete"
								>Cancel</v-btn
							>
							<v-btn
								color="blue-darken-1"
								variant="text"
								@click="deleteItemConfirm"
								>OK</v-btn
							>
							<v-spacer></v-spacer>
						</v-card-actions>
					</v-card>
				</v-dialog>
			</v-toolbar>
		</template>
		<template v-slot:[`item.actions`]="{ item }">
			<v-icon class="me-2" size="small" @click="editItem(item)">
				mdi-pencil
			</v-icon>
			<v-icon size="small" @click="deleteItem(item)"> mdi-delete </v-icon>
		</template>
		<template v-slot:no-data>
			<v-btn color="primary" @click="initialize"> Reset </v-btn>
		</template>
	</v-data-table>
</template>

<script>
export default {
	data: () => ({
		dialog: false,
		dialogDelete: false,
		headers: [
			{
				title: "Task",
				align: "start",
				key: "name",
			},
			{ title: "Status", key: "status" },
			{ title: "Due Date", key: "due_date" },
			{ title: "Observations", key: "observations" },
			{ title: "Created At", key: "created_at" },
			{ title: "Completed At", key: "completed_at" },
			{ title: "Actions", key: "actions", sortable: false },
		],
		editedIndex: -1,
		editedItem: {
			name: "",
			observations: "",
			status: "Not started",
			due_date: new Date(),
			created_at: "",
			completed_at: "",
		},
		defaultItem: {
			name: "",
			observations: "",
			status: "",
			due_date: new Date(),
			created_at: "",
			completed_at: "",
		},
	}),

	props: {
		tasks: {
			type: Array,
			required: true,
		},
	},

	computed: {
		formTitle() {
			return this.editedIndex === -1 ? "New Item" : "Edit Item";
		},
	},

	watch: {
		dialog(val) {
			val || this.close();
		},
		dialogDelete(val) {
			val || this.closeDelete();
		},
	},

	methods: {
		editItem(item) {
			this.editedIndex = this.tasks.indexOf(item);
			this.editedItem = Object.assign({}, item);
			this.dialog = true;
		},

		deleteItem(item) {
			this.editedIndex = this.tasks.indexOf(item);
			this.editedItem = Object.assign({}, item);
			this.dialogDelete = true;
		},

		deleteItemConfirm() {
			this.tasks.splice(this.editedIndex, 1);
			this.closeDelete();
		},

		close() {
			this.dialog = false;
			this.$nextTick(() => {
				this.editedItem = Object.assign({}, this.defaultItem);
				this.editedIndex = -1;
			});
		},

		closeDelete() {
			this.dialogDelete = false;
			this.$nextTick(() => {
				this.editedItem = Object.assign({}, this.defaultItem);
				this.editedIndex = -1;
			});
		},

		save() {
			if (this.editedIndex > -1) {
				Object.assign(this.tasks[this.editedIndex], this.editedItem);
			} else {
				this.tasks.push(this.editedItem);
			}
			this.close();
		},
	},
};
</script>
