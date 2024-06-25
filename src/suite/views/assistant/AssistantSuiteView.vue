<template>
	<HeaderAssistantComponent />
	<div class="bg-suiteBg">
		<div class="heroSuite columnAlignCenter">
			<v-skeleton-loader
				class="w-75 bg-suiteBg px-3"
				type="heading"
				v-if="!data || !data.firstname"
			></v-skeleton-loader>
			<h1 class="text-midnight ml-4" v-else>
				Welcome,
				<span>{{ data.firstname }}</span
				>!
			</h1>
		</div>
	</div>
</template>

<script>
import { useAuthStore } from "@/suite/stores/auth.store";
import HeaderAssistantComponent from "@/suite/components/HeaderAssistantComponent.vue";
export default {
	components: { HeaderAssistantComponent },
	data() {
		return {
			store: useAuthStore(),
		};
	},
};
</script>

<script setup>
import { db } from "@/suite/firebase/init";
import { collection, doc } from "firebase/firestore";
import { useDocument } from "vuefire";

const store = useAuthStore();
const data = useDocument(doc(collection(db, "assistants"), store.user.uid));
</script>
