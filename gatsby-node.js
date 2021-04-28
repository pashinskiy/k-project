const path = require("path")

// MAKE POST PAGE
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    query pageBuild {
      allPrismicProduct {
        edges {
          node {
            uid
          }
        }
      }
    }
  `)

  console.log("Product page build")
  const product = path.resolve("src/templates/product.js")

  pages.data.allPrismicProduct.edges.forEach(edge => {
    console.log(edge.node.uid)
    createPage({
      path: `/${edge.node.uid}/`,
      component: product,
      context: {
        uid: edge.node.uid,
      },
    })
  })
}
