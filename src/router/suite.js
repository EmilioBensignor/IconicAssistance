import routes from "./constants/ROUTES_NAMES";
import SuiteView from "@/suite/views/SuiteView.vue";
import RegisterView from "@/suite/views/RegisterView.vue";
import LoginView from "@/suite/views/LoginView.vue";
import AssistantsView from "@/suite/views/AssistantsView.vue";
import InvoicesView from "@/suite/views/InvoicesView.vue";
import AccountView from "@/suite/views/AccountView.vue";
import PaymentMethodsView from "@/suite/views/PaymentMethodsView.vue";
import AddPaymentMethodConfirmationView from "@/suite/views/AddPaymentMethodConfirmationView.vue";
import AddPaymentMethodView from "@/suite/views/AddPaymentMethodView.vue";
import ResetPasswordView from "@/suite/views/ResetPasswordView.vue";
import ResetPasswordConfirmationView from "@/suite/views/ResetPasswordConfirmationView.vue";
import { useAuthStore } from "@/suite/stores/auth.store";
import ROUTES_NAMES from "./constants/ROUTES_NAMES";

const requireAuth = (to, from, next) => {
	let store = useAuthStore();
	if (!store.user) {
		next(ROUTES_NAMES.LOGIN);
	} else {
		next();
	}
};

export const suiteRoutes = [
	{
		path: routes.SUITE,
		name: "Suite",
		component: SuiteView,
		beforeEnter: requireAuth,
		meta: {
			title: "Iconic Executive Asssitants Suite",
			description: "Iconic Assistants Suite.",
		},
	},
	{
		path: routes.REGISTER,
		name: "Register",
		component: RegisterView,
		meta: {
			title: "Register",
		},
	},
	{
		path: routes.LOGIN,
		name: "Login",
		component: LoginView,
		meta: {
			title: "Login",
		},
	},
	{
		path: routes.ASSISTANTS,
		name: "Assistants",
		component: AssistantsView,
		beforeEnter: requireAuth,
		meta: {
			title: "Assistants",
		},
	},
	{
		path: routes.INVOICES,
		name: "Invoices",
		component: InvoicesView,
		beforeEnter: requireAuth,
		meta: {
			title: "Invoices",
		},
	},
	{
		path: routes.ACCOUNT,
		name: "Account",
		component: AccountView,
		beforeEnter: requireAuth,
		meta: {
			title: "Account",
		},
	},
	{
		path: routes.PAYMENT_METHODS,
		name: "PaymentMethods",
		component: PaymentMethodsView,
		beforeEnter: requireAuth,
		meta: {
			title: "PaymentMethods",
		},
	},
	{
		path: routes.ADD_PAYMENT_METHOD,
		name: "AddPaymentMethod",
		component: AddPaymentMethodView,
		beforeEnter: requireAuth,
		meta: {
			title: "AddPaymentMethod",
		},
	},
	{
		path: routes.ADD_PAYMENT_METHOD_CONFIRMATION,
		name: "AddPaymentMethodConfirmation",
		component: AddPaymentMethodConfirmationView,
		beforeEnter: requireAuth,
		meta: {
			title: "AddPaymentMethodConfirmation",
		},
	},
	{
		path: routes.RESET_PASSWORD,
		name: "ResetPasswordView",
		component: ResetPasswordView,
		meta: {
			title: "ResetPasswordView",
		},
	},
	{
		path: routes.RESET_PASSWORD_CONFIRMATION,
		name: "ResetPasswordConfirmationView",
		component: ResetPasswordConfirmationView,
		meta: {
			title: "ResetPasswordConfirmationView",
		},
	},
];
