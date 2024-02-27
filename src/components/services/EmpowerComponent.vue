<template>
  <section class="radioactiveWaves">
    <div class="w-100 flexCenter ga-15 mt-5">
      <div class="w-75">
        <img
          src="@/assets/images/services/Recruitment-Expertise-Pre-Vetted-Proffesionals.png"
          alt="Recruitment Expertise Pre-Vetted Proffesionals"
          class="shadow-3 mb-n15"
          width="60%" />
        <div
          class="bg-radioactive flexCenter rounded-te-xl rounded-bs-xl elevation-5 mt-n3 pt-15 pa-5">
          <h3 class="text-white mt-2">Payroll:</h3>
          <p class="subtitle font-weight-bold text-white">Seamlessly Global</p>
          <ul class="mx-3 my-5 column ga-5">
            <li>
              <span class="font-weight-bold">Global Reach:</span> Payroll
              services for remote talent worldwide.
            </li>
            <li>
              <span class="font-weight-bold">Cost Efficiency:</span> One
              transparent fee for any number of hires.
            </li>
            <li>
              <span class="font-weight-bold">Peace of Mind:</span> Trustworth
              payroll management.
            </li>
          </ul>
          <v-expansion-panels class="moreInfo mt-3">
            <v-expansion-panel
              class="bg-radioactive mt-3 elevation-3"
              title="More Info"
              text="Leave the complexity of recruitment to our specialized HR team with decades of experience. Our talent pool of pre-vetted remote professionals ensures a swift acquisition process, taking only 10 to 20 business days to secure the perfect match for your needs. Experience success with our dedicated team guiding you through every step.">
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </div>
      <div class="w-75">
        <img
          src="@/assets/images/services/Global-Payroll-Remote-Talent.png"
          alt="Global Payroll Remote Talent"
          class="shadow-3 mb-n15"
          width="60%" />
        <div
          class="bg-radioactive flexCenter rounded-te-xl rounded-bs-xl elevation-5 mt-n3 pt-15 pa-5">
          <h3 class="text-white mt-2">Support and Compliance:</h3>
          <p class="subtitle font-weight-bold text-white">
            Your Success, Our Priority
          </p>
          <ul class="mt-5 column ga-3">
            <li>
              <span class="font-weight-bold">Dedicated Support:</span> Client
              Success Agents for personalized assistance.
            </li>
            <li>
              <span class="font-weight-bold">Compliance Assurance:</span>
              Meeting regulatory requirements.
            </li>
            <li>
              <span class="font-weight-bold">Flexibility:</span> Seamless talent
              changes without extra fees.
            </li>
          </ul>
          <v-expansion-panels class="moreInfo mt-3">
            <v-expansion-panel
              class="bg-radioactive mt-3 elevation-3"
              title="More Info"
              text="Our payroll services transcend borders. No matter where your remote talent is located or how many individuals you've hired, we charge a single, transparent fee. Simplify your financial operations and focus on your business while we handle payroll with precision.">
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </div>
      <div class="w-75">
        <img
          src="@/assets/images/services/Compliance-Outsource-Remote-Talent.png"
          alt="Compliance Outsource Remote Talent"
          class="shadow-3 mb-n15"
          width="60%" />
        <div
          class="bg-radioactive flexCenter rounded-te-xl rounded-bs-xl elevation-5 mt-n3 pt-15 pa-5">
          <h3 class="text-white mt-2">Recruitment:</h3>
          <p class="subtitle font-weight-bold text-white">
            The Power of Expertise
          </p>
          <ul class="mt-5 column ga-3">
            <li>
              <span class="font-weight-bold">Efficiency:</span> Streamlined
              recruitment process.
            </li>
            <li>
              <span class="font-weight-bold">Thoroughness:</span> Background
              checks and <span class="font-weight-bold">PDA Assessment.</span>
            </li>
            <li>
              <span class="font-weight-bold">Rapid Acquisition:</span> 10 to 20
              business days for the perfect match.
            </li>
          </ul>
          <v-expansion-panels class="moreInfo mt-3">
            <v-expansion-panel
              class="bg-radioactive mt-3 elevation-3"
              title="More Info"
              text="Ensuring a smooth relationship between you and your remote talent is our priority. Each client is assigned a dedicated Client Success Agent, fostering communication with periodic performance reports, and addressing concerns promptly. We not only guarantee compliance but also facilitate talent changes without additional fees, providing flexibility for your evolving needs.">
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </div>
    </div>
    <p class="font-weight-bold mt-10">
      Partner with us for a transformative experience.
    </p>
    <router-link class="w-50 secondaryButton my-3 elevation-5" :to="'/contact-us'"
      >Contact Us</router-link
    >
  </section>
</template>

<style scoped>
  .moreInfo {
    width: 85%;
  }
</style>
