<script setup></script>

<template>
  <section class="columnAlignCenter">
    <div class="heroPages columnAlignCenter text-center">
      <h1 class="text-midnight">
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
</template>

<script>
  import AboutUsComponent from "@/components/aboutUs/AboutUsComponent.vue";
  import HowWeWorkComponent from "@/components/aboutUs/HowWeWorkComponent.vue";
  import OurMissionComponent from "@/components/aboutUs/OurMissionComponent.vue";
  import ComparisonTableComponent from "@/components/aboutUs/ComparisonTableComponent.vue";
  import HowItWorksComponent from "@/components/aboutUs/HowItWorksComponent.vue";

  export default {
    components: {
      AboutUsComponent,
      HowWeWorkComponent,
      OurMissionComponent,
      ComparisonTableComponent,
      HowItWorksComponent,
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
</style>
