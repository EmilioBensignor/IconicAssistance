<script setup></script>

<template>
  <section class="columnAlignCenter">
    <div class="heroPages columnAlignCenter text-center">
      <h1 class="text-midnight">
        Hiring Excellence At
        <span class="text-radioactive">Iconic Assistance</span>
      </h1>
    </div>
  </section>
  <section class="columnAlignCenter text-center radioactiveSky">
    <h2 class="text-white">Exceptional Skill, No Compromise</h2>
    <p class="text-white my-3">
      At Iconic Assistance, our strength lies in an exceptional team dedicated
      to driving success and delivering excellence. Join us on our journey
      towards excellence.
    </p>
    <div class="my-5">
      <img
        src="@/assets/images/howWeHire/Exceptional-Skill-Remote-Talent.png"
        alt="Exceptional Skill Remote Talent"
        class="remoteModel rounded-circle elevation-5"
        width="75%" />
    </div>
    <router-link class="primaryButton mt-3 mb-5" :to="'/contact-us'"
      >Contact Us</router-link
    >
  </section>
  <section class="columnAlignCenter text-center mb-5">
    <p class="my-3">Outsource to the top 1%</p>
    <p>
      Access the Top 1% of our VA candidates. Pre-vetted, pre-interviewed, and
      ready to work for you.
    </p>
    <h2 class="text-midnight my-3">Remote Talent Application Process</h2>
    <p class="funnelNumber text-radioactive">100%</p>
    <div
      class="w-75 columnAlignCenter text-center my-3 elevation-5 rounded-xl py-4">
      <img
        src="@/assets/images/howWeHire/Remote-Talent-Applicants.png"
        alt="Remote Talent Applicants"
        width="25%" />
      <h3 class="my-2">All Applicants</h3>
      <p>
        Our recruitment and marketing strategy help us attract top performers
        from around the world.
      </p>
    </div>
    <img
      src="@/assets/images/icons/Blue-Arrow-Down.png"
      alt="Blue Arrow Down"
      class="my-3"
      width="20%" />
    <p class="funnelNumber text-radioactive">50%</p>
    <div
      class="w-75 columnAlignCenter text-center my-3 elevation-5 rounded-xl py-4">
      <img
        src="@/assets/images/howWeHire/Remote-Talent-Qualification.png"
        alt="Remote Talent Qualification"
        width="25%" />
      <h3 class="my-2">Initial VA Qualification</h3>
      <p>
        Our team conducts an initial qualification round to assess applicants.
      </p>
    </div>
    <img
      src="@/assets/images/icons/Blue-Arrow-Down.png"
      alt="Blue Arrow Down"
      class="my-3"
      width="20%" />
    <p class="funnelNumber text-radioactive">20%</p>
    <div
      class="w-75 columnAlignCenter text-center my-3 elevation-5 rounded-xl py-4">
      <img
        src="@/assets/images/howWeHire/Remote-Talent-Review.png"
        alt="Remote Talent Review"
        width="25%" />
      <h3 class="my-2">Completed VA Application</h3>
      <p>
        Every application undergoes a thorough and meticulous review process by
        our team.
      </p>
    </div>
    <img
      src="@/assets/images/icons/Blue-Arrow-Down.png"
      alt="Blue Arrow Down"
      class="my-3"
      width="20%" />
    <p class="funnelNumber text-radioactive">10%</p>
    <div
      class="w-75 columnAlignCenter text-center my-3 elevation-5 rounded-xl py-4">
      <img
        src="@/assets/images/howWeHire/Remote-Talent-Acceptance.png"
        alt="Remote Talent Acceptance"
        width="25%" />
      <h3 class="my-2">Acceptance & Invitation to Join</h3>
      <p>
        Our team reviews every candidate and invites those who qualify to join
        our community.
      </p>
    </div>
    <img
      src="@/assets/images/icons/Blue-Arrow-Down.png"
      alt="Blue Arrow Down"
      class="my-3"
      width="20%" />
    <p class="funnelNumber text-radioactive">5%</p>
    <div
      class="w-75 columnAlignCenter text-center my-3 elevation-5 rounded-xl py-4">
      <img
        src="@/assets/images/howWeHire/Remote-Talent-Assessment.png"
        alt="Remote Talent Assessment"
        width="25%" />
      <h3 class="my-2">Final Profile Assessment</h3>
      <p>
        An initial task is given to each VA to prove their skills, if they fail
        to complete it successfully they’re rejected.
      </p>
    </div>
    <img
      src="@/assets/images/icons/Blue-Arrow-Down.png"
      alt="Blue Arrow Down"
      class="my-3"
      width="20%" />
    <p class="funnelNumber text-radioactive">1%</p>
    <div
      class="w-75 columnAlignCenter text-center my-3 elevation-5 rounded-xl py-4">
      <img
        src="@/assets/images/howWeHire/Top-Remote-Talent.png"
        alt="Top Remote Talent"
        width="25%" />
      <h3 class="my-2">Top Remote Talent</h3>
      <p>
        We hand-pick the top applicants for our clients who hire through our
        Agency.
      </p>
    </div>
  </section>
  <section class="w-100 columnAlignCenter text-center skyRadioactive">
    <div class="candidateCriteria columnAlignCenter rounded-lg my-5 pa-3 pb-6 bg-white elevation-5">
      <h2 class="text-midnight">Candidate Interview Criteria</h2>
      <p class="mt-3 mb-7">
        All candidates will be screened on the following criteria:
      </p>
      <ul class="column text-center ga-3">
        <div 
          v-for="item in candidateCriteria" 
          :key="item"
          class="d-flex ga-2">
          <v-icon
            icon="mdi-chevron-double-right"
            color="radioactive"
            size="x-large"></v-icon>
          <li class="text-start text-midnight">{{ item }}</li>
        </div>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        candidateCriteria: [
          "Experience in role understanding and impact on client's business",
          "Online VA experience with strong communication skills",
          "Motivated to work online and with our company",
          "Home office: focus on internet specs and backup plan",
          "Assessment of home situation, familial dynamics, and personal matters affecting work",
          "Accountability at work: situational questions",
          "Problem-solving skills",
          "Disclosures to the team, e.g., pregnancy, health conditions, etc",
        ],
      };
    },
  };
</script>

<style scoped>
  h3 {
    width: 90%;
    color: #120d40;
  }
  .funnelNumber {
    font-weight: bold;
    font-size: 2.2rem;
  }
  .candidateCriteria{
    width: 85%;
  }
</style>
