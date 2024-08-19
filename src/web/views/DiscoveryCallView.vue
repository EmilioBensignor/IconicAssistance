<template>
  <div class="bg-grayBg">
    <div
      class="meetings-iframe-container"
      data-src="https://meetings.hubspot.com/iconic-assistants/discovery-call?embed=true"></div>
    <div class="columnAlignCenter">
      <FooterRightsComponent />
    </div>
  </div>
</template>

<script>
  import ROUTES_NAMES from "@/router/constants/ROUTES_NAMES";
  import { onMounted } from "vue";
  import IconicLogo from "@/web/components/icons/IconicLogo.vue";
  import FooterRightsComponent from "../components/FooterRightsComponent.vue";

  export default {
    name: "DiscoveryCall",
    components: {
      IconicLogo,
      FooterRightsComponent,
    },
    data() {
      return {
        routes: ROUTES_NAMES,
        currentYear: new Date().getFullYear(),
      };
    },
    setup() {
      onMounted(() => {
        const script = document.createElement("script");
        script.src =
          "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
        script.async = true;
        document.body.appendChild(script);
      });
    },
  };
</script>

<style scoped>
  .booking {
    height: 100vh;
  }

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
