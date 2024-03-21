<template>
  <div class="bg-radioactive columnAlignCenter">
    <div class="footer columnAlignCenter">
      <div class="footerLeft w-75 flexCenter ga-3">
        <IconicLogo class="logo text-white" />
        <div class="ready columnAlignCenter ga-3">
          <p class="text-white font-weight-bold w-100">
            Ready to supercharge your business?
          </p>
          <p class="text-white w-100">
            Address any questions or concerns you might have
          </p>
        </div>
        <router-link :to="'/contact-us'" class="primaryButton elevation-5 my-3"
          >Contact Us!</router-link
        >
        <div class="w-50 social d-flex justify-space-between mt-3 mb-5">
          <a href="mailto:ivan.j@iconicassistants.com">
            <img
              src="@/assets/images/footer/Email-Icon.png"
              alt="Email Icon"
              width="65%" />
          </a>
          <a href="https://web.facebook.com/profile.php?id=61556663172397">
            <img
              src="@/assets/images/footer/Facebook-Icon.png"
              alt="Facebook Icon"
              width="65%" />
          </a>
          <a href="https://www.instagram.com/iconicassistants/">
            <img
              src="@/assets/images/footer/Instagram-Icon.png"
              alt="Instagram Icon"
              width="65%" />
          </a>
          <a
            href="https://www.linkedin.com/company/iconic-assistance/posts/?feedView=all&viewAsMember=true">
            <img
              src="@/assets/images/footer/Linkedin-Icon.png"
              alt="Linkedin Icon"
              width="65%" />
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
            <router-link :to="'/before-you-start'"
              >Before you Start</router-link
            >
            <router-link :to="'/blog'">Blog</router-link>
          </div>
        </div>
        <div class="d-flex flex-column">
          <router-link class="footerTitle" :to="'/services'"
            >Services</router-link
          >
          <router-link class="footerTitle" :to="'/pricing'"
            >Pricing</router-link
          >
        </div>
      </div>
    </div>
    <p class="my-3 text-center text-white rightsReserved">
      © Iconic Assistants. All Rights Reserved 2023
    </p>
  </div>
</template>

<script>
  import IconicLogo from "./icons/IconicLogo.vue";

  export default {
    name: "HeaderComponent",
    components: {
      IconicLogo,
    },
  };
</script>

<style scoped>
  .social a {
    cursor: pointer;
  }
  .footerLinks a {
    text-decoration: none;
    color: white;
    font-weight: 600;
  }
  .footerTitle {
    font-size: 1.35rem;
    font-weight: 600;
    color: white;
  }
  .footerLinks .column a {
    font-size: 1.05rem;
  }
  .rightsReserved {
    font-size: 0.8rem;
  }

  /* SM */
  @media only screen and (min-width: 480px) {
    .logo {
      height: 10vh !important;
    }
    .ready p {
      font-size: 1.1rem;
    }
    .primaryButton {
      padding: 4vw 7vw;
    }
    .social {
      width: 55% !important;
    }
    .social a img {
      width: 65%;
    }
    .footerTitle {
      font-size: 1.45rem;
      margin-bottom: 3%;
    }
    .footerLinks .column a {
      font-size: 1.15rem;
    }
    .rightsReserved {
      font-size: 0.9rem;
    }
  }

  /* MD */
  @media only screen and (min-width: 769px) {
    .logo {
      height: 12vh !important;
    }
    .ready p {
      font-size: 1.2rem;
    }
    .primaryButton {
      padding: 3vw 6vw;
    }
    .social {
      width: 40% !important;
    }
    .social a img {
      width: 60%;
    }
    .footerTitle {
      font-size: 1.55rem;
    }
    .footerLinks .column a {
      font-size: 1.2rem;
    }
    .rightsReserved {
      font-size: 1rem;
    }
  }

  /* LG */
  @media only screen and (min-width: 992px) {
    .logo {
      height: 11vh !important;
    }
    .primaryButton {
      padding: 2.5vw 5.5vw;
    }
    .social {
      width: 35% !important;
    }
    .social a img {
      width: 65%;
    }
  }

  /* Desktop */
  @media only screen and (min-width: 1080px) {
    .footer {
      width: 95%;
      flex-direction: row;
      justify-content: space-between;
    }
    .footerLeft {
      width: 40% !important;
      align-items: flex-start;
      text-align: start;
      margin-left: 2vw;
    }
    .logo {
      margin-left: -1vw;
    }
    .ready p:nth-child(1) {
      font-size: 1.45rem;
    }
    .ready p:nth-child(2) {
      font-size: 1.2rem;
    }
    .primaryButton {
      padding: 2vw 4vw;
    }
    .social {
      width: 50% !important;
    }
    .social a img {
      width: 60%;
    }
    .footerLinks {
      flex-direction: row;
      margin-right: 5vw;
    }
    .footerTitle {
      font-size: 1.7rem;
    }
    .footerLinks .column {
      gap: 0.5vw;
    }
    .footerLinks .column a {
      font-size: 1.35rem;
    }
    .rightsReserved {
      font-size: 1.15rem;
      margin-bottom: 3vw !important;
    }
  }
</style>
