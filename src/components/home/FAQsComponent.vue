<template>
  <section class="skyRadioactive">
    <h2 class="text-white mb-5">Frequently Asked Questions</h2>
    <v-expansion-panels class="px-7 ga-5 faqWrapper" variant="accordion">
      <v-expansion-panel title="How do I get started?">
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
              <b>Strategy Meeting</b> - Within 24 hours of the call, our HR team
              will schedule a virtual meeting to better understand the tasks to
              outsource and your company culture.
            </li>
            <li>
              <b>Virtual Assistant Recruitment</b> - We will start interviewing
              the candidates that meet your requirements and create a shortlist
              of options for you. This process usually takes around 1-2 weeks.
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
              meetings and performance reviews and provide company benefits for
              your Virtual Assistant to ensure their happiness and to get all
              your tasks done the way you want them.
            </li>
          </ol>
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel title="What tasks can I oursource to a VA?">
        <v-expansion-panel-text>
          You can outsource almost anything to a Virtual Assistant as long as
          you’re clear with what, when and how you want things done (we can help
          you with that!). Here are
          <router-link class="FAQLink" :to="'/types-of-vas'"
            >examples of what our Virtual Assistants can do.</router-link
          >
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel
        v-for="(faq, index) in faqs"
        :key="index"
        :title="faq.title"
        :text="faq.text">
      </v-expansion-panel>
      <v-expansion-panel title="Do I need to pay any Taxes?">
        <v-expansion-panel-text>
          <ul class="FAQul pl-2 d-flex flex-column ga-3">
            <li><b>The short answer:</b> No</li>
            <li>
              <b>The long answer:</b> When you start working with a Virtual
              Assistant or Virtual Professional from Iconic Assistants, you are
              not hiring our VAs directly, you are hiring our company’s services
              (a US company), and like with any other service, no taxes are due.
              Our company handles all the paperwork for hiring our VAs as
              foreign independent contractors.
            </li>
            <li>
              In other words, 1) You are not hiring people from the US as
              employees, and 2) You are not hiring VAs in the US, you are hiring
              our services, so you don’t have to worry about any tax forms.
            </li>
          </ul>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </section>
</template>

<script>
  export default {
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
            title: "How do I monitor my VA's work?",
            text: "All our Virtual Assistants are required to send you a periodic work report where they will list all the tasks that they’ve worked on and any issues they’ve encountered. We always encourage our clients to place trust in our Virtual Assistants by measuring performance rather than a time tracking tool unless otherwise specified.",
          },
          {
            title: "What about confidential information?",
            text: "All Virtual Assistants sign a confidentiality agreement, wherein they are not permitted to share or discuss work-related details to people other than their client and work team. Iconic Assistants cannot be held responsible for any unforeseen issues if you choose to share login details, credit card information, or other personal or business data.",
          },
          {
            title: "Can I provide the work hours?",
            text: "Yes, candidates will be informed of your business’s preferred work hours. Iconic Assistants are flexible and can work within the time your business requires.",
          },
          {
            title: "How quickly can I be Up and Running?",
            text: "From the first meeting, it takes approximately 10 to 20 business days to find, interview and qualify the right candidate for you and your business.",
          },
        ],
      };
    },
  };
</script>

<style scoped>
  .faqWrapper {
    text-align: start;
    font-size: 0.9rem;
    font-family: "Poppins", sans-serif;
  }
  .FAQul {
    list-style: none;
  }
  .FAQLink {
    text-decoration: none;
    color: #373ae6;
    font-weight: 600;
  }
</style>
