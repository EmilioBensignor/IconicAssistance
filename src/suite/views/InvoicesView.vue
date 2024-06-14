<template>
  <HeaderSuiteComponent />
  <div class="heroSuite columnAlignCenter">
    <h1 class="text-midnight ml-4">Invoices</h1>
  </div>
  <div class="suiteComponents mt-5">
    <v-skeleton-loader class="w-75 px-3" type="card" v-if="store.assistants === null"></v-skeleton-loader>
    <div class="column ga-7" v-if="store.invoices !== null && store.invoices.data.invoices.length > 0">
      <div v-for="(invoice, index) in store.invoices.data.invoices" :key="index">
        <div class="d-flex ml-5">
          <p :class="new Date(invoice.properties.hs_due_date) > new Date() ? 'bg-radioactive text-white' : 'bg-suiteGray text-midnight'"
            class="w-auto rounded-t-lg py-1 px-2">{{ new Date(invoice.properties.hs_due_date) > new Date() ? 'Next Invoice': 'Paid'}}</p>
        </div>
        <div class="w-100 column ga-5 rounded-xl elevation-5 pa-5"
          :class="new Date(invoice.properties.hs_due_date) > new Date() ? 'futureInvoice' : 'pastInvoice'">
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

    </div>
    <p v-if="
      store.invoices !== null && store.invoices.data.invoices.length === 0
    " class="text-start">
      You currently have no invoices
    </p>
  </div>
</template>

<script>
import HeaderSuiteComponent from "@/suite/components/HeaderSuiteComponent.vue";
import { formatCurrency, formatDate } from "../services/format.service";
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
  setup(){
    formatCurrency(),
    formatDate()
  }
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
.futureInvoice {
  max-width: 300px;
  border: 3px solid #373ae6;
}

.pastInvoice {
  max-width: 300px;
  border: 3px solid #8c909c;
}

.cardLabel {
  font-weight: 600;
  font-size: 1.1rem;
}
</style>