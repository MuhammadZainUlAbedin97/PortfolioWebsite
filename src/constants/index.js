import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	meta,
	starbucks,
	tesla,
	shopify,
	carrent,
	jobit,
	tripguide,
	threejs,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Web Developer",
		icon: web,
	},
	{
		title: "Frontend Developer",
		icon: mobile,
	},
	{
		title: "Backend Developer",
		icon: backend,
	},
	{
		title: "Databases",
		icon: creator,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
	{
		name: "docker",
		icon: docker,
	},
];

const experiences = [
	{
		title: "React.js Developer",
		company_name: "Trigonsoft",
		icon: starbucks,
		iconBg: "#383E56",
		date: "February 2023 - July 2023",
		points: [
			"Worked on their project of WheelsHunt.",
			"Worked on their project of DopeChat.",
		],
	},
	{
		title: "Full Stack Web Development",
		company_name: "PNY Trainings",
		icon: shopify,
		iconBg: "#383E56",
		date: "Aug 2022 - Feb 2023",
		points: [
			"Learned Full Stack Web Development.",
			"Frontend Development using HTML, CSS, JavaScript & React.js.",
			"Backend development using PHP, Laravel & MySQL.",
		],
	},
	{
		title: "Bachalor of Engineering",
		company_name: "NUST, H-12, Islamabad",
		icon: tesla,
		iconBg: "#E6DEDD",
		date: "September 2018 - June 2022",
		points: [
			"Completed my graduation with a GPA of 3.15.",
			"Participated in FICS and won Rs.15,000 for being finalist.",
			"Got 1st semester scholorship for being in top 100 merit positions.",
		],
	},
	{
		title: "Online Learning",
		company_name: "Internet",
		icon: meta,
		iconBg: "#E6DEDD",
		date: "Ongoing",
		points: [
			"Learned JavaScript from FreeCodeCamp.",
			"Learned React.js from Scrimba.",
			"Learned Node.js, Express.js and MongoDB from Udemy",
			"Learned Next.js from JSMastery.",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

const projects = [
	{
		name: "Ecommerce Website",
		description:
			"I have created an ecommerce website using Next.js as its primary framework. Sanity as its content management system. GooglePay as its payment gateway. Deployed on Vercel. Link is provided.",
		tags: [
			{
				name: "Next.js",
				color: "blue-text-gradient",
			},
			{
				name: "Sanity",
				color: "green-text-gradient",
			},
			{
				name: "GooglePay",
				color: "pink-text-gradient",
			},
		],
		image: carrent,
		source_code_link: "https://ecommerce-website-79e7.vercel.app/",
	},
	{
		name: "Blogging Website",
		description:
			"The main idea behind creating this website was to create and share amazing prompts which you can use in any AI language models, i.e, ChatGPT, Perplexity, DALLE and so on.",
		tags: [
			{
				name: "Next.js",
				color: "blue-text-gradient",
			},
			{
				name: "MongoDB",
				color: "green-text-gradient",
			},
			{
				name: "GoogleAuth",
				color: "pink-text-gradient",
			},
		],
		image: jobit,
		source_code_link:
			"https://project-promptopia-6rkcqepo4-muhammadzainulabedin97.vercel.app/",
	},
	{
		name: "Ecommerce API",
		description:
			"A comprehensive ecommerce API project created using Node.js and Express.js. The documentation of the API are hosted on Heroku. The Link is provided. You can visit the documentation.",
		tags: [
			{
				name: "Node.js",
				color: "blue-text-gradient",
			},
			{
				name: "Express.js",
				color: "green-text-gradient",
			},
			{
				name: "MongoDB",
				color: "pink-text-gradient",
			},
		],
		image: tripguide,
		source_code_link:
			"https://ecommerce-api-244977-76f0e8041b67.herokuapp.com/",
	},
];

export { services, technologies, experiences, testimonials, projects };
