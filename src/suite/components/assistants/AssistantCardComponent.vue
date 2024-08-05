<template>
  <router-link
    :to="routes.ASSISTANT_ACTIONS + '/' + assistant.id"
    class="card w-100 bg-white columnAlignCenter ga-5 rounded-lg elevation-5 pa-5">
    <div class="rowCenter align-self-start flex-wrap ga-3">
      <div class="bg-radioactive rounded-lg elevation-3 pa-2">
        <v-icon icon="mdi-account"></v-icon>
      </div>
      <div class="column ga-3">
        <div class="cardTitle rowCenter ga-2">
          <p class="w-auto">{{ assistant.firstname }}</p>
          <p class="w-auto">{{ assistant.lastname }}</p>
          <div class="assistantType rounded-lg px-1">
            <p>EA</p>
          </div>
        </div>
        <div class="info rowCenter flex-wrap ga-1">
          <p class="w-auto pSmall">Last rating:</p>
          <div>
            <span class="mdi mdi-star text-radioactive"></span>
            <span class="mdi mdi-star text-radioactive"></span>
            <span class="mdi mdi-star text-radioactive"></span>
            <span class="mdi mdi-star text-radioactive"></span>
            <span class="mdi mdi-star text-radioactive"></span>
          </div>
          <p class="w-auto pSmall font-weight-bold">Excellent!</p>
          <button
            class="pSmall bg-radioactive rounded-lg elevation-3 py-1 px-2">
            Rate my assistant
          </button>
        </div>
        <div class="column ga-2">
          <div class="rowCenter ga-2">
            <span class="mdi mdi-circle text-green"></span>
            <p>Online <span class="pSmall">(since: 8:30AM)</span></p>
          </div>
          <div class="rowCenter ga-2">
            <span class="mdi mdi-clock-time-four-outline"></span>
            <p>Current shift: <span class="pSmall">9AM to 5PM</span></p>
          </div>
          <div class="rowCenter ga-2">
            <span class="mdi mdi-check-circle-outline"></span>
            <p>Current task: <span class="pSmall">???</span></p>
          </div>
        </div>
      </div>
    </div>
    <div class="cardBody column ga-3">
      <p class="font-weight-bold">Assistant Info</p>
      <div class="rowCenter flex-wrap ga-2">
        <div class="rowCenter ga-3">
          <div class="bg-suiteBg rounded elevation-1 px-1">
            <span class="mdi mdi-email-outline"></span>
          </div>
          <div>
            <p class="pSmall bold500">Primary Email</p>
            <p class="w-auto pSmall">{{ assistant.email }}</p>
          </div>
        </div>
        <div class="rowCenter ga-3">
          <div class="bg-suiteBg rounded elevation-1 px-1">
            <span class="mdi mdi-email-outline"></span>
          </div>
          <div>
            <p class="pSmall bold500">Alt Email</p>
            <p class="w-auto pSmall">{{ assistant.email }}</p>
          </div>
        </div>
        <div class="rowCenter ga-3">
          <div class="bg-suiteBg rounded elevation-1 px-1">
            <span class="mdi mdi-phone"></span>
          </div>
          <div>
            <p class="pSmall bold500">Phone</p>
            <p class="w-auto pSmall">{{ assistant.phone }}</p>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
  import ROUTES_NAMES from "@/router/constants/ROUTES_NAMES";
  export default {
    name: "AssistantCardComponent",
    props: {
      assistant: {
        type: Object,
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
  .card {
    max-width: 300px;
    text-decoration: none;
  }

  .cardTitle p {
    font-weight: 600;
  }

  .assistantType {
    border: 2px solid #373ae6;
  }

  .assistantType p {
    font-size: 0.75rem;
  }

  .pSmall {
    font-size: 0.85rem;
  }

	.bold500 {
		font-weight: 500;
	}

  @media only screen and (min-width: 1080px) {
    .card {
      max-width: 350px;
    }
  }
</style>
