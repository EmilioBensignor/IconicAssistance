<template>
	<h1>ASSISTANT ACTIONS</h1>
	<p>Assistant {{ assistantId }}</p>
	<div v-if="assistantData && assistantData.tasks">
		<!-- <h2>TASKS</h2>
		<div v-for="task in assistantData.tasks" :key="task.title">
			<h3>{{ task.title }}</h3>
			<p>{{ task.due_date.toDate() }}</p>
			<p>{{ task.status }}</p>
			<p>{{ task.created_at.toDate() }}</p>
		</div> -->
		<AssistantTaskTableComponent :tasks="assistantData.tasks" />
	</div>
</template>

<script>
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/init";
import router from "@/router";
import ROUTES_NAMES from "@/router/constants/ROUTES_NAMES";
import { formatDate } from "../services/format.service";
import AssistantTaskTableComponent from "../components/assistants/AssistantTaskTableComponent.vue";

export default {
	data() {
		return {
			assistantId: this.$route.params.id,
			assistantData: null,
		};
	},
	components: {
		AssistantTaskTableComponent,
	},

	async mounted() {
		const ref = doc(db, "assistants", this.assistantId);
		await getDoc(ref)
			.then((data) => {
				if (data.exists()) {
					this.assistantData = data.data();
					console.log(this.assistantData);
				} else {
					router.push(ROUTES_NAMES.ASSISTANTS);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	},
	setup() {
		formatDate();
	},
};
</script>
