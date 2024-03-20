<template>
  <section class="skyRadioactive">
    <p v-motion="scrollBottom" class="subtitle text-white">Our Service</p>
    <h2 v-motion="scrollBottom" class="text-white">
      Here's What Your Virtual Assistants Can Help You With
    </h2>
    <div class="w-75 vaIcons column ga-3 my-5">
      <div
        v-for="(item, index) in vaTypes"
        :key="index"
        v-motion="scrollBottom"
        class="d-flex align-center">
        <img
          width="25%"
          class="vaIcon shadow-25"
          :src="getImgUrl(item.whiteIcon)"
          :alt="item.whiteIconAlt" />
        <p class="text-white text-start pMedium ml-3 w-100">
          {{ item.name }}
        </p>
      </div>
    </div>
    <div v-motion="scrollBottom" class="carousel w-75 columnAlignCenter my-5">
      <v-carousel
        :show-arrows="false"
        class="carouselTypes rounded-xl elevation-5"
        cycle
        :interval="3000">
        <v-carousel-item v-for="(item, index) in vaTypes" :key="index" cover>
          <router-link :to="`/virtual-assistant/${item.id}`" class="typesCard">
            <v-img
              :src="getImgUrl(item.img)"
              :alt="item.alt"
              width="100%"
              height="84%"
              class="vaImg"
              cover
              eager>
              <p class="titleTypesofVA font-weight-bold text-midnight">
                {{ item.name }}
              </p>
            </v-img>
          </router-link>
        </v-carousel-item>
      </v-carousel>
    </div>
  </section>
</template>

<script>
  import { vaTypes } from "@/cms/typesva.service.js";
  export default {
    data() {
      return {
        vaTypes: vaTypes,
      };
    },
    methods: {
      getImgUrl(imgName) {
        return new URL(
          `/src/assets/images/typesOfVa/${imgName}`,
          import.meta.url
        ).href;
      },
    },
  };
</script>

<script setup>
  import { scrollBottom } from "@/motions.js";
</script>

<style scoped>
  .carouselTypes {
    height: 50vh !important;
  }
  .typesCard {
    text-decoration: none;
    position: relative;
  }
  .titleTypesofVA {
    width: 100%;
    position: absolute;
    bottom: 0;
    text-decoration: none;
    background: rgba(255, 255, 255, 0.9);
    font-size: 1.4rem;
  }

  /* SM */
  @media only screen and (min-width: 480px) {
    .carouselTypes {
      height: 60vh !important;
    }
    .vaImg {
      height: 87% !important;
    }
    .vaIcon {
      width: 20%;
    }
    .titleTypesofVA {
      font-size: 1.5rem;
    }
  }

  /* MD */
  @media only screen and (min-width: 769px) {
    .carouselTypes {
      height: 65vh !important;
    }
    .vaImg {
      height: 88% !important;
    }
    .vaIcon {
      width: 15%;
    }
    .titleTypesofVA {
      font-size: 1.6rem;
    }
  }

  /* Desktop */
  @media only screen and (min-width: 1080px) {
    .vaIcons {
      display: none;
    }
  }
</style>
