<template>
  <CallToAction />
  <HeaderPagesComponent />
  <section class="heroPagesWave columnAlignCenter">
    <div class="heroPages flexCenter">
      <h1 v-motion="scrollBottom" class="text-midnight">
        <span class="text-radioactive">Empower</span>
        Your Business Discover Our Services
      </h1>
    </div>
  </section>
  <section class="skyRadioactive">
    <div class="content">
      <div class="columnAlignCenter">
        <p v-motion="scrollBottom" class="subtitle text-white">
          Unlock Efficiency
        </p>
        <h2 v-motion="scrollBottom" class="text-white">Ensuring Success</h2>
        <div
          v-motion="scrollBottom"
          class="w-75 ensuringSuccess columnAlignCenter rounded-xl py-3 my-5 elevation-5">
          <p class="text-white">
            At Iconic, we redefine outsourcing beyond
            <span class="font-weight-bold">cost-cutting</span>, offering
            comprehensive employment
            <span class="font-weight-bold">solutions</span> like
            <span class="font-weight-bold">offshore staffing</span>,
            <span class="font-weight-bold">remote work</span>,
            <span class="font-weight-bold">call centers</span>, and
            <span class="font-weight-bold">virtual assistants</span>. Our
            Business Process Outsourcing (BPO) services streamline operations,
            enhance <span class="font-weight-bold">efficiency</span>, and cut
            costs, providing
            <span class="font-weight-bold">financial advantages</span> through
            global collaboration. Choosing ICONIC means accessing external
            expertise, ensuring
            <span class="font-weight-bold">high-quality services</span> and
            strategic growth for success in a constantly evolving market.
          </p>
        </div>
      </div>
    </div>
  </section>
  <EmpowerComponent />
  <FooterComponent />
</template>

<script>
  import HeaderPagesComponent from "@/components/HeaderPagesComponent.vue";
  import CallToAction from "@/components/calendly/CallToAction.vue";
  import EmpowerComponent from "@/components/services/EmpowerComponent.vue";
  import FooterComponent from "@/components/FooterComponent.vue";

  export default {
    name: 'Services',
    components: {
      HeaderPagesComponent,
      CallToAction,
      EmpowerComponent,
      FooterComponent,
    },
  };
</script>

<script setup>
  import { scrollBottom } from "@/motions.js";
</script>

<style scoped>
  .ensuringSuccess {
    border: 3px solid white;
  }

  /* Desktop */
  @media only screen and (min-width: 1080px) {
    .ensuringSuccess {
      width: 55% !important;
      padding: 2vw 0 !important;
    }

    .ensuringSuccess p {
      width: 95%;
    }
  }

  @media only screen and (min-width: 1920px) {
    .ensuringSuccess {
      padding: 30px 0 !important;
    }
  }
</style>
