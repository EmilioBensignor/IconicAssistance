<template>
  <div class="footerBelow d-flex align-center ga-3">
    <router-link :to="'/privacy'">Privacy</router-link>
    <p>|</p>
    <router-link :to="'/terms'">Terms</router-link>
  </div>
  <p class="rightsReserved text-center my-3">
    © Iconic Assistants. All Rights Reserved {{ currentYear }}
  </p>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.footerBelow p,
.footerBelow a {
  font-size: 0.9rem;
  color: #120d40;
  text-decoration: none;
}

.rightsReserved {
  font-size: 0.8rem;
}

/* SM */
@media only screen and (min-width: 480px) {
  .footerBelow p,
  .footerBelow a {
    font-size: 1rem;
  }

  .rightsReserved {
    font-size: 0.9rem;
  }
}

@media only screen and (min-width: 769px) {
  .footerBelow p,
  .footerBelow a {
    font-size: 1.05rem;
  }

  .rightsReserved {
    font-size: 1rem;
  }
}

/* Desktop */
@media only screen and (min-width: 1080px) {
  .rightsReserved {
    font-size: 1rem;
    margin-bottom: 1rem !important;
  }
}

@media only screen and (min-width: 1920px) {
  .rightsReserved {
    margin: 25px 0 !important;
  }
}
</style>