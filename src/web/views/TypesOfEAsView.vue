<template>
  <HeaderPagesComponent />
  <section class="heroPagesWave columnAlignCenter">
    <div class="heroPages flexCenter">
      <h1 v-motion="scrollBottom" class="text-midnight">
        Types of Executive Assistants
      </h1>
    </div>
  </section>
  <OurServiceComponentVue />
  <TestimonialsComponentVue />
  <FooterComponent />
</template>

<script>
  import HeaderPagesComponent from "@/web/components/HeaderPagesComponent.vue";
  import OurServiceComponentVue from "@/web/components/typesOfEa/OurServiceComponent.vue";
  import TestimonialsComponentVue from "@/web/components/typesOfEa/TestimonialsComponent.vue";
  import FooterComponent from "@/web/components/FooterComponent.vue";

  import { computed } from "vue";
  import { useHead } from "@vueuse/head";
  import { useRoute } from "vue-router";

  export default {
    name: "TypesOfEas",
    components: {
      HeaderPagesComponent,
      OurServiceComponentVue,
      TestimonialsComponentVue,
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

<style scoped>
  section {
    width: 100vw;
  }
</style>
