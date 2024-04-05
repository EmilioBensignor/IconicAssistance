<template>
  <section class="radioactiveWaves">
    <div class="howWeWork columnAlignCenter">
      <div class="columnAlignCenter howWeWorkRight">
        <p v-motion="scrollBottom" class="subtitle text-radioactive">
          How We Work
        </p>
        <h2 v-motion="scrollBottom" class="text-midnight py-1">
          Your Prosperity, Our Approach
        </h2>
        <p v-motion="scrollBottom" class="w-75 textHowWeWorkRight py-2">
          When collaborating with us, be confident that you'll receive the
          utmost professionalism and expertise. Our remote talent undergo
          rigorous training and possess extensive experience across various
          domains, such as administrative support, marketing, customer service,
          and beyond.
        </p>
        <router-link class="buttonDesktop secondaryButton elevation-5 mb-5" :to="'/how-we-hire'">
          Learn About How We Hire
        </router-link>
      </div>
      <div v-motion="scrollBottom" class="w-75 prosperityModel columnAlignCenter mt-5 mb-10">
        <img class="rounded-t-xl elevation-7" src="@/assets/images/aboutUs/Professional-Remote-Talent.png"
          alt="Professional Remote Talent" width="85%" />
        <div class="columnAlignCenter aboutModelCaption py-3 bg-white rounded-xl elevation-7">
          <p class="text-radioactive text-center">
            We employ cutting-edge tools and technologies to stay current with
            the latest developments in the industry and adhere to the best
            practices.
          </p>
        </div>
      </div>
    </div>
    <router-link class="buttonMobile secondaryButton elevation-5 mb-5" :to="'/how-we-hire'">
      Learn About How We Hire
    </router-link>
    <div class="divTools columnAlignCenter">
      <p v-motion="scrollBottom" class="tools my-5">Some of the tools we use</p>
      <div class="w-100 logos d-flex justify-center flex-wrap ga-5">
        <div v-for="(item, index) in tools" :key="index" v-motion="scrollBottom" class="tool columnAlignCenter">
          <v-img eager width="100%" class="shadow-15" :src="getImgUrl(item.img)" :alt="item.alt"></v-img>
        </div>
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
          img: "tools/Asana-Logo.png",
          alt: "Asana Logo",
        },
        {
          img: "tools/Calendly-Logo.png",
          alt: "Calendly Logo",
        },
        {
          img: "tools/Dropbox-Logo.png",
          alt: "Dropbox Logo",
        },
        {
          img: "tools/Google-Suit-Logo.png",
          alt: "Google Suit Logo",
        },
        {
          img: "tools/Intuit-Quickbooks-Logo.png",
          alt: "Intuit Quickbooks Logo",
        },
        {
          img: "tools/Mailchimp-Logo.png",
          alt: "Mailchimp Logo",
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
          img: "tools/Trello-Logo.png",
          alt: "Trello Logo",
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

<script setup>
import { scrollBottom } from "@/motions.js";
</script>

<style scoped>
.buttonDesktop {
  display: none;
}

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

.tools {
  font-size: 1.3rem;
  font-weight: 550;
}

.tool {
  width: 45%;
}

/* SM */
@media only screen and (min-width: 480px) {
  .tools {
    font-size: 1.4rem;
  }

  .tool {
    width: 45%;
  }
}

/* MD */
@media only screen and (min-width: 769px) {
  .divTools {
    width: 75%;
  }

  .tools {
    font-size: 1.5rem;
  }

  .tool {
    width: 25%;
  }
}

/* Desktop */
@media only screen and (min-width: 1080px) {
  .buttonMobile {
    display: none;
  }

  .buttonDesktop {
    display: block;
  }

  .howWeWork {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
  }

  .howWeWorkRight {
    width: 50%;
    text-align: start;
    align-items: flex-start;
  }

  .textHowWeWorkRight {
    width: 90% !important;
    margin: 0.5vw 0 1.5vw 0;
  }

  .prosperityModel {
    width: 50% !important;
  }

  .aboutModelCaption p {
    width: 90% !important;
  }

  .divTools {
    width: 95% !important;
  }

  .tools {
    font-size: 1.8rem;
    margin-bottom: 3vw !important;
  }

  .logos {
    width: 75% !important;
  }

  .tool .v-img {
    width: 75% !important;
  }
}

/* XL */
@media only screen and (min-width: 1440px) {
  .prosperityModel {
    width: 45% !important;
  }
}

@media only screen and (min-width: 1600px) {
  .prosperityModel {
    width: 40% !important;
    margin-right: 1vw;
  }

  .divTools {
    margin: 2vw 0 !important;
  }

  .tools {
    margin: 2vw 0 !important;
  }
}

@media only screen and (min-width: 1750px) {
  .prosperityModel {
    width: 35% !important;
  }

  .tool .v-img {
    width: 70% !important;
  }
}

@media only screen and (min-width: 1920px) {
  .aboutModelCaption{
    margin-top: -90px;
  }
  .divTools{
    width: 70% !important;
    margin: 30px 0 !important;
  }
  .tool .v-img {
    width: 80% !important;
  }
}
</style>
