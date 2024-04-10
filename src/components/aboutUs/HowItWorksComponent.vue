<template>
  <section class="skyRadioactive">
    <div class="content">
      <div class="columnAlignCenter">
        <p v-motion="scrollBottom" class="subtitle text-white">How It Works</p>
        <h2 v-motion="scrollBottom" class="text-white">
          Unlocking efficiency in four simple steps
        </h2>
        <p v-motion="scrollBottom" class="business w-75 text-white mt-3">
          Your business deserves tailored solutions, and we're here to deliver
          exactly that.
        </p>
        <div class="fourSteps w-75 columnAlignCenter ga-16 my-5 py-5">
          <div
            v-for="item in fourSteps"
            :key="item.number"
            v-motion="scrollBottom"
            class="step flexCenter ga-3">
            <div class="circleNumber bg-white elevation-5">
              <p class="text-radioactive">{{ item.number }}</p>
            </div>
            <p class="fourStepsTitle text-white">{{ item.title }}</p>
            <p class="text-white">{{ item.description }}</p>
          </div>
        </div>
        <router-link
          class="primaryButton elevation-5 mt-3 mb-5"
          :to="'/how-it-works'"
          >Learn How It Works</router-link
        >
      </div>
    </div>
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
  import { scrollBottom } from "@/motions.js";
</script>

<style scoped>
  .fourStepsTitle {
    font-size: 1.4rem;
    font-weight: 600;
  }

  /* SM */
  @media only screen and (min-width: 480px) {
    .fourStepsTitle {
      font-size: 1.5rem;
    }

    .circleNumber {
      width: 12vw;
      height: 12vw;
    }
  }

  @media only screen and (min-width: 600px) {
    .circleNumber {
      width: 10vw;
      height: 10vw;
    }
  }

  /* MD */
  @media only screen and (min-width: 769px) {
    .fourStepsTitle {
      font-size: 1.6rem;
    }

    .circleNumber {
      width: 8vw;
      height: 8vw;
    }
  }

  /* Desktop */
  @media only screen and (min-width: 1080px) {
    .business {
      font-size: 1.2rem;
    }

    .fourSteps {
      width: 85% !important;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;
      gap: 2vw !important;
    }

    .step {
      width: 25% !important;
    }

    .circleNumber {
      width: 6vw;
      height: 6vw;
    }

    .circleNumber p {
      font-size: 2rem;
    }

    .step p {
      width: 100% !important;
    }
  }

  /* XL */
  @media only screen and (min-width: 1440px) {
    .fourSteps {
      margin-bottom: 2vw !important;
    }

    .step {
      width: 20% !important;
    }

    .circleNumber {
      width: 5vw;
      height: 5vw;
    }

    .primaryButton {
      margin-bottom: 5vw !important;
    }
  }

  @media only screen and (min-width: 1600px) {
    .fourSteps {
      width: 80% !important;
      margin: 3vw !important;
    }

    .step {
      width: 25% !important;
    }

    .circleNumber {
      width: 4.3vw;
      height: 4.3vw;
    }

    .primaryButton {
      margin-bottom: 7vw !important;
    }
  }

  @media only screen and (min-width: 1750px) {
    .fourSteps {
      width: 75% !important;
    }

    .circleNumber {
      width: 4vw;
      height: 4vw;
    }
  }

  @media only screen and (min-width: 1920px) {
    .fourSteps {
      width: 70% !important;
      margin: 50px !important;
    }
    .circleNumber {
      width: 79px;
      height: 79px;
    }
    .primaryButton {
      margin-bottom: 150px !important;
    }
  }
</style>
