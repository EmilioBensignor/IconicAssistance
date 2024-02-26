<template>
  <section class="heroPagesWave columnAlignCenter">
    <div class="heroPages flexCenter">
      <h1 class="text-midnight">
        {{ assistant.name }}
      </h1>
    </div>
  </section>
  <section class="skyRadioactive">
    <div>
      <img
        :src="getImgUrl(assistant.img)"
        :alt="assistant.at"
        class="rounded-xl"
        width="75%" />
    </div>
    <p class="text-white my-5">
      Experience precision in recruitment and payroll efficiency. Unlock skills
      in HR, administration, marketing, customer support, and more. Our platform
      optimizes business processes, from hiring to payroll. Simplify operations
      and enhance productivity with advanced technology. Enter a new era of
      efficiency with innovative tools designed for success. Elevate
      capabilities and stay ahead in a competitive landscape. Transform work
      with integrated solutions, ensuring seamless operations and heightened
      performance.
    </p>
    <p class="text-white pMedium font-weight-bold my-5">
      Here's a detailed description of the Virtual Assistant role:
    </p>
    <div class="columnAlignCenter ga-7 mb-5">
      <div
        v-for="(task, index) in assistant.tasks"
        :key="index"
        class="w-75 columnAlignCenter ga-3 bg-white rounded-xl py-3 elevation-5">
        <p>{{ task.title }}</p>
        <p>{{ task.text }}</p>
      </div>
    </div>
    <p class="w-75 text-white pMedium font-weight-bold mt-10">
      Other types of VAs that might interest you:
    </p>
    <div class="w-75 columnAlignCenter ga-7 mt-7">
      <router-link
        v-for="(item, index) in vaTypes"
        :to="`/virtual-assistant/${item.id}`"
        :key="index"
        class="w-100 typesCards d-flex justify-space-between align-center bg-white rounded-xl pa-3 elevation-5">
        <div class="w-25">
          <v-img
            :src="getImgUrl(item.blueIcon)"
            :alt="item.blueIconAlt"
            width="85%">
          </v-img>
        </div>
        <p class="text-midnight font-weight-bold">{{ item.name }}</p>
        <div class="circleNumber rounded-circle elevation-2">
          <p class="text-radioactive font-weight-bold">></p>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script>
  import { vaTypes } from "@/cms/typesva.service.js";

  export default {
    data() {
      return {
        vaTypes: vaTypes,
        assistant: null,
        assistantId: null,
      };
    },
    created() {
      this.fetchAssistantDetails();
    },
    watch: {
      '$route'(){
        this.fetchAssistantDetails();
      }
    },
    methods: {
      fetchAssistantDetails() {
        this.assistantId = this.$route.params.id;
        this.assistant = vaTypes.find(
          (va) => va.id === parseInt(this.assistantId)
        );
      },
      getImgUrl(imgName) {
        return new URL(`../assets/images/typesOfVa/${imgName}`, import.meta.url)
          .href;
      },
    },
  };
</script>

<style scoped>
  .typesCards {
    text-decoration: none;
  }
  .circleNumber {
    width: 20%;
    height: 10%;
  }
</style>
