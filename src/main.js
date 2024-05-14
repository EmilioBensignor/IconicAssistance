import "./main.css";
import { VueFire, VueFireAuth } from "vuefire";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import { MotionPlugin } from "@vueuse/motion";
import router from "./router";
import { createHead } from "@vueuse/head";
import { firebaseApp } from "./suite/firebase/init";
const head = createHead();
// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
	components,
	directives,
	theme: {
		themes: {
			light: {
				dark: false,
				colors: {
					black: "#040406",
					radioactive: "#373ae6",
					blueSky: "#0cb9f1",
					lightBlueSky: "#9BDCF8",
					midnight: "#120d40",
					thinGray: "#f0f0f0",
					gray: "#6e7191",
					chartGray: "#E4E4E4",
					suiteGray: "#BCC1D1",
				},
			},
		},
	},
});

const pinia = createPinia();
const app = createApp(App)
	.use(pinia)
	.use(head)
	.use(router)
	.use(vuetify)
	.use(MotionPlugin);

app.use(VueFire, {
	// imported above but could also just be created here
	firebaseApp,
	modules: [
		// we will see other modules later on
		VueFireAuth(),
	],
});
app.mount("#app");
