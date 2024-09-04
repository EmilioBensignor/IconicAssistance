<template>
  <HeaderPagesComponent />
  <section class="heroPagesRadioactiveWave columnAlignCenter bg-grayBg">
    <div class="heroPages flexCenter ga-5">
      <h1 class="text-midnight">Something went wrong</h1>
      <p>Click the button below to go back to the home</p>
      <router-link class="secondaryButton" :to="'/'">Go to Home</router-link>
    </div>
  </section>
  <FooterComponent />
</template>

<script>
import HeaderPagesComponent from "@/web/components/HeaderPagesComponent.vue";
import FooterComponent from "@/web/components/FooterComponent.vue";
import { useHead } from "@vueuse/head";

export default {
  name: "Error404",
  components: {
    HeaderPagesComponent,
    FooterComponent,
  },
  setup() {
    useHead({
      title: "Error 404 - Iconic Assistants",
      meta: [
        {
          name: "robots",
          content: "noindex, nofollow",
        },
        {
          name: "description",
          content: "Page not found on Iconic Assistants.",
        },
      ],
    });
  },
};
</script>
