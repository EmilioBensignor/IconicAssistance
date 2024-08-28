<template>
	<div class="suiteComponents">
		<v-skeleton-loader
			v-for="item in skeletonLength"
			:key="item"
			class="w-75 align-self-start my-3 bg-lightViolet"
			type="text"
		></v-skeleton-loader>
	</div>
</template>

<script>
export default {
	data() {
		return {
			skeletonLength: [1, 2, 3, 4, 5, 6, 7, 8],
		};
	},
};
</script>
