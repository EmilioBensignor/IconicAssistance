import HomeView from "../web/views/HomeView.vue";

export const webRoutes = [
	{
		path: "/",
		name: "Home",
		component: HomeView,
		meta: {
			title: "Iconic Executive Asssitants",
			description:
				"Iconic Assistants supercharge productivity for entrepreneurs, executives, startups, and high growth companies.",
		},
	},
	{
		path: "/about-us",
		name: "AboutUs",
		component: () => import("../web/views/AboutUsView.vue"),
		meta: {
			title: "About Us - Iconic Assistants",
			description:
				"Discover Iconic Assistants – Your Trusted Partner in Virtual Professional Solutions.",
		},
	},
	{
		path: "/how-it-works",
		name: "HowItWorks",
		component: () => import("../web/views/HowItWorksView.vue"),
		meta: {
			title: "How It Works - Iconic Assistants",
			description:
				"Simplified Excellence – Explore How Iconic Assistants Transforms Your Operations.",
		},
	},
	{
		path: "/how-we-hire",
		name: "HowWeHire",
		component: () => import("../web/views/HowWeHireView.vue"),
		meta: {
			title: "How We Hire - Iconic Assistants",
			description:
				"Exclusively Top Talent – Learn About Iconic Assistants' Rigorous Hiring Process.",
		},
	},
	{
		path: "/faq",
		name: "Faq",
		component: () => import("../web/views/FaqView.vue"),
		meta: {
			title: "FAQ - Iconic Assistants",
			description:
				"Got Questions? Find Answers Here – Iconic Assistants' Frequently Asked Questions.",
		},
	},
	{
		path: "/what-is-an-ea",
		name: "WhatIsEA",
		component: () => import("../web/views/WhatIsEAView.vue"),
		meta: {
			title: "What Is an EA - Iconic Assistants",
			description:
				"Unlocking Efficiency – Understanding the Role of Executive Assistants with Iconic.",
		},
	},
	{
		path: "/types-of-eas",
		name: "TypesOfEAs",
		component: () => import("../web/views/TypesOfEAsView.vue"),
		meta: {
			title: "Types of EAs - Iconic Assistants",
			description:
				"Tailored Solutions – Explore the Diverse Executive Assistant Specializations at Iconic.",
		},
	},
	{
		path: "/executive-assistant/:id",
		name: "ExecutiveAssistant",
		component: () => import("../web/views/ExecutiveAssistantView.vue"),
		meta: {
			title: "Executive Assistant - Iconic Assistants",
			description:
				"Precision in recruitment, efficient payroll management. Unlock skills in HR, admin, marketing, support, and more.",
		},
	},
	{
		path: "/before-you-start",
		name: "BeforeYouStart",
		component: () => import("../web/views/BeforeYouStartView.vue"),
		meta: {
			title: "Before You Start - Iconic Assistants",
			description:
				"Preparing for Success – Key Steps Before Diving into Iconic Assistants' Services.",
		},
	},
	{
		path: "/blog",
		name: "Blog",
		component: () => import("../web/views/BlogView.vue"),
		meta: {
			title: "Blog - Iconic Assistants",
			description:
				"Insights and Trends – Stay Informed with Iconic Assistants' Executive Assistant Blog.",
		},
	},
	{
		path: "/blog-post/:slug",
		name: "BlogPost",
		component: () => import("../web/views/BlogPostView.vue"),
		meta: {
			title: "Blog Post - Iconic Assistants",
			description:
				"Insights and Trends – Stay Informed with Iconic Assistants' Executive Assistant Blog.",
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
		path: "/services",
		name: "Services",
		component: () => import("../web/views/ServicesView.vue"),
		meta: {
			title: "Services - Iconic Assistants",
			description:
				"Elevate your business to new heights with our Executive Assistant services, covering remote talent recruitment, overseas payroll and expert support.",
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
	// {
	// 	path: "/test",
	// 	name: "Test",
	// 	component: TestView,
	// 	meta: {
	// 		title: "Testing - Iconic Assistants",
	// 	},
	// },
	{
		path: "/contact-us",
		name: "ContactUs",
		component: () => import("../web/views/ContactUsView.vue"),
		meta: {
			title: "Contact Us - Iconic Assistants",
			description:
				"Connect with Us – Let's Discuss Your Business Needs with Iconic Assistants.",
		},
	},
	{
		path: "/get-started",
		name: "GetStarted",
		component: () => import("../web/views/GetStartedView.vue"),
		meta: {
			title: "Start delegating with ICONIC Assistants",
			description:
				"Discover the power of having realiable Executive Assistants.",
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
		component: () => import("../web/views/PrivacyPolicyView.vue"),
		meta: {
			title: "Privacy Policy - Iconic Assistants",
			description: "Privacy Policy - Iconic Assistants",
		},
	},
	{
		path: "/terms",
		name: "TermsUse",
		component: () => import("../web/views/TermsUseView.vue"),
		meta: {
			title: "Terms of Use - Iconic Assistants",
			description: "Terms of use - Iconic Assistants",
		},
	},
];
