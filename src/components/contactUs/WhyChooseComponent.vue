<template>
  <section class="skyBlueWaves">
    <h2 v-motion="scrollBottom" class="mb-5">Why chose ICONIC?</h2>
    <p v-motion="scrollBottom">
      Every day, we tackle numerous business challenges so you can focus on other things. Since 2022, we've transformed the task of getting work done into something seemingly simple.
    </p>
    <div class="columnAlignCenter ga-10 py-10">
      <div v-motion="scrollBottom" class="columnAlignCenter ga-5" v-for="(item, index) in choose" :key="index">
        <img width="70%" :src="getImgUrl(item.img)" :alt="item.title">
        <p class="titleContact font-weight-bold">{{ item.title }}</p>
        <p v-html="item.text"></p>
      </div>
    </div>
    <a class="secondaryButton" href="#hero">Get Started</a>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        choose: [
          {
            img: "Top-Talent-Nothing-Less.png",
            title: "Top Talent Nothing Less",
            text: "At Iconic Assistants, we recognize that our strength lies in our <span class='font-weight-bold'>exceptional team</span>. We are dedicated to finding the finest talent to drive <span class='font-weight-bold'>success</span> and deliver <span class='font-weight-bold'>excellence</span> to our clients. Our hiring process is a testament to this commitment.",
          },
          {
            img: "No-Recruitment-Fees.png",
            title: "No Recruitment Fees",
            text: "Rest assured, there are <span class='font-weight-bold'>no hidden fees</span> with Iconic Assistants. What you see is what you get. We believe in <span class='font-weight-bold'>transparent pricing</span>, ensuring you have clarity and confidence in the service you receive.",
          },
          {
            img: "Delegation-Support.png",
            title: "Delegation Support",
            text: "We're confident you'll appreciate your Iconic Executive Assistant. Additionally, you'll have a <span class='font-weight-bold'>dedicated Customer Success Manager</span> readily available for any inquiries or adjustments. Reach out via text, email, or video chat. They're <span class='font-weight-bold'>always</span> here <span class='font-weight-bold'>to support you</span>.",
          },
        ],
      };
    },
    methods: {
      getImgUrl(imgName) {
        return new URL(
          `../../assets/images/contactUs/${imgName}`,
          import.meta.url
        ).href;
      },
    },
  };
</script>

<script setup>
import { scrollBottom } from "@/motions.js";
</script>