<template>
  <section class="radioactiveSkyWaves">
    <div class="content">
      <div class="columnAlignCenter">
        <h2 v-motion="scrollBottom" class="text-midnight">
          Questions That We Are Asked Most Often
        </h2>
        <div class="faq w-75 columnAlignCenter ga-2 my-5">
          <v-expansion-panels
            v-for="(item, index) in faq"
            :key="index"
            v-motion="scrollBottom"
            class="faqWrapper mt-3">
            <v-expansion-panel
              class="elevation-2"
              :title="item.title"
              :text="item.text">
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
        <router-link class="secondaryButton mt-5 elevation-5" :to="'/faq'"
          >View more Frequently Asked Questions</router-link
        >
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        faq: [
          {
            title: "How do i pay Iconic Assistants",
            text: "You’ll pay your virtual assistant through Iconic Assistants. You’ll pay us, a US-based company, and we will pay the Virtual Assistant. For US-based clients, we accept Credit Cards and ACH payments and for international clients, we only accept Credit Cards (transactions fees may apply).",
          },
          {
            title: "Can I hire a Part-Time Virtual Assistant?",
            text: "Yes, we can help you outsource part-time virtual assistant for your business or specific campaigns. Our plans include either part-time (80 hours per month) or full-time (160 hours per month) VA's.",
          },
          {
            title: "Can I provide the work hours?",
            text: "Yes, candidates will be informed of your business’s preferred work hours. Iconic Assistants are flexible and can work within the time your business requires.",
          },
          {
            title: "How quickly can I be Up and Running?",
            text: "From the first meeting, it takes approximately 10 to 20 business days to find, interview and qualify the right candidates options for you and your business.",
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
  h2 {
    margin-top: 3vw;
  }

  .secondaryButton{
    width: 90%;
  }

  .faq {
    width: 80% !important;
  }

  @media only screen and (min-width: 1080px) {
    .faq {
      width: 100% !important;
    }
  }

  @media only screen and (min-width: 1280px) {
    .secondaryButton {
      width: 40% !important;
    }
  }

  /* XL */
  @media only screen and (min-width: 1440px) {
    .faq {
      width: 55% !important;
    }
  }

  @media only screen and (min-width: 1750px) {
    .secondaryButton {
      width: 35% !important;
    }
  }

  @media only screen and (min-width: 1920px) {
    h2 {
      margin-top: 50px;
    }
  }
</style>
