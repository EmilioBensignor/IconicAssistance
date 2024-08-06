<template>
	<router-link :to="{ path: routes.ASSISTANTS, query: { id: assistant.id } }">
		{{ assistant.firstname }}
	</router-link>
</template>
<script>
import ROUTES_NAMES from "@/router/constants/ROUTES_NAMES";
export default {
	data() {
		return {
			routes: ROUTES_NAMES,
		};
	},
	props: {
		assistant: {
			type: Object,
			required: true,
		},
	},
};
</script>
