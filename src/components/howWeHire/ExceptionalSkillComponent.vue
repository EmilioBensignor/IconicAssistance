<template>
    <section class="radioactiveSky">
    <h2 v-motion="scrollBottom" class="text-white">Exceptional Skill, No Compromise</h2>
    <p v-motion="scrollBottom" class="w-75 text-white my-3">
      At Iconic Assistants, our strength lies in an exceptional team dedicated
      to driving success and delivering excellence. Join us on our journey
      towards excellence.
    </p>
    <div class="my-5">
      <img
        src="@/assets/images/howWeHire/Exceptional-Skill-Remote-Talent.png"
        alt="Exceptional Skill Remote Talent"
        v-motion="scrollBottom"
        class="remoteModel rounded-circle elevation-5"
        width="75%"
        eager />
    </div>
    <router-link class="primaryButton elevation-5 mt-3" :to="'/contact-us'"
      >Contact Us</router-link
    >
  </section>
</template>

<script setup>
  import { scrollBottom } from "@/motions.js"
</script>