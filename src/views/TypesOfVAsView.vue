<template>
  <section class="columnAlignCenter">
    <div class="heroPages flexCenter">
      <h1 class="text-midnight">Types of Virtual Assistants</h1>
    </div>
  </section>
  <section class="skyRadioactive">
    <p class="sbutitle text-white">Our Service</p>
    <h2 class="text-white">Here's What Your Virtual Assistants Can Help You With</h2>
    <div class="w-75 column ga-5">
      <div
        class="d-flex align-center"
        v-for="(item, index) in services"
        :key="index">
        <img
          width="25%"
          :src="getImgUrl(item.whiteIcon)"
          :alt="item.whiteIconAlt" />
        <p class="text-white text-start ml-3 w-100">
          {{ item.name }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
  import { services } from "@/cms/typesva.service.js";

  export default {
    data() {
      return {
        services: services,
      };
    },
    methods: {
      getImgUrl(imgName) {
        return new URL(`/src/assets/images/typesOfVa/${imgName}`, import.meta.url).href
      },
    },
  };
</script>
