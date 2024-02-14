<template>
    <section>
    <p class="subtitle">Is this you?</p>
    <h2 class="text-midnight">
      Do You Identify Yourself With The Following Aspects?
    </h2>
    <div class="columnAlignCenter ga-8 my-5">
      <div class="w-75 columnAlignCenter aspect elevation-5 rounded-xl pa-3">
        <img
          src="@/assets/images/beforeYouStart/Time-Icon.png"
          alt="Time Icon"
          width="30%" />
        <p>
          Investing an
          <strong class="text-radioactive">excessive</strong> amount of time in
          routine and repetitive activities
        </p>
      </div>
      <div class="w-75 columnAlignCenter aspect elevation-5 rounded-xl pa-3">
        <img
          src="@/assets/images/beforeYouStart/Tired-Icon.png"
          alt="Time Icon"
          width="30%" />
        <p>
          Constantly <strong class="text-radioactive">fatigued</strong> due to
          the overwhelming working demands
        </p>
      </div>
      <div class="w-75 columnAlignCenter aspect elevation-5 rounded-xl pa-3">
        <img
          src="@/assets/images/beforeYouStart/Budget-Icon.png"
          alt="Budget Icon"
          width="30%" />
        <p>
          Seeking ways to enhance efficiency without exceeding a limited
          <strong class="text-radioactive">budget</strong>
        </p>
      </div>
      <div class="w-75 columnAlignCenter aspect elevation-5 rounded-xl pa-3">
        <img
          src="@/assets/images/beforeYouStart/Work-Life-Icon.png"
          alt="Work Life Icon"
          width="30%" />
        <p>
          Struggling to sustain a harmonious
          <strong class="text-radioactive">balance</strong> between work and
          personal life
        </p>
      </div>
      <div class="w-75 columnAlignCenter aspect elevation-5 rounded-xl pa-3">
        <img
          src="@/assets/images/beforeYouStart/Productivity-Icon.png"
          alt="Productivity Icon"
          width="30%" />
        <p>
          Searching for methods to
          <strong class="text-radioactive">expand</strong> your businedd without
          the need for additional effort
        </p>
      </div>
    </div>
    <p class="mt-3">Do you identify yourself with the following aspects?</p>
    <p class="my-2">Then it's time to hire a virtual assistant.</p>
    <router-link class="secondaryButton mt-3 mb-5" :to="'/contact-us'"
      >Contact Us!</router-link
    >
  </section>
</template>

<style scoped>
  .aspect {
    border: 5px solid #373ae6;
  }
</style>