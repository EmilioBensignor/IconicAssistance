<template>
  <nav>
    <v-app-bar elevation="0" app class="bg-white d-flex align-center py-1">
      <v-app-bar-nav-icon
        icon="mdi-menu"
        color="radioactive"
        class="hamburger shadow-15"
        size="x-large"
        @click="showMenu = !showMenu"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link class="text-decoration-none" :to="'/'">
          <IconicLogo class="shadow-15 mt-1" color="blue" />
        </router-link>
      </v-toolbar-title>
      <div class="menuDesktop">
        <v-menu open-on-hover>
          <template v-slot:activator="{ props }">
            <v-btn
              class="btnNav"
              color="radioactive"
              v-bind="props"
              >About</v-btn
            >
          </template>
          <v-list>
            <v-list-item
              :to="item.path"
              v-for="(item, index) in aboutMenu"
              :key="index">
              <v-list-item-title class="navTitles">{{
                item.title
              }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu open-on-hover>
          <template v-slot:activator="{ props }">
            <v-btn
              class="btnNav"
              color="radioactive"
              v-bind="props"
              >Learn</v-btn
            >
          </template>
          <v-list>
            <v-list-item
              :to="item.path"
              v-for="(item, index) in learnMenu"
              :key="index">
              <v-list-item-title class="navTitles">{{
                item.title
              }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn
          class="btnNav"
          color="radioactive"
          :to="'/services'">
          Services
        </v-btn>
        <v-btn
          class="btnNav"
          color="radioactive"
          :to="'/pricing'">
          Pricing
        </v-btn>
        <v-btn
          class="btnNav"
          color="radioactive"
          :to="'/contact-us'">
          Contact Us
        </v-btn>
      </div>
      <PopUp />
    </v-app-bar>
    <v-navigation-drawer v-model="showMenu" app class="mt-2">
      <v-list class="pt-5" tag="ul">
        <router-link
          class="bg-radioactive rounded-xl font-weight-medium text-decoration-none ml-6 px-15 py-2"
          :to="'/contact-us'"
          >Book a Call</router-link
        >
        <p class="navTitles pt-5 pl-4">About</p>
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
  import PopUp from "./calendly/PopUpComponent.vue";

  export default {
    name: "HeaderTransparentComponent",
    components: {
      IconicLogo,
      PopUp,
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

<style>
  .v-toolbar__content > .v-toolbar-title {
    flex: none;
    align-self: center;
    margin: 0;
    margin-left: 1vw !important;
  }
  .navTitles {
    font-family: "Poppins", sans-serif;
    font-weight: 600 !important;
    color: #120d40;
  }
  .menuDesktop {
    display: none;
  }

  /* Desktop */
  @media only screen and (min-width: 1080px) {
    .hamburger, .v-navigation-drawer {
      display: none !important;
    }
    .v-toolbar__content {
      height: 80px !important;
    }
    .menuDesktop {
      height: 100%;
      display: flex;
      align-items: center;
      gap: 0.5vw;
    }
    .v-toolbar__content {
      justify-content: space-between !important;
    }
    .btnNav {
      letter-spacing: 0 !important;
      text-indent: 0 !important;
      font-family: "Poppins", sans-serif;
      font-size: 1.3rem !important;
      font-weight: 600 !important;
      text-transform: none !important;
    }
  }
</style>
