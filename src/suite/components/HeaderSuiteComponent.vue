<template>
  <nav class="mb-15">
    <v-app-bar elevation="0" app class="bg-white d-flex align-center py-1">
      <v-app-bar-nav-icon icon="mdi-menu" color="radioactive" class="hamburger shadow-15" size="x-large"
        @click="showMenu = !showMenu"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link class="text-decoration-none" :to="'/'">
          <img width="75%" src="@/suite/assets/images/Suite-Logo.png" alt="Suite Logo">
        </router-link>
      </v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="showMenu" app class="mt-2">
      <v-list class="py-0" tag="ul">
        <li v-for="item in suiteMenu" :key="item.title">
          <v-list-item :to="item.path">
            <div class="d-flex align-center">
              <v-icon color="radioactive" :icon="`mdi-${item.icon}`"></v-icon>
              <v-list-item-title class="pl-4 text-midnight">
                {{ item.title }}
              </v-list-item-title>
            </div>
          </v-list-item>
        </li>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import routes from "@/router/constants/ROUTES_NAMES";

export default {
  name: "HeaderSuiteComponent",
  data() {
    return {
      showMenu: false,
      suiteMenu: [
        {
          path: routes.SUITE,
          title: "DASHBOARD",
          icon: "home"
        },
        {
          path: routes.ASSISTANTS,
          title: "ASSISTANS",
          icon: "account-group"
        },
        {
          path: routes.INVOICES,
          title: "INVOICES",
          icon: "receipt"
        },
      ],
    }
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
}
</script>

<style scoped>
</style>