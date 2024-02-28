<template>
  <section class="radioactiveWaves">
    <p v-motion="scrollBottom" class="subtitle text-midnight">Testimonials</p>
    <h2 v-motion="scrollBottom" class="text-midnight">Positive Reviews From Our Clients</h2>
    <div class="columnAlignCenter ga-8 my-5">
      <div
        v-for="(item, index) in reviews"
        :key="index"
        v-motion="scrollBottom"
        class="w-75 column skyRadioactive rounded-xl elevation-5 py-3 pl-4">
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
