import routes from "./constants/ROUTES_NAMES";
import { useAuthStore } from "@/suite/stores/auth.store";
import ROUTES_NAMES from "./constants/ROUTES_NAMES";
import { watch } from "vue";

const requireAuth = (to, from, next) => {
	const authStore = useAuthStore();

	if (authStore.isAuthLoading) {
		// If still loading, wait for the state to be determined
		const unwatch = watch(
			() => authStore.isAuthLoading,
			(isAuthLoading) => {
				if (!isAuthLoading) {
					// Authentication state has been determined
					unwatch(); // Stop watching
					if (authStore.isAuthenticated) {
						next();
					} else {
						next(ROUTES_NAMES.LOGIN); // Adjust the route name as needed
					}
				}
			}
		);
	} else {
		// If not loading, proceed with the normal checks
		if (authStore.isAuthenticated) {
			next();
		} else {
			next(ROUTES_NAMES.LOGIN); // Adjust the route name as needed
		}
	}
};

export const suiteRoutes = [
	{
		path: routes.SUITE,
		name: "Suite",
		component: () => import("@/suite/views/SuiteView.vue"),
		beforeEnter: requireAuth,
		meta: {
			title: "Iconic Asssitants Suite",
			description: "Iconic Assistants Suite.",
		},
	},
	{
		path: routes.REGISTER,
		name: "Register",
		component: () => import("@/suite/views/RegisterView.vue"),
		meta: {
			title: "Register",
		},
	},
	{
		path: routes.LOGIN,
		name: "Login",
		component: () => import("@/suite/views/LoginView.vue"),

		meta: {
			title: "Log In",
		},
	},
	{
		path: routes.ASSISTANTS,
		name: "Assistants",
		component: () => import("@/suite/views/AssistantsView.vue"),
		beforeEnter: requireAuth,
		meta: {
			title: "Assistants",
		},
	},
	{
		path: routes.INVOICES,
		name: "Invoices",
		component: () => import("@/suite/views/InvoicesView.vue"),

		beforeEnter: requireAuth,
		meta: {
			title: "Invoices",
		},
	},
	{
		path: routes.ACCOUNT,
		name: "Account",
		component: () => import("@/suite/views/AccountView.vue"),
		beforeEnter: requireAuth,
		meta: {
			title: "Account",
		},
	},
	{
		path: routes.PAYMENT_METHODS,
		name: "PaymentMethods",
		component: () => import("@/suite/views/PaymentMethodsView.vue"),

		beforeEnter: requireAuth,
		meta: {
			title: "PaymentMethods",
		},
	},
	{
		path: routes.ADD_PAYMENT_METHOD,
		name: "AddPaymentMethod",
		component: () => import("@/suite/views/AddPaymentMethodView.vue"),

		beforeEnter: requireAuth,
		meta: {
			title: "AddPaymentMethod",
		},
	},
	{
		path: routes.ADD_PAYMENT_METHOD_CONFIRMATION,
		name: "AddPaymentMethodConfirmation",
		component: () =>
			import("@/suite/views/AddPaymentMethodConfirmationView.vue"),

		beforeEnter: requireAuth,
		meta: {
			title: "AddPaymentMethodConfirmation",
		},
	},
	{
		path: routes.RESET_PASSWORD,
		name: "ResetPasswordView",
		component: () => import("@/suite/views/ResetPasswordView.vue"),

		meta: {
			title: "ResetPasswordView",
		},
	},
	{
		path: routes.RESET_PASSWORD_CONFIRMATION,
		name: "ResetPasswordConfirmationView",
		component: () =>
			import("@/suite/views/ResetPasswordConfirmationView.vue"),

		meta: {
			title: "ResetPasswordConfirmationView",
		},
	},
];
