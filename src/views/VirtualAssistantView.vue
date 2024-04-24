<template>
  <HeaderPagesComponent />
  <section class="heroPagesWave columnAlignCenter">
    <div class="heroPages flexCenter">
      <h1 v-motion="scrollBottom" class="text-midnight">
        {{ assistant.name }}
      </h1>
    </div>
  </section>
  <section class="skyRadioactive">
    <div class="content">
      <div class="otherVirtualAssistant columnAlignCenter">
        <div class="virtualAssistant columnAlignCenter">
          <div class="w-75">
            <img :src="getImgUrl(assistant.img)" :alt="assistant.at" class="rounded-xl elevation-5"
              v-motion="scrollBottom" width="75%" eager />
          </div>
          <p v-motion="scrollBottom" class="vaGeneral w-75 text-white my-5">
            Experience precision in recruitment and payroll efficiency. Unlock
            skills in HR, administration, marketing, customer support, and more. Our
            platform optimizes business processes, from hiring to payroll. Simplify
            operations and enhance productivity with advanced technology. Enter a
            new era of efficiency with innovative tools designed for success.
            Elevate capabilities and stay ahead in a competitive landscape.
            Transform work with integrated solutions, ensuring seamless operations
            and heightened performance.
          </p>
          <p v-motion="scrollBottom" class="w-75 text-white pMedium font-weight-bold my-5">
            Here's a detailed description of the Virtual Assistant role:
          </p>
          <div class="tasksWrapper columnAlignCenter ga-8 mb-5">
            <div v-for="(task, index) in assistant.tasks" :key="index" v-motion="scrollBottom"
              class="w-75 columnAlignCenter ga-3 bg-white rounded-xl py-3 elevation-5">
              <p class="font-weight-bold">{{ task.title }}</p>
              <p>{{ task.text }}</p>
            </div>
          </div>
        </div>
        <div class="otherTypes w-75 columnAlignCenter">
          <p v-motion="scrollBottom" class="w-75 text-white pMedium font-weight-bold mt-10">
            Other types of VAs that might interest you:
          </p>
          <div class="w-75 vasWrapper columnAlignCenter ga-7 mt-7">
            <router-link v-for="(item, index) in vaTypes" :to="`/virtual-assistant/${item.id}`" :key="index"
              v-motion="scrollBottom"
              class="w-100 typesCards d-flex justify-space-between align-center bg-white rounded-xl pa-3 elevation-5">
              <div class="w-25 imgWrapper">
                <v-img :src="getImgUrl(item.blueIcon)" :alt="item.blueIconAlt" class="shadow-15" width="90%" eager>
                </v-img>
              </div>
              <p class="w-75 vaName text-midnight font-weight-bold">
                {{ item.name }}
              </p>
              <div class="circleNumber rounded-circle elevation-3 ml-1">
                <p class="font-weight-bold">></p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <FooterComponent />
</template>

<script>
import { vaTypes } from "@/cms/typesva.service.js";
import HeaderPagesComponent from "@/components/HeaderPagesComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: 'VirtualAssistant',
  components: {
    HeaderPagesComponent,
    FooterComponent,
  },
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
    $route() {
      this.fetchAssistantDetails();
    },
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

<script setup>
import { scrollBottom } from "@/motions.js";
</script>

<style scoped>
.typesCards {
  text-decoration: none;
}

.circleNumber {
  width: 12vw;
  height: 10vw;
}

.circleNumber:hover {
  background-color: #373ae6;
  color: white;
}

.circleNumber p {
  color: #373ae6;
}

.circleNumber p:hover {
  color: white;
}

/* SM */
@media only screen and (min-width: 480px) {
  .typesCards {
    width: 75% !important;
  }

  .vaName {
    font-size: 1.1rem;
  }

  .circleNumber {
    width: 10vw;
    height: 8vw;
  }
}

/* MD */
@media only screen and (min-width: 769px) {
  .typesCards {
    width: 60% !important;
  }

  .vaName {
    font-size: 1.2rem;
  }

  .circleNumber {
    width: 8vw;
    height: 6vw;
  }
}

/* LG */
@media only screen and (min-width: 992px) {
  .vaGeneral {
    width: 55% !important;
  }

  .pMedium {
    margin-bottom: 4vw !important;
  }

  .vasWrapper {
    margin-top: 0 !important;
    margin-bottom: 5vw;
  }

  .typesCards {
    width: 70% !important;
  }
}

/* Desktop */
@media only screen and (min-width: 1080px) {
  .otherVirtualAssistant {
    flex-direction: row-reverse;
    justify-content: space-around;
    align-items: flex-start;
    padding: 0 5vw 10vw 5vw;
  }

  .otherTypes {
    width: 35% !important;
  }

  .otherTypes p,
  .vasWrapper {
    width: 100% !important;
  }

  .typesCards {
    width: 90% !important;
  }

  .typesCards .v-img {
    width: 100% !important;
  }

  .vaName {
    font-size: 1.1rem;
  }

  .circleNumber {
    width: 6vw;
    height: 4vw;
  }

  .virtualAssistant {
    width: 55%;
  }

  .virtualAssistant div {
    width: 100% !important;
  }

  .virtualAssistant div img {
    width: 90%;
    border-radius: 16px !important;
  }

  .vaGeneral {
    width: 85% !important;
  }

  .pMedium {
    width: 90% !important;
    font-size: 1.3rem;
    margin-top: 0 !important;
  }

  .virtualAssistant .tasksWrapper {
    width: 90% !important;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .virtualAssistant .tasksWrapper div {
    width: 40% !important;
    height: 22vh;
    justify-content: center;
  }

  .virtualAssistant .tasksWrapper div p:nth-child(2) {
    font-size: 1rem
  }
}

/* XL */
@media only screen and (min-width: 1440px) {
  .virtualAssistant div img {
    width: 75%;
  }

  .typesCards {
    width: 80% !important;
  }

  .virtualAssistant .tasksWrapper div {
    height: 18vh;
  }
}

@media only screen and (min-width: 1600px) {
  .virtualAssistant div img {
    width: 70%;
  }

  .typesCards {
    width: 75% !important;
  }

  .circleNumber {
    width: 5vw;
    height: 3.5vw;
  }

  .virtualAssistant .tasksWrapper div {
    height: 17vh;
  }
}

@media only screen and (min-width: 1750px) {
  .virtualAssistant div img {
    width: 65%;
  }

  .typesCards {
    width: 80% !important;
  }

  .circleNumber {
    width: 4.5vw;
    height: 3vw;
  }

  .virtualAssistant .tasksWrapper div {
    height: 17vh;
  }
}

@media only screen and (min-width: 1920px) {
  .otherVirtualAssistant {
    padding: 0 100px 250px 100px;
  }

  .otherTypes {
    width: 30% !important;
  }

  .typesCards {
    width: 90% !important;
  }

  .typesCards .v-img{
    width: 90% !important;
  }

  .virtualAssistant {
    width: 65%;
  }

  .virtualAssistant div img {
    width: 50%;
  }

  .vaGeneral {
    width: 75% !important;
    margin-top: 75px !important;
    margin-bottom: 50px !important;
  }

  .pMedium {
    margin-bottom: 75px !important;
  }

  .circleNumber {
    width: 75px;
    height: 51px;
  }
}
</style>
