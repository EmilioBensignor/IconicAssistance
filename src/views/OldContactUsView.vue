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
    <h2 v-motion="scrollBottom" class="text-white mb-5">Get in Touch</h2>
    <v-form
      id="contact"
      v-model="valid"
      validate-on="input lazy"
      @submit.prevent="submit"
      class="content columnAlignCenter bg-white pa-5 rounded-xl">
      <div class="w-100 twoInput">
        <v-text-field
          v-model="leadData.firstName"
          :rules="rules.firstNameRules"
          label="First name"
          class="w-100"
          required></v-text-field>
        <v-text-field
          v-model="leadData.lastName"
          :rules="rules.lastNameRules"
          label="Last name"
          class="w-100 my-5"
          required></v-text-field>
      </div>
      <div class="w-100 twoInput">
        <v-text-field
          v-model="leadData.email"
          :rules="rules.emailRules"
          label="E-mail"
          class="w-100"
          required></v-text-field>
        <div class="w-100">
          <v-text-field
            v-model="leadData.phoneNumber"
            :rules="rules.phoneNumberRules"
            label="Phone Number"
            class="w-100 phoneNumber mt-5">
          </v-text-field>
          <p class="w-100 aclaration mb-5">
            (We only use phone numbers for ease of communication.)
          </p>
        </div>
      </div>
      <div class="w-100 twoInput">
        <v-text-field
          v-model="leadData.companySize"
          :rules="rules.companySizeRules"
          label="Company Size"
          class="w-100"
          required></v-text-field>
        <v-text-field
          v-model="leadData.companyName"
          :rules="rules.companyNameRules"
          label="Company Name"
          class="w-100 my-5"
          required></v-text-field>
      </div>
      <v-textarea
        v-model="leadData.staffingRequirements"
        :rules="rules.staffingRequirementsRules"
        label="Staffing Requirements"
        class="w-100 mb-5"
        required></v-textarea>
      <p class="w-100 text-start mb-3">
        Are you looking for a job?
        <span class="aclaration"
          >(Job applications are NOT accepted here).</span
        >
      </p>
      <v-radio-group
        v-model="leadData.lookingForJob"
        :rules="rules.lookingForJobRules"
        required
        class="w-100">
        <v-radio label="Yes" value="true"></v-radio>
        <v-radio label="No" value="false"></v-radio>
      </v-radio-group>
      <button
        class="w-100 submit secondaryButton text-white elevation-5 mt-2"
        :class="!valid ? 'disabled' : 'submit'"
        type="submit"
        :disabled="!valid">
        Submit
      </button>
    </v-form>
  </section>
  <section class="radioactiveWaves">
    <div class="content">
      <div class="contactUsFaq columnAlignCenter">
        <div class="w-75 contactUsEa">
          <img
            src="@/assets/images/contactUs/Contact-Us-Remote-Talent.png"
            alt="Contact Us Remote Talent"
            class="rounded-circle elevation-5 my-5"
            v-motion="scrollBottom"
            width="75%"
            eager />
        </div>
        <div class="contactFaq w-75 columnAlignCenter ga-5 my-5">
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
                    everything you’re looking for in a EA.
                  </li>
                  <li>
                    <b>Strategy Meeting</b> - Within 24 hours of the call, our
                    HR team will schedule a executive meeting to better understand
                    the tasks to outsource and your company culture.
                  </li>
                  <li>
                    <b>Executive Assistant Recruitment</b> - We will start
                    interviewing the candidates that meet your requirements and
                    create a shortlist of options for you. This process usually
                    takes around 1-2 weeks.
                  </li>
                  <li>
                    <b>Hiring & Onboarding</b> - When you’re ready, we’ll hire
                    the Executive Assistant and you will start working with them,
                    with the support of your Customer Success Agent to assist
                    you in the initial ‘nesting period’ to avoid any
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
                    <b>The long answer:</b> When you start working with a
                    Executive Assistant or Executive Professional from Iconic
                    Assistants, you are not hiring our EAs directly, you are
                    hiring our company’s services (a US company), and like with
                    any other service, no taxes are due. Our company handles all
                    the paperwork for hiring our EAs as foreign independent
                    contractors.
                  </li>
                  <li>
                    In other words, 1) You are not hiring people from the US as
                    employees, and 2) You are not hiring EAs in the US, you are
                    hiring our services, so you don’t have to worry about any
                    tax forms.
                  </li>
                </ul>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </div>
    </div>
  </section>
  <FooterComponent />
</template>

<script>
  import HeaderPagesComponent from "@/components/HeaderPagesComponent.vue";
  import { collection, addDoc } from "firebase/firestore";
  import db from "@/firebase/init.js";
  import emailjs from "emailjs-com";
  import FooterComponent from "@/components/FooterComponent.vue";

  export default {
    name: 'ContactUs',
    components: {
      HeaderPagesComponent,
      FooterComponent,
    },
    data() {
      return {
        faqs: [
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
            text: "Yes, we can help you outsource part-time executive assistant for your business or specific campaigns. Our plans include either part-time (80 hours per week) or full-time (160 hours per week) EA's.",
          },
          {
            title: "How can I sign up to be a EA?",
            text: "To work as a executive assistant and be a member of Iconic Assistants, you’ll first need to complete our online application.",
          },
        ],
        leadData: {
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          companySize: "",
          companyName: "",
          staffingRequirements: "",
          lookingForJob: null,
        },
        rules: {
          firstNameRules: [
            (value) => {
              if (value) return true;
              return "First Name is required";
            },
            (value) => {
              if (value?.length <= 20) return true;
              return "First Name must be less than 20 characters";
            },
            (value) => {
              if (value?.length > 2) return true;
              return "First Name must be at least 2 characters";
            },
          ],
          lastNameRules: [
            (value) => {
              if (value) return true;
              return "Last Name is required";
            },
            (value) => {
              if (value?.length <= 25) return true;
              return "Last Name must be less than 25 characters";
            },
            (value) => {
              if (value?.length > 2) return true;
              return "Last Name must be at least 2 characters";
            },
          ],
          emailRules: [
            (value) => {
              if (value) return true;

              return "E-mail is requred.";
            },
            (value) => {
              if (/.+@.+\..+/.test(value)) return true;

              return 'E-mail must contain @ and "." ';
            },
          ],
          phoneNumberRules: [
            (value) => {
              if (value.length === 0) return true;
              const regex = /^(?:([0-9]{3}))?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
              if (regex.test(value)) return true;

              return "Phone Number must be valid";
            },
          ],
          companySizeRules: [
            (value) => {
              if (value) return true;

              return "Company Size is requred.";
            },
            (value) => {
              if (value?.length <= 50) return true;
              return "Company Size must be less than 50 characters";
            },
          ],
          companyNameRules: [
            (value) => {
              if (value) return true;

              return "Company Name is requred.";
            },
            (value) => {
              if (value?.length <= 50) return true;
              return "Company Name must be less than 50 characters";
            },
          ],
          staffingRequirementsRules: [
            (value) => {
              if (value) return true;

              return "Staffing Requirements is requred.";
            },
            (value) => {
              if (value?.length <= 500) return true;
              return "Staffing Requirements must be less than 500 characters";
            },
          ],
          lookingForJobRules: [
            (value) => {
              if (value !== null) return true;

              return "Please confirm if you are looking for a job or not";
            },
          ],
        },
        valid: false,
      };
    },
    methods: {
      async submit() {
        try {
          const ref = collection(db, "contact_us");
          const snapshot = await addDoc(ref, this.leadData);
          const id = snapshot.id;
          this.sendEmail(id);
          // window.location.reload();
        } catch (error) {
          console.error(error);
        }
      },
      async sendEmail(id) {
        try {
          emailjs.init("ufkkB9C_G-eS3pD8_");
        } catch (error) {}
        const emailData = {
          first_name: this.leadData.firstName,
          last_name: this.leadData.lastName,
          email: this.leadData.email,
          phone_number: this.leadData.phoneNumber,
          company_size: this.leadData.companySize,
          company_name: this.leadData.companyName,
          staffing_requirements: this.leadData.staffingRequirements,
          looking_for_job: this.leadData.lookingForJob,
          doc_id: id,
        };
        await emailjs.send("iconic_email", "template_fm1n94g", emailData).then(
          (response) => {
            window.location.reload();
          },
          (error) => {
            console.log("There was an error sending the form", error);
          }
        );
      },
    },
  };
</script>

<script setup>
  import { scrollBottom } from "@/motions.js";
</script>

<style scoped>
  .v-form{
    width: 90%;
  }

  .aclaration {
    text-align: start;
    font-size: 0.8rem;
  }

  .submit {
    font-weight: bold;
    font-size: 1.3rem;
  }

  .disabled:hover {
    background-color: #373ae6;
    color: white;
  }

  /* SM */
  @media only screen and (min-width: 480px) {
    .aclaration {
      font-size: 0.9rem;
    }

    .submit {
      width: 75% !important;
    }
  }

  /* MD */
  @media only screen and (min-width: 769px) {
    .submit {
      width: 50% !important;
      font-size: 1.5rem;
    }

    .contactUsEa img {
      width: 50% !important;
    }
  }

  /* LG */
  @media only screen and (min-width: 992px) {
    .aclaration {
      font-size: 1rem;
    }

    .submit {
      width: 50% !important;
      font-size: 1.8rem;
    }

    .contactUsFaq {
      width: 90%;
      flex-direction: row-reverse;
      justify-content: center;
      align-items: flex-start;
      gap: 3vw;
    }

    .contactFaq {
      width: 50% !important;
    }

    .contactUsEa {
      width: 50% !important;
    }

    .contactUsEa img {
      width: 85% !important;
    }
  }

  /* Desktop */
  @media only screen and (min-width: 1080px) {
    .v-form {
      width: 80%;
      padding: 1vw 3vw 3vw 3vw !important;
    }

    .contactUsFaq {
      align-items: center;
      margin: 2.5vw 0;
    }

    .twoInput {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 5vw;
    }

    .phoneNumber {
      margin-top: 0 !important;
    }

    .aclaration {
      text-align: center;
      font-size: 0.9rem;
      margin-bottom: 0 !important;
    }

    .submit {
      width: 35% !important;
      font-size: 1.5rem;
    }
  }

  /* XL */
  @media only screen and (min-width: 1440px) {
    .v-form {
      padding: 1vw 2vw 2vw 2vw !important;
    }
    .contactUsEa img {
      width: 70% !important;
    }
  }

  @media only screen and (min-width: 1600px) {
    .submit {
      width: 30% !important;
      font-size: 1.6rem;
    }

    .contactUsEa img {
      width: 65% !important;
    }
  }

  @media only screen and (min-width: 1750px) {
    .submit {
      width: 25% !important;
    }

    .contactUsEa img {
      width: 60% !important;
    }
  }

  @media only screen and (min-width: 1920px) {
    .v-form {
      padding: 1% 1.5% 1.5% 1.5% !important;
    }

    .submit {
      width: 22.5% !important;
    }

    .contactUsFaq {
      width: 75%;
      gap: 50px;
      margin: 30px 0;
    }

    .contactUsEa img {
      width: 65% !important;
    }
  }
</style>
