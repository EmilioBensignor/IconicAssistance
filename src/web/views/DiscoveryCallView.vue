<template>
  <div class="h-100 column justify-space-between bg-grayBg">
    <div
      class="w-100 h-100 allCenter meetings-iframe-container"
      data-src="https://meetings.hubspot.com/iconic-assistants/discovery-call?embed=true"
    ></div>
  </div>
</template>

<script>
import { onMounted } from "vue";

export default {
  name: "Testing",
  setup() {
    onMounted(() => {
      const script = document.createElement("script");
      script.src =
        "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
      script.async = true;
      document.body.appendChild(script);
    });
  },
};
</script>
