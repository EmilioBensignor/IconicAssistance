<template>
  <section class="skyRadioactive pt-10">
    <p v-motion="scrollBottom" class="subtitle text-white">How It Works</p>
    <h2 v-motion="scrollBottom" class="text-white">
      How Our Remote Talent Service Works
    </h2>
    <div class="columnAlignCenter ga-10 my-5">
      <div
        v-for="(item, index) in steps"
        :key="index"
        v-motion="scrollBottom"
        class="step bg-white w-75 rounded-xl pa-3 pb-6 elevation-5 columnAlignCenter ga-3">
        <p class="text-radioactive w-100 ml-3 stepNumbers">{{ item.number }}</p>
        <v-img
          eager
          :src="getImgUrl(item.img)"
          :alt="item.alt"
          class="shadow-2"
          width="45%"></v-img>
        <p class="stepTitle">{{ item.title }}</p>
        <p class="stepBody">{{ item.body }}</p>
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
        steps: [
          {
            number: "1.",
            img: "misc/Book-Appointment.png",
            alt: "Book an Appointment",
            title: "Book an Appointment",
            body: "Share all the essential details about your business and specify the tasks you'd like to assign.",
          },
          {
            number: "2.",
            img: "misc/Pre-vetted-Recruitment.png",
            alt: "Pre-vetted Recruitment",
            title: "Recruitment",
            body: "We'll identify the top VAs for you and our HR Manager will handle your VA interviews.",
          },
          {
            number: "3.",
            img: "misc/Onboarding-Expertise.png",
            alt: "Onboarding Expertise",
            title: "Onboarding",
            body: "We'll guide you through the onboarding process to ensure your VA integrates smoothly into your business.",
          },
          {
            number: "4.",
            img: "misc/Ongoing-Support.png",
            alt: "Ongoing Support",
            title: "Ongoing Support",
            body: "After selecting your VA, we'll take care of all HR-related matters, including payroll and performance reviews.",
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

<style scoped>
  .stepNumbers {
    text-align: start;
    font-weight: 700;
    font-size: 1.5rem;
  }

  .stepTitle {
    font-weight: 600;
    font-size: 1.2rem;
  }

  .stepBody {
    font-size: 1rem;
  }
  /* SM */
  @media only screen and (min-width: 480px) {
    .step {
      width: 50% !important;
    }
    .stepNumbers {
      font-size: 1.7rem;
    }
    .stepTitle {
      font-size: 1.3rem;
    }
  }
  /* MD */
  @media only screen and (min-width: 769px) {
    .stepNumbers {
      font-size: 1.8rem;
    }
    .stepTitle {
      font-size: 1.4rem;
    }
  }
</style>
