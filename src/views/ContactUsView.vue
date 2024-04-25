<template>
  <CallToAction />
  <HeaderPagesComponent />
  <HeroComponent />
  <StartDelegatingComponent />
  <WhyChooseComponent />
  <TrustedAwesomeComponent />
  <FooterComponent />
</template>

<script>
import HeaderPagesComponent from "@/components/HeaderPagesComponent.vue";
import CallToAction from "@/components/calendly/CallToAction.vue";
import IconicLogo from "@/components/icons/IconicLogo.vue";
import HeroComponent from "@/components/contactUs/HeroComponent.vue";
import StartDelegatingComponent from "@/components/contactUs/StartDelegatingComponent.vue";
import WhyChooseComponent from "@/components/contactUs/WhyChooseComponent.vue";
import TrustedAwesomeComponent from "@/components/contactUs/TrustedAwesomeComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

import "https://link.msgsndr.com/js/form_embed.js";

export default {
  name: 'ContactUs',
  components: {
    HeaderPagesComponent,
    CallToAction,
    IconicLogo,
    HeroComponent,
    StartDelegatingComponent,
    WhyChooseComponent,
    TrustedAwesomeComponent,
    FooterComponent,
  },
};
</script>

<style scoped>
/* Desktop */
@media only screen and (min-width: 1080px) {
  .secondaryButton {
    padding: 2vw 3.5vw;
  }
}

@media only screen and (min-width: 1200px) {
  .secondaryButton {
    padding: 1.75vw 3vw;
  }
}

@media only screen and (min-width: 1350px) {
  .secondaryButton {
    padding: 1.5vw 2.8vw;
  }
}

@media only screen and (min-width: 1550px) {
  .secondaryButton {
    padding: 1.2vw 2.5vw;
  }
}

@media only screen and (min-width: 1750px) {
  .secondaryButton {
    padding: 1.2vw 2.2vw;
  }
}

@media only screen and (min-width: 1920px) {
  .secondaryButton {
    padding: 21px 42px;
  }
}
</style>
