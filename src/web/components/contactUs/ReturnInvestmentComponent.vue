<template>
  <div class="returnInvestment rowCenter justify-center ga-10">
    <div class="costComparison flexCenter ga-5 bg-white rounded-xl elevation-5 pa-5">
      <div class="bg-midnight rounded-lg py-3 px-5">
        <p class="font-weight-bold text-white">COST</p>
        <p class="font-weight-bold text-white">COMPARISON</p>
      </div>
      <div>
        <p>Hourly Rate of Pay <sup>1</sup></p>
      </div>
      <div>
        <p>Fringe Benefits 20% <sup>2</sup></p>
      </div>
      <div>
        <p>Overhead Rate 30% <sup>3</sup></p>
      </div>
      <div>
        <p>Total Effective Pay Rate</p>
      </div>
      <div>
        <p>Hours Per Month</p>
      </div>
      <div class="lastDiv">
        <p class="font-weight-bold">TOTAL MONTHLY LABOR COST</p>
      </div>
    </div>
    <div class="employee flexCenter ga-5 bg-white rounded-xl elevation-5 pa-5">
      <div class="bg-midnight rounded-lg py-3 px-5">
        <p class="font-weight-bold text-white">FULL-TIME</p>
        <p class="font-weight-bold text-white">EMPLOYEE</p>
      </div>
      <div>
        <p>$25.45</p>
      </div>
      <div>
        <p>$5.09</p>
      </div>
      <div>
        <p>$7.64</p>
      </div>
      <div>
        <p>$38.18</p>
      </div>
      <div>
        <p>160 Hrs</p>
      </div>
      <div class="lastDiv">
        <p class="font-weight-bold">$6,108.80</p>
      </div>
    </div>
    <div class="iconicEa flexCenter ga-5 bg-midnight rounded-xl elevation-5 pa-5">
      <div class="bg-white rounded-lg py-3 px-5">
        <p class="font-weight-bold">FULL-TIME</p>
        <p class="font-weight-bold">ICONIC EA</p>
      </div>
      <div>
        <p class="text-white">$11.00</p>
      </div>
      <div>
        <p class="text-white">$0.00</p>
      </div>
      <div>
        <p class="text-white">$0.00</p>
      </div>
      <div>
        <p class="text-white">$11.00</p>
      </div>
      <div>
        <p class="text-white">160 Hrs</p>
      </div>
      <div class="lastDiv">
        <p class="text-white font-weight-bold">$1,760.00</p>
      </div>
      <img class="save w-100 shadow-2" src="@/web/assets/images/contactUs/70-Percent-Less-Remote-Payroll.png" alt="70 Percent Less Remote Payroll" />
    </div>
  </div>
</template>

<style scoped>
.costComparison div,
.employee div,
.iconicEa div {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-bottom: 0.5rem;
}

.costComparison div,
.employee div {
  border-bottom: 1px solid black;
}

.iconicEa div {
  border-bottom: 1px solid white;
}

.lastDiv {
  border: none !important;
}

.costComparison div p,
.employee div p,
.iconicEa div p {
  width: 100%;
}

.iconicEa{
  position: relative;
}

.save{
  position: absolute;
  bottom: -1rem;
}
</style>