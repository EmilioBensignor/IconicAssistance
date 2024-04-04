<template>
  <section class="skyRadioactive whatAreVa">
    <div class="whatAreVaLeft columnAlignCenter ga-3">
      <p v-motion="scrollBottom" class="subtitle text-white">
        What are Virtual Assistants
      </p>
      <h2 v-motion="scrollBottom" class="text-white">
        Introduction To Virtual Assistants
      </h2>
      <p v-motion="scrollBottom" class="w-75 text-white">
        A virtual assistant remotely provides administrative, technical, or
        specialized support to businesses or individuals. Using technology and
        communication tools, they manage emails, schedule appointments, make
        travel arrangements, conduct research, and more.
      </p>
      <div class="w-75 vaMobile">
        <img src="@/assets/images/whatIsVa/Remote-Talent-Model.png" alt="Remote Talent Iconic Assistants"
          class="rounded-circle elevation-5 my-5" v-motion="scrollBottom" width="75%" />
      </div>
      <router-link class="primaryButton elevation-5 mt-3" :to="'/how-we-hire'">Learn About How We Hire</router-link>
    </div>
    <div class="whatAreVaRight">
      <img src="@/assets/images/whatIsVa/Remote-Talent-Model.png" alt="Remote Talent Iconic Assistants"
        class="rounded-xl elevation-5 my-5" v-motion="scrollBottom" width="90%" />
    </div>
  </section>
</template>

<script setup>
import { scrollBottom } from "@/motions.js";
</script>

<style scoped>
.whatAreVaRight {
  display: none;
}

/* Desktop */
@media only screen and (min-width: 1080px) {
  .vaMobile {
    display: none;
  }

  .whatAreVaRight {
    display: block;
  }

  .whatAreVa {
    display: flex;
    flex-direction: row;
    gap: 3vw;
    padding: 0 10vw;
  }

  .whatAreVaLeft,
  .whatAreVaRight {
    width: 50% !important;
    display: flex;
    justify-content: center;
  }

  .whatAreVaLeft {
    text-align: start;
    align-items: flex-start;
  }

  .whatAreVaLeft .subtitle {
    text-align: start;
  }

  .whatAreVaLeft p {
    width: 100% !important;
  }
}

/* XL */
@media only screen and (min-width: 1440px) {

  .whatAreVaLeft,
  .whatAreVaRight {
    width: 45% !important;
  }

  .whatAreVaRight img {
    width: 75%;
  }
}

@media only screen and (min-width: 1600px) {
  .whatAreVaRight img {
    width: 70%;
  }
}

@media only screen and (min-width: 1750px) {
  .whatAreVaRight img {
    width: 65%;
  }
}
</style>
