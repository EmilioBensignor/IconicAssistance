<template>
  <section class="columnAlignCenter bg-grayBg">
    <div class="content">
      <div class="columnAlignCenter py-10">
        <h2 v-motion="scrollBottom" class="w-100 text-midnight mb-2">
          Start delegating in
          <span class="text-radioactive">3 simple steps.</span>
        </h2>
        <img
          class="line"
          src="@/web/assets/images/misc/sky-line-4-Virtual-Assistant.png"
          alt="Line Virtual Assistant" />
        <div class="stepsContainer columnAlignCenter ga-15 py-15">
          <div
            v-for="(item, index) in steps"
            :key="index"
            class="w-75 step columnAlignCenter ga-5"
            v-motion="scrollBottom"
            :class="item.class">
            <div class="stepContent">
              <p class="text-start text-radioactive font-weight-bold">
                STEP {{ item.number }}
              </p>
              <h3 class="w-100 text-start mb-2">{{ item.title }}</h3>
              <p class="text-start">{{ item.text }}</p>
            </div>
            <img
              class="w-100 shadow-25"
              :src="getImgUrl(item.img)"
              :alt="item.alt" />
          </div>
        </div>
        <p v-motion="scrollBottom" class="pMedium font-weight-bold">
          Find your next BEST HIRE with
          <span class="text-radioactive">ICONIC</span>
        </p>
        <button
          class="secondaryButton elevation-5 mt-5"
          @click="handleAction(action, linkTo)">
          Get Started
        </button>
      </div>
    </div>
  </section>
</template>

<script>
  import ROUTES_NAMES from "@/router/constants/ROUTES_NAMES";
  import { useButtonActions } from "@/web/composables/useButtonActions";

  export default {
    props: {
      action: {
        type: String,
        required: true,
      },
      linkTo: {
        type: String,
        required: false,
      },
      handleAction: {
        type: Function,
        required: true,
      },
    },
    data() {
      return {
        routes: ROUTES_NAMES,
        steps: [
          {
            number: 1,
            title: "Discovery call",
            text: "Complete the registration form to schedule a call with us and discuss your business needs and the desired qualities in your executive assistant.",
            img: "contactUs/discovery-call-customer-support.png",
            alt: "Discovery Call Customer Support",
          },
          {
            number: 2,
            title: "Matching and interview",
            text: "Our recruitment team will provide you with a perfect match from a pool of over 5,000 pre-vetted professionals for you to interview and approve.",
            img: "contactUs/matching-interview-recruitment.png",
            alt: "Matching Interview Recruitment",
            class: "reversed blueBorders",
          },
          {
            number: 3,
            title: "Onboarding & Ongoing support",
            text: "We help you onboard your Executive Assistant and provide support with your dedicated Customer Success Manager.",
            img: "contactUs/onboarding-customer-support.png",
            alt: "Onboarding Customer Support",
          },
        ],
      };
    },
    methods: {
      getImgUrl(imgName) {
        return new URL(`../../assets/images/${imgName}`, import.meta.url).href;
      },
    },
  };
</script>

<script setup>
  import { scrollBottom } from "@/motions.js";
</script>

<style scoped>
  .line {
    width: 90%;
  }

  .blueBorders {
    border-top: 2px solid #373ae6;
    border-bottom: 2px solid #373ae6;
    padding: 4rem 0;
  }

  @media only screen and (min-width: 480px) {
    .line {
      width: 85%;
    }
  }

  @media only screen and (min-width: 770px) {
    .line {
      width: 77%;
    }
  }

  @media only screen and (min-width: 992px) {
    .line {
      width: 70%;
    }
  }

  @media only screen and (min-width: 1080px) {
    .reversed {
      flex-direction: row-reverse !important;
    }

    .line {
      width: 62% !important;
    }

    .step {
      width: 85% !important;
      flex-direction: row;
      justify-content: space-between;
      gap: 3rem !important;
    }

    .stepContent {
      width: 45%;
    }

    .stepContent p {
      width: 95% !important;
    }

    .step img {
      width: 45% !important;
    }
  }

  @media only screen and (min-width: 1280px) {
    .line {
      width: 52% !important;
    }
  }

  @media only screen and (min-width: 1440px) {
    .line {
      width: 48% !important;
    }
  }

  @media only screen and (min-width: 1600px) {
    .line {
      width: 45% !important;
    }
  }

  @media only screen and (min-width: 1750px) {
    .line {
      width: 43% !important;
    }
    .stepsContainer {
      width: 90%;
    }
  }
</style>
