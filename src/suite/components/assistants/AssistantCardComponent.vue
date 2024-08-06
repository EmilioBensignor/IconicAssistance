<template>
	<div class="column ga-10">
		<div
			class="card w-100 bg-white columnAlignCenter ga-5 rounded-lg elevation-5 pa-5"
		>
			<div class="d-flex align-start align-self-start flex-wrap ga-3">
				<div class="profile allCenter rounded-lg elevation-3 pa-2">
					<img
						width="75%"
						src="@/suite/assets/images/Suite-Logo.png"
						alt="Suite Logo"
					/>
				</div>
				<div class="column ga-3">
					<div class="cardTitle rowCenter ga-2">
						<p class="w-auto">{{ assistant.firstname }}</p>
						<p class="w-auto">{{ assistant.lastname }}</p>
						<div class="assistantType rounded-lg px-1">
							<p>
								{{
									assistant.role
										.split(" ")
										.map((n) => n[0])
										.join("")
								}}
							</p>
						</div>
					</div>
					<div class="info rowCenter flex-wrap ga-2">
						<p class="w-auto pSmall">Last rating:</p>
						<div>
							<v-rating
								v-model="assistant.last_rating"
								empty-icon="mdi-star-outline"
								full-icon="mdi-star"
								half-icon="mdi-star-half"
								half-increments
								readonly
								size="small"
								color="radioactive"
							></v-rating>
						</div>
						<p class="w-auto pSmall font-weight-bold">
							{{
								ratingMap[
									Math.round(
										parseInt(assistant.last_rating, 10)
									)
								]
							}}
						</p>
						<button
							@click="openDialog = true"
							class="pSmall bg-radioactive rounded-lg elevation-3 py-1 px-2"
						>
							Rate my assistant
						</button>
					</div>
				</div>
				<div class="column ga-2">
					<div class="rowCenter ga-2">
						<span class="mdi mdi-circle text-green"></span>
						<p class="w-auto">
							Online <span class="pSmall">(since: 8:30AM)</span>
						</p>
					</div>
					<div class="rowCenter ga-2">
						<span class="mdi mdi-clock-time-four-outline"></span>
						<p class="w-auto">
							Current shift:
							<span class="pSmall">{{ assistant.shift }}</span>
						</p>
					</div>
					<div class="rowCenter ga-2">
						<span class="mdi mdi-check-circle-outline"></span>
						<p class="w-auto">
							Current task: <span class="pSmall">???</span>
						</p>
					</div>
				</div>
			</div>
			<div class="cardBody column ga-3">
				<p class="font-weight-bold">Assistant Info</p>
				<div class="rowCenter flex-wrap ga-3">
					<div class="rowCenter ga-3">
						<div class="bg-suiteBg rounded elevation-1 px-1">
							<span class="mdi mdi-email-outline"></span>
						</div>
						<div>
							<p class="pSmall bold500">Primary Email</p>
							<p class="w-auto pSmall">{{ assistant.email }}</p>
						</div>
					</div>
					<div class="rowCenter ga-3">
						<div class="bg-suiteBg rounded elevation-1 px-1">
							<span class="mdi mdi-email-outline"></span>
						</div>
						<div>
							<p class="pSmall bold500">Alt Email</p>
							<p class="w-auto pSmall">{{ assistant.email }}</p>
						</div>
					</div>
					<div class="rowCenter ga-3">
						<div class="bg-suiteBg rounded elevation-1 px-1">
							<span class="mdi mdi-phone"></span>
						</div>
						<div>
							<p class="pSmall bold500">Phone</p>
							<p class="w-auto pSmall">{{ assistant.phone }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<v-dialog v-model="openDialog">
			<v-card class="dialogCard bg-suiteBg column ga-3" max-width="100%">
				<v-toolbar class="bg-suiteBg">
					<v-toolbar-title>Rate your assistant</v-toolbar-title>
					<v-btn icon="mdi-close" @click="openDialog = false"></v-btn>
				</v-toolbar>
				<div class="rowCenter">
					<div class="allCenter">
						<img
							width="50%"
							src="@/suite/assets/images/Suite-Logo.png"
							alt="Suite Logo"
						/>
					</div>
					<div class="cardTitle rowCenter ga-2">
						<p class="w-auto">{{ assistant.firstname }}</p>
						<p class="w-auto">{{ assistant.lastname }}</p>
						<div class="assistantType rounded-lg px-1">
							<p class="w-auto">EA</p>
						</div>
					</div>
				</div>
				<div class="px-5">
					<p>Overall Rating</p>
					<div class="dialogStars rowCenter ga-2">
						<v-rating
							v-model="newRating.score"
							empty-icon="mdi-star-outline"
							full-icon="mdi-star"
							half-icon="mdi-star-half"
							half-increments
							hover
							size="small"
							color="radioactive"
						></v-rating>
						<p class="w-auto font-weight-bold">
							{{
								ratingMap[
									Math.round(parseInt(newRating.score, 10))
								]
							}}
						</p>
					</div>
				</div>
				<form class="column ga-2 px-5">
					<label for="review">Write your review</label>
					<textarea
						v-model="newRating.feedback"
						class="rounded pa-2"
						placeholder="Feedback will be used to improve your assistant's performance."
						name="review"
						id="review"
					></textarea>
					<p class="w-auto pSmall">
						This review will be visible to the account leads only,
						not to the assistant.
					</p>
					<div class="d-flex justify-end">
						<v-btn
							@click.prevent="submitReview"
							:loading="loading"
							color="radioactive"
							class="text-none"
							>Submit Review</v-btn
						>
					</div>
				</form>
			</v-card>
		</v-dialog>
		<div>
			<router-link
				class="secondaryButton"
				:to="routes.ASSISTANT_ACTIONS + '/' + assistant.id"
			>
				Assistant Tasks
			</router-link>
		</div>
	</div>
</template>

<script>
import ROUTES_NAMES from "@/router/constants/ROUTES_NAMES";
import SecondaryBtnComponent from "../buttons/SecondaryBtnComponent.vue";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/suite/firebase/init";
import { useAuthStore } from "@/suite/stores/auth.store";

export default {
	name: "AssistantCardComponent",
	props: {
		assistant: {
			type: Object,
			required: true,
		},
	},
	components: {
		SecondaryBtnComponent,
	},
	data() {
		return {
			routes: ROUTES_NAMES,
			openDialog: false,
			ratingMap: {
				0: "Terrible",
				1: "Bad",
				2: "Good",
				3: "Great",
				4: "Excellent",
				5: "Perfect",
			},
			store: useAuthStore(),
			newRating: {
				score: 0,
				feedback: "",
			},
			loading: false,
		};
	},
	methods: {
		async submitReview() {
			if (this.newRating.score === 0) return;
			this.loading = true;
			let newRatings;
			this.newRating.rated_by = this.store.user.uid;
			this.newRating.rated_at = new Date().toJSON();
			if (this.assistant.ratings) {
				newRatings = [...this.assistant.ratings, this.newRating];
			} else {
				newRatings = [this.newRating];
			}
			const ref = doc(db, "assistants", this.assistant.id);
			await updateDoc(ref, {
				ratings: newRatings,
				last_rating: this.newRating.score,
			})
				.then(() => {
					this.assistant.ratings = newRatings;
					this.assistant.last_rating = this.newRating.score;
					this.openDialog = false;
					this.newRating = { score: 0, feedback: "" };
					this.loading = false;
				})
				.catch((error) => {
					console.log(error);
					this.loading = false;
				});
		},
	},
};
</script>

<style>
.v-dialog .dialogCard .v-toolbar__content {
	justify-content: space-between;
}

.v-dialog .dialogCard .v-toolbar-title__placeholder {
	margin-left: 0.5rem;
}
</style>

<style scoped>
.card {
	max-width: max-content;
	text-decoration: none;
}

.profile {
	width: 4rem;
	height: 4rem;
}

.cardTitle p {
	font-weight: 600;
}

.assistantType {
	border: 2px solid #373ae6;
}

.assistantType p {
	font-size: 0.75rem;
}

.pSmall {
	font-size: 0.85rem;
}

.bold500 {
	font-weight: 500;
}

.dialogStars span {
	font-size: 1.5rem;
}

textarea {
	border: 2px solid #373ae6;
}
</style>
