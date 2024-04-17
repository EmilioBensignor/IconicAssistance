<template>
  <section class="skyBlueWaves">
    <div class="content">
      <div class="columnAlignCenter">
        <p v-motion="scrollBottom" class="subtitle mt-2">Cost Comparison</p>
        <h2 v-motion="scrollBottom" class="text-midnight">
          Delegate Task At A Fraction Of The Cost
        </h2>
        <div
          v-motion="scrollBottom"
          class="w-75 costComparison d-flex ga-2 my-7">
          <div
            class="w-50 columnAlignCenter bg-thinGray rounded-xl elevation-10">
            <div
              v-for="(item, index) in inHouse"
              :key="index"
              class="w-100 comparisonItem flexCenter justify-center pa-3">
              <p class="text-midnight text-center">{{ item }}</p>
            </div>
          </div>
          <!-- Comparison Categories -->
          <div
            class="flexCenter category category1 bg-white elevation-5 rounded-pill py-1">
            <p class="text-midnight">HOURLY RATE OF PAY</p>
          </div>
          <div
            class="flexCenter category category2 bg-white elevation-5 rounded-pill py-1">
            <p class="text-midnight">FRINGE BENEFITS</p>
          </div>
          <div
            class="flexCenter category category3 bg-white elevation-5 rounded-pill py-1">
            <p class="text-midnight">OVERHEAD RATE</p>
          </div>
          <div
            class="flexCenter category category4 bg-white elevation-5 rounded-pill py-1">
            <p class="text-midnight">TOTAL PAY RATE</p>
          </div>
          <div
            class="flexCenter category category5 bg-white elevation-5 rounded-pill py-1">
            <p class="text-midnight">WORK Hs / MONTH</p>
          </div>
          <div
            class="flexCenter category category6 bg-white elevation-5 rounded-pill py-1">
            <p class="text-midnight">TOTAL MONTHLY</p>
          </div>
          <div
            class="w-50 columnAlignCenter bg-radioactive rounded-te-xl rounded-bs-xl elevation-10">
            <div
              v-for="(item, index) in iconicVa"
              :key="index"
              class="w-100 comparisonItem flexCenter justify-center pa-3">
              <p class="text-white text-center font-weight-bold">{{ item }}</p>
            </div>
            <div class="w-50 saveIcon pl-3 mb-n6">
              <img
                src="@/assets/images/misc/Save-75-Percentage.png"
                alt="Save 75%"
                class="shadow-3"
                width="95%" />
            </div>
          </div>
        </div>
        <div
          v-motion="scrollBottom"
          class="w-75 columnAlignCenter ga-3 text-lightGray costComparisonAclaration my-5">
          <p>
            <sup class="mr-1">1</sup>Average hourly-rate for 25-34 years old US
            employee according to Forbes.com
          </p>
          <p>
            <sup class="mr-1">2</sup>Fringe Benefits (20%) include, but are not
            limited to, Dental, Health and Life Insurance, Retirement Plans.
          </p>
          <p>
            <sup class="mr-1">3</sup>Overhead Rate (30%) includes, but is not
            limited to, Office space and supplies, equipment, UI insurance,
            Worker's compensation.
          </p>
        </div>
        <router-link
          :to="'/before-you-start'"
          class="secondaryButton elevation-5 mt-3"
          >Before you Start</router-link
        >
      </div>
    </div>
  </section>
</template>

<script setup>
  import { scrollBottom } from "@/motions.js";
</script>

<script>
  export default {
    data() {
      return {
        inHouse: [
          "IN-HOUSE EMPLOYEE",
          "$25.45",
          "$5.09",
          "$7.64",
          "$38.18",
          "160 Hrs",
          "$6,108.80",
        ],
        iconicVa: [
          "ICONIC VA",
          "$9.55",
          "$0.00",
          "$0.00",
          "$9.55",
          "160 Hrs",
          "$1,528.00",
        ],
      };
    },
  };
</script>

<style scoped>
  .costComparison {
    position: relative;
  }

  .comparisonItem {
    height: 15vh;
  }

  .category {
    width: 90%;
    position: absolute;
    left: 0%;
    right: 0%;
    margin: 0 auto;
  }

  .category1 {
    top: 12.5%;
  }

  .category2 {
    top: 26%;
  }

  .category3 {
    top: 40.5%;
  }

  .category4 {
    top: 54.5%;
  }

  .category5 {
    top: 69%;
  }

  .category6 {
    top: 83%;
  }

  .saveIcon {
    position: absolute;
    margin: 0 auto;
    bottom: 1.5vw;
  }

  .costComparisonAclaration p {
    font-size: 0.75rem;
    color: #656875;
  }

  /* SM */
  @media only screen and (min-width: 480px) {
    .comparisonItem p {
      font-size: 1.1rem;
    }

    .saveIcon {
      bottom: 1vw;
    }

    .costComparisonAclaration p {
      font-size: 0.85rem;
    }
  }

  @media only screen and (min-width: 520px) {
    .saveIcon {
      bottom: 0.5vw;
    }
  }

  @media only screen and (min-width: 650px) {
    .saveIcon {
      bottom: -0.5vw;
    }
  }

  @media only screen and (min-width: 700px) {
    .comparisonItem p {
      font-size: 1.2rem;
    }
  }

  /* MD */
  @media only screen and (min-width: 769px) {
    .costComparisonAclaration p {
      font-size: 0.9rem;
    }
  }

  @media only screen and (min-width: 800px) {
    .saveIcon {
      bottom: -1.5vw;
    }
  }

  @media only screen and (min-width: 920px) {
    .comparisonItem p {
      font-size: 1.3rem;
    }

    .saveIcon {
      bottom: -2vw;
    }
  }

  /* LG */
  @media only screen and (min-width: 992px) {
    .comparisonItem {
      height: 20vh;
    }

    .comparisonItem p {
      font-size: 1.65rem;
    }

    .category {
      width: 75%;
    }

    .category p {
      font-size: 1.3rem;
    }

    .saveIcon {
      margin-bottom: -2vw !important;
    }

    .saveIcon img {
      width: 90%;
    }
  }

  /* Desktop */
  @media only screen and (min-width: 1080px) {
    .costComparison {
      width: 60% !important;
    }

    .comparisonItem {
      height: 16vh;
    }

    .comparisonItem p {
      font-size: 1.4rem;
    }

    .category p {
      font-size: 1.2rem;
    }

    .saveIcon {
      margin-bottom: -1vw !important;
    }
  }

  @media only screen and (min-width: 1280px) {
    .costComparison {
      width: 55% !important;
    }

    .category {
      width: 80%;
    }

    .costComparisonAclaration {
      margin-top: 4vw !important;
    }
  }

  /* XL */
  @media only screen and (min-width: 1440px) {
    .comparisonItem {
      height: 15vh;
    }

    .costComparisonAclaration {
      width: 65% !important;
    }

    .costComparisonAclaration p {
      font-size: 1.1rem;
    }

    .saveIcon {
      margin-bottom: 0 !important;
    }
  }

  @media only screen and (min-width: 1600px) {
    .costComparison {
      margin-top: 3vw !important;
    }

    .comparisonItem {
      height: 16vh;
    }

    .costComparisonAclaration {
      width: 60% !important;
    }
  }

  @media only screen and (min-width: 1750px) {
    .comparisonItem {
      height: 15vh;
    }

    .comparisonItem p {
      font-size: 1.6rem;
    }

    .category p {
      font-size: 1.4rem;
    }

    .costComparisonAclaration {
      margin-top: 3vw !important;
      margin-bottom: 2vw !important;
    }

    .costComparisonAclaration p {
      font-size: 1.2rem;
    }
  }

  @media only screen and (min-width: 1920px) {
    .costComparison {
      width: 700px !important;
      margin-top: 50px !important;
    }

    .comparisonItem {
      height: 138px;
    }

    .comparisonItem p {
      font-size: 1.8rem;
    }

    .category {
      width: 75%;
    }

    .category p {
      font-size: 1.5rem;
    }

    .costComparisonAclaration {
      width: 80% !important;
      margin-top: 75px !important;
    }
  }
</style>
