<template>
  <div
    class="scale column justify-space-between ga-3 rounded-lg elevation-5 pa-5"
  >
    <p class="titleScale text-white text-start font-weight-bold">
      Get 2 free weeks!
    </p>
    <p class="w-auto pSmall text-lila text-start">
      Share this referral code with someone and get a discount
    </p>
    <button
      @click="shareReferralCode"
      class="secondaryButton justify-center ga-3 bg-btnViolet btnVioletBorder elevation-4 mt-3"
    >
      {{ referralCode }}
      <i class="mdi mdi-share"></i>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    referralCode: {
      type: String,
      required: true,
    },
  },
  methods: {
    async shareReferralCode() {
      if (navigator.share) {
        try {
          await navigator.share({
            title: "Referral Code",
            text: `Use this referral code ${this.referralCode} to get a discount!`,
            // url: 'https://iconicassistants.na.chilipiper.com/book/me/discovery-meeting?type=expansion-call',
          });
          console.log("Successfully shared");
        } catch (error) {
          console.error("Error sharing", error);
        }
      } else {
        alert("Sharing not supported on this browser.");
      }
    },
  },
};
</script>

<style scoped>
.scale {
  width: 350px;
  border: 2px solid #313053;
}

.scale p {
  width: 100% !important;
}

.titleScale {
  font-size: 1.2rem;
}

.secondaryButton {
  font-size: 1.1rem;
  padding: 4%;
  display: flex;
  align-items: center;
}

.mdi-share {
  font-size: 1.5rem;
}

.mt-3 {
  margin-top: 1rem;
}
</style>
