<template>
  <div class="bg-radioactive columnAlignCenter">
    <IconicLogo class="text-white" />
    <div class="w-75 flexCenter mt-3 ga-3">
      <p class="text-white font-weight-bold w-100">Ready to supercharge your business?</p>
      <p class="text-white w-100">Address any questions or concerns you might have</p>
      <router-link :to="'/contact-us'" class="primaryButton elevation-5 my-3">Contact Us!</router-link>
      <div class="w-75 social d-flex justify-space-between mb-5">
        <a href="mailto:ivan.j@iconicassistants.com">
          <img src="@/assets/images/footer/Email-Icon.png" alt="Email Icon" width="40%">
        </a>
        <!-- <a href="https://www.facebook.com/YourPage">
          <img src="@/assets/images/footer/Facebook-Icon.png" alt="Facebook Icon" width="40%">
        </a> -->
        <a href="https://www.instagram.com/iconicassistants/">
          <img src="@/assets/images/footer/Instagram-Icon.png" alt="Instagram Icon" width="40%">
        </a>
        <a href="https://www.linkedin.com/company/iconic-assistance/posts/?feedView=all&viewAsMember=true">
          <img src="@/assets/images/footer/Linkedin-Icon.png" alt="Linkedin Icon" width="40%">
        </a>
      </div>
    </div>
    <div class="footerLinks align-self-start column ga-10 ml-8 mt-5 mb-3">
      <div>
        <p class="footerTitle">About</p>
        <div class="column">
          <router-link :to="'/about-us'">About Us</router-link>
          <router-link :to="'/how-it-works'">How It Works</router-link>
          <router-link :to="'/how-we-hire'">How We Hire</router-link>
          <router-link :to="'/faq'">FAQs</router-link>
        </div>
      </div>
      <div>
        <p class="footerTitle">Learn</p>
        <div class="column">
          <router-link :to="'/what-is-a-va'">What is a VA</router-link>
          <router-link :to="'/types-of-vas'">Types of VA</router-link>
          <router-link :to="'/before-you-start'">Before you Start</router-link>
          <router-link :to="'/blog'">Blog</router-link>
        </div>
      </div>
      <div class="d-flex flex-column">
        <router-link class="footerTitle" :to="'/services'">Services</router-link>
        <router-link class="footerTitle" :to="'/pricing'">Pricing</router-link>
      </div>
    </div>
    <p class="my-3 text-center text-white rightsReserved">© Iconic Assistants. All Rights Reserved 2023</p>
  </div>
</template>

<script>
  import IconicLogo from "./icons/IconicLogo.vue";

  export default {
    name: "HeaderComponent",
    components: {
      IconicLogo,
    },
    data() {
      return {};
    },
  };
</script>

<style scoped>
.social a{
  cursor: pointer;
}
.footerLinks a {
  text-decoration: none;
  color: white;
  font-weight: 600;
}
.footerLinks .column a {
  font-size: 1.05rem;
}
.footerTitle {
  font-size: 1.35rem;
  font-weight: 600;
  color: white;
}
.rightsReserved {
  font-size: 0.8rem;
}
</style>
