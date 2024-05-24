<template>
	<HeaderSuiteComponent />
	<div class="heroSuite columnAlignCenter">
		<h1>Account</h1>
	</div>
	<div>
		<v-skeleton-loader class="w-75" type="text" v-if="!userData || !userData.firstname"></v-skeleton-loader>
		<p v-else>{{ userData.firstname }}</p>
		<v-skeleton-loader class="w-75" type="text" v-if="!userData || !userData.email"></v-skeleton-loader>
		<p v-else>{{ userData.email }}</p>
	</div>
</template>

<script>
import HeaderSuiteComponent from "@/suite/components/HeaderSuiteComponent.vue";
import { useAuthStore } from "@/suite/stores/auth.store";

export default {
	name: "AccountView",
	components: {
		HeaderSuiteComponent,
	},
};
</script>

<script setup>
import { collection, doc } from "firebase/firestore";
import { useDocument } from "vuefire";
import { db } from "../firebase/init";
const store = useAuthStore();
const userData = useDocument(doc(collection(db, "clients"), store.user.uid));
console.log(userData);
</script>