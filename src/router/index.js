import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutUsView from '../views/AboutUsView.vue'
import HowItWorksView from '../views/HowItWorksView.vue'
import HowWeHireView from '../views/HowWeHireView.vue'
import FaqView from '../views/FaqView.vue'
import WhatIsEAView from '../views/WhatIsEAView.vue'
import TypesOfEAsView from '../views/TypesOfEAsView.vue'
import ExecutiveAssistantView from '../views/ExecutiveAssistantView.vue'
import BeforeYouStartView from '../views/BeforeYouStartView.vue'
import BlogView from '../views/BlogView.vue'
import BlogPostView from '../views/BlogPostView.vue'
import ServicesView from '../views/ServicesView.vue'
import PricingView from '../views/PricingView.vue'
import ContactUsView from '../views/ContactUsView.vue'
import GetStartedView from '../views/GetStartedView.vue'
import PrivacyPolicyView from '../views/PrivacyPolicyView.vue'
import TermsUseView from '../views/TermsUseView.vue'
import Error404View from '../views/Error404View.vue'
import TestView from '../views/TestView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      title: 'Iconic Executive Asssitants',
      metaTags: {
        description: "Iconic Assistants supercharge productivity for entrepreneurs, executives, startups, and high growth companies.",
      }
    }
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: AboutUsView,
    meta: {
      title: 'About Us - Iconic Assistants',
      metaTags: {
        description: "Iconic Assistants supercharge productivity for entrepreneurs, executives, startups, and high growth companies.",
      }
    }
  },
  {
    path: '/how-it-works',
    name: 'HowItWorks',
    component: HowItWorksView,
    meta: {
      title: 'How It Works - Iconic Assistants',
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
      title: 'How We Hire - Iconic Assistants',
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
      title: 'FAQ - Iconic Assistants',
      metaTags: {
        description: "Got Questions? Find Answers Here – Iconic Assistants' Frequently Asked Questions.",
      }
    }
  },
  {
    path: '/what-is-an-ea',
    name: 'WhatIsEA',
    component: WhatIsEAView,
    meta: {
      title: 'What Is an EA - Iconic Assistants',
      metaTags: {
        description: "Unlocking Efficiency – Understanding the Role of Executive Assistants with Iconic.",
      }
    }
  },
  {
    path: '/types-of-eas',
    name: 'TypesOfEAs',
    component: TypesOfEAsView,
    meta: {
      title: 'Types of EAs - Iconic Assistants',
      metaTags: {
        description: "Tailored Solutions – Explore the Diverse Executive Assistant Specializations at Iconic.",
      }
    }
  },
  {
    path: '/executive-assistant/:id',
    name: 'ExecutiveAssistant',
    component: ExecutiveAssistantView,
    meta: {
      title: 'Executive Assistant - Iconic Assistants',
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
      title: 'Before You Start - Iconic Assistants',
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
      title: 'Blog - Iconic Assistants',
      metaTags: {
        description: "Insights and Trends – Stay Informed with Iconic Assistants' Executive Assistant Blog.",
      }
    }
  },
  {
    path: '/blog-post/:slug',
    name: 'BlogPost',
    component: BlogPostView,
    meta: {
      title: 'Blog Post - Iconic Assistants',
      metaTags: {
        description: "Insights and Trends – Stay Informed with Iconic Assistants' Executive Assistant Blog.",
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
      title: 'Services - Iconic Assistants',
      metaTags: {
        description: "Elevate your business to new heights with our Executive Assistant services, covering remote talent recruitment, overseas payroll and expert support.",
      },
    }
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: PricingView,
    meta: {
      title: 'Pricing - Iconic Assistants',
      metaTags: {
        description: "Transparent Solutions – Explore Iconic Assistants' Competitive Executive Assistant Pricing.",
      },
    }
  },
  {
    path: '/test',
    name: 'Test',
    component: TestView,
    meta: {
      title: 'Testing - Iconic Assistants',
    }
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: ContactUsView,
    meta: {
      title: 'Contact Us - Iconic Assistants',
      metaTags: {
        description: "Connect with Us – Let's Discuss Your Business Needs with Iconic Assistants.",
      },
    }
  },
  {
    path: '/get-started',
    name: 'GetStarted',
    component: GetStartedView,
    meta: {
      title: 'Start delegating with ICONIC Assistants',
      metaTags: {
        description: "Discover the power of having realiable Executive Assistants.",
      },
    }
  },
  // {
  //   path: '/old-contact-us',
  //   name: 'OldContactUs',
  //   component: OldContactUsView,
  //   meta: {
  //     title: 'Old Contact Us - Iconic Assistants',
  //     metaTags: {
  //       description: "Connect with Us – Let's Discuss Your Business Needs with Iconic Assistants.",
  //     },
  //   }
  // },
  {
    path: '/privacy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicyView,
    meta: {
      title: 'Privacy Policy - Iconic Assistants',
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
      title: 'Terms of Use - Iconic Assistants',
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
      title: 'Error 404 - Iconic Assistants',
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