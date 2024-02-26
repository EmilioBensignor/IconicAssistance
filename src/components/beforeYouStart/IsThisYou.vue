<template>
  <section class="radioactiveSkyWaves">
    <p class="subtitle">Is this you?</p>
    <h2 class="text-midnight">
      Do You Identify Yourself With The Following Aspects?
    </h2>
    <div class="columnAlignCenter ga-8 mt-7 mb-5">
      <div 
        v-for="(item, index) in aspects" 
        :key="index"
        class="w-75 columnAlignCenter ga-3 aspect elevation-5 rounded-xl pa-3">
        <img
          :src="getImgUrl(item.img)"
          :alt="item.alt"
          class="shadow-3"
          width="30%" />
        <p v-html="item.text"></p>
      </div>
    </div>
    <p class="mt-3">Do you identify yourself with the following aspects?</p>
    <p class="my-1">Then it's time to hire a virtual assistant.</p>
    <router-link class="secondaryButton elevation-5 mt-3" :to="'/contact-us'"
      >Contact Us!</router-link
    >
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
        return new URL(`../../assets/images/beforeYouStart/${imgName}`, import.meta.url).href;
      },
    },
  };
</script>

<style scoped>
  .aspect {
    border: 5px solid #373ae6;
  }
</style>
