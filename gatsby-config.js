/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
 require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

// const strapiConfig = {
//   apiURL: process.env.STRAPI_API_URL,
//   accessToken: process.env.STRAPI_TOKEN,
//   collectionTypes: ['api/jobs'],
//   singleTypes: [],
// };

module.exports = {
  /* Your site config here */
  siteMetadata:{
    title: "WebDev Portfolio Kursantbek",
    description: "This is WebDev portfolio site",
    author: "@kursant",
    twitterUsername: "@Kursantbek",
    image: "/twitter-img.png",
    siteUrl: "https://testing-kursant-gatsby-portfolio.netlify.app/",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `eu3ro5j3glx2`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },

    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: 'Roboto',
            weights: ['400', '700']
          },
          {
            family: 'Open Sans',
            weights: ['100..400']
          }
        ]
      }
    }

  ],
}
