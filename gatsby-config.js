require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Creative Portfolio`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
      },
    },
  `gatsby-plugin-page-transitions`,
{
  resolve: 'gatsby-plugin-page-transitions',
  options: {
    transitionTime: 500
  }
}
  ],
}
