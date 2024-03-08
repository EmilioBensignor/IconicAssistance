<template>
  <section class="radioactiveWaves">
    <p v-motion="scrollBottom" class="subtitle text-radioactive">Why us?</p>
    <h2 v-motion="scrollBottom" class="mb-3 text-midnight">
      What Makes Us Different
    </h2>
    <div class="flexCenter ga-10 my-5">
      <div
        v-for="(item, index) in different"
        :key="index"
        v-motion="scrollBottom"
        class="different flexCenter rounded-xl elevation-5 w-75 pa-4 pb-6">
        <p class="differentTitle text-midnight">{{ item.title }}</p>
        <v-img
          eager
          :src="getImgUrl(item.img)"
          :alt="item.alt"
          class="shadow-2"
          width="70%"></v-img>
        <div class="flexCenter ga-3">
          <p class="differentSubtitle text-radioactive">{{ item.subtitle }}</p>
          <p>{{ item.body }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { scrollBottom } from "@/motions.js";
</script>

<script>
  export default {
    data() {
      return {
        different: [
          {
            title: "Top Talent",
            img: "different/Top-Talent-Remote-Talent.png",
            alt: "Top Talent Remote Talent",
            subtitle: "Boost Productivity",
            body: "Access diverse services, from admin tasks to specialized projects, with reliable, experienced remote talent.",
          },
          {
            title: "Transparent Fees",
            img: "different/Transparent-Fees-Remote-Talent.png",
            alt: "Transparent Fees Remote Talent",
            subtitle: "Transparent Pricing",
            body: "Our clear pricing outlines costs, no hidden fees. Budget with confidence, no unexpected charges.",
          },
          {
            title: "Customized Packages",
            img: "different/Customized-Solutions-Remote-Talent.png",
            alt: "Customized Solutions Remote Talent",
            subtitle: "Customized Solutions",
            body: "Tailor services to your needs. Scale as requirements change. Optimize spending, paying only for essential assistance.",
          },
        ],
      };
    },
    methods: {
      getImgUrl(imgName) {
        return new URL(`../../assets/images/${imgName}`, import.meta.url).href;
      },
    },
  };
</script>

<style scoped>
  .differentTitle {
    font-weight: 600;
    font-size: 1.4rem;
  }
  .differentSubtitle {
    font-weight: 600;
    font-size: 1.1rem;
  }

  /* SM */
  @media only screen and (min-width: 480px) {
    .different {
      width: 50% !important;
    }
    .differentTitle {
      font-size: 1.5rem;
    }
    .differentSubtitle {
      font-size: 1.2rem;
    }
  }
  /* MD */
  @media only screen and (min-width: 769px) {
    .differentTitle {
      font-size: 1.6rem;
    }
    .differentSubtitle {
      font-size: 1.3rem;
    }
  }
</style>
