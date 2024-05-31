<template>
  <div class="justifyCenter">
    <div class="suiteContent">
      <HeaderOutsideComponent />
      <div class="heroSuite columnAlignCenter">
        <h1 class="text-center">Reset Password Confirmation</h1>
      </div>
      <section class="w-100 mt-3">
        <div class="w-100 column ga-2">
          <p class="w-100 text-center">
            An email was sent to
            <span class="font-weight-bold">{{ email ? email : "" }}</span>
            to reset his password.
          </p>
          <div>
            <p class="text-ceneter w-100">
              Is the provided email incorrect?
              <router-link
                class="modify text-radioactive"
                :to="routes.RESET_PASSWORD"
                >Modify</router-link
              >
            </p>
          </div>
        </div>
        <router-link class="secondaryButton elevation-5 mt-8" :to="routes.LOGIN"
          >Go back to Login</router-link
        >
      </section>
    </div>
  </div>
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
        email: resetEmail.value,
      };
    },
    mounted() {
      if (this.email === null) {
        router.push(ROUTES_NAMES.RESET_PASSWORD);
      }
    },
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
