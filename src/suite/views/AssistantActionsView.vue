<template>
  <HeaderSuiteComponent />
  <div class="heroSuite columnAlignCenter">
    <h1 class="text-midnight ml-4">Assistant Actions</h1>
  </div>
  <div class="suiteComponents">
		<h2 v-if="assistantData">{{ assistantData.firstname }} Tasks</h2>
		<v-skeleton-loader class="w-75 mt-5" v-if="(!assistantData || !assistantData.tasks) && loading" type="card"></v-skeleton-loader>
    <div class="mt-5" v-if="assistantData && assistantData.tasks && !loading">
      <AssistantTaskTableComponent :tasks="assistantData.tasks" />
    </div>
		<p v-if="assistantData && !assistantData.tasks && !loading">There are no Tasks</p>
  </div>
</template>

<script>
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/init";
import router from "@/router";
import ROUTES_NAMES from "@/router/constants/ROUTES_NAMES";
import { formatDate } from "../services/format.service";

import HeaderSuiteComponent from "../components/HeaderSuiteComponent.vue";
import AssistantTaskTableComponent from "../components/assistants/AssistantTaskTableComponent.vue";

export default {
  data() {
    return {
      assistantId: this.$route.params.id,
      assistantData: null,
			loading: true,
    };
  },
  components: {
		HeaderSuiteComponent,
    AssistantTaskTableComponent,
  },

  async mounted() {
    const ref = doc(db, "assistants", this.assistantId);
    await getDoc(ref)
      .then((data) => {
        if (data.exists()) {
          this.assistantData = data.data();
					this.loading = false;
          console.log(this.assistantData);
        } else {
          router.push(ROUTES_NAMES.ASSISTANTS);
        }
      })
      .catch((error) => {
        console.log(error);
				this.loading = false;
      });
  },
  setup() {
    formatDate();
  },
};
</script>
