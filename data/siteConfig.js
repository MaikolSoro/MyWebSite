module.exports = {
	siteTitle: 'Hi! I\'m Michael!',
	siteDescription: `Create your online curriculum in just a few minutes with this starter`,
	keyWords: ['gatsbyjs', 'react', 'curriculum'],
	authorName: 'Michael Soro',
	twitterUsername: '@maikol_soro',
	githubUsername: 'MaikolSoro',
	authorAvatar: '/images/avatar.jpg',
	authorDescription: `Software enginner`,

	skills: [

		{
			name: 'Javascript',
			level: 70
		},
		{
			name: 'Typescript',
			level: 70
		},
		{
			name: 'NodeJs',
			level: 70
		},
		{
			name: 'React',
			level: 85
		},
		{
			name: 'GraphQL',
			level: 80
		},
		{
			name: 'NextJs',
			level: 75
		},
		{
			name: 'React Native',
			level: 70
		},
		/* more skills here */
	],
	portifolio: [
		{
			image: "/images/CRM.png",
			description: "CRM Clients",
			url: "https://github.com/MaikolSoro/crmcliente"
		},
		{
			image: "/images/drinks.png",
			description: " Drinks",
			url: "https://github.com/MaikolSoro/bebidas"
		},
		{
			image: "/images/tasks.png",
			description: " Project Task",
			url: "https://github.com/MaikolSoro/AdminProjectTask"
		},
		{
			image: "/images/uptask.png",
			description: "UpTask",
			url: "https://github.com/MaikolSoro/upTaskNative"
		},
		{
			image: "/images/clime.png",
			description: "App Clime",
			url: "https://github.com/MaikolSoro/react-native-clima"
		},
		{
			image: "/images/web.png",
			description: "Web Site",
			url: "https://github.com/MaikolSoro/web-client"
		},
		{
			image: "/images/food.png",
			description: "Food",
			url: "https://github.com/MaikolSoro/Foody"
		},
		{
			image: "/images/product.png",
			description: "Product Hunt",
			url: "https://github.com/MaikolSoro/ProductHunt"
		},
		{
			image: "/images/hotel.png",
			description: "Hotel",
			url: "https://zen-khorana-7cffaf.netlify.app"
		},
		{
			image: "/images/devJobs.png",
			description: "devJobs",
			url: "https://gitlab.com/Maikol/devjobs"
		},
		{
			image: "/images/redux.png",
			description: "Example Redux",
			url: "https://github.com/MaikolSoro/crudredux"
		},

		/* more portifolio items here */
	],
	social: {
		twitter: "https://twitter.com/@maikol_soro",
		linkedin: "",
		github: "https://github.com/MaikolSoro",
		email: "maikolsoro.z1998@gmail.com"
	},
	siteUrl: 'https://eager-bartik-a5a7d4.netlify.app/',
	pathPrefix: '/gatsby-mywebsite', // Note: it must *not* have a trailing slash.
	siteCover: '/images/cover.jpeg',
	background_color: '#ffffff',
	theme_color: '#252527',
	fontColor: "#000000cc",
	enableDarkmode: true, // If true, enables dark mode switch
	display: 'minimal-ui',
	icon: 'static/images/avatar.jpg',
	headerLinks: [
		{
			label: 'Home',
			url: '/',
		},
		{
			label: 'Portifolio',
			url: '/portifolio',
		}
	]
}
