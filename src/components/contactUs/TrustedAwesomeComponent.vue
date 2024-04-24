<template>
  <section class="skyRadioactive pb-15">
    <!-- <h2 class="text-white">Trusted by Awesome Clients</h2>  -->
    <!-- <div class="w-25" v-for="(item, index) in slides" :key="index">
          <img width="10px" src="@/assets/images/contactUs/Stars-Slide.png" alt="Blue Stars" />
          <p v-html="item"></p>
        </div> -->
    <FindingSimpleComponent />
    <h3 v-motion="scrollBottom" class="text-white mt-10 mb-5">Find your next BEST HIRE with ICONIC</h3>
    <a href="#hero" class="primaryButton elevation-3 mb-3 px-10 py-5">Get Started</a>
  </section>
</template>

<script>
import FindingSimpleComponent from "@/components/contactUs/FindingSimpleComponent.vue";

export default {
  name: 'ContactUs',
  components: {
    FindingSimpleComponent,
  },
  data() {
    return {
      slides: [
        "My executive assistant from <span class='text-radioactive'>ICONIC has been a game-changer for my productivity.</span> Always efficient and organized, they handle tasks seamlessly, allowing me to focus on what matters most.",
        "I can't imagine managing my schedule without my executive assistant from ICONIC. <span class='text-radioactive'>They're responsive, reliable, and go above and beyond</span> to ensure everything runs smoothly.",
        "Thanks to my executive assistant from ICONIC, I've been able to <span class='text-radioactive'>delegate tasks with confidence. Their attention to detail and proactive approach make them an invaluable asset</span> to my team.",
        "Working with my executive assistant from ICONIC has been a breeze. They're <span class='text-radioactive'>incredibly professional, and their ability to anticipate my needs has saved me</span> countless hours of work.",
        "I've been thoroughly impressed with the level of support provided by my executive assistant from ICONIC. <span class='text-radioactive'>They handle everything with precision and professionalism</span>, allowing me to focus on growing my business.",
        "My executive assistant from ICONIC has been a lifesaver. <span class='text-radioactive'>They're proactive, resourceful, and always one step ahead</span>. I couldn't imagine navigating my day-to-day without their support.",
        "I highly recommend ICONIC's executive assistant services. <span class='text-radioactive'>My assistant is reliable, efficient, and has helped me stay organized</span> and on top of my workload.",
        "Having an <span class='text-radioactive'>executive assistant from ICONIC has been a game-changer for my business</span>. They handle all the administrative tasks with ease, allowing me to focus on strategic initiatives.",
        "My experience with <span class='text-radioactive'>ICONIC's executive assistant service has been nothing short of excellent</span>. My assistant is responsive, attentive, and consistently delivers results.",
        "I can't thank my executive assistant from ICONIC enough for their support. <span class='text-radioactive'>They've truly become an indispensable part of my team</span>, and I'm grateful for their dedication and professionalism.",
      ],
    }
  },
};
</script>

<script setup>
import { scrollBottom } from "@/motions.js";
</script>