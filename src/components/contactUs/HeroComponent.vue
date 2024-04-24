<template>
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
</template>

<script setup>
import { scrollBottom } from "@/motions.js";
</script>

<style scoped>
h1 {
  width: 100%;
  line-height: 1em;
}

.heroContactUs {
  position: relative;
  background: rgb(255, 255, 255);
  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 10%, rgba(155, 220, 248, 1) 100%);
}

.heroPages {
  width: 95%;
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
  .desktop {
    display: block;
  }
  
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

  .pMedium{
    font-size: 1.3rem;
  }

  .form {
    width: 50%;
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
}

@media only screen and (min-width: 1600px) {
  .heroPages {
    padding: 10vw 0 22vw 0;
  }

  .form {
    width: 60%;
  }
}

@media only screen and (min-width: 1920px) {
  .heroPages {
    padding: 10% 0 20% 0;
  }

  .form {
    width: 55%;
  }
}
</style>