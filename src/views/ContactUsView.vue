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
      class="w-75 columnAlignCenter bg-white pa-5 rounded-xl">
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
      <v-text-field
        v-model="leadData.email"
        :rules="rules.emailRules"
        label="E-mail"
        class="w-100"
        required></v-text-field>
      <v-text-field
        v-model="leadData.phoneNumber"
        :rules="rules.phoneNumberRules"
        label="Phone Number"
        class="w-100 mt-5">
      </v-text-field>
      <p class="w-100 aclaration mb-5">
        (We only use phone numbers for ease of communication.)
      </p>
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
        class="w-100"
        required></v-text-field>
      <v-textarea
        v-model="leadData.staffingRequirements"
        :rules="rules.staffingRequirementsRules"
        label="Staffing Requirements"
        class="w-100"
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
        class="w-100 submit secondaryButton text-white mt-2"
        :class="!valid ? 'disabled' : 'submit'"
        type="submit"
        :disabled="!valid">
        Submit
      </button>
    </v-form>
  </section>
  <section class="radioactiveWaves">
    <div class="contactUsFaq columnAlignCenter">
      <div class="w-75 contactUsVa">
        <img
          src="@/assets/images/contactUs/Contact-Us-Remote-Talent.png"
          alt="Contact Us Remote Talent"
          class="rounded-circle elevation-5 my-5"
          v-motion="scrollBottom"
          width="75%"
          eager />
      </div>
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
                  Virtual Assistant and you will start working with them, with
                  the support of your Customer Success Agent to assist you in
                  the initial ‘nesting period’ to avoid any miscommunications or
                  misunderstandings.
                </li>
                <li>
                  <b>Regular check-ins</b> - Our team will also have regular
                  meetings and performance reviews and provide company benefits
                  for your Virtual Assistant to ensure their happiness and to
                  get all your tasks done the way you want them.
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
                  taxes are due. Our company handles all the paperwork for
                  hiring our VAs as foreign independent contractors.
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
    </div>
  </section>
</template>

<script>
  import HeaderPagesComponent from "@/components/HeaderPagesComponent.vue";
  import { collection, addDoc } from "firebase/firestore";
  import db from "@/firebase/init.js";
  import emailjs from "emailjs-com";

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
          console.log("Lead Data Sent", snapshot);
          const id = snapshot.id;
          this.sendEmail(id);
          // window.location.reload();
        } catch (error) {
          console.error(error);
        }
      },
      async sendEmail(id) {
        try {
          await emailjs.sendForm(
            "iconic_email",
            "template_fm1n94g",
            "#contact",
            "LKb-wqKEGMVz4ULol",
            {
              "first_name": this.leadData.firstName,
              "last_name": this.leadData.lastName,
              "email": this.leadData.email,
              "phone_number": this.leadData.phoneNumber,
              "company_size": this.leadData.companySize,
              "company_name": this.leadData.companyName,
              "staffing_requirements": this.leadData.staffingRequirements,
              "looking_for_job": this.leadData.lookingForJob,
              "doc_id": id,
            }
          ).then(data => {
            console.log(data)
          })

          console.log("Email enviado");
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
</script>

<script setup>
  import { scrollBottom } from "@/motions.js";
</script>

<style scoped>
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
    .contactUsVa img {
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
      flex-direction: row-reverse;
      align-items: flex-start;
    }
    .contactUsVa img {
      width: 65% !important;
    }
  }
</style>
