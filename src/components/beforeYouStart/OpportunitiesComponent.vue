<template>
  <section class="skyRadioactive opportunities">
    <div class="opportunitiesLeft w-75 columnAlignCenter">
      <p v-motion="scrollBottom" class="subtitle text-white">
        Define your needs
      </p>
      <h2 v-motion="scrollBottom" class="text-white">
        Outsourcing Opportunities
      </h2>
      <p v-motion="scrollBottom" class="textOpportunities text-white my-5">
        Ready to supercharge your efficiency?
      </p>
      <div class="w-75 vaMobile">
        <img
          src="@/assets/images/beforeYouStart/Outsource-Remote-Talent.png"
          alt="Outsource Remote Talent"
          class="rounded-circle elevation-5 my-5"
          v-motion="scrollBottom"
          width="100%" />
      </div>
      <p v-motion="scrollBottom" class="w-75 text-white my-3">
        Start by pinpointing tasks ideal for a virtual assistant. Identify
        time-consuming and repetitive duties ripe for delegation, such as:
      </p>
      <div class="vaOpportunities d-flex ga-3 my-5">
        <ul
          v-motion="scrollBottom"
          class="column ga-3 text-white font-weight-bold">
          <li>Appointment Setting</li>
          <li>Bookkeeping</li>
          <li>Cold Calling</li>
          <li>CRM Management</li>
          <li>Customer Satisfaction</li>
        </ul>
        <ul
          v-motion="scrollBottom"
          class="column ga-3 text-white font-weight-bold">
          <li>Data Analysis</li>
          <li>Data Entry</li>
          <li>Document Transcription</li>
          <li>Email Management</li>
          <li>Social Media Analytics</li>
        </ul>
      </div>
    </div>
    <div class="w-75 opportunitiesRight">
      <img
        src="@/assets/images/beforeYouStart/Outsource-Remote-Talent.png"
        alt="Outsource Remote Talent"
        class="rounded-xl elevation-5 my-5"
        v-motion="scrollBottom"
        width="90%" />
    </div>
  </section>
</template>

<script setup>
  import { scrollBottom } from "@/motions.js";
</script>

<style scoped>
  .opportunitiesRight {
    display: none;
  }

  /* Desktop */
  @media only screen and (min-width: 1080px) {
    .vaMobile {
      display: none;
    }
    .opportunitiesRight {
      display: block;
    }
    .opportunities {
      display: flex;
      flex-direction: row;
      gap: 3vw;
      padding: 0 10vw;
    }
    .opportunitiesRight,
    .opportunitiesLeft {
      width: 50% !important;
      display: flex;
      justify-content: center;
    }
    .opportunitiesLeft {
      text-align: start;
      align-items: flex-start;
    }
    .opportunitiesLeft .subtitle {
      text-align: start;
    }
    .opportunitiesLeft p {
      width: 100% !important;
    }
    .textOpportunities{
      margin-top: 1vw !important;
      margin-bottom: 0 !important;
    }
    .vaOpportunities{
      padding-left: 3vw;
      gap: 3.5vw !important;
    }
    ul{
      list-style: circle;
    }
  }

  @media only screen and (min-width: 1280px){
    ul li{
      font-size: 1.1rem
    }
  }
</style>
