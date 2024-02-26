<template>
  <section
    class="heroIndustries flexCenter"
    :style="{
      backgroundImage: `url(${getBackgroundUrl(industry.img)})`,
    }">
    <div class="heroOverlay flexCenter justify-center">
      <div class="heroPages flexCenter ga-4">
        <h1 class="text-white">{{ industry.name }}</h1>
        <p class="text-white">{{ industry.subtitle }}</p>
      </div>
    </div>
    <img 
      src="@/assets/images/misc/White-Bottom-Wave.png"
      alt="White Bottom Wave"
      class="heroPagesWhiteWave"
      width="100%"
    />
  </section>
  <DifferencesComponent />
  <section class="skyRadioactive">
    <h2 class="text-white">VAs That Suit Your Industry</h2>
    <div v-if="industry" class="columnAlignCenter ga-13 my-5">
      <div
        v-for="(vaType, index) in industry.vaTypes"
        :key="index"
        class="w-75 columnAlignCenter bg-white rounded-xl elevation-5 pb-5">
        <v-img
          :src="getVaTypeUrl(vaType.img)"
          :alt="vaType.alt"
          class="d-flex justify-center align-end rounded-t-xl"
          width="100%">
          <h3 class="w-100 columnAlignCenter text-white mb-3">{{ vaType.va }}</h3>
        </v-img>
        <p class="mt-3 font-weight-bold">Tasks to outsource:</p>
        <p class="mt-3">{{ vaType.summary }}</p>
      </div>
    </div>
    <router-link class="primaryButton mt-5 elevation-5" :to="'/types-of-vas'"
      >Look at our Types of VAs</router-link
    >
  </section>
  <GuaranteeComponent />
</template>

<script>
  import { industries } from "@/cms/industries.service.js";
  import DifferencesComponent from "@/components/industries/DifferencesComponent.vue";
  import GuaranteeComponent from "@/components/industries/GuaranteeComponent.vue";

  export default {
    components: {
      DifferencesComponent,
      GuaranteeComponent,
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

</style>
