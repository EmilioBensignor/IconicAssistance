<template>
  <v-app class="pt-15">
    <HeaderComponent />
    <div class="pt-4">
      <router-view />
    </div>
    <FooterComponent class="pt-10" />
  </v-app>
</template>

<script>
  import HeaderComponent from "@/components/HeaderComponent.vue";
  import FooterComponent from "@/components/FooterComponent.vue";

  export default {
    name: "App",
    components: {
      HeaderComponent,
      FooterComponent,
    },
    watch:{
      '$route'(){
        window.scrollTo(0,0);
      }
    }
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
  li {
    font-family: "Poppins", sans-serif;
  }
  h1 {
    width: 90%;
    font-weight: 700;
    line-height: 1.2em;
    font-size: 2.4rem;
  }
  h2 {
    width: 90%;
    font-weight: 700;
    font-size: 1.7rem;
  }
  h3 {
    width: 90%;
    font-size: 1.4rem;
    color: #120d40;
  }
  .subtitle {
    font-size: 1.1rem;
  }
  p {
    width: 85%;
    line-height: 1.5em;
    font-size: 1rem;
    color: #120d40;
  }

  ul {
    list-style: none;
  }

  li{
    font-size: 1rem;
  }

  .faqWrapper {
    text-align: start;
    font-size: 0.9rem;
    font-family: "Poppins", sans-serif;
  }

  /* Buttons */

  .primaryButton {
    background-color: white;
    border: 1px solid white;
    border-radius: 20vw;
    color: #373ae6;
    font-size: 1.1rem;
    font-weight: 600;
    line-height: 1.3rem;
    text-decoration: none;
    padding: 4vw 7vw;
  }

  .secondaryButton {
    background-color: #373ae6;
    border: 1px solid #373ae6;
    border-radius: 20vw;
    color: white;
    font-size: 1.1rem;
    font-weight: 600;
    line-height: 1.3rem;
    text-decoration: none;
    padding: 4vw 7vw;
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

  /* Alignments */
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 5vw 3vw;
  }

  .column {
    display: flex;
    flex-direction: column;
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

  /* Pages */
  .heroPages {
    width: 85%;
    padding: 15vw 0;
  }
</style>
