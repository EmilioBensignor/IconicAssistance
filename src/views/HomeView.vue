<script setup>
</script>

<template>
  <section class="landing bg-gray pt-5">
    <div class="d-flex justify-center">
      <div class="hero text-center">
        <h1>Outsource Anything with <span class="text-blueSky">ICONIC ASSISTANCE</span></h1>
        <p class="text-landing">Leading the way in remote staffing solutions, the top choice for your outsourcing needs. <span class="font-weight-bold">Starting at $9.55/Hr.</span></p>
        <div>
          <button class="navbarCall bg-radioactive" @click="calendly">Hire ICONIC</button>
        </div>
      </div>
    </div>
  </section>
  <section class="columnAlignCenter text-center py-5 ga-3 skyRadioactive">
    <p class="subtitle text-white">Who we are</p>
    <h2 class="text-white">Outsourcing made simple and cost-effective</h2>
    <p class="text-white">Welcome to Iconic Assistants where outsourcing meets excellence! At Iconic Assistants, we take pride in being a premier outsourcing company dedicated to bridging the gap between North American companies and top-tier global talent. Our mission is clear: simplify and streamline the hiring process for businesses by managing all administrative tasks related to recruitment and payroll.</p>
    <router-link class="primaryButton" :to="'/services'">What We Do</router-link>
  </section>
  <section class="columnAlignCenter text-center">
    <p class="subtitle">Why us?</p>
    <h2>What Makes Us Different</h2>
    <div class="columnAlignCenter ga-5">
      <div class="different">
        <p class="differentTitle">Top Talent</p>
        <img src="" alt="">
        <div>
          <p class="differentSubtitle text-radioactive">Boost Productivity</p>
          <p>Access diverse services, from admin tasks to specialized projects, with reliable, experienced virtual assistants.</p>
        </div>
      </div>
      <div class="different">
        <p class="differentTitle">Transparent Fees</p>
        <img src="" alt="">
        <div>
          <p class="differentSubtitle text-radioactive">Transparent Pricing</p>
          <p>Our clear pricing outlines costs, no hidden fees. Budget with confidence, no unexpected charges.</p>
        </div>
      </div>
      <div class="different">
        <p class="differentTitle">Customized Packages</p>
        <img src="" alt="">
        <div>
          <p class="differentSubtitle text-radioactive">Customized Solutions</p>
          <p>Tailor services to your needs. Scale as requirements change. Optimize spending, paying only for essential assistance.</p>
        </div>
      </div>
    </div>
  </section>
  <section class="columnAlignCenter text-center radioactiveSky">
    <p class="subtitle text-white">Our Service</p>
    <h2 class="text-white">Tailored For Yout Success</h2>
    <div class="columnAlignCenter py-3 px-2 ga-5">
      <div class="columnAlignCenter text-white">
        <img src="" alt="">
        <p class="tailoredTitle">Recruitment</p>
        <p>We source the finest remote talent from our extensive, pre-vetted candidate pool. Our thorough process ensures a perfect match for your needs within 10 to 20 business days.</p>
      </div>
      <div class="columnAlignCenter text-white">
        <img src="" alt="">
        <p class="tailoredTitle">Payroll</p>
        <p>Regardless of your country, we handle payroll seamlessly, eliminating taxes, overhead, and fringe costs for a hassle-free experience.</p>
      </div>
      <div class="columnAlignCenter text-white">
        <img src="" alt="">
        <p class="tailoredTitle">Analytics & Compliance</p>
        <p>Benefit from continuous support with our dedicated Client Success Agents. We guide you through onboarding, providing you with metrics and reports ensuring both satisfaction and compliance.</p>
      </div>
    </div>
    <div class="mt-3 columnAlignCenter ga-2">
      <p class="text-white tellUs">Tell us what you need!</p>
      <router-link class="primaryButton" :to="'/contact-us'">Contact Us</router-link>
    </div>
  </section>
  <section class="columnAlignCenter text-center skyRadioactive">
    <p class="subtitle text-white">How It Works</p>
    <h2 class="text-white">How Our Virtual Assistant Service Works</h2>
  </section>
</template>

<script>
export default {
  methods: {
    calendly(){
      console.log("Calendly Popup");
    }
  }
}
</script>

<style scoped>

/* Home */

.landing{
  display: flex;
  justify-content: center;
}
.hero{
  width: 90vw;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 7vh 0;
}
.text-landing{
  font-size: 1.3rem;
}
.navbarCall{
  font-size: 1.3rem;
  font-weight: 600;
  padding: 3.5vw 10vw;
  border-radius: 50px;
}

/* Different */

.different{
  width: 70%;
  border-radius: 20px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  padding: 5vw 5vw 3vw 5vw;
}
.differentTitle{
  font-size: 1.4rem;
  font-weight: 600;
}
.differentSubtitle{
  font-size: 1.1rem;
  font-weight: 600;
}

/* Tailored */

.tailoredTitle{
  font-size: 1.4rem;
  font-weight: 600;
}

.tellUs{
  font-size: 1.2rem;
  font-weight: 600;
}
</style>