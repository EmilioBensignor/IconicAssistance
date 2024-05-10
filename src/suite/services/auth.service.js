import router from "@/router";
import { auth } from "../firebase/init.js";
import ROUTES_NAMES from "@/router/constants/ROUTES_NAMES";
import { useAuthStore } from "../stores/auth.store.js";
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	sendPasswordResetEmail,
} from "firebase/auth";

let store;
const noAuthRoutes = [
	"/suite/login",
	"/suite/register",
	"/suite/reset-password",
	"/suite/reset-password-confirmation",
];

async function signup(email, password) {
	if (!store) {
		store = useAuthStore();
	}
	try {
		const user = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		store.isAuthenticated = true;
		router.replace(ROUTES_NAMES.SUITE);
	} catch (error) {
		console.log(error);
	}
}
async function login(email, password) {
	if (!store) {
		store = useAuthStore();
	}
	try {
		const res = await signInWithEmailAndPassword(auth, email, password);
		if (res) {
			store.isAuthenticated = true;
			router.replace(ROUTES_NAMES.SUITE);
		}
	} catch (error) {
		console.log(error);
	}
}
async function logout() {
	if (!store) {
		store = useAuthStore();
	}
	await signOut(auth);
	store.user = {};
	store.isAuthenticated = false;
	router.replace(ROUTES_NAMES.LOGIN);
}

function init() {
	if (!store) {
		store = useAuthStore();
	}
	onAuthStateChanged(auth, (user) => {
		if (user) {
			store.user = user;
			if (noAuthRoutes.includes(window.location.pathname)) {
				router.replace(ROUTES_NAMES.SUITE);
			}
		}
	});
}

async function resetPassword(email) {
	if (!store) {
		store = useAuthStore();
	}
	try {
		const res = await sendPasswordResetEmail(auth, email);
		if (res) {
			router.replace(ROUTES_NAMES.RESET_PASSWORD_CONFIRMATION);
		}
	} catch (error) {
		console.log(error);
	}
}
export { signup, login, logout, init, resetPassword };
