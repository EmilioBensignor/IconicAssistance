<template>
    <section class="skyRadioactive">
    <p v-motion="scrollBottom" class="subtitle text-white">Define your needs</p>
    <h2 v-motion="scrollBottom" class="text-white">Outsourcing Opportunities</h2>
    <p v-motion="scrollBottom" class="text-white my-5">Ready to supercharge your efficiency?</p>
    <img
      src="@/assets/images/beforeYouStart/Outsource-Remote-Talent.png"
      alt="Outsource Remote Talent"
      class="rounded-circle elevation-5 my-5"
      v-motion="scrollBottom"
      width="75%" />
    <p v-motion="scrollBottom" class="text-white my-3">
      Start by pinpointing tasks ideal for a virtual assistant. Identify
      time-consuming and repetitive duties ripe for delegation, such as:
    </p>
    <div class="d-flex ga-3 my-5">
      <ul v-motion="scrollBottom" class="column ga-3 text-white font-weight-bold">
        <li>Appointment Setting</li>
        <li>Bookkeeping</li>
        <li>Cold Calling</li>
        <li>CRM Management</li>
        <li>Customer Satisfaction</li>
      </ul>
      <ul v-motion="scrollBottom" class="column ga-3 text-white font-weight-bold">
        <li>Data Analysis</li>
        <li>Data Entry</li>
        <li>Document Transcription</li>
        <li>Email Management</li>
        <li>Social Media Analytics</li>
      </ul>
    </div>
  </section>
</template>

<script setup>
  import { scrollBottom } from "@/motions.js";
</script>
