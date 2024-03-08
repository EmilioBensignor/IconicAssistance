<template>
  <section class="radioactiveWaves">
    <div
      v-motion="scrollBottom"
      class="w-75 quality bg-radioactive columnAlignCenter rounded-xl pb-4 my-5 elevation-5">
      <img
        src="@/assets/images/aboutUs/100-Guarantee-Remote-Talent.png"
        alt="100% Guarantee Remote Talent"
        width="60%" />
      <p class="text-white">
        The Iconic Assistants program offers a quality assurance and performance
        guarantee. If you’re not happy with your Virtual Assistant by the end of
        the first 160 hours of work, we’ll replace your current assistant with a
        new VA at no additional cost to you.
      </p>
      <router-link class="primaryButton mt-5 elevation-5" :to="'/contact-us'"
        >Hire with Iconic</router-link
      >
    </div>
  </section>
</template>

<script setup>
  import { scrollBottom } from "@/motions.js";
</script>

<style scoped>
  /* SM */
  @media only screen and (min-width: 480px) {
    .quality {
      width: 60% !important;
    }
  }

  /* MD */
  @media only screen and (min-width: 769px) {
    .quality {
      width: 50% !important;
    }
  }
</style>
