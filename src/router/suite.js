import routes from "./constants/ROUTES_NAMES";
import SuiteView from "@/suite/views/SuiteView.vue";
import RegisterView from "@/suite/views/RegisterView.vue";
import LoginView from "@/suite/views/LoginView.vue";
import AssistantsView from "@/suite/views/AssistantsView.vue";
import InvoicesView from "@/suite/views/InvoicesView.vue";
import AccountView from "@/suite/views/AccountView.vue";
import PaymentMethodsView from "@/suite/views/PaymentMethodsView.vue";
import AddPaymentMethodView from "@/suite/views/AddPaymentMethodView.vue";

export const suiteRoutes = [
	{
		path: routes.SUITE,
		name: "Suite",
		component: SuiteView,
		meta: {
			title: "Iconic Executive Asssitants Suite",
			metaTags: {
				description: "Iconic Assistants Suite.",
			},
		},
	},
	{
		path: routes.REGISTER,
		name: "Register",
		component: RegisterView,
	},
	{
		path: routes.LOGIN,
		name: "Login",
		component: LoginView,
	},
	{
		path: routes.ASSISTANTS,
		name: "Assistants",
		component: AssistantsView,
	},
	{
		path: routes.INVOICES,
		name: "Invoices",
		component: InvoicesView,
	},
	{
		path: routes.ACCOUNT,
		name: "Account",
		component: AccountView,
	},
	{
		path: routes.PAYMENT_METHODS,
		name: "PaymentMethods",
		component: PaymentMethodsView,
	},
	{
		path: routes.ADD_PAYMENT_METHOD,
		name: "AddPaymentMethod",
		component: AddPaymentMethodView,
	},
];
