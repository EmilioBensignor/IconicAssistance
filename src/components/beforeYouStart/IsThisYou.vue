<template>
  <section class="radioactiveSkyWaves">
    <p v-motion="scrollBottom" class="subtitle">Is this you?</p>
    <h2 v-motion="scrollBottom" class="text-midnight">
      Do You Identify Yourself With The Following Aspects?
    </h2>
    <div class="aspectsWrapper columnAlignCenter ga-8 mt-7 mb-5">
      <div v-for="(item, index) in aspects" :key="index" v-motion="scrollBottom"
        class="w-75 aspect columnAlignCenter ga-3 elevation-5 rounded-xl pa-3">
        <img :src="getImgUrl(item.img)" :alt="item.alt" class="shadow-3" width="30%" />
        <p v-html="item.text"></p>
      </div>
    </div>
    <div class="w-75 identify columnAlignCenter mb-3">
      <p v-motion="scrollBottom" class="mt-3">
        Do you identify yourself with the following aspects?
      </p>
      <p v-motion="scrollBottom" class="my-1">
        Then it's time to hire a virtual assistant.
      </p>
    </div>
    <router-link class="secondaryButton elevation-5 mt-3" :to="'/contact-us'">Contact Us!</router-link>
  </section>
</template>

<script>
export default {
  data() {
    return {
      aspects: [
        {
          img: "Time-Icon.png",
          alt: "Time Icon",
          text: "Seeking ways to enhance efficiency without exceeding a limited <strong class='text-radioactive'>budget</strong>",
        },
        {
          img: "Tired-Icon.png",
          alt: "Tired Icon",
          text: "Constantly <strong class='text-radioactive'>fatigued</strong> due to the overwhelming working demands",
        },
        {
          img: "Budget-Icon.png",
          alt: "Budget Icon",
          text: "Seeking ways to enhance efficiency without exceeding a limited  <strong class='text-radioactive'>budget</strong>",
        },
        {
          img: "Work-Life-Icon.png",
          alt: "Work Life Icon",
          text: "Struggling to sustain a harmonious <strong class='text-radioactive'>balance</strong> between work and personal life",
        },
        {
          img: "Productivity-Icon.png",
          alt: "Productivity Icon",
          text: "Searching for methods to  <strong class='text-radioactive'>expand</strong> your business without the need for additional effort",
        },
      ],
    };
  },
  methods: {
    getImgUrl(imgName) {
      return new URL(
        `../../assets/images/beforeYouStart/${imgName}`,
        import.meta.url
      ).href;
    },
  },
};
</script>

<script setup>
import { scrollBottom } from "@/motions.js";
</script>

<style scoped>
.aspect {
  border: 5px solid #373ae6;
}

/* SM */
@media only screen and (min-width: 480px) {
  .aspect {
    width: 50% !important;
  }
}

/* Desktop */
@media only screen and (min-width: 1080px) {
  .aspectsWrapper {
    margin: 4vw 0 !important;
  }

  .aspect {
    width: 75% !important;
    display: flex;
    flex-direction: row;
    border-radius: 50px !important;
    padding: 0 !important;
  }

  .aspect img {
    width: 10%;
    margin-left: -1px;
  }

  .aspect p {
    text-align: start;
    font-size: 1.2rem;
    margin-left: 2vw;
  }

  .identify p {
    font-weight: 500;
    font-size: 1.15rem;
  }
}

@media only screen and (min-width: 1280px) {
  .aspect img {
    margin-left: -4px;
  }
}

/* XL */
@media only screen and (min-width: 1440px) {
  .aspect {
    width: 60% !important;
  }
}

@media only screen and (min-width: 1600px) {
  .aspect {
    border-radius: 55px !important;
  }

  .identify p {
    font-size: 1.2rem
  }
}

@media only screen and (min-width: 1750px) {
  .aspect {
    border-radius: 60px !important;
  }

  .identify p {
    font-size: 1.3rem;
  }
}

@media only screen and (min-width: 1920px) {
  .aspectsWrapper {
    margin: 70px 0 !important;
  }
}
</style>
