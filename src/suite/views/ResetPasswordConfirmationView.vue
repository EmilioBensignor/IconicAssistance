<template>
	<HeaderOutsideComponent />
	<div class="heroSuite columnAlignCenter">
		<h1 class="text-center">Reset Password Confirmation</h1>
	</div>
	<section class="mt-3">
		<div class="w-75 column ga-2">
			<p class="text-start">
				An email was sent to {{email ? email : ''}} to reset his password.
			</p>
			<div class="row align-center ga-2">
				<p class="text-start w-auto">Is the provided email incorrect?</p>
				<router-link class="modify text-radioactive" :to="routes.RESET_PASSWORD">Modify</router-link>
			</div>
		</div>
		<router-link class="secondaryButton elevation-5 mt-8" :to="routes.LOGIN">Go back to Login</router-link>
	</section>
</template>

<script>
import ROUTES_NAMES from "@/router/constants/ROUTES_NAMES";
import HeaderOutsideComponent from "@/suite/components/HeaderOutsideComponent.vue";
import { resetEmail } from "../services/auth.service.js";
import router from "@/router/index.js";
export default {
	name: "ResetPasswordConfirmationView",
	components: {
		HeaderOutsideComponent,
	},
	data() {
		return {
			routes: ROUTES_NAMES,
			email: resetEmail.value
		}
	},
	mounted(){
		if (this.email === null) {
			router.push(ROUTES_NAMES.RESET_PASSWORD)
		}
		
	}
};
</script>

<style scoped>
a {
	text-decoration: none;
}

.modify {
	font-weight: 600;
}
</style>