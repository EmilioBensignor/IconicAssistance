<template>
  <router-link
    class="assistantPreview w-100 d-flex flex-wrap bg-lightViolet ga-5 rounded-lg elevation-5 pa-5"
    :to="{ path: routes.ASSISTANTS, query: { id: assistant.id } }">
		<div class="avatar allCenter rounded-circle elevation-3 pa-1">
			<p class="w-auto font-weight-bold text-white">{{ getUserInitials(assistant.firstname, assistant.lastname) }}</p>
		</div>
    <div class="previewBody rowCenter ga-2">
      <p class="w-auto text-white">{{ assistant.firstname }}</p>
      <p class="w-auto text-white">{{ assistant.lastname }}</p>
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
    methods: {
      getUserInitials(firstname, lastname) {
        if (!firstname || !lastname) return "";
        return (
          firstname.charAt(0).toUpperCase() + lastname.charAt(0).toUpperCase()
        );
      },
    }
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
    border: 2px solid #8785BA;
	}

  .avatar p {
    font-size: 1.2rem;
  }

	.previewBody p {
		font-weight: 600;
		font-size: 1.1rem;
	}
</style>
