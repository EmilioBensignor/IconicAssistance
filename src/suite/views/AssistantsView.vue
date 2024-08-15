<template>
  <HeaderSuiteComponent />
  <div class="bg-suiteBg">
    <div class="heroSuite columnAlignCenter">
      <h1 class="text-white ml-4">Executive Assistants</h1>
    </div>
    <div class="suiteComponents mt-5">
      <v-skeleton-loader
        class="w-50 bg-suiteBg px-3"
        type="card"
        v-if="store.assistants === null"
      ></v-skeleton-loader>
      <div
        class="column ga-10 mb-10"
        v-if="
          store.assistants !== null &&
          store.assistants.data.assistants.length > 0
        "
      >
        <div class="column ga-5">
          <v-list
            class="w-auto assistantList bg-lightViolet rowCenter rounded-lg elevation-3 pa-0"
          >
            <v-list-item
              v-for="(assistant, index) in store.assistants.data.assistants"
              :key="index"
              :value="assistant.id"
              :title="`${assistant.firstname} ${assistant.lastname}`"
              @click="selectAssistant(assistant)"
              :class="selected.id === assistant.id ? 'v-list-item--active' : ''"
            >
            </v-list-item>
          </v-list>
        </div>
        <div class="assistantScale column ga-10">
          <div class="d-flex flex-wrap align-start ga-5">
            <AssistantCardComponent :assistant="selected" />
          </div>
          <ScaleComponent />
        </div>
      </div>
      <p
        v-if="
          store.assistants !== null &&
          store.assistants.data.assistants.length === 0
        "
        class="text-lila text-start"
      >
        You currently have no assistants
      </p>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "@/suite/stores/auth.store";
import HeaderSuiteComponent from "@/suite/components/HeaderSuiteComponent.vue";
import AssistantCardComponent from "@/suite/components/assistants/AssistantCardComponent.vue";
import ScaleComponent from "@/suite/components/suite/ScaleComponent.vue";

export default {
  name: "AssistantsView",
  components: {
    HeaderSuiteComponent,
    AssistantCardComponent,
    ScaleComponent,
  },
  data() {
    return {
      store: useAuthStore(),
      selected: null,
      assistantId: this.$route.query.id,
    };
  },
  methods: {
    selectAssistant(assistant) {
      this.selected = assistant;
    },
  },
  watch: {
    "store.assistants": {
      handler(newValue) {
        if (newValue && newValue.data && newValue.data.assistants) {
          if (!this.assistantId) {
            this.selected = newValue.data.assistants[0];
          } else {
            this.selected = newValue.data.assistants.find(
              (assistant) => assistant.id === this.assistantId
            );
          }
        }
      },
      immediate: true, // Run handler immediately if the data is already present
    },
  },
};
</script>

<style>
.assistantList .v-list-item {
  font-family: "Poppins", sans-serif !important;
}
</style>

<style scoped>
.v-list {
  max-width: max-content;
}

.add {
  text-decoration: none;
  border: 2px solid #8785ba;
}

@media only screen and (min-width: 1080px) {
  .assistantScale {
    flex-direction: row;
    align-items: flex-start;
  }
}
</style>
