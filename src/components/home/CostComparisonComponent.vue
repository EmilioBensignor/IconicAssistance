<template>
    <section>
    <p class="subtitle">Cost Comparison</p>
    <h2 class="text-midnight">Delegate Task At A Fraction Of The Cost</h2>
    <div>TABLA COST COMPARISON</div>
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
    <router-link :to="'/before-you-start'" class="secondaryButton elevation-5"
      >Before you Start</router-link
    >
  </section>
</template>

<style scoped>
  .CostComparisonAclaration p {
    font-size: 0.75rem;
  }
</style>