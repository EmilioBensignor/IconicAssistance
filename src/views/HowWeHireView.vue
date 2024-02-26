<template>
  <section class="heroPagesRadioactiveWave">
    <div class="heroPages flexCenter">
      <h1 class="text-midnight">
        Hiring Excellence At
        <span class="text-radioactive">Iconic Assistants</span>
      </h1>
    </div>
  </section>
  <ExceptionalSkillComponent />
  <OutsourceTopComponent />
  <CandidateCriteriaComponent />
</template>

<script>
import ExceptionalSkillComponent from "@/components/howWeHire/ExceptionalSkillComponent.vue";
import OutsourceTopComponent from "@/components/howWeHire/OutsourceTopComponent.vue";
import CandidateCriteriaComponent from "@/components/howWeHire/CandidateCriteriaComponent.vue";

  export default {
    components:{
      ExceptionalSkillComponent,
      OutsourceTopComponent,
      CandidateCriteriaComponent,
    }
  };
</script>

<style scoped>

</style>
