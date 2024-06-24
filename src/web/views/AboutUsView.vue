<template>
  <HeaderPagesComponent />
  <section class="heroPagesWave bg-white columnAlignCenter">
    <div class="heroPages flexCenter">
      <h1 class="text-midnight" v-motion="scrollBottom">
        Outsource to
        <span class="text-radioactive">Iconic Executive Assistants</span>
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
import HeaderPagesComponent from "@/web/components/HeaderPagesComponent.vue";
import AboutUsComponent from "@/web/components/aboutUs/AboutUsComponent.vue";
import HowWeWorkComponent from "@/web/components/aboutUs/HowWeWorkComponent.vue";
import OurMissionComponent from "@/web/components/aboutUs/OurMissionComponent.vue";
import ComparisonTableComponent from "@/web/components/aboutUs/ComparisonTableComponent.vue";
import HowItWorksComponent from "@/web/components/aboutUs/HowItWorksComponent.vue";
import FooterComponent from "@/web/components/FooterComponent.vue";

import { computed } from 'vue'
import { useHead } from '@vueuse/head'
import { useRoute } from 'vue-router'

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
  setup() {
    const route = useRoute()
    useHead({
      title: computed(() => route.meta.title),
      meta: [
        {
          name: 'description',
          content: computed(() => route.meta.description)
        }
      ]
    })
  }
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
