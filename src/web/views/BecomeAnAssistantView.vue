<template>
  <HeaderContactComponent />
  <section class="bg-grayBg columnAlignCenter">
    <div class="heroPages flexCenter">
      <h1 v-motion="scrollBottom" class="text-midnight">
        Become an Iconic Assistant
      </h1>
    </div>
  </section>
  <section class="bg-grayBg">
    <div class="w-100 maxContent">
      <h2 class="text-start">Current Opportunities</h2>
      <div class="column align-start ga-5 py-5">
        <div
          v-for="(item, index) in opportunities"
          class="w-100 columnAlignCenter ga-10 justify-space-between opportunity elevation-1 rounded-lg py-5 px-10"
          :key="index">
          <div class="opportunityTitle columnAlignCenter ga-2">
            <p class="w-auto text-center font-weight-bold">{{ item.title }}</p>
            <p class="w-auto text-center">
              {{ item.type }} <span>{{ item.ubication }}</span>
            </p>
          </div>
          <div>
            <a
              class="btnOpportunity bg-radioactive rounded-pill elevation-3 px-5 py-3"
              :href="item.link"
              >Learn More</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
  <FooterContactComponent />
</template>

<script>
  import HeaderContactComponent from "@/web/components/contactUs/HeaderContactComponent.vue";
  import FooterContactComponent from "@/web/components/contactUs/FooterContactComponent.vue";

  export default {
    components: {
      HeaderContactComponent,
      FooterContactComponent,
    },
    data() {
      return {
        opportunities: [
          {
            title: "Executive Assistant",
            type: "Freelance",
            ubication: "(LatAm)",
            link: "https://gabrielafasanella.hiringroom.com/jobs/get_vacancy/663b86b93475a94868be36ba",
          },
          {
            title: "Customer Support Assistant",
            type: "Freelance",
            ubication: "(LatAm)",
            link: "https://gabrielafasanella.hiringroom.com/jobs/get_vacancy/663b884f3475a9d4a6be3a04",
          },
          {
            title: "Sales Assistant",
            type: "Freelance",
            ubication: "(LatAm)",
            link: "https://gabrielafasanella.hiringroom.com/jobs/get_vacancy/66b67d4bc1250c447ac12af6",
          },
        ],
      };
    },
  };
</script>

<script setup>
  import { scrollBottom } from "@/motions.js";
</script>

<style scoped>
  .maxContent {
    max-width: 900px;
  }
  .opportunity {
    border: 1px solid #bcc1d1;
  }
  .btnOpportunity {
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 600;
    border: 1px solid #373ae6;
  }
  .btnOpportunity:hover {
    background-color: white !important;
    color: #373ae6 !important;
  }
  @media only screen and (min-width: 540px) {
    .opportunity {
      flex-direction: row;
      gap: 0;
    }
    .opportunityTitle {
      align-items: flex-start;
    }
  }
</style>
