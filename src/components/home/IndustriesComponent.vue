<template>
  <section class="radioactiveSky">
    <p class="subtitle text-white">Industries</p>
    <h2 class="text-white">Who We Serve</h2>
    <div class="column ga-5 mt-5">
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
      <div class="columnAlignCenter">
        <v-carousel
        :show-arrows="false"
        class="w-75 columnAlignCenter justify-space-between whiteBorder elevation-5"
        cycle
        :interval="3000">
        <v-carousel-item 
          v-for="(item, index) in industries" 
          :key="index" 
          cover>
          <router-link
            :to="'/services'"
            class="carouselCard columnAlignCenter ga-3 text-decoration-none pa-3 pb-15">
            <v-img
              :src="getImgUrl(item.logo)"
              :alt="item.logoAlt"
              width="40%"></v-img>
            <p class="text-white titleIndustries">{{ item.name }}</p>
            <p class="text-white">{{ item.description }}</p>
            <router-link
              :to="'/services'"
              class="text-decoration-none primaryButton mt-3 mb-10 elevation-5"
              >Learn More</router-link
            >
          </router-link>
        </v-carousel-item>
      </v-carousel>
      </div>
      <div class="my-5 columnAlignCenter w-100">
        <p class="text-white homeH4">And Many More!</p>
        <p class="text-white">
          Want to know if our Remote Talent Experts are suitable for you?
        </p>
        <router-link
          class="primaryButton elevation-5 my-5"
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

<style>
  .whiteBorder {
    border: 5px solid white;
    border-radius: 20px;
  }
  .carouselCard{
    height: 100%;
  }
  .titleIndustries {
    font-size: 1.4rem;
    font-weight: 600;
  }
</style>
