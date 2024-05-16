<template>
	<HeaderOutsideComponent />
	<div class="heroSuite columnAlignCenter">
		<router-link
			class="d-flex align-center align-self-start ma-3"
			:to="routes.LOGIN"
		>
			<v-icon icon="mdi-keyboard-backspace" color="radioactive"></v-icon>
			<p class="w-100 goBack text-radioactive ml-1">Go back to Login</p>
		</router-link>
		<h1 class="text-center my-3">Reset Password</h1>
	</div>
	<section>
		<p class="text-start">
			Enter the email address of your account to reset your password
		</p>
		<v-form
			class="w-75 columnAlignCenter mt-5"
			v-model="valid"
			@submit.prevent="onSubmit()"
		>
			<div class="w-100 column align-start ga-2">
				<label for="email">Email</label>
				<v-text-field
					class="w-100"
					id="email"
					v-model="email"
					:rules="emailRules"
				></v-text-field>
			</div>
			<p class="text-center text-red mt-3" v-if="error">
				{{ error }}
			</p>
			<button
				class="secondaryButton text-white elevation-5 mt-5"
				type="submit"
				:loading="loading"
			>
				Reset Password
			</button>
		</v-form>
	</section>
</template>

<script>
import HeaderOutsideComponent from "@/suite/components/HeaderOutsideComponent.vue";
import ROUTES_NAMES from "@/router/constants/ROUTES_NAMES";
import { resetPassword } from "../services/auth.service";

export default {
	name: "ResetPasswordView",
	components: {
		HeaderOutsideComponent,
	},
	data() {
		return {
			routes: ROUTES_NAMES,
			email: "",
			emailRules: [
				(value) => {
					if (value) return true;

					return "E-mail is requred.";
				},
				(value) => {
					if (/.+@.+\..+/.test(value)) return true;

					return "Invalid email.";
				},
			],
			valid: false,
			loading: false,
			error: null,
		};
	},
	methods: {
		async onSubmit() {
			if (!this.valid) {
				return;
			}
			this.loading = true;
			await resetPassword(this.email)
				.then(() => {
					this.loading = false;
				})
				.catch(() => (this.loading = false));
		},
	},
};
</script>

<style scoped>
a {
	text-decoration: none;
}
.goBack {
	font-weight: 500;
}
</style>
