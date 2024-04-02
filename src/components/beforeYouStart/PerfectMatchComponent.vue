<template>
  <section class="skyRadioactive">
    <p v-motion="scrollBottom" class="subtitle text-white">
      Perfect Match Guaranteed
    </p>
    <h2 v-motion="scrollBottom" class="text-white mb-5">
      Elements of Remote Talent Matching
    </h2>
    <div class="perfectMatch columnAlignCenter ga-14 mt-5 py-5">
      <div v-motion="scrollBottom" class="w-75 element columnAlignCenter border-lb rounded-bs-xl pt-3 pb-5 shadow-3">
        <h3 class="text-white">Tailored Skill Alignment</h3>
        <p class="text-white mt-3 mb-6">
          Our highly qualified HR team meticulously assesses the unique skills
          you require. We ensure a perfect fit.
        </p>
        <img src="@/assets/images/beforeYouStart/Tailored-Skill.png" alt="Tailored Skill" class="shadow-15"
          width="25%" />
      </div>
      <div v-motion="scrollBottom" class="w-75 element columnAlignCenter border-rb rounded-be-xl pt-3 pb-5 shadow-3">
        <h3 class="text-white">Industry Insights</h3>
        <p class="text-white mt-3 mb-6">
          Our platform considers your industry specifics matching you with a
          professional with the right skills.
        </p>
        <img src="@/assets/images/beforeYouStart/Industry-Insights.png" alt="Industry Insights" class="shadow-15"
          width="25%" />
      </div>
      <div v-motion="scrollBottom" class="w-75 element columnAlignCenter border-lt rounded-ts-xl pt-3 pb-5 shadow-3">
        <h3 class="text-white">Experiental Synergy</h3>
        <p class="text-white mt-3 mb-6">
          We take into account the depth of experience needed for your tasks,
          with seamless integration into your workflow.
        </p>
        <img src="@/assets/images/beforeYouStart/Experiental-Synergy.png" alt="Experiental Synergy" class="shadow-15"
          width="25%" />
      </div>
      <div v-motion="scrollBottom" class="w-75 element columnAlignCenter border-rt rounded-te-xl pt-3 pb-5 shadow-3">
        <h3 class="text-white">Personalized Collaboration</h3>
        <p class="text-white mt-3 mb-6">
          It's not just about finding a virtual assistant; it's about finding
          the right partner for your business journey.
        </p>
        <img src="@/assets/images/beforeYouStart/Personalized-Collaboration.png" alt="Personalized Collaboration"
          class="shadow-15" width="25%" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { scrollBottom } from "@/motions.js";
</script>

<style scoped>
.border-lb {
  border-left: 3px solid white;
  border-bottom: 3px solid white;
}

.border-rb {
  border-right: 3px solid white;
  border-bottom: 3px solid white;
}

.border-lt {
  border-top: 3px solid white;
  border-left: 3px solid white;
}

.border-rt {
  border-top: 3px solid white;
  border-right: 3px solid white;
}

/* SM */
@media only screen and (min-width: 480px) {
  .element {
    width: 50% !important;
  }
}

/* Desktop */
@media only screen and (min-width: 1080px) {
  .perfectMatch {
    width: 80%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    justify-items: center;
    grid-column-gap: 8vw !important;
    grid-row-gap: 5vw !important;
    margin-bottom: 7vw;
  }

  .perfectMatch div:nth-child(1) {
    grid-area: 1 / 1 / 2 / 2;
  }

  .perfectMatch div:nth-child(2) {
    grid-area: 1 / 2 / 2 / 3;
  }

  .perfectMatch div:nth-child(3) {
    grid-area: 2 / 1 / 3 / 2;
  }

  .perfectMatch div:nth-child(4) {
    grid-area: 2 / 2 / 3 / 3;
  }

  .element {
    height: 100%;
    width: 100% !important;
    justify-content: space-between;
  }
}

/* XL */
@media only screen and (min-width: 1440px) {
  .perfectMatch {
    width: 75%;
    padding-bottom: 5vw !important;
  }

  .element img {
    width: 20%;
  }
}

@media only screen and (min-width: 1600px) {
  .perfectMatch {
    width: 70%;
    padding-bottom: 7vw !important;
  }
}
</style>
