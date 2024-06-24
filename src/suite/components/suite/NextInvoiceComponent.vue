<template>
    <div class="column ga-3 my-5">
        <p class="titleSuite text-start">Next Invoice</p>
        <router-link
        :to="routes.INVOICES"
        class="nextInvoice w-100 bg-white column ga-5 rounded-lg elevation-5 pa-5">
            <div class="rowCenter">
                <v-skeleton-loader
                class="bg-suiteBg"
                v-if="!userData || !userData.firstname"
                type="text"></v-skeleton-loader>
                <p v-else class="cardLabel">{{ userData.firstname }}</p>
                <p class="text-end">
                {{ formatDate(nextInvoice.properties.hs_due_date) }}
                </p>
            </div>
            <div>
                <p class="cardLabel">Amount Billed:</p>
                <p>{{ formatCurrency(nextInvoice.properties.hs_amount_billed) }}</p>
            </div>
        </router-link>
    </div>
</template>

<script>
  import ROUTES_NAMES from "@/router/constants/ROUTES_NAMES";
  export default {
    name: "NextInvoiceComponent",
    props: {
      nextInvoice: {
        type: Object,
        required: true,
      },
      userData: {
        type: Object,
        required: true,
      },
      formatDate: {
        type: Function,
        required: true,
      },
      formatCurrency: {
        type: Function,
        required: true,
      },
    },
    data() {
      return {
        routes: ROUTES_NAMES,
      };
    },
  };
</script>

<style scoped>
  .nextInvoice {
    max-width: 350px;
    text-decoration: none;
  }
  .cardLabel {
    font-weight: 600;
    font-size: 1.1rem;
  }
</style>
