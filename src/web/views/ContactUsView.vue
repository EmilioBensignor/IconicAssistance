<template>
  <HeaderContactComponent />
  <div class="container w-100 bg-grayBg px-10 py-5 mt-15">
    <div class="maxContent">
      <h2>Get Started</h2>
      <p class="popUpText my-5">
        We'd like to spend a few minutes understanding your needs and answering
        any questions you may have about working with an Iconic Executive
        Assistant. If it feels like a fit, we'll hand-match you with a
        thoroughly vetted, dedicated assistant within 5 to 7 days!
      </p>
      <p class="choose my-3">Choose a Role</p>
      <div class="roles d-flex ga-5 mb-15">
        <button
          id="formBtn"
          class="allCenter ga-3 bg-white rounded-lg elevation-5 pa-3"
          @click="showForm">
          <img
            width="100%"
            src="@/web/assets/images/contactUs/Hire-an-Executive-Assistant.png"
            alt="Become an Executive Assistant" />
          <p class="w-auto text-center font-weight-bold">Hire an Assistant</p>
        </button>
        <button
          id="nextBtn"
          @click="showNext"
          class="allCenter ga-3 bg-white rounded-lg elevation-5 pa-3"
          href="https://gabrielafasanella.hiringroom.com/jobs">
          <img
            width="100%"
            src="@/web/assets/images/contactUs/Become-an-Executive-Assistant.png"
            alt="Become an Executive Assistant" />
          <p class="w-auto text-center font-weight-bold">Become an Assistant</p>
        </button>
      </div>
      <div>
        <router-link
          id="next"
          class="btnNext d-none bg-radioactive rounded-pill elevation-3 px-5 py-3"
          :to="routes.BECOME_AN_ASSISTANT"
          >Next</router-link
        >
      </div>
      <div
        ref="formContainer"
        id="form-container"
        class="form d-none bg-white rounded-xl pa-5 elevation-3 mt-5"></div>
    </div>
  </div>
  <FooterContactComponent />
</template>

<script>
  import HeaderContactComponent from "@/web/components/contactUs/HeaderContactComponent.vue";
  import IconicLogo from "@/web/components/icons/IconicLogo.vue";
  import FooterContactComponent from "@/web/components/contactUs/FooterContactComponent.vue";

  import ROUTES_NAMES from "@/router/constants/ROUTES_NAMES";
  import "https://link.msgsndr.com/js/form_embed.js";

  import { computed } from "vue";
  import { useHead } from "@vueuse/head";
  import { useRoute } from "vue-router";

  const createHubSpotForm = () => {
    const hubspotScript = document.createElement("script");
    hubspotScript.setAttribute("charset", "utf-8");
    hubspotScript.setAttribute("type", "text/javascript");
    hubspotScript.src = "//js.hsforms.net/forms/embed/v2.js";
    hubspotScript.async = true;

    hubspotScript.onload = () => {
      window.hbspt.forms.create({
        region: "na1",
        portalId: "46001660",
        formId: "d164c3b6-b2b5-4fc9-acdf-b0920ec87420",
        target: "#form-container",
        onFormSubmit: function ($form) {
          let lead = {};
          window.addEventListener("message", function (event) {
            if (event.data.type === "hsFormCallback") {
              if (event.data.eventName === "onFormSubmit") {
                for (var key in event.data.data) {
                  if (Array.isArray(event.data.data[key].value)) {
                    event.data.data[key].value = event.data.data[key].value
                      .toString()
                      .replaceAll(",", ";");
                  }
                  lead[event.data.data[key].name] = event.data.data[key].value;
                }
                if (Object.keys(lead).length <= 1) {
                  lead = event.data.data;
                }
              } else if (event.data.eventName === "onFormSubmitted") {
                var redirectURL = "/discovery-call"; // replace with the redirect URL
                var queryString = new URLSearchParams(lead).toString();
                window.location.href = `${redirectURL}?${queryString}`; // this is the query string
              }
            }
          });
        },
      });
    };

    document.body.appendChild(hubspotScript);
  };

  export default {
    name: "ContactUs",
    components: {
      HeaderContactComponent,
      IconicLogo,
      FooterContactComponent,
    },
    data() {
      return {
        routes: ROUTES_NAMES,
      };
    },
    setup() {
      const route = useRoute();
      useHead({
        title: computed(() => route.meta.title),
        meta: [
          {
            name: "description",
            content: computed(() => route.meta.description),
          },
        ],
      });
    },
    methods: {
      showForm() {
        const formBtn = document.getElementById("formBtn");
        formBtn.classList.add("borderBtn");
        const nextBtn = document.getElementById("nextBtn");
        nextBtn.classList.remove("borderBtn");

        const formContainer = this.$refs.formContainer;
        formContainer.classList.remove("d-none");
        formContainer.scrollIntoView({ behavior: "smooth" });
        createHubSpotForm();
        const nextButton = document.getElementById("next");
        nextButton.classList.add("d-none");
      },
      showNext() {
        const nextBtn = document.getElementById("nextBtn");
        nextBtn.classList.add("borderBtn");
        const formBtn = document.getElementById("formBtn");
        formBtn.classList.remove("borderBtn");

        const becomeBtn = document.getElementById("next");
        becomeBtn.classList.remove("d-none");
        const formContainer = this.$refs.formContainer;
        formContainer.classList.add("d-none");
      },
    },
  };
</script>

<script setup>
  import { scrollBottom } from "@/motions.js";
import { doc } from 'firebase/firestore';
</script>

<style scoped>
  .popUpText {
    font-size: 0.875rem;
  }

  .choose {
    font-weight: 600;
  }

  .roles button {
    width: 10rem;
  }

  .roles button img {
    width: 5rem;
  }

  .roles p {
    font-size: 0.875rem;
  }

  .borderBtn {
    border: 2px solid #373ae6;
  }

  .btnNext {
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 600;
    border: 1px solid #373ae6;
  }
  .btnNext:hover {
    background-color: white !important;
    color: #373ae6 !important;
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
      padding: 2rem 5rem !important;
    }
  }

  @media only screen and (min-width: 992px) {
    .container {
      padding: 3rem 7rem !important;
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

  /* Desktop */
  @media only screen and (min-width: 1080px) {
    .secondaryButton {
      padding: 2vw 3.5vw;
    }
    .maxContent {
      max-width: 650px;
      margin: 0 auto;
    }
  }

  @media only screen and (min-width: 1200px) {
    .secondaryButton {
      padding: 1.75vw 3vw;
    }
  }

  @media only screen and (min-width: 1350px) {
    .secondaryButton {
      padding: 1.5vw 2.8vw;
    }
  }

  @media only screen and (min-width: 1550px) {
    .secondaryButton {
      padding: 1.2vw 2.5vw;
    }
  }

  @media only screen and (min-width: 1750px) {
    .secondaryButton {
      padding: 1.2vw 2.2vw;
    }
  }

  @media only screen and (min-width: 1920px) {
    .secondaryButton {
      padding: 21px 42px;
    }
  }
</style>
