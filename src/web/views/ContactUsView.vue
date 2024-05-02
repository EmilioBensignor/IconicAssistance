<template>
  <HeaderPagesComponent />
  <HeroComponent />
  <StartDelegatingComponent />
  <WhyChooseComponent />
  <TrustedAwesomeComponent />
  <FooterComponent />
</template>

<script>
import HeaderPagesComponent from "@/web/components/HeaderPagesComponent.vue";
import IconicLogo from "@/web/components/icons/IconicLogo.vue";
import HeroComponent from "@/web/components/contactUs/HeroComponent.vue";
import StartDelegatingComponent from "@/web/components/contactUs/StartDelegatingComponent.vue";
import WhyChooseComponent from "@/web/components/contactUs/WhyChooseComponent.vue";
import TrustedAwesomeComponent from "@/web/components/contactUs/TrustedAwesomeComponent.vue";
import FooterComponent from "@/web/components/FooterComponent.vue";

import "https://link.msgsndr.com/js/form_embed.js";

export default {
  name: 'ContactUs',
  components: {
    HeaderPagesComponent,
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
