import { onAuthStateChanged } from "firebase/auth";
import { defineStore } from "pinia";
import { auth } from "../firebase/init";

export const useAuthStore = defineStore("auth", {
	state: () => ({
		isAuthenticated: false,
		user: null,
		isAuthLoading: true, // Initial loading state
	}),
	actions: {
		initAuth() {
			onAuthStateChanged(auth, (user) => {
				if (user) {
					this.user = user;
					this.isAuthenticated = true;
				} else {
					this.user = null;
					this.isAuthenticated = false;
				}
				this.isAuthLoading = false; // Loading is complete
			});
		},
	},
});
