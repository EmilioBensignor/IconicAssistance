<template>
  <section class="radioactiveSky">
    <p class="subtitle text-white">Our Service</p>
    <h2 class="text-white">Tailored For Your Success</h2>
    <div class="columnAlignCenter py-3 px-2 ga-5">
      <div
        class="columnAlignCenter text-center text-white w-75 ga-2 mt-10"
        v-for="(item, index) in tailoredServices"
        :key="index">
        <v-img :src="getImgUrl(item.img)" :alt="item.alt" width="75%"></v-img>
        <p class="tailoredTitle text-white">{{ item.title }}</p>
        <p class="text-white">{{ item.body }}</p>
        <div class="w-75 bg-white mt-10 whiteLine"></div>
      </div>
      <div class="my-5 columnAlignCenter ga-2 w-100">
        <p class="text-white homeH4">Tell us what you need!</p>
        <router-link
          class="primaryButton elevation-5 mt-5 mb-3"
          :to="'/contact-us'"
          >Contact Us</router-link
        >
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        tailoredServices: [
          {
            img: "tailoredServices/Recruitment-Expertise-Pre-Vetted Proffesionals.png",
            alt: "Recruitment Expertise Pre-Vetted Proffesionals",
            title: "Recruitment",
            body: "We source the finest remote talent from our extensive, pre-vetted candidate pool. Our thorough process ensures a perfect match for your needs within 10 to 20 business days.",
          },
          {
            img: "tailoredServices/Payroll-Experience-Remote-Talent.png",
            alt: "Payroll Experience Remote Talent",
            title: "Payroll",
            body: "Regardless of your country, we handle payroll seamlessly, eliminating taxes, overhead, and fringe costs for a hassle-free experience.",
          },
          {
            img: "tailoredServices/Compliance-Outsource-Remote-Talent.png",
            alt: "Compliance Outsource Remote Talent",
            title: "Analytics & Compliance",
            body: "Benefit from continuous support with our dedicated Client Success Agents. We guide you through onboarding, providing you with metrics and reports ensuring both satisfaction and compliance.",
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
  .tailoredTitle {
    font-size: 1.4rem;
    font-weight: 600;
  }
  .whiteLine {
    height: 1px;
  }
    .homeH4 {
    font-size: 1.2rem;
    font-weight: 600;
  }
</style>
