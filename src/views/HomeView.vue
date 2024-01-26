<script setup></script>

<template>
  <section class="landing bg-gray pt-5">
    <div class="columnAlignCenter">
      <div class="hero columnAlignCenter text-center">
        <h1>
          Outsource Anything with
          <span class="text-blueSky">ICONIC ASSISTANCE</span>
        </h1>
        <p class="text-landing text-center">
          Leading the way in remote staffing solutions, the top choice for your
          outsourcing needs.
          <span class="font-weight-bold">Starting at $9.55/Hr.</span>
        </p>
        <div>
          <button
            class="navbarCall bg-radioactive elevation-5"
            @click="calendly">
            Hire ICONIC
          </button>
        </div>
      </div>
    </div>
  </section>
  <section class="ga-3 skyRadioactive">
    <p class="subtitle text-white">Who we are</p>
    <h2 class="text-white">Outsourcing made simple and cost-effective</h2>
    <p class="text-white">
      Welcome to Iconic Assistants where outsourcing meets excellence! At Iconic
      Assistants, we take pride in being a premier outsourcing company dedicated
      to bridging the gap between North American companies and top-tier global
      talent. Our mission is clear: simplify and streamline the hiring process
      for businesses by managing all administrative tasks related to recruitment
      and payroll.
    </p>
    <div class="d-flex justify-space-between ga-5">
      <div class="d-flex flex-column ga-3">
        <div class="d-flex align-center">
          <v-icon
            icon="mdi-chevron-double-right"
            color="white"
            size="x-large"></v-icon>
          <p class="text-white font-weight-bold text-start">Tailored to you</p>
        </div>
        <div class="d-flex align-center">
          <v-icon
            icon="mdi-chevron-double-right"
            color="white"
            size="x-large"></v-icon>
          <p class="text-white font-weight-bold text-start">24/7 Support</p>
        </div>
      </div>
      <div class="d-flex flex-column ga-3">
        <div class="d-flex align-center">
          <v-icon
            icon="mdi-chevron-double-right"
            color="white"
            size="x-large"></v-icon>
          <p class="text-white font-weight-bold text-start">Budget Friendly</p>
        </div>
        <div class="d-flex align-center">
          <v-icon
            icon="mdi-chevron-double-right"
            color="white"
            size="x-large"></v-icon>
          <p class="text-white font-weight-bold text-start">Safe & Secure</p>
        </div>
      </div>
    </div>
    <router-link class="primaryButton elevation-5 mt-5 mb-3" :to="'/services'"
      >What We Do</router-link
    >
  </section>
  <section>
    <p class="subtitle text-radioactive">Why us?</p>
    <h2 class="mb-3">What Makes Us Different</h2>
    <div class="columnAlignCenter text-center ga-10 my-5">
      <div
        v-for="(item, index) in different"
        :key="index"
        class="columnAlignCenter text-center rounded-xl elevation-5 w-75 pa-4 pb-6">
        <p class="differentTitle">{{ item.title }}</p>
        <v-img :src="getImgUrl(item.img)" :alt="item.alt" width="70%"></v-img>
        <div class="columnAlignCenter text-center ga-3">
          <p class="differentSubtitle text-radioactive">{{ item.subtitle }}</p>
          <p>{{ item.body }}</p>
        </div>
      </div>
    </div>
  </section>
  <section class="radioactiveSky">
    <p class="subtitle text-white">Our Service</p>
    <h2 class="text-white">Tailored For Your Success</h2>
    <div class="columnAlignCenter py-3 px-2 ga-5">
      <div
        class="columnAlignCenter text-center text-white w-75 ga-2 mt-10"
        v-for="(item, index) in tailoredServices"
        :key="index">
        <v-img :src="getImgUrl(item.img)" :alt="item.alt" width="75%"></v-img>
        <p class="tailoredTitle">{{ item.title }}</p>
        <p>{{ item.body }}</p>
        <div class="w-100 bg-white mt-10 whiteLine"></div>
      </div>
      <div class="my-5 columnAlignCenter ga-2 w-100">
        <p class="text-white homeH4">Tell us what you need!</p>
        <router-link class="primaryButton elevation-5" :to="'/contact-us'"
          >Contact Us</router-link
        >
      </div>
    </div>
  </section>
  <section class="skyRadioactive">
    <p class="subtitle text-white">How It Works</p>
    <h2 class="text-white">How Our Virtual Assistant Service Works</h2>
    <div class="columnAlignCenter ga-10 mt-5">
      <div
        v-for="(item, index) in steps"
        :key="index"
        class="bg-white w-75 rounded-xl pa-3 pb-6 elevation-5 columnAlignCenter ga-3">
        <p class="text-radioactive stepNumbers">{{ item.number }}</p>
        <v-img :src="getImgUrl(item.img)" :alt="item.alt" width="45%"></v-img>
        <p class="stepTitle">{{ item.title }}</p>
        <p class="stepBody">{{ item.body }}</p>
      </div>
    </div>
  </section>
  <section>
    <p class="subtitle">Cost Comparison</p>
    <h2>Delegate Task At A Fraction Of The Cost</h2>
    <div>TABLA COST COMPARISON</div>
    <div
      class="columnAlignCenter ga-3 text-lightGray CostComparisonAclaration my-5">
      <p>
        <sup class="mr-1">1</sup>Average hourly-rate for 25-34 years old US
        employee according to Forbes.com
      </p>
      <p>
        <sup class="mr-1">2</sup>Fringe Benefits (20%) include, but are not
        limited to, Dental, Health and Life Insurance, Retirement Plans.
      </p>
      <p>
        <sup class="mr-1">3</sup>Overhead Rate (30%) includes, but is not
        limited to, Office space and supplies, equipment, UI insurance, Worker's
        compensation.
      </p>
    </div>
    <router-link :to="'/before-you-start'" class="secondaryButton elevation-5"
      >Before you Start</router-link
    >
  </section>
  <section class="radioactiveSky">
    <p class="subtitle text-white">Industries</p>
    <h2 class="text-white">Who We Serve</h2>
    <div class="d-flex flex-column w-100 ga-5 mt-5">
      <div
        class="d-flex align-center w-75 ml-15"
        v-for="(item, index) in industries"
        :key="index">
        <v-img
          :src="getImgUrl(item.logo)"
          :alt="item.logoAlt"
          width="25%"></v-img>
        <p class="text-white text-start ml-3 w-100">
          {{ item.name.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase()) }}
        </p>
      </div>
      <v-carousel
        :show-arrows="false"
        class="d-flex align-self-center h-75 pt-5 pb-15 w-75 whiteBorder"
        cycle
        :interval="100000000">
        <v-carousel-item v-for="(item, index) in industries" :key="index" cover>
          <router-link
            :to="'/services'"
            class="columnAlignCenter ga-3 text-decoration-none">
            <v-img
              :src="getImgUrl(item.logo)"
              :alt="item.logoAlt"
              width="40%"></v-img>
            <p class="text-white titleIndustries">{{ item.name }}</p>
            <p class="text-white">{{ item.description }}</p>
            <router-link
              :to="'/services'"
              class="text-decoration-none primaryButton mt-3 mb-5"
              >Learn More</router-link
            >
          </router-link>
        </v-carousel-item>
      </v-carousel>
      <div class="my-5 columnAlignCenter ga-4 w-100">
        <p class="text-white homeH4">And Many More!</p>
        <p class="text-white">
          Want to know if our Virtual Assistants are suitable for you?
        </p>
        <router-link
          class="primaryButton elevation-5 mt-3 mb-5"
          :to="'/contact-us'"
          >Request a free consultation</router-link
        >
      </div>
    </div>
  </section>
  <section>
    <p class="subtitle text-radioactive">Pricing</p>
    <h2 class="text-black">Select A Plan Now To Get More Done</h2>
    <div class="columnAlignCenter my-5 rounded-lg pricingContainer">
      <v-tabs class="rounded-t-lg pricingTabs elevation-2" v-model="tab" fixed-tabs bg-color="radioactive">
        <v-tab value="full-time">Full Time</v-tab>
        <v-tab value="part-time">Part Time</v-tab>
        <v-tab value="build-team">Build your team</v-tab>
      </v-tabs>
      <div class="elevation-5 w-75 mt-6 rounded-xl">
        <v-window v-model="tab" class="pb-5">
          <v-window-item value="full-time">
            <div class="px-4 columnAlignCenter text-center ga-1">
              <img class="mt-6" width="20%" src="@/assets/images/pricing/full-time-remote-talent.png" alt="Full Time Remote Talent" />
              <p>Full-Time</p>
              <p class="planPrice">From $9.55/Hr</p>
              <p>Billed monthly.</p>
              <ul class="d-flex flex-column align-start ga-2 mt-2">
                <li class="d-flex">
                  <v-icon
                    icon="mdi-check"
                    color="radioactive"
                    size="x-large">
                  </v-icon>
                  <p class="text-start text-radioactive ml-2">160 Hours per Month of Virtual Assistance</p>
                </li>
                <li class="d-flex align-center" v-for="(item, index) in plans" :key="index">
                  <v-icon
                    icon="mdi-check"
                    color="radioactive"
                    size="x-large">
                  </v-icon>
                  <p class="text-start text-radioactive ml-2">{{item}}</p>
                </li>
              </ul>
            </div>
          </v-window-item>
          <v-window-item value="part-time">
            <div class="px-4 columnAlignCenter text-center ga-1">
              <img class="mt-6" width="20%" src="@/assets/images/pricing/part-time-remote-talent.png" alt="Part Time Remote Talent" />
              <p>Part-Time</p>
              <p class="planPrice">From $10.85/Hr</p>
              <p>Billed monthly.</p>
              <ul class="d-flex flex-column align-start ga-2 mt-2">
                <li class="d-flex">
                  <v-icon
                    icon="mdi-check"
                    color="radioactive"
                    size="x-large">
                  </v-icon>
                  <p class="text-start text-radioactive ml-2">80 Hours per Month of Virtual Assistance</p>
                </li>
                <li class="d-flex align-center" v-for="(item, index) in plans" :key="index">
                  <v-icon
                    icon="mdi-check"
                    color="radioactive"
                    size="x-large">
                  </v-icon>
                  <p class="text-start text-radioactive ml-2">{{item}}</p>
                </li>
              </ul>
            </div>
          </v-window-item>
          <v-window-item value="build-team">
            <div class="px-4 columnAlignCenter text-center ga-1">
              <img class="mt-6" width="20%" src="@/assets/images/pricing/build-your-iconic-team.png" alt="Build Your Iconic Team" />
              <p>Build Your Team</p>
              <p class="planPrice">Get a Quote</p>
              <p>Billed monthly.</p>
              <ul class="d-flex flex-column align-start ga-2 mt-2">
                <li class="d-flex">
                  <v-icon
                    icon="mdi-check"
                    color="radioactive"
                    size="x-large">
                  </v-icon>
                  <p class="text-start text-radioactive ml-2">Custom Team Tailored to your Needs</p>
                </li>
                <li class="d-flex align-center" v-for="(item, index) in plans" :key="index">
                  <v-icon
                    icon="mdi-check"
                    color="radioactive"
                    size="x-large">
                  </v-icon>
                  <p class="text-start text-radioactive ml-2">{{item}}</p>
                </li>
              </ul>
            </div>
          </v-window-item>
        </v-window>
      </div>
      <router-link :to="'/contact-us'" class="secondaryButton mt-8 elevation-5">Get a Free Consultation</router-link>
    </div>
  </section>
  <section class="skyRadioactive">
    <h2 class="text-white mb-5">Frequently Asked Questions</h2>
    <v-expansion-panels class="px-7 d-flex ga-5" variant="accordion">
      <v-expansion-panel
        v-for="(item, index) in faqs"
        :key="index"
        :title="item.title"
        :text="item.text"
        ></v-expansion-panel>
    </v-expansion-panels>
  </section>
</template>

<script>
  import { industries } from "@/cms.js";
  export default {
    data() {
      return {
        different: [
          {
            title: "Top Talent",
            img: "different/Top-Talent-Remote-Talent.png",
            alt: "Top Talent Remote Talent",
            subtitle: "Boost Productivity",
            body: "Access diverse services, from admin tasks to specialized projects, with reliable, experienced virtual assistants.",
          },
          {
            title: "Transparent Fees",
            img: "different/Transparent-Fees-Remote-Talent.png",
            alt: "Transparent Fees Remote Talent",
            subtitle: "Transparent Pricing",
            body: "Our clear pricing outlines costs, no hidden fees. Budget with confidence, no unexpected charges.",
          },
          {
            title: "Customized Packages",
            img: "different/Customized-Solutions-Remote-Talent.png",
            alt: "Customized Solutions Remote Talent",
            subtitle: "Customized Solutions",
            body: "Tailor services to your needs. Scale as requirements change. Optimize spending, paying only for essential assistance.",
          },
        ],
        tailoredServices: [
          {
            img: "tailoredServices/Recruitment-Expertise-Pre-Vetted Proffesionals.png",
            alt: "Recruitment Expertise Pre-Vetted Proffesionals",
            title: "Recruitment",
            body: "We source the finest remote talent from our extensive, pre-vetted candidate pool. Our thorough process ensures a perfect match for your needs within 10 to 20 business days.",
          },
          {
            img: "tailoredServices/Payroll-Experience-Remote-Talent.png",
            alt: "Payroll Experience Remote Talent",
            title: "Payroll",
            body: "Regardless of your country, we handle payroll seamlessly, eliminating taxes, overhead, and fringe costs for a hassle-free experience.",
          },
          {
            img: "tailoredServices/Compliance-Outsource-Remote-Talent.png",
            alt: "Compliance Outsource Remote Talent",
            title: "Analytics & Compliance",
            body: "Benefit from continuous support with our dedicated Client Success Agents. We guide you through onboarding, providing you with metrics and reports ensuring both satisfaction and compliance.",
          },
        ],
        steps: [
          {
            number: "1.",
            img: "icons/Book-Appointment.png",
            alt: "Book an Appointment",
            title: "Book an Appointment",
            body: "Share all the essential details about your business and specify the tasks you'd like to assign.",
          },
          {
            number: "2.",
            img: "icons/Pre-vetted-Recruitment.png",
            alt: "Pre-vetted Recruitment",
            title: "Recruitment",
            body: "We'll identify the top VAs for you and our HR Manager will handle your VA interviews.",
          },
          {
            number: "3.",
            img: "icons/Onboarding-Expertise.png",
            alt: "Onboarding Expertise",
            title: "Onboarding",
            body: "We'll guide you through the onboarding process to ensure your VA integrates smoothly into your business.",
          },
          {
            number: "4.",
            img: "icons/Ongoing-Support.png",
            alt: "Ongoing Support",
            title: "Ongoing Support",
            body: "After selecting your VA, we'll take care of all HR-related matters, including payroll and performance reviews.",
          },
        ],
        industries: industries,
        tab: null,
        plans: [
          "Email and Chat Support",
          "Customer Success Agent",
          "No Lock In Contract",
          "No Replacement and Recriotment Fees",
          "Performance Reviews",
          "Optional Time-Tracking Software",
          "Optional Secure Remote Worker Software"
        ],
        faqs: [
          {
            title: "FAQ1",
            text: "text",
          },
          {
            title: "FAQ2",
            text: "text",
          },
          {
            title: "FAQ3",
            text: "text",
          },
        ],
      };
    },
    methods: {
      calendly() {
        console.log("Calendly Popup");
      },
      getImgUrl(imgName) {
        return new URL(`../assets/images/${imgName}`, import.meta.url).href;
      },
    },
  };
</script>

<style scoped>
  /* Home */
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 5vw 0;
  }

  .landing {
    display: flex;
    justify-content: center;
  }
  .hero {
    width: 90vw;
    gap: 1.5rem;
    margin: 7vh 0;
  }
  .text-landing {
    font-size: 1.3rem;
  }
  .navbarCall {
    font-size: 1.3rem;
    font-weight: 600;
    padding: 3.5vw 10vw;
    border-radius: 50px;
  }
  .homeH4 {
    font-size: 1.2rem;
    font-weight: 600;
  }

  /* Different */

  .differentTitle {
    font-weight: 600;
    font-size: 1.4rem;
  }
  .differentSubtitle {
    font-weight: 600;
    font-size: 1.1rem;
  }

  /* Tailored */

  .tailoredTitle {
    font-size: 1.4rem;
    font-weight: 600;
  }

  .whiteLine {
    height: 1px;
  }

  /* Steps */

  .stepNumbers {
    text-align: start;
    font-weight: 700;
    font-size: 1.5rem;
  }

  .stepTitle {
    font-weight: 600;
    font-size: 1.2rem;
  }

  .stepBody {
    font-size: 1rem;
  }

  /* Cost Comparison */
  .CostComparisonAclaration p {
    font-size: 0.75rem;
  }

  /* Industries */
  .whiteBorder {
    border: 5px solid white;
    border-radius: 20px;
  }
  .titleIndustries {
    font-size: 1.4rem;
    font-weight: 600;
  }

  /* Pricing */
  .pricingTabs{
    font-family: 'Poppins', sans-serif;
  }
  .planPrice{
    font-weight: 700;
    font-size: 1.2rem;
  }
</style>
