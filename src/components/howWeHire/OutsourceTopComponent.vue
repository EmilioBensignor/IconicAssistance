<template>
  <section class="skyBlueWaves">
    <p v-motion="scrollBottom" class="my-3 outsource">
      Outsource to the top 1%
    </p>
    <p v-motion="scrollBottom" class="w-75 subtitle">
      Access the <span class="font-weight-bold">Top 1%</span> of our VA
      candidates. Pre-vetted, pre-interviewed, and ready to work for you.
    </p>
    <h2 v-motion="scrollBottom" class="text-midnight my-3">
      Remote Talent Application Process
    </h2>
    <div class="funnelWrapper columnAlignCenter">
      <p v-motion="scrollBottom" class="funnelNumber text-radioactive">100%</p>
      <div
        v-motion="scrollBottom"
        class="w-75 funnel flexCenter my-3 elevation-5 rounded-xl py-5">
        <div class="funnelBlock allCenter">
          <div class="block100 allCenter bg-radioactive rounded-xl elevation-3">
            <p class="text-white font-weight-bold">100%</p>
          </div>
        </div>
        <div class="funnelBody columnAlignCenter">
          <img
            src="@/assets/images/howWeHire/Remote-Talent-Applicants.png"
            alt="Remote Talent Applicants"
            width="25%" />
          <div class="columnAlignCenter">
            <h3 class="my-2">All Applicants</h3>
            <p>
              Our recruitment and marketing strategy help us attract top
              performers from around the world.
            </p>
          </div>
        </div>
      </div>
      <img
        src="@/assets/images/misc/Blue-Arrow-Down.png"
        alt="Blue Arrow Down"
        class="arrow my-3"
        v-motion="scrollBottom"
        width="20%" />
      <p v-motion="scrollBottom" class="funnelNumber text-radioactive">50%</p>
      <div
        v-motion="scrollBottom"
        class="w-75 funnel flexCenter my-3 elevation-5 rounded-xl py-5">
        <div class="funnelBlock allCenter">
          <div class="block50 allCenter bg-blueSky rounded-xl elevation-3">
            <p class="text-white font-weight-bold">50%</p>
          </div>
        </div>
        <div class="funnelBody columnAlignCenter">
          <img
            src="@/assets/images/howWeHire/Remote-Talent-Qualification.png"
            alt="Remote Talent Qualification"
            width="25%" />
          <div class="columnAlignCenter">
            <h3 class="my-2">Initial VA Qualification</h3>
            <p>
              Our team conducts an initial qualification round to assess
              applicants.
            </p>
          </div>
        </div>
      </div>
      <img
        src="@/assets/images/misc/Blue-Arrow-Down.png"
        alt="Blue Arrow Down"
        class="arrow my-3"
        v-motion="scrollBottom"
        width="20%" />
      <p v-motion="scrollBottom" class="funnelNumber text-radioactive">20%</p>
      <div
        v-motion="scrollBottom"
        class="w-75 funnel flexCenter my-3 elevation-5 rounded-xl py-5">
        <div class="funnelBlock allCenter">
          <div class="block20 allCenter bg-radioactive rounded-xl elevation-3">
            <p class="text-white font-weight-bold">20%</p>
          </div>
        </div>
        <div class="funnelBody columnAlignCenter">
          <img
            src="@/assets/images/howWeHire/Remote-Talent-Review.png"
            alt="Remote Talent Review"
            width="25%" />
          <div class="columnAlignCenter">
            <h3 class="my-2">Completed VA Application</h3>
            <p>
              Every application undergoes a thorough and meticulous review
              process by our team.
            </p>
          </div>
        </div>
      </div>
      <img
        src="@/assets/images/misc/Blue-Arrow-Down.png"
        alt="Blue Arrow Down"
        class="arrow my-3"
        v-motion="scrollBottom"
        width="20%" />
      <p v-motion="scrollBottom" class="funnelNumber text-radioactive">10%</p>
      <div
        v-motion="scrollBottom"
        class="w-75 funnel flexCenter my-3 elevation-5 rounded-xl py-5">
        <div class="funnelBlock allCenter">
          <div class="block10 allCenter bg-blueSky rounded-xl elevation-3">
            <p class="text-white font-weight-bold">10%</p>
          </div>
        </div>
        <div class="funnelBody columnAlignCenter">
          <img
            src="@/assets/images/howWeHire/Remote-Talent-Acceptance.png"
            alt="Remote Talent Acceptance"
            width="25%" />
          <div class="columnAlignCenter">
            <h3 class="my-2">Acceptance & Invitation to Join</h3>
            <p>
              Our team reviews every candidate and invites those who qualify to
              join our community.
            </p>
          </div>
        </div>
      </div>
      <img
        src="@/assets/images/misc/Blue-Arrow-Down.png"
        alt="Blue Arrow Down"
        class="arrow my-3"
        v-motion="scrollBottom"
        width="20%" />
      <p v-motion="scrollBottom" class="funnelNumber text-radioactive">5%</p>
      <div
        v-motion="scrollBottom"
        class="w-75 funnel flexCenter my-3 elevation-5 rounded-xl py-5">
        <div class="funnelBlock allCenter">
          <div class="block5 allCenter bg-radioactive rounded-xl elevation-3">
            <p class="text-white font-weight-bold">5%</p>
          </div>
        </div>
        <div class="funnelBody columnAlignCenter">
          <img
            src="@/assets/images/howWeHire/Remote-Talent-Assessment.png"
            alt="Remote Talent Assessment"
            width="25%" />
          <div class="columnAlignCenter">
            <h3 class="my-2">Final Profile Assessment</h3>
            <p>
              An initial task is given to each VA to prove their skills, if they
              fail to complete it successfully they’re rejected.
            </p>
          </div>
        </div>
      </div>
      <img
        src="@/assets/images/misc/Blue-Arrow-Down.png"
        alt="Blue Arrow Down"
        class="arrow my-3"
        v-motion="scrollBottom"
        width="20%" />
      <p v-motion="scrollBottom" class="funnelNumber text-radioactive">1%</p>
      <div
        v-motion="scrollBottom"
        class="w-75 funnel flexCenter my-3 elevation-5 rounded-xl py-5">
        <div
          class="funnelBlock allCenter">
          <div class="block1 allCenter bg-blueSky rounded-xl elevation-3">
            <p class="text-white font-weight-bold">1%</p>
          </div>
        </div>
        <div class="funnelBody columnAlignCenter">
          <img
            src="@/assets/images/howWeHire/Top-Remote-Talent.png"
            alt="Top Remote Talent"
            width="25%" />
          <div class="columnAlignCenter">
            <h3 class="my-2">Top Remote Talent</h3>
            <p>
              We hand-pick the top applicants for our clients who hire through
              our Agency.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { scrollBottom } from "@/motions.js";
</script>

<style scoped>
  .funnelNumber {
    font-weight: bold;
    font-size: 2.2rem;
  }
  .funnelBlock{
    display: none;
  }

  /* SM */
  @media only screen and (min-width: 480px) {
    .funnelNumber {
      font-size: 2.4rem;
    }
    .funnel {
      width: 50% !important;
    }
    .arrow {
      width: 12%;
    }
  }

  /* MD */
  @media only screen and (min-width: 769px) {
    .funnelNumber {
      font-size: 2.6rem;
    }
    .arrow {
      width: 10%;
    }
  }

  /* Desktop */
  @media only screen and (min-width: 1080px) {
    .funnelWrapper{
      gap: 1.5vw;
      margin: 3vw 0;
    }
    .outsource {
      font-size: 1.2rem;
    }
    .arrow,
    .funnelNumber {
      display: none;
    }
    .funnel {
      width: 75% !important;
      display: flex;
      flex-direction: row;
      box-shadow: none !important;
      gap: 5vw;
      padding: 0 !important;
      margin: 0 !important;
    }
    .funnel h3 {
      width: 100% !important;
      font-size: 1.3rem;
    }
    .funnelBlock {
      display: flex;
      width: 45%;
      height: 18vh;
    }
    .block100,
    .block50,
    .block20,
    .block10,
    .block5,
    .block1 {
      height: 100%;
    }
    .block100 {
      width: 100%;
    }
    .block50 {
      width: 90%;
    }
    .block20{
      width: 80%;
    }
    .block10{
      width: 70%;
    }
    .block5{
      width: 60%;
    }
    .block1{
      width: 50%;
    }
    .funnelBlock p {
      font-size: 2.5rem;
    }
    .funnelBody {
      width: 60%;
      display: flex;
      flex-direction: row;
      gap: 3vw;
      padding: 1vw 0;
    }
    .funnelBody img {
      width: 25%;
    }
    .funnelBody div {
      align-items: flex-start;
      text-align: start;
    }
    .funnelBody div p {
      width: 100%;
    }
  }
</style>
