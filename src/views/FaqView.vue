<template>
  <section class="columnAlignCenter">
    <div class="heroPages flexCenter">
      <h1 class="text-midnight">
        Outsource to
        <span class="text-radioactive">Iconic Virtual Assistants</span>
      </h1>
    </div>
  </section>
  <section class="skyRadioactive">
    <h2 class="text-white">Frequently Asked Questions</h2>
    <p class="subtitle text-white font-weight-bold mt-5 mb-3">How can we help?</p>
    <v-form class="w-75 buscador rounded-xl">
      <input
        type="search"
        name="faqSearch"
        v-model="faqSearch"
        class="w-100 bg-white rounded-xl py-3 px-5"
        placeholder="Type to search for a question"
        hide-details />
    </v-form>
    <div class="w-75 columnAlignCenter ga-5 mt-5">
      <div
        class="column align-self-start text-start font-weight-bold text-white ga-3 filterCategories mt-1 mb-3">
        <label class="d-flex align-center ga-3" for="Communication">
          <input
            id="Communication"
            type="checkbox"
            v-model="selectedCategories"
            value="Communication" />
          Communication
        </label>
        <label class="d-flex align-center ga-3" for="GettingStarted">
          <input
            id="GettingStarted"
            type="checkbox"
            v-model="selectedCategories"
            value="Getting Started" />
          Getting Started
        </label>
        <label class="d-flex align-center ga-3" for="Hiring">
          <input
            id="Hiring"
            type="checkbox"
            v-model="selectedCategories"
            value="Hiring" />
          Hiring
        </label>
        <label class="d-flex align-center ga-3" for="Payment">
          <input
            id="Payment"
            type="checkbox"
            v-model="selectedCategories"
            value="Payment" />
          Payment
        </label>
      </div>
      <v-expansion-panels
        v-for="(item, index) in filteredFaqs"
        :key="index"
        class="faqWrapper">
        <v-expansion-panel
          class="elevation-2"
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
  </section>
</template>

<script>
  import { faqs } from "@/cms/faqs.service.js";
  export default {
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

<style scoped>
input[type="checkbox"]{
  width: 7vw;
  height: 7vw;
}
</style>
