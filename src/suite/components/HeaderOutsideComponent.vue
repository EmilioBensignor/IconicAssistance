<template>
	<nav class="mb-15">
		<v-app-bar elevation="0" app class="bg-white d-flex align-center py-1">
			<v-toolbar-title>
				<router-link class="text-decoration-none ml-3" :to="'/'">
					<img
						class="mt-2"
						width="75%"
						src="@/suite/assets/images/Suite-Logo.png"
						alt="Suite Logo"
					/>
				</router-link>
			</v-toolbar-title>
		</v-app-bar>
	</nav>
</template>

<script>
export default {
	name: "HeaderOutsideComponent",
};
</script>

<style scoped></style>
