<template>
  <HeaderPagesComponent />
  <section class="heroPagesWave bg-white columnAlignCenter">
    <div class="heroPages flexCenter">
      <h1 v-motion="scrollBottom" class="text-midnight">
        Grow Your Business With
        <span class="text-radioactive">Iconic Assistants</span>
      </h1>
    </div>
  </section>
  <!-- Step 1 -->
  <section class="skyRadioactive">
    <div class="content">
      <div class="stepDesktop columnAlignCenter">
        <div class="stepDesktopBody columnAlignCenter ga-1">
          <p v-motion="scrollBottom" class="subtitle text-white">Step 1</p>
          <h2 v-motion="scrollBottom" class="text-white">Share Your Needs</h2>
          <p v-motion="scrollBottom" class="w-75 text-white my-3">
            Schedule a 15-minute call so we can tailor our services to your
            business needs. Free yourself to focus on growth. Book your
            consultation with Iconic Assistants today.
          </p>
          <div class="w-75 mobileModel">
            <img
              src="@/web/assets/images/howItWorks/Executive-Assistant-Call.png"
              alt="Remote Talent Call"
              width="75%"
              v-motion="scrollBottom"
              class="rounded-circle elevation-5 my-5" />
          </div>
          <router-link
            class="primaryButton elevation-5 mt-5"
            :to="'/contact-us'"
            >Request a Free Consultation</router-link
          >
        </div>
        <div class="desktopModel columnAlignCenter justify-center">
          <img
            src="@/web/assets/images/howItWorks/Executive-Assistant-Call.png"
            alt="Remote Talent Call"
            width="90%"
            v-motion="scrollBottom"
            class="rounded-xl elevation-5 my-5" />
        </div>
      </div>
    </div>
  </section>
  <!-- Step 2 -->
  <section class="radioactiveWaves bg-grayBg">
    <div class="content">
      <div class="stepDesktop reversed columnAlignCenter">
        <div class="stepDesktopBody columnAlignCenter ga-1">
          <p v-motion="scrollBottom" class="subtitle">Step 2</p>
          <h2 v-motion="scrollBottom" class="text-midnight">
            Pick The Right Candidate
          </h2>
          <p v-motion="scrollBottom" class="w-75 my-3">
            Our HR team selects top candidates from our database, presenting you
            the best match. Meet them with our representative for a smooth
            introduction.
          </p>
          <div class="w-75 mobileModel">
            <img
              src="@/web/assets/images/howItWorks/Executive-Assistant-Right-Candidate.png"
              alt="Remote Talent Right Candidate"
              width="75%"
              v-motion="scrollBottom"
              class="rounded-circle elevation-5 my-5" />
          </div>
          <router-link
            class="secondaryButton elevation-5 mt-5"
            :to="'/how-we-hire'"
            >How We Hire</router-link
          >
        </div>
        <div class="desktopModel columnAlignCenter justify-center">
          <img
            src="@/web/assets/images/howItWorks/Executive-Assistant-Right-Candidate.png"
            alt="Remote Talent Right Candidate"
            width="90%"
            v-motion="scrollBottom"
            class="rounded-xl elevation-5 my-5" />
        </div>
      </div>
    </div>
  </section>
  <!-- Step 3 -->
  <section class="radioactiveSky">
    <div class="content">
      <div class="stepDesktop columnAlignCenter">
        <div class="stepDesktopBody columnAlignCenter ga-1">
          <p v-motion="scrollBottom" class="subtitle text-white">Step 3</p>
          <h2 v-motion="scrollBottom" class="text-white">Set Up Your EA</h2>
          <p v-motion="scrollBottom" class="w-75 text-white my-3">
            A smooth transition for your remote talent: introduce tasks, ensure
            responsibilities alignment, and receive ongoing support for seamless
            onboarding.
          </p>
          <div class="w-75 mobileModel">
            <img
              src="@/web/assets/images/howItWorks/Executive-Assistant-Tasks.png"
              alt="Remote Talent Tasks"
              width="75%"
              v-motion="scrollBottom"
              class="rounded-circle elevation-5 my-5" />
          </div>
          <router-link
            class="primaryButton elevation-5 my-5"
            :to="'/types-of-eas'"
            >Types of EAs</router-link
          >
        </div>
        <div class="desktopModel columnAlignCenter justify-center">
          <img
            src="@/web/assets/images/howItWorks/Executive-Assistant-Tasks.png"
            alt="Remote Talent Tasks"
            width="90%"
            v-motion="scrollBottom"
            class="rounded-xl elevation-5 my-5" />
        </div>
      </div>
    </div>
  </section>
  <!-- Step 4 -->
  <section class="skyRadioactiveWaves bg-grayBg">
    <div class="content">
      <div class="stepDesktop reversed columnAlignCenter">
        <div class="stepDesktopBody columnAlignCenter ga-1">
          <p v-motion="scrollBottom" class="subtitle">Step 4</p>
          <h2 v-motion="scrollBottom" class="text-midnight">
            Experience continual support
          </h2>
          <p v-motion="scrollBottom" class="w-75 my-3">
            Iconic Assistants offers unwavering support, addressing inquiries
            and providing guidance whenever needed. You're never alone on your
            path to success.
          </p>
          <div class="w-75 mobileModel">
            <img
              src="@/web/assets/images/howItWorks/Executive-Assistant-Support.png"
              alt="Remote Talent Support"
              width="75%"
              v-motion="scrollBottom"
              class="rounded-circle elevation-5 my-5" />
          </div>
          <router-link
            class="secondaryButton elevation-5 mt-5"
            :to="'/contact-us'"
            >Contact Us</router-link
          >
        </div>
        <div class="desktopModel columnAlignCenter justify-center">
          <img
            src="@/web/assets/images/howItWorks/Executive-Assistant-Support.png"
            alt="Remote Talent Support"
            width="90%"
            v-motion="scrollBottom"
            class="rounded-xl elevation-5 my-5" />
        </div>
      </div>
    </div>
  </section>
  <FooterComponent />
</template>

<script setup>
  import { scrollBottom } from "@/motions.js";
</script>

<script>
  import HeaderPagesComponent from "@/web/components/HeaderPagesComponent.vue";
  import FooterComponent from "@/web/components/FooterComponent.vue";

  import { computed } from "vue";
  import { useHead } from "@vueuse/head";
  import { useRoute } from "vue-router";

  export default {
    name: "HowItWorks",
    components: {
      HeaderPagesComponent,
      FooterComponent,
    },
    setup() {
      const route = useRoute();
      useHead({
        title: computed(() => route.meta.title),
        meta: [
          {
            name: "description",
            content: computed(() => route.meta.description),
          },
        ],
      });
    },
  };
</script>

<style scoped>
  .desktopModel {
    display: none;
  }

  /* Desktop */
  @media only screen and (min-width: 1080px) {
    .mobileModel {
      display: none;
    }

    .desktopModel {
      width: 32.5%;
      display: inline-block;
    }

    .stepDesktop {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    .reversed {
      flex-direction: row-reverse;
      gap: 3vw;
    }

    .stepDesktopBody {
      width: 52.5%;
      align-items: flex-start;
      text-align: start;
    }

    .stepDesktopBody p {
      width: 90% !important;
    }
  }

  /* XL */
  @media only screen and (min-width: 1440px) {
    .desktopModel {
      width: 30%;
    }

    .stepDesktopBody {
      width: 45%;
    }
  }

  @media only screen and (min-width: 1600px) {
    .desktopModel img {
      width: 80%;
    }
  }

  @media only screen and (min-width: 1750px) {
    .desktopModel img {
      width: 75%;
    }
  }
</style>
