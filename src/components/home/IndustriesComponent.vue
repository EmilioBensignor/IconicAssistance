<template>
  <section class="radioactiveSky">
    <p v-motion="scrollBottom" class="subtitle text-white">Industries</p>
    <h2 v-motion="scrollBottom" class="text-white">Who We Serve</h2>
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
      <div v-motion="scrollBottom" class="columnAlignCenter">
        <v-carousel :show-arrows="false"
          class="industriesCarousel w-75 columnAlignCenter justify-space-between whiteBorder elevation-5" cycle
          :interval="3000">
          <v-carousel-item v-for="(item, index) in industries" :key="index" cover>
            <router-link :to="`/industries/${item.slug}`"
              class="carouselCard columnAlignCenter ga-3 text-decoration-none pa-3 pb-15">
              <v-img :src="getImgUrl(item.logo)" :alt="item.logoAlt" class="shadow-35" width="45%" eager></v-img>
              <h3 class="text-white">{{ item.name }}</h3>
              <p class="text-white">{{ item.description }}</p>
              <router-link :to="`/industries/${item.slug}`"
                class="text-decoration-none primaryButton mt-3 mb-10 elevation-5">Learn More</router-link>
            </router-link>
          </v-carousel-item>
        </v-carousel>
        <div class="industries">
          <div v-for="(item, index) in industries" :key="index" class="industry">
            <v-img :src="getImgUrl(item.logo)" :alt="item.logoAlt" class="shadow-35" width="50%" eager></v-img>
            <h3 class="titulo text-white mb-3">{{ item.name }}</h3>
            <p class="description text-white my-3">{{ item.description }}</p>
            <router-link :to="`/industries/${item.slug}`"
              class="learnMore text-decoration-none primaryButton mt-3 mb-10 elevation-5">Learn More</router-link>
          </div>
        </div>
        <div class="mt-10 columnAlignCenter w-75">
          <h4 v-motion="scrollBottom" class="manyMore text-white font-weight-bold">
            And Many More!
          </h4>
          <p v-motion="scrollBottom" class="want w-100 text-white">
            Want to know if our Remote Talent Experts are suitable for you?
          </p>
          <router-link class="primaryButton elevation-5 mt-5" :to="'/contact-us'">Request a free
            consultation</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { scrollBottom } from "@/motions.js";
</script>

<script>
import { industries } from "@/cms/industries.service.js";

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

.carouselCard {
  height: 100%;
}

.industries {
  display: none;
}

/* LG */
@media only screen and (min-width: 992px) {
  .industriesCarousel {
    display: none;
  }

  .industry {
    width: 28%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
  }

  .industry .v-img {
    text-align: start;
  }

  .description {
    font-weight: 600;
  }
}

/* Desktop */
@media only screen and (min-width: 1080px) {
  .industries {
    width: 95%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .industry {
    width: 30%;
    margin: 2vw 0;
  }

  .industry .v-img__img {
    height: auto !important;
  }

  .v-responsive {
    flex: none !important;
  }
}

@media only screen and (min-width: 1280px) {
  .industries {
    width: 100%;
  }
}

/* XL */
@media only screen and (min-width: 1440px) {
  .industry {
    width: 27%;
  }

  .industry .v-img {
    width: 40% !important;
  }

  .learnMore {
    padding: 1.5vw 3.2vw;
  }

  .manyMore {
    margin-bottom: 1vw;
  }
}

@media only screen and (min-width: 1600px) {
  .industries {
    width: 90%;
  }

  .learnMore {
    padding: 1.3vw 3vw;
  }

  .want {
    font-size: 1.2rem;
  }
}

@media only screen and (min-width: 1750px) {
  .learnMore {
    padding: 1.2vw 2.5vw;
  }
}
</style>
