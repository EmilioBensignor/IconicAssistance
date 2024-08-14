<template>
	<HeaderAssistantComponent />
	<div class="heroSuite columnAlignCenter">
		<h1 class="text-white ml-4">Account</h1>
	</div>
	<SkeletonAccountComponent v-if="!userData" />
	<div v-else class="suiteComponents column ga-3 mt-5">
		<div class="pl-4 pr-1">
			<p class="text-lila dataTitle">First Name</p>
			<p class="text-white dataInfo">{{ userData.firstname }}</p>
		</div>
		<div class="pl-4 pr-1">
			<p class="text-lila dataTitle">Last Name</p>
			<p class="text-white dataInfo">{{ userData.lastname }}</p>
		</div>
		<div class="pl-4 pr-1">
			<p class="text-lila dataTitle">Email</p>
			<p class="text-white dataInfo">{{ userData.email }}</p>
		</div>
		<div class="pl-4 pr-1">
			<p class="text-lila dataTitle">Phone Number</p>
			<p class="text-white dataInfo">{{ userData.phone }}</p>
		</div>
		<div class="pl-4 pr-1">
			<p class="text-lila dataTitle">Company Name</p>
			<p class="text-white dataInfo">{{ userData.company }}</p>
		</div>
		<div class="pl-4 pr-1">
			<p class="text-lila dataTitle">Company Size</p>
			<p class="text-white dataInfo">
				{{ userData.numemployees }} Employees
			</p>
		</div>
	</div>
</template>

<script>
import HeaderAssistantComponent from "@/suite/components/HeaderAssistantComponent.vue";
import SkeletonAccountComponent from "@/suite/components/skeleton/SkeletonAccountComponent.vue";
import { useAuthStore } from "@/suite/stores/auth.store";

export default {
	name: "AccountView",
	components: {
		HeaderAssistantComponent,
		SkeletonAccountComponent,
	},
};
</script>

<script setup>
import { collection, doc } from "firebase/firestore";
import { useDocument } from "vuefire";
import { db } from "@/suite/firebase/init";
const store = useAuthStore();
const userData = useDocument(doc(collection(db, "assistants"), store.user.uid));
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
