<template>
  <section class="skyBlueWaves">
    <div class="content">
      <div class="columnAlignCenter">
        <p v-motion="scrollBottom" class="subtitle text-radioactive">
          Comparison Table
        </p>
        <h2 v-motion="scrollBottom" class="text-midnight">
          <span class="text-radioactive">ICONIC</span> VAs Comparison Chart
        </h2>
        <p v-motion="scrollBottom" class="w-75 text-midnight mt-2 mb-5">
          As an entrepreneur or business, finding top talent without
          overspending can be challenging. Our mission is to connect you with
          cost-effective remote talent who save you time and money.
        </p>
        <div class="w-100 comparisonChartMobile columnAlignCenter ga-5">
          <div
            v-for="item in comparisonChart"
            :key="item.number"
            v-motion="scrollBottom"
            class="cardComparisonMobile w-75 flexCenter rounded-xl elevation-6 my-5">
            <div
              class="w-100 cardComparisonHeader columnAlignCenter rounded-t-xl pa-5">
              <div class="circleNumber bg-blueSky elevation-3">
                <p class="text-white">{{ item.number }}</p>
              </div>
              <p class="cardComparisonTitle text-white mt-3">
                {{ item.title }}
              </p>
            </div>
            <div class="cardComparisonRow bg-blueSky">
              <div class="w-50">
                <IconicLogo class="iconicLogo text-white shadow-25" />
              </div>
              <div class="w-50 columnAlignCenter">
                <p class="text-white font-weight-bold text-center">
                  {{ item.iconic }}
                </p>
              </div>
            </div>
            <div class="cardComparisonRow text-midnight bg-grey-lighten-3">
              <div class="w-50 columnAlignCenter">
                <p>In-House Staff / Assistant US-Based</p>
              </div>
              <div class="w-50 columnAlignCenter">
                <p>{{ item.inHouseUS }}</p>
              </div>
            </div>
            <div class="cardComparisonRow text-midnight bg-grey-lighten-3">
              <div class="w-50 columnAlignCenter">
                <p>Virtual Assistant Us-Based</p>
              </div>
              <div class="w-50 columnAlignCenter">
                <p>{{ item.vaUS }}</p>
              </div>
            </div>
            <div
              class="cardComparisonRow rounded-b-xl text-midnight bg-grey-lighten-3">
              <div class="w-50 columnAlignCenter">
                <p>Virtual Assistant Philippines</p>
              </div>
              <div class="w-50 columnAlignCenter">
                <p class="w-50">{{ item.vaPhilippines }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="comparisonChartDesktop column mb-7">
          <div class="comparison d-flex align-center bg-white mb-5">
            <div class="chartTitleBlank"></div>
            <div class="chartTitle py-2">
              <IconicLogo class="chartLogo text-radioactive" />
            </div>
            <div class="chartTitle py-2">
              <p>In-House Staff/Assistant</p>
              <p>US-based</p>
            </div>
            <div class="chartTitle py-2">
              <p>Virtual Assistant</p>
              <p>US-based</p>
            </div>
            <div class="chartTitle py-2">
              <p>Virtual Assistant</p>
              <p>Philippines</p>
            </div>
          </div>
          <div class="columnAlignCenter ga-6">
            <div
              v-for="(item, index) in comparisonChart"
              :key="index"
              v-motion="scrollBottom"
              class="w-100 d-flex">
              <div class="category d-flex align-center rounded-bs-xl ga-3 pa-3">
                <div
                  class="categoryNumber columnAlignCenter justify-center bg-blueSky rounded-circle elevation-2">
                  <p class="text-white font-weight-bold">{{ item.number }}</p>
                </div>
                <p class="text-white text-start categoryTitle">
                  {{ item.title }}
                </p>
              </div>
              <div class="itemIconic itemChart px-3 py-5 bg-lightBlueSky">
                <p>{{ item.iconic }}</p>
              </div>
              <div class="itemChart px-3 py-5 bg-chartGray">
                <p>{{ item.inHouseUS }}</p>
              </div>
              <div class="itemChart px-3 py-5 bg-chartGray">
                <p>{{ item.vaUS }}</p>
              </div>
              <div class="itemChart px-3 py-5 bg-chartGray rounded-te-xl">
                <p>{{ item.vaPhilippines }}</p>
              </div>
            </div>
          </div>
        </div>
        <p v-motion="scrollBottom" class="w-75 cancelText mt-3 mb-5">
          * After a thirty (30) days onboarding period, the customer may choose
          to change their Virtual Assistant or terminate the service by
          providing a fifteen (15) days prior written notice to their assigned
          Customer Success Agent.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
  import IconicLogo from "@/components/icons/IconicLogo.vue";
  export default {
    components: {
      IconicLogo,
    },
    data() {
      return {
        comparisonChart: [
          {
            number: 1,
            title: "Time to hire",
            iconic: "7-15 Days",
            inHouseUS: "1-4 months",
            vaUS: "2-3 weeks",
            vaPhilippines: "1-2 months",
          },
          {
            number: 2,
            title: "Recruitment fee",
            iconic: "$0",
            inHouseUS: "$500-5k",
            vaUS: "$0",
            vaPhilippines: "$0",
          },
          {
            number: 3,
            title: "Payroll, taxes & benefits",
            iconic: "NO",
            inHouseUS: "YES",
            vaUS: "May vary",
            vaPhilippines: "NO",
          },
          {
            number: 4,
            title: "Pre-vetted talent",
            iconic: "YES",
            inHouseUS: "NO",
            vaUS: "May vary but usually No",
            vaPhilippines: "May vary",
          },
          {
            number: 5,
            title: "Avg lowest price/hr",
            iconic: "$9.5/hr",
            inHouseUS: "$25/hr",
            vaUS: "$20/hr",
            vaPhilippines: "$3-5/hr",
          },
          {
            number: 6,
            title: "Office space",
            iconic: "NO",
            inHouseUS: "YES",
            vaUS: "NO",
            vaPhilippines: "NO",
          },
          {
            number: 7,
            title: "Quality guarantee",
            iconic: "YES",
            inHouseUS: "NO",
            vaUS: "May vary",
            vaPhilippines: "YES",
          },
          {
            number: 8,
            title: "Flexible schedule",
            iconic: "YES",
            inHouseUS: "NO",
            vaUS: "May vary",
            vaPhilippines: "YES",
          },
          {
            number: 9,
            title: "Certified professionals",
            iconic: "YES",
            inHouseUS: "YES",
            vaUS: "YES",
            vaPhilippines: "NO",
          },
          {
            number: 10,
            title: "Turnover",
            iconic: "Very low",
            inHouseUS: "Low",
            vaUS: "Varies",
            vaPhilippines: "Med-high",
          },
          {
            number: 11,
            title: "Available in your time zone",
            iconic: "YES",
            inHouseUS: "YES",
            vaUS: "YES",
            vaPhilippines: "NO",
          },
          {
            number: 12,
            title: "Success rate",
            iconic: "Very high",
            inHouseUS: "High",
            vaUS: "Medium",
            vaPhilippines: "Low medium",
          },
          {
            number: 13,
            title: "Cancel any time",
            iconic: "YES *",
            inHouseUS: "NO",
            vaUS: "May vary",
            vaPhilippines: "YES",
          },
        ],
      };
    },
  };
</script>

<script setup>
  import { scrollBottom } from "@/motions.js";
</script>

<style scoped>
  .cardComparisonHeader {
    background: rgb(55, 58, 230);
    background: linear-gradient(
      180deg,
      rgba(55, 58, 230, 1),
      rgba(12, 184, 241, 1) 100%
    );
  }

  .cardComparisonTitle {
    font-size: 1.2rem;
    font-weight: 550;
  }

  .cardComparisonRow {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e0e0e0;
    padding: 3vw 1vw;
  }

  .iconicLogo {
    width: 90%;
  }

  .comparisonChartDesktop {
    display: none;
  }

  .cancelText {
    font-size: 0.8rem;
    color: #656875;
  }

  /* SM */
  @media only screen and (min-width: 480px) {
    .cardComparisonTitle {
      font-size: 1.3rem;
    }

    .cardComparisonRow {
      padding: 2vw 1vw;
    }

    .cancelText {
      font-size: 0.9rem;
    }
  }

  /* MD */
  @media only screen and (min-width: 769px) {
    .cardComparisonMobile {
      width: 60% !important;
    }

    .iconicLogo {
      width: 75%;
    }

    .cardComparisonTitle {
      font-size: 1.4rem;
    }

    .cardComparisonRow {
      padding: 1.5vw 1vw;
    }
  }

  /* LG */
  @media only screen and (min-width: 992px) {
    .cardComparisonMobile {
      width: 55% !important;
    }
  }

  /* Desktop */
  @media only screen and (min-width: 1080px) {
    .comparisonChartMobile {
      display: none;
    }

    .comparisonChartDesktop {
      width: 80%;
      display: flex;
      margin-top: 3vw;
    }

    .comparison {
      position: sticky;
      top: 6.5vw;
      z-index: 2;
    }

    .chartTitleBlank {
      width: 33%;
    }

    .chartTitle {
      width: 20%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .chartTitle p {
      font-size: 1rem;
      font-weight: 500;
    }

    .category {
      width: 30%;
      background-image: linear-gradient(
        to right,
        #373ae6,
        #0066f9,
        #0085fe,
        #00a0fa,
        #0cb8f1
      );
    }

    .category p {
      width: 100%;
    }

    .categoryNumber {
      width: 5vw;
      height: 4vw;
    }

    .categoryTitle {
      font-weight: 600;
    }

    .chartLogo {
      height: 5vw !important;
    }

    .category,
    .itemChart {
      height: 7vw;
    }

    .itemChart {
      width: 17%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .itemIconic p {
      font-weight: 600 !important;
    }

    .itemChart p {
      font-size: 1rem;
      font-weight: 500;
    }
  }

  @media only screen and (min-width: 1200px) {
    .category,
    .itemChart {
      height: 6vw;
    }
  }

  @media only screen and (min-width: 1300px) {
    .comparison {
      top: 6vw;
    }

    .chartLogo {
      height: 4.8vw !important;
    }

    .categoryNumber {
      width: 4vw;
      height: 3.3vw;
    }

    .categoryNumber p {
      font-size: 1.3rem;
    }

    .categoryTitle {
      font-size: 1.1rem;
    }
  }

  /* XL */
  @media only screen and (min-width: 1440px) {
    .comparisonChartDesktop {
      margin-top: 2vw;
    }

    .comparison {
      top: 5.8vw;
    }

    .chartLogo {
      height: 4.5vw !important;
    }

    .category,
    .itemChart {
      height: 5vw;
    }
  }

  @media only screen and (min-width: 1600px) {
    .comparison {
      top: 5.4vw;
    }

    .chartTitleBlank {
      width: 35%;
    }

    .chartLogo {
      height: 4.2vw !important;
    }

    .category,
    .itemChart {
      height: 4.5vw;
    }

    .categoryNumber {
      width: 3vw;
      height: 2.6vw;
    }
  }

  @media only screen and (min-width: 1750px) {
    .comparison {
      top: 5vw;
    }

    .chartLogo {
      height: 3.9vw !important;
    }

    .category,
    .itemChart {
      height: 4vw;
    }
  }

  @media only screen and (min-width: 1920px) {
    .comparisonChartDesktop {
      width: 75%;
    }

    .comparison {
      top: 85px;
    }

    .category,
    .itemChart {
      height: 77px;
    }

    .chartLogo {
      height: 75px !important;
    }

    .categoryNumber {
      width: 55px;
      height: 50px;
    }

    .cancelText {
      width: 50% !important;
    }
  }
</style>
