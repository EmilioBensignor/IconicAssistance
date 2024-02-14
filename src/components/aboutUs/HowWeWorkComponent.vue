<template>
  <section>
    <p class="subtitle text-radioactive">How We Work</p>
    <h2 class="text-midnight py-1">Your Prosperity, Our Approach</h2>
    <p class="py-2">
      When collaborating with us, be confident that you'll receive the utmost
      professionalism and expertise. Our remote talent undergo rigorous training
      and possess extensive experience across various domains, such as
      administrative support, marketing, customer service, and beyond.
    </p>
    <div class="prosperityModel columnAlignCenter mt-5 mb-10">
      <img
        class="rounded-t-xl elevation-7"
        src="@/assets/images/aboutUs/Professional-Remote-Talent.png"
        alt="Professional Remote Talent"
        width="85%" />
      <div
        class="columnAlignCenter aboutModelCaption py-3 bg-white rounded-xl elevation-7">
        <p class="text-radioactive text-center">
          We employ cutting-edge tools and technologies to stay current with the
          latest developments in the industry and adhere to the best practices.
        </p>
      </div>
    </div>
    <router-link class="secondaryButton mb-5" :to="'/how-we-hire'">
      Learn About How We Hire
    </router-link>
    <p class="my-5">Some of the tools we use</p>
    <!-- ARREGLAR LAS TOOLS -->
    <div v-for="(item, index) in tools" :key="index">
      <v-img width="45%" :src="getImgUrl(item.img)" :alt="item.alt"></v-img>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        tools: [
          {
            img: "tools/Google-Suit-Logo.png",
            alt: "Google Suit Logo",
          },
          {
            img: "tools/Monday-Logo.png",
            alt: "Monday Logo",
          },
        ],
      };
    },
    methods: {
      getImgUrl(imgName) {
        return `${import.meta.env.BASE_URL}assets/images/${imgName}`;
      },
    },
  };
</script>

<style scoped>
  .prosperityModel {
    position: relative;
  }
  .aboutModelCaption {
    position: static;
    z-index: 1;
    width: 85%;
    border: 1px solid #373ae6;
    margin-top: -5vw;
  }
</style>
