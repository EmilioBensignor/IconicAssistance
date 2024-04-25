<template>
  <CallToAction />
  <HeaderPagesComponent />
  <section class="heroPagesRadioactiveWave columnAlignCenter">
    <div class="heroPages flexCenter ga-5">
      <h1 class="text-midnight">Something went wrong</h1>
      <p>Click the button below to go back to the home</p>
      <router-link class="secondaryButton" :to="'/'">Go to Home</router-link>
    </div>
  </section>
  <FooterComponent />
</template>

<script>
  import HeaderPagesComponent from "@/components/HeaderPagesComponent.vue";
  import CallToAction from "@/components/calendly/CallToAction.vue";
  import FooterComponent from "@/components/FooterComponent.vue";
  export default {
    name: "Error404",
    components: {
      HeaderPagesComponent,
      CallToAction,
      FooterComponent,
    },
  };
</script>
