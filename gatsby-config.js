require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Krypton.ru`,
    description: `Krypton`,
    author: `@krypton`,
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-W52H94W",
  
        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
  
        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
  
        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",
  
        // // Name of the event that is triggered
        // // on every Gatsby route change.
        // //
        // // Defaults to gatsby-route-change
        // routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
        // // Defaults to false
        // enableWebVitalsTracking: true,
      },
    },
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
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
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
          day_product: require("./src/schemas/day_product.json"),
          advantage: require("./src/schemas/advantage.json"),
          sale: require("./src/schemas/sale.json"),
          main_page: require("./src/schemas/main_page.json"),
          cart_and_order: require("./src/schemas/cart_and_order.json"),
          question: require("./src/schemas/question.json"),
          group_question: require("./src/schemas/group_question.json"),
          doc: require("./src/schemas/doc.json"),
          docs: require("./src/schemas/docs.json"),
        },
        shouldDownloadImage: () => true,
      },
    },
  ],
}
