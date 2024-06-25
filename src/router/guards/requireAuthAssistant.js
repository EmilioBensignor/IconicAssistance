import { useAuthStore } from "@/suite/stores/auth.store";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { watch } from "vue";
import ROUTES_NAMES from "../constants/ROUTES_NAMES";
import { db } from "@/suite/firebase/init.js";

const requireAuthAssistant = (to, from, next) => {
	const authStore = useAuthStore();

	const checkFirestore = async (uid) => {
		try {
			const docRef = doc(db, "assistants", uid);
			const docSnap = await getDoc(docRef);
			return docSnap.exists();
		} catch (error) {
			console.error("Error checking Firestore:", error);
			return false; // Assume the document doesn't exist if there's an error
		}
	};

	const proceed = async () => {
		if (authStore.isAuthenticated) {
			const exists = await checkFirestore(authStore.user.uid);
			if (exists) {
				next();
			} else {
				next(ROUTES_NAMES.SUITE);
			}
		} else {
			next(ROUTES_NAMES.LOGIN);
		}
	};

	if (authStore.isAuthLoading) {
		const unwatch = watch(
			() => authStore.isAuthLoading,
			async (isAuthLoading) => {
				if (!isAuthLoading) {
					unwatch();
					await proceed();
				}
			}
		);
	} else {
		proceed();
	}
};

export default requireAuthAssistant;
