<template>
  <section class="radioactiveSky">
    <div class="content">
      <div class="exceptional reversed columnAlignCenter">
        <div class="exceptionalBody columnAlignCenter ga-1">
          <h2 v-motion="scrollBottom" class="text-white">
            Exceptional Skill, No Compromise
          </h2>
          <p v-motion="scrollBottom" class="w-75 text-white my-3">
            At Iconic Assistants, our strength lies in an exceptional team
            dedicated to driving success and delivering excellence. Join us on
            our journey towards excellence.
          </p>
          <div class="w-75 mobileExceptional my-5">
            <img
              src="@/assets/images/howWeHire/Exceptional-Skill-Remote-Talent.png"
              alt="Exceptional Skill Remote Talent"
              v-motion="scrollBottom"
              class="remoteModel rounded-circle elevation-5"
              width="75%"
              eager />
          </div>
          <router-link
            class="primaryButton elevation-5 mt-3"
            :to="'/contact-us'"
            >Contact Us</router-link
          >
        </div>
        <div class="desktopExceptional columnAlignCenter justify-center">
          <img
            src="@/assets/images/howWeHire/Exceptional-Skill-Remote-Talent.png"
            alt="Exceptional Skill Remote Talent"
            v-motion="scrollBottom"
            class="remoteModel rounded-xl elevation-5"
            width="90%"
            eager />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { scrollBottom } from "@/motions.js";
</script>

<style scoped>
  .desktopExceptional {
    display: none;
  }

  /* LG */
  @media only screen and (min-width: 992px) {
    .mobileExceptional {
      width: 50% !important;
    }
  }

  /* Desktop */
  @media only screen and (min-width: 1080px) {
    .mobileExceptional {
      display: none;
    }

    .desktopExceptional {
      width: 35%;
      display: inline-block;
    }

    .exceptional {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    .reversed {
      flex-direction: row-reverse;
      gap: 3vw;
    }

    .exceptionalBody {
      width: 45%;
      align-items: flex-start;
      text-align: start;
    }

    .exceptionalBody p {
      width: 90% !important;
    }
  }

  /* XL */
  @media only screen and (min-width: 1440px) {
    .exceptional img {
      width: 80% !important;
    }
  }

  @media only screen and (min-width: 1600px) {
    .exceptional img {
      width: 75% !important;
    }

    .reversed {
      gap: 1.5vw;
    }
  }

  @media only screen and (min-width: 1750px) {
    .exceptional img {
      width: 70% !important;
    }
  }

  @media only screen and (min-width: 1920px) {
    .reversed {
      gap: 20px;
    }
  }
</style>
