<template>
  <a
    href=""
    class="cta bg-white columnAlignCenter justify-center rounded-circle elevation-5"
    onclick="Calendly.initPopupWidget({url:'https://calendly.com/iconic-assistants/15min-ij'});return false;">
    <v-icon
      class="shadow-15"
      icon="mdi-phone"
      color="radioactive"
      size="350%"></v-icon>
  </a>
</template>

<style scoped>
  .cta {
    width: 18vw;
    height: 18vw;
    position: fixed;
    left: 4%;
    bottom: 5%;
    z-index: 5;
    text-decoration: none;
    border: 1px solid #373ae6;
  }

  /* SM */
  @media only screen and (min-width: 480px) {
    .cta {
      width: 15vw;
      height: 15vw;
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
    .cta{
      display: none;
    }
  }

  /* Desktop */
  @media only screen and (min-width: 1280px) {
  }
</style>
