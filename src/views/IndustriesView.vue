<template>
  <HeaderTransparentComponent />
  <section class="heroIndustries flexCenter" :style="{
    backgroundImage: `url(${getBackgroundUrl(industry.img)})`,
  }">
    <div class="heroOverlay flexCenter justify-center">
      <div class="heroPages flexCenter ga-4">
        <h1 v-motion="scrollBottom" class="text-white">{{ industry.name }}</h1>
        <p v-motion="scrollBottom" class="subtitle text-white">
          {{ industry.subtitle }}
        </p>
      </div>
    </div>
    <img src="@/assets/images/misc/White-Bottom-Wave.png" alt="White Bottom Wave" class="heroPagesWhiteWave"
      width="100%" />
  </section>
  <DifferencesComponent />
  <section class="skyRadioactive">
    <div class="content">
      <div class="columnAlignCenter">
        <h2 v-motion="scrollBottom" class="text-white">
          VAs That Suit Your Industry
        </h2>
        <div v-if="industry" class="w-75 vaSuit columnAlignCenter ga-13 my-5">
          <div v-for="(vaType, index) in industry.vaTypes" :key="index" v-motion="scrollBottom"
            class="vaSuitIndividual w-75 columnAlignCenter bg-white rounded-xl elevation-5 pb-5">
            <v-img :src="getVaTypeUrl(vaType.img)" :alt="vaType.alt"
              class="d-flex justify-center align-end rounded-t-xl" width="100%">
              <h3 class="w-100 columnAlignCenter text-white mb-3">
                {{ vaType.va }}
              </h3>
            </v-img>
            <div class="tasksOutsource columnAlignCenter">
              <p class="mt-3 font-weight-bold">Tasks to outsource:</p>
              <p class="summary mt-3">{{ vaType.summary }}</p>
            </div>
          </div>
        </div>
        <router-link class="primaryButton mt-5 elevation-5" :to="'/types-of-vas'">Look at our Types of VAs</router-link>
      </div>
    </div>
  </section>
  <GuaranteeComponent />
  <FooterComponent />
</template>

<script>
import HeaderTransparentComponent from "@/components/HeaderTransparentComponent.vue";
import { industries } from "@/cms/industries.service.js";
import DifferencesComponent from "@/components/industries/DifferencesComponent.vue";
import GuaranteeComponent from "@/components/industries/GuaranteeComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: {
    HeaderTransparentComponent,
    DifferencesComponent,
    GuaranteeComponent,
    FooterComponent,
  },
  data() {
    return {
      industries: industries,
      industry: null,
      industrySlug: null,
    };
  },
  created() {
    this.fetchIndustryDetails();
  },
  watch: {
    $route() {
      this.fetchIndustryDetails();
    },
  },
  methods: {
    fetchIndustryDetails() {
      this.industrySlug = this.$route.params.slug;
      this.industry = industries.find(
        (industry) => industry.slug === this.industrySlug
      );
    },
    getBackgroundUrl(imgName) {
      return new URL(
        `../assets/images/industries/${imgName}`,
        import.meta.url
      ).href;
    },
    getVaTypeUrl(imgName) {
      return new URL(`../assets/images/typesOfVa/${imgName}`, import.meta.url)
        .href;
    },
  },
};
</script>

<script setup>
import { scrollBottom } from "@/motions.js";
</script>

<style scoped>
.heroIndustries {
  position: relative;
  width: 100%;
  height: 525px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.heroOverlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

/* SM */
@media only screen and (min-width: 480px) {
  .heroIndustries {
    height: 600px;
  }
}

/* MD */
@media only screen and (min-width: 769px) {
  .heroIndustries {
    height: 675px;
  }

  .subtitle {
    font-size: 1.2rem;
  }

  .vaSuit {
    width: 50% !important;
  }
}

/* LG */
@media only screen and (min-width: 992px) {
  .heroIndustries {
    width: 100vw;
    height: 700px;
  }
}

/* Desktop */
@media only screen and (min-width: 1080px) {
  .heroIndustries {
    width: 100vw;
    height: 725px;
  }

  .subtitle {
    width: 60%;
    font-size: 1.3rem;
  }

  .vaSuit {
    width: 90% !important;
    flex-direction: row;
    align-items: flex-start;
    gap: 2vw !important;
    margin-top: 3vw !important;
  }

  .vaSuitIndividual {
    height: 60vh;
  }

  .vaSuit h3 {
    font-size: 1.4rem;
    margin-bottom: 0.5vw !important;
  }

  .tasksOutsource {
    height: 100%;
  }

  .summary {
    font-size: 1rem;
  }
}

@media only screen and (min-width: 1280px) {
  .heroIndustries {
    width: 100vw;
    height: 800px;
  }

  .vaSuitIndividual {
    height: 52vh;
  }
}

/* XL */
@media only screen and (min-width: 1440px) {
  .heroIndustries {
    height: 875px;
  }

  .subtitle {
    font-size: 1.4rem;
  }

  .vaSuit {
    margin-bottom: 3vw !important;
  }
}

@media only screen and (min-width: 1600px) {
  .heroIndustries {
    height: 925px;
  }

  .subtitle {
    font-size: 1.5rem;
  }

  .vaSuitIndividual {
    height: 52vh;
  }
}

@media only screen and (min-width: 1750px) {
  .heroIndustries {
    height: 975px;
  }

  .subtitle {
    font-size: 1.6rem;
  }

  .vaSuitIndividual {
    height: 50vh;
  }
}

@media only screen and (min-width: 1920px) {
  .heroIndustries {
    height: 1015px;
  }

  .subtitle {
    font-size: 1.7rem;
  }

  .vaSuitIndividual {
    height: 465px;
  }
}
</style>
