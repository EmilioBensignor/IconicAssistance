<template>
  <div class="justifyCenter h-100">
    <div class="suiteContent">
      <HeaderOutsideComponent />
      <div class="heroSuite columnAlignCenter">
        <h1 class="w-100 text-white text-center">Log In</h1>
      </div>
      <v-form
        class="w-100 loginForm columnAlignCenter ga-3 mt-5"
        v-model="valid"
        @submit.prevent="onSubmit()"
      >
        <div class="w-75">
          <label class="text-lila" for="email">Email</label>
          <v-text-field
            id="email"
            v-model="contactData.email"
            :rules="rules.emailRules"
            required
          ></v-text-field>
        </div>
        <div class="w-75">
          <label class="text-lila" for="password">Password</label>
          <v-text-field
            id="password"
            v-model="contactData.password"
            :rules="rules.passwordRules"
            :type="!showPassword ? 'password' : 'text'"
            required
          >
            <template v-slot:append>
              <v-icon
                color="white"
                :icon="
                  !showPassword ? 'mdi-eye-off-outline' : 'mdi-eye-outline'
                "
                @click="togglePasswordVisibility"
              ></v-icon>
            </template>
          </v-text-field>
        </div>
        <div class="w-75 rowCenter flex-wrap ga-1">
          <p class="w-auto text-lila">Forgot&nbsp;password?</p>
          <router-link
            class="reset text-blueViolet"
            :to="routes.RESET_PASSWORD"
            >Reset&nbsp;password</router-link
          >
        </div>
        <div class="w-75 rowCenter flex-wrap ga-3 justify-space-between mt-5">
          <router-link class="reset text-blueViolet" :to="routes.REGISTER"
            >Client Signup</router-link
          >
          <router-link
            class="reset text-blueViolet"
            :to="routes.ASSISTANT_REGISTER"
            >Assistant Registration</router-link
          >
        </div>
        <p v-if="error" class="w-75 text-red text-center mt-3">
          {{ firebaseErrors[error] ? firebaseErrors[error] : error }}
        </p>
        <SecondaryBtnComponent text="Log In" :loading="loading" />
      </v-form>
    </div>
  </div>
</template>

<script>
import ROUTES_NAMES from "@/router/constants/ROUTES_NAMES";
import HeaderOutsideComponent from "@/suite/components/HeaderOutsideComponent.vue";
import SecondaryBtnComponent from "@/suite/components/buttons/SecondaryBtnComponent.vue";
import { login, loginError } from "../services/auth.service";

export default {
  name: "LoginView",
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
      },
      rules: {
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
      },
      valid: false,
      loading: false,
      firebaseErrors: {
        "Firebase: Error (auth/invalid-credential).":
          "Email or password are incorrect.",
      },
      error: loginError,
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
        await login(this.contactData.email, this.contactData.password);
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
  },
  beforeRouteLeave(to, from, next) {
    loginError.value = null;
    next();
  },
};
</script>

<style>
.loginForm .v-text-field .v-field--no-label input,
.loginForm .v-text-field .v-field--active input {
  background-color: black;
  color: white;
  border-radius: 0.5rem;
}
</style>

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

@media only screen and (min-width: 1800px) {
  .reset {
    font-size: 1.15rem;
  }
}
</style>
