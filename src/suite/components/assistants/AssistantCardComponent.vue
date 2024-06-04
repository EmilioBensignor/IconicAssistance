<template>
  <router-link :to="routes.ASSISTANTS" class="card columnAlignCenter ga-5 rounded-xl elevation-5 pa-5">
    <div class="rowCenter align-self-start ga-5">
      <div class="bg-radioactive rounded-circle elevation-3 pa-2">
        <v-icon icon="mdi-account"></v-icon>
      </div>
      <div class="cardTitle rowCenter ga-2">
        <p>{{ assistant.properties.firstname }}</p>
        <p>{{ assistant.properties.lastname }}</p>
      </div>
    </div>
    <div class="column ga-3">
      <p>{{ assistant.properties.email }}</p>
      <!-- <p>{{ assistant.properties.phone }}</p> -->
      <p>1122223333</p>
    </div>
  </router-link>
</template>

<script>
import ROUTES_NAMES from '@/router/constants/ROUTES_NAMES';
export default {
  name: "AssistantCardComponent",
  props: {
    assistant: {
      type: Object,
      required: true
    },
  },
  data(){
    return{
      routes: ROUTES_NAMES
    }
  }
};
</script>

<style scoped>
.card {
  width: auto;
  border: 3px solid #373ae6;
  text-decoration: none;
}

.cardTitle p {
  font-weight: 600;
}
</style>