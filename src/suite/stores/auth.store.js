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
		invoices: null,
	}),
	actions: {
		initAuth() {
			onAuthStateChanged(auth, async (user) => {
				if (user) {
					this.user = user;
					this.isAuthenticated = true;
					this.isAuthLoading = false; // Loading is complete
					const userData = await getDoc(
						doc(collection(db, "clients"), this.user.uid)
					);
					if (!userData.exists()) {
						return;
					}
					const getAssistantsData = httpsCallable(
						functions,
						"getAssistantsData"
					);
					await getAssistantsData({
						hubspotId: userData.data()["hs_object_id"],
					})
						.then((data) => {
							this.assistants = data;
						})
						.catch((err) => {
							console.log(err);
						});
					const getInvoicesData = httpsCallable(
						functions,
						"getInvoicesData"
					);
					await getInvoicesData({
						hubspotId: userData.data()["hs_object_id"],
					})
						.then((data) => {
							let sortedInvoices = data;
							sortedInvoices.data.invoices.sort(
								(a, b) =>
									new Date(b.properties.hs_due_date) -
									new Date(a.properties.hs_due_date)
							);
							this.invoices = sortedInvoices;
						})
						.catch((err) => {
							console.log(err);
						});
				} else {
					this.user = null;
					this.isAuthenticated = false;
					this.assistants = null;
					this.invoices = null;
					this.isAuthLoading = false; // Loading is complete
				}
			});
		},
	},
});
