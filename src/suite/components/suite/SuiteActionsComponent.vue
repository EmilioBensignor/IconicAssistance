<template>
  <div class="action bg-suiteGray column ga-3 rounded-xl elevation-4 pa-5">
    <p class="titleAction text-start font-weight-bold">Payment Method Required</p>
    <p class="text-start">Submit youy payment method for future transactions</p>
    <router-link class="secondaryButton elevation-4" :to="'/suite/add-payment-method'">ADD PAYMENT METHOD</router-link>
  </div>
</template>

<script>
export default {
  name: "SuiteActionsComponent",
}
</script>

<style scoped>
.action p {
  width: 100% !important;
}

.titleAction {
  font-size: 1.2rem;
}

.secondaryButton {
  font-size: 1rem;
  padding: 4%;
}

/* SM */
@media only screen and (min-width: 400px) {
  .action{
    width: 80%;
  }
  .secondaryButton {
    width: 75%;
    align-self: center;
  }
}
</style>