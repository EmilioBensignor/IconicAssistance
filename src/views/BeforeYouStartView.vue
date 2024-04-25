<template>
  <CallToAction />
  <HeaderPagesComponent />
  <section class="heroPagesWave columnAlignCenter">
    <div class="heroPages flexCenter">
      <h1 v-motion="scrollBottom" class="text-midnight">
        Before You Start Working With
        <span class="text-radioactive">Iconic Assistants</span>
      </h1>
    </div>
  </section>
  <OpportunitiesComponent />
  <IsThisYou />
  <PerfectMatchComponent />
  <FooterComponent />
</template>

<script>
  import HeaderPagesComponent from "@/components/HeaderPagesComponent.vue";
  import CallToAction from "@/components/calendly/CallToAction.vue";
  import OpportunitiesComponent from "@/components/beforeYouStart/OpportunitiesComponent.vue";
  import IsThisYou from "@/components/beforeYouStart/IsThisYou.vue";
  import PerfectMatchComponent from "@/components/beforeYouStart/PerfectMatchComponent.vue";
  import FooterComponent from "@/components/FooterComponent.vue";

  export default {
    name: 'BeforeYouStart',
    components: {
      HeaderPagesComponent,
      CallToAction,
      OpportunitiesComponent,
      IsThisYou,
      PerfectMatchComponent,
      FooterComponent,
    },
  };
</script>

<script setup>
  import { scrollBottom } from "@/motions.js";
</script>
