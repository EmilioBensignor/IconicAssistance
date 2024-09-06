<template>
  <nav>
    <v-app-bar elevation="0" app class="bg-white px-3 py-1">
      <div class="w-100 d-flex justify-space-between align-center">
        <IconicLogo class="mt-1" color="blue" />
        <button
          class="getStarted secondaryButton elevation-4"
          @click="handleAction(action, linkTo)">
          Get Started
        </button>
      </div>
    </v-app-bar>
  </nav>
</template>

<script>
  import IconicLogo from "@/web/components/icons/IconicLogo.vue";

  export default {
    name: "HeaderContact",
    props: {
      action: {
        type: String,
        required: true,
      },
      linkTo: {
        type: String,
        required: false,
      },
      handleAction: {
        type: Function,
        required: true,
      },
    },
    components: {
      IconicLogo,
    },
  };
</script>

<style scoped>
  .getStarted {
    padding: 0.75rem 1.5rem;
  }

  @media only screen and (min-width: 480px) {
    .getStarted {
      padding: 0.875rem 1.75rem;
    }
  }

  @media only screen and (min-width: 1080px) {
    .getStarted {
      padding: 1.3rem 2.3rem;
    }
  }
</style>
