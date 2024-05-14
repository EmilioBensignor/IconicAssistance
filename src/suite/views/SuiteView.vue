<template>
	<HeaderSuiteComponent />
	<div class="heroSuite columnAlignCenter">
		<h1>
			Welcome, <span>{{ store ? store.user.email : "" }}</span
			>!
		</h1>
		<p>{{ userData && userData.email ? userData.email : "" }}</p>
	</div>
	<section class="px-5 py-3">
		<SuiteActionsComponent />
	</section>
</template>

<script>
import ROUTES_NAMES from "@/router/constants/ROUTES_NAMES";
import HeaderSuiteComponent from "@/suite/components/HeaderSuiteComponent.vue";
import SuiteActionsComponent from "@/suite/components/suite/SuiteActionsComponent.vue";
import { useAuthStore } from "@/suite/stores/auth.store";
import { userId } from "../services/auth.service";

export default {
	name: "SuiteView",
	components: {
		HeaderSuiteComponent,
		SuiteActionsComponent,
	},
	data() {
		return {
			routes: ROUTES_NAMES,
			store: useAuthStore(),
		};
	},
};
</script>
<script setup>
import { collection, doc } from "firebase/firestore";
import { useDocument } from "vuefire";
import { db } from "../firebase/init";
const userData = useDocument(doc(collection(db, "clients"), userId.value));
console.log(userData);
</script>
