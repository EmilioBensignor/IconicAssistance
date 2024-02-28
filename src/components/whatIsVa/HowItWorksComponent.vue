<template>
  <section class="radioactiveSkyWaves">
    <p v-motion="scrollBottom" class="subtitle">How It Works</p>
    <h2 v-motion="scrollBottom">
      Key Benefits Of Hiring
      <span class="text-radioactive">Iconic Assistant</span>
    </h2>
    <img
      src="@/assets/images/whatIsVa/Iconic-Assistants-Key-Benefits.jpg"
      alt="Iconic Assistants Key Benefits"
      class="my-5"
      v-motion="scrollBottom"
      width="75%" />
    <div v-motion="scrollBottom" class="w-75 flexCenter bg-radioactive rounded-xl elevation-5 px-3 py-5 mt-3 mb-5">
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
  import { scrollBottom } from "@/motions.js"
</script>