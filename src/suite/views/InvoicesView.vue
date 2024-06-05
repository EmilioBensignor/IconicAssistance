<template>
  <HeaderSuiteComponent />
  <div class="heroSuite columnAlignCenter">
    <h1 class="text-midnight ml-4">Invoices</h1>
  </div>
  <div class="suiteComponents mt-5">
    <v-skeleton-loader
      class="w-75 px-3"
      type="card"
      v-if="store.assistants === null"></v-skeleton-loader>
    <div
      class="rowCenter flex-wrap ga-5"
      v-if="store.invoices !== null && store.invoices.data.invoices.length > 0">
      <div
        v-for="(invoice, index) in store.invoices.data.invoices"
        :key="index"
        class="card w-100 column ga-5 rounded-xl elevation-5 pa-5">
        <div>
          <p class="cardLabel">ID:</p>
          <p>{{ invoice.properties.hs_object_id }}</p>
        </div>
        <div>
          <p class="cardLabel">Amount Billed:</p>
          <p>{{ formatCurrency(invoice.properties.hs_amount_billed) }}</p>
        </div>
        <div>
          <p class="cardLabel">Due?/Create?:</p>
          <p>{{ formatDate(invoice.properties.hs_createdate) }}</p>
        </div>
        <!-- <p>{{ invoice.properties }}</p> -->
      </div>
    </div>
    <p
      v-if="
        store.invoices !== null && store.invoices.data.invoices.length === 0
      "
      class="text-start">
      You currently have no invoices
    </p>
  </div>
</template>

<script>
  import HeaderSuiteComponent from "@/suite/components/HeaderSuiteComponent.vue";
  import { useAuthStore } from "../stores/auth.store";

  export default {
    name: "InvoicesView",
    components: {
      HeaderSuiteComponent,
    },
    data() {
      return {
        store: useAuthStore(),
      };
    },
    methods: {
      formatDate(dateString) {
        const options = {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        };
        const date = new Date(dateString);
        return date.toLocaleDateString("en-GB", options).replace(",", "");
      },
      formatCurrency(amount) {
        return `$${parseFloat(amount).toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}`;
      },
    },
  };
</script>

<style scoped>
  .card {
    max-width: 300px;
    border: 3px solid #373ae6;
  }
  .cardLabel {
    font-weight: 600;
    font-size: 1.1rem;
  }
</style>