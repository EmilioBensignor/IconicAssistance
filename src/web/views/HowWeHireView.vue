<template>
  <HeaderPagesComponent />
  <section class="heroPagesRadioactiveWave">
    <div class="heroPages flexCenter">
      <h1 v-motion="scrollBottom" class="text-midnight">
        Hiring Excellence At
        <span class="text-radioactive">Iconic Assistants</span>
      </h1>
    </div>
  </section>
  <ExceptionalSkillComponent />
  <OutsourceTopComponent />
  <CandidateCriteriaComponent />
  <FooterComponent />
</template>

<script>
  import HeaderPagesComponent from "@/web/components/HeaderPagesComponent.vue";
  import ExceptionalSkillComponent from "@/web/components/howWeHire/ExceptionalSkillComponent.vue";
  import OutsourceTopComponent from "@/web/components/howWeHire/OutsourceTopComponent.vue";
  import CandidateCriteriaComponent from "@/web/components/howWeHire/CandidateCriteriaComponent.vue";
  import FooterComponent from "@/web/components/FooterComponent.vue";

  import { computed } from "vue";
  import { useHead } from "@vueuse/head";
  import { useRoute } from "vue-router";

  export default {
    name: "HowWeHire",
    components: {
      HeaderPagesComponent,
      ExceptionalSkillComponent,
      OutsourceTopComponent,
      CandidateCriteriaComponent,
      FooterComponent,
    },
    setup() {
      const route = useRoute();
      useHead({
        title: computed(() => route.meta.title),
        meta: [
          {
            name: "description",
            content: computed(() => route.meta.description),
          },
        ],
      });
    },
  };
</script>

<script setup>
  import { scrollBottom } from "@/motions.js";
</script>
