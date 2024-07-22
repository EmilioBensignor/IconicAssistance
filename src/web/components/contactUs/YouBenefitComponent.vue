<template>
  <section class="columnAlignCenter bg-white">
    <div class="content">
      <div class="columnAlignCenter py-10">
        <h2 v-motion="scrollBottom" class="w-100 text-midnight mb-5">
          With <span class="text-radioactive">Iconic Assistants,</span> you'll
          benefit from...
        </h2>
        <div class="w-75 benefitsContainer column ga-15 mt-10 mb-5">
          <div
            v-motion="scrollBottom"
            v-for="(benefit, index) in benefits"
            class="benefit column ga-5"
            :class="benefit.class"
            :key="index"
          >
            <div class="w-75 benefitImg" :class="benefit.imgClass">
              <img
                class="w-75"
                :src="getImgUrl(benefit.img)"
                :alt="benefit.alt"
              />
            </div>
            <div class="column benefitContent" :class="benefit.contentClass">
              <div class="w-75 column benefitHeader">
                <p class="pMedium text-start">{{ benefit.title }}</p>
                <img
                  class="benefitHeaderLine"
                  src="@/web/assets/images/misc/blue-line-1.png"
                />
              </div>
              <ul
                class="benefitList column ga-1 text-start pl-5 mt-5"
                :class="benefit.listClass"
              >
                <li
                  class="text-midnight"
                  v-for="(item, index) in benefit.list"
                  :key="index"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      benefits: [
        {
          title: "SCALABILITY",
          img: "contactUs/benefit-scalability.png",
          alt: "Benefit Scalability",
          list: [
            "Starting at $11/Hr",
            "No deposit fee",
            "No recruitment fee",
            "No lock in contract",
            "Upscale your teams on demand",
          ],
        },
        {
          title: "EFFICIENCY",
          img: "contactUs/benefit-efficiency.png",
          alt: "Benefit Efficiency",
          list: [
            "5-7 days turnaround time",
            "Pre-vetted talent pool",
            "3 step recruitment",
            "48hr rapid replacement",
          ],
          class: "reversed",
          imgClass: "justifyStart",
          contentClass: "justifyEnd",
          listClass: "listClass",
        },
        {
          title: "EXPERTISE",
          img: "contactUs/benefit-expertise.png",
          alt: "Benefit Expertise",
          list: [
            "10+ years recruitment experience",
            "North American time zone",
            "English tested c1 / c2 level",
            "PDA assessment",
            "Skilled assistants that will adapt to your business",
            "1:1 interviews with recruitment professionals",
          ],
        },
      ],
    };
  },
  methods: {
    getImgUrl(imgName) {
      return new URL(`/src/web/assets/images/${imgName}`, import.meta.url).href;
    },
  },
};
</script>

<script setup>
import { scrollBottom } from "@/motions.js";
</script>

<style scoped>
.benefitList {
  list-style: outside;
}

.benefitImg {
  display: none;
}

.benefitHeaderLine {
  width: 65%;
}

@media only screen and (min-width: 480px) {
  .benefitHeaderLine {
    width: 50%;
  }
}

@media only screen and (min-width: 600px) {
  .benefitsContainer {
    padding-left: 2rem;
  }

  .benefitHeaderLine {
    width: 42%;
  }
}

@media only screen and (min-width: 770px) {
  .benefitsContainer {
    align-items: center;
    padding: 0;
  }

  .benefit {
    width: 75%;
    align-items: center;
  }

  .benefitImg {
    display: flex;
    justify-content: center;
  }

  .benefitContent {
    width: 75%;
    align-items: center;
  }

  .benefitHeader {
    width: 60% !important;
    align-items: center;
  }

  .benefitHeader p {
    text-align: center !important;
  }

  .benefitHeaderLine {
    width: 80%;
  }
}

@media only screen and (min-width: 992px) {
  .benefitsContainer {
    width: 85% !important;
  }

  .benefit {
    width: 85%;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }

  .reversed {
    flex-direction: row !important;
  }

  .benefitContent {
    width: 50%;
    align-items: flex-start;
  }

  .benefitHeader {
    margin-right: 2.5rem;
  }

  .benefitHeader p {
    text-align: start !important;
  }

  .benefitHeaderLine {
    width: 100% !important;
  }

  .benefitHeader img {
    align-self: flex-start;
  }

  .benefitImg {
    width: 50% !important;
    display: flex;
    justify-content: flex-end;
  }

  .justifyStart {
    justify-content: flex-start;
  }

  .justifyEnd {
    align-items: flex-end;
  }
}

@media only screen and (min-width: 1080px) {
  .benefitHeaderLine {
    width: 90% !important;
  }
}

@media only screen and (min-width: 1440px) {
  .benefitHeaderLine {
    width: 86% !important;
  }
}

@media only screen and (min-width: 1600px) {
  .benefitsContainer,
  .benefit {
    width: 100% !important;
  }

  .benefitHeader {
    margin-right: 0;
  }

  .listClass {
    margin-right: 2rem;
  }
}

@media only screen and (min-width: 1750px) {
  .benefitHeaderLine {
    width: 65% !important;
  }

  .benefitImg img {
    width: 60% !important;
  }
}

@media only screen and (min-width: 1920px) {
  .benefitHeaderLine {
    width: 62% !important;
  }
}
</style>
