<template>
  <section class="skyRadioactive">
    <p class="subtitle text-white">Testimonials</p>
    <h2 class="text-white">Positive Reviews From Our Clients</h2>
    <div class="columnAlignCenter ga-8 my-5">
      <div
        v-for="(item, index) in reviews"
        :key="index"
        class="w-75 column bg-white rounded-xl elevation-5 py-3 pl-4">
        <div class="d-flex justify-self-start mb-3">
          <img 
            src="@/assets/images/misc/Five-Stars.png" 
            alt="Five Stars" 
            class="shadow-15"/>
        </div>
        <p class="text-start">
          {{ item.text }}
        </p>
        <p class="text-start mt-3 text-radioactive font-weight-bold">
          {{ item.author }}
        </p>
      </div>
    </div>
    <!-- <router-link :to="'/'"></router-link> -->
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
