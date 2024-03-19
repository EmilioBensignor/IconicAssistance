<template>
  <section class="radioactiveWaves">
    <p v-motion="scrollBottom" class="subtitle text-midnight">Testimonials</p>
    <h2 v-motion="scrollBottom" class="text-midnight">
      Positive Reviews From Our Clients
    </h2>
    <div class="testimonialWrap columnAlignCenter ga-8 my-5">
      <div
        v-for="(item, index) in reviews"
        :key="index"
        v-motion="scrollBottom"
        class="w-75 testimonial column skyRadioactive rounded-xl elevation-5 py-3 pl-4">
        <div class="d-flex justify-self-start mb-3">
          <img
            class="shadow-15"
            src="@/assets/images/misc/Five-Stars.png"
            alt="Five Stars" />
        </div>
        <p class="text-start text-white">
          {{ item.text }}
        </p>
        <p class="text-start mt-3 text-white font-weight-bold">
          {{ item.author }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        reviews: [
          {
            text: '"Iconic Assistants not only enhance efficiency but also offer substantial savings. Their transparent pricing ensures cost-effectiveness, making them the go-to choice for businesses seeking quality and affordability."',
            author: "Caleb Scott",
          },
          {
            text: '"Iconic streamlines operations – a smart investment in efficiency."',
            author: "Harper Lewis",
          },
          {
            text: '"Iconic delivers excellence without overhead costs. A savvy choice for boosting productivity."',
            author: "Chloe Mitchell",
          },
          {
            text: '"Strategic support meets affordability with Iconic Assistants. Their cost-effective solutions make quality assistance accessible. Its not just an expense; it is an investment to explore in business success."',
            author: "Zoey Adams",
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
  /* Desktop */
  @media only screen and (min-width: 1080px) {
    .testimonialWrap {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, 1fr);
    }
    .testimonialWrap div:nth-child(1) {
      grid-area: 1 / 1 / 2 / 3;
    }
    .testimonialWrap div:nth-child(2) {
      grid-area: 1 / 3 / 2 / 4;
    }
    .testimonialWrap div:nth-child(3) {
      grid-area: 2 / 1 / 3 / 2;
    }
    .testimonialWrap div:nth-child(4) {
      grid-area: 2 / 2 / 3 / 4;
    }
    .testimonial{
      width: 100% !important;
      height: 100% !important;
      border-radius: 16px !important;
    }
  }
</style>
