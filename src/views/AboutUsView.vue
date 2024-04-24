<template>
  <HeaderPagesComponent />
  <section class="heroPagesWave columnAlignCenter">
    <div class="heroPages flexCenter">
      <h1 class="text-midnight" v-motion="scrollBottom">
        Outsource to
        <span class="text-radioactive">Iconic Virtual Assistants</span>
      </h1>
    </div>
  </section>
  <AboutUsComponent />
  <HowWeWorkComponent />
  <OurMissionComponent />
  <ComparisonTableComponent />
  <HowItWorksComponent />
  <FooterComponent />
</template>

<script setup>
  import { scrollBottom } from "@/motions.js";
</script>

<script>
  import HeaderPagesComponent from "@/components/HeaderPagesComponent.vue";
  import AboutUsComponent from "@/components/aboutUs/AboutUsComponent.vue";
  import HowWeWorkComponent from "@/components/aboutUs/HowWeWorkComponent.vue";
  import OurMissionComponent from "@/components/aboutUs/OurMissionComponent.vue";
  import ComparisonTableComponent from "@/components/aboutUs/ComparisonTableComponent.vue";
  import HowItWorksComponent from "@/components/aboutUs/HowItWorksComponent.vue";
  import FooterComponent from "@/components/FooterComponent.vue";

  export default {
    name: 'AboutUs',
    components: {
      HeaderPagesComponent,
      AboutUsComponent,
      HowWeWorkComponent,
      OurMissionComponent,
      ComparisonTableComponent,
      HowItWorksComponent,
      FooterComponent,
    },
  };
</script>

<style>
  .circleNumber {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border-radius: 50%;
    width: 15vw;
    height: 15vw;
  }
  .circleNumber p {
    font-size: 2rem;
    font-weight: bold;
  }

  /* SM */
  @media only screen and (min-width: 480px) {
    .circleNumber {
      width: 10vw;
      height: 10vw;
    }
    .circleNumber p {
      font-size: 2.2rem;
    }
  }

  /* MD */
  @media only screen and (min-width: 769px) {
    .circleNumber {
      width: 7.5vw;
      height: 7.5vw;
    }
    .circleNumber p {
      font-size: 2.4rem;
    }
  }
</style>
