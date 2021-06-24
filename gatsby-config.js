require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 100,
          backgroundColor: `transparent`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `site-x`,
        accessToken: `${process.env.API_KEY}`,
        schemas: {
          product: require("./src/schemas/product.json"),
          header: require("./src/schemas/header.json"),
          footer: require("./src/schemas/footer.json"),
          sticker: require("./src/schemas/sticker.json"),
          delivery: require("./src/schemas/delivery.json"),
          credit: require("./src/schemas/credit.json"),
          characteristic: require("./src/schemas/characteristic.json"),
          brand: require("./src/schemas/brand.json"),
          catalog: require("./src/schemas/catalog.json"),
          category: require("./src/schemas/category.json"),
          characteristic: require("./src/schemas/characteristic.json"),
          subcategory: require("./src/schemas/subcategory.json"),
          tag: require("./src/schemas/tag.json"),
          stories: require("./src/schemas/stories.json"),
          sales: require("./src/schemas/sales.json"),
          promotion_banner: require("./src/schemas/promotion_banner.json"),
          cart_and_order: require("./src/schemas/cart_and_order.json"),
        },
        shouldDownloadImage: () => true,
      },
    },
  ],
}
