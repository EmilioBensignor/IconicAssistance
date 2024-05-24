<template>
	<nav class="mb-15">
		<v-app-bar elevation="0" app class="bg-white d-flex align-center py-1">
			<v-toolbar-title>
				<img
						class="mt-2 ml-3"
						width="75%"
						src="@/suite/assets/images/Suite-Logo.png"
						alt="Suite Logo"
					/>
			</v-toolbar-title>
		</v-app-bar>
	</nav>
</template>

<script>
import ROUTES_NAMES from "@/router/constants/ROUTES_NAMES";

export default {
	name: "HeaderOutsideComponent",
	data(){
		return{
			routes: ROUTES_NAMES,
		}
	}
};
</script>

<style scoped></style>
