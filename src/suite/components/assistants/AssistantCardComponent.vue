<template>
  <div class="column ga-10">
    <div
      class="card w-100 bg-white columnAlignCenter ga-5 rounded-lg elevation-5 pa-5"
    >
      <div class="d-flex align-start align-self-start flex-wrap ga-3">
        <div class="profile allCenter rounded-lg elevation-3 pa-2">
          <img
            width="75%"
            src="@/suite/assets/images/Suite-Logo.png"
            alt="Suite Logo"
          />
        </div>
        <div class="column ga-3">
          <div class="cardTitle rowCenter ga-2">
            <p class="w-auto">{{ assistant.firstname }}</p>
            <p class="w-auto">{{ assistant.lastname }}</p>
            <div class="assistantType rounded-lg px-1">
              <p>EA</p>
            </div>
          </div>
          <div class="info rowCenter flex-wrap ga-2">
            <p class="w-auto pSmall">Last rating:</p>
            <div>
              <span class="mdi mdi-star text-radioactive"></span>
              <span class="mdi mdi-star text-radioactive"></span>
              <span class="mdi mdi-star text-radioactive"></span>
              <span class="mdi mdi-star text-radioactive"></span>
              <span class="mdi mdi-star text-radioactive"></span>
            </div>
            <p class="w-auto pSmall font-weight-bold">Excellent!</p>
            <button
              @click="openDialog = true"
              class="pSmall bg-radioactive rounded-lg elevation-3 py-1 px-2"
            >
              Rate my assistant
            </button>
          </div>
        </div>
        <div class="column ga-2">
          <div class="rowCenter ga-2">
            <span class="mdi mdi-circle text-green"></span>
            <p class="w-auto">
              Online <span class="pSmall">(since: 8:30AM)</span>
            </p>
          </div>
          <div class="rowCenter ga-2">
            <span class="mdi mdi-clock-time-four-outline"></span>
            <p class="w-auto">
              Current shift: <span class="pSmall">9AM to 5PM</span>
            </p>
          </div>
          <div class="rowCenter ga-2">
            <span class="mdi mdi-check-circle-outline"></span>
            <p class="w-auto">Current task: <span class="pSmall">???</span></p>
          </div>
        </div>
      </div>
      <div class="cardBody column ga-3">
        <p class="font-weight-bold">Assistant Info</p>
        <div class="rowCenter flex-wrap ga-3">
          <div class="rowCenter ga-3">
            <div class="bg-suiteBg rounded elevation-1 px-1">
              <span class="mdi mdi-email-outline"></span>
            </div>
            <div>
              <p class="pSmall bold500">Primary Email</p>
              <p class="w-auto pSmall">{{ assistant.email }}</p>
            </div>
          </div>
          <div class="rowCenter ga-3">
            <div class="bg-suiteBg rounded elevation-1 px-1">
              <span class="mdi mdi-email-outline"></span>
            </div>
            <div>
              <p class="pSmall bold500">Alt Email</p>
              <p class="w-auto pSmall">{{ assistant.email }}</p>
            </div>
          </div>
          <div class="rowCenter ga-3">
            <div class="bg-suiteBg rounded elevation-1 px-1">
              <span class="mdi mdi-phone"></span>
            </div>
            <div>
              <p class="pSmall bold500">Phone</p>
              <p class="w-auto pSmall">{{ assistant.phone }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-dialog v-model="openDialog">
      <v-card class="dialogCard bg-suiteBg column ga-3" max-width="100%">
        <v-toolbar class="bg-suiteBg">
          <v-toolbar-title>Rate your assistant</v-toolbar-title>
          <v-btn icon="mdi-close" @click="openDialog = false"></v-btn>
        </v-toolbar>
        <div class="rowCenter">
          <div class="allCenter">
            <img
              width="50%"
              src="@/suite/assets/images/Suite-Logo.png"
              alt="Suite Logo"
            />
          </div>
          <div class="cardTitle rowCenter ga-2">
            <p class="w-auto">{{ assistant.firstname }}</p>
            <p class="w-auto">{{ assistant.lastname }}</p>
            <div class="assistantType rounded-lg px-1">
              <p class="w-auto">EA</p>
            </div>
          </div>
        </div>
        <div class="px-5">
          <p>Overall Rating</p>
          <div class="dialogStars rowCenter ga-2">
            <span class="mdi mdi-star text-radioactive"></span>
            <span class="mdi mdi-star text-radioactive"></span>
            <span class="mdi mdi-star text-radioactive"></span>
            <span class="mdi mdi-star text-radioactive"></span>
            <span class="mdi mdi-star text-radioactive"></span>
            <p class="w-auto font-weight-bold">Excellent!</p>
          </div>
        </div>
        <form class="column ga-2 px-5">
          <label for="review">Write your review</label>
          <textarea
            class="rounded pa-2"
            placeholder="Feedback will be used to improve your assistant's performance."
            name="review"
            id="review"
          ></textarea>
          <p class="w-auto pSmall">
            This review will be visible to the account leads only, not to the
            assistant.
          </p>
          <div class="d-flex justify-end">
            <button class="bg-radioactive rounded-lg px-4 py-2 elevation-3 mt-3">Submit Review</button>
          </div>
        </form>
      </v-card>
    </v-dialog>
    <div>
      <router-link
        class="secondaryButton"
        :to="routes.ASSISTANT_ACTIONS + '/' + assistant.id"
      >
        Assistant Tasks
      </router-link>
    </div>
  </div>
</template>

<script>
import ROUTES_NAMES from "@/router/constants/ROUTES_NAMES";
import SecondaryBtnComponent from "../buttons/SecondaryBtnComponent.vue";

export default {
  name: "AssistantCardComponent",
  props: {
    assistant: {
      type: Object,
      required: true,
    },
  },
  components: {
    SecondaryBtnComponent,
  },
  data() {
    return {
      routes: ROUTES_NAMES,
      openDialog: false,
    };
  },
};
</script>

<style>
.v-dialog .dialogCard .v-toolbar__content {
  justify-content: space-between;
}

.v-dialog .dialogCard .v-toolbar-title__placeholder {
  margin-left: 0.5rem;
}
</style>

<style scoped>
.card {
  max-width: max-content;
  text-decoration: none;
}

.profile {
  width: 4rem;
  height: 4rem;
}

.cardTitle p {
  font-weight: 600;
}

.assistantType {
  border: 2px solid #373ae6;
}

.assistantType p {
  font-size: 0.75rem;
}

.pSmall {
  font-size: 0.85rem;
}

.bold500 {
  font-weight: 500;
}

.dialogStars span {
  font-size: 1.5rem;
}

textarea {
  border: 2px solid #373ae6;
}
</style>
