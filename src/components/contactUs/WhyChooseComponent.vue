<template>
  <section class="skyBlueWaves">
    <h2 v-motion="scrollBottom" class="mb-5">Why chose ICONIC?</h2>
    <p v-motion="scrollBottom" class="explication">
      Every day, we tackle numerous business challenges so you can focus on other things. Since 2022, we've transformed
      the task of getting work done into something seemingly simple.
    </p>
    <div class="chooseWrapper columnAlignCenter ga-10 py-10">
      <div v-motion="scrollBottom" class="choose w-75 columnAlignCenter ga-5" v-for="(item, index) in choose"
        :key="index">
        <img width="80%" :src="getImgUrl(item.img)" :alt="item.title">
        <p class="titleContact titleChoose">{{ item.title }}</p>
        <p v-html="item.text"></p>
      </div>
    </div>
    <a class="secondaryButton elevation-3 px-10 py-5" href="#hero">Get Started</a>
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

<style scoped>
.titleChoose{
  font-weight: 450;
}

.choose p {
  width: 100% !important;
}

/* SM */
@media only screen and (min-width: 480px) {
  .choose img {
    width: 75% !important;
  }
}

/* MD */
@media only screen and (min-width: 769px) {
  .choose img {
    width: 60% !important;
  }
}

/* LG */
@media only screen and (min-width: 992px) {
  .choose img {
    width: 50% !important;
  }
}

/* Desktop */
@media only screen and (min-width: 1080px) {
  .chooseWrapper{
    width: 90%;
    flex-direction: row;
    align-items: flex-start;
    gap: 1.5rem !important;
  }
  .choose img{
    width: 85% !important;
  }
  .secondaryButton {
    padding: 2vw 3.5vw !important;
  }
}
</style>