import { createRouter, createWebHistory } from "vue-router";
import { webRoutes } from "./web";
import { suiteRoutes } from "./suite";
import Error404View from "../web/views/Error404View.vue";

const routes = [
	{
		path: "/404",
		name: "Error404",
		component: Error404View,
		meta: {
			title: "Error 404 - Iconic Assistants",
		},
	},
	{
		path: "/:catchAll(.*)",
		redirect: "/404",
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [...routes, ...webRoutes, ...suiteRoutes],
});

router.beforeEach((to, from, next) => {
	document.title = `${to.meta.title}`;
	const nearestWithTitle = to.matched
		.slice()
		.reverse()
		.find((r) => r.meta && r.meta.title);
	const nearestWithMeta = to.matched
		.slice()
		.reverse()
		.find((r) => r.meta && r.meta.metaTags);

	if (nearestWithMeta) {
		const metaDescription = nearestWithMeta.meta.metaTags.description;
		document
			.querySelector('meta[name="description"]')
			.setAttribute("content", metaDescription);
	} else if (nearestWithTitle) {
		document
			.querySelector('meta[name="description"]')
			.removeAttribute("content");
	}

	next();
});

export default router;
