<template>
	<HeaderSuiteComponent />
	<div class="heroSuite columnAlignCenter">
		<h1 class="text-center">Login</h1>
	</div>
	<v-form class="columnAlignCenter" v-model="valid">
		<div class="w-75">
			<label for="email">Email</label>
			<v-text-field id="email" v-model="email" :rules="emailRules"></v-text-field>
		</div>
		<div class="w-75">
			<label for="password">Password</label>
			<v-text-field id="password" v-model="password" :rules="passwordRules">
				<template v-slot:append>
					<v-icon :icon="showPassword ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
						@click="togglePasswordVisibility"></v-icon>
				</template>
			</v-text-field>
		</div>
		<div class="w-75 resetPassword column ga-1">
			<p class="w-auto text-black">Forgot password?</p>
			<router-link class="reset text-radioactive" :to="routes.RESET_PASSWORD">Reset password</router-link>
		</div>
		<button class="w-50 register secondaryButton text-white elevation-5 mt-5 mb-1" type="submit">
			Login
		</button>
	</v-form>
</template>

<script>
import ROUTES_NAMES from "@/router/constants/ROUTES_NAMES";
import HeaderSuiteComponent from "@/suite/components/HeaderSuiteComponent.vue";

export default {
	components: {
		HeaderSuiteComponent,
	},
	data() {
		return {
			routes: ROUTES_NAMES,
			showPassword: false,
			showPassword2: false,
			contactData: {
				email: '',
				password: '',
				password2: '',
			},
			rules: {
				emailRules: [],
				passwordRules: [],
				password2Rules: [],
			},
			valid: false,
		}
	},
	methods: {
		togglePasswordVisibility() {
			this.showPassword = !this.showPassword;
		},
		togglePassword2Visibility() {
			this.showPassword2 = !this.showPassword2;
		}
	}
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

@media only screen and (min-width: 384px) {
	.resetPassword {
		flex-direction: row;
	}
}
</style>