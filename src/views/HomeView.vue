<script setup></script>

<template>
  <section class="landing bg-gray pt-5">
    <div class="columnAlignCenter">
      <div class="hero columnAlignCenter text-center">
        <h1>
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
            class="navbarCall bg-radioactive elevation-5"
            @click="calendly">
            Hire ICONIC
          </button>
        </div>
      </div>
    </div>
  </section>
  <WhoWeAreComponent />
  <WhyUsComponent />
  <OurServiceComponent />
  <HowItWorksComponent />
  <CostComparisonComponent />
  <IndustriesComponent />
  <PricingComponent />
  <FAQsComponent />
</template>

<script>
  import WhoWeAreComponent from "@/components/home/WhoWeAreComponent.vue"
  import WhyUsComponent from "@/components/home/WhyUsComponent.vue"
  import OurServiceComponent from "@/components/home/OurServiceComponent.vue"
  import HowItWorksComponent from "@/components/home/HowItWorksComponent.vue"
  import CostComparisonComponent from "@/components/home/CostComparisonComponent.vue"
  import IndustriesComponent from "@/components/home/IndustriesComponent.vue"
  import PricingComponent from "@/components/home/PricingComponent.vue"
  import FAQsComponent from "@/components/home/FAQsComponent.vue"

  export default {
    components:{
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

<style scoped>
  /* Home */
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 5vw 3vw;
  }

  .landing {
    display: flex;
    justify-content: center;
  }
  .hero {
    width: 90vw;
    gap: 1.5rem;
    margin: 7vh 0;
  }
  .text-landing {
    font-size: 1.3rem;
  }
  .navbarCall {
    font-size: 1.3rem;
    font-weight: 600;
    padding: 3.5vw 10vw;
    border-radius: 50px;
  }
</style>
