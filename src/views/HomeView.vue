<template>
  <HeaderTransparentComponent />
  <section class="landing pa-0">
    <div class="content">
      <video
        preload="yes"
        playsinline
        webkit-playsinline
        x5-playsinline
        autoplay
        muted
        loop
        class="backgroundVideo">
        <source
          src="@/assets/videos/Hire-Top-Remote-Talent-with-Iconic-Assistants.mp4"
          type="video/mp4" />
        <source
          src="@/assets/videos/Hire-Top-Remote-Talent-with-Iconic-Assistants.mp4"
          type="video/webm" />
        <source
          src="@/assets/videos/Hire-Top-Remote-Talent-with-Iconic-Assistants.mp4"
          type="video/quicktime" />
      </video>
      <div class="overlay"></div>
      <div class="hero flexCenter ga-5">
        <h1 class="text-white">
          Hire Top Remote Talent with
          <span class="text-blueSky">ICONIC ASSISTANTS</span>
        </h1>
        <p class="text-landing text-center text-white">
          Leading the way in Executive Assistant solutions, the top choice for your outsourcing needs.
        </p>
        <router-link class="heroCall elevation-10 mt-2" :to="'/contact-us'">Hire ICONIC</router-link>
      </div>
    </div>
  </section>
  <WhoWeAreComponent />
  <WhyUsComponent />
  <OurServiceComponent />
  <HowItWorksComponent />
  <IndustriesComponent />
  <CostComparisonComponent />
  <!-- <section class="skyBlueWaves">
    <p v-motion="scrollBottom" class="subtitle text-radioactive">Pricing</p>
    <h2 v-motion="scrollBottom" class="text-midnight">
      Select A Plan Now To Get More Done
    </h2>
    <PricingComponent />
    <router-link
      :to="'/contact-us'"
      class="secondaryButton mt-5 mb-3 elevation-5"
      >Get a Free Consultation</router-link
    >
  </section> -->
  <FAQsComponent />
  <FooterComponent />
</template>

<script>
  import HeaderTransparentComponent from "@/components/HeaderTransparentComponent.vue";
  import WhoWeAreComponent from "@/components/home/WhoWeAreComponent.vue";
  import WhyUsComponent from "@/components/home/WhyUsComponent.vue";
  import HowItWorksComponent from "@/components/home/HowItWorksComponent.vue";
  import OurServiceComponent from "@/components/home/OurServiceComponent.vue";
  import CostComparisonComponent from "@/components/home/CostComparisonComponent.vue";
  import IndustriesComponent from "@/components/home/IndustriesComponent.vue";
  import PricingComponent from "@/components/home/PricingComponent.vue";
  import FAQsComponent from "@/components/home/FAQsComponent.vue";
  import FooterComponent from "@/components/FooterComponent.vue";

  export default {
    name: 'Home',
    components: {
      HeaderTransparentComponent,
      WhoWeAreComponent,
      WhyUsComponent,
      HowItWorksComponent,
      OurServiceComponent,
      CostComparisonComponent,
      IndustriesComponent,
      PricingComponent,
      FAQsComponent,
      FooterComponent,
    },
  };
</script>

<style scoped>
  .landing {
    position: relative;
    width: 100vw;
    height: 95vh;
    overflow: hidden;
  }

  .backgroundVideo {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
  }

  .hero {
    width: 90vw;
    z-index: 3;
    margin-top: 18vh;
  }

  .text-landing {
    font-size: 1.3rem;
    font-weight: 500;
  }

  .heroCall {
    background-color: #373ae6;
    color: white;
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    font-size: 1.3rem;
    font-weight: 600;
    padding: 3.5vw 10vw;
    border-radius: 50px;
    transition: all ease 0.2s;
  }

  .heroCall:hover {
    background-color: #0cb8f1;
    border-radius: 0 50px 0 50px;
  }

  /* SM */
  @media only screen and (min-width: 480px) {
    .hero {
      width: 85vw;
      margin-top: 25vh;
    }

    .text-landing {
      font-size: 1.4rem;
    }

    .heroCall {
      font-size: 1.5rem;
      padding: 2.5vw 7.5vw;
    }
  }

  /* MD */
  @media only screen and (min-width: 769px) {
    .hero {
      width: 80vw;
      margin-top: 25vh;
    }

    .text-landing {
      font-size: 1.5rem;
    }

    .heroCall {
      font-size: 1.6rem;
      padding: 2vw 5.5vw;
    }
  }

  /* LG */
  @media only screen and (min-width: 992px) {
    .hero {
      margin-top: 22vh;
    }

    .text-landing {
      font-size: 1.8rem;
    }

    .heroCall {
      font-size: 1.8rem;
      padding: 1.35vw 4.5vw;
    }
  }

  @media only screen and (min-width: 1280px) {
    .text-landing {
      width: 65%;
      font-size: 1.7rem;
    }
  }

  /* XL */
  @media only screen and (min-width: 1440px) {
    .text-landing {
      width: 70%;
      font-size: 1.8rem;
    }

    .heroCall {
      font-size: 1.9rem;
      padding: 1.3vw 4vw;
    }
  }

  @media only screen and (min-width: 1600px) {
    .hero {
      width: 85%;
      gap: 1.5vw !important;
      margin-top: 13vw;
    }

    .text-landing {
      font-size: 1.9rem;
    }

    .heroCall {
      font-size: 2rem;
      padding: 1.1vw 3.8vw;
    }
  }

  @media only screen and (min-width: 1750px) {
    .text-landing {
      font-size: 2rem;
    }

    .heroCall {
      font-size: 2.1rem;
      padding: 1vw 3.2vw;
    }
  }

  @media only screen and (min-width: 1920px) {
    .landing{
      height: auto;
    }
    .hero {
      gap: 25px !important;
      margin: 15% 0;
    }
    .text-landing {
      width: 65%;
      font-size: 2.2rem;
    }

    .heroCall {
      font-size: 2.3rem;
      padding: 17.5px 54px;
    }
  }
</style>
