<template>
	<div class="column ga-10">
		<div
			class="card w-100 bg-lightViolet column ga-5 rounded-lg elevation-5 pa-5"
		>
			<div class="column align-self-start ga-5">
				<div class="d-flex flex-wrap ga-3">
					<div
						class="profile allCenter borderLila rounded-lg elevation-3 pa-2"
					>
						<p class="w-auto font-weight-bold text-white">
							{{
								getUserInitials(
									assistant.firstname,
									assistant.lastname
								)
							}}
						</p>
					</div>
					<div class="column ga-2">
						<div class="cardTitle rowCenter ga-2">
							<p class="w-auto text-white">
								{{ assistant.firstname }}
							</p>
							<p class="w-auto text-white">
								{{ assistant.lastname }}
							</p>
							<div
								class="assistantType borderLila rounded-lg px-1"
							>
								<p class="text-white">
									{{
										assistant.role
											.split(" ")
											.map((n) => n[0])
											.join("")
									}}
									<v-tooltip
										activator="parent"
										location="top"
									>
										{{ assistant.role }}
									</v-tooltip>
								</p>
							</div>
						</div>
						<div class="info rowCenter flex-wrap ga-2">
							<p class="w-auto text-white pSmall">
								Overall rating:
							</p>
							<div>
								<v-rating
									v-model="assistant.rating_avg"
									empty-icon="mdi-star-outline"
									full-icon="mdi-star"
									half-icon="mdi-star-half"
									half-increments
									readonly
									density="compact"
									color="blueViolet"
								></v-rating>
							</div>
							<button
								@click="openDialog = true"
								class="rateBtn pSmall bg-btnViolet rounded-lg elevation-3 py-1 px-2"
							>
								Rate my assistant
							</button>
						</div>
					</div>
				</div>
				<div class="cardContent column ga-2">
					<div class="rowCenter ga-2">
						<span class="mdi mdi-circle text-green"></span>
						<p class="w-auto text-white">
							Online <span class="pSmall">(since: 8:30AM)</span>
						</p>
					</div>
					<div class="rowCenter ga-2">
						<span class="mdi mdi-clock-time-four-outline"></span>
						<p class="w-auto text-white">
							Current shift:
							<span class="pSmall">{{ assistant.shift }}</span>
						</p>
					</div>
					<!-- <div class="rowCenter ga-2">
            <span class="mdi mdi-check-circle-outline"></span>
            <p class="w-auto text-white">
              Current task: <span class="pSmall">???</span>
            </p>
          </div> -->
				</div>
			</div>
			<div class="cardBody column ga-3">
				<p class="text-white font-weight-bold">Assistant Info</p>
				<div class="rowCenter flex-wrap ga-3">
					<div class="rowCenter ga-3">
						<div
							class="bg-lightViolet borderLila rounded elevation-1 px-1"
						>
							<span
								class="text-btnViolet mdi mdi-email-outline"
							></span>
						</div>
						<div>
							<p class="text-white pSmall bold500">
								Primary Email
							</p>
							<p class="w-auto text-white pSmall">
								{{ assistant.email }}
							</p>
						</div>
					</div>
					<div class="rowCenter ga-3">
						<div
							class="bg-lightViolet borderLila rounded elevation-1 px-1"
						>
							<span
								class="text-btnViolet mdi mdi-email-outline"
							></span>
						</div>
						<div>
							<p class="text-white pSmall bold500">Alt Email</p>
							<p class="w-auto text-white pSmall">
								{{ assistant.email }}
							</p>
						</div>
					</div>
					<div class="rowCenter ga-3">
						<div
							class="bg-lightViolet borderLila rounded elevation-1 px-1"
						>
							<span class="text-btnViolet mdi mdi-phone"></span>
						</div>
						<div>
							<p class="text-white pSmall bold500">Phone</p>
							<p class="w-auto text-white pSmall">
								{{ assistant.phone }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<v-dialog v-model="openDialog">
			<v-card class="dialogCard bg-suiteBg column ga-3" max-width="600px">
				<v-toolbar class="bg-suiteBg">
					<v-toolbar-title>Rate your assistant</v-toolbar-title>
					<v-btn icon="mdi-close" @click="openDialog = false"></v-btn>
				</v-toolbar>
				<div class="rowCenter ml-1 px-4">
					<div class="cardTitle rowCenter ga-2">
						<p class="w-auto text-white">
							{{ assistant.firstname }}
						</p>
						<p class="w-auto text-white">
							{{ assistant.lastname }}
						</p>
						<div class="assistantType borderLila rounded-lg px-1">
							<p class="w-auto text-white">
								{{
									assistant.role
										.split(" ")
										.map((n) => n[0])
										.join("")
								}}
								<v-tooltip activator="parent" location="top">
									{{ assistant.role }}
								</v-tooltip>
							</p>
						</div>
					</div>
				</div>
				<div class="rowCenter ga-3 px-5">
					<p class="w-auto text-white">Rating</p>
					<div class="dialogStars rowCenter ga-2">
						<v-rating
							v-model="newRating.score"
							empty-icon="mdi-star-outline"
							full-icon="mdi-star"
							half-icon="mdi-star-half"
							half-increments
							hover
							density="compact"
							color="blueViolet"
						></v-rating>
					</div>
				</div>
				<form class="column ga-2 px-5">
					<label for="review">Write your review</label>
					<textarea
						v-model="newRating.feedback"
						class="rounded pa-2 text-white"
						rows="3"
						placeholder="Feedback will be used to improve your assistant's performance."
						name="review"
						id="review"
					></textarea>
					<p class="w-auto text-lila pSmall">
						This review will be visible to the account leads only,
						not to the assistant.
					</p>
					<div class="d-flex justify-end">
						<v-btn
							@click.prevent="submitReview"
							:loading="loading"
							color="btnViolet"
							class="h-auto text-none rounded-lg px-5 py-3"
							>Submit Review</v-btn
						>
					</div>
				</form>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
import ROUTES_NAMES from "@/router/constants/ROUTES_NAMES";
import SecondaryBtnComponent from "../buttons/SecondaryBtnComponent.vue";
import { doc, updateDoc } from "firebase/firestore";
import { db, functions } from "@/suite/firebase/init";
import { useAuthStore } from "@/suite/stores/auth.store";
import { httpsCallable } from "firebase/functions";

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
			const sum = newRatings
				.map((r) => r.score)
				.reduce((acc, cur) => {
					return acc + cur;
				}, 0);

			const ratingsAvg = Math.round((sum / newRatings.length) * 2) / 2;
			const ref = doc(db, "assistants", this.assistant.id);
			await updateDoc(ref, {
				ratings: newRatings,
				rating_avg: ratingsAvg,
			})
				.then(async () => {
					this.assistant.ratings = newRatings;
					this.assistant.rating_avg = ratingsAvg;

					const saveReviewToHubspot = httpsCallable(
						functions,
						"saveReviewToHubspot"
					);
					await saveReviewToHubspot({
						clientId: this.store.userData["hs_object_id"],
						assistantId: this.assistant["hs_object_id"],
						dealId: this.assistant["dealId"],
						review: this.newRating,
					})
						.then((data) => {
							console.log(data);
							this.openDialog = false;
							this.newRating = { score: 0, feedback: "" };
							this.loading = false;
						})
						.catch((err) => {
							console.log(err);
						});
				})
				.catch((error) => {
					console.log(error);
					this.loading = false;
				});
		},
		getUserInitials(firstname, lastname) {
			if (!firstname || !lastname) return "";
			return (
				firstname.charAt(0).toUpperCase() +
				lastname.charAt(0).toUpperCase()
			);
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

.rateBtn,
.dialogCard .v-btn {
	font-family: "Poppins", sans-serif;
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

.profile p {
	font-size: 1.25rem;
}

.cardTitle p {
	font-weight: 600;
}

.borderLila {
	border: 2px solid #8785ba;
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
	resize: none;
	border: 2px solid #6273F6;
}

.dialogCard {
	margin: 0 auto;
}

@media only screen and (min-width: 1080px) {
	.cardContent p {
		font-size: 1.1rem;
	}
}
</style>
