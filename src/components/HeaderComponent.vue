<template>
  <nav>
    <v-app-bar
      elevation="3"
      app
      class="d-flex align-center pb-1 pt-2 bg-radioactive">
      <v-app-bar-nav-icon
        icon="mdi-menu"
        size="x-large"
        @click="showMenu = !showMenu"></v-app-bar-nav-icon>
      <v-toolbar-title class="align-center navHeight">
        <router-link :to="'/'">
          <IconicLogo class="text-white" />
        </router-link>
      </v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="showMenu" app class="mt-2">
      <v-list tag="ul">
        <p class="navTitles pt-1 pl-4">About</p>
        <li v-for="item in aboutMenu" :key="item.title">
          <v-list-item :to="item.path">
            <v-list-item-title class="pl-4 text-midnight">{{ item.title }}</v-list-item-title>
          </v-list-item>
        </li>
        <p class="navTitles pt-1 pl-4">Learn</p>
        <li v-for="item in learnMenu" :key="item.title">
          <v-list-item :to="item.path">
            <v-list-item-title class="pl-4 text-midnight">{{ item.title }}</v-list-item-title>
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

  export default {
    name: "HeaderComponent",
    components: {
      IconicLogo,
    },
    data() {
      return {
        showMenu: false,
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
  };
</script>

<style scoped>
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
