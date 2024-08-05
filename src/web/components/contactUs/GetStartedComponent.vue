<template>
  <section class="columnAlignCenter getStartedBg">
    <div class="content py-10">
      <div class="columnAlignCenter">
        <h2 v-motion="scrollBottom" class="text-midnight mb-5">
          Get started with <span class="text-radioactive">ICONIC</span> if you
          are struggling with...
        </h2>
        <div
          v-motion="scrollBottom"
          class="getStarted columnAlignCenter mt-15">
          <div
            v-for="(start, index) in started"
            class="started w-75 bg-white elevation-5 pt-15 pa-5"
            :key="index">
            <img
              class="startIcon shadow-25"
              :src="getImgUrl(start.image)"
              :alt="start.alt" />
            <div class="column ga-1">
              <p class="startedTitle w-100 text-start font-weight-bold mt-5">
                {{ start.title }}
              </p>
            </div>
            <ul class="startedList column ga-3 text-start pl-5 pr-3 mt-5">
              <li v-for="(item, index) in start.list" :key="index">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        started: [
          {
            title: "HIGH WAGES & OPERATING COSTS:",
            image: "contactUs/high-wages-recruitment.png",
            alt: "High Wages Recruitment",
            list: [
              "Recruitment costs",
              "Employment taxes",
              "Overhead costs & Fringe benefits",
              "Payroll management",
            ],
          },
          {
            title: "LONG RECRUITMENT TIME:",
            image: "contactUs/long-recruitment.png",
            alt: "Long Recruitment",
            list: [
              "2-8 weeks recruitment",
              "Dozens of interviews that lead nowhere",
              "Candidate Drop-off and long-term unavailability",
              "Inaccurate job posting",
            ],
          },
          {
            title: "NOT FINDING THE RIGHT CANDIDATES:",
            image: "contactUs/right-candidates-recruitment.png",
            alt: "Right Candidates Recruitment",
            list: [
              "Inaccurate resumes",
              "Unqualified candidates",
              "Lack of experience in recruitment",
              "Difficulty in international hiring",
            ],
          },
        ],
      };
    },
    methods: {
      getImgUrl(imgName) {
        return new URL(`/src/web/assets/images/${imgName}`, import.meta.url)
          .href;
      },
    },
  };
</script>

<script setup>
  import { scrollBottom } from "@/motions.js";
</script>

<style scoped>
  .getStartedBg {
    background: url("@/web/assets/images/contactUs/get-started-Executive-Assistant-bg.webp");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .getStarted {
    gap: 5rem;
  }

  .started {
    position: relative;
    border-top-left-radius: 4rem;
    border-bottom-right-radius: 4rem;
  }

  .startIcon {
    width: 6.25rem;
    position: absolute;
    top: -2.5rem;
    left: 0;
    right: 0;
    margin: 0 auto;
  }

  .startedList {
    list-style: outside;
  }

  @media only screen and (min-width: 480px) {
    .getStarted {
      gap: 6rem;
    }
    .startIcon {
      width: 7rem;
      top: -3rem;
    }
  }

  @media only screen and (min-width: 1080px) {
    .getStarted {
      width: 95%;
      flex-direction: row;
      align-items: start;
    }

    .started {
      height: 25rem;
      border-top-left-radius: 52px;
      border-bottom-right-radius: 52px;
      padding: 4rem 2rem 2rem 2rem !important;
    }

    .startIcon {
      width: 6rem;
      top: -1.5rem;
    }

    .startedTitle {
      font-size: 1.2rem;
    }

    li {
      font-size: 0.9rem;
    }
  }

  @media only screen and (min-width: 1085px) {
    .started {
      height: 23rem;
    }
  }

  @media only screen and (min-width: 1280px) {
    .started {
      height: 21rem;
    }
  }

  @media only screen and (min-width: 1440px) {
    .getStarted {
      width: 85%;
    }

    .started {
      height: 20rem;
    }
  }

  @media only screen and (min-width: 1600px) {
    .getStarted {
      width: 75%;
    }

    .started {
      height: 21.5rem;
    }
  }
</style>
