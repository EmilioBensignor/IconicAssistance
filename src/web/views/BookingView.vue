<template>
  <div class="h-100 column justify-space-between align-center">
    <iframe class="mt-10" src="https://iconicassistants.na.chilipiper.com/router/disco_call" width="560" height="700"></iframe>
    <div class="columnAlignCenter">
      <FooterRightsComponent />
    </div>
  </div>
</template>

<script>
import ROUTES_NAMES from "@/router/constants/ROUTES_NAMES";
import IconicLogo from "@/web/components/icons/IconicLogo.vue";
import FooterRightsComponent from "../components/FooterRightsComponent.vue";

export default {
  name: "Booking",
  components: {
    IconicLogo,
    FooterRightsComponent,
  },
  data() {
    return {
      routes: ROUTES_NAMES,
      currentYear: new Date().getFullYear()
    }
  },
};
</script>

<style scoped>
.footerBelow p,
.footerBelow a {
  font-size: 0.9rem;
  color: white;
  text-decoration: none;
}

.rightsReserved {
  font-size: 0.8rem;
}

/* SM */
@media only screen and (min-width: 480px) {

  .footerBelow p,
  .footerBelow a {
    font-size: 1rem;
  }

  .rightsReserved {
    font-size: 0.9rem;
  }
}

@media only screen and (min-width: 769px) {

  .footerBelow p,
  .footerBelow a {
    font-size: 1.05rem;
  }

  .rightsReserved {
    font-size: 1rem;
  }
}

/* Desktop */
@media only screen and (min-width: 1080px) {
  .rightsReserved {
    font-size: 1rem;
    margin-bottom: 3vw !important;
  }
}

@media only screen and (min-width: 1600px) {
  .rightsReserved {
    margin: 2vw 0 !important;
  }
}

@media only screen and (min-width: 1920px) {
  .rightsReserved {
    margin: 25px 0 !important;
  }
}
</style>