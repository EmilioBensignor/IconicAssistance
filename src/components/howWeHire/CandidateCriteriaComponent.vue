<template>
    <section class="skyRadioactive">
    <div class="candidateCriteria columnAlignCenter rounded-lg my-5 pa-3 pb-6 bg-white elevation-5">
      <h2 class="text-midnight">Candidate Interview Criteria</h2>
      <p class="mt-3 mb-7">
        All candidates will be screened on the following criteria:
      </p>
      <ul class="column text-center ga-3">
        <div 
          v-for="item in candidateCriteria" 
          :key="item"
          class="d-flex ga-2">
          <v-icon
            icon="mdi-chevron-double-right"
            color="radioactive"
            size="x-large"></v-icon>
          <li class="text-start text-midnight">{{ item }}</li>
        </div>
      </ul>
    </div>
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

<style scoped>
  .candidateCriteria{
    width: 85%;
  }
</style>