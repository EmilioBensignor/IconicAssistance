<template>
  <h2 v-motion="scrollBottom" class="text-white my-3">Finding an Executive Assistant is More SIMPLE Than Ever</h2>
  <p v-motion="scrollBottom" class="text-white mb-3">
    Whether you need part-time or full-time help, ICONIC is the <span class='font-weight-bold'>quickest way</span> to get your own
    <span class='font-weight-bold'>dedicated EA</span>.
  </p>
  <div class="columnAlignCenter ga-10 py-10">
    <div v-motion="scrollBottom" class="columnAlignCenter ga-3">
      <img width="80%" class="rounded-xl elevation-5" src="@/assets/images/contactUs/Discovery-Simple.png"
        alt="Discovery">
      <div class="columnAlignCenter ga-3">
        <p class="titleContact text-white font-weight-bold">Discovery</p>
        <p class="text-white">
          Schedule a <span class="font-weight-bold">quick 15-minute call</span> to discuss your business <span class="font-weight-bold">needs</span> and the attributes you are looking for in an ideal <span class="font-weight-bold">executive assistant</span>. Share information on the essential skills, experience, and criteria required. Determine if our recruitment approach and services align with your <span class="font-weight-bold">requirements</span>.</p>
      </div>
    </div>
    <div v-motion="scrollBottom" class="columnAlignCenter ga-3">
      <img width="80%" class="rounded-xl elevation-5" src="@/assets/images/contactUs/Matching-Simple.png"
        alt="Onboarding">
      <div class="columnAlignCenter ga-3">
        <p class="titleContact text-white font-weight-bold">Matching</p>
        <p class="text-white">
          Next, our <span class="font-weight-bold">Matching team</span> will <span class="font-weight-bold">meticulously analyse</span> your requirements and objectives to match you with an <span class="font-weight-bold">Exceptional Assistant</span> who will align perfectly with your needs. With a diverse pool of over <span class="font-weight-bold">10,000 pre-vetted assistants</span> specializing in various fields such as <span class="font-weight-bold">customer service</span>, bookkeeping, market research, virtual assistance, and more, we are confident that we can <span class="font-weight-bold">find the ideal match for you</span>.</p>
      </div>
    </div>
    <div v-motion="scrollBottom" class="columnAlignCenter ga-3">
      <img width="80%" class="rounded-xl elevation-5" src="@/assets/images/contactUs/Onboarding-Simple.png"
        alt="Onboarding">
      <div class="columnAlignCenter ga-3">
        <p class="titleContact text-white font-weight-bold">Onboarding</p>
        <p class="text-white">
          We'll hold your hand through the onboarding process so your EA can <span class="font-weight-bold">fit seamlessly into your business</span>. Our goal is to make the transition <span class="font-weight-bold">smooth and stress-free</span>  for both you and your Executive Assistant. From setting up initial meetings to providing <span class="font-weight-bold">training and guidance</span>, we are committed to ensuring that your EA integrates <span class="font-weight-bold">smoothly</span> into your team.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { scrollBottom } from "@/motions.js";
</script>