<template>
  <section class="radioactiveSkyWaves bg-white">
    <div class="content">
      <div class="columnAlignCenter">
        <p v-motion="scrollBottom" class="subtitle">How It Works</p>
        <h2 v-motion="scrollBottom">
          Key Benefits Of Hiring
          <span class="text-radioactive">Iconic Assistants</span>
        </h2>
        <div class="w-75 keyMobile">
          <img
            src="@/web/assets/images/whatIsEa/Iconic-Assistants-Key-Benefits.jpg"
            alt="Iconic Assistants Key Benefits"
            class="my-5"
            v-motion="scrollBottom"
            width="75%" />
        </div>
        <div class="w-75 keyDesktop">
          <img
            src="@/web/assets/images/whatIsEa/Iconic-Assistants-Key-Benefits-Desktop.png"
            alt="Iconic Assistants Key Benefits"
            class="my-5"
            v-motion="scrollBottom"
            width="75%" />
        </div>
        <div
          v-motion="scrollBottom"
          class="w-75 explore flexCenter bg-radioactive rounded-xl elevation-5 px-3 py-5 mt-3 mb-5">
          <p class="text-white">
            Explore the vast potential of Executive Assistants (EAs) in seamlessly
            managing administrative tasks, from email and calendar to precise
            data entry and thorough research.
          </p>
          <router-link class="primaryButton elevation-5 mt-5" :to="'/our-solution'"
            >Explore Our Solution</router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { scrollBottom } from "@/motions.js";
</script>

<style scoped>
  .keyDesktop {
    display: none;
  }

  /* Desktop */
  @media only screen and (min-width: 1080px) {
    .keyMobile {
      display: none;
    }

    .keyDesktop {
      display: block;
    }

    .explore {
      width: 50% !important;
    }
  }

  /* XL */
  @media only screen and (min-width: 1440px) {
    .keyDesktop img {
      width: 65%;
    }

    .explore {
      width: 40% !important;
    }
  }

  @media only screen and (min-width: 1600px) {
    .keyDesktop img {
      width: 60%;
      margin-top: 2.5vw !important;
    }
  }

  @media only screen and (min-width: 1750px) {
    .keyDesktop img {
      width: 55%;
    }

    .explore p {
      width: 90% !important;
    }
  }

  @media only screen and (min-width: 1920px) {
    .keyDesktop img {
      width: 50%;
      margin-top: 40px !important;
    }
  }
</style>
