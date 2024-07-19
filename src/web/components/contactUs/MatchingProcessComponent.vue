<template>
  <section class="content">
    <div class="w-100 columnAlignCenter py-10">
      <h2 v-motion="scrollBottom" class="w-100 text-midnight mb-1">
        Precision Matching Process <span>DATA DRIVEN HR</span>
      </h2>
      <div class="w-75 matchingContainer columnAlignCenter ga-10 mt-10">
        <div
          v-for="(item, index) in matchingProcess"
          :key="index"
          class="matchingStep columnAlignCenter"
        >
          <img class="matchingImg" width="50%":src="getImgUrl(item.img)" :alt="item.alt" />
          <p class="columnAlignCenter mt-5" v-html="item.title"></p>
          <ul class="matchingList column ga-3 mt-5">
            <li class="rowStart ga-2 text-start">
              <v-icon color="radioactive" icon="mdi-check-bold"></v-icon>
              <p>{{ item.item1 }}</p>
            </li>
            <li class="rowStart ga-2 text-start">
              <v-icon color="radioactive" icon="mdi-check-bold"></v-icon>
              <p>{{ item.item2 }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- <v-expansion-panels v-motion="scrollBottom" class="faqWrapper">
      <v-expansion-panel class="elevation-4 rounded-lg">
        <v-expansion-panel-title color="radioactive">
          1. FILTERING AND SCREENING
        </v-expansion-panel-title>
        <v-expansion-panel-text></v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels> -->
  </section>
</template>

<script>
export default {
  data() {
    return {
      matchingProcess: [
        {
          img: "contactUs/Filtering-Screening-Matching-Process.png",
          alt: "Filtering Screening Matching Process",
          title:
            "<p class='matchingTitle text-center font-weight-bold text-radioactive'>Filtering <span class='text-blueSky'>and</span> Screening</p>",
          item1: "Filter candidates by experience, skills and education",
          item2: "Conduct initial screening aligning with client's needs",
        },
        {
          img: "contactUs/Values-Background-Matching-Process.png",
          alt: "Values Background Matching Process",
          title:
            "<p class='matchingTitle text-center font-weight-bold text-radioactive'>Values <span class='text-blueSky'>and</span> Background</p>",
          item1:
            "Ensure candidates values and work ethics are aligned with ICONIC's",
          item2:
            "Conduct thorough background check such as education and criminal records",
        },
        {
          img: "contactUs/English-Proficiency-Assessment-Matching-Process.png",
          alt: "English Proficiency Assessment Matching Process",
          title:
            "<p class='matchingTitle text-center font-weight-bold text-radioactive'>English Proficiency <span class='text-blueSky'>Assessment</span></p>",
          item1:
            "Assess candidate's ability to communicate efficiently and truthfully",
          item2: "Conduct English proficiency tests",
        },
        {
          img: "contactUs/Psychometric-Job-Compatibility-Matching-Process.png",
          alt: "Psychometric Job Compatibility Matching Process",
          title:
            "<p class='matchingTitle text-center font-weight-bold text-radioactive'>Proficiency <span class='text-blueSky'>and</span> Job Compatibility <span class='text-blueSky'>Assessment</span></p>",
          item1: "Perform behavioral assessments",
          item2: "Test candidate's compatibility with job position",
        },
      ],
    };
  },
  methods: {
    getImgUrl(imgName) {
      return new URL(`../../assets/images/${imgName}`, import.meta.url).href;
    },
  },
};
</script>

<script setup>
import { scrollBottom } from "@/motions.js";
</script>

<style>
.matchingContainer .matchingTitle {
  font-size: 1.2rem;
}

@media only screen and (min-width: 992px) {
  .matchingContainer .matchingTitle {
    width: 100%;
    font-size: 1rem;
  }
}

@media only screen and (min-width: 1080px) {
  .matchingContainer .matchingTitle {
    font-size: 1.1rem;
  }
}

@media only screen and (min-width: 1750px) {
  .matchingContainer .matchingTitle {
    font-size: 1.2rem;
  }
}
</style>

<style scoped>

@media only screen and (min-width: 480px) {
  .matchingImg {
    width: 40%;
  }
}

@media only screen and (min-width: 600px) {
  .matchingContainer  {
    width: 60% !important;
  }
}

@media only screen and (min-width: 770px) {
  .matchingContainer  {
    width: 50% !important;
  }
}

@media only screen and (min-width: 992px) {
  .matchingContainer  {
    width: 100% !important;
    flex-direction: row;
    align-items: flex-start;
  }

  .matchingStep {
    width: 23%;
  }
}

@media only screen and (min-width: 1080px) {
  .matchingContainer  {
    width: 95% !important;
    flex-direction: row;
    align-items: flex-start;
  }
  
  .matchingBody {
    flex-direction: row-reverse;
    justify-content: space-between;
    gap: 2rem;
  }

  .matchingImg {
    width: 50% !important;
  }
}

@media only screen and (min-width: 1280px) {
  .matchingContainer {
    width: 90% !important;
  }
}

@media only screen and (min-width: 1600px) {
  .matchingContainer {
    width: 85% !important;
    justify-content: space-between;
    gap: 2rem !important;
  }
}
</style>
