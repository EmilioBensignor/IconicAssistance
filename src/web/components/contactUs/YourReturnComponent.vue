<template>
  <section class="columnAlignCenter yourReturn">
    <div class="content">
      <div class="columnAlignCenter py-15">
        <h2 v-motion="scrollBottom" class="w-100 text-midnight mb-1">
          Your Return on Investment
        </h2>
        <img
          class="line"
          src="@/web/assets/images/misc/blue-line-2-Executive-Assistant.png"
          alt="Line Executive Assistant" />
        <ReturnInvestmentComponent
          class="returnInvestment my-15"
          v-motion="scrollBottom" />
        <CostComparisonComponent
          class="costComparison my-15"
          v-motion="scrollBottom" />
        <p v-motion="scrollBottom" class="pMedium mt-5">
          Our clients save $30k+ a year by hiring
          <span class="font-weight-bold text-radioactive">ICONIC</span> EAs
          instead of an in-house employee
        </p>
      </div>
    </div>
  </section>
</template>

<script>
  import ReturnInvestmentComponent from "@/web/components/contactUs/ReturnInvestmentComponent.vue";
  import CostComparisonComponent from "@/web/components/contactUs/CostComparisonComponent.vue";
  export default {
    components: {
      ReturnInvestmentComponent,
      CostComparisonComponent,
    },
  };
</script>

<script setup>
  import { scrollBottom } from "@/motions.js";
</script>

<style scoped>
  .yourReturn {
    background: url("@/web/assets/images/contactUs/your-return-bg.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .line {
    width: 70%;
  }

  .returnInvestment {
    display: none;
  }

  @media only screen and (min-width: 480px) {
    .line {
      width: 85%;
    }
  }

  @media only screen and (min-width: 600px) {
    .line {
      width: 75%;
    }
  }

  @media only screen and (min-width: 770px) {
    .line {
      width: 62%;
    }
  }

  @media only screen and (min-width: 992px) {
    .line {
      width: 55%;
    }
  }

  @media only screen and (min-width: 1080px) {
    .returnInvestment {
      display: flex;
    }

    .costComparison {
      display: none;
    }

    .line {
      width: 50%;
    }
  }

  @media only screen and (min-width: 1280px) {
    .line {
      width: 45%;
    }
  }

  @media only screen and (min-width: 1440px) {
    .line {
      width: 50%;
    }
  }

  @media only screen and (min-width: 1750px) {
    .line {
      width: 55%;
    }
  }

  @media only screen and (min-width: 1920px) {
    .line {
      width: 57%;
    }
  }
</style>
