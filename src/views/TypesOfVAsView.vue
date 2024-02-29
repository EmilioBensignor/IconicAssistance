<template>
  <HeaderPagesComponent />
  <section class="heroPagesWave columnAlignCenter">
    <div class="heroPages flexCenter">
      <h1 v-motion="scrollBottom" class="text-midnight">
        Types of Virtual Assistants
      </h1>
    </div>
  </section>
  <OurServiceComponentVue />
  <TestimonialsComponentVue />
</template>

<script>
  import HeaderPagesComponent from "@/components/HeaderPagesComponent.vue";
  import OurServiceComponentVue from "@/components/typesOfVa/OurServiceComponent.vue";
  import TestimonialsComponentVue from "@/components/typesOfVa/TestimonialsComponent.vue";

  export default {
    components: {
      HeaderPagesComponent,
      OurServiceComponentVue,
      TestimonialsComponentVue,
    },
  };
</script>

<script setup>
  import { scrollBottom } from "@/motions.js";
</script>
