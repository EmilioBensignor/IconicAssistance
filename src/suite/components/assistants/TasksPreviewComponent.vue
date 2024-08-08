<template>
  <router-link
    class="tasksPreview h-auto bg-white rounded-lg elevation-5 pa-5"
    :to="routes.ASSISTANT_TASKS + '/' + assistant.id">
    <h2 class="text-midnight">Tasks</h2>
    <ul class="taskList pl-3">
      <li v-for="(task, index) in assistant.tasks" :key="index">
        {{ task.name }}
      </li>
    </ul>
  </router-link>
</template>

<script>
  import ROUTES_NAMES from "@/router/constants/ROUTES_NAMES";

  export default {
    data() {
      return {
        routes: ROUTES_NAMES,
      };
    },
    props: {
      assistant: {
        type: Object,
        required: true,
      },
    },
  };
</script>

<style scoped>
  .tasksPreview {
    text-decoration: none;
    max-width: max-content;
  }
	.taskList {
		list-style: outside;
	}
</style>
