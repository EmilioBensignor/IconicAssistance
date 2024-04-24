<template>
  <nav>
    <v-app-bar elevation="0" app class="bg-white d-flex align-center px-5 py-1">
      <router-link class="text-decoration-none" :to="'/'">
        <IconicLogo class="mt-1" color="blue" />
      </router-link>
      <a class="secondaryButton desktop" href="#hero">Get Started</a>
    </v-app-bar>
  </nav>
  <HeroComponent />
  <StartDelegatingComponent />
  <WhyChooseComponent />
  <TrustedAwesomeComponent />
</template>

<script>
import IconicLogo from "@/components/icons/IconicLogo.vue";
import HeroComponent from "@/components/contactUs/HeroComponent.vue";
import StartDelegatingComponent from "@/components/contactUs/StartDelegatingComponent.vue";
import WhyChooseComponent from "@/components/contactUs/WhyChooseComponent.vue";
import TrustedAwesomeComponent from "@/components/contactUs/TrustedAwesomeComponent.vue";
import "https://link.msgsndr.com/js/form_embed.js";

export default {
  name: 'ContactUs',
  components: {
    IconicLogo,
    HeroComponent,
    StartDelegatingComponent,
    WhyChooseComponent,
    TrustedAwesomeComponent,
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
