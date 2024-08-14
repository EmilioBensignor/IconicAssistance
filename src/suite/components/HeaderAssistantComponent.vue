<template>
  <nav class="navSuite mb-15">
    <v-app-bar elevation="0" app class="bg-suiteBg d-flex align-center py-1">
      <v-app-bar-nav-icon
        icon="mdi-menu"
        color="lila"
        class="hamburger shadow-15"
        size="x-large"
        @click="showMenu = !showMenu">
      </v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link class="text-decoration-none" :to="routes.SUITE">
          <img
            width="6%"
            src="@/suite/assets/images/White-Logo.png"
            alt="Suite Logo" />
        </router-link>
      </v-toolbar-title>
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn
            v-if="!userData || !userData.firstname"
            icon="mdi-account"
            class="account elevation-3 pa-1"
            v-bind="props">
          </v-btn>
          <button
            v-else
            class="account rounded-circle elevation-3 pa-1"
            v-bind="props">
            {{ getUserInitials(userData.firstname, userData.lastname) }}
          </button>
        </template>
        <v-list class="acountList bg-lightViolet mt-1 py-0">
          <v-list-item v-for="(item, index) in accountMenu" :key="index">
            <router-link :to="item.path">
              <v-list-item-title class="text-white">
                {{ item.title }}
              </v-list-item-title>
            </router-link>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer v-model="showMenu" app class="bg-suiteBg mt-2">
      <v-list class="py-0" tag="ul">
        <li>
          <v-list-item @click="dialog = true">
            <div class="d-flex align-center">
              <v-icon color="lila" icon="mdi-logout"></v-icon>
              <v-list-item-title class="pl-4 text-white">
                Log Out
              </v-list-item-title>
            </div>
          </v-list-item>
        </li>
      </v-list>
    </v-navigation-drawer>
    <v-dialog v-model="dialog">
      <v-card
        class="bg-suiteBg align-self-center ga-3 rounded-lg"
        max-width="400"
        title="Do you want to log out?">
        <div class="d-flex justify-center ga-3 px-5">
          <v-btn text="Cancel" @click="dialog = false"></v-btn>
          <v-btn
            class="bg-btnViolet"
            text="Log Out"
            @click="onLogout"></v-btn>
        </div>
      </v-card>
    </v-dialog>
  </nav>
</template>

<script>
  import routes from "@/router/constants/ROUTES_NAMES";
  import { logout } from "@/suite/services/auth.service";
  import { useAuthStore } from "@/suite/stores/auth.store";

  export default {
    name: "HeaderSuiteComponent",
    data() {
      return {
        showMenu: false,
        dialog: false,
        routes: routes,
        accountMenu: [
          {
            path: routes.ASSISTANT_ACCOUNT,
            title: "Account",
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
      onLogout() {
        this.dialog = false;
        logout();
      },
      getUserInitials(firstname, lastname) {
        if (!firstname || !lastname) return "";
        return (
          firstname.charAt(0).toUpperCase() + lastname.charAt(0).toUpperCase()
        );
      },
    },
  };
</script>

<script setup>
  import { collection, doc } from "firebase/firestore";
  import { useDocument } from "vuefire";
  import { db } from "../firebase/init";
  const store = useAuthStore();
  const userData = useDocument(
    doc(collection(db, "assistants"), store.user.uid)
  );
</script>

<style>
  .navSuite .v-toolbar {
    max-width: 1920px;
  }

  .navSuite .v-navigation-drawer {
    width: 55% !important;
    max-width: 205px !important;
  }

  .navSuite .v-navigation-drawer__content {
    max-width: 100%;
  }

  .navSuite .v-list-item:hover {
    background: #313053 !important;
    transition: all 0.3s;
  }

  .acountList .v-list-item:hover {
    background: #8785ba !important;
    transition: all 0.3s;
  }
</style>

<style scoped>
  .v-app-bar {
    position: relative;
  }

  .hamburger {
    display: block !important;
  }

  .account {
    width: 3rem;
    height: 3rem !important;
    position: absolute;
    right: 4%;
    font-weight: 600;
    border: 2px solid #8785ba;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  .v-list-item:hover {
    background: #f6f6f6;
  }

  .v-menu .v-list-item-title {
    font-weight: 600;
  }

  .v-navigation-drawer .v-list-item-title {
    font-weight: 500;
  }

  @media only screen and (min-width: 1080px) {
    .v-toolbar-title {
      position: absolute;
      left: 65px;
      cursor: pointer;
    }
    .v-navigation-drawer {
      top: 80px !important;
    }
  }
</style>
