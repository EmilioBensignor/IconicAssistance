import HomeView from "../web/views/HomeView.vue";
import AboutUsView from "../web/views/AboutUsView.vue";
import HowItWorksView from "../web/views/HowItWorksView.vue";
import HowWeHireView from "../web/views/HowWeHireView.vue";
import FaqView from "../web/views/FaqView.vue";
import WhatIsEAView from "../web/views/WhatIsEAView.vue";
import TypesOfEAsView from "../web/views/TypesOfEAsView.vue";
import ExecutiveAssistantView from "../web/views/ExecutiveAssistantView.vue";
import BeforeYouStartView from "../web/views/BeforeYouStartView.vue";
import BlogView from "../web/views/BlogView.vue";
import BlogPostView from "../web/views/BlogPostView.vue";
import OurSolutionView from "../web/views/OurSolutionView.vue";
import ContactUsView from "../web/views/ContactUsView.vue";
import BecomeAnAssistantView from "../web/views/BecomeAnAssistantView.vue";
import GetStartedView from "../web/views/GetStartedView.vue";
import DiscoveryCallView from "../web/views/DiscoveryCallView.vue";
import ThankYouView from "../web/views/ThankYouView.vue";
import ThankYouForBookingView from "../web/views/ThankYouForBookingView.vue";
import PrivacyPolicyView from "../web/views/PrivacyPolicyView.vue";
import TermsUseView from "../web/views/TermsUseView.vue";
import TestingView from "../web/views/TestingView.vue";

export const webRoutes = [
	{
		path: "/",
		name: "Home",
		component: HomeView,
		meta: {
			title: "Iconic Executive Asssitants",
			description: "Iconic Assistants supercharge productivity for entrepreneurs, executives, startups, and high growth companies.",
		},
	},
	{
		path: "/about-us",
		name: "AboutUs",
		component: AboutUsView,
		meta: {
			title: "About Us - Iconic Assistants",
			description: "Discover Iconic Assistants – Your Trusted Partner in Virtual Professional Solutions.",
		},
	},
	{
		path: "/how-it-works",
		name: "HowItWorks",
		component: HowItWorksView,
		meta: {
			title: "How It Works - Iconic Assistants",
			description: "Simplified Excellence – Explore How Iconic Assistants Transforms Your Operations.",
		},
	},
	{
		path: "/how-we-hire",
		name: "HowWeHire",
		component: HowWeHireView,
		meta: {
			title: "How We Hire - Iconic Assistants",
			description: "Exclusively Top Talent – Learn About Iconic Assistants' Rigorous Hiring Process.",
		},
	},
	{
		path: "/faq",
		name: "Faq",
		component: FaqView,
		meta: {
			title: "FAQ - Iconic Assistants",
			description: "Got Questions? Find Answers Here – Iconic Assistants' Frequently Asked Questions.",
		},
	},
	{
		path: "/what-is-an-ea",
		name: "WhatIsEA",
		component: WhatIsEAView,
		meta: {
			title: "What Is an EA - Iconic Assistants",
			description: "Unlocking Efficiency – Understanding the Role of Executive Assistants with Iconic.",
		},
	},
	{
		path: "/types-of-eas",
		name: "TypesOfEAs",
		component: TypesOfEAsView,
		meta: {
			title: "Types of EAs - Iconic Assistants",
			description: "Tailored Solutions – Explore the Diverse Executive Assistant Specializations at Iconic.",
		},
	},
	{
		path: "/executive-assistant/:name",
		name: "ExecutiveAssistant",
		component: ExecutiveAssistantView,
		meta: {
			title: "Executive Assistant - Iconic Assistants",
			description: "Precision in recruitment, efficient payroll management. Unlock skills in HR, admin, marketing, support, and more.",
		},
	},
	{
		path: "/before-you-start",
		name: "BeforeYouStart",
		component: BeforeYouStartView,
		meta: {
			title: "Before You Start - Iconic Assistants",
			description: "Preparing for Success – Key Steps Before Diving into Iconic Assistants' Services.",
		},
	},
	{
		path: "/blog",
		name: "Blog",
		component: BlogView,
		meta: {
			title: "Blog - Iconic Assistants",
			description: "Insights and Trends – Stay Informed with Iconic Assistants' Executive Assistant Blog.",
		},
	},
	{
		path: "/blog-post/:slug",
		name: "BlogPost",
		component: BlogPostView,
		meta: {
			title: "Blog Post - Iconic Assistants",
			description: "Insights and Trends – Stay Informed with Iconic Assistants' Executive Assistant Blog.",
		},
	},
	// {
	//   path: '/industries/:slug',
	//   name: 'Industries',
	//   component: IndustriesView,
	//   meta: {
	//     title: 'Industries',
	//     description: 'Welcome Industries'
	//   }
	// },
	{
		path: "/our-solution",
		name: "OurSolution",
		component: OurSolutionView,
		meta: {
			title: "Our Solution - Iconic Assistants",
			description: "Elevate your business to new heights with our Executive Assistant services, covering remote talent recruitment, overseas payroll and expert support.",
		},
	},
	// {
	// 	path: "/pricing",
	// 	name: "Pricing",
	// 	component: PricingView,
	// 	meta: {
	// 		title: "Pricing - Iconic Assistants",
	// 		description: "Transparent Solutions – Explore Iconic Assistants' Competitive Executive Assistant Pricing.",
	// 	},
	// },
	{
		path: "/contact-us",
		name: "ContactUs",
		component: ContactUsView,
		meta: {
			title: "Contact Us - Iconic Assistants",
			description: "Connect with Us – Let's Discuss Your Business Needs with Iconic Assistants.",
		},
	},
	{
		path: "/become-an-assistant",
		name: "BecomeAnAssistant",
		component: BecomeAnAssistantView,
		meta: {
			title: "Become an Assistant - Iconic Assistants",
			description: "Connect with Us – Let's Discuss Your Business Needs with Iconic Assistants.",
		},
	},
	{
		path: "/get-started",
		name: "GetStarted",
		component: GetStartedView,
		meta: {
			title: "Start delegating with ICONIC Assistants",
			description: "Discover the power of having realiable Executive Assistants.",
		},
	},
	{
		path: "/discovery-call",
		name: "DiscoveryCall",
		component: DiscoveryCallView,
		meta: {
			title: "Book a discovery call",
			description: "Find out how our service can save you time and money by delegating to an Executive Assistant.",
		},
	},
	{
		path: "/thank-you",
		name: "ThankYou",
		component: ThankYouView,
		meta: {
			title: "Thank you for submitting our form",
			description: "Our team will contact you soon.",
		},
	},
	{
		path: "/thank-you-for-booking",
		name: "ThankYouForBooking",
		component: ThankYouForBookingView,
		meta: {
			title: "Thank you for submitting our form",
			description: "Our team will contact you soon.",
		},
	},
	// {
	// 	path: '/old-contact-us',
	// 	name: 'OldContactUs',
	// 	component: OldContactUsView,
	// 	meta: {
	// 		title: 'Old Contact Us - Iconic Assistants',
	// 		description: "Connect with Us – Let's Discuss Your Business Needs with Iconic Assistants.",
	// 	}
	// },
	{
		path: "/privacy",
		name: "PrivacyPolicy",
		component: PrivacyPolicyView,
		meta: {
			title: "Privacy Policy - Iconic Assistants",
			description: "Privacy Policy - Iconic Assistants",
		},
	},
	{
		path: "/terms",
		name: "TermsUse",
		component: TermsUseView,
		meta: {
			title: "Terms of Use - Iconic Assistants",
			description: "Terms of use - Iconic Assistants",
		},
	},
	// {
	// 	path: "/testing",
	// 	name: "Testing",
	// 	component: TestingView,
	// 	meta: {
	// 		title: "Test - Iconic Assistants",
	// 		description: "Test - Iconic Assistants",
	// 	},
	// },
];
