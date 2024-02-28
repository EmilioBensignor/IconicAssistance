<template>
  <section class="heroPagesWave columnAlignCenter">
    <div class="heroPages flexCenter">
      <h1 v-motion="scrollBottom" class="text-midnight">
        Before You Start Working With
        <span class="text-radioactive">Iconic Assistants</span>
      </h1>
    </div>
  </section>
  <OpportunitiesComponent />
  <IsThisYou />
  <PerfectMatchComponent />
</template>

<script>
import OpportunitiesComponent from "@/components/beforeYouStart/OpportunitiesComponent.vue";
import IsThisYou from "@/components/beforeYouStart/IsThisYou.vue";
import PerfectMatchComponent from "@/components/beforeYouStart/PerfectMatchComponent.vue";

export default {
  components:{
    OpportunitiesComponent,
    IsThisYou,
    PerfectMatchComponent,
  }
}
</script>

<script setup>
  import { scrollBottom } from "@/motions.js";
</script>
