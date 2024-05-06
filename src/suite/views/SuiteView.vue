<template>
	<HeaderSuiteComponent />
	<div class="heroSuite columnAlignCenter">
		<h1>Welcome, <span>Lio</span>!</h1>
	</div>
	<section class="px-5 py-3">
		<SuiteActionsComponent />
	</section>
</template>

<script>
import ROUTES_NAMES from "@/router/constants/ROUTES_NAMES";
import HeaderSuiteComponent from "@/suite/components/HeaderSuiteComponent.vue";
import SuiteActionsComponent from "@/suite/components/suite/SuiteActionsComponent.vue";
export default {
	components: {
		HeaderSuiteComponent,
		SuiteActionsComponent,
	},
	data() {
		return {
			routes: ROUTES_NAMES,
		};
	},
};
</script>
