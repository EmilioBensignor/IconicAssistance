<template>
  <section>
    <p class="subtitle text-radioactive">Comparison Table</p>
    <h2 class="text-midnight">
      <span class="text-radioactive">ICONIC</span> VAs Comparison Chart
    </h2>
    <p class="text-midnight mt-2 mb-5">
      As an entrepreneur or business, finding top talent without overspending
      can be challenging. Our mission is to connect you with cost-effective
      remote talent who save you time and money.
    </p>
    <div class="w-100 columnAlignCenter">
      <div
        v-for="item in comparisonChart"
        :key="item.number"
        class="cardComparison columnAlignCenter text-center rounded-xl elevation-6 my-5">
        <div
          class="w-100 cardComparisonHeader columnAlignCenter rounded-t-xl pa-5">
          <div class="circleNumber bg-blueSky">
            <p class="text-white">{{ item.number }}</p>
          </div>
          <p class="cardComparisonTitle text-white mt-3">{{ item.title }}</p>
        </div>
        <div class="cardComparisonRow bg-blueSky">
          <div class="w-50">
            <IconicLogo class="text-white" />
          </div>
          <div class="w-50 columnAlignCenter">
            <p class="text-white text-center">{{ item.iconic }}</p>
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
      <p class="cancelText mt-3 mb-5">
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
  }
</script>

<style scoped>
  .cardComparison {
    width: 85%;
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
  .cancelText {
    font-size: 0.8rem;
    color: #656875;
  }
</style>
