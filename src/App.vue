<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script setup>
  import { onMounted } from "vue";

  import { init } from "@/suite/services/auth.service.js";
  onMounted(() => {
    init();
  });
</script>

<script>
  import { useHead } from "@vueuse/head";

  export default {
    name: "App",
    watch: {
      $route() {
        window.scrollTo(0, 0);
      },
    },
    setup() {
      useHead({
        title: "Iconic Executive Asssitants",
        meta: [
          {
            name: "description",
            content:
              "Iconic Assistants supercharge productivity for entrepreneurs, executives, startups, and high growth companies.",
          },
        ],
      });
    },
  };
</script>

<style>
  /* Fonts */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  button,
  a,
  li,
  label,
  input {
    font-family: "Poppins", sans-serif;
  }

  h1,
  h2,
  h3,
  h4 {
    width: 90%;
    font-weight: 700;
  }

  h1 {
    line-height: 1.2em;
    font-size: 2.4rem;
  }

  h2 {
    font-size: 1.7rem;
  }

  h3 {
    font-size: 1.4rem;
    color: #120d40;
  }

  h4 {
    font-size: 1.2rem;
  }

  .subtitle {
    font-size: 1.1rem;
    font-weight: 500;
  }

  .pMedium {
    font-size: 1.15rem;
    font-weight: 500;
  }

  p {
    width: 85%;
    line-height: 1.5em;
    font-size: 1rem;
    font-weight: 400;
    color: #120d40;
  }

  ul {
    list-style: none;
  }

  li {
    font-size: 1rem;
  }

  .faqWrapper {
    text-align: start;
    font-size: 0.9rem;
    font-family: "Poppins", sans-serif;
  }

  .content {
    max-width: 1920px !important;
    display: flex;
    justify-content: center;
  }

  /* Buttons */

  .primaryButton,
  .secondaryButton {
    border-radius: 20vw;
    font-family: "Poppins", sans-serif;
    font-size: 1.1rem;
    font-weight: 600;
    line-height: 1.3rem;
    text-decoration: none;
    text-align: center;
    padding: 4vw 7vw;
    transition: all ease 0.2s;
  }

  .primaryButton {
    background-color: white;
    border: 1px solid white;
    color: #373ae6;
  }

  .secondaryButton {
    background-color: #373ae6;
    border: 1px solid #373ae6;
    color: white;
  }

  .primaryButton:hover {
    background-color: transparent;
    color: white;
  }

  .secondaryButton:hover {
    background-color: white;
    color: #373ae6;
  }

  /* BackGrounds */
  .skyRadioactive {
    background-image: linear-gradient(
      to bottom,
      #0cb8f1,
      #00a0fa,
      #0085fe,
      #0066f9,
      #373ae6
    );
  }

  .radioactiveSky {
    background-image: linear-gradient(
      to bottom,
      #373ae6,
      #0066f9,
      #0085fe,
      #00a0fa,
      #0cb8f1
    );
  }

  /* Waves */
  .radioactiveWaves,
  .skyBlueWaves,
  .skyRadioactiveWaves,
  .radioactiveSkyWaves {
    background-repeat: no-repeat, no-repeat;
    background-size: contain, contain;
    background-position: top left, bottom left;
    padding-top: 20vw;
    padding-bottom: 20vw;
  }

  .radioactiveWaves {
    background-image: url("@/web/assets/images/misc/Radioactive-Top-Wave.png"),
      url("@/web/assets/images/misc/Radioactive-Bottom-Wave.png");
  }

  .skyBlueWaves {
    background-image: url("@/web/assets/images/misc/Sky-Blue-Top-Wave.png"),
      url("@/web/assets/images/misc/Sky-Blue-Bottom-Wave.png");
  }

  .skyRadioactiveWaves {
    background-image: url("@/web/assets/images/misc/Sky-Blue-Top-Wave.png"),
      url("@/web/assets/images/misc/Radioactive-Bottom-Wave.png");
  }

  .radioactiveSkyWaves {
    background-image: url("@/web/assets/images/misc/Radioactive-Top-Wave.png"),
      url("@/web/assets/images/misc/Sky-Blue-Bottom-Wave.png");
  }

  .heroPagesWave {
    background-image: url("@/web/assets/images/misc/Sky-Blue-Bottom-Wave.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
  }

  .heroPagesRadioactiveWave {
    background-image: url("@/web/assets/images/misc/Radioactive-Bottom-Wave.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
  }

  .heroPagesWhiteWave {
    position: absolute;
    bottom: 0;
    z-index: 1;
  }

  /* Drop Shadows */
  .shadow-5 {
    -webkit-filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.5));
    filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.5));
  }

  .shadow-35 {
    -webkit-filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.35));
    filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.35));
  }

  .shadow-3 {
    -webkit-filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.3));
    filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.3));
  }

  .shadow-25 {
    -webkit-filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.25));
    filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.25));
  }

  .shadow-2 {
    -webkit-filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.2));
    filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.2));
  }

  .shadow-15 {
    -webkit-filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.15));
    filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.15));
  }

  /* Alignments */
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0 3vw;
  }

  .column {
    display: flex;
    flex-direction: column;
  }

  .row {
    display: flex;
    flex-direction: row;
  }

  .rowCenter{
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .columnAlignCenter {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .flexCenter {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .allCenter {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  /* Pages */
  .heroPages {
    width: 85%;
    padding: 20vh 0 22vw 0;
  }

  .heroPrivacyTerms {
    padding: 25vw 0 7.5vw 0;
  }

  .heroPrivacyTerms h1 {
    width: 100%;
  }

  .heroSuite {
    padding: 5% 0 2% 0;
  }

  /* Animations */
  .delay {
    transition: ease-in;
    animation-delay: 250ms;
  }

  /* SM */
  @media only screen and (min-width: 480px) {
    h1 {
      font-size: 2.6rem;
    }

    h2 {
      font-size: 1.8rem;
    }

    h3 {
      font-size: 1.4rem;
    }

    h4 {
      font-size: 1.25rem;
    }

    .subtitle {
      font-size: 1.2rem;
    }

    .pMedium {
      font-size: 1.3rem;
    }

    .faqWrapper {
      font-size: 1rem;
    }

    .primaryButton,
    .secondaryButton {
      font-size: 1.3rem;
      padding: 3vw 5.5vw;
    }

    .heroPages {
      padding: 20vh 0 25vw 0;
    }

    .heroPrivacyTerms {
      padding: 20vw 0 7.5vw 0;
    }
  }

  /* MD */
  @media only screen and (min-width: 769px) {
    h1 {
      font-size: 3rem;
    }

    h2 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.6rem;
    }

    h4 {
      font-size: 1.45rem;
    }

    .subtitle {
      font-size: 1.3rem;
    }

    .pMedium {
      font-size: 1.4rem;
    }

    .faqWrapper {
      font-size: 1rem;
    }

    .primaryButton,
    .secondaryButton {
      font-size: 1.3rem;
      padding: 2.2vw 4vw;
    }

    .heroPages {
      padding: 20vh 0 22vw 0;
    }

    .heroPrivacyTerms {
      padding: 15vw 0 5vw 0;
    }
  }

  /* LG */
  @media only screen and (min-width: 992px) {
    h1 {
      font-size: 3.6rem;
    }

    h2 {
      font-size: 2.3rem;
    }

    h3 {
      font-size: 1.8rem;
    }

    h4 {
      font-size: 1.6rem;
    }

    p {
      font-size: 1.1rem;
    }

    .subtitle {
      font-size: 1.5rem;
    }

    .pMedium {
      font-size: 1.55rem;
    }

    .faqWrapper {
      font-size: 1.05rem;
    }

    .primaryButton,
    .secondaryButton {
      font-size: 1.4rem;
      padding: 2.2vw 4vw;
    }

    .heroPages {
      width: 100vw;
      padding: 20vh 0 22vw 0;
    }

    .heroPrivacyTerms {
      padding: 12.5vw 0 5vw 0;
    }
  }

  /* Desktop */
  @media only screen and (min-width: 1080px) {
    #app {
      max-width: 100vw;
    }

    .v-expansion-panel-title {
      font-size: 1rem !important;
    }

    .faqWrapper {
      width: 100% !important;
      font-size: 1rem;
    }

    .faqWrapper p,
    .faqWrapper li {
      font-size: 1rem;
    }

    .heroPages {
      padding: 22vh 0 24vw 0;
    }
  }

  @media only screen and (min-width: 1280px) {
    h1 {
      font-size: 3.5rem;
    }

    h2 {
      font-size: 2.2rem;
    }

    h3 {
      font-size: 1.7rem;
    }

    h4 {
      font-size: 1.5rem;
    }

    .subtitle {
      font-size: 1.4rem;
    }

    .primaryButton,
    .secondaryButton {
      font-size: 1.3rem;
      padding: 2vw 3.8vw;
    }

    .v-expansion-panel-title {
      font-size: 1rem !important;
    }

    .faqWrapper {
      font-size: 1rem;
    }

    .faqWrapper p,
    .faqWrapper li {
      font-size: 1rem;
    }

    .heroPages {
      padding: 24vh 0 26vw 0;
    }

    .heroPrivacyTerms {
      padding: 10vw 0 3vw 0;
    }
  }

  /* XL */
  @media only screen and (min-width: 1440px) {
    h1 {
      font-size: 3.6rem;
    }

    h2 {
      font-size: 2.3rem;
    }

    h3 {
      font-size: 1.8rem;
    }

    h4 {
      font-size: 1.6rem;
    }

    .subtitle {
      font-size: 1.5rem;
    }

    .primaryButton,
    .secondaryButton {
      font-size: 1.4rem;
      padding: 1.8vw 3.6vw;
    }

    .heroPages {
      padding: 22vh 0 24vw 0;
    }
  }

  @media only screen and (min-width: 1600px) {
    h1 {
      font-size: 3.7rem;
    }

    h2 {
      font-size: 2.4rem;
    }

    h3 {
      font-size: 1.9rem;
    }

    h4 {
      font-size: 1.7rem;
    }

    .subtitle {
      font-size: 1.6rem;
    }

    .primaryButton,
    .secondaryButton {
      font-size: 1.5rem;
      padding: 1.6vw 3.2vw;
    }

    .heroPages {
      padding: 22vh 0 22vw 0;
    }

    .v-expansion-panel-title {
      font-size: 1.1rem !important;
    }

    .faqWrapper {
      font-size: 1.1rem;
    }

    .faqWrapper p,
    .faqWrapper li {
      font-size: 1.1rem;
    }

    .heroPrivacyTerms {
      padding: 8.5vw 0 3vw 0;
    }
  }

  @media only screen and (min-width: 1750px) {
    h1 {
      font-size: 3.8rem;
    }

    h2 {
      font-size: 2.5rem;
    }

    h3 {
      font-size: 2rem;
    }

    h4 {
      font-size: 1.8rem;
    }

    .subtitle {
      font-size: 1.7rem;
    }

    p {
      font-size: 1.2rem;
    }

    .primaryButton,
    .secondaryButton {
      font-size: 1.6rem;
      padding: 1.4vw 2.8vw;
    }

    .heroPages {
      padding: 24vh 0 24vw 0;
    }
  }

  @media only screen and (min-width: 1920px) {
    h1 {
      font-size: 4rem;
    }

    h2 {
      font-size: 2.7rem;
    }

    h3 {
      font-size: 2.2rem;
    }

    h4 {
      font-size: 1.8rem;
    }

    .subtitle {
      font-size: 1.9rem;
    }

    p {
      font-size: 1.3rem;
    }

    .primaryButton,
    .secondaryButton {
      font-size: 1.8rem;
      padding: 25px 49px;
    }

    .heroPages {
      padding: 10% 0 20% 0;
    }

    .heroPrivacyTerms {
      padding: 8% 0 3% 0;
    }
  }
</style>
