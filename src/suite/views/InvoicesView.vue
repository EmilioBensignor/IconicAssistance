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
        <div class="rowCenter">
          <v-skeleton-loader v-if="!userData || !userData.firstname" type="text"></v-skeleton-loader>
          <p v-else class="cardLabel">{{ userData.firstname }}</p>
          <p class="text-end">{{ formatDate(invoice.properties.hs_due_date) }}</p>
        </div>
        <div>
          <p class="cardLabel">Amount Billed:</p>
          <p>{{ formatCurrency(invoice.properties.hs_amount_billed) }}</p>
        </div>
        <!-- <div>
          <p class="cardLabel">Number:</p>
          <p>{{ invoice.properties.hs_number }}</p>
        </div> -->
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

<script setup>
import { collection, doc } from "firebase/firestore";
import { useDocument } from "vuefire";
import { db } from "../firebase/init";
const store = useAuthStore();
const userData = useDocument(doc(collection(db, "clients"), store.user.uid));
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