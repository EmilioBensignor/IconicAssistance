<template>
  <HeaderAssistantComponent />
  <div class="bg-suiteBg column">
    <div class="heroSuite columnAlignCenter">
      <v-skeleton-loader
        class="w-75 bg-suiteBg px-3"
        type="heading"
        v-if="!data || !data.firstname"></v-skeleton-loader>
      <h1 class="text-white ml-4" v-else>
        Welcome,
        <span>{{ data.firstname }}</span
        >!
      </h1>
      <div class="suiteComponents column ga-5 align-self-start mt-10">
        <p class="pMedium text-lila">Employer</p>
        <ClientCardComponent
          v-if="store && store.client"
          :client="store.client" />
      </div>
    </div>
  </div>
</template>

<script>
  import { useAuthStore } from "@/suite/stores/auth.store";
  import HeaderAssistantComponent from "@/suite/components/HeaderAssistantComponent.vue";
  import ClientCardComponent from "@/suite/components/assistants/ClientCardComponent.vue";

  export default {
    components: {
      HeaderAssistantComponent,
      ClientCardComponent,
    },
    data() {
      return {
        store: useAuthStore(),
      };
    },
  };
</script>

<script setup>
  import { db } from "@/suite/firebase/init";
  import { collection, doc } from "firebase/firestore";
  import { useDocument } from "vuefire";

  const store = useAuthStore();
  const data = useDocument(doc(collection(db, "assistants"), store.user.uid));
</script>
