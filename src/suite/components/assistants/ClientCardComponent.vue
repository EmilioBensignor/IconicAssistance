<template>
	<div>
		<p class="text-lila">{{ client.firstname }}</p>
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
};
</script>
