<template>
  <nav class="justifyCenter py-5">
    <IconicLogo class="align-self-center mt-1" color="blue" />
  </nav>
  <div class="flexCenter mt-5">
    <p>Thank you for submitting our form.</p>
    <p>Our team will contact you soon.</p>
    <router-link class="secondaryButton elevation-5 mt-10" :to="routes.HOME">Return to Homepage</router-link>
  </div>
</template>

<script>
  import IconicLogo from "@/web/components/icons/IconicLogo.vue";
  import ROUTES_NAMES from "@/router/constants/ROUTES_NAMES";

  export default {
    name: "Booking",
    components: {
      IconicLogo,
    },
    data(){
      return{
        routes: ROUTES_NAMES
      }
    },
  };
</script>