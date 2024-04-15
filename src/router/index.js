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
import Error404View from '../views/Error404View.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      title: 'Home',
      metaTags: [
        {
          name: 'description',
          content: 'Welcome Home',
        }
      ],
    }
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: AboutUsView,
    meta: {
      title: 'About us',
      metaTags: [
        {
          name: 'description',
          content: 'Welcome About us',
        }
      ],
    }
  },
  {
    path: '/how-it-works',
    name: 'HowItWorks',
    component: HowItWorksView,
    meta: {
      title: 'How it works',
      metaTags: [
        {
          name: 'description',
          content: 'Welcome How it works',
        }
      ],
    }
  },
  {
    path: '/how-we-hire',
    name: 'HowWeHire',
    component: HowWeHireView,
    meta: {
      title: 'How we hire',
      metaTags: [
        {
          name: 'description',
          content: 'Welcome How we hire',
        }
      ],
    }
  },
  {
    path: '/faq',
    name: 'Faq',
    component: FaqView,
    meta: {
      title: 'Faq',
      metaTags: [
        {
          name: 'description',
          content: 'Welcome Faq',
        }
      ],
    }
  },
  {
    path: '/what-is-a-va',
    name: 'WhatIsVA',
    component: WhatIsVAView,
    meta: {
      title: 'What is a va',
      metaTags: [
        {
          name: 'description',
          content: 'Welcome What is a va',
        }
      ],
    }
  },
  {
    path: '/types-of-vas',
    name: 'TypesOfVAs',
    component: TypesOfVAsView,
    meta: {
      title: 'Types of va',
      metaTags: [
        {
          name: 'description',
          content: 'Welcome Types of va',
        }
      ],
    }
  },
  {
    path: '/virtual-assistant/:id',
    name: 'VirtualAssistant',
    component: VirtualAssistantView,
    meta: {
      title: 'Virtual assistant',
      metaTags: [
        {
          name: 'description',
          content: 'Welcome Virtual assistant',
        }
      ],
    }
  },
  {
    path: '/before-you-start',
    name: 'BeforeYouStart',
    component: BeforeYouStartView,
    meta: {
      title: 'Before you start',
      metaTags: [
        {
          name: 'description',
          content: 'Welcome Before you start',
        }
      ],
    }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: BlogView,
    meta: {
      title: 'Blog',
      metaTags: [
        {
          name: 'description',
          content: 'Welcome Blog',
        }
      ],
    }
  },
  {
    path: '/blog-post/:slug',
    name: 'BlogPost',
    component: BlogPostView,
    meta: {
      title: 'Blog post',
      metaTags: [
        {
          name: 'description',
          content: 'Welcome Blog post',
        }
      ],
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
      metaTags: [
        {
          name: 'description',
          content: 'Welcome Services',
        }
      ],
    }
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: PricingView,
    meta: {
      title: 'Pricing',
      metaTags: [
        {
          name: 'description',
          content: 'Welcome Pricing',
        }
      ],
    }
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: ContactUsView,
    meta: {
      title: 'Contact us',
      metaTags: [
        {
          name: 'description',
          content: 'Welcome Contact us',
        }
      ],
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

// router.beforeEach((to, from, next) => {
//   const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)
//   const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)
//   if (nearestWithTitle) document.title = nearestWithTitle.meta.title
//   Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el))
//   if (!nearestWithMeta) return next()
//   nearestWithMeta.meta.metaTags.map(tagDef => {
//     const tag = document.createElement('meta')
//     Object.keys(tagDef).forEach(key => {
//       tag.setAttribute(key, tagDef[key])
//     })
//     tag.setAttribute('data-vue-router-controlled', '')
//     return tag
//   }).forEach(tag => document.head.appendChild(tag))
//   next()
// })

export default router;