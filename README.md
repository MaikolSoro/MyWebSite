<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's MYWEBSITE🌐🚀
</h1>

This is my personal website where I show my current skills and activities on github.👨‍💻😎

### Sections
- About
- Skills
- Github repositories
- Portifolio

### Features
- Responsive Design, optimized for Mobile devices
- Google Analytics
- SEO
- PWA
- Dark mode
- Animations

## 📷 Preview


## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```sh
    # create a new Gatsby site
    gatsby new namePage 
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd namePage/
    npm run develop
    ```

3.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    \_Note: You'll also see a second link: `http://localhost:8000/___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).\_

    Open the `namePage` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

4. **Generate production build**

    That command will generate a production build on _public_ folder
    ```sh
      npm run build
    ```

5. **Deploy to Github pages**

    That command will deploy the production build to gh-pages branch of your repository
    > ⚠️ don't forget to check `pathPrefix` in the configuration file.


    ```sh
      npm run deploy
    ```

## Configuration

Update the configuration file with your data. The configuration file is in ```data/siteConfig.js```


> **Skills** is a set of your personal skills and their respective levels ranging from > 0 to 100.

```js
 module.exports ={
	siteTitle: 'Hi! I\'m Michael!',
	siteDescription: `Create your online curriculum in just a few minutes with this starter`,
	keyWords: ['gatsbyjs', 'react', 'curriculum'],
	authorName: 'Michael Soro',
	twitterUsername: '@maikol_soro',
	githubUsername: 'MaikolSoro',
	authorAvatar: '/images/avatar.jpg',
	authorDescription: `Developer, passionate about what I do. Always interested in how the sites were made, I started to study HTML by hobby. <br />
	In 2017, I started to study Java university <br />`,

	skills: [
		{
		  name: 'HTML',
		  level: 90
		},
		{
		  name: 'CSS',
		  level: 70
		},
		{
		  name: 'Javascript',
		  level: 95
		},
		{
		  name: 'NodeJs',
		  level: 90
		},
		{
		  name: 'React',
		  level: 85
		},
		{
		  name: 'Angular',
		  level: 70
		},
		{
		  name: 'GraphQL',
		  level: 85
		},
		{
		  name: 'NextJs',
		  level: 85
		},
		{
		  name: 'GatsbyJs',
		  level: 85
		},
		/* more skills here */
	],
	portifolio: [
		{
		  image: "",
		  description: "WebSite",
		  url: ""
		},
		{
		  image: "",
		  description: "",
		  url: ""
		},
		/* more portifolio items here */
	  ],
	  social: {
		twitter: "https://twitter.com/@maikol_soro",
		linkedin: "",
		github: "https://github.com/MaikolSoro",
		email: "maikolsoro.z1998@gmail.com"
	  },
		siteUrl: 'https://github.com/MaikolSoro/MyWebSite',
		pathPrefix: '/gatsby-mywebsite', // Note: it must *not* have a trailing slash.
		siteCover: '/images/home-v1.jpg',
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
```

## It was useful?

<a href="https://www.buymeacoffee.com/santosfrancisco" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-blue.png" alt="Buy Me A Coffee" width="180px" ></a>
