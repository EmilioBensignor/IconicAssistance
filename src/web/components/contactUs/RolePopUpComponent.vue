<template>
  <v-dialog class="popUpDialog bg-suiteBg" persistent v-model="dialog">
    <div class="container w-100 h-100 bg-suiteBg px-10 py-5">
      <div class="maxContent">
        <h2>Get Started</h2>
        <p class="popUpText my-5">
          We’d like to spend a few minutes understanding your needs and
          answering any questions you may have about working with an Iconic
          Executive Assistant. If it feels like a fit, we’ll hand-match you with
          a thoroughly vetted, dedicated assistant within 5 to 7 days!
        </p>
        <p class="choose my-3">Choose a Role</p>
        <div class="roles d-flex ga-5">
          <button
            class="allCenter ga-3 bg-white rounded-lg elevation-5 pa-3"
            @click="dialog = false">
            <img
              width="100%"
              src="@/web/assets/images/contactUs/Hire-an-Executive-Assistant.png"
              alt="Become an Executive Assistant" />
            <p class="w-auto text-center font-weight-bold">Hire an Assistant</p>
          </button>
          <a
            class="allCenter ga-3 bg-white rounded-lg elevation-5 pa-3"
            href="https://gabrielafasanella.hiringroom.com/jobs">
            <img
              width="100%"
              src="@/web/assets/images/contactUs/Become-an-Executive-Assistant.png"
              alt="Become an Executive Assistant" />
            <p class="w-auto text-center font-weight-bold">
              Become an Assistant
            </p>
          </a>
        </div>
      </div>
    </div>
  </v-dialog>
</template>

<script>
  export default {
    data() {
      return {
        dialog: true,
      };
    },
  };
</script>

<style>
  .popUpDialog > .v-overlay__content {
    max-width: 100% !important;
    max-height: 100% !important;
    width: 100% !important;
    height: 100% !important;
    margin: 0 !important;
  }
</style>

<style scoped>
  .popUpText {
    font-size: 0.875rem;
  }

  .choose {
    font-weight: 600;
  }

  .roles a,
  .roles button {
    width: 10rem;
  }

  .roles a img,
  .roles button img {
    width: 5rem;
  }

  .roles a {
    text-decoration: none;
  }

  .roles p {
    font-size: 0.875rem;
  }

  @media only screen and (min-width: 400px) {
    .roles a img,
    .roles button img {
      width: 8rem;
    }
  }

  @media only screen and (min-width: 480px) {
    .roles a,
    .roles button {
      width: 14rem;
    }

    .roles a img,
    .roles button img {
      width: 10rem;
    }

    .popUpText,
    .roles p {
      font-size: 1rem;
    }
  }

  @media only screen and (min-width: 600px) {
    .roles a,
    .roles button {
      width: 15rem;
    }

    .roles a img,
    .roles button img {
      width: 11rem;
    }
  }

  @media only screen and (min-width: 770px) {
    .container {
      padding: 1rem 5rem !important;
    }
  }

  @media only screen and (min-width: 992px) {
    .container {
      padding: 1.5rem 7rem !important;
    }

    .roles a,
    .roles button {
      width: 18rem;
    }

    .roles a img,
    .roles button img {
      width: 12rem;
    }

    .popUpText {
      width: 75%;
    }

    .popUpText,
    .roles p {
      font-size: 1.1rem;
    }
  }

  @media only screen and (min-width: 1080px){
    .maxContent {
      max-width: 650px;
      margin: 0 auto;
    }
  }
</style>
