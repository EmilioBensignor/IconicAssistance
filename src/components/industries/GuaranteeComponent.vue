<template>
  <section class="radioactiveWaves">
    <div v-motion="scrollBottom" class="w-75 quality bg-radioactive columnAlignCenter rounded-xl pb-4 my-5 elevation-5">
      <img src="@/assets/images/aboutUs/100-Guarantee-Remote-Talent.png" alt="100% Guarantee Remote Talent"
        class="guarantee" width="60%" />
      <div class="columnAlignCenter ga-3">
        <p class="text-white">
          The Iconic Assistants program offers a quality assurance and
          performance guarantee. If you’re not happy with your Virtual Assistant
          by the end of the first 160 hours of work, we’ll replace your current
          assistant with a new VA at no additional cost to you.
        </p>
        <router-link class="primaryButton mt-5 elevation-5" :to="'/contact-us'">Hire with Iconic</router-link>
      </div>
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

/* Desktop */
@media only screen and (min-width: 1080px) {
  .quality {
    width: 75% !important;
    flex-direction: row;
    padding: 2vw;
  }

  .quality p {
    font-weight: 500;
  }

  .guarantee {
    width: 40%;
  }
}

@media only screen and (min-width: 1280px) {
  .quality {
    padding: 1vw;
  }

  .guarantee {
    width: 35%;
  }
}

/* XL */
@media only screen and (min-width: 1440px) {
  .guarantee {
    width: 30%;
  }
}
</style>
