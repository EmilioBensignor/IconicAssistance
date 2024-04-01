<template>
  <section class="skyRadioactive aboutUs">
    <div class="aboutUsLeft w-75 columnAlignCenter ga-5 mt-3">
      <p v-motion="scrollBottom" class="subtitle text-white">About Us</p>
      <h2 v-motion="scrollBottom" class="text-white py-1">
        An American Enterprise Dedicated To Assisting You In The Expansion Of
        Your Business
      </h2>
      <img class="vaMobile rounded-circle elevation-5 my-2" v-motion="scrollBottom"
        src="@/assets/images/aboutUs/Remote-Talent-Iconic-Assistants.png" alt="Remote Talent Iconic Assistants"
        width="75%" eager />
      <p v-motion="scrollBottom" class="text-white">
        Iconic Assistants, based in the U.S., partners with highly
        <span class="font-weight-bold">skilled foreign professionals</span> to
        streamline your tasks. We free up your time for strategic
        <span class="font-weight-bold">growth</span>, leveraging their expertise
        for efficient, quality-driven
        <span class="font-weight-bold">support</span>.
      </p>
      <router-link class="primaryButton elevation-7 mt-3" :to="'/contact-us'">Request a Free Consultation</router-link>
    </div>
    <div class="aboutRight">
      <img src="@/assets/images/aboutUs/Remote-Talent-Iconic-Assistants.png" alt="Remote Talent Iconic Assistants"
        class="vaDesktop rounded-xl elevation-5 my-2" v-motion="scrollBottom" width="90%" eager />
    </div>
  </section>
</template>

<script setup>
import { scrollBottom } from "@/motions.js";
</script>

<style scoped>
.vaDesktop,
.aboutRight {
  display: none;
}

/* Desktop */
@media only screen and (min-width: 1080px) {
  .vaMobile {
    display: none;
  }

  .vaDesktop {
    display: block;
  }

  .aboutUs {
    display: flex;
    flex-direction: row;
    gap: 3vw;
    padding: 0 10vw;
  }

  .aboutRight,
  .aboutUsLeft {
    width: 50% !important;
    display: flex;
    justify-content: center;
  }

  .aboutUsLeft {
    text-align: start;
    align-items: flex-start;
    gap: 1vw !important;
  }

  .aboutUsLeft .subtitle {
    text-align: start;
  }

  .aboutUsLeft p {
    width: 100% !important;
  }
}

@media only screen and (min-width: 1280px) {
  h2 {
    line-height: 1.3;
  }
}

/* XL */
@media only screen and (min-width: 1440px) {
  .vaDesktop{
    width: 75%;
  }
}
</style>
