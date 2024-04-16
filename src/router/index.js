import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutUsView from '../views/AboutUsView.vue'
import HowItWorksView from '../views/HowItWorksView.vue'
import HowWeHireView from '../views/HowWeHireView.vue'
import FaqView from '../views/FaqView.vue'
import WhatIsVAView from '../views/WhatIsVAView.vue'
import TypesOfVAsView from '../views/TypesOfVAsView.vue'
import VirtualAssistantView from '../views/VirtualAssistantView.vue'
import BeforeYouStartView from '../views/BeforeYouStartView.vue'
import BlogView from '../views/BlogView.vue'
import BlogPostView from '../views/BlogPostView.vue'
import ServicesView from '../views/ServicesView.vue'
import PricingView from '../views/PricingView.vue'
import ContactUsView from '../views/ContactUsView.vue'
import PrivacyPolicyView from '../views/PrivacyPolicyView.vue'
import TermsUseView from '../views/TermsUseView.vue'
import Error404View from '../views/Error404View.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      title: 'Home',
      metaTags: {
        description: "Outsource Anything with Iconic Assistants. Leading the way in remote staffing solutions, the top choice for your outsourcing needs. Starting at $9.55/Hr.",
      }
    }
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: AboutUsView,
    meta: {
      title: 'About us',
      metaTags: {
        description: "Discover Iconic Assistants – Your Trusted Partner in Virtual Professional Solutions.",
      }
    }
  },
  {
    path: '/how-it-works',
    name: 'HowItWorks',
    component: HowItWorksView,
    meta: {
      title: 'How it works',
      metaTags: {
        description: "Simplified Excellence – Explore How Iconic Assistants Transforms Your Operations.",
      }
    }
  },
  {
    path: '/how-we-hire',
    name: 'HowWeHire',
    component: HowWeHireView,
    meta: {
      title: 'How we hire',
      metaTags: {
        description: "Exclusively Top Talent – Learn About Iconic Assistants' Rigorous Hiring Process.",
      }
    }
  },
  {
    path: '/faq',
    name: 'Faq',
    component: FaqView,
    meta: {
      title: 'Faq',
      metaTags: {
        description: "Got Questions? Find Answers Here – Iconic Assistants' Frequently Asked Questions.",
      }
    }
  },
  {
    path: '/what-is-a-va',
    name: 'WhatIsVA',
    component: WhatIsVAView,
    meta: {
      title: 'What is a va',
      metaTags: {
        description: "Unlocking Efficiency – Understanding the Role of Virtual Assistants with Iconic.",
      }
    }
  },
  {
    path: '/types-of-vas',
    name: 'TypesOfVAs',
    component: TypesOfVAsView,
    meta: {
      title: 'Types of va',
      metaTags: {
        description: "Tailored Solutions – Explore the Diverse Virtual Assistant Specializations at Iconic.",
      }
    }
  },
  {
    path: '/virtual-assistant/:id',
    name: 'VirtualAssistant',
    component: VirtualAssistantView,
    meta: {
      title: 'Virtual assistant',
      metaTags: {
        description: "Precision in recruitment, efficient payroll management. Unlock skills in HR, admin, marketing, support, and more.",
      },
    }
  },
  {
    path: '/before-you-start',
    name: 'BeforeYouStart',
    component: BeforeYouStartView,
    meta: {
      title: 'Before you start',
      metaTags: {
        description: "Preparing for Success – Key Steps Before Diving into Iconic Assistants' Services.",
      }
    }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: BlogView,
    meta: {
      title: 'Blog',
      metaTags: {
        description: "Insights and Trends – Stay Informed with Iconic Assistants' Virtual Assistant Blog.",
      }
    }
  },
  {
    path: '/blog-post/:slug',
    name: 'BlogPost',
    component: BlogPostView,
    meta: {
      title: 'Blog post',
      metaTags: {
        description: "Insights and Trends – Stay Informed with Iconic Assistants' Virtual Assistant Blog.",
      }
    }
  },
  // {
  //   path: '/industries/:slug',
  //   name: 'Industries',
  //   component: IndustriesView,
  //   meta: {
  //     title: 'Industries',
  //     content: 'Welcome Industries'
  //   }
  // },
  {
    path: '/services',
    name: 'Services',
    component: ServicesView,
    meta: {
      title: 'Services',
      metaTags: {
        description: "Elevate your business to new heights with our comprehensive all-in-one service, covering remote talent recruitment, overseas payroll, security compliance and expert support. Partner with us and discover a strategic ally dedicated to ensuring your seamless growth journey.",
      },
    }
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: PricingView,
    meta: {
      title: 'Pricing',
      metaTags: {
        description: "Transparent Solutions – Explore Iconic Assistants' Competitive Virtual Assistant Pricing.",
      },
    }
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: ContactUsView,
    meta: {
      title: 'Contact us',
      metaTags: {
        description: "Connect with Us – Let's Discuss Your Business Needs with Iconic Assistants.",
      },
    }
  },
  {
    path: '/privacy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicyView,
    meta: {
      title: 'Privacy Policy',
      metaTags: {
        description: "Privacy Policy - Iconic Assistants",
      },
    }
  },
  {
    path: '/terms',
    name: 'TermsUse',
    component: TermsUseView,
    meta: {
      title: 'Terms of use',
      metaTags: {
        description: "Terms of use - Iconic Assistants",
      },
    }
  },
  {
    path: '/404',
    name: 'Error404',
    component: Error404View,
    meta: {
      title: 'Error 404',
    }
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404'
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  if (nearestWithMeta) {
    const metaDescription = nearestWithMeta.meta.metaTags.description;
    document.querySelector('meta[name="description"]').setAttribute('content', metaDescription);
  } else if (nearestWithTitle) {
    document.querySelector('meta[name="description"]').removeAttribute('content');
  }

  next();
});


export default router;