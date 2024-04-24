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
  import HeaderPagesComponent from "@/components/HeaderPagesComponent.vue";
  import WhatAreVAComponent from "@/components/whatIsVa/WhatAreVAComponent.vue";
  import HowItWorksComponent from "@/components/whatIsVa/HowItWorksComponent.vue";
  import BenefitsComponent from "@/components/whatIsVa/BenefitsComponent.vue";
  import FooterComponent from "@/components/FooterComponent.vue";

  export default {
    name: 'WhatIsVA',
    components: {
      HeaderPagesComponent,
      WhatAreVAComponent,
      HowItWorksComponent,
      BenefitsComponent,
      FooterComponent,
    },
  };
</script>

<script setup>
  import { scrollBottom } from "@/motions.js";
</script>
