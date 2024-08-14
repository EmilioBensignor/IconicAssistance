<template>
  <section class="columnAlignCenter bg-grayBg pb-15">
    <div class="content w-100">
      <div class="w-100 columnAlignCenter">
        <h2 v-motion="scrollBottom" class="w-100 text-midnight mt-10 mb-2">
          Frequently Asked Questions
        </h2>
        <img
          class="w-75 line"
          src="@/web/assets/images/misc/sky-line-3-Virtual-Assistant.png"
          alt="Line Virtual Assistant" />
        <div class="faqContainer columnAlignCenter ga-5 mt-10">
          <v-expansion-panels v-motion="scrollBottom" class="faqWrapper">
            <v-expansion-panel class="elevation-4 rounded-lg">
              <v-expansion-panel-title>
                Do I need to pay any Taxes?
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <div class="column ga-3">
                  <p>
                    <span class="font-weight-bold">The short answer:</span> No.
                  </p>
                  <p>
                    <span class="font-weight-bold">The long answer:</span> When
                    you start working with a Executive Assistant or Executive
                    Professional from Iconic Assistants, you are not hiring our
                    VAs directly, you are hiring our company's services (a US
                    company), and like with any other service, no taxes are due.
                    Our company handles all the paperwork for hiring our VAs as
                    foreign independent contractors. In other words, 1) You are
                    not hiring people from the US as employees, and 2) You are
                    not hiring VAs in the US, you are hiring our services, so
                    you don't have to worry about any tax forms.
                  </p>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
          <v-expansion-panels v-motion="scrollBottom" class="faqWrapper">
            <v-expansion-panel class="elevation-4 rounded-lg">
              <v-expansion-panel-title>
                What tasks can I outsource to a VA?
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <div>
                  <p>
                    You can outsource almost anything to a Executive Assistant
                    as long as you're clear with what, when and how you want
                    things done (we can help you with that!). Here are
                    <router-link
                      class="examples text-radioactive font-weight-bold"
                      to="/executive-assistant/executive-assistant"
                      >examples of what our Executive Assistants can
                      do</router-link
                    >
                  </p>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
          <v-expansion-panels v-motion="scrollBottom" class="faqWrapper">
            <v-expansion-panel class="elevation-4 rounded-lg">
              <v-expansion-panel-title>
                Can I provide the work hours?
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <p>
                  Yes, candidates will be informed of your business's preferred
                  work hours. Iconic Assistants are flexible and can work within
                  the time your business requires.
                </p>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
          <v-expansion-panels v-motion="scrollBottom" class="faqWrapper">
            <v-expansion-panel class="elevation-4 rounded-lg">
              <v-expansion-panel-title>
                How quickly can I be Up and Running?
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <p>
                  From the first meeting, it takes approximately 5 to 7 business
                  days to find, interview and qualify the right candidate for
                  you and your business.
                </p>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { scrollBottom } from "@/motions.js";
</script>

<style scoped>
  .examples {
    text-decoration: none;
  }

  .faqContainer {
    width: 75%;
  }

  @media only screen and (min-width: 480px) {
    .line {
      width: 85% !important;
    }
  }

  @media only screen and (min-width: 600px) {
    .line {
      width: 75% !important;
    }
  }

  @media only screen and (min-width: 770px) {
    .line {
      width: 65% !important;
    }
  }

  @media only screen and (min-width: 992px) {
    .line {
      width: 58% !important;
    }
  }

  @media only screen and (min-width: 1080px) {
    .line {
      width: 53% !important;
    }
  }

  @media only screen and (min-width: 1280px) {
    .line {
      width: 45% !important;
    }

    .faqContainer {
      width: 65% !important;
    }
  }

  @media only screen and (min-width: 1440px) {
    .line {
      width: 40% !important;
    }
  }

  @media only screen and (min-width: 1600px) {
    .line {
      width: 38% !important;
    }

    .faqContainer {
      width: 60% !important;
    }
  }

  @media only screen and (min-width: 1750px) {
    .line {
      width: 37% !important;
    }

    .faqContainer {
      width: 50% !important;
    }
  }
</style>
