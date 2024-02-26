<template>
  <section class="heroPagesWave columnAlignCenter">
    <div class="heroPages flexCenter">
      <h1 class="text-midnight">Types of Virtual Assistants</h1>
    </div>
  </section>
  <OurServiceComponentVue />
  <TestimonialsComponentVue />
</template>

<script>
    import OurServiceComponentVue from "@/components/typesOfVa/OurServiceComponent.vue";
    import TestimonialsComponentVue from '@/components/typesOfVa/TestimonialsComponent.vue';
    export default {
      components: {
        OurServiceComponentVue,
        TestimonialsComponentVue,
      },
    };
</script>
