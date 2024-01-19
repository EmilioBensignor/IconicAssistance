<template>
  <nav>
    <v-app-bar elevation="3">
      <v-app-bar-nav-icon
        icon="mdi-menu"
        @click="showMenu = !showMenu"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <IconicLogo />
      </v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="showMenu" app>
      <v-list tag="ul">
        <li v-for="item in menu" :key="item.name">
          <v-list-item :to="item.path">
            <v-list-item-title> {{ item.name }}</v-list-item-title>
          </v-list-item>
        </li>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
  import IconicLogo from './icons/IconicLogo.vue'

  export default {
    name: "HeaderComponent",
    components: {
      IconicLogo,
    },
    data() {
      return {
        showMenu: false,
        menu: [
          {
            path: '/',
            name: 'home',
          },
        ],
      };
    },
  };
</script>

<style scoped>
</style>