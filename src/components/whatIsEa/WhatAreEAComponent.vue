<template>
  <section class="skyRadioactive">
    <div class="content">
      <div class="whatAreEa columnAlignCenter">
        <div class="whatAreEaLeft columnAlignCenter ga-3">
          <p v-motion="scrollBottom" class="subtitle text-white">
            What are Executive Assistants
          </p>
          <h2 v-motion="scrollBottom" class="text-white">
            Introduction To Executive Assistants
          </h2>
          <p v-motion="scrollBottom" class="w-75 text-white">
            A executive assistant remotely provides administrative, technical, or
            specialized support to businesses or individuals. Using technology
            and communication tools, they manage emails, schedule appointments,
            make travel arrangements, conduct research, and more.
          </p>
          <div class="w-75 eaMobile">
            <img
              src="@/assets/images/whatIsEa/Executive-Assistant-Model.png"
              alt="Executive Assistant Iconic Assistants"
              class="rounded-circle elevation-5 my-5"
              v-motion="scrollBottom"
              width="75%" />
          </div>
          <router-link
            class="primaryButton elevation-5 mt-3"
            :to="'/how-we-hire'"
            >Learn About How We Hire</router-link
          >
        </div>
        <div class="whatAreEaRight">
          <img
            src="@/assets/images/whatIsEa/Executive-Assistant-Model.png"
            alt="Executive Assistant Iconic Assistants"
            class="rounded-xl elevation-5 my-5"
            v-motion="scrollBottom"
            width="90%" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { scrollBottom } from "@/motions.js";
</script>

<style scoped>
  .whatAreEaRight {
    display: none;
  }

  /* Desktop */
  @media only screen and (min-width: 1080px) {
    .eaMobile {
      display: none;
    }

    .whatAreEaRight {
      display: block;
    }

    .whatAreEa {
      display: flex;
      flex-direction: row;
      gap: 3vw;
      padding: 0 10vw;
    }

    .whatAreEaLeft,
    .whatAreEaRight {
      width: 50% !important;
      display: flex;
      justify-content: center;
    }

    .whatAreEaLeft {
      text-align: start;
      align-items: flex-start;
    }

    .whatAreEaLeft .subtitle {
      text-align: start;
    }

    .whatAreEaLeft p {
      width: 100% !important;
    }
  }

  /* XL */
  @media only screen and (min-width: 1440px) {
    .whatAreEaLeft,
    .whatAreEaRight {
      width: 45% !important;
    }

    .whatAreEaRight img {
      width: 75%;
    }
  }

  @media only screen and (min-width: 1600px) {
    .whatAreEaRight img {
      width: 70%;
    }
  }

  @media only screen and (min-width: 1750px) {
    .whatAreEaRight img {
      width: 65%;
    }
  }

  @media only screen and (min-width: 1920px) {
    .whatAreEa {
      padding: 0 200px;
    }
  }
</style>
