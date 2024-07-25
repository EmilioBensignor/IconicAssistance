<template>
	<div class="justifyCenter bg-white h-100">
		<div class="suiteContent">
			<HeaderOutsideComponent />
			<div class="heroSuite columnAlignCenter">
				<h1 class="w-100 text-midnight text-center">
					Assistant Register
				</h1>
			</div>
			<v-form
				class="w-100 columnAlignCenter ga-3 mt-5"
				v-model="valid"
				@submit.prevent="onSubmit()"
			>
				<div class="w-75">
					<label class="text-midnight" for="email">Email</label>
					<v-text-field
						id="email"
						v-model="contactData.email"
						:rules="rules.emailRules"
						required
					></v-text-field>
				</div>
				<div class="w-75">
					<label class="text-midnight" for="password">Password</label>
					<v-text-field
						id="password"
						v-model="contactData.password"
						:rules="rules.passwordRules"
						:type="!showPassword ? 'password' : 'text'"
						required
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
				<div class="w-75">
					<label class="text-midnight" for="password2"
						>Repeat Password</label
					>
					<v-text-field
						id="password2"
						v-model="contactData.password2"
						:rules="rules.password2Rules"
						:type="!showPassword ? 'password' : 'text'"
						required
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
					<p class="w-auto text-midnight">Already registered?</p>
					<router-link
						class="login text-radioactive"
						:to="routes.LOGIN"
						>Log in</router-link
					>
				</div>
				<p class="text-center text-red mt-3" v-if="error">
					{{ error }}
				</p>
				<SecondaryBtnComponent
					text="Create Account"
					:loading="loading"
				/>
			</v-form>
		</div>
	</div>
</template>

<script>
import ROUTES_NAMES from "@/router/constants/ROUTES_NAMES";
import HeaderOutsideComponent from "@/suite/components/HeaderOutsideComponent.vue";
import SecondaryBtnComponent from "@/suite/components/buttons/SecondaryBtnComponent.vue";
import { registerError, signup } from "@/suite/services/auth.service";

export default {
	name: "AssistantRegisterView",
	components: {
		HeaderOutsideComponent,
		SecondaryBtnComponent,
	},
	data() {
		return {
			routes: ROUTES_NAMES,
			showPassword: false,
			contactData: {
				email: "",
				password: "",
				password2: "",
			},
			rules: {
				emailRules: [
					(value) => {
						if (value) return true;

						return "E-mail is requred.";
					},
				],
				passwordRules: [
					(value) => {
						if (value) return true;
						return "Password is required.";
					},
					(value) => {
						if (value.length >= 8) return true;
						return "Password must be at least 8 characters long.";
					},
					(value) => {
						if (value.length < 20) return true;
						return "Password must be shorter than 20 characters.";
					},
				],
				password2Rules: [
					(value) => {
						if (value) return true;
						return "Password is required.";
					},
					(value) => {
						if (value.length >= 8) return true;
						return "Password must be at least 8 characters long.";
					},
					(value) => {
						if (value.length < 20) return true;
						return "Password must be shorter than 20 characters.";
					},
					(value) => {
						if (value === this.contactData.password) return true;
						return "Passwords don't match.";
					},
				],
			},
			valid: false,
			loading: false,
			error: registerError,
		};
	},
	methods: {
		togglePasswordVisibility() {
			this.showPassword = !this.showPassword;
		},
		async onSubmit() {
			if (!this.valid) {
				return;
			}
			this.loading = true;
			try {
				await signup(this.contactData.email, this.contactData.password);
			} catch (error) {
				console.log(error);
			} finally {
				this.loading = false;
			}
		},
	},
	beforeRouteLeave(to, from, next) {
		registerError.value = null;
		next();
	},
};
</script>

<style scoped>
label {
	font-weight: 500;
}

.login {
	text-decoration: none;
	font-weight: 550;
	cursor: pointer;
}

@media only screen and (min-width: 1800px) {
	.login {
		font-size: 1.15rem;
	}
}
</style>
