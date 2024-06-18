<template>
  <section class="skyRadioactive whoWeAre pt-7">
    <div class="content">
      <div class="w-50 eaModel">
        <img loading="lazy" src="@/web/assets/images/misc/Executive-Assistant-Iconic-Assistants.png"
          alt="Executive Assistant Iconic Assistants" class="rounded-xl elevation-5" height="100%" width="100%" />
        <div class="caption columnAlignCenter py-3">
          <p class="text-white">
            Our executive assistants undergo rigorous interviews and thorough
            evaluations to guarantee a perfect alignment with your specific
            requirements and expectations.
          </p>
        </div>
      </div>
      <div class="columnAlignCenter rightWhoWeAre">
        <p v-motion="scrollBottom" class="subtitle text-white">Who we are</p>
        <h2 v-motion="scrollBottom" class="text-white">
          Outsourcing made simple and cost-effective
        </h2>
        <p v-motion="scrollBottom" class="textWhoWeAre w-75 text-white my-3">
          Welcome to Iconic Assistants where outsourcing meets excellence! At
          Iconic Assistants, we take pride in being a
          <span class="font-weight-bold">premier outsourcing</span> company
          dedicated to bridging the gap between North American companies and
          top-tier <span class="font-weight-bold">global talent</span>. Our
          mission is clear: simplify and streamline the hiring process for
          businesses by managing all
          <span class="font-weight-bold">administrative</span> tasks related to
          recruitment and payroll.
        </p>
        <div v-motion="scrollBottom" class="fourWhoWeAre d-flex justify-space-between ga-5 my-3">
          <div class="d-flex flex-column ga-3">
            <div class="d-flex align-center">
              <v-icon icon="mdi-chevron-double-right" color="white" size="x-large"></v-icon>
              <p class="who text-white w-100 font-weight-bold text-start">
                Tailored to you
              </p>
            </div>
            <div class="d-flex align-center">
              <v-icon icon="mdi-chevron-double-right" color="white" size="x-large"></v-icon>
              <p class="who text-white w-100 font-weight-bold text-start">
                24/7 Support
              </p>
            </div>
          </div>
          <div class="d-flex flex-column ga-3">
            <div class="d-flex align-center">
              <v-icon icon="mdi-chevron-double-right" color="white" size="x-large"></v-icon>
              <p class="who text-white w-100 font-weight-bold text-start">
                Budget Friendly
              </p>
            </div>
            <div class="d-flex align-center">
              <v-icon icon="mdi-chevron-double-right" color="white" size="x-large"></v-icon>
              <p class="who text-white w-100 font-weight-bold text-start">
                Safe & Secure
              </p>
            </div>
          </div>
        </div>
        <router-link class="primaryButton elevation-5 mt-5" :to="'/our-solution'">What We Do</router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { scrollBottom } from "@/motions.js";
</script>

<style scoped>
.eaModel {
  display: none;
}

/* Desktop */
@media only screen and (min-width: 1080px) {
  .whoWeAre {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
  }

  h2 {
    line-height: 1.2;
  }

  .eaModel {
    display: block;
    position: relative;
  }

  .eaModel img {
    object-fit: cover;
  }

  .rightWhoWeAre {
    width: 60%;
    align-items: flex-start;
    text-align: start;
    padding-left: 5vw;
  }

  .rightWhoWeAre p {
    width: 95% !important;
  }

  .textWhoWeAre {
    margin: 0.5vw 0 !important;
  }

  .fourWhoWeAre {
    margin: 0.5vw 0 !important;
  }

  .caption {
    position: absolute;
    background: rgba(30, 58, 128, 0.66);
    bottom: 0;
    border-radius: 0 0 24px 24px;
  }

  .caption p {
    width: 95% !important;
  }
}

@media only screen and (min-width: 1280px) {
  .who {
    font-size: 1.2rem;
  }

  .caption {
    padding: 0.5vw 0 1.5vw 0 !important;
  }
}

/* XL */
@media only screen and (min-width: 1440px) {
  .eaModel {
    width: 45% !important;
  }

  .eaModel img,
  .caption {
    left: 7.5%;
    width: 85%;
  }

  .caption p {
    font-size: 1rem;
  }

  .rightWhoWeAre {
    padding-left: 3vw;
  }
}

@media only screen and (min-width: 1600px) {
  .caption p {
    font-size: 1.05rem;
  }

  .rightWhoWeAre {
    padding-left: 1vw;
  }

  .fourWhoWeAre {
    margin: 1vw 0 !important;
  }

  .who {
    font-size: 1.3rem;
  }
}

@media only screen and (min-width: 1750px) {
  .eaModel img {
    width: 80%;
  }

  .caption {
    width: 80%;
    left: 10%;
    padding: 0.5vw 0 1vw 0 !important;
  }

  .caption p {
    font-size: 1.075rem;
  }

  .rightWhoWeAre {
    padding-left: 0;
  }

  .who {
    font-size: 1.4rem;
  }
}

@media only screen and (min-width: 1920px) {

  .eaModel img,
  .caption {
    width: 76%;
  }

  .caption {
    left: 12%;
    padding: 15px 0 20px 0 !important;
  }

  .fourWhoWeAre {
    margin: 20px 0 !important;
  }

  .who {
    font-size: 1.5rem;
  }
}
</style>
