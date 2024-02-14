<template>
  <section class="columnAlignCenter">
    <div class="heroPages flexCenter">
      <h1 class="text-midnight">
        Grow Your Business With
        <span class="text-radioactive">Iconic Assistants</span>
      </h1>
    </div>
  </section>
  <!-- Step 1 -->
  <section class="skyRadioactive">
    <p class="subtitle text-white">Step 1</p>
    <h2 class="text-white">Share Your Needs</h2>
    <p class="text-white my-3">
      Schedule a 15-minute call with our sales reps to tailor our services to
      your business needs. Free yourself to focus on growth. Book your
      consultation with Iconic Assistants today.
    </p>
    <img
      src="@/assets/images/howItWorks/Remote-Talent-Call.png"
      alt="Remote Talent Call"
      width="75%"
      class="rounded-circle elevation-5 my-5" />
    <router-link class="primaryButton elevation-5 my-5" :to="'/contact-us'"
      >Request a Consultation</router-link
    >
  </section>
  <!-- Step 2 -->
  <section>
    <p class="subtitle">Step 2</p>
    <h2 class="text-midnight">Pick The Right Candidate</h2>
    <p class="my-3">
      Our HR team selects top candidates from our database, presenting you with
      a shortlist. Meet them with our representative for a perfect business
      match.
    </p>
    <img
      src="@/assets/images/howItWorks/Remote-Talent-Right-Candidate.png"
      alt="Remote Talent Right Candidate"
      width="75%"
      class="rounded-circle elevation-5 my-5" />
    <router-link class="secondaryButton elevation-5 my-5" :to="'/how-we-hire'"
      >How We Hire</router-link
    >
  </section>
  <!-- Step 3 -->
  <section class="radioactiveSky">
    <p class="subtitle text-white">Step 3</p>
    <h2 class="text-white">Set Up Your VA</h2>
    <p class="text-white my-3">
      A smooth transition for your remote talent: introduce tasks, ensure
      responsibilities alignment, and receive ongoing support for seamless
      onboarding.
    </p>
    <img
      src="@/assets/images/howItWorks/Remote-Talent-Tasks.png"
      alt="Remote Talent Tasks"
      width="75%"
      class="rounded-circle elevation-5 my-5" />
    <router-link class="primaryButton elevation-5 my-5" :to="'/types-of-vas'"
      >Services</router-link
    >
  </section>
  <!-- Step 4 -->
  <section>
    <p class="subtitle">Step 4</p>
    <h2 class="text-midnight">Experience continual support</h2>
    <p class="my-3">
      Iconic Assistants offers unwavering support, addressing inquiries and
      providing guidance whenever needed. You're never alone on your path to
      success.
    </p>
    <img
      src="@/assets/images/howItWorks/Remote-Talent-Support.png"
      alt="Remote Talent Tasks"
      width="75%"
      class="rounded-circle elevation-5 my-5" />
    <router-link class="secondaryButton elevation-5 my-5" :to="'/contact-us'"
      >Contact Us</router-link
    >
  </section>
</template>