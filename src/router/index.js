import { createRouter, createWebHistory } from "vue-router";
import { webRoutes } from "./web";
import { suiteRoutes } from "./suite";

const routes = [
	{
		path: "/404",
		name: "Error404",
		component: () => import("../web/views/Error404View.vue"),
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
		const metaTag = document.querySelector('meta[name="description"]');
		if (metaTag) {
			metaTag.setAttribute("content", metaDescription);
		}
	} else if (nearestWithTitle) {
		const metaTag = document.querySelector('meta[name="description"]');
		if (metaTag) {
			metaTag.removeAttribute("content");
		}
	}

	next();
});

export default router;
