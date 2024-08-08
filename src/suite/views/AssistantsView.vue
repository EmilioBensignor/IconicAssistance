<template>
  <HeaderSuiteComponent />
  <div class="bg-suiteBg">
    <div class="heroSuite columnAlignCenter">
      <h1 class="text-midnight ml-4">Executive Assistants</h1>
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
        <v-list class="w-auto rowCenter rounded-lg elevation-3 pa-0">
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
        <div class="d-flex flex-wrap align-start ga-5">
          <AssistantCardComponent :assistant="selected" />
          <TasksPreviewComponent :assistant="selected" />
        </div>

      </div>
      <p
        v-if="
          store.assistants !== null &&
          store.assistants.data.assistants.length === 0
        "
        class="text-start"
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
import TasksPreviewComponent from "@/suite/components/assistants/TasksPreviewComponent.vue";

export default {
  name: "AssistantsView",
  components: {
    HeaderSuiteComponent,
    AssistantCardComponent,
    TasksPreviewComponent,
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

<style scoped>
.v-list {
  max-width: max-content;
}
</style>
