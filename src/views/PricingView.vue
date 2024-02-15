<template>
  <section class="columnAlignCenter">
    <div class="heroPages flexCenter">
      <h1 class="text-midnight">Explore Pricing Options</h1>
    </div>
  </section>
  <section class="skyRadioactive">
    <h2 class="text-white">Select A Plan Now To Get More Donde</h2>
    <PricingComponent />
    <router-link :to="'/contact-us'" class="primaryButton mt-6 elevation-5"
      >Get a Free Consultation</router-link
    >
  </section>
  <FaqComponent />
  <TestimonialsComponent />
</template>

<script>
  import PricingComponent from "@/components/home/PricingComponent.vue";
  import FaqComponent from "@/components/pricing/FaqComponent.vue";
  import TestimonialsComponent from "@/components/pricing/TestimonialsComponent.vue";

  export default {
    components: {
      PricingComponent,
      FaqComponent,
      TestimonialsComponent,
    },
  };
</script>
