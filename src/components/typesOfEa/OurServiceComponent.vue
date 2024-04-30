<template>
  <section class="skyRadioactive">
    <div class="content">
      <div class="columnAlignCenter">
        <p v-motion="scrollBottom" class="subtitle text-white">Our Service</p>
        <h2 v-motion="scrollBottom" class="text-white">
          Here's What Your Executive Assistants Can Help You With
        </h2>
        <div class="eaCardsContainer w-75 d-flex justify-center flex-wrap ga-10 pt-5">
          <router-link :to="`/executive-assistant/${item.id}`" v-for="(item, index) in eaTypes" :key="index" class="eaCard rounded-xl elevation-5"
            v-motion="scrollBottom">
            <img :src="getImgUrl(item.img)" :alt="item.alt" width="100%" height="100%" class="rounded-xl" eager />
            <p class="titleTypesofEA rounded-b-xl font-weight-bold text-midnight py-3">
              {{ item.name }}
            </p>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { eaTypes } from "@/cms/typesea.service.js";

export default {
  data() {
    return {
      eaTypes: eaTypes,
    };
  },
  methods: {
    getImgUrl(imgName) {
      return new URL(
        `/src/assets/images/typesOfEa/${imgName}`,
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
.eaCard {
  height: 15rem;
  position: relative;
}

.eaCard img {
  object-fit: cover;
}

.titleTypesofEA {
  width: 100%;
  position: absolute;
  bottom: 0;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
}

/* SM */
@media only screen and (min-width: 480px) {
  .titleTypesofEA {
    font-size: 1.15rem;
  }
}

@media only screen and (min-width: 600px) {
  .eaCardsContainer{
    width: 90% !important;
    gap: 2rem !important;
  }
  
  .eaCard {
    width: 45% !important;
  }
}

/* MD */
@media only screen and (min-width: 769px) {
  .titleTypesofEA {
    font-size: 1.2rem;
  }
}

/* Desktop */
@media only screen and (min-width: 1080px) {
  h2 {
    width: 95%;
  }
  .eaCardsContainer{
    width: 95% !important;
    gap: 1rem !important;
  }
  .eaCard {
    width: 23% !important;
    height: 17.5rem;
  }
}
</style>
