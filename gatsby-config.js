require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Krypton.ru`,
    description: `Современный маркетплейс, в котором вы найдете по низним качественную технику, смартфоны, ноутбуки, гаджеты и многое другое.`,
    author: `https://krypton.ru/`,
    siteUrl: `https://krypton.ru/`,
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-W52H94W",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
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
          placeholder: "blurred",
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `krypton.ru`,
        short_name: `krypton.ru`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
        icon_options: {
          // For all the options available,
          // please see the section "Additional Resources" below.
          purpose: `any maskable`,
        },
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
          delivery_cities: require("./src/schemas/delivery_cities.json"),
        },
        shouldDownloadImage: () => true,
      },
    },
    {
      resolve: "gatsby-plugin-zopfli",
      options: {
        extensions: ["css", "html", "js", "svg", "json"],
      },
    },
    {
      resolve: "gatsby-plugin-htaccess",
      options: {
        RewriteBase: "/custom/",
        https: true,
        www: false,
        SymLinksIfOwnerMatch: false,
        ErrorDocument: `
          ErrorDocument 401 /401.html
          ErrorDocument 404 /404.html
          ErrorDocument 500 /error_pages/500.html
        `,
        redirect: [
          "RewriteRule ^not-existing-url/?$ /existing-url [R=301,L,NE]",
          {
            from: "http://krypton.ru",
            to: "https://krypton.ru",
          },
        ],
        custom: `
          <ifModule mod_gzip.c>
          mod_gzip_on Yes
          mod_gzip_dechunk Yes
          mod_gzip_item_include file .(html?|txt|css|js|php|pl|json)$
          mod_gzip_item_include handler ^cgi-script$
          mod_gzip_item_include mime ^text/.*
          mod_gzip_item_include mime ^application/x-javascript.*
          mod_gzip_item_exclude mime ^image/.*
          mod_gzip_item_exclude rspheader ^Content-Encoding:.*gzip.*
          </ifModule>
        `,
      },
    },
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://krypton.ru/',
        sitemap: 'https://krypton.ru/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
  ],
}
