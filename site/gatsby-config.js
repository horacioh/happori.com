const path = require("path");

module.exports = {
  siteMetadata: {
    title: "Happori",
    siteUrl: "https://happori.com",
    description:
      "Amantes de los calcetines diferentes y preocupados cada vez más por el medioambiente y la sostenibilidad para preservar nuestros planeta nace la idea de Happori",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Happori`,
        // short_name: config.siteShortName,
        lang: `es-ES`,
        description: `Calcetines de economia Circular`,
        start_url: `/`,
        background_color: `black`,
        theme_color: `white`,
        display: `standalone`,
        icons: [
          {
            src: `/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: "gatsby-background-image-es5",
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: "/:",
      },
    },
    {
      resolve: "gatsby-plugin-fathom",
      options: {
        siteId: "BDKXRLSF",
        // whitelistHostnames: ["horacioh.com"]
      },
    },
    // Must be placed at the end
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cache`,
  ],
};
