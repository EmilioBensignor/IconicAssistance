<template>
  <section class="heroContactUs bg-grayBg">
    <div class="content">
      <div class="columnAlignCenter">
        <div
          id="hero"
          class="heroPages columnAlignCenter ga-10 mt-15 py-15 px-3">
          <div class="heroTitle column">
            <div>
              <h1 v-motion="scrollBottom" class="text-start text-midnight mb-5">
                Meet your perfect assistant, starting at
                <span class="text-radioactive"> $11 an hour!</span>
              </h1>
              <p v-motion="scrollBottom" class="w-100 pMedium text-start">
                Recruitment made simple, cost effective and scalable. Hire top
                1% of Executive and Customer Service Assistants.
              </p>
            </div>
            <div class="column align-start mt-5">
              <router-link class="secondaryButton elevation-5 my-10" :to="routes.CONTACT_US"
                >Get Started</router-link
              >
              <div class="googleLogo column align-start mt-5">
                <img
                  class="w-75"
                  src="@/web/assets/images/contactUs/Google-Five-Star-Reviews.png"
                  alt="Google Five Star Reviews" />
              </div>
            </div>
          </div>
          <div class="w-50 desktop">
            <img
              v-motion="scrollBottom"
              class="w-100"
              src="@/web/assets/images/contactUs/Executive-Assistant-Model-Iconic-Assistants.png"
              alt="Executive Assistant Model Iconic Assistants" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { scrollBottom } from "@/motions.js";
  import { onMounted } from "vue";

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
                var redirectURL = "/booking"; // replace with the redirect URL
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

  onMounted(() => {
    createHubSpotForm();
  });
</script>

<script>
  import ROUTES_NAMES from "@/router/constants/ROUTES_NAMES";

  export default {
    data() {
      return {
        routes: ROUTES_NAMES,
      };
    },
  };
</script>

<style scoped>
  h1 {
    width: 100%;
    line-height: 1em;
  }

  .heroPages {
    width: 95%;
  }

  .desktop {
    display: none;
  }

  .form {
    width: 100%;
  }

  /* SM */
  @media only screen and (min-width: 480px) {
    .form {
      width: 95%;
    }
  }

  @media only screen and (min-width: 600px) {
    .form {
      width: 90%;
    }
  }

  /* MD */
  @media only screen and (min-width: 769px) {
    .form,
    .googleLogo {
      width: 85%;
    }
  }

  /* LG */
  @media only screen and (min-width: 992px) {
    .form,
    .googleLogo {
      width: 80%;
    }
  }

  /* Desktop */
  @media only screen and (min-width: 1080px) {
    .desktop {
      display: block;
    }

    .heroPages {
      flex-direction: row;
      align-items: start;
      margin-top: 5rem !important;
    }

    .heroTitle {
      width: 55%;
    }

    .pMedium {
      width: 85% !important;
      font-size: 1.3rem;
    }

    .form,
    .googleLogo {
      width: 95%;
    }
  }

  @media only screen and (min-width: 1280px) {
    .form,
    .googleLogo {
      width: 90%;
    }
  }

  @media only screen and (min-width: 1600px) {
    .form,
    .googleLogo {
      width: 85%;
    }
  }

  @media only screen and (min-width: 1920px) {
    .form,
    .googleLogo {
      width: 80%;
    }
  }
</style>
