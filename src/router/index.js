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
			description: "Page not found on Iconic Assistants.",
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
	const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
	const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.description);

	if (nearestWithTitle) {
		document.title = nearestWithTitle.meta.title || 'Iconic Assistants';
	}

	if (nearestWithMeta) {
		const metaTag = document.querySelector('meta[name="description"]');
		if (metaTag) {
			metaTag.setAttribute('content', nearestWithMeta.meta.description);
		} else {
			const descriptionMeta = document.createElement('meta');
			descriptionMeta.setAttribute('name', 'description');
			descriptionMeta.setAttribute('content', nearestWithMeta.meta.description);
			document.head.appendChild(descriptionMeta);
		}
	}

	next();
});

export default router;