<template>
  <HeaderPagesComponent />
  <section class="heroPagesWave columnAlignCenter">
    <div class="heroPages flexCenter">
      <h1 v-motion="scrollBottom" class="text-midnight">
        Contact Us For a Free Demo
      </h1>
    </div>
  </section>
  <section class="skyRadioactive">
    <div class="columnAlignCenter">
      <h2 v-motion="scrollBottom" class="text-white">Book a Free Call</h2>
      <!-- <div
        class="calendly-inline-widget"
        data-url="https://calendly.com/iconicassistants/iconic-assistants-discovery-meeting?hide_event_type_details=1"
        style="min-width: 320px; height: 700px"></div> -->
    </div>
    <div class="columnAlignCenter">
      <h2 v-motion="scrollBottom" class="text-white">Get in Touch</h2>
      <!-- Formulario -->
    </div>
  </section>
  <section class="radioactiveWaves">
    <img
      src="@/assets/images/contactUs/Contact-Us-Remote-Talent.png"
      alt="Contact Us Remote Talent"
      class="rounded-circle elevation-5 my-5"
      v-motion="scrollBottom"
      width="75%" />
    <div class="w-75 columnAlignCenter ga-5 my-5">
      <v-expansion-panels v-motion="scrollBottom" class="faqWrapper">
        <v-expansion-panel class="elevation-4" title="How do I get started?">
          <v-expansion-panel-text>
            <ol class="pl-3 columnAlignCenter ga-3">
              <li>
                <b>Discovery Call</b> -
                <router-link class="FAQLink" :to="'/contact-us'"
                  >Book a FREE consultation</router-link
                >
                with our Outsourcing Specialist and give us an overview of
                everything you’re looking for in a VA.
              </li>
              <li>
                <b>Strategy Meeting</b> - Within 24 hours of the call, our HR
                team will schedule a virtual meeting to better understand the
                tasks to outsource and your company culture.
              </li>
              <li>
                <b>Virtual Assistant Recruitment</b> - We will start
                interviewing the candidates that meet your requirements and
                create a shortlist of options for you. This process usually
                takes around 1-2 weeks.
              </li>
              <li>
                <b>Hiring & Onboarding</b> - When you’re ready, we’ll hire the
                Virtual Assistant and you will start working with them, with the
                support of your Customer Success Agent to assist you in the
                initial ‘nesting period’ to avoid any miscommunications or
                misunderstandings.
              </li>
              <li>
                <b>Regular check-ins</b> - Our team will also have regular
                meetings and performance reviews and provide company benefits
                for your Virtual Assistant to ensure their happiness and to get
                all your tasks done the way you want them.
              </li>
            </ol>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
      <v-expansion-panels
        v-for="(item, index) in faqs"
        :key="index"
        v-motion="scrollBottom"
        class="faqWrapper">
        <v-expansion-panel
          class="elevation-4"
          :title="item.title"
          :text="item.text">
        </v-expansion-panel>
      </v-expansion-panels>
      <v-expansion-panels v-motion="scrollBottom" class="faqWrapper">
        <v-expansion-panel
          class="elevation-4"
          title="Do I need to pay any Taxes?">
          <v-expansion-panel-text>
            <ul class="pl-2 d-flex flex-column ga-3">
              <li><b>The short answer:</b> No</li>
              <li>
                <b>The long answer:</b> When you start working with a Virtual
                Assistant or Virtual Professional from Iconic Assistants, you
                are not hiring our VAs directly, you are hiring our company’s
                services (a US company), and like with any other service, no
                taxes are due. Our company handles all the paperwork for hiring
                our VAs as foreign independent contractors.
              </li>
              <li>
                In other words, 1) You are not hiring people from the US as
                employees, and 2) You are not hiring VAs in the US, you are
                hiring our services, so you don’t have to worry about any tax
                forms.
              </li>
            </ul>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </section>
</template>

<script>
  import HeaderPagesComponent from "@/components/HeaderPagesComponent.vue";

  export default {
    components: {
      HeaderPagesComponent,
    },
    data() {
      return {
        faqs: [
          {
            title: "How do I pay Iconic Assitants",
            text: "You’ll pay your virtual assistant through Iconic Assistants. You’ll pay us, a US-based company, and we will pay the Virtual Assistant. For US-based clients, we accept Credit Cards and ACH payments and for international clients, we only accept Credit Cards (transactions fees may apply).",
          },
          {
            title: "Do you offer a Guarantee?",
            text: "Yes, we offer a Satisfaction Guarantee. If you’re not happy with your Virtual Assistant by the end of the first 160 hours of work, we’ll replace your current assistant with a new VA at no additional cost to you.",
          },
          {
            title: "Can I hire a Part-Time VA?",
            text: "Yes, we can help you outsource part-time virtual assistant for your business or specific campaigns. Our plans include either part-time (80 hours per week) or full-time (160 hours per week) VA's.",
          },
          {
            title: "How can I sign up to be a VA?",
            text: "To work as a virtual assistant and be a member of Iconic Assistants, you’ll first need to complete our online application.",
          },
        ],
      };
    },
  };
</script>

<script setup>
  import { scrollBottom } from "@/motions.js";
</script>
