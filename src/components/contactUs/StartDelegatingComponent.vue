<template>
  <section class="radioactiveSky">
    <h2 v-motion="scrollBottom" class="text-white mb-5">Start Delegating Now</h2>
    <p class="text-white" v-motion="scrollBottom">
      Delegate efficiently with a remote executive assistant, managing schedules, messages, and gathering essential
      information for better decision-making
    </p>
    <div class="columnAlignCenter ga-15 py-10">
      <div class="columnAlignCenter ga-15">
        <div class="delegating columnAlignCenter ga-4" v-motion="scrollBottom">
          <img class="elevation-5" width="45%" src="@/assets/images/contactUs/Email-Calendar-Management.png"
            alt="Email Calendar Management">
          <p class="titleContact text-white font-weight-bold">Email and Calendar Management</p>
          <p class="text-white">
            Your EA can efficiently handle <span class="font-weight-bold">scheduling</span>, organizing events, managing invitations, and <span class="font-weight-bold">setting reminders</span>, keeping your day organized and productive.
          </p>
        </div>
        <div class="delegating columnAlignCenter ga-4" v-motion="scrollBottom">
          <img class="elevation-5" width="45%" src="@/assets/images/contactUs/Data-Management.png"
            alt="Data Management">
          <p class="titleContact text-white font-weight-bold">Data Management</p>
          <p class="text-white">
            An EA <span class="font-weight-bold">proficiently manages</span> data, including organizing files, inputting data, maintaining databases, and generating reports, ensuring your information is organized and accessible when needed.
          </p>
        </div>
      </div>
      <div class="columnAlignCenter ga-15">
        <div class="delegating columnAlignCenter ga-4" v-motion="scrollBottom">
          <img class="elevation-5" width="45%" src="@/assets/images/contactUs/Document-Preparation.png"
            alt="Document Preparation">
          <p class="titleContact text-white font-weight-bold">Document Preparation</p>
          <p class="text-white">
            A remote EA can handle <span class="font-weight-bold">formatting documents</span>, <span class="font-weight-bold">proofreading</span>, compiling reports, and drafting correspondence, ensuring your documents are polished and <span class="font-weight-bold">professional</span>.
          </p>
        </div>
        <div class="delegating columnAlignCenter ga-4" v-motion="scrollBottom">
          <img class="elevation-5" width="45%" src="@/assets/images/contactUs/Research.png" alt="Research">
          <p class="titleContact text-white font-weight-bold">Research</p>
          <p class="text-white">
            Have your EA handle <span class="font-weight-bold">research tasks</span>, such as gathering information, conducting market research, summarizing findings, and <span class="font-weight-bold">compiling reports</span>, providing you with valuable insights to inform your decisions.
          </p>
        </div>
      </div>
    </div>
    <a class="secondaryButton" href="#hero">Get Started</a>
  </section>
</template>

<script setup>
import { scrollBottom } from "@/motions.js";
</script>

<style>
.titleContact {
  font-size: 1.3rem;
}
</style>