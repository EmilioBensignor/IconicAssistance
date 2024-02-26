<template>
  <section class="heroPagesWave columnAlignCenter">
    <div class="heroPages flexCenter">
      <h1 class="text-midnight">
        <span class="text-radioactive">Empower</span>
        Your Business Discover Our Services
      </h1>
    </div>
  </section>
  <section class="skyRadioactive">
    <p class="subtitle text-white">Unlock Efficiency</p>
    <h2 class="text-white">Ensuring Success</h2>
    <div
      class="w-75 ensuringSuccess columnAlignCenter rounded-xl py-3 my-5 elevation-5">
      <p class="text-white">
        At Iconic, we redefine outsourcing beyond
        <span class="font-weight-bold">cost-cutting</span>, offering
        comprehensive employment
        <span class="font-weight-bold">solutions</span> like
        <span class="font-weight-bold">offshore staffing</span>,
        <span class="font-weight-bold">remote work</span>,
        <span class="font-weight-bold">call centers</span>, and
        <span class="font-weight-bold">virtual assistants</span>. Our Business
        Process Outsourcing (BPO) services streamline operations, enhance
        <span class="font-weight-bold">efficiency</span>, and cut costs,
        providing
        <span class="font-weight-bold">financial advantages</span> through
        global collaboration. Choosing ICONIC means accessing external
        expertise, ensuring
        <span class="font-weight-bold">high-quality services</span> and freeing
        internal resources for core competencies and
        <span class="font-weight-bold">strategic growth</span>. Our services
        position your business for
        <span class="font-weight-bold">success</span> in a constantly evolving
        market.
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
    },
  };
</script>

<style scoped>
  .ensuringSuccess {
    border: 3px solid white;
  }
</style>
