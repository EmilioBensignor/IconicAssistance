<template>
  <router-link class="popUp elevation-3 mr-2" :to="'/contact-us'">Get Started</router-link>
</template>

<style>
.popUp {
  text-align: center;
  background-color: white;
  border: 1px solid #373ae6;
  border-radius: 20vw;
  color: #373ae6;
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.3rem;
  text-decoration: none;
  transition: all ease 0.2s;
  padding: 1.3rem 1.3rem;
  margin-right: 3vw !important;
  /* Mobile */
  display: none;
}

.popUp:hover {
  background-color: #373ae6;
  color: white;
  border: 1px solid #373ae6;
}

/* Desktop */
@media only screen and (min-width: 1080px) {
  .popUp {
    display: block !important;
  }
}

@media only screen and (min-width: 1100px) {
  .popUp {
    padding: 1.4rem 1.5rem;
  }
}

@media only screen and (min-width: 1280px) {
  .popUp {
    padding: 1.4rem 2rem;
  }
}

@media only screen and (min-width: 1920px) {
  .popUp {
    padding: 21px 39px;
  }
}
</style>
