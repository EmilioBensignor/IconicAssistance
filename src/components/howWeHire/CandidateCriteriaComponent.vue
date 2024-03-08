<template>
  <section class="skyRadioactive">
    <h2 v-motion="scrollBottom" class="text-white">
      Candidate Interview Criteria
    </h2>
    <p v-motion="scrollBottom" class="w-75 subtitle text-white mt-3 mb-7">
      All candidates will be screened on the following criteria:
    </p>
    <ul class="w-75 candidate column text-center ga-3">
      <div
        v-for="item in candidateCriteria"
        :key="item"
        v-motion="scrollBottom"
        class="d-flex ga-2">
        <v-icon
          icon="mdi-chevron-double-right"
          color="white"
          size="x-large"></v-icon>
        <li class="text-start text-white">{{ item }}</li>
      </div>
    </ul>
    <div class="w-50 bg-white mt-10 whiteLine"></div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        candidateCriteria: [
          "Experience in role understanding and impact on client's business",
          "Online VA experience with strong communication skills",
          "Motivated to work online and with our company",
          "Home office: focus on internet specs and backup plan",
          "Assessment of home situation, familial dynamics, and personal matters affecting work",
          "Accountability at work: situational questions",
          "Problem-solving skills",
          "Disclosures to the team, e.g., pregnancy, health conditions, etc",
        ],
      };
    },
  };
</script>

<script setup>
  import { scrollBottom } from "@/motions.js";
</script>

<style scoped>
  .whiteLine {
    height: 1px;
  }

  /* MD */
  @media only screen and (min-width: 769px) {
    .candidate{
      width: 50% !important;
    }
  }
</style>
