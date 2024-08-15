<template>
  <div>
    <div
      class="meetings-iframe-container"
      data-src="https://meetings.hubspot.com/german-grosso/discovery-call?embed=true"
    ></div>
  </div>
</template>

<script>
import { onMounted } from 'vue'

export default {
  name: 'HubspotMeetings',
  setup() {
    onMounted(() => {
      const script = document.createElement('script')
      script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js'
      script.async = true
      document.body.appendChild(script)
    })
  }
}
</script>