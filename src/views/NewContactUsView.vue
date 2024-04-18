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
              Get More Done With An <span class="text-radioactive">Executive Assistant</span>
            </h1>
            <p class="pMedium text-start">It's no secret that the world's most effective leaders are backed by great
              executive
              assistants. With Magic, you can get an EA of your own to drastically expand what you get done each day.
            </p>
          </div>
          <div class="form w-75">
            <iframe src="https://api.leadconnectorhq.com/widget/form/5TyotlVFKFOl3LaCU3Id"
              style="width:100%;height:100%;border:none;border-radius:8px" id="inline-5TyotlVFKFOl3LaCU3Id"
              data-layout="{'id':'INLINE'}" data-trigger-type="alwaysShow" data-trigger-value=""
              data-activation-type="alwaysActivated" data-activation-value="" data-deactivation-type="neverDeactivate"
              data-deactivation-value="" data-form-name="Form 1" data-height="1075"
              data-layout-iframe-id="inline-5TyotlVFKFOl3LaCU3Id" data-form-id="5TyotlVFKFOl3LaCU3Id" title="Form 1"
              @load="setupIframeListeners">
            </iframe>
          </div>
        </div>
        <img class="blueWave" src="@/assets/images/misc/Sky-Blue-Bottom-Wave.png" alt="Blue Wave">
      </div>
    </div>
  </section>
  <section class="skyRadioactive">
    <h2 v-motion="scrollBottom" class="text-white mb-5">Get in Touch</h2>
  </section>
</template>

<script>
import HeaderPagesComponent from "@/components/HeaderPagesComponent.vue";
import IconicLogo from "@/components/icons/IconicLogo.vue";
import "https://link.msgsndr.com/js/form_embed.js";

export default {
  name: 'ContactUs',
  components: {
    HeaderPagesComponent,
    IconicLogo,
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

/* SM */
@media only screen and (min-width: 480px) {
  .heroPages {
    padding: 25vw 0 25vw 0;
  }
}

@media only screen and (min-width: 600px) {
  .heroPages {
    padding: 22vw 0 25vw 0;
  }
}

/* MD */
@media only screen and (min-width: 769px) {
  .heroPages {
    padding: 20vw 0 25vw 0;
  }
}

/* LG */
@media only screen and (min-width: 992px) {
  .heroPages {
    padding: 15vw 0 22vw 0;
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
}

@media only screen and (min-width: 1200px) {
  .secondaryButton {
    padding: 1.75vw 3.5vw;
  }
}

@media only screen and (min-width: 1350px) {
  .secondaryButton {
    padding: 1.5vw 3.2vw;
  }
}

@media only screen and (min-width: 1550px) {
  .secondaryButton {
    padding: 1.2vw 3vw;
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
  .secondaryButton{
    padding: 23px 46px;
  }
}
</style>