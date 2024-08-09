<template>
  <section class="columnAlignCenter bg-grayBg">
    <div class="content">
      <div class="columnAlignCenter py-10">
        <h2 v-motion="scrollBottom" class="w-100 text-midnight mb-1">
          What can Iconic Assistants do?
        </h2>
        <img
          class="w-75 blueLine"
          src="@/web/assets/images/misc/blue-line-2-Executive-Assistant.png"
          alt="Line Executive Assistant"
        />
        <p v-motion="scrollBottom" class="mt-5">
          Stop spending countless hours every week on tasks someone else can do
          for you.
        </p>
        <div v-motion="scrollBottom" class="whatCan column ga-15 my-10">
          <div v-for="(task, index) in tasks" class="whatCanDiv" :key="index">
            <div class="rowCenter ga-5">
              <img
                :src="getImgUrl(task.img)"
                class="w-25 whatCanImg shadow-2"
                :alt="task.alt"
              />
              <p class="w-100 whatCanTitle text-start font-weight-bold">
                {{ task.title }}
              </p>
            </div>
            <div class="mt-7">
              <ul class="column ga-3">
                <li
                  v-for="(item, index) in task.list"
                  class="text-start"
                  :key="index"
                >
                  <v-icon
                    class="mr-3"
                    icon="mdi-check-bold"
                    color="radioactive"
                  ></v-icon>
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <a href="#hero" class="secondaryButton elevation-5 mt-5">Get Started</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        {
          img: "contactUs/executive-support-virtual-assistant.png",
          title: "Executive Support",
          alt: "Executive Support Virtual Assistant",
          list: [
            "Scheduling and Prioritizing Appointments",
            "Travel Plans and Reservations",
            "Arranging Meetings and Taking Minutes",
            "Preparing Reports and Presentations",
          ],
        },
        {
          img: "contactUs/administrative-tasks-virtual-assistant.png",
          title: "Administrative Tasks",
          alt: "Administrative Tasks Virtual Assistant",
          list: [
            "Managing Emails",
            "Data Entry",
            "Posting to Social Media",
            "Taking phone calls",
          ],
        },
        {
          img: "contactUs/customer-support-virtual-assistant.png",
          title: "Customer Support",
          alt: "Customer Support Virtual Assistant",
          list: [
            "Phone, Email & Live Chat Support",
            "Customer Retention & Relationship Building",
            "Escalation Management",
            "Customer Onboarding",
          ],
        },
        {
          img: "contactUs/finance-bookkeeping-virtual-assistant.png",
          title: "Finance & Bookkeeping",
          alt: "Finance Bookkeeping Virtual Assistant",
          list: [
            "Cloud Bookkeeping",
            "Tracking and Reporting Expenses",
            "Maintaining Ledgers",
            "Invoicing and Payroll Support",
          ],
        },
      ],
    };
  },
  methods: {
    getImgUrl(imgName) {
      return new URL(`/src/web/assets/images/${imgName}`, import.meta.url).href;
    },
  },
};
</script>

<script setup>
import { scrollBottom } from "@/motions.js";
</script>

<style scoped>
.whatCan {
  width: 85%;
}

.whatCanTitle {
  font-size: 1.2rem;
}

@media only screen and (min-width: 480px) {
  .blueLine {
    width: 90% !important;
  }

  .whatCanImg {
    width: 20% !important;
  }
}

@media only screen and (min-width: 600px) {
  .blueLine {
    width: 80% !important;
  }

  .whatCan {
    padding-left: 3rem;
  }
}

@media only screen and (min-width: 770px) {
  .whatCanImg {
    width: 15% !important;
  }
}

@media only screen and (min-width: 992px) {
  .blueLine {
    width: 85% !important;
  }

  .whatCan {
    padding-left: 8rem;
  }
}

@media only screen and (min-width: 1080px) {
  .blueLine {
    width: 60% !important;
  }

  .whatCan {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 3rem 0 !important;
    padding: 0;
  }

  .whatCanDiv {
    width: 45%;
  }
}

@media only screen and (min-width: 1280px) {
  .blueLine {
    width: 50% !important;
  }
  .whatCanDiv {
    width: 40%;
  }
  .whatCanImg {
    width: 20% !important;
  }
}

@media only screen and (min-width: 1440px) {
  .blueLine {
    width: 45% !important;
  }

  .whatCanDiv {
    width: 35%;
  }
}

@media only screen and (min-width: 1600px) {
  .blueLine {
    width: 42% !important;
  }
  .whatCan {
    padding-left: 6rem;
  }
}

@media only screen and (min-width: 1600px) {
  .blueLine {
    width: 40% !important;
  }
  .whatCan {
    width: 100%;
  }
}

@media only screen and (min-width: 1600px) {
  .blueLine {
    width: 42% !important;
  }
  .whatCan {
    padding-left: 8rem;
  }
}
</style>
