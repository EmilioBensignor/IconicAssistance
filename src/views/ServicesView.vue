<template>
  <section class="columnAlignCenter">
    <div class="heroPages flexCenter">
      <h1 class="text-midnight">
        <span class="text-radioactive">Empower</span>
        Your Business Discover Our Services
      </h1>
    </div>
  </section>
  <section class="skyRadioactive">
    <p class="text-white">Unlock Efficiency</p>
    <h2 class="text-white">Ensuring Success</h2>
    <div class="w-75 ensuringSuccess columnAlignCenter rounded-xl py-3 my-5 elevation-5">
      <p class="text-white">
        At Iconic, we redefine outsourcing beyond cost-cutting, offering
        comprehensive employment solutions like offshore staffing, remote work,
        call centers, and virtual assistants. Our Business Process Outsourcing
        (BPO) services streamline operations, enhance efficiency, and cut costs,
        providing financial advantages through global collaboration. Choosing
        ICONIC means accessing external expertise, ensuring high-quality
        services and freeing internal resources for core competencies and
        strategic growth. Our services position your business for success in a
        constantly evolving market.
      </p>
    </div>
  </section>
  <EmpowerComponent />
</template>

<script>
import EmpowerComponent from "@/components/services/EmpowerComponent.vue";

export default {
  components: {
    EmpowerComponent,
  }
}
</script>

<style scoped>
  .ensuringSuccess {
    border: 3px solid white;
  }
</style>