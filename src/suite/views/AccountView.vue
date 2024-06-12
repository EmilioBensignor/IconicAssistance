<template>
	<HeaderSuiteComponent />
	<div class="heroSuite columnAlignCenter">
		<h1 class="text-midnight ml-4">Account</h1>
	</div>
	<SkeletonAccountComponent v-if="!userData" />
	<div v-else class="suiteComponents column ga-3 mt-5">
		<div class="pl-4 pr-1">
			<p class="dataTitle">First Name</p>
			<p class="dataInfo">{{ userData.firstname }}</p>
		</div>
		<div class="pl-4 pr-1">
			<p class="dataTitle">Last Name</p>
			<p class="dataInfo">{{ userData.lastname }}</p>
		</div>
		<div class="pl-4 pr-1">
			<p class="dataTitle">Email</p>
			<p class="dataInfo">{{ userData.email }}</p>
		</div>
		<div class="pl-4 pr-1">
			<p class="dataTitle">Phone Number</p>
			<p class="dataInfo">{{ userData.phone }}</p>
		</div>
		<div class="pl-4 pr-1">
			<p class="dataTitle">Company Name</p>
			<p class="dataInfo">{{ userData.company }}</p>
		</div>
		<div class="pl-4 pr-1">
			<p class="dataTitle">Company Size</p>
			<p class="dataInfo">{{ userData.numemployees }} Employees</p>
		</div>
	</div>
</template>

<script>
import HeaderSuiteComponent from "@/suite/components/HeaderSuiteComponent.vue";
import SkeletonAccountComponent from "@/suite/components/skeleton/SkeletonAccountComponent.vue";
import { useAuthStore } from "@/suite/stores/auth.store";

export default {
	name: "AccountView",
	components: {
		HeaderSuiteComponent,
		SkeletonAccountComponent,
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

<style scoped>
.dataTitle {
	font-size: 0.9rem;
	font-weight: 500;
	color: #373ae6;
}
.dataInfo {
	font-size: 1.1rem;
}
</style>
