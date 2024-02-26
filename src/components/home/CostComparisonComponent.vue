<template>
  <section class="radioactiveWaves">
    <p class="subtitle mt-2">Cost Comparison</p>
    <h2 class="text-midnight">Delegate Task At A Fraction Of The Cost</h2>
    <div class="w-75 costComparison d-flex ga-2 my-7">
      <div class="w-50 columnAlignCenter bg-thinGray rounded-xl elevation-10">
        <div
          v-for="(item, index) in inHouse"
          :key="index"
          class="w-100 comparisonItem flexCenter justify-center pa-3">
          <p class="text-midnight text-center">{{ item }}</p>
        </div>
      </div>
      <div
        class="w-50 columnAlignCenter bg-radioactive rounded-te-xl rounded-bs-xl elevation-10">
        <div
          v-for="(item, index) in iconicVa"
          :key="index"
          class="w-100 comparisonItem flexCenter justify-center pa-3">
          <p class="text-white text-center font-weight-bold">{{ item }}</p>
        </div>
        <div class="saveIcon pl-3 mb-n6">
          <img
            src="@/assets/images/misc/Save-75-Percentage.png"
            alt="Save 75%"
            class="shadow-25"
            width="95%" />
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
    </div>
    <div
      class="columnAlignCenter ga-3 text-lightGray CostComparisonAclaration my-5">
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
        limited to, Office space and supplies, equipment, UI insurance, Worker's
        compensation.
      </p>
    </div>
    <router-link :to="'/before-you-start'" class="secondaryButton elevation-5 mt-3"
      >Before you Start</router-link
    >
  </section>
</template>

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
    bottom: 0;
  }
  .CostComparisonAclaration p {
    font-size: 0.75rem;
    color: #656875;
  }
</style>
