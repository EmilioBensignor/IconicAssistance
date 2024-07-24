<template>
  <nav>
    <v-app-bar elevation="0" app class="bg-white px-3 py-1">
      <div class="w-100 d-flex justify-space-between align-center">
        <IconicLogo class="mt-1" color="blue" />
        <a class="popUp desktop elevation-3" href="#hero">Get Started</a>
      </div>
    </v-app-bar>
  </nav>
  <HeroComponent />
  <GetStartedComponent />
  <WhatCanComponent />
  <YouBenefitComponent />
  <YourReturnComponent />
  <MatchingProcessComponent />
  <StartDelegatingComponent />
  <GoogleReviewsComponent />
  <ContactFAQComponent />
</template>

<script>
import IconicLogo from "@/web/components/icons/IconicLogo.vue";
import HeroComponent from "@/web/components/contactUs/HeroComponent.vue";
import GetStartedComponent from "@/web/components/contactUs/GetStartedComponent.vue";
import WhatCanComponent from "@/web/components/contactUs/WhatCanComponent.vue";
import YouBenefitComponent from "@/web/components/contactUs/YouBenefitComponent.vue";
import YourReturnComponent from "@/web/components/contactUs/YourReturnComponent.vue";
import MatchingProcessComponent from "@/web/components/contactUs/MatchingProcessComponent.vue";
import StartDelegatingComponent from "@/web/components/contactUs/StartDelegatingComponent.vue";
import GoogleReviewsComponent from "@/web/components/contactUs/GoogleReviewsComponent.vue";
import ContactFAQComponent from "@/web/components/contactUs/ContactFAQComponent.vue";
import "https://link.msgsndr.com/js/form_embed.js";

import { computed } from "vue";
import { useHead } from "@vueuse/head";
import { useRoute } from "vue-router";

export default {
  name: "ContactUs",
  components: {
    IconicLogo,
    HeroComponent,
    GetStartedComponent,
    WhatCanComponent,
    YouBenefitComponent,
    YourReturnComponent,
    MatchingProcessComponent,
    StartDelegatingComponent,
    GoogleReviewsComponent,
    ContactFAQComponent,
  },
  setup() {
    const route = useRoute();
    useHead({
      title: computed(() => route.meta.title),
      meta: [
        {
          name: "description",
          content: computed(() => route.meta.description),
        },
      ],
    });
  },
};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
}

.primaryButton {
  display: none;
}

/* MD */
@media only screen and (min-width: 769px) {
  .primaryButton {
    display: block;
    padding: 2vw 4vw;
  }
}

@media only screen and (min-width: 850px) {
  .primaryButton {
    padding: 1.8vw 3.8vw;
  }
}

@media only screen and (min-width: 1000px) {
  .primaryButton {
    padding: 1.6vw 3.2vw;
  }
}

/* Desktop */
@media only screen and (min-width: 1080px) {
  .primaryButton {
    padding: 1.8vw 3vw;
  }
}

@media only screen and (min-width: 1200px) {
  .primaryButton {
    padding: 1.6vw 2.8vw;
  }
}

@media only screen and (min-width: 1350px) {
  .primaryButton {
    padding: 1.5vw 2.8vw;
  }
}

@media only screen and (min-width: 1500px) {
  .primaryButton {
    padding: 1.2vw 2.5vw;
  }
}

@media only screen and (min-width: 1750px) {
  .primaryButton {
    padding: 1.1vw 2.2vw;
  }
}

@media only screen and (min-width: 1920px) {
  .primaryButton {
    padding: 21px 42px;
  }
}
</style>
