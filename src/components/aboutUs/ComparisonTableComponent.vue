<template>
  <section class="skyBlueWaves">
    <p v-motion="scrollBottom" class="subtitle text-radioactive">Comparison Table</p>
    <h2 v-motion="scrollBottom" class="text-midnight">
      <span class="text-radioactive">ICONIC</span> VAs Comparison Chart
    </h2>
    <p v-motion="scrollBottom" class="w-75 text-midnight mt-2 mb-5">
      As an entrepreneur or business, finding top talent without overspending
      can be challenging. Our mission is to connect you with cost-effective
      remote talent who save you time and money.
    </p>
    <div class="w-100 columnAlignCenter">
      <div
        v-for="item in comparisonChart"
        :key="item.number"
        v-motion="scrollBottom"
        class="cardComparison flexCenter rounded-xl elevation-6 my-5">
        <div
          class="w-100 cardComparisonHeader columnAlignCenter rounded-t-xl pa-5">
          <div class="circleNumber bg-blueSky elevation-3">
            <p class="text-white">{{ item.number }}</p>
          </div>
          <p class="cardComparisonTitle text-white mt-3">{{ item.title }}</p>
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
      <p v-motion="scrollBottom" class="cancelText mt-3 mb-5">
        * After a thirty (30) days onboarding period, the customer may choose to
        change their Virtual Assistant or terminate the service by providing a
        fifteen (15) days prior written notice to their assigned Customer
        Success Agent.
      </p>
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
  import { scrollBottom } from "@/motions.js"
</script>

<style scoped>
  .cardComparison {
    width: 80%;
  }
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
  .iconicLogo{
    width: 85%;
  }
  .cancelText {
    font-size: 0.8rem;
    color: #656875;
  }
</style>
