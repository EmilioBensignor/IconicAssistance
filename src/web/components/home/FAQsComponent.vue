<template>
  <section class="skyRadioactive">
    <h2 v-motion="scrollBottom" class="text-white mb-5">
      Frequently Asked Questions
    </h2>
    <div class="content faqHome columnAlignCenter ga-4">
      <v-expansion-panels
        v-motion="scrollBottom"
        class="faqWrapper d-none d-sm-flex">
        <v-expansion-panel
          class="elevation-4"
          title="Why is Iconic Assistants considered one of the best Ousourcing companies?">
          <v-expansion-panel-text>
            At <span class="font-weight-bold">Iconic Assistants</span>, we're
            more than just an outsourcing company; we're your dedicated ally in
            achieving your business goals. With a team of experts committed to
            quality, affordability, and customization, we offer a wide range of
            services tailored to your unique needs. Our client-centric approach,
            open communication, and unwavering dedication set us apart. Choose
            Iconic Assistants, and experience excellence, innovation, and trust
            in every partnership. Elevate your business. Your success is our
            priority
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
      <div class="leftRight columnAlignCenter ga-4">
        <!-- Left -->
        <div class="left columnAlignCenter ga-4">
          <v-expansion-panels v-motion="scrollBottom" class="faqWrapper">
            <v-expansion-panel
              class="elevation-4"
              title="How do I get started?">
              <v-expansion-panel-text>
                <ol class="pl-3 columnAlignCenter ga-3">
                  <li>
                    <b>Discovery Call</b> -
                    <router-link class="FAQLink" :to="'/contact-us'"
                      >Book a FREE consultation</router-link
                    >
                    with our Outsourcing Specialist and give us an overview of
                    everything you're looking for in a EA.
                  </li>
                  <li>
                    <b>Executive Assistant Recruitment</b> - We will start interviewing the candidates that meet your requirements and notify you when we find the perfect match. This process usually takes around 5 to 7 days.
                  </li>
                  <li>
                    <b>Hiring & Onboarding</b> - When you're ready, we'll hire
                    the Executive Assistant and you will start working with them,
                    with the support of your Customer Success Agent to assist
                    you in the initial 'nesting period' to avoid any
                    miscommunications or misunderstandings.
                  </li>
                  <li>
                    <b>Regular check-ins</b> - Our team will also have regular
                    meetings and performance reviews and provide company
                    benefits for your Executive Assistant to ensure their
                    happiness and to get all your tasks done the way you want
                    them.
                  </li>
                </ol>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
          <v-expansion-panels
            v-for="(item, index) in faqsLeft"
            v-motion="scrollBottom"
            :key="index"
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
                    <b>The long answer:</b> When you start working with a
                    Executive Assistant or Executive Professional from Iconic
                    Assistants, you are not hiring our EAs directly, you are
                    hiring our company's services (a US company), and like with
                    any other service, no taxes are due. Our company handles all
                    the paperwork for hiring our EAs as foreign independent
                    contractors.
                  </li>
                  <li>
                    In other words, 1) You are not hiring people from the US as
                    employees, and 2) You are not hiring EAs in the US, you are
                    hiring our services, so you don't have to worry about any
                    tax forms.
                  </li>
                </ul>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
        <!-- Right -->
        <div class="right columnAlignCenter ga-4">
          <v-expansion-panels v-motion="scrollBottom" class="faqWrapper">
            <v-expansion-panel
              class="elevation-4"
              title="Do I need a Executive Assistant">
              <v-expansion-panel-text>
                <p>
                  Sometimes, managing the demands of work and life can become
                  overwhelming. It might be time to consider a executive assistant
                  if you find yourself:
                </p>
                <ol class="my-3 pl-5">
                  <li>
                    <span class="font-weight-bold">Overloaded</span>— If you're
                    juggling too many tasks and struggling to keep up with your
                    core responsibilities.
                  </li>
                  <li>
                    <span class="font-weight-bold">Time - Strapped</span> — When
                    you don't have time for strategic planning and growth due to
                    constant administrative tasks.
                  </li>
                  <li>
                    <span class="font-weight-bold">Feeling Stressed</span> — If
                    you're frequently stressed or anxious about looming
                    deadlines and mounting to-do lists.
                  </li>
                  <li>
                    <span class="font-weight-bold">Missing Opportunities</span>—
                    When you're missing out on opportunities because you can't
                    manage everything effectively.
                  </li>
                  <li>
                    <span class="font-weight-bold">Productivity Decline</span>
                    — If your productivity and efficiency are suffering due to
                    an excess of small, time-consuming tasks.
                  </li>
                </ol>
                <p>
                  If you resonate with any of these situations, it might be the
                  perfect time to consider hiring a executive assistant. They can
                  help you regain control, reduce stress, and refocus on what
                  truly matters for your success.
                </p>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
          <v-expansion-panels v-motion="scrollBottom" class="faqWrapper">
            <v-expansion-panel
              class="elevation-4"
              title="What tasks can I oursource to a EA?">
              <v-expansion-panel-text>
                You can outsource almost anything to a Executive Assistant as long
                as you’re clear with what, when and how you want things done (we
                can help you with that!). Here are
                <router-link class="FAQLink" :to="'/types-of-eas'"
                  >examples of what our Executive Assistants can do.</router-link
                >
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
          <v-expansion-panels
            v-for="(item, index) in faqsRight"
            v-motion="scrollBottom"
            :key="index"
            class="faqWrapper">
            <v-expansion-panel
              class="elevation-4"
              :title="item.title"
              :text="item.text">
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        faqsLeft: [
          {
            title: "How do I pay Iconic Assitants",
            text: "You’ll pay your executive assistant through Iconic Assistants. You’ll pay us, a US-based company, and we will pay the Executive Assistant. For US-based clients, we accept Credit Cards and ACH payments and for international clients, we only accept Credit Cards (transactions fees may apply).",
          },
          {
            title: "Do you offer a Guarantee?",
            text: "Yes, we offer a Satisfaction Guarantee. If you’re not happy with your Executive Assistant by the end of the first 160 hours of work, we’ll replace your current assistant with a new EA at no additional cost to you.",
          },
          {
            title: "Can I hire a Part-Time EA?",
            text: "Yes, we can help you outsource part-time executive assistant for your business or specific campaigns. Our plans include either part-time (80 hours per month) or full-time (160 hours per month) EA's.",
          },
          {
            title: "How can I sign up to be a EA?",
            text: "To work as a executive assistant and be a member of Iconic Assistants, you’ll first need to complete our online application.",
          },
        ],
        faqsRight: [
          {
            title: "How do I monitor my EA's work?",
            text: "All our Executive Assistants are required to send you a periodic work report where they will list all the tasks that they’ve worked on and any issues they’ve encountered. We always encourage our clients to place trust in our Executive Assistants by measuring performance rather than a time tracking tool unless otherwise specified.",
          },
          {
            title: "What about confidential information?",
            text: "All Executive Assistants sign a confidentiality agreement, wherein they are not permitted to share or discuss work-related details to people other than their client and work team. Iconic Assistants cannot be held responsible for any unforeseen issues if you choose to share login details, credit card information, or other personal or business data.",
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

<script setup>
  import { scrollBottom } from "@/motions.js";
</script>

<style scoped>
  .faqHome{
    width: 80%;
  }

  .FAQLink {
    text-decoration: none;
    color: #373ae6;
    font-weight: 600;
  }

  .leftRight,
  .left,
  .right {
    width: 100%;
  }

  /* Desktop */
  @media only screen and (min-width: 1080px) {
    .faqHome {
      width: 90%;
      padding-bottom: 7vw;
    }

    .leftRight {
      flex-direction: row;
    }
  }

  @media only screen and (min-width: 1280px) {
    .faqHome {
      width: 85%;
    }
  }

  @media only screen and (min-width: 1600px) {
    .faqHome {
      margin-top: 1vw;
      padding-bottom: 8vw;
    }
  }

  @media only screen and (min-width: 1600px) {
    .faqHome {
      width: 80%;
    }
  }

  @media only screen and (min-width: 1920px) {
    .faqHome {
      width: 75%;
      margin-top: 20px;
      margin-bottom: 70px;
    }
  }
</style>
