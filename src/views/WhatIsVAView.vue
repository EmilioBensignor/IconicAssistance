<template>
  <section class="columnAlignCenter">
    <div class="heroPages flexCenter">
      <h1 class="text-midnight">
        Unlock your business' potencial with
        <span class="text-radioactive">Iconic Assistants</span>
      </h1>
    </div>
  </section>
  <WhatAreVAComponent />
  <HowItWorksComponent />
  <BenefitsComponent />
</template>

<script>
import WhatAreVAComponent from "@/components/whatIsVa/WhatAreVAComponent.vue";
import HowItWorksComponent from "@/components/whatIsVa/HowItWorksComponent.vue";
import BenefitsComponent from "@/components/whatIsVa/BenefitsComponent.vue";

export default {
  components: {
    WhatAreVAComponent,
    HowItWorksComponent,
    BenefitsComponent,
  }
};
</script>
