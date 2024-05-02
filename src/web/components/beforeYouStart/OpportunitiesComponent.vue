<template>
  <section class="skyRadioactive">
    <div class="content">
      <div class="opportunities columnAlignCenter">
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
          <div class="w-75 eaMobile">
            <img
              src="@/web/assets/images/beforeYouStart/Outsource-Executive-Assistant.png"
              alt="Outsource Executive Assistant"
              class="rounded-circle elevation-5 my-5"
              v-motion="scrollBottom"
              width="100%" />
          </div>
          <p v-motion="scrollBottom" class="w-75 text-white my-3">
            Start by pinpointing tasks ideal for a executive assistant. Identify
            time-consuming and repetitive duties ripe for delegation, such as:
          </p>
          <div class="eaOpportunities d-flex ga-3 my-5">
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
            src="@/web/assets/images/beforeYouStart/Outsource-Executive-Assistant.png"
            alt="Outsource Remote Talent"
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
  .opportunitiesRight {
    display: none;
  }

  /* Desktop */
  @media only screen and (min-width: 1080px) {
    .eaMobile {
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

    .textOpportunities {
      margin-top: 1vw !important;
      margin-bottom: 0 !important;
    }

    .eaOpportunities {
      padding-left: 3vw;
      gap: 3.5vw !important;
    }

    ul {
      list-style: circle;
    }
  }

  @media only screen and (min-width: 1280px) {
    ul li {
      font-size: 1.1rem;
    }
  }

  /* XL */
  @media only screen and (min-width: 1440px) {
    .opportunitiesRight,
    .opportunitiesLeft {
      width: 45% !important;
    }

    .opportunitiesRight img {
      width: 75%;
    }
  }

  @media only screen and (min-width: 1600px) {
    .opportunitiesRight img {
      width: 70%;
    }
  }

  @media only screen and (min-width: 1750px) {
    .opportunitiesRight img {
      width: 65%;
    }

    ul li {
      font-size: 1.2rem;
    }
  }

  @media only screen and (min-width: 1920px) {
    .opportunities {
      gap: 50px;
      padding: 0 200px;
    }

    .opportunitiesRight img {
      width: 60%;
    }

    .textOpportunities {
      margin-top: 10px !important;
    }

    .eaOpportunities {
      padding-left: 60px;
      gap: 60px !important;
    }

    ul li {
      font-size: 1.25rem;
    }
  }
</style>
