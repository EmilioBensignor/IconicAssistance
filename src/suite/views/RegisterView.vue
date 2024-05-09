<template>
	<HeaderOutsideComponent />
	<div class="heroSuite columnAlignCenter">
		<h1 class="text-center">Register</h1>
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
		<div class="w-75">
			<label for="password2">Repeat Password</label>
			<v-text-field
				id="password2"
				v-model="contactData.password2"
				:rules="rules.password2Rules"
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
		<div class="w-75 row ga-1">
			<p class="w-auto text-black">Already registered?</p>
			<router-link class="login text-radioactive" :to="routes.LOGIN"
				>Log in</router-link
			>
		</div>
		<button
			class="w-75 register secondaryButton text-white elevation-5 mt-5 mb-1"
			type="submit"
		>
			Create Account
		</button>
	</v-form>
</template>

<script>
import ROUTES_NAMES from "@/router/constants/ROUTES_NAMES";
import HeaderOutsideComponent from "@/suite/components/HeaderOutsideComponent.vue";
import { signup } from "../services/auth.service";

export default {
	name: "RegisterView",
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
				password2: "",
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
			signup(this.contactData.email, this.contactData.password);
		},
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

.register {
	font-weight: bold;
	font-size: 1.3rem;
}

.register:hover {
	color: #373ae6 !important;
}

@media only screen and (min-width: 350px) {
	.register {
		width: 70% !important;
	}
}

@media only screen and (min-width: 400px) {
	.register {
		width: 65% !important;
	}
}

@media only screen and (min-width: 450px) {
	.register {
		width: 60% !important;
	}
}

@media only screen and (min-width: 480px) {
	.register {
		width: 55% !important;
	}
}

@media only screen and (min-width: 550px) {
	.register {
		width: 50% !important;
	}
}

@media only screen and (min-width: 600px) {
	.register {
		width: 45% !important;
	}
}
</style>
