<template>
  <v-dialog class="popUpDialog bg-suiteBg" persistent v-model="dialog">
    <div class="w-100 h-100 bg-suiteBg">
      <h2>Get Started</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta velit
        dolorem blanditiis nam quos minus consectetur fugiat itaque aliquam
        dignissimos. Quasi culpa sequi quibusdam quaerat non, omnis nesciunt
        minus nihil.
      </p>
      <p>Choose a Role</p>
      <v-btn @click="dialog = false">Hire an Assistant</v-btn>
      <v-btn @click="dialog = false">Become an Assistant</v-btn>
    </div>
  </v-dialog>
</template>

<script>
  export default {
    data() {
      return {
        dialog: true,
      };
    },
  };
</script>

<style>
  .popUpDialog > .v-overlay__content {
    max-width: 100% !important;
    max-height: 100% !important;
    width: 100% !important;
    height: 100% !important;
    margin: 0 !important;
  }
</style>
