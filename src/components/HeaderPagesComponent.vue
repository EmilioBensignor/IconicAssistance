<template>
  <nav>
    <v-app-bar elevation="0" app class="bg-white d-flex align-center pt-3 pb-1">
      <v-app-bar-nav-icon
        icon="mdi-menu"
        color="radioactive"
        class="shadow-15"
        size="x-large"
        @click="showMenu = !showMenu"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <v-toolbar-title__placeholder
          class="d-flex align-center justify-space-between">
          <router-link class="text-decoration-none" :to="'/'">
            <IconicLogo class="shadow-15" color="blue" />
          </router-link>
          <PopUpComponent />
        </v-toolbar-title__placeholder>
      </v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="showMenu" app class="mt-4">
      <v-list tag="ul">
        <p class="navTitles pt-1 pl-4">About</p>
        <li v-for="item in aboutMenu" :key="item.title">
          <v-list-item :to="item.path">
            <v-list-item-title class="pl-4 text-midnight">{{
              item.title
            }}</v-list-item-title>
          </v-list-item>
        </li>
        <p class="navTitles pt-1 pl-4">Learn</p>
        <li v-for="item in learnMenu" :key="item.title">
          <v-list-item :to="item.path">
            <v-list-item-title class="pl-4 text-midnight">{{
              item.title
            }}</v-list-item-title>
          </v-list-item>
        </li>
        <li>
          <v-list-item :to="'/services'">
            <v-list-item-title class="navTitles">Services</v-list-item-title>
          </v-list-item>
        </li>
        <li>
          <v-list-item :to="'/pricing'">
            <v-list-item-title class="navTitles">Pricing</v-list-item-title>
          </v-list-item>
        </li>
        <li>
          <v-list-item :to="'/contact-us'">
            <v-list-item-title class="navTitles">Contact Us</v-list-item-title>
          </v-list-item>
        </li>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
  import IconicLogo from "./icons/IconicLogo.vue";
  import PopUpComponent from "@/components/calendly/PopUpComponent.vue";

  export default {
    name: "HeaderTransparentComponent",
    components: {
      IconicLogo,
      PopUpComponent,
    },
    data() {
      return {
        showMenu: false,
        isScrolled: false,
        aboutMenu: [
          {
            path: "/about-us",
            title: "About Us",
          },
          {
            path: "/how-it-works",
            title: "How It Works",
          },
          {
            path: "/how-we-hire",
            title: "How We Hire",
          },
          {
            path: "/faq",
            title: "FAQ",
          },
        ],
        learnMenu: [
          {
            path: "/what-is-a-va",
            title: "What Is A VA",
          },
          {
            path: "/types-of-vas",
            title: "Types Of VAs",
          },
          {
            path: "/before-you-start",
            title: "Before You Start",
          },
          {
            path: "/blog",
            title: "Blog",
          },
        ],
      };
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
      handleScroll() {
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;

        const threshold = windowHeight * 0.5;

        if (scrollTop >= threshold) {
          this.isScrolled = true;
        } else {
          this.isScrolled = false;
        }
      },
    },
  };
</script>

<style scoped>
  .v-app-bar {
    transition: background-color 0.3s ease;
    backdrop-filter: blur(5px);
  }

  .v-toolbar__content > .v-toolbar-title {
    margin: 0;
  }
  .navTitles {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 1.2rem;
    color: #120d40;
  }
  .v-list-item-title {
    font-size: 1.1rem;
  }
</style>
