<template>
  <section class="radioactiveSky">
    <p class="subtitle text-white">Industries</p>
    <h2 class="text-white">Who We Serve</h2>
    <div class="d-flex flex-column w-100 ga-5 mt-5">
      <!-- <div
        class="d-flex align-center w-75 ml-15"
        v-for="(item, index) in industries"
        :key="index">
        <v-img
          :src="getImgUrl(item.logo)"
          :alt="item.logoAlt"
          width="25%"></v-img>
        <p class="text-white text-start ml-3 w-100">
          {{ item.name.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase()) }}
        </p>
      </div> -->
      <v-carousel
        :show-arrows="false"
        class="d-flex align-self-center h-75 pt-5 pb-15 w-75 whiteBorder"
        cycle
        :interval="100000000">
        <!-- CAMBIAR EL INTERVALO -->
        <v-carousel-item v-for="(item, index) in industries" :key="index" cover>
          <router-link
            :to="'/services'"
            class="columnAlignCenter ga-3 text-decoration-none">
            <v-img
              :src="getImgUrl(item.logo)"
              :alt="item.logoAlt"
              width="40%"></v-img>
            <p class="text-white titleIndustries">{{ item.name }}</p>
            <p class="text-white">{{ item.description }}</p>
            <router-link
              :to="'/services'"
              class="text-decoration-none primaryButton mt-3 mb-5"
              >Learn More</router-link
            >
          </router-link>
        </v-carousel-item>
      </v-carousel>
      <div class="my-5 columnAlignCenter ga-4 w-100">
        <p class="text-white homeH4">And Many More!</p>
        <p class="text-white">
          Want to know if our Remote Talent Experts are suitable for you?
        </p>
        <router-link
          class="primaryButton elevation-5 mt-3 mb-5"
          :to="'/contact-us'"
          >Request a free consultation</router-link
        >
      </div>
    </div>
  </section>
</template>

<script>
  import { industries } from "@/cms.service.js";

  export default {
    data() {
      return {
        industries: industries,
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
  .whiteBorder {
    border: 5px solid white;
    border-radius: 20px;
  }
  .titleIndustries {
    font-size: 1.4rem;
    font-weight: 600;
  }
</style>
