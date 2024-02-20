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

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/about-us',
      name: 'AboutUs',
      component: AboutUsView
    },
    {
      path: '/how-it-works',
      name: 'HowItWorks',
      component: HowItWorksView
    },
    {
      path: '/how-we-hire',
      name: 'HowWeHire',
      component: HowWeHireView
    },
    {
      path: '/faq',
      name: 'Faq',
      component: FaqView
    },
    {
      path: '/what-is-a-va',
      name: 'WhatIsVA',
      component: WhatIsVAView,
    },
    {
      path: '/types-of-vas',
      name: 'TypesOfVAs',
      component: TypesOfVAsView,
    },
    {
      path: '/virtual-assistant/:id',
      name: 'VirtualAssistant',
      component: VirtualAssistantView,
    },
    {
      path: '/before-you-start',
      name: 'BeforeYouStart',
      component: BeforeYouStartView
    },
    {
      path: '/blog',
      name: 'Blog',
      component: BlogView
    },
    {
      path: '/blog-post/:slug',
      name: 'BlogPost',
      component: BlogPostView,
    },
    {
      path: '/services',
      name: 'Services',
      component: ServicesView
    },
    {
      path: '/pricing',
      name: 'Pricing',
      component: PricingView
    },
    {
      path: '/contact-us',
      name: 'ContactUs',
      component: ContactUsView
    },
  ]
})

export default router


// {
//   path: '/about',
//   name: 'about',
//   route level code-splitting
//   this generates a separate chunk (About.[hash].js) for this route
//   which is lazy-loaded when the route is visited.
//   component: () => import('../views/AboutView.vue')
// }
// { path: '/404', component: NotFound },
// { path: '/:catchAll(.*)', redirect: '/404' },