<template>
  <div class="w-100 justifyCenter">
    <div class="costColumn">
      <div>
        <p class="d-none"></p>
      </div>
      <div v-for="(item, index) in titles" class="titles rounded-bs-xl elevation-1" :key="index">
        <p class="text-white">{{ item }}</p>
      </div>
    </div>
    <div class="costColumn">
      <div>
        <IconicLogo class="logo" color="blue" />
      </div>
      <div v-for="(item, index) in iconic" class="bg-lightBlueSky elevation-1" :key="index">
        <p class="font-weight-bold">{{ item }}</p>
      </div>
    </div>
    <div class="costColumn">
      <div>
        <p class="font-weight-bold">US based employee</p>
      </div>
      <div v-for="(item, index) in us" class="bg-chartGray rounded-te-xl elevation-1" :key="index">
        <p class="us">{{ item }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import IconicLogo from '@/web/components/icons/IconicLogo.vue';

export default {
  components: {
    IconicLogo,
  },
  data() {
    return {
      titles: [
        "Hourly Rate of Pay",
        "Fringe Benefits",
        "Overhead Rate",
        "Total Pay Rate",
        "Work Hours per Month",
        "TOTAL MONTHLY",
      ],
      us: [
        "$25.45",
        "$5.09",
        "$7.64",
        "$38.18",
        "160",
        "$6,108.80",
      ],
      iconic: [
        "$11",
        "$0",
        "$0",
        "$11",
        "160",
        "$1,760.00",
      ],
    }
  }
}
</script>

<style scoped>
.costColumn div {
  height: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 0;
}

.titles p, .costColumn p {
  font-size: 0.9rem
}

.titles {
  background-image: linear-gradient(to right, #373ae6, #0066f9, #0085fe, #00a0fa, #0cb8f1);
}

.titles p {
  font-weight: 500;
}

.us {
  font-weight: 500;
}

.logo {
  width: 100%;
}

@media only screen and (min-width: 480px) {
  .logo {
    width: 90%;
  }
}

@media only screen and (min-width: 700px) {
  .logo {
    width: 80%;
  }
}
</style>