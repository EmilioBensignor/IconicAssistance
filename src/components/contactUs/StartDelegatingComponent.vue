<template>
  <section class="radioactiveSky">
    <div class="content">
      <div class="columnAlignCenter">
        <h2 v-motion="scrollBottom" class="text-white mb-5">Start Delegating Now</h2>
        <p class="explication text-white mb-4" v-motion="scrollBottom">
          Delegate efficiently with a remote executive assistant, managing schedules, messages, and gathering essential
          information for better decision-making
        </p>
        <div class="delegatingWrapper columnAlignCenter ga-15 py-10">
          <div class="twoDelegating columnAlignCenter ga-15">
            <div class="delegating columnAlignCenter ga-4" v-motion="scrollBottom">
              <img class="elevation-5" width="40%" src="@/assets/images/contactUs/Email-Calendar-Management.png"
                alt="Email Calendar Management">
              <p class="titleContact text-white font-weight-bold">Email and Calendar Management</p>
              <p class="text-white">
                Your EA can efficiently handle <span class="font-weight-bold">scheduling</span>, organizing events,
                managing
                invitations, and <span class="font-weight-bold">setting reminders</span>, keeping your day organized and
                productive.
              </p>
            </div>
            <div class="delegating columnAlignCenter ga-4" v-motion="scrollBottom">
              <img class="elevation-5" width="40%" src="@/assets/images/contactUs/Data-Management.png"
                alt="Data Management">
              <p class="titleContact text-white font-weight-bold">Data Management</p>
              <p class="text-white">
                An EA <span class="font-weight-bold">proficiently manages</span> data, including organizing files,
                inputting
                data, maintaining databases, and generating reports, ensuring your information is organized and
                accessible
                when needed.
              </p>
            </div>
          </div>
          <div class="twoDelegating columnAlignCenter ga-15">
            <div class="delegating columnAlignCenter ga-4" v-motion="scrollBottom">
              <img class="elevation-5" width="40%" src="@/assets/images/contactUs/Document-Preparation.png"
                alt="Document Preparation">
              <p class="titleContact text-white font-weight-bold">Document Preparation</p>
              <p class="text-white">
                A remote EA can handle <span class="font-weight-bold">formatting documents</span>, <span
                  class="font-weight-bold">proofreading</span>, compiling reports, and drafting correspondence, ensuring
                your documents are polished and <span class="font-weight-bold">professional</span>.
              </p>
            </div>
            <div class="delegating columnAlignCenter ga-4" v-motion="scrollBottom">
              <img class="elevation-5" width="40%" src="@/assets/images/contactUs/Research.png" alt="Research">
              <p class="titleContact text-white font-weight-bold">Research</p>
              <p class="text-white">
                Have your EA handle <span class="font-weight-bold">research tasks</span>, such as gathering information,
                conducting market research, summarizing findings, and <span class="font-weight-bold">compiling
                  reports</span>, providing you with valuable insights to inform your decisions.
              </p>
            </div>
          </div>
        </div>
        <a class="secondaryButton elevation-3 mt-4 px-10 py-5" href="#hero">Get Started</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { scrollBottom } from "@/motions.js";
</script>

<style>
.titleContact {
  width: 100% !important;
  font-size: 1.3rem;
}

.explication {
  width: 90%;
}

.delegating {
  width: 85%;
}

/* SM */
@media only screen and (min-width: 480px) {
  .delegating {
    width: 75%;
  }

  .titleContact {
    font-size: 1.4rem;
  }

  .delegating img {
    width: 30%;
  }
}

@media only screen and (min-width: 600px) {
  .titleContact {
    font-size: 1.55rem;
  }

  .delegating img {
    width: 25%;
  }
}

/* MD */
@media only screen and (min-width: 769px) {
  .explication {
    width: 85%;
  }

  .titleContact {
    font-size: 1.65rem;
  }

  .delegating img {
    width: 20%;
  }
}

/* LG */
@media only screen and (min-width: 992px) {
  .explication {
    width: 80%;
  }

  .titleContact {
    font-size: 1.75rem;
  }

  .delegating img {
    width: 15%;
  }
}

/* Desktop */
@media only screen and (min-width: 1080px) {
  .delegatingWrapper {
    flex-direction: row;
  }

  .delegating {
    align-items: flex-start;
    text-align: start;
  }

  .titleContact {
    font-size: 1.7rem;
  }

  .delegating img {
    width: 20%;
  }

  .delegating p {
    width: 100% !important;
  }
}

@media only screen and (min-width: 1280px) {
  .titleContact {
    font-size: 1.8rem;
  }

  .delegating img {
    width: 15%;
  }
}

@media only screen and (min-width: 1600px) {
  .titleContact {
    font-size: 1.9rem;
  }

  .delegating img {
    width: 12.5%;
  }
}

@media only screen and (min-width: 1920px) {
  .titleContact {
    font-size: 2rem;
  }

  .delegating img {
    width: 10%;
  }
}
</style>