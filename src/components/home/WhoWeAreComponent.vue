<template>
  <section class="skyRadioactive pt-7">
    <p v-motion="scrollBottom" class="subtitle text-white">Who we are</p>
    <h2 v-motion="scrollBottom" class="text-white">Outsourcing made simple and cost-effective</h2>
    <p v-motion="scrollBottom" class="text-white my-3">
      Welcome to Iconic Assistants where outsourcing meets excellence! At Iconic
      Assistants, we take pride in being a <span class="font-weight-bold">premier outsourcing</span> company dedicated
      to bridging the gap between North American companies and top-tier <span class="font-weight-bold">global talent</span>. Our mission is clear: simplify and streamline the hiring process
      for businesses by managing all <span class="font-weight-bold">administrative</span> tasks related to recruitment
      and payroll.
    </p>
    <div v-motion="scrollBottom" class="d-flex justify-space-between ga-5 my-3">
      <div class="d-flex flex-column ga-3">
        <div class="d-flex align-center">
          <v-icon
            icon="mdi-chevron-double-right"
            color="white"
            size="x-large"></v-icon>
          <p class="text-white w-100 font-weight-bold text-start">Tailored to you</p>
        </div>
        <div class="d-flex align-center">
          <v-icon
            icon="mdi-chevron-double-right"
            color="white"
            size="x-large"></v-icon>
          <p class="text-white w-100 font-weight-bold text-start">24/7 Support</p>
        </div>
      </div>
      <div class="d-flex flex-column ga-3">
        <div class="d-flex align-center">
          <v-icon
            icon="mdi-chevron-double-right"
            color="white"
            size="x-large"></v-icon>
          <p class="text-white w-100 font-weight-bold text-start">Budget Friendly</p>
        </div>
        <div class="d-flex align-center">
          <v-icon
            icon="mdi-chevron-double-right"
            color="white"
            size="x-large"></v-icon>
          <p class="text-white w-100 font-weight-bold text-start">Safe & Secure</p>
        </div>
      </div>
    </div>
    <router-link class="primaryButton elevation-5 mt-5" :to="'/services'"
      >What We Do</router-link
    >
  </section>
</template>

<script setup>
  import { scrollBottom } from "@/motions.js"
</script>