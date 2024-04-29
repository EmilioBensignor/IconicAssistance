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
              <span class="font-weight-bold">Successful leaders</span> understand the power of having reliable Executive
              Assistants. Through ICONIC Assistants, you can access <span class="font-weight-bold">personalized
                executive support</span> to elevate your daily achievements to new heights.
            </p>
          </div>
          <div ref="formContainer" id="form-container" class="form mt-3"></div>
        </div>
        <img class="blueWave" src="@/assets/images/misc/Radioactive-Bottom-Wave.png" alt="Blue Wave">
      </div>
    </div>
  </section>
</template>

<script setup>
import { scrollBottom } from "@/motions.js";
</script>

<script>
export default {
  mounted() {
    const script = document.createElement('script');
    script.setAttribute('charset', 'utf-8');
    script.setAttribute('type', 'text/javascript');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.async = true;

    this.$refs.formContainer.appendChild(script);

    script.onload = () => {
      window.hbspt.forms.create({
        region: "na1",
        portalId: "46001660",
        formId: "d164c3b6-b2b5-4fc9-acdf-b0920ec87420",
        target: '#form-container'
      });
    };
  }
};
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

.hs-form-d164c3b6-b2b5-4fc9-acdf-b0920ec87420_a189bb6c-ae08-432a-953a-0c7c4f9446b1 .hs-form{
  background-color: white !important;
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

  .pMedium {
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