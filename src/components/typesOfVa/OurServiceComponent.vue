<template>
  <section class="skyRadioactive">
    <div class="content">
      <div class="columnAlignCenter">
        <p v-motion="scrollBottom" class="subtitle text-white">Our Service</p>
        <h2 v-motion="scrollBottom" class="text-white">
          Here's What Your Virtual Assistants Can Help You With
        </h2>
        <div class="vaCardsContainer w-75 d-flex justify-center flex-wrap ga-10 pt-5">
          <router-link :to="`/virtual-assistant/${item.id}`" v-for="(item, index) in vaTypes" :key="index" class="vaCard rounded-xl elevation-5"
            v-motion="scrollBottom">
            <img :src="getImgUrl(item.img)" :alt="item.alt" width="100%" height="100%" class="rounded-xl" eager />
            <p class="titleTypesofVA rounded-b-xl font-weight-bold text-midnight py-3">
              {{ item.name }}
            </p>
          </router-link>
        </div>
      </div>
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
.vaCard {
  height: 15rem;
  position: relative;
}

.vaCard img {
  object-fit: cover;
}

.titleTypesofVA {
  width: 100%;
  position: absolute;
  bottom: 0;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
}

/* SM */
@media only screen and (min-width: 480px) {
  .titleTypesofVA {
    font-size: 1.15rem;
  }
}

@media only screen and (min-width: 600px) {
  .vaCardsContainer{
    width: 90% !important;
    gap: 2rem !important;
  }
  
  .vaCard {
    width: 45% !important;
  }
}

/* MD */
@media only screen and (min-width: 769px) {
  .titleTypesofVA {
    font-size: 1.2rem;
  }
}

/* Desktop */
@media only screen and (min-width: 1080px) {
  h2 {
    width: 95%;
  }
  .vaCardsContainer{
    width: 95% !important;
    gap: 1rem !important;
  }
  .vaCard {
    width: 23% !important;
    height: 17.5rem;
  }
}

@media only screen and (min-width: 1280px) {}

/* XL */
@media only screen and (min-width: 1440px) {}

@media only screen and (min-width: 1920px) {}
</style>
