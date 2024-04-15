<template>
  <HeaderPagesComponent />
  <section class="heroPagesWave columnAlignCenter">
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
            Schedule a 15-minute call with our sales reps to tailor our services
            to your business needs. Free yourself to focus on growth. Book your
            consultation with Iconic Assistants today.
          </p>
          <div class="w-75 mobileModel">
            <img
              src="@/assets/images/howItWorks/Remote-Talent-Call.png"
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
            src="@/assets/images/howItWorks/Remote-Talent-Call.png"
            alt="Remote Talent Call"
            width="90%"
            v-motion="scrollBottom"
            class="rounded-xl elevation-5 my-5" />
        </div>
      </div>
    </div>
  </section>
  <!-- Step 2 -->
  <section class="reversed radioactiveWaves">
    <div class="content">
      <div class="stepDesktop columnAlignCenter">
        <div class="stepDesktopBody columnAlignCenter ga-1">
          <p v-motion="scrollBottom" class="subtitle">Step 2</p>
          <h2 v-motion="scrollBottom" class="text-midnight">
            Pick The Right Candidate
          </h2>
          <p v-motion="scrollBottom" class="w-75 my-3">
            Our HR team selects top candidates from our database, presenting you
            with a shortlist. Meet them with our representative for a perfect
            business match.
          </p>
          <div class="w-75 mobileModel">
            <img
              src="@/assets/images/howItWorks/Remote-Talent-Right-Candidate.png"
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
            src="@/assets/images/howItWorks/Remote-Talent-Right-Candidate.png"
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
          <h2 v-motion="scrollBottom" class="text-white">Set Up Your VA</h2>
          <p v-motion="scrollBottom" class="w-75 text-white my-3">
            A smooth transition for your remote talent: introduce tasks, ensure
            responsibilities alignment, and receive ongoing support for seamless
            onboarding.
          </p>
          <div class="w-75 mobileModel">
            <img
              src="@/assets/images/howItWorks/Remote-Talent-Tasks.png"
              alt="Remote Talent Tasks"
              width="75%"
              v-motion="scrollBottom"
              class="rounded-circle elevation-5 my-5" />
          </div>
          <router-link
            class="primaryButton elevation-5 my-5"
            :to="'/types-of-vas'"
            >Types of VAs</router-link
          >
        </div>
        <div class="desktopModel columnAlignCenter justify-center">
          <img
            src="@/assets/images/howItWorks/Remote-Talent-Tasks.png"
            alt="Remote Talent Tasks"
            width="90%"
            v-motion="scrollBottom"
            class="rounded-xl elevation-5 my-5" />
        </div>
      </div>
    </div>
  </section>
  <!-- Step 4 -->
  <section class="reversed skyRadioactiveWaves">
    <div class="content">
      <div class="stepDesktop columnAlignCenter">
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
              src="@/assets/images/howItWorks/Remote-Talent-Support.png"
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
            src="@/assets/images/howItWorks/Remote-Talent-Support.png"
            alt="Remote Talent Support"
            width="90%"
            v-motion="scrollBottom"
            class="rounded-xl elevation-5 my-5" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { scrollBottom } from "@/motions.js";
</script>

<script>
  import HeaderPagesComponent from "@/components/HeaderPagesComponent.vue";

  export default {
    name: 'HowItWorks',
    components: {
      HeaderPagesComponent,
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
