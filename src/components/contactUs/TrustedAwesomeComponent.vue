<template>
  <section class="skyRadioactive pb-15">
    <div class="content">
      <div class="columnAlignCenter">
        <h2 class="text-white">Trusted by Awesome Clients</h2>
        <v-carousel interval="4000" cycle hide-delimiters class="h-100 carousel desktopCarousel columnAlignCenter py-5">
          <v-carousel-item>
            <div class="carouselContent d-flex flex-row ga-5">
              <div v-for="(reviewDesktop, index) in reviews.slice(0, 3)" :key="index"
                class="columnAlignCenter bg-white rounded-xl elevation-5 px-3 py-5">
                <img src="@/assets/images/contactUs/Stars-Slide.png" alt="Blue Stars" width="50%">
                <p class="text-left mt-5" v-html="reviewDesktop"></p>
              </div>
            </div>
          </v-carousel-item>
          <v-carousel-item>
            <div class="carouselContent d-flex flex-row ga-5">
              <div v-for="(reviewDesktop, index) in reviews.slice(3, 6)" :key="index"
                class="columnAlignCenter bg-white rounded-xl elevation-5 px-3 py-5">
                <img src="@/assets/images/contactUs/Stars-Slide.png" alt="Blue Stars" width="50%">
                <p class="text-left mt-5" v-html="reviewDesktop"></p>
              </div>
            </div>
          </v-carousel-item>
          <v-carousel-item>
            <div class="carouselContent d-flex flex-row ga-5">
              <div v-for="(reviewDesktop, index) in reviews.slice(6, 9)" :key="index"
                class="columnAlignCenter bg-white rounded-xl elevation-5 px-3 py-5">
                <img src="@/assets/images/contactUs/Stars-Slide.png" alt="Blue Stars" width="50%">
                <p class="text-left mt-5" v-html="reviewDesktop"></p>
              </div>
            </div>
          </v-carousel-item>
        </v-carousel>
        <v-carousel interval="4000" cycle hide-delimiters class="h-100 carousel tabletCarousel columnAlignCenter py-5">
          <v-carousel-item>
            <div class="carouselContent d-flex flex-row ga-5">
              <div v-for="(reviewDesktop, index) in reviews.slice(0, 2)" :key="index"
                class="columnAlignCenter bg-white rounded-xl elevation-5 px-3 py-5">
                <img src="@/assets/images/contactUs/Stars-Slide.png" alt="Blue Stars" width="60%">
                <p class="text-left mt-5" v-html="reviewDesktop"></p>
              </div>
            </div>
          </v-carousel-item>
          <v-carousel-item>
            <div class="carouselContent d-flex flex-row ga-5">
              <div v-for="(reviewDesktop, index) in reviews.slice(2, 4)" :key="index"
                class="columnAlignCenter bg-white rounded-xl elevation-5 px-3 py-5">
                <img src="@/assets/images/contactUs/Stars-Slide.png" alt="Blue Stars" width="60%">
                <p class="text-left mt-5" v-html="reviewDesktop"></p>
              </div>
            </div>
          </v-carousel-item>
          <v-carousel-item>
            <div class="carouselContent d-flex flex-row ga-5">
              <div v-for="(reviewDesktop, index) in reviews.slice(5, 7)" :key="index"
                class="columnAlignCenter bg-white rounded-xl elevation-5 px-3 py-5">
                <img src="@/assets/images/contactUs/Stars-Slide.png" alt="Blue Stars" width="60%">
                <p class="text-left mt-5" v-html="reviewDesktop"></p>
              </div>
            </div>
          </v-carousel-item>
          <v-carousel-item>
            <div class="carouselContent d-flex flex-row ga-5">
              <div v-for="(reviewDesktop, index) in reviews.slice(8, 10)" :key="index"
                class="columnAlignCenter bg-white rounded-xl elevation-5 px-3 py-5">
                <img src="@/assets/images/contactUs/Stars-Slide.png" alt="Blue Stars" width="60%">
                <p class="text-left mt-5" v-html="reviewDesktop"></p>
              </div>
            </div>
          </v-carousel-item>
        </v-carousel>
        <v-carousel interval="3000" :show-arrows="false" hide-delimiters cycle
          class="h-100 carousel mobileCarousel columnAlignCenter py-5">
          <v-carousel-item v-for="(reviewMobile, index) in reviews" :key="index">
            <div class="carouselContent">
              <div class="columnAlignCenter bg-white rounded-xl elevation-5 px-3 py-5">
                <img src="@/assets/images/contactUs/Stars-Slide.png" alt="Blue Stars" width="50%">
                <p class="text-left mt-5" v-html="reviewMobile"></p>
              </div>
            </div>
          </v-carousel-item>
        </v-carousel>
        <FindingSimpleComponent />
        <h3 v-motion="scrollBottom" class="text-white mt-10 mb-5">Find your next BEST HIRE with ICONIC</h3>
        <a href="#hero" class="primaryButton elevation-3 mb-3 px-10 py-5">Get Started</a>
      </div>
    </div>
  </section>
</template>

<script>
import FindingSimpleComponent from "@/components/contactUs/FindingSimpleComponent.vue";

export default {
  name: 'ContactUs',
  components: {
    FindingSimpleComponent,
  },
  data() {
    return {
      reviews: [
        "My executive assistant from <span class='text-radioactive'>ICONIC has been a game-changer for my productivity.</span> Always efficient and organized, they handle tasks seamlessly, allowing me to focus on what matters most.",
        "I can't imagine managing my schedule without my executive assistant from ICONIC. <span class='text-radioactive'>They're responsive, reliable, and go above and beyond</span> to ensure everything runs smoothly.",
        "Thanks to my executive assistant from ICONIC, I've been able to <span class='text-radioactive'>delegate tasks with confidence. Their attention to detail and proactive approach make them an invaluable asset</span> to my team.",
        "I've been thoroughly impressed with the level of support provided by my executive assistant from ICONIC. <span class='text-radioactive'>They handle everything with precision and professionalism</span>, allowing me to focus on growing my business.",
        "My executive assistant from ICONIC has been a lifesaver. <span class='text-radioactive'>They're proactive, resourceful, and always one step ahead</span>. I couldn't imagine navigating my day-to-day without their support.",
        "I highly recommend ICONIC's executive assistant services. <span class='text-radioactive'>My assistant is reliable, efficient, and has helped me stay organized</span> and on top of my workload.",
        "Having an <span class='text-radioactive'>executive assistant from ICONIC has been a game-changer for my business</span>. They handle all the administrative tasks with ease, allowing me to focus on strategic initiatives.",
        "My experience with <span class='text-radioactive'>ICONIC's executive assistant service has been nothing short of excellent</span>. My assistant is responsive, attentive, and consistently delivers results.",
        "I can't thank my executive assistant from ICONIC enough for their support. <span class='text-radioactive'>They've truly become an indispensable part of my team</span>, and I'm grateful for their dedication and professionalism.",
        "Working with my executive assistant from ICONIC has been a breeze. They're <span class='text-radioactive'>incredibly professional, and their ability to anticipate my needs has saved me</span> countless hours of work.",
      ],
    }
  },
};
</script>

<script setup>
import { scrollBottom } from "@/motions.js";
</script>

<style scoped>
.carousel {
  width: 100% !important;
}

.desktopCarousel,
.tabletCarousel {
  display: none;
}

.carouselContent {
  padding: 3% 10%;
}

.v-window__controls {
  padding: 0 !important;
}

@media only screen and (min-width: 600px) {
  .mobileCarousel {
    display: none;
  }

  .tabletCarousel {
    display: block;
  }

  .carouselContent {
    padding: 3% 12%;
  }
}

/* Desktop */
@media only screen and (min-width: 1080px) {
  .desktopCarousel {
    display: block;
  }

  .tabletCarousel {
    display: none;
  }

  .carouselContent {
    padding: 3% 8%;
  }
}
</style>