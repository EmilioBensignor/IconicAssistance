<template>
  <HeaderPagesComponent />
  <section class="heroPagesWave columnAlignCenter">
    <div class="heroPages flexCenter">
      <h1 v-motion="scrollBottom" class="text-midnight">
        Outsource to
        <span class="text-radioactive">Iconic Virtual Assistants</span>
      </h1>
    </div>
  </section>
  <section class="skyRadioactive">
    <h2 v-motion="scrollBottom" class="text-white">
      Frequently Asked Questions
    </h2>
    <p
      v-motion="scrollBottom"
      class="searchLabel text-white font-weight-bold mt-5 mb-3">
      How can we help?
    </p>
    <v-form class="buscador rounded-xl">
      <input
        type="search"
        name="faqSearch"
        v-model="faqSearch"
        class="w-100 inputSearch bg-white rounded-xl py-3 px-5 elevation-4"
        placeholder="Type to search for a question"
        hide-details />
    </v-form>
    <div class="w-75 categories columnAlignCenter ga-5 mt-5 mb-10">
      <!-- Categories -->
      <div
        v-motion="scrollBottom"
        class="column align-self-start text-start font-weight-bold text-white ga-3 filterCategories my-5">
        <p class="w-100 filter text-white text-start mb-3">
          Filter by the category you are looking for:
        </p>
        <label
          class="labelCheckbox d-flex align-center ga-3"
          for="Communication">
          <input
            id="Communication"
            type="checkbox"
            v-model="selectedCategories"
            value="Communication" />
          Communication
        </label>
        <label
          class="labelCheckbox d-flex align-center ga-3"
          for="GettingStarted">
          <input
            id="GettingStarted"
            type="checkbox"
            v-model="selectedCategories"
            value="Getting Started" />
          Getting Started
        </label>
        <label class="labelCheckbox d-flex align-center ga-3" for="Hiring">
          <input
            id="Hiring"
            type="checkbox"
            v-model="selectedCategories"
            value="Hiring" />
          Hiring
        </label>
        <label class="labelCheckbox d-flex align-center ga-3" for="Payment">
          <input
            id="Payment"
            type="checkbox"
            v-model="selectedCategories"
            value="Payment" />
          Payment
        </label>
      </div>
      <!-- FAQs -->
      <div class="w-100 faqDiv columnAlignCenter ga-5">
        <v-expansion-panels
          v-for="(item, index) in filteredFaqs"
          :key="index"
          v-motion="scrollBottom"
          class="faqWrapper">
          <v-expansion-panel
            class="elevation-3"
            :title="item.question"
            expand-icon="mdi-plus"
            collapse-icon="mdi-minus">
            <v-expansion-panel-text class="py-2">
              <p>{{ item.answer }}</p>
              <ul class="column ga-3 pl-3 mt-3">
                <li v-for="(bullet, index) in item.bullets" :key="index">
                  {{ bullet }}
                </li>
              </ul>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </div>
  </section>
</template>

<script>
  import { faqs } from "@/cms/faqs.service.js";
  import HeaderPagesComponent from "@/components/HeaderPagesComponent.vue";

  export default {
    components: {
      HeaderPagesComponent,
    },
    data() {
      return {
        faqSearch: "",
        faqs: faqs,
        selectedCategories: [],
      };
    },
    computed: {
      filteredFaqs() {
        return this.faqs.filter(
          (faq) => this.checkFields(faq) && this.filterCategories(faq)
        );
      },
    },

    methods: {
      checkFields(faq) {
        const search = this.faqSearch.toLowerCase();
        return (
          faq.question.toLowerCase().includes(search) ||
          faq.answer.toLowerCase().includes(search) ||
          faq.category.toLowerCase().includes(search) ||
          faq.bullets.some((bullet) => bullet.toLowerCase().includes(search))
        );
      },
      filterCategories(faq) {
        if (this.selectedCategories.length === 0) return true;
        return this.selectedCategories.includes(faq.category);
      },
    },
  };
</script>

<script setup>
  import { scrollBottom } from "@/motions.js";
</script>

<style scoped>
  .searchLabel {
    font-size: 1.2rem;
  }

  input[type="checkbox"] {
    width: 7vw;
    height: 7vw;
  }

  .buscador{
    width: 90%;
  }

  /* SM */
  @media only screen and (min-width: 480px) {
    .searchLabel {
      font-size: 1.3rem;
    }

    input[type="checkbox"] {
      width: 3.5vw;
      height: 3.5vw;
    }
  }

  /* MD */
  @media only screen and (min-width: 769px) {
    .searchLabel {
      font-size: 1.4rem;
    }

    input[type="checkbox"] {
      width: 3vw;
      height: 3vw;
    }
  }

  /* Desktop */
  @media only screen and (min-width: 1080px) {
    .categories{
      width: 85% !important;
    }

    .searchLabel {
      font-size: 1.6rem;
      text-align: center;
    }

    .inputSearch {
      font-size: 1.2rem;
    }

    .filter {
      font-size: 1.3rem;
      font-weight: 500;
    }

    .labelCheckbox {
      font-size: 1.2rem;
    }

    input[type="checkbox"] {
      width: 2.8vw;
      height: 2.8vw;
    }
  }

  @media only screen and (min-width: 1280px) {
    .buscador{
      width: 70%;
    }

    input[type="checkbox"] {
      width: 2.5vw;
      height: 2.5vw;
    }
  }

  /* XL */
  @media only screen and (min-width: 1440px) {
    .categories{
      width: 75% !important;
    }

    input[type="checkbox"] {
      width: 2vw;
      height: 2vw;
    }

    .faqDiv {
      gap: 1.5vw !important;
      padding-bottom: 5vw;
    }
  }

  @media only screen and (min-width: 1600px) {
    .searchLabel {
      font-size: 1.7rem;
      margin: 1vw 0 !important;
    }

    .faqDiv {
      padding-bottom: 7vw;
    }

    input[type="checkbox"] {
      width: 1.5vw;
      height: 1.5vw;
    }
  }

  @media only screen and (min-width: 1750px) {
    .buscador{
      width: 60%;
    }

    .labelCheckbox {
      font-size: 1.4rem;
    }

    input[type="checkbox"] {
      width: 1.3vw;
      height: 1.3vw;
    }
  }

  @media only screen and (min-width: 1920px) {
    .buscador{
      width: 50%;
    }
    .categories{
      max-width: 1920px;
    }
    
    .searchLabel {
      margin: 20px 0 !important;
    }

    .faqDiv {
      padding-bottom: 100px;
    }

    input[type="checkbox"] {
      width: 26px;
      height: 26px;
    }
  }
</style>
