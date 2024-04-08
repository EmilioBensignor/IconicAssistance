<template>
  <a href="" class="cta bg-white columnAlignCenter justify-center rounded-circle elevation-5"
    onclick="Calendly.initPopupWidget({url:'https://calendly.com/iconic-assistants/15min-ij'});return false;">
    <v-icon class="shadow-15" icon="mdi-phone" color="radioactive" size="350%"></v-icon>
  </a>
</template>

<style scoped>
.cta {
  width: 21vw;
  height: 21vw;
  position: fixed;
  left: 4%;
  bottom: 2.7%;
  z-index: 5;
  text-decoration: none;
  border: 1px solid #373ae6;
}

@media only screen and (min-width: 445px) {
  .cta {
    width: 19vw;
    height: 19vw;
  }
}

/* SM */
@media only screen and (min-width: 480px) {
  .cta {
    width: 16vw;
    height: 16vw;
  }
}

@media only screen and (min-width: 520px){
  .cta {
    width: 14vw;
    height: 14vw;
  }
}

@media only screen and (min-width: 600px) {
  .cta {
    width: 12vw;
    height: 12vw;
  }
}

/* MD */
@media only screen and (min-width: 769px) {
  .cta {
    width: 10vw;
    height: 10vw;
  }
}

/* LG */
@media only screen and (min-width: 992px) {
  .cta {
    display: none;
  }
}
</style>
