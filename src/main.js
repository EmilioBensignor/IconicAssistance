import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import { MotionPlugin } from "@vueuse/motion";
import router from "./router";
import { createMetaManager } from "vue-meta";

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
					chartGray: "#E4E4E4"
				},
			},
		},
	},
});

if (typeof process !== 'undefined') {
	require("@vue/server-renderer");
}

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.use(MotionPlugin);
app.use(createMetaManager());

app.mount("#app");