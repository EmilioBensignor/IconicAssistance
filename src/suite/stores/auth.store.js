import { onAuthStateChanged } from "firebase/auth";
import { defineStore } from "pinia";
import { auth, functions } from "../firebase/init";
import { collection, doc, getDoc } from "firebase/firestore";
import { useDocument } from "vuefire";
import { db } from "../firebase/init";
import { httpsCallable } from "firebase/functions";

export const useAuthStore = defineStore("auth", {
	state: () => ({
		isAuthenticated: false,
		user: null,
		isAuthLoading: true, // Initial loading state
		assistants: null,
	}),
	actions: {
		initAuth() {
			onAuthStateChanged(auth, async (user) => {
				if (user) {
					this.user = user;
					this.isAuthenticated = true;
					const userData = await getDoc(
						doc(collection(db, "clients"), this.user.uid)
					);
					const getAssistantsData = httpsCallable(
						functions,
						"getAssistantsData"
					);
					await getAssistantsData({
						hubspotId: userData.data()["hs_object_id"],
					})
						.then((data) => {
							console.log(data);
							this.assistants = data;
						})
						.catch((err) => {
							console.log(err);
						});
				} else {
					this.user = null;
					this.isAuthenticated = false;
					this.assistants = null;
				}
				this.isAuthLoading = false; // Loading is complete
			});
		},
	},
});
