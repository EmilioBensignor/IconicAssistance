<template>
  <section class="radioactiveSky">
    <p v-motion="scrollBottom" class="subtitle text-white">Our Mission</p>
    <h2 v-motion="scrollBottom" class="text-white">
      Elevating Efficiency with Cost-Effective Excellence
    </h2>
    <div class="guaranteeTasks columnAlignCenter">
      <div class="w-75 divGuarantee">
        <img width="75%" class="guarantee shadow-5" v-motion="scrollBottom"
          src="@/assets/images/aboutUs/100-Guarantee-Remote-Talent.png" alt="100% Guarantee Remote Talent" />
      </div>
      <ul class="w-75 tasks flexCenter text-white ga-5">
        <li v-motion="scrollBottom">
          Make high-quality outsourcing accessible to all indsutries
        </li>
        <li v-motion="scrollBottom">
          Provide cost-effective solutions without compromising excellence
        </li>
        <li v-motion="scrollBottom">
          Commitment to maintaining the highest quality and performance
        </li>
        <li v-motion="scrollBottom">
          Ensure emerging businesses and entrepreneurs can access top-tier
          support
        </li>
        <li v-motion="scrollBottom">
          Support businesses' thrive and expansion
        </li>
        <li v-motion="scrollBottom">
          Invite businesses to join our mission for outsourcing excellence
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { scrollBottom } from "@/motions.js";
</script>

<style scoped>
/* MD */
@media only screen and (min-width: 769px) {
  .guarantee {
    width: 50%;
  }
}

/* Desktop */
@media only screen and (min-width: 1080px) {
  .guaranteeTasks {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 3vw;
  }

  .divGuarantee {
    width: 45% !important;
  }

  .divGuarantee img {
    width: 65% !important;
  }

  .tasks {
    width: 45% !important;
    align-items: flex-start;
    text-align: start;
    gap: 1vw !important;
    font-weight: 500;
    list-style: circle;
  }
}

@media only screen and (min-width: 1280px) {
  .tasks li {
    font-size: 1.05rem;
  }
}

/* XL */
@media only screen and (min-width: 1440px) {
  .guaranteeTasks {
    margin-top: 1.5vw;
  }

  .divGuarantee img {
    width: 55% !important;
  }

  .tasks li {
    font-size: 1.1rem;
  }
}

@media only screen and (min-width: 1600px) {
  .divGuarantee {
    width: 40% !important;
  }

  .divGuarantee img {
    width: 60% !important;
  }

  .tasks li {
    font-size: 1.2rem;
  }
}
</style>
