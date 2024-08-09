<template>
  <HeaderSuiteComponent />
  <div class="heroSuite columnAlignCenter">
    <h1 class="text-white ml-4">Payment Method Saved</h1>
  </div>
  <div class="w-100 columnAlignCenter mt-5">
    <div class="w-75 columnAlignCenter rounded-xl pb-3">
      <div class="tick-container">
        <div class="tick"></div>
      </div>
      <p class="w-100 text-lila text-center">Your payment method has been saved.</p>
      <router-link class="secondaryButton bg-btnViolet elevation-5 mt-5" :to="routes.SUITE"
        >Go back to Dashboard</router-link
      >
    </div>
  </div>
</template>

<script>
import ROUTES_NAMES from "@/router/constants/ROUTES_NAMES";
import HeaderSuiteComponent from "@/suite/components/HeaderSuiteComponent.vue";
import SpinnerComponent from "@/suite/components/loader/SpinnerComponent.vue";

export default {
  name: "AddPaymentMethodConfirmationView",
  components: {
    HeaderSuiteComponent,
    SpinnerComponent,
  },
  data() {
    return {
      routes: ROUTES_NAMES,
    };
  },
};
</script>

<style scoped>
.tick-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;
}

.tick {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #373ae6;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: pop-in 0.5s ease-out;
}

.tick:after {
  content: "";
  position: absolute;
  width: 15px;
  height: 25px;
  border: solid white;
  border-width: 0 5px 5px 0;
  transform: rotate(45deg);
}

@keyframes pop-in {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes draw-tick {
  0% {
    width: 0;
    height: 0;
  }

  100% {
    width: 15px;
    height: 25px;
  }
}
</style>
