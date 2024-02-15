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
    <p class="tools my-5">Some of the tools we use</p>
    <!-- ARREGLAR LAS TOOLS -->
    <div class="d-flex justify-center flex-wrap ga-5">
      <div 
      v-for="(item, index) in tools" 
      :key="index"
      class="w-25">
      <img width="100%" :src="getImgUrl(item.img)" :alt="item.alt" />
    </div>
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
            img: "tools/Intuit-Quickbooks-Logo.png",
            alt: "Intuit Quickbooks Logo",
          },
          {
            img: "tools/Microsoft-Office-Logo.png",
            alt: "Microsoft Office Logo",
          },
          {
            img: "tools/Microsoft-Teams-Logo.png",
            alt: "Microsoft Teams Logo",
          },
          {
            img: "tools/Monday-Logo.png",
            alt: "Monday Logo",
          },
          {
            img: "tools/Panda-Doc-Logo.png",
            alt: "Panda Doc Logo",
          },
          {
            img: "tools/Shopify-Logo.png",
            alt: "Shopify Logo",
          },
          {
            img: "tools/Slack-Logo.png",
            alt: "Slack Logo",
          },
          {
            img: "tools/Team-Viewer-Logo.png",
            alt: "Team Viewer Logo",
          },
          {
            img: "tools/WhatsApp-Telegram-Logos.png",
            alt: "WhatsApp Telegram Logos",
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
  .tools{
    font-size: 1.3rem;
    font-weight: 550;
  }
</style>
