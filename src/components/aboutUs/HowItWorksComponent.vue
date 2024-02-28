<template>
  <section class="skyRadioactive">
    <p v-motion="scrollBottom" class="subtitle text-white">How It Works</p>
    <h2 v-motion="scrollBottom" class="text-white">Unlocking efficiency in four simple steps</h2>
    <p v-motion="scrollBottom" class="w-75 text-white mt-3">
      Your business deserves tailored solutions, and we're here to deliver
      exactly that.
    </p>
    <div class="w-75 columnAlignCenter ga-16 my-5 py-5">
      <div
        v-for="item in fourSteps"
        :key="item.number"
        v-motion="scrollBottom"
        class="flexCenter">
        <div class="circleNumber bg-white elevation-5 mb-3">
          <p class="text-radioactive">{{ item.number }}</p>
        </div>
        <p class="fourStepsTitle text-white">{{ item.title }}</p>
        <p class="text-white mt-1">{{ item.description }}</p>
      </div>
    </div>
    <router-link class="primaryButton elevation-5 mt-3 mb-5" :to="'/how-it-works'"
      >Learn How It Works</router-link
    >
  </section>
</template>

<script>
  export default {
    data() {
      return {
        fourSteps: [
          {
            number: 1,
            title: "Book a Meeting",
            description:
              "Tell us everything we need to know about your business and what tasks you wish to delegate.",
          },
          {
            number: 2,
            title: "Recruitment",
            description:
              "We'll shortlist the best VAs suited to your preferences and our HR Manager will facilitate your VA interviews.",
          },
          {
            number: 3,
            title: "Onboarding",
            description:
              "We'll hold your hand through the onboarding process so your VA can fit seamlessly into your business.",
          },
          {
            number: 4,
            title: "Ongoing Support",
            description:
              "Once you've chosen yout VA, we'll handle all the HR matters including payroll, and performance reviews.",
          },
        ],
      };
    },
  };
</script>

<script setup>
  import { scrollBottom } from "@/motions.js"
</script>

<style scoped>
  .fourStepsTitle {
    font-size: 1.4rem;
    font-weight: 600;
  }
</style>
