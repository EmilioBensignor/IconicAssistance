<template>
  <section class="skyRadioactive">
    <p v-motion="scrollBottom" class="subtitle text-white">Perfect Match Guaranteed</p>
    <h2 v-motion="scrollBottom" class="text-white mb-5">Elements of Remote Talent Matching</h2>
    <div class="columnAlignCenter ga-14 mt-5 py-5">
      <div v-motion="scrollBottom" class="w-75 columnAlignCenter border-lb rounded-bs-xl py-3 shadow-3">
        <h3 class="text-white">Tailored Skill Alignment</h3>
        <p class="text-white mt-3 mb-6">
          Our highly qualified HR team meticulously assesses the unique skills
          you require. We ensure a perfect fit.
        </p>
        <img
          src="@/assets/images/beforeYouStart/Tailored-Skill.png"
          alt="Tailored Skill"
          class="shadow-15"
          width="25%" />
      </div>
      <div v-motion="scrollBottom" class="w-75 columnAlignCenter border-rb rounded-be-xl py-3 shadow-3">
        <h3 class="text-white">Industry Insights</h3>
        <p class="text-white mt-3 mb-6">
          Our platform considers your industry specifics matching you with a professional with the right skills.
        </p>
        <img
          src="@/assets/images/beforeYouStart/Industry-Insights.png"
          alt="Industry Insights"
          class="shadow-15"
          width="25%" />
      </div>
      <div v-motion="scrollBottom" class="w-75 columnAlignCenter border-lt rounded-ts-xl py-3 shadow-3">
        <h3 class="text-white">Experiental Synergy</h3>
        <p class="text-white mt-3 mb-6">
          We take into account the depth of experience needed for your tasks, with seamless integration into your workflow.
        </p>
        <img
          src="@/assets/images/beforeYouStart/Experiental-Synergy.png"
          alt="Experiental Synergy"
          class="shadow-15"
          width="25%" />
      </div>
      <div v-motion="scrollBottom" class="w-75 columnAlignCenter border-rt rounded-te-xl py-3 shadow-3">
        <h3 class="text-white">Personalized Collaboration</h3>
        <p class="text-white mt-3 mb-6">
          It's not just about finding a virtual assistant; it's about finding the right partner for your business journey.
        </p>
        <img
          src="@/assets/images/beforeYouStart/Personalized-Collaboration.png"
          alt="Personalized Collaboration"
          class="shadow-15"
          width="25%" />
      </div>
    </div>
  </section>
</template>

<script setup>
  import { scrollBottom } from "@/motions.js";
</script>


<style scoped>
.border-lb{
  border-left: 3px solid white;
  border-bottom: 3px solid white;
}
.border-rb{
  border-right: 3px solid white;
  border-bottom: 3px solid white;
}
.border-lt{
  border-top: 3px solid white;
  border-left: 3px solid white;
}
.border-rt{
  border-top: 3px solid white;
  border-right: 3px solid white;
}
</style>