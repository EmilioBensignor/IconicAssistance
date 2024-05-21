<template>
	<HeaderSuiteComponent />
	<div class="heroSuite columnAlignCenter">
		<h1>
			Welcome,
			<span>{{
				userData && userData.firstname ? `${userData.firstname}` : ""
			}}</span
			>!
		</h1>
	</div>
	<SuiteActionsComponent />
	<ActiveTeamsComponent />
	<AssistantsComponent />
</template>

<script>
import ROUTES_NAMES from "@/router/constants/ROUTES_NAMES";
import HeaderSuiteComponent from "@/suite/components/HeaderSuiteComponent.vue";
import SuiteActionsComponent from "@/suite/components/suite/SuiteActionsComponent.vue";
import ActiveTeamsComponent from "@/suite/components/suite/ActiveTeamsComponent.vue";
import AssistantsComponent from "@/suite/components/suite/AssistantsComponent.vue";
import { useAuthStore } from "@/suite/stores/auth.store";
import { userId } from "../services/auth.service";

export default {
	name: "SuiteView",
	components: {
		HeaderSuiteComponent,
		SuiteActionsComponent,
		ActiveTeamsComponent,
		AssistantsComponent,
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
const store = useAuthStore();
const userData = useDocument(doc(collection(db, "clients"), store.user.uid));
console.log(userData);
</script>
