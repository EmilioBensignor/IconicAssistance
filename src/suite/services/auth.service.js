import router from "@/router";
import { auth, db, functions } from "../firebase/init.js";
import ROUTES_NAMES from "@/router/constants/ROUTES_NAMES";
import { useAuthStore } from "../stores/auth.store.js";
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	sendPasswordResetEmail,
} from "firebase/auth";
import { ref } from "vue";
import { httpsCallableFromURL } from "firebase/functions";
import { doc, getDoc } from "firebase/firestore";

let store;
const noAuthRoutes = [
	"/suite/login",
	"/suite/register",
	"/suite/reset-password",
	"/suite/reset-password-confirmation",
];

const resetEmail = ref(null);

const registerError = ref(null);
const loginError = ref(null);

const userId = ref(null);

async function signup(email, password) {
	registerError.value = "";
	if (!store) {
		store = useAuthStore();
	}
	const signUpClient = httpsCallableFromURL(
		functions,
		"https://signupclient-cgjqatnysa-uc.a.run.app"
	);
	await signUpClient({ email, password })
		.then((res) => {
			if (res.data === "User created.") {
				login(email, password);
			} else {
				registerError.value = res.data;
			}
		})
		.catch((error) => {
			registerError.value = error;
		});
}
async function login(email, password) {
	loginError.value = null;
	if (!store) {
		store = useAuthStore();
	}
	try {
		const response = await signInWithEmailAndPassword(
			auth,
			email,
			password
		);
		if (response) {
			store.isAuthenticated = true;
			router.push(ROUTES_NAMES.SUITE);
		}
	} catch (error) {
		loginError.value = error.message;
	}
}
async function logout() {
	if (!store) {
		store = useAuthStore();
	}
	await signOut(auth);
	store.user = {};
	store.isAuthenticated = false;
	router.push(ROUTES_NAMES.LOGIN);
}

function init() {
	if (!store) {
		store = useAuthStore();
	}
	onAuthStateChanged(auth, (user) => {
		if (user) {
			store.user = user;
			userId.value = user.uid;
			if (noAuthRoutes.includes(window.location.pathname)) {
				router.push(ROUTES_NAMES.SUITE);
			}
		}
	});
}

async function resetPassword(email) {
	try {
		await sendPasswordResetEmail(auth, email).then(() => {
			resetEmail.value = email;
			router.push(ROUTES_NAMES.RESET_PASSWORD_CONFIRMATION);
		});
	} catch (error) {
		console.log(error);
	}
}
export {
	signup,
	login,
	logout,
	init,
	resetPassword,
	resetEmail,
	registerError,
	loginError,
	userId,
};
