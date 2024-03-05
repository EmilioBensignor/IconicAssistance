<template>
  <a
    href=""
    class="cta bg-white columnAlignCenter justify-center rounded-circle elevation-5"
    onclick="Calendly.initPopupWidget({url:'https://calendly.com/iconic-assistants/15min-ij'});return false;">
    <v-icon class="shadow-15" icon="mdi-phone" color="radioactive" size="300%"></v-icon>
  </a>
</template>

<style scoped>
.cta{
  width: 18vw;
  height: 18vw;
  position: fixed;
  right: 4%;
  bottom: 5%;
  z-index: 5;
  text-decoration: none;
  border: 1px solid #373ae6;
}
</style>