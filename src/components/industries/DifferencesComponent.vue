<template>
  <section class="differences">
    <p v-motion="scrollBottom" class="subtitle text-radioactive">
      Differences that matter
    </p>
    <h2 v-motion="scrollBottom" class="text-midnight">
      Why Choose Iconic Assistants?
    </h2>
    <div class="w-75 chooses columnAlignCenter ga-12 my-5">
      <div
        v-for="(choose, index) in differences"
        :key="index"
        v-motion="scrollBottom"
        class="w-50 choose columnAlignCenter ga-5 pb-5 elevation-4">
        <img
          :src="getImgUrl(choose.img)"
          :alt="choose.alt"
          class="shadow-2"
          width="100%" />
        <ul class="column ga-3 px-5">
          <li
            v-for="(difference, index) in choose.list"
            :key="index"
            class="text-midnight font-weight-bold">
            {{ difference }}
          </li>
        </ul>
      </div>
    </div>
    <div
      v-motion="scrollBottom"
      class="w-75 dedicated bg-radioactive columnAlignCenter rounded-xl py-4 my-5 elevation-5">
      <p class="text-white">
        At Iconic Assistants, we're
        <span class="font-weight-bold">dedicated</span> to finding your business
        the <span class="font-weight-bold">perfect match</span>. Our virtual
        <span class="font-weight-bold">professionals</span> come with
        <span class="font-weight-bold">optimal</span> qualifications and
        <span class="font-weight-bold">tailored</span> industry experience.
      </p>
      <router-link class="primaryButton mt-5 elevation-5" :to="'/contact-us'"
        >Contact Us</router-link
      >
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        differences: [
          {
            img: "Top-Talent-Skill-Set.png",
            alt: "Top Talent Skill Set",
            list: [
              "Wide-ranging Skill Set",
              "Established Performance",
              "Qualified Professionals",
            ],
          },
          {
            img: "Transparent-Fees.png",
            alt: "Transparent Fees",
            list: [
              "Transparent Fees",
              "No Lock-In Contracts",
              "Cost Efficient",
            ],
          },
          {
            img: "Cusomized-Solutions.png",
            alt: "Cusomized Solutions",
            list: [
              "Customized Solutions",
              "Adaptable Scaling",
              "Financial Optimization",
            ],
          },
        ],
      };
    },
    methods: {
      getImgUrl(imgName) {
        return new URL(
          `../../assets/images/industries/${imgName}`,
          import.meta.url
        ).href;
      },
    },
  };
</script>

<script setup>
  import { scrollBottom } from "@/motions.js";
</script>

<style scoped>
  .differences {
    background-image: url("@/assets/images/misc/Sky-Blue-Bottom-Wave.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    padding-bottom: 20vw;
  }
  .choose {
    border: 3px solid #373ae6;
    border-radius: 30vw 30vw 5vw 5vw;
  }

  /* MD */
  @media only screen and (min-width: 769px) {
    .chooses{
      width: 50% !important;
    }
    .dedicated{
      width: 50% !important;
    }
  }
</style>
