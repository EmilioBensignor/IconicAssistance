<template>
	<router-link
		:to="routes.ASSISTANT_ACTIONS + '/' + assistant.id"
		class="card w-100 bg-white columnAlignCenter ga-5 rounded-lg elevation-5 pa-5"
	>
		<div class="rowCenter align-self-start ga-5">
			<div class="bg-radioactive rounded-circle elevation-3 pa-2">
				<v-icon icon="mdi-account"></v-icon>
			</div>
			<div class="cardTitle rowCenter ga-2">
				<p>{{ assistant.firstname }}</p>
				<p>{{ assistant.lastname }}</p>
			</div>
		</div>
		<div class="cardBody column ga-3">
			<p>{{ assistant.email }}</p>
			<p>{{ assistant.phone }}</p>
		</div>
	</router-link>
</template>

<script>
import ROUTES_NAMES from "@/router/constants/ROUTES_NAMES";
export default {
	name: "AssistantCardComponent",
	props: {
		assistant: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			routes: ROUTES_NAMES,
		};
	},
};
</script>

<style scoped>
.card {
	max-width: 300px;
	text-decoration: none;
}

.cardTitle p {
	font-weight: 600;
}

.cardBody p {
	font-size: 0.9rem;
}

@media only screen and (min-width: 350px) {
	.cardBody p {
		font-size: 1rem;
	}
}

@media only screen and (min-width: 1080px) {
	.card {
		max-width: 350px;
	}
	.cardBody p {
		font-size: 1.05rem;
	}
}

@media only screen and (min-width: 1750px) {
	.cardBody p {
		font-size: 1.1rem;
	}
}

@media only screen and (min-width: 1920px) {
	.cardBody p {
		font-size: 1.15rem;
	}
}
</style>
