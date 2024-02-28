<template>
  <section class="skyRadioactive">
    <p v-motion="scrollBottom" class="subtitle text-white">What are Virtual Assistants</p>
    <h2 v-motion="scrollBottom" class="text-white">Introduction To Virtual Assistants</h2>
    <p v-motion="scrollBottom" class="text-white my-3">
      A virtual assistant remotely provides administrative, technical, or
      specialized support to businesses or individuals. Using technology and
      communication tools, they manage emails, schedule appointments, make
      travel arrangements, conduct research, and more.
    </p>
    <img
      src="@/assets/images/whatIsVa/Remote-Talent-Model.png"
      alt="Remote Talent Iconic Assistants"
      class="rounded-circle elevation-5 my-5"
      v-motion="scrollBottom"
      width="75%" />
    <router-link class="primaryButton elevation-5 mt-3" :to="'/how-we-hire'"
      >Learn About How We Hire</router-link
    >
  </section>
</template>

<script setup>
  import { scrollBottom } from "@/motions.js"
</script>
