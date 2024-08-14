<template>
  <div
    class="column ga-5 align-self-start bg-lightViolet rounded-lg elevation-5 pa-5">
    <div class="rowCenter ga-3">
      <div class="avatar allCenter rounded-circle elevation-3 pa-1">
        <p class="w-auto font-weight-bold text-white">
          {{ getUserInitials(client.firstname, client.lastname) }}
        </p>
      </div>
      <p class="w-auto name text-white">{{ client.firstname }}</p>
      <p class="w-auto name text-white">{{ client.lastname }}</p>
    </div>
    <div>
      <p class="w-auto text-lila">Contact Information</p>
      <p class="w-auto text-white">{{ client.email }}</p>
      <p class="w-auto text-white">{{ client.phone }}</p>
    </div>
    <div>
      <p class="w-auto text-lila">Company</p>
      <p class="w-auto text-white">{{ client.company }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      client: {
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
    },
  };
</script>

<style scoped>
  .avatar {
    width: 3rem;
    height: 3rem;
    border: 2px solid #8785ba;
  }

  .avatar p {
    font-size: 1.2rem;
  }

	.name {
		font-size: 1.15rem;
	}
</style>
