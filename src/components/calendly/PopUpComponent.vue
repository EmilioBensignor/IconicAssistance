<template>
  <a
    href=""
    class="popUp elevation-5 mr-2"
    onclick="Calendly.initPopupWidget({url:'https://calendly.com/iconic-assistants/15min-ij'});return false;"
    >Book a Call</a>
</template>

<style scoped>
  .popUp {
    background-color: white;
    border: 1px solid white;
    border-radius: 20vw;
    color: #373ae6;
    font-family: "Poppins", sans-serif;
    font-size: 1.1rem;
    font-weight: 600;
    line-height: 1.3rem;
    text-decoration: none;
    padding: 3vw 5vw;
    transition: all ease 0.2s;
    /* Mobile */
    display: none;
  }

  .popUp:hover {
    background-color: #373ae6;
    color: white;
    border: 1px solid #373ae6;
  }
</style>
