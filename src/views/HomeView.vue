<template>
  <HeaderTransparentComponent />
  <section class="landing pa-0">
    <video autoplay muted loop class="backgroundVideo">
      <source
        src="@/assets/videos/Outsource-Anything-with-Iconic-Assistants.mp4"
        type="video/mp4" />
      <source
        src="@/assets/videos/Outsource-Anything-with-Iconic-Assistants.mp4"
        type="video/webm" />
      <source
        src="@/assets/videos/Outsource-Anything-with-Iconic-Assistants.mp4"
        type="video/quicktime" />
    </video>
    <div class="overlay"></div>
    <div class="hero flexCenter ga-5">
      <h1 class="text-white">
        Outsource Anything with
        <span class="text-blueSky">ICONIC ASSISTANTS</span>
      </h1>
      <p class="text-landing text-center text-white">
        Leading the way in remote staffing solutions, the top choice for your
        outsourcing needs.
        <span class="font-weight-bold">Starting at $9.55/Hr.</span>
      </p>
      <div>
        <button
          class="navbarCall elevation-10"
          @click="calendly">
          Hire ICONIC
        </button>
      </div>
    </div>
    <CalendlyComponent />
  </section>
  <WhoWeAreComponent />
  <WhyUsComponent />
  <OurServiceComponent />
  <HowItWorksComponent />
  <CostComparisonComponent />
  <IndustriesComponent />
  <section class="skyBlueWaves">
    <p v-motion="scrollBottom" class="subtitle text-radioactive">Pricing</p>
    <h2 v-motion="scrollBottom" class="text-midnight">
      Select A Plan Now To Get More Done
    </h2>
    <PricingComponent />
    <router-link
      :to="'/contact-us'"
      class="secondaryButton mt-5 mb-3 elevation-5"
      >Get a Free Consultation</router-link
    >
  </section>
  <FAQsComponent />
</template>

<script>
  import HeaderTransparentComponent from "@/components/HeaderTransparentComponent.vue";
  import CalendlyComponent from "@/components/CalendlyComponent.vue"

  import WhoWeAreComponent from "@/components/home/WhoWeAreComponent.vue";
  import WhyUsComponent from "@/components/home/WhyUsComponent.vue";
  import OurServiceComponent from "@/components/home/OurServiceComponent.vue";
  import HowItWorksComponent from "@/components/home/HowItWorksComponent.vue";
  import CostComparisonComponent from "@/components/home/CostComparisonComponent.vue";
  import IndustriesComponent from "@/components/home/IndustriesComponent.vue";
  import PricingComponent from "@/components/home/PricingComponent.vue";
  import FAQsComponent from "@/components/home/FAQsComponent.vue";

  export default {
    components: {
      HeaderTransparentComponent,
      CalendlyComponent,
      WhoWeAreComponent,
      WhyUsComponent,
      OurServiceComponent,
      HowItWorksComponent,
      CostComparisonComponent,
      IndustriesComponent,
      PricingComponent,
      FAQsComponent,
    },
    methods: {
      calendly() {
        console.log("Calendly Popup");
      },
    },
  };
</script>

<script setup>
  import { scrollBottom } from "@/motions.js";
  import HeaderTransparentComponentVue from "@/components/HeaderTransparentComponent.vue";
</script>

<style scoped>
  .landing {
    position: relative;
    width: 100vw;
    height: 95vh;
    overflow: hidden;
  }

  .backgroundVideo {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
  }

  .hero {
    width: 90vw;
    z-index: 3;
    margin-top: 20vh;
  }

  .text-landing {
    font-size: 1.3rem;
    font-weight: 500;
  }

  .navbarCall {
    background-color: #373ae6;
    color: white;
    font-family: "Poppins", sans-serif;
    font-size: 1.3rem;
    font-weight: 600;
    padding: 3.5vw 10vw;
    border-radius: 50px;
    transition: all ease 0.2s;
  }

  .navbarCall:hover {
    background-color: #0cb8f1;
    border-radius: 0 50px 0 50px;
  }
</style>
