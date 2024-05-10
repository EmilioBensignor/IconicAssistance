<template>
	<HeaderOutsideComponent />
	<div class="heroSuite columnAlignCenter">
		<h1 class="text-center">Login</h1>
	</div>
	<v-form
		class="columnAlignCenter"
		v-model="valid"
		@submit="onSubmit($event)"
	>
		<div class="w-75">
			<label for="email">Email</label>
			<v-text-field
				id="email"
				v-model="contactData.email"
				:rules="rules.emailRules"
			></v-text-field>
		</div>
		<div class="w-75">
			<label for="password">Password</label>
			<v-text-field
				id="password"
				v-model="contactData.password"
				:rules="rules.passwordRules"
				:type="!showPassword ? 'password' : 'text'"
			>
				<template v-slot:append>
					<v-icon
						:icon="
							!showPassword
								? 'mdi-eye-off-outline'
								: 'mdi-eye-outline'
						"
						@click="togglePasswordVisibility"
					></v-icon>
				</template>
			</v-text-field>
		</div>
		<div class="w-75 rowCenter ga-1">
			<p class="w-auto text-black">Forgot password?</p>
			<router-link
				class="reset text-radioactive"
				:to="routes.RESET_PASSWORD"
				>Reset password</router-link
			>
		</div>
		<div class="w-75 mt-5">
			<router-link class="reset text-radioactive" :to="routes.REGISTER"
				>Client Signup</router-link
			>
		</div>
		<button
			class="w-50 register secondaryButton text-white elevation-5 mt-5 mb-1"
			type="submit"
		>
			Login
		</button>
	</v-form>
</template>

<script>
import ROUTES_NAMES from "@/router/constants/ROUTES_NAMES";
import HeaderOutsideComponent from "@/suite/components/HeaderOutsideComponent.vue";
import { login } from "../services/auth.service";

export default {
	name: "LoginView",
	components: {
		HeaderOutsideComponent,
	},
	data() {
		return {
			routes: ROUTES_NAMES,
			showPassword: false,
			contactData: {
				email: "",
				password: "",
			},
			rules: {
				emailRules: [],
				passwordRules: [],
			},
			valid: false,
		};
	},
	methods: {
		togglePasswordVisibility() {
			this.showPassword = !this.showPassword;
		},
		onSubmit(event) {
			event.preventDefault();
			login(this.contactData.email, this.contactData.password);
		},
	},
};
</script>

<style scoped>
label {
	font-weight: 500;
}

.reset {
	text-decoration: none;
	font-weight: 550;
	cursor: pointer;
}

.register {
	font-weight: bold;
	font-size: 1.3rem;
}

.register:hover {
	color: #373ae6 !important;
}
</style>
