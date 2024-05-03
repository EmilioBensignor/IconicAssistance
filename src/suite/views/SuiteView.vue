<template>
	<h1>Suite</h1>
	<router-link :to="routes.LOGIN">ACA</router-link>
</template>
<script>
import ROUTES_NAMES from "@/router/constants/ROUTES_NAMES";
export default {
	data() {
		return {
			routes: ROUTES_NAMES,
		};
	},
};
</script>
