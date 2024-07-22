<template>
  <section class="columnAlignCenter googleBg">
    <div class="content">
      <div class="columnAlignCenter py-10">
        <img
          v-motion="scrollBottom"
          class="googleLogo w-50"
          src="@/web/assets/images/contactUs/logo-google.png"
          alt="Logo Google"
        />
        <div class="mt-5">
          <h2 v-motion="scrollBottom" class="w-100 text-white">Reviews 5.0</h2>
          <img
            class="w-75"
            src="@/web/assets/images/contactUs/five-stars.png"
            alt="Five Stars"
          />
        </div>
        <v-carousel
          id="reviewsDesktop"
          class="columnAlignCenter"
          cycle
          hide-delimiters
          show-arrows="hover"
        >
          <v-carousel-item>
            <div
              class="w-75 googleReviewsContainer columnAlignCenter ga-5 mt-10 mb-5"
            >
              <div
                class="bg-white googleReview"
                v-for="(item, index) in reviews1Desktop"
                :key="index"
              >
                <img class="w-100" :src="getImgUrl(item.img)" :alt="item.alt" />
              </div>
            </div>
          </v-carousel-item>
          <v-carousel-item>
            <div
              class="w-75 googleReviewsContainer columnAlignCenter ga-5 mt-10 mb-5"
            >
              <div
                class="bg-white googleReview"
                v-for="(item, index) in reviews2Desktop"
                :key="index"
              >
                <img class="w-100" :src="getImgUrl(item.img)" :alt="item.alt" />
              </div>
            </div>
          </v-carousel-item>
          <v-carousel-item>
            <div
              class="w-75 googleReviewsContainer columnAlignCenter ga-5 mt-10 mb-5"
            >
              <div
                class="bg-white googleReview"
                v-for="(item, index) in reviews3Desktop"
                :key="index"
              >
                <img class="w-100" :src="getImgUrl(item.img)" :alt="item.alt" />
              </div>
            </div>
          </v-carousel-item>
        </v-carousel>
        <v-carousel
          id="reviewsMobile"
          class="h-100 columnAlignCenter"
          hide-delimiters
          cycle
          :show-arrows="false"
        >
          <v-carousel-item>
            <div class="w-75 carouselItemDiv columnAlignCenter ga-5 mt-10 mb-5">
              <img
                v-for="(item, index) in reviews1Mobile"
                :key="index"
                class="w-100 rounded-xl pa-1"
                :src="getImgUrl(item.img)"
                :alt="item.alt"
              />
            </div>
          </v-carousel-item>
          <v-carousel-item>
            <div class="w-75 carouselItemDiv columnAlignCenter ga-5 mt-10 mb-5">
              <img
                v-for="(item, index) in reviews2Mobile"
                :key="index"
                class="w-100 rounded-xl"
                :src="getImgUrl(item.img)"
                :alt="item.alt"
              />
            </div>
          </v-carousel-item>
          <v-carousel-item>
            <div class="w-75 carouselItemDiv columnAlignCenter ga-5 mt-10 mb-5">
              <img
                v-for="(item, index) in reviews3Mobile"
                :key="index"
                class="w-100 rounded-xl"
                :src="getImgUrl(item.img)"
                :alt="item.alt"
              />
            </div>
          </v-carousel-item>
          <v-carousel-item>
            <div class="w-75 carouselItemDiv columnAlignCenter ga-5 mt-10 mb-5">
              <img
                v-for="(item, index) in reviews4Mobile"
                :key="index"
                class="w-100 rounded-xl"
                :src="getImgUrl(item.img)"
                :alt="item.alt"
              />
            </div>
          </v-carousel-item>
        </v-carousel>
        <!-- <h3 v-motion="scrollBottom" class="text-white mt-5 mb-2">Success Stories</h3>
      <img class="w-75" src="@/web/assets/images/misc/sky-line-3.png" alt="" /> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      reviews1Desktop: [
        {
          img: "reviews/Alex-Rakover-Google-Review.png",
          alt: "Alex Rakover Google Review",
        },
        {
          img: "reviews/Arturo-Vilas-Google-Review.png",
          alt: "Arturo Vilas Google Review",
        },
        {
          img: "reviews/Damian-Levy-Google-Review.png",
          alt: "Damian Levy Google Review",
        },
        {
          img: "reviews/Dan-Slelatt-Google-Review.png",
          alt: "Dan Slelatt Google Review",
        },
      ],
      reviews2Desktop: [
        {
          img: "reviews/Juan-Manuel-locco-Google-Review.png",
          alt: "Juan Manuel locco Google Review",
        },
        {
          img: "reviews/Liam-Liam-Google-Review.png",
          alt: "Liam Liam Google Review",
        },
        {
          img: "reviews/Miriam-Gelwan-Google-Review.png",
          alt: "Miriam Gelwan Google Review",
        },
        {
          img: "reviews/Sebastian-Coletti-Google-Review.png",
          alt: "Sebastian Coletti Google Review",
        },
      ],
      reviews3Desktop: [
        {
          img: "reviews/Sharon-Merin-Google-Review.png",
          alt: "Sharon Merin Google Review",
        },
        {
          img: "reviews/Silvia-Zarmati-Google-Review.png",
          alt: "Silvia Zarmati Google Review",
        },
        {
          img: "reviews/Uriel-Mikiej-Google-Review.png",
          alt: "Uriel Mikiej Google Review",
        },
        {
          img: "reviews/Zoe-Boru-Google-Review.png",
          alt: "Zoe Boru Google Review",
        },
      ],
      reviews1Mobile: [
        {
          img: "reviews/Mobile/Alex-Rakover-Mobile-Review.png",
          alt: "Alex Rakover Google Review",
        },
        {
          img: "reviews/Mobile/Arturo-Vilas-Mobile-Review.png",
          alt: "Arturo Vilas Google Review",
        },
        {
          img: "reviews/Mobile/Damian-Levy-Mobile-Review.png",
          alt: "Damian Levy Google Review",
        },
      ],
      reviews2Mobile: [
        {
          img: "reviews/Mobile/Dan-Slelatt-Mobile-Review.png",
          alt: "Dan Slelatt Google Review",
        },
        {
          img: "reviews/Mobile/Federico-Management-Mobile-Review.png",
          alt: "Federico Management Google Review",
        },
        {
          img: "reviews/Mobile/Liam-Liam-Mobile-Review.png",
          alt: "Liam Liam Google Review",
        },
      ],
      reviews3Mobile: [
        {
          img: "reviews/Mobile/Miriam-Gelwan-Mobile-Review.png",
          alt: "Miriam Gelwan Google Review",
        },
        {
          img: "reviews/Mobile/Sebastian-Coletti-Mobile-Review.png",
          alt: "Sebastian Coletti Google Review",
        },
        {
          img: "reviews/Mobile/Sharon-Merin-Mobile-Review.png",
          alt: "Sharon Merin Google Review",
        },
      ],
      reviews4Mobile: [
        {
          img: "reviews/Mobile/Silvia-Zarmati-Mobile-Review.png",
          alt: "Silvia Zarmati Google Review",
        },
        {
          img: "reviews/Mobile/Uriel-Mikiej-Mobile-Review.png",
          alt: "Uriel Mikiej Google Review",
        },
        {
          img: "reviews/Mobile/Zoe-Boru-Mobile-Review.png",
          alt: "Zoe Boru Google Review",
        },
      ],
    };
  },
  methods: {
    getImgUrl(imgName) {
      return new URL(
        `../../assets/images/contactUs/${imgName}`,
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
.googleBg {
  background-color: #151560;
}

#reviewsDesktop {
  display: none;
}

.carouselItemDiv {
  margin: 0 auto;
}

@media only screen and (min-width: 480px) {
  .carouselItemDiv {
    width: 65% !important;
  }
}

@media only screen and (min-width: 600px) {
  .carouselItemDiv {
    width: 55% !important;
  }
}

@media only screen and (min-width: 770px) {
  .carouselItemDiv {
    width: 50% !important;
  }
}

@media only screen and (min-width: 992px) {
  .carouselItemDiv {
    width: 40% !important;
  }
}

@media only screen and (min-width: 1080px) {
  #reviewsMobile {
    display: none;
  }

  #reviewsDesktop {
    display: flex;
  }

  .googleReviewsContainer {
    width: 85% !important;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
  }

  .googleReview {
    width: 45% !important;
    height: 13rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 15px;
    padding: 1rem;
  }

  .googleReview img {
    object-fit: contain;
    height: 100%;
  }

  .googleLogo {
    width: 30% !important;
  }
}

@media only screen and (min-width: 1280px) {
  .googleLogo {
    width: 25% !important;
  }
}
.googleBg {
  background-color: #151560;
}

@media only screen and (min-width: 1080px) {
  .googleReviewsContainer {
    width: 85% !important;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }

  .googleReview {
    width: 45% !important;
  }

  .googleLogo {
    width: 30% !important;
  }
}

@media only screen and (min-width: 1280px) {
  .googleLogo {
    width: 25% !important;
  }
}

@media only screen and (min-width: 1440px) {
  .googleLogo {
    width: 20% !important;
  }

  .googleReviewsContainer {
    width: 75% !important;
  }
}

@media only screen and (min-width: 1600px) {
  .googleReviewsContainer {
    width: 70% !important;
  }
}

@media only screen and (min-width: 1750px) {
  .googleLogo {
    width: 17.5% !important;
  }
}
</style>
