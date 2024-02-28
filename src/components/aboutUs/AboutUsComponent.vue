<template>
  <section class="skyRadioactive">
    <p v-motion="scrollBottom" class="subtitle text-white">About Us</p>
    <h2 v-motion="scrollBottom" class="text-white py-1">
      An American Enterprise Dedicated To Assisting You In The Expansion Of Your
      Business
    </h2>
    <div class="columnAlignCenter ga-5 mt-3">
      <img
        class="rounded-circle elevation-5 my-2"
        v-motion="scrollBottom"
        src="@/assets/images/aboutUs/Remote-Talent-Iconic-Assistants.png"
        alt="Remote Talent Iconic Assistants"
        width="75%" />
      <p v-motion="scrollBottom" class="text-white">
        Iconic Assistants, based in the U.S., partners with highly
        <span class="font-weight-bold">skilled foreign professionals</span> to
        streamline your tasks. We free up your time for strategic
        <span class="font-weight-bold">growth</span>, leveraging their expertise
        for efficient, quality-driven
        <span class="font-weight-bold">support</span>.
      </p>
      <router-link
        class="primaryButton elevation-7 mt-3"
        :to="'/contact-us'"
        >Request a Consultation</router-link
      >
    </div>
  </section>
</template>

<script setup>
  import { scrollBottom } from "@/motions.js"
</script>