<template>
  <div class="h-100 column align-center justify-space-between">
    <iframe src="https://iconicassistants.na.chilipiper.com/router/disco_call" width="560" height="700"></iframe>
    <div class="columnAlignCenter">
      <FooterRightsComponent />
    </div>
  </div>
</template>

<script>
import FooterRightsComponent from "../components/FooterRightsComponent.vue";

export default {
  name: "Thank You",
  components: {
    FooterRightsComponent,
  }
}
</script>