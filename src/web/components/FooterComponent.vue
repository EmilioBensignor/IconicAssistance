<template>
  <div class="bg-radioactive columnAlignCenter">
    <div class="content">
      <div class="columnAlignCenter pt-15">
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
            <router-link
              :to="'/contact-us'"
              class="primaryButton elevation-5 my-3"
              >Get Started!</router-link
            >
            <div class="w-75 social d-flex justify-space-between mb-5">
              <a href="mailto:ivan.j@iconicassistants.com">
                <img
                  src="@/web/assets/images/footer/Email-Icon.png"
                  alt="Email Icon"
                  width="55%" />
              </a>
              <a href="https://web.facebook.com/profile.php?id=61556663172397">
                <img
                  src="@/web/assets/images/footer/Facebook-Icon.png"
                  alt="Facebook Icon"
                  width="55%" />
              </a>
              <a href="https://www.instagram.com/iconicassistants/">
                <img
                  src="@/web/assets/images/footer/Instagram-Icon.png"
                  alt="Instagram Icon"
                  width="55%" />
              </a>
              <a
                href="https://www.linkedin.com/company/iconic-assistance/posts/?feedView=all&viewAsMember=true">
                <img
                  src="@/web/assets/images/footer/Linkedin-Icon.png"
                  alt="Linkedin Icon"
                  width="55%" />
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
                <router-link :to="'/our-solution'">Our Solution</router-link>
              </div>
            </div>
            <div>
              <p class="footerTitle">Learn</p>
              <div class="column">
                <router-link :to="'/what-is-an-ea'">What is an EA</router-link>
                <router-link :to="'/before-you-start'">Before you Start</router-link>
                <router-link :to="'/blog'">Blog</router-link>
                <router-link :to="'/faq'">FAQs</router-link>
              </div>
            </div>
            <div>
              <p class="footerTitle">Types of EAs</p>
              <div class="column">
                <router-link :to="'/executive-assistant/executive-assistant'">Executive Assistant</router-link>
                <router-link :to="'/executive-assistant/customer-support'">Customer Support</router-link>
                <router-link :to="'/executive-assistant/marketing-assistant'">Marketing Assistant</router-link>
                <router-link :to="'/executive-assistant/project-management'">Project Management</router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="footerBelow d-flex align-center ga-3">
          <router-link :to="'/privacy'">Privacy</router-link>
          <p>|</p>
          <router-link :to="'/terms'">Terms</router-link>
        </div>
        <p class="my-3 text-center text-white rightsReserved">
          © Iconic Assistants. All Rights Reserved {{ currentYear }}
        </p>
      </div>
    </div>
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
      return {
        currentYear: new Date().getFullYear(),
      };
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

  .footerBelow p,
  .footerBelow a {
    font-size: 0.9rem;
    color: white;
    text-decoration: none;
  }

  .rightsReserved {
    font-size: 0.8rem;
  }

  /* SM */
  @media only screen and (min-width: 480px) {
    .logo {
      height: 15vw !important;
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
      width: 60%;
    }

    .footerTitle {
      font-size: 1.45rem;
      margin-bottom: 3%;
    }

    .footerLinks .column a {
      font-size: 1.15rem;
    }

    .footerBelow p,
    .footerBelow a {
      font-size: 1rem;
    }

    .rightsReserved {
      font-size: 0.9rem;
    }
  }

  @media only screen and (min-width: 600px) {
    .logo {
      height: 12vw !important;
    }

    .social a img {
      width: 55%;
    }
  }

  /* MD */
  @media only screen and (min-width: 769px) {
    .logo {
      height: 10vw !important;
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

    .footerBelow p,
    .footerBelow a {
      font-size: 1.05rem;
    }

    .rightsReserved {
      font-size: 1rem;
    }
  }

  @media only screen and (min-width: 850px) {
    .logo {
      height: 8vw !important;
    }
  }

  /* LG */
  @media only screen and (min-width: 992px) {
    .primaryButton {
      padding: 2.5vw 5.5vw;
    }

    .social {
      width: 30% !important;
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
      gap: 3rem;
    }

    .footerLeft {
      width: 35% !important;
      align-items: flex-start;
      text-align: start;
      margin-left: 2vw;
    }

    .logo {
      height: 6.5vw !important;
      margin-left: -1vw;
    }

    .ready p:nth-child(1) {
      font-size: 1.35rem;
    }

    .ready p:nth-child(2) {
      font-size: 1.1rem;
    }

    .primaryButton {
      padding: 2vw 4vw;
    }

    .social {
      width: 60% !important;
    }

    .social a img {
      width: 60%;
    }

    .footerLinks {
      flex-direction: row;
      margin-right: 3vw;
    }

    .footerTitle {
      font-size: 1.6rem;
    }

    .footerLinks {
      margin-left: 1vw !important;
    }

    .footerLinks .column {
      gap: 0.5vw;
    }

    .footerLinks .column a {
      font-size: 1.25rem;
    }

    .rightsReserved {
      font-size: 1rem;
      margin-bottom: 3vw !important;
    }
  }

  @media only screen and (min-width: 1280px) {
    .logo {
      height: 5.5vw !important;
    }

    .ready p:nth-child(1) {
      font-size: 1.3rem;
    }

    .primaryButton {
      padding: 1.7vw 3.8vw;
    }

    .social {
      width: 55% !important;
    }

    .social a img {
      width: 65%;
    }

    .footerTitle {
      font-size: 1.5rem;
    }

    .footerLinks .column a {
      font-size: 1.2rem;
    }
  }

  /* XL */
  @media only screen and (min-width: 1440px) {
    .footerLeft {
      width: 40% !important;
    }

    .ready p:nth-child(1) {
      font-size: 1.4rem;
    }

    .ready p:nth-child(2) {
      font-size: 1.2rem;
    }

    .primaryButton {
      padding: 1.5vw 3.6vw;
    }

    .social {
      width: 45% !important;
    }

    .footerTitle {
      font-size: 1.6rem;
    }
  }

  @media only screen and (min-width: 1600px) {
    .social {
      width: 40% !important;
    }

    .footerTitle {
      font-size: 1.7rem;
    }

    .footerLinks .column a {
      font-size: 1.3rem;
    }

    .rightsReserved {
      margin: 2vw 0 !important;
    }
  }

  @media only screen and (min-width: 1750px) {
    .social {
      width: 35% !important;
    }

    .footerTitle {
      font-size: 1.8rem;
    }
  }

  @media only screen and (min-width: 1920px) {
    .logo {
      height: 100px !important;
      margin-left: -15px;
    }

    .primaryButton {
      padding: 25px 50px;
    }

    .social a img {
      width: 60%;
    }

    .footerTitle {
      font-size: 2rem;
    }

    .footerLinks .column a {
      font-size: 1.4rem;
    }

    .rightsReserved {
      margin: 25px 0 !important;
    }
  }
</style>
