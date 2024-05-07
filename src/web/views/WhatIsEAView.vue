<template>
  <HeaderPagesComponent />
  <section class="heroPagesWave columnAlignCenter">
    <div class="heroPages flexCenter">
      <h1 v-motion="scrollBottom" class="text-midnight">
        Unlock your business' potencial with
        <span class="text-radioactive">Iconic Assistants</span>
      </h1>
    </div>
  </section>
  <WhatAreVAComponent />
  <HowItWorksComponent />
  <BenefitsComponent />
  <FooterComponent />
</template>

<script>
  import HeaderPagesComponent from "@/web/components/HeaderPagesComponent.vue";
  import WhatAreVAComponent from "@/web/components/whatIsEa/WhatAreEAComponent.vue";
  import HowItWorksComponent from "@/web/components/whatIsEa/HowItWorksComponent.vue";
  import BenefitsComponent from "@/web/components/whatIsEa/BenefitsComponent.vue";
  import FooterComponent from "@/web/components/FooterComponent.vue";

  import { computed } from "vue";
  import { useHead } from "@vueuse/head";
  import { useRoute } from "vue-router";

  export default {
    name: "WhatIsEA",
    components: {
      HeaderPagesComponent,
      WhatAreVAComponent,
      HowItWorksComponent,
      BenefitsComponent,
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
