<template>
  <HeaderPagesComponent />
  <section class="heroPagesWave columnAlignCenter">
    <div class="heroPages flexCenter">
      <h1 v-motion="scrollBottom" class="text-midnight">
        Before You Start Working With
        <span class="text-radioactive">Iconic Assistants</span>
      </h1>
    </div>
  </section>
  <OpportunitiesComponent />
  <IsThisYou />
  <PerfectMatchComponent />
  <FooterComponent />
</template>

<script>
  import HeaderPagesComponent from "@/web/components/HeaderPagesComponent.vue";
  import OpportunitiesComponent from "@/web/components/beforeYouStart/OpportunitiesComponent.vue";
  import IsThisYou from "@/web/components/beforeYouStart/IsThisYou.vue";
  import PerfectMatchComponent from "@/web/components/beforeYouStart/PerfectMatchComponent.vue";
  import FooterComponent from "@/web/components/FooterComponent.vue";

  import { computed } from "vue";
  import { useHead } from "@vueuse/head";
  import { useRoute } from "vue-router";

  export default {
    name: "BeforeYouStart",
    components: {
      HeaderPagesComponent,
      OpportunitiesComponent,
      IsThisYou,
      PerfectMatchComponent,
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
