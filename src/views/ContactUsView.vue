<template>
  <nav>
    <v-app-bar elevation="0" app class="bg-white d-flex align-center px-5 py-1">
      <router-link class="text-decoration-none" :to="'/'">
        <IconicLogo class="mt-1" color="blue" />
      </router-link>
      <a class="secondaryButton desktop" href="#hero">Get Started</a>
    </v-app-bar>
  </nav>
  <section class="heroContactUs">
    <div class="content">
      <div class="columnAlignCenter">
        <div id="hero" class="heroPages columnAlignCenter ga-5">
          <div class="heroTitle">
            <h1 v-motion="scrollBottom" class="text-start text-midnight mb-5">
              Enhance your Productivity with an <span class="text-radioactive"> ICONIC Executive Assistant</span>
            </h1>
            <p v-motion="scrollBottom" class="pMedium text-start">
              <span class="font-weight-bold">Successful leaders</span> understand the power of having reliable Executive Assistants. Through ICONIC Assistants, you can access <span class="font-weight-bold">personalized executive support</span> to elevate your daily achievements to new heights.
            </p>
          </div>
          <div class="form mt-3">
            <iframe src="https://api.leadconnectorhq.com/widget/form/RG0XNk4b2K2mq0UVwkBq"
              style="display:none;width:100%;height:100%;border:none;border-radius:8px" id="inline-RG0XNk4b2K2mq0UVwkBq"
              data-layout="{'id':'INLINE'}" data-trigger-type="alwaysShow" data-trigger-value=""
              data-activation-type="alwaysActivated" data-activation-value="" data-deactivation-type="leadCollected"
              data-deactivation-value="" data-form-name="New Lead Form v1" data-height="1047"
              data-layout-iframe-id="inline-RG0XNk4b2K2mq0UVwkBq" data-form-id="RG0XNk4b2K2mq0UVwkBq"
              title="New Lead Form v1">
            </iframe>
          </div>
        </div>
        <img class="blueWave" src="@/assets/images/misc/Radioactive-Bottom-Wave.png" alt="Blue Wave">
      </div>
    </div>
  </section>
  <StartDelegatingComponent />
  <WhyChooseComponent />
  <TrustedAwesomeComponent />
</template>

<script>
import HeaderPagesComponent from "@/components/HeaderPagesComponent.vue";
import IconicLogo from "@/components/icons/IconicLogo.vue";
import StartDelegatingComponent from "@/components/contactUs/StartDelegatingComponent.vue";
import WhyChooseComponent from "@/components/contactUs/WhyChooseComponent.vue";
import TrustedAwesomeComponent from "@/components/contactUs/TrustedAwesomeComponent.vue";
import "https://link.msgsndr.com/js/form_embed.js";

export default {
  name: 'ContactUs',
  components: {
    HeaderPagesComponent,
    IconicLogo,
    StartDelegatingComponent,
    WhyChooseComponent,
    TrustedAwesomeComponent,
  },
};
</script>

<script setup>
import { scrollBottom } from "@/motions.js";
</script>

<style scoped>
h1 {
  line-height: 1em;
}

.heroContactUs {
  position: relative;
  background: rgb(255, 255, 255);
  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 10%, rgba(155, 220, 248, 1) 100%);
}

.heroPages {
  width: 90%;
  padding: 30vw 0 25vw 0;
}

.blueWave {
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 1;
}

.desktop {
  display: none;
}

.form {
  width: 100%;
}

.delegating {
  width: 85%;
}

.titleDelegating {
  font-size: 1.3rem;
}

/* SM */
@media only screen and (min-width: 480px) {
  .heroPages {
    padding: 25vw 0 25vw 0;
  }

  .form {
    width: 95%;
  }
}

@media only screen and (min-width: 600px) {
  .heroPages {
    padding: 20vw 0 25vw 0;
  }

  .form {
    width: 90%;
  }
}

@media only screen and (min-width: 700px) {
  .heroPages {
    padding: 18vw 0 25vw 0;
  }
}

/* MD */
@media only screen and (min-width: 769px) {
  .heroPages {
    padding: 16vw 0 25vw 0;
  }

  .form {
    width: 85%;
  }
}

@media only screen and (min-width: 900px) {
  .heroPages {
    padding: 14vw 0 22vw 0;
  }
}

/* LG */
@media only screen and (min-width: 992px) {
  .heroPages {
    padding: 13vw 0 22vw 0;
  }

  .form {
    width: 80%;
  }
}

/* Desktop */
@media only screen and (min-width: 1080px) {
  .heroContactUs {
    background: linear-gradient(90deg, rgba(255, 255, 255, 1) 30%, rgba(155, 220, 248, 1) 100%);
  }

  .heroPages {
    flex-direction: row;
    align-items: start;
    padding: 15vw 0 20vw 0;
  }

  .heroTitle {
    width: 65%;
  }

  .secondaryButton {
    padding: 2vw 3.5vw;
  }

  .desktop {
    display: block;
  }

  .form {
    width: 60%;
  }
}

@media only screen and (min-width: 1200px) {
  .secondaryButton {
    padding: 1.75vw 3.5vw;
  }
}

@media only screen and (min-width: 1280px) {
  .heroPages {
    padding: 13vw 0 22vw 0;
  }

  .form {
    width: 65%;
  }
}

@media only screen and (min-width: 1350px) {
  .heroPages {
    padding: 12vw 0 22vw 0;
  }

  .secondaryButton {
    padding: 1.5vw 3.2vw;
  }
}

@media only screen and (min-width: 1550px) {
  .secondaryButton {
    padding: 1.2vw 3vw;
  }
}

@media only screen and (min-width: 1600px) {
  .heroPages {
    padding: 10vw 0 22vw 0;
  }

  .form {
    width: 60%;
  }
}

@media only screen and (min-width: 1750px) {
  .secondaryButton {
    padding: 1.2vw 2.5vw;
  }
}

@media only screen and (min-width: 1920px) {
  .heroPages {
    padding: 10% 0 20% 0;
  }

  .form {
    width: 55%;
  }

  .secondaryButton {
    padding: 23px 46px;
  }
}
</style>