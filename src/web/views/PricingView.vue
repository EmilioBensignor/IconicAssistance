<template>
  <HeaderPagesComponent />
  <section class="heroPagesWave columnAlignCenter">
    <div class="heroPages flexCenter">
      <h1 v-motion="scrollBottom" class="text-midnight">
        Explore Pricing Options
      </h1>
    </div>
  </section>
  <section class="skyRadioactive">
    <h2 v-motion="scrollBottom" class="text-white">
      Select A Plan Now To Get More Donde
    </h2>
    <PricingComponent />
    <router-link :to="'/contact-us'" class="primaryButton mt-6 elevation-5"
      >Get a Free Consultation</router-link
    >
  </section>
  <FaqComponent />
  <TestimonialsComponent />
  <FooterComponent />
</template>

<script>
  import HeaderPagesComponent from "@/web/components/HeaderPagesComponent.vue";
  import PricingComponent from "@/web/components/home/PricingComponent.vue";
  import FaqComponent from "@/web/components/pricing/FaqComponent.vue";
  import TestimonialsComponent from "@/web/components/pricing/TestimonialsComponent.vue";
  import FooterComponent from "@/web/components/FooterComponent.vue";

  import { computed } from "vue";
  import { useHead } from "@vueuse/head";
  import { useRoute } from "vue-router";

  export default {
    name: "Pricing",
    components: {
      HeaderPagesComponent,
      PricingComponent,
      FaqComponent,
      TestimonialsComponent,
      FooterComponent,
    },
    setup() {
      const route = useRoute();
      useHead({
        title: computed(() => route.meta.title),
        meta: [
          {
            name: "description",
            content: computed(() => route.meta.description),
          },
        ],
      });
    },
  };
</script>

<script setup>
  import { scrollBottom } from "@/motions.js";
</script>
