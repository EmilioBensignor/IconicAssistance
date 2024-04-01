<template>
  <section class="radioactiveSkyWaves">
    <p v-motion="scrollBottom" class="subtitle">How It Works</p>
    <h2 v-motion="scrollBottom">
      Key Benefits Of Hiring
      <span class="text-radioactive">Iconic Assistant</span>
    </h2>
    <div class="w-75 keyMobile">
      <img
        src="@/assets/images/whatIsVa/Iconic-Assistants-Key-Benefits.jpg"
        alt="Iconic Assistants Key Benefits"
        class="my-5"
        v-motion="scrollBottom"
        width="75%" />
    </div>
    <div class="w-75 keyDesktop">
      <img
        src="@/assets/images/whatIsVa/Iconic-Assistants-Key-Benefits-Desktop.png"
        alt="Iconic Assistants Key Benefits"
        class="my-5"
        v-motion="scrollBottom"
        width="75%" />
    </div>
    <div
      v-motion="scrollBottom"
      class="w-75 explore flexCenter bg-radioactive rounded-xl elevation-5 px-3 py-5 mt-3 mb-5">
      <p class="text-white">
        Explore the vast potential of Virtual Assistants (VAs) in seamlessly
        managing administrative tasks, from email and calendar to precise data
        entry and thorough research.
      </p>
      <router-link class="primaryButton elevation-5 mt-5" :to="'/services'"
        >Explore Our Services</router-link
      >
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
    .keyMobile{
      display: none;
    }
    .keyDesktop{
      display: block;
    }
    .explore{
      width: 50% !important;
    }
  }

  /* XL */
@media only screen and (min-width: 1440px){
  .keyDesktop img{
    width: 65%;
  }
  .explore{
    width: 40% !important;
  }
}
</style>
