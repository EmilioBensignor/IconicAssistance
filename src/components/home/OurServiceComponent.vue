<template>
  <section class="radioactiveSky pb-10">
    <p v-motion="scrollBottom" class="subtitle text-white">Our Service</p>
    <h2 v-motion="scrollBottom" class="text-white">
      Tailored For Your Success
    </h2>
    <div class="threeTailor columnAlignCenter py-3 px-2 ga-5">
      <div class="tailor flexCenter text-white w-75 ga-2 mt-10" v-for="(item, index) in tailoredServices"
        v-motion="scrollBottom" :key="index">
        <v-img eager :src="getImgUrl(item.img)" :alt="item.alt" class="shadow-5" width="75%"></v-img>
        <p class="tailoredTitle text-white">{{ item.title }}</p>
        <p v-html="item.body" class="text-white"></p>
        <div class="w-75 bg-white mt-10 whiteLine"></div>
      </div>
    </div>
    <div class="tellUsWrapper my-5 columnAlignCenter ga-2 w-100">
      <p v-motion="scrollBottom" class="text-white font-weight-bold tellUs">
        Tell us what you need!
      </p>
      <router-link class="primaryButton elevation-5 mt-5" :to="'/contact-us'">Contact Us</router-link>
    </div>
  </section>
</template>

<script setup>
import { scrollBottom } from "@/motions.js";
</script>

<script>
export default {
  data() {
    return {
      tailoredServices: [
        {
          img: "tailoredServices/Recruitment-Expertise-Pre-Vetted Proffesionals.png",
          alt: "Recruitment Expertise Pre-Vetted Proffesionals",
          title: "Recruitment",
          body: "We source the <span class=font-weight-bold>finest remote talent</span> from our extensive, <span class=font-weight-bold>pre-vetted</span> candidate pool. Our thorough process ensures a <span class=font-weight-bold>perfect match</span> for your needs within 10 to 20 business days.",
        },
        {
          img: "tailoredServices/Payroll-Experience-Remote-Talent.png",
          alt: "Payroll Experience Remote Talent",
          title: "Payroll",
          body: "Regardless of your country, we handle <span class=font-weight-bold>payroll</span> seamlessly, <span class=font-weight-bold>eliminating taxes</span>, overhead, and fringe costs for a <span class=font-weight-bold>hassle-free experience</span>.",
        },
        {
          img: "tailoredServices/Compliance-Outsource-Remote-Talent.png",
          alt: "Compliance Outsource Remote Talent",
          title: "Analytics & Compliance",
          body: "Benefit from <span class=font-weight-bold>continuous support</span> with our dedicated Client Success Agents. We guide you through <span class=font-weight-bold>onboarding</span>, providing you with metrics and reports ensuring both <span class=font-weight-bold>satisfaction</span> and <span class='font-weight-bold text-decoration-underline'>compliance</span>.",
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

.tellUs {
  font-size: 1.2rem;
  font-weight: 600;
}

/* SM */
@media only screen and (min-width: 480px) {
  .tailor {
    width: 50% !important;
  }

  .tailoredTitle {
    font-size: 1.5rem;
  }

  .tellUs {
    font-size: 1.3rem;
  }
}

/* MD */
@media only screen and (min-width: 769px) {
  .tailoredTitle {
    font-size: 1.6rem;
  }

  .tellUs {
    font-size: 1.4rem;
  }
}

/* LG */
@media only screen and (min-width: 992px) {
  .threeTailor {
    display: flex;
    flex-direction: row;
    margin-top: 5vw;
  }

  .tailor {
    height: 60vh !important;
    margin-top: 0 !important;
  }

  .tailoredTitle {
    margin-top: 3vw;
  }

  .tailor .v-img {
    width: 60% !important;
  }

  .whiteLine {
    display: none;
  }
}

/* Desktop */
@media only screen and (min-width: 1080px) {
  .tailor {
    height: 58vh !important;
  }

  .tailoredTitle {
    width: 95% !important;
  }
}

@media only screen and (min-width: 1280px) {
  .tailor .v-img {
    width: 65% !important;
  }
}

/* XL */
@media only screen and (min-width: 1440px) {
  .tailoredTitle {
    font-size: 1.8rem;
  }

  .tellUs {
    font-size: 1.5rem;
  }
}

@media only screen and (min-width: 1600px) {
  .threeTailor {
    width: 90%;
  }

  .tellUsWrapper {
    margin-top: 3vw !important;
  }
}

@media only screen and (min-width: 1750px) {
  .tailor .v-img {
    width: 60% !important;
  }
}
</style>
