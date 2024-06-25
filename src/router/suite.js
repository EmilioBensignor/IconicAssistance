import routes from "./constants/ROUTES_NAMES";
import SuiteView from "@/suite/views/SuiteView.vue";
import RegisterView from "@/suite/views/RegisterView.vue";
import LoginView from "@/suite/views/LoginView.vue";
import AssistantsView from "@/suite/views/AssistantsView.vue";
import InvoicesView from "@/suite/views/InvoicesView.vue";
import AccountView from "@/suite/views/AccountView.vue";
import PaymentMethodsView from "@/suite/views/PaymentMethodsView.vue";
import AddPaymentMethodView from "@/suite/views/AddPaymentMethodView.vue";
import AddPaymentMethodConfirmationView from "@/suite/views/AddPaymentMethodConfirmationView.vue";
import ResetPasswordView from "@/suite/views/ResetPasswordView.vue";
import ResetPasswordConfirmationView from "@/suite/views/ResetPasswordConfirmationView.vue";
import AssistantSuiteView from "@/suite/views/assistant/AssistantSuiteView.vue";
import requireAuthClient from "./guards/requireAuthClient";
import requireAuthAssistant from "./guards/requireAuthAssistant";

export const suiteRoutes = [
	{
		path: routes.SUITE,
		name: "Suite",
		component: SuiteView,
		beforeEnter: requireAuthClient,
		meta: {
			title: "Iconic Asssitants Suite",
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
			title: "Log In",
		},
	},
	{
		path: routes.ASSISTANTS,
		name: "Assistants",
		component: AssistantsView,
		beforeEnter: requireAuthClient,
		meta: {
			title: "Assistants",
		},
	},
	{
		path: routes.INVOICES,
		name: "Invoices",
		component: InvoicesView,
		beforeEnter: requireAuthClient,
		meta: {
			title: "Invoices",
		},
	},
	{
		path: routes.ACCOUNT,
		name: "Account",
		component: AccountView,
		beforeEnter: requireAuthClient,
		meta: {
			title: "Account",
		},
	},
	{
		path: routes.PAYMENT_METHODS,
		name: "PaymentMethods",
		component: PaymentMethodsView,
		beforeEnter: requireAuthClient,
		meta: {
			title: "PaymentMethods",
		},
	},
	{
		path: routes.ADD_PAYMENT_METHOD,
		name: "AddPaymentMethod",
		component: AddPaymentMethodView,
		beforeEnter: requireAuthClient,
		meta: {
			title: "AddPaymentMethod",
		},
	},
	{
		path: routes.ADD_PAYMENT_METHOD_CONFIRMATION,
		name: "AddPaymentMethodConfirmation",
		component: AddPaymentMethodConfirmationView,
		beforeEnter: requireAuthClient,
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
	{
		path: routes.ASSISTANT_SUITE,
		name: "AssistantSuite",
		component: AssistantSuiteView,
		beforeEnter: requireAuthAssistant,
		meta: {
			title: "Iconic Asssitants Suite",
			description: "Iconic Assistants Suite.",
		},
	},
];
