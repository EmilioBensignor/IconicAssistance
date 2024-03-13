import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import { MotionPlugin } from "@vueuse/motion";
import router from "./router";

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
					white: "#f8f8f8",
					black: "#040406",
					radioactive: "#373ae6",
					blueSky: "#0cb9f1",
					midnight: "#120d40",
					black: "#040406",
					thinGray: "#f0f0f0",
					lightGray: "#7a7a7a33",
					darkGray: "#00000099",
					lightSilver: "#D9D9D9",
					red: "#e1261c",
					gray: "#6e7191",
				},
			},
		},
	},
});

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.use(MotionPlugin);

app.mount("#app");
