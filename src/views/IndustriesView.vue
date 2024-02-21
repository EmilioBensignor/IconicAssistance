<template>
  <section
    class="heroSection flexCenter"
    :style="{ backgroundImage: `url(${getImgUrl(industry.img)})` }">
    <div class="heroOverlay flexCenter justify-center">
      <div class="heroPages flexCenter ga-4">
        <h1 class="text-white">{{ industry.name }}</h1>
        <p class="text-white">{{ industry.subtitle }}</p>
      </div>
    </div>
  </section>
  <DifferencesComponent />
  <section class="skyRadioactive">
    <h2 class="text-white">VAs That Suit Your Industry</h2>
    <div v-if="industry" class="columnAlignCenter ga-10 my-5">
      <div 
        v-for="(vaType, index) in industry.vaTypes" 
        :key="index"
        class="w-75 columnAlignCenter bg-white rounded-xl pa-5 elevation-5">
        <img 
          :src="getVaTypesImgUrl(vaType.img)" 
          :alt="vaType.alt" 
          width="100%"/>
        <h3>{{ vaType }}</h3>
        <p>Tasks to outsource:</p>
        <ul class="column ga-3 px-3">
          <li
            v-for="(task, taskIndex) in getTasksForVaType(vaType)"
            :key="taskIndex">
            {{ task }}
          </li>
        </ul>
      </div>
    </div>
    <router-link class="primaryButton my-5 elevation-5" :to="'/types-of-vas'">Look at our Types of VAs</router-link>
  </section>
  <GuaranteeComponent />
</template>

<script>
  import { industries } from "@/cms/industries.service.js";
  import { vaTypes } from "@/cms/typesva.service.js";
  import DifferencesComponent from '@/components/industries/DifferencesComponent.vue';
  import GuaranteeComponent from '@/components/industries/GuaranteeComponent.vue';

  export default {
    components:{
      DifferencesComponent,
      GuaranteeComponent,
    },
    data() {
      return {
        industries: industries,
        industry: null,
        industrySlug: null,
        vaTypes: vaTypes,
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
      getImgUrl(imgName) {
        return new URL(
          `../assets/images/industries/${imgName}`,
          import.meta.url
        ).href;
      },
      getVaTypesImgUrl(imgName){
        return new URL(
          `../assets/images/typesOfVa/${imgName}`,
          import.meta.url
        ).href;
      },
      getTasksForVaType(vaType){
        const va = vaTypes.find(va => va.name === vaType);
        if (va) {
          return va.industriesTasks;
        } else{
          return [];
        }
      }
    },
  };
</script>

<style scoped>
  .heroSection {
    position: relative;
    width: 100%;
    height: 450px;
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
