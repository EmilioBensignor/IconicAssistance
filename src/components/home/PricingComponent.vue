<template>
  <div class="columnAlignCenter my-5 rounded-lg pricingContainer">
    <v-tabs
      class="rounded-t-lg pricingTabs elevation-4"
      v-motion="scrollBottom"
      v-model="tab"
      fixed-tabs
      bg-color="radioactive">
      <v-tab value="full-time">Full</v-tab>
      <v-tab value="part-time">Part</v-tab>
      <v-tab value="build-team">Team</v-tab>
    </v-tabs>
    <div
      v-motion="scrollBottom"
      class="plan elevation-6 w-75 mt-6 bg-white rounded-xl">
      <v-window v-model="tab" class="pb-5">
        <v-window-item value="full-time">
          <div class="flexCenter px-4 ga-1">
            <img
              class="shadow-15 mt-6 mb-2"
              width="25%"
              src="@/assets/images/pricing/full-time-remote-talent.png"
              alt="Full Time Remote Talent" />
            <p>Full-Time</p>
            <p class="planPrice">From $9.55/Hr</p>
            <p>Billed monthly.</p>
            <ul class="column align-start ga-2 mt-3">
              <li class="d-flex">
                <v-icon icon="mdi-check" color="radioactive" size="x-large">
                </v-icon>
                <p class="text-start w-100 text-radioactive ml-2">
                  160 Hours per Month of Virtual Assistants
                </p>
              </li>
              <li
                class="d-flex align-center"
                v-for="(item, index) in plans"
                :key="index">
                <v-icon icon="mdi-check" color="radioactive" size="x-large">
                </v-icon>
                <p class="text-start w-100 text-radioactive ml-2">
                  {{ item }}
                </p>
              </li>
            </ul>
          </div>
        </v-window-item>
        <v-window-item value="part-time">
          <div class="px-4 flexCenter ga-1">
            <img
              class="shadow-15 mt-6 mb-2"
              width="25%"
              src="@/assets/images/pricing/part-time-remote-talent.png"
              alt="Part Time Remote Talent" />
            <p>Part-Time</p>
            <p class="planPrice">From $10.85/Hr</p>
            <p>Billed monthly.</p>
            <ul class="d-flex flex-column align-st3rt ga-2 mt-2">
              <li class="d-flex">
                <v-icon icon="mdi-check" color="radioactive" size="x-large">
                </v-icon>
                <p class="text-start w-100 text-radioactive ml-2">
                  80 Hours per Month of Virtual Assistants
                </p>
              </li>
              <li
                class="d-flex align-center"
                v-for="(item, index) in plans"
                :key="index">
                <v-icon icon="mdi-check" color="radioactive" size="x-large">
                </v-icon>
                <p class="text-start w-100 text-radioactive ml-2">
                  {{ item }}
                </p>
              </li>
            </ul>
          </div>
        </v-window-item>
        <v-window-item value="build-team">
          <div class="px-4 flexCenter ga-1">
            <img
              class="shadow-15 mt-6 mb-2"
              width="25%"
              src="@/assets/images/pricing/build-your-iconic-team.png"
              alt="Build Your Iconic Team" />
            <p>Build Your Team</p>
            <p class="planPrice">Get a Quote</p>
            <p>Billed monthly.</p>
            <ul class="d-flex flex-column align-st3rt ga-2 mt-2">
              <li class="d-flex">
                <v-icon icon="mdi-check" color="radioactive" size="x-large">
                </v-icon>
                <p class="text-start w-100 text-radioactive ml-2">
                  Custom Team Tailored to your Needs
                </p>
              </li>
              <li
                class="d-flex align-center"
                v-for="(item, index) in plans"
                :key="index">
                <v-icon icon="mdi-check" color="radioactive" size="x-large">
                </v-icon>
                <p class="text-start w-100 text-radioactive ml-2">
                  {{ item }}
                </p>
              </li>
            </ul>
          </div>
        </v-window-item>
      </v-window>
    </div>
  </div>
</template>

<script setup>
  import { scrollBottom } from "@/motions.js";
</script>

<script>
  export default {
    data() {
      return {
        tab: null,
        plans: [
          "Email and Chat Support",
          "Customer Success Agent",
          "No Lock In Contract",
          "No Replacement and Recriotment Fees",
          "Performance Reviews",
          "Optional Time-Tracking Software",
          "Optional Secure Remote Worker Software",
        ],
      };
    },
  };
</script>

<style scoped>
  .pricingTabs {
    font-family: "Poppins", sans-serif;
  }
  .planPrice {
    font-weight: 700;
    font-size: 1.2rem;
  }

  /* SM */
  @media only screen and (min-width: 480px) {
    .plan {
      width: 50% !important;
    }
    .planPrice {
      font-size: 1.3rem;
    }
  }

  /* MD */
  @media only screen and (min-width: 769px) {
    .planPrice {
      font-size: 1.4rem;
    }
  }
</style>
