<template>
  <nav>
    <v-app-bar elevation="0" app class="d-flex align-center py-1" :class="isScrolled ? 'bg-white' : 'bg-transparent'">
      <v-app-bar-nav-icon aria-label="Hamburger Menu" icon="mdi-menu" :color="isScrolled ? 'radioactive' : 'white'"
        class="hamburger shadow-15" size="x-large" @click="showMenu = !showMenu"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link aria-label="Iconic Assitants Home" class="text-decoration-none" :to="'/'">
          <IconicLogo class="shadow-15 mt-1" :color="isScrolled ? 'blue' : 'white'" />
        </router-link>
      </v-toolbar-title>
      <div class="menuDesktop">
        <v-menu open-on-hover>
          <template v-slot:activator="{ props }">
            <v-btn class="btnNav" :color="isScrolled ? 'radioactive' : 'white'" v-bind="props">About</v-btn>
          </template>
          <v-list class="py-0 mt-1">
            <v-list-item :to="item.path" v-for="(item, index) in aboutMenu" :key="index">
              <v-list-item-title class="navTitles">{{
                item.title
              }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu open-on-hover>
          <template v-slot:activator="{ props }">
            <v-btn class="btnNav" :color="isScrolled ? 'radioactive' : 'white'" v-bind="props">Learn</v-btn>
          </template>
          <v-list class="py-0 mt-1">
            <v-list-item :to="item.path" v-for="(item, index) in learnMenu" :key="index">
              <v-list-item-title class="navTitles">{{
                item.title
              }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn class="btnNav" :color="isScrolled ? 'radioactive' : 'white'" :to="'/services'">
          Services
        </v-btn>
        <v-btn class="btnNav" :color="isScrolled ? 'radioactive' : 'white'" :to="'/types-of-eas'">
          Types of EAs
        </v-btn>
        <v-btn class="btnNav" :color="isScrolled ? 'radioactive' : 'white'" :to="'/contact-us'">
          Contact Us
        </v-btn>
      </div>
      <PopUp />
    </v-app-bar>
    <v-navigation-drawer v-model="showMenu" app class="mt-2">
      <v-list class="pt-5" tag="ul">
        <router-link
          class="bg-radioactive rounded-xl font-weight-medium text-decoration-none ml-6 px-15 py-2 elevation-3"
          :to="'/contact-us'">Get Started</router-link>
        <p class="navTitles pt-5 pl-4">About</p>
        <ul>
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
            <v-list-item :to="'/types-of-eas'">
              <v-list-item-title class="navTitles">Types of EAs</v-list-item-title>
            </v-list-item>
          </li>
          <li>
            <v-list-item :to="'/contact-us'">
              <v-list-item-title class="navTitles">Contact Us</v-list-item-title>
            </v-list-item>
          </li>
        </ul>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import IconicLogo from "./icons/IconicLogo.vue";
import PopUp from "./header/PopUpComponent.vue";

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
          path: "/what-is-an-ea",
          title: "What Is An EA",
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
</style>