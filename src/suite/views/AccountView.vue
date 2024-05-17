<template>
	<HeaderSuiteComponent />
	<div class="heroSuite columnAlignCenter">
		<h1>Account</h1>
	</div>
	<section>
		<p class="text-start">Personalize your Iconic Experience</p>
		<div>
			<router-link :to="item.path" class="row" v-for="(item, index) in actions" :key="index">
				<v-icon color="radioactive" :icon="`mdi-${item.icon}`"> </v-icon>
				<p>{{ item.title }}</p>
			</router-link>
		</div>
	</section>
</template>

<script>
import routes from "@/router/constants/ROUTES_NAMES";
import HeaderSuiteComponent from "@/suite/components/HeaderSuiteComponent.vue";

export default {
	name: "AccountView",
	components: {
		HeaderSuiteComponent,
	},
	data(){
		return{
			actions: [
				{
					path: routes.ABOUT_YOU,
					icon: "information",
					title: "About You"
				},
				{
					path: routes.COMMUNICATION,
					icon: "account-voice",
					title: "Communication Preferences"
				},
			],
		}
	}
};
</script>

<style scoped>
a{
	text-decoration: none;
}
</style>