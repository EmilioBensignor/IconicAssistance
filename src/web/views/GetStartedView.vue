<template>
  <HeaderGetStartedComponent
    v-if="buttonActions.header"
    :action="buttonActions.header.action"
    :handleAction="handleAction" />
  <HeroComponent />
  <GetStartedComponent />
  <WhatCanComponent
    v-if="buttonActions.whatCan"
    :action="buttonActions.whatCan.action"
    :handleAction="handleAction" />
  <YouBenefitComponent />
  <YourReturnComponent />
  <MatchingProcessComponent />
  <StartDelegatingComponent
    v-if="buttonActions.startDelegating"
    :action="buttonActions.startDelegating.action"
    :handleAction="handleAction" />
  <GoogleReviewsComponent />
  <FAQsComponent
    v-if="buttonActions.faq"
    :action="buttonActions.faq.action"
    :handleAction="handleAction" />
  <v-dialog class="dialogGetStarted" v-model="dialogVisible" persistent max-width="800px">
    <v-card class="rounded-lg">
      <v-card-title class="d-flex justify-end">
        <v-btn variant="text" @click="dialogVisible = false">X</v-btn>
      </v-card-title>
      <v-card-text class="pa-0">
        <div
          ref="formContainer"
          id="get-started"
          class="form bg-white rounded-xl px-5 py-3"></div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
  import { defineComponent, onMounted, ref, watch, computed } from "vue";
  import { useHead } from "@vueuse/head";
  import { useRoute } from "vue-router";
  import { useButtonActions } from "@/web/composables/useButtonActions";

  import HeaderGetStartedComponent from "@/web/components/HeaderGetStartedComponent.vue";
  import HeroComponent from "@/web/components/contactUs/HeroComponent.vue";
  import GetStartedComponent from "@/web/components/contactUs/GetStartedComponent.vue";
  import WhatCanComponent from "@/web/components/contactUs/WhatCanComponent.vue";
  import YouBenefitComponent from "@/web/components/contactUs/YouBenefitComponent.vue";
  import YourReturnComponent from "@/web/components/contactUs/YourReturnComponent.vue";
  import MatchingProcessComponent from "@/web/components/contactUs/MatchingProcessComponent.vue";
  import StartDelegatingComponent from "@/web/components/contactUs/StartDelegatingComponent.vue";
  import GoogleReviewsComponent from "@/web/components/contactUs/GoogleReviewsComponent.vue";
  import FAQsComponent from "@/web/components/home/FAQsComponent.vue";

  export default defineComponent({
    name: "GetStarted",
    components: {
      HeaderGetStartedComponent,
      HeroComponent,
      GetStartedComponent,
      WhatCanComponent,
      YouBenefitComponent,
      YourReturnComponent,
      MatchingProcessComponent,
      StartDelegatingComponent,
      GoogleReviewsComponent,
      FAQsComponent,
    },
    setup() {
      const route = useRoute();
      const { handleAction, openForm, dialogVisible } = useButtonActions();
      const formContainer = ref(null);

      useHead({
        title: computed(() => route.meta.title),
        meta: [
          {
            name: "description",
            content: computed(() => route.meta.description),
          },
        ],
      });

      const buttonActions = {
        header: { action: "form" },
        whatCan: { action: "form" },
        startDelegating: { action: "form" },
        faq: { action: "form" },
      };

      const createHubSpotForm = () => {
        if (typeof window.hbspt === "undefined") {
          const hubspotScript = document.createElement("script");
          hubspotScript.setAttribute("charset", "utf-8");
          hubspotScript.setAttribute("type", "text/javascript");
          hubspotScript.src = "//js.hsforms.net/forms/embed/v2.js";
          hubspotScript.async = true;

          hubspotScript.onload = () => {
            renderForm();
          };

          document.body.appendChild(hubspotScript);
        } else {
          renderForm();
        }
      };

      const renderForm = () => {
        if (formContainer.value) {
          formContainer.value.innerHTML = "";
          window.hbspt.forms.create({
            region: "na1",
            portalId: "46001660",
            formId: "d164c3b6-b2b5-4fc9-acdf-b0920ec87420",
            target: "#get-started",
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
                      lead[event.data.data[key].name] =
                        event.data.data[key].value;
                    }
                    if (Object.keys(lead).length <= 1) {
                      lead = event.data.data;
                    }
                  } else if (event.data.eventName === "onFormSubmitted") {
                    // Hubspot Should Redirect
                  }
                }
              });
            },
          });
        }
      };

      const closeDialog = () => {
        dialogVisible.value = false;
      };

      watch(dialogVisible, (newValue) => {
        if (newValue) {
          setTimeout(() => {
            createHubSpotForm();
          }, 100);
        }
      });

      onMounted(() => {
        createHubSpotForm();
      });

      return {
        handleAction,
        buttonActions,
        dialogVisible,
        openForm,
        formContainer,
        closeDialog,
      };
    },
  });
</script>

<style>
  .dialogGetStarted .v-card .v-card-title {
    padding: 0;
  }

  .dialogGetStarted .v-btn--size-default {
    min-width: 12px;
    padding: 0 1rem;
  }
</style>

<style scoped>
  header {
    display: flex;
    align-items: center;
  }

  .primaryButton {
    display: none;
  }

  /* MD */
  @media only screen and (min-width: 769px) {
    .primaryButton {
      display: block;
      padding: 2vw 4vw;
    }
  }

  @media only screen and (min-width: 850px) {
    .primaryButton {
      padding: 1.8vw 3.8vw;
    }
  }

  @media only screen and (min-width: 1000px) {
    .primaryButton {
      padding: 1.6vw 3.2vw;
    }
  }

  /* Desktop */
  @media only screen and (min-width: 1080px) {
    .primaryButton {
      padding: 1.8vw 3vw;
    }
  }

  @media only screen and (min-width: 1200px) {
    .primaryButton {
      padding: 1.6vw 2.8vw;
    }
  }

  @media only screen and (min-width: 1350px) {
    .primaryButton {
      padding: 1.5vw 2.8vw;
    }
  }

  @media only screen and (min-width: 1500px) {
    .primaryButton {
      padding: 1.2vw 2.5vw;
    }
  }

  @media only screen and (min-width: 1750px) {
    .primaryButton {
      padding: 1.1vw 2.2vw;
    }
  }

  @media only screen and (min-width: 1920px) {
    .primaryButton {
      padding: 21px 42px;
    }
  }
</style>
