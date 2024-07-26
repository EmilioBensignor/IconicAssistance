<template>
  <div class="toDoElement colum pb-3 pr-3">
    <div class="rowCenter ga-3 text-midnight">
      <v-checkbox
        v-model="task.status"
        :label="task.name"
        @click.prevent="moveTask(task)"></v-checkbox>
    </div>
    <div class="align-self-end">
      <p class="w-100 text-end">{{ task.due_date.split("T")[0] }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      task: {
        type: Object,
        required: true,
      },
      moveTask: {
        type: Function,
        required: true,
      },
    },
  };
</script>

<style>
  .toDoElement .v-input__details {
    display: none;
  }

  .toDoElement .v-label {
    opacity: 1;
  }
</style>

<style scoped>
  .toDoElement {
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  }

  .notStarted {
    color: red;
  }

  .completed {
    color: #373ae6;
  }
</style>
