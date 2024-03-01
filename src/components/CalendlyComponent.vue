<template>
  <!-- <div
    class="calendly-inline-widget"
    data-url="https://calendly.com/iconic-assistants/15min"
    style="width:70vw; height: 85vh; margin:5vw 0;"></div> -->
    <button v-on:click="calendlyPopUp">

    </button>
</template>

<script>
export default {
  methods: {
    calendlyPopUp(){
      console.log("Calendly");
    }
  }
}
</script>
