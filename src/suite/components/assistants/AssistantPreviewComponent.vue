<template>
  <router-link
    class="assistantPreview w-100 d-flex flex-wrap bg-white ga-5 rounded-lg elevation-5 pa-5"
    :to="{ path: routes.ASSISTANTS, query: { id: assistant.id } }">
		<div class="avatar allCenter rounded-circle elevation-3 pa-1">
			<img width="75%" src="@/suite/assets/images/Suite-Logo.png" alt="Suite Logo">
		</div>
    <div class="previewBody rowCenter ga-2">
      <p class="w-auto">{{ assistant.firstname }}</p>
      <p class="w-auto">{{ assistant.lastname }}</p>
    </div>
  </router-link>
</template>

<script>
  import ROUTES_NAMES from "@/router/constants/ROUTES_NAMES";

  export default {
    data() {
      return {
        routes: ROUTES_NAMES,
      };
    },
    props: {
      assistant: {
        type: Object,
        required: true,
      },
    },
  };
</script>

<style scoped>
  .assistantPreview {
    max-width: 350px;
    text-decoration: none;
  }

	.avatar {
		width: 3rem;
		height: 3rem;
	}

	.previewBody p {
		font-weight: 600;
		font-size: 1.1rem;
	}
</style>
