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
      allPrismicSubcategory {
        edges {
          node {
            uid
          }
        }
      }
      allPrismicCategory {
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
  console.log("Category page build")
  const category = path.resolve("src/templates/category.js")

  pages.data.allPrismicCategory.edges.forEach(edge => {
    console.log(edge.node.uid)
    createPage({
      path: `/${edge.node.uid}/`,
      component: category,
      context: {
        uid: edge.node.uid,
      },
    })
  })

  console.log("Subcategory page build")
  const subcategory = path.resolve("src/templates/subcategory.js")

  pages.data.allPrismicSubcategory.edges.forEach(edge => {
    console.log(edge.node.uid)
    createPage({
      path: `/${edge.node.uid}/`,
      component: subcategory,
      context: {
        uid: edge.node.uid,
      },
    })
  })
}
