<template>
  <p>{{ assistant.properties.firstname }}</p>
</template>

<script>
export default {
	name: "AssistantCardComponent",
	props: {
    assistant: {
      type: Object,
      required: true
    },
  }
};
</script>