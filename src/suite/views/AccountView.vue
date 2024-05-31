<template>
	<HeaderSuiteComponent />
	<div class="heroSuite columnAlignCenter">
		<h1 class="ml-4">Account</h1>
	</div>
	<div class="column ga-3 mt-5 px-5">
		<div>
			<v-skeleton-loader
				class="w-75"
				type="text"
				v-if="!userData || !userData.firstname"
			></v-skeleton-loader>
			<div class="pl-4 pr-1" v-else>
				<p class="dataTitle">First Name</p>
				<p class="dataInfo">{{ userData.firstname }}</p>
			</div>
		</div>
		<div>
			<v-skeleton-loader
				class="w-75"
				type="text"
				v-if="!userData || !userData.lastname"
			></v-skeleton-loader>
			<div class="pl-4 pr-1" v-else>
				<p class="dataTitle">Last Name</p>
				<p class="dataInfo">{{ userData.lastname }}</p>
			</div>
		</div>
		<div>
			<v-skeleton-loader
				class="w-75"
				type="text"
				v-if="!userData || !userData.email"
			></v-skeleton-loader>
			<div class="pl-4 pr-1" v-else>
				<p class="dataTitle">Email</p>
				<p class="dataInfo">{{ userData.email }}</p>
			</div>
		</div>
		<div>
			<v-skeleton-loader
				class="w-75"
				type="text"
				v-if="!userData || !userData.phone"
			></v-skeleton-loader>
			<div class="pl-4 pr-1" v-else>
				<p class="dataTitle">Phone Number</p>
				<p class="dataInfo">{{ userData.phone }}</p>
			</div>
		</div>
		<div>
			<v-skeleton-loader
				class="w-75"
				type="text"
				v-if="!userData || !userData.company"
			></v-skeleton-loader>
			<div class="pl-4 pr-1" v-else>
				<p class="dataTitle">Company Name</p>
				<p class="dataInfo">{{ userData.company }}</p>
			</div>
		</div>
		<div>
			<v-skeleton-loader
				class="w-75"
				type="text"
				v-if="!userData || !userData.numemployees"
			></v-skeleton-loader>
			<div class="pl-4 pr-1" v-else>
				<p class="dataTitle">Company Size</p>
				<p class="dataInfo">{{ userData.numemployees }} Employees</p>
			</div>
		</div>
		<div>
			<v-skeleton-loader
				class="w-75"
				type="text"
				v-if="!userData"
			></v-skeleton-loader>
			<div class="pl-4 pr-1" v-else>
				<p class="dataTitle">Position</p>
			</div>
		</div>
		<div>
			<v-skeleton-loader
				class="w-75"
				type="text"
				v-if="!userData"
			></v-skeleton-loader>
			<div class="pl-4 pr-1" v-else>
				<p class="dataTitle">Communication Preferences</p>
			</div>
		</div>
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
