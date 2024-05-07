<template>
  <nav>
    <v-app-bar elevation="0" app class="bg-white px-5 py-1">
      <div class="w-100 d-flex justify-space-between align-center">
        <router-link class="text-decoration-none" :to="'/'">
          <IconicLogo class="mt-1" color="blue" />
        </router-link>
        <a class="secondaryButton desktop" href="#hero">Get Started</a>
      </div>
    </v-app-bar>
  </nav>
  <HeroComponent />
  <StartDelegatingComponent />
  <WhyChooseComponent />
  <TrustedAwesomeComponent />
</template>

<script>
  import IconicLogo from "@/web/components/icons/IconicLogo.vue";
  import HeroComponent from "@/web/components/contactUs/HeroComponent.vue";
  import StartDelegatingComponent from "@/web/components/contactUs/StartDelegatingComponent.vue";
  import WhyChooseComponent from "@/web/components/contactUs/WhyChooseComponent.vue";
  import TrustedAwesomeComponent from "@/web/components/contactUs/TrustedAwesomeComponent.vue";
  import "https://link.msgsndr.com/js/form_embed.js";

  import { computed } from "vue";
  import { useHead } from "@vueuse/head";
  import { useRoute } from "vue-router";

  export default {
    name: "ContactUs",
    components: {
      IconicLogo,
      HeroComponent,
      StartDelegatingComponent,
      WhyChooseComponent,
      TrustedAwesomeComponent,
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

<style scoped>
  header {
    display: flex;
    align-items: center;
  }

  .secondaryButton {
    display: none;
  }

  /* MD */
  @media only screen and (min-width: 769px) {
    .secondaryButton {
      display: block;
      padding: 2vw 4vw;
    }
  }

  @media only screen and (min-width: 850px) {
    .secondaryButton {
      padding: 1.8vw 3.8vw;
    }
  }

  @media only screen and (min-width: 1000px) {
    .secondaryButton {
      padding: 1.6vw 3.2vw;
    }
  }

  /* Desktop */
  @media only screen and (min-width: 1080px) {
    .secondaryButton {
      padding: 1.8vw 3vw;
    }
  }

  @media only screen and (min-width: 1200px) {
    .secondaryButton {
      padding: 1.6vw 2.8vw;
    }
  }

  @media only screen and (min-width: 1350px) {
    .secondaryButton {
      padding: 1.5vw 2.8vw;
    }
  }

  @media only screen and (min-width: 1500px) {
    .secondaryButton {
      padding: 1.2vw 2.5vw;
    }
  }

  @media only screen and (min-width: 1750px) {
    .secondaryButton {
      padding: 1.1vw 2.2vw;
    }
  }

  @media only screen and (min-width: 1920px) {
    .secondaryButton {
      padding: 21px 42px;
    }
  }
</style>
