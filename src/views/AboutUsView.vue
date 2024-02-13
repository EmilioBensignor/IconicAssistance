<script setup></script>

<template>
  <section class="columnAlignCenter">
    <div class="heroPages columnAlignCenter text-center">
      <h1 class="text-midnight">
        Outsource to
        <span class="text-radioactive">Iconic Virtual Assistants</span>
      </h1>
    </div>
  </section>
  <section class="skyRadioactive columnAlignCenter text-center">
    <p class="subtitle text-white">About Us</p>
    <h2 class="text-white py-1">
      An American Enterprise Dedicated To Assisting You In The Expansion Of Your
      Business
    </h2>
    <div>
      <img
        class="rounded-circle my-5 elevation-5"
        src="@/assets/images/aboutUs/Remote-Talent-Iconic-Assistance.png"
        alt="Remote Talent Iconic Assistance" 
        width="75%" />
    </div>
    <p class="text-white my-3">
      Iconic Assistance, based in the U.S., partners with highly skilled foreign
      professionals to streamline your tasks. We free up your time for strategic
    </p>
    <router-link class="primaryButton elevation-7 mt-3 mb-5" :to="'/contact-us'"
      >Request a Consultation</router-link
    >
  </section>
  <section class="columnAlignCenter text-center">
    <p class="subtitle text-radioactive">How We Work</p>
    <h2 class="text-midnight py-1">Your Prosperity, Our Approach</h2>
    <p class="py-2">
      When collaborating with us, be confident that you'll receive the utmost
      professionalism and expertise. Our remote talent undergo rigorous training
      and possess extensive experience across various domains, such as
      administrative support, marketing, customer service, and beyond.
    </p>
    <div class="prosperityModel columnAlignCenter mt-5 mb-10">
      <img
        class="rounded-t-xl elevation-7"
        src="@/assets/images/aboutUs/Professional-Remote-Talent.png"
        alt="Professional Remote Talent" 
        width="85%" />
      <div
        class="columnAlignCenter aboutModelCaption py-3 bg-white rounded-xl elevation-7">
        <p class="text-radioactive text-center">
          We employ cutting-edge tools and technologies to stay current with the
          latest developments in the industry and adhere to the best practices.
        </p>
      </div>
    </div>
    <router-link class="secondaryButton mb-5" :to="'/how-we-hire'">
      Learn About How We Hire
    </router-link>
    <p class="my-5">Some of the tools we use</p>
    <!-- ARREGLAR LAS TOOLS -->
    <div v-for="(item, index) in tools" :key="index">
      <v-img width="45%" :src="getImgUrl(item.img)" :alt="item.alt"></v-img>
    </div>
  </section>
  <section class="radioactiveSky columnAlignCenter text-center">
    <p class="subtitle text-white">Our Mission</p>
    <h2 class="text-white">
      Elevating Efficiency with Cost-Effective Excellence
    </h2>
    <div>
      <img
        width="75%"
        src="@/assets/images/aboutUs/100-Guarantee-Remote-Talent.png"
        alt="100% Guarantee Remote Talent" />
    </div>
    <ul
      class="w-75 columnAlignCenter text-white text-center ga-5 mb-5">
      <li>Make high-quality outsourcing accessible to all indsutries</li>
      <li>Provide cost-effective solutions without compromising excellence</li>
      <li>Commitment to maintaining the highest quality and performance</li>
      <li>
        Ensure emerging businesses and entrepreneurs can access top-tier support
      </li>
      <li>Support businesses' thrive and expansion</li>
      <li>Invite businesses to join our mission for outsourcing excellence</li>
    </ul>
  </section>
  <section class="columnAlignCenter text-center">
    <p class="subtitle text-radioactive">Comparison Table</p>
    <h2 class="text-midnight">
      <span class="text-radioactive">ICONIC</span> VAs Comparison Chart
    </h2>
    <p class="text-midnight mt-2 mb-5">
      As an entrepreneur or business, finding top talent without overspending
      can be challenging. Our mission is to connect you with cost-effective
      remote talent who save you time and money.
    </p>
    <div class="w-100 columnAlignCenter">
      <div
        v-for="item in comparisonChart"
        :key="item.number"
        class="cardComparison columnAlignCenter text-center rounded-xl elevation-6 my-5">
        <div
          class="w-100 cardComparisonHeader columnAlignCenter rounded-t-xl pa-5">
          <div class="circleNumber bg-blueSky">
            <p class="text-white">{{ item.number }}</p>
          </div>
          <p class="cardComparisonTitle text-white mt-3">{{ item.title }}</p>
        </div>
        <div class="cardComparisonRow bg-blueSky">
          <div class="w-50">
            <img
              width="95%"
              src="@/assets/images/Iconic-Assistance-White-Logo.png"
              alt="Iconic Assistance White Logo" />
          </div>
          <div class="w-50 columnAlignCenter">
            <p class="text-white text-center">{{ item.iconic }}</p>
          </div>
        </div>
        <div class="cardComparisonRow text-midnight bg-grey-lighten-3">
          <div class="w-50 columnAlignCenter">
            <p>In-House Staff / Assistant US-Based</p>
          </div>
          <div class="w-50 columnAlignCenter">
            <p>{{ item.inHouseUS }}</p>
          </div>
        </div>
        <div class="cardComparisonRow text-midnight bg-grey-lighten-3">
          <div class="w-50 columnAlignCenter">
            <p>Virtual Assistant Us-Based</p>
          </div>
          <div class="w-50 columnAlignCenter">
            <p>{{ item.vaUS }}</p>
          </div>
        </div>
        <div class="cardComparisonRow rounded-b-xl text-midnight bg-grey-lighten-3">
          <div class="w-50 columnAlignCenter">
            <p>Virtual Assistant Philippines</p>
          </div>
          <div class="w-50 columnAlignCenter">
            <p class="w-50">{{ item.vaPhilippines }}</p>
          </div>
        </div>
      </div>
      <p class="cancelText mt-3 mb-5">* After a thirty (30) days onboarding period, the customer may choose to change their Virtual Assistant or terminate the service by providing a fifteen (15) days prior written notice to their assigned Customer Success Agent.</p>
    </div>
  </section>
  <section class="columnAlignCenter text-center skyRadioactive">
    <p class="subtitle text-white">How It Works</p>
    <h2 class="text-white">Unlocking efficiency in four simple steps</h2>
    <p class="text-white mt-3">Your business deserves tailored solutions, and we're here to deliver exactly that.</p>
    <div class="columnAlignCenter ga-16 my-5 py-5">
      <div 
        v-for="item in fourSteps" 
        :key="item.number"
        class="columnAlignCenter text-center">
        <div class="circleNumber bg-white mb-3">
          <p class="text-radioactive">{{item.number}}</p>
        </div>
        <p class="fourStepsTitle text-white">{{item.title}}</p>
        <p class="text-white">{{item.description}}</p>
      </div>
    </div>
    <router-link class="primaryButton mt-3 mb-5" :to="'/how-it-works'">Learn How It Works</router-link>
  </section>
</template>

<script>
  import colors from "vuetify/util/colors";
  export default {
    data() {
      return {
        tools: [
          {
            img: "tools/Google-Suit-Logo.png",
            alt: "Google Suit Logo",
          },
          {
            img: "tools/Monday-Logo.png",
            alt: "Monday Logo",
          },
        ],
        comparisonChart: [
          {
            number: 1,
            title: "Time to hire",
            iconic: "7-15 Days",
            inHouseUS: "1-4 months",
            vaUS: "2-3 weeks",
            vaPhilippines: "1-2 months",
          },
          {
            number: 2,
            title: "Recruitment fee",
            iconic: "$0",
            inHouseUS: "$500-5k",
            vaUS: "$0",
            vaPhilippines: "$0",
          },
          {
            number: 3,
            title: "Payroll, taxes & benefits",
            iconic: "NO",
            inHouseUS: "YES",
            vaUS: "May vary",
            vaPhilippines: "NO",
          },
          {
            number: 4,
            title: "Pre-vetted talent",
            iconic: "YES",
            inHouseUS: "NO",
            vaUS: "May vary but usually No",
            vaPhilippines: "May vary",
          },
          {
            number: 5,
            title: "Avg lowest price/hr",
            iconic: "$9.5/hr",
            inHouseUS: "$25/hr",
            vaUS: "$20/hr",
            vaPhilippines: "$3-5/hr",
          },
          {
            number: 6,
            title: "Office space",
            iconic: "NO",
            inHouseUS: "YES",
            vaUS: "NO",
            vaPhilippines: "NO",
          },
          {
            number: 7,
            title: "Quality guarantee",
            iconic: "YES",
            inHouseUS: "NO",
            vaUS: "May vary",
            vaPhilippines: "YES",
          },
          {
            number: 8,
            title: "Flexible schedule",
            iconic: "YES",
            inHouseUS: "NO",
            vaUS: "May vary",
            vaPhilippines: "YES",
          },
          {
            number: 9,
            title: "Certified professionals",
            iconic: "YES",
            inHouseUS: "YES",
            vaUS: "YES",
            vaPhilippines: "NO",
          },
          {
            number: 10,
            title: "Turnover",
            iconic: "Very low",
            inHouseUS: "Low",
            vaUS: "Varies",
            vaPhilippines: "Med-high",
          },
          {
            number: 11,
            title: "Available in your time zone",
            iconic: "YES",
            inHouseUS: "YES",
            vaUS: "YES",
            vaPhilippines: "NO",
          },
          {
            number: 12,
            title: "Success rate",
            iconic: "Very high",
            inHouseUS: "High",
            vaUS: "Medium",
            vaPhilippines: "Low medium",
          },
          {
            number: 13,
            title: "Cancel any time",
            iconic: "YES *",
            inHouseUS: "NO",
            vaUS: "May vary",
            vaPhilippines: "YES",
          },
        ],
        fourSteps: [
          {
            number: 1,
            title: "Book a Meeting",
            description: "Tell us everything we need to know about your business and what tasks you wish to delegate."
          },
          {
            number: 2,
            title: "Recruitment",
            description: "We'll shortlist the best VAs suited to your preferences and our HR Manager will facilitate your VA interviews."
          },
          {
            number: 3,
            title: "Onboarding",
            description: "We'll hold your hand through the onboarding process so your VA can fit seamlessly into your business."
          },
          {
            number: 4,
            title: "Ongoing Support",
            description: "Once you've chosen yout VA, we'll handle all the HR matters including payroll, and performance reviews."
          },
        ],
      };
    },
    methods: {
      getImgUrl(imgName) {
        return `${import.meta.env.BASE_URL}assets/images/${imgName}`;
      },
    },
  };
</script>

<style scoped>
  .prosperityModel {
    position: relative;
  }
  .aboutModelCaption {
    position: static;
    z-index: 1;
    width: 85%;
    border: 1px solid #373ae6;
    margin-top: -5vw;
  }
  .cardComparison {
    width: 85%;
  }
  .cardComparisonHeader {
    background: rgb(55, 58, 230);
    background: linear-gradient(
      180deg,
      rgba(55, 58, 230, 1),
      rgba(12, 184, 241, 1) 100%
    );
  }
  .circleNumber {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border-radius: 50%;
    width: 15vw;
    height: 15vw;
  }
  .circleNumber p {
    font-size: 2rem;
    font-weight: bold;
  }
  .cardComparisonTitle {
    font-size: 1.2rem;
    font-weight: 550;
  }
  .cardComparisonRow {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #E0E0E0;
    padding: 3vw 1vw;
  }
  .cancelText{
    font-size: 0.8rem;
    color: #656875;
  }
  .fourStepsTitle{
    font-size: 1.4rem;
    font-weight: 600;
  }
</style>
