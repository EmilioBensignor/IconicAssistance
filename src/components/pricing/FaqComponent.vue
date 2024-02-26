<template>
  <section class="radioactiveSkyWaves">
    <h2 class="text-midnight">Questions That We Are Asked Most Often</h2>
    <div class="w-75 columnAlignCenter ga-2 my-5">
      <v-expansion-panels
        v-for="(item, index) in faq"
        :key="index"
        class="faqWrapper mt-3">
        <v-expansion-panel class="elevation-2" :title="item.title" :text="item.text">
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    <router-link class="w-75 secondaryButton mt-5 elevation-5" :to="'/faq'"
      >View more Frequently Asked Questions</router-link
    >
  </section>
</template>

<script>
  export default {
    data() {
      return {
        faq: [
          {
            title: "How do i pay Iconic Assistants",
            text: "You’ll pay your virtual assistant through Iconic Assistants. You’ll pay us, a US-based company, and we will pay the Virtual Assistant. For US-based clients, we accept Credit Cards and ACH payments and for international clients, we only accept Credit Cards (transactions fees may apply).",
          },
          {
            title: "Can I hire a Part-Time Virtual Assistant?",
            text: "Yes, we can help you outsource part-time virtual assistant for your business or specific campaigns. Our plans include either part-time (80 hours per week) or full-time (160 hours per week) VA's.",
          },
          {
            title: "Can I provide the work hours?",
            text: "Yes, candidates will be informed of your business’s preferred work hours. Iconic Assistants are flexible and can work within the time your business requires.",
          },
          {
            title: "How quickly can I be Up and Running?",
            text: "From the first meeting, it takes approximately 10 to 20 business days to find, interview and qualify the right candidates options for you and your business.",
          },
        ],
      };
    },
  };
</script>
