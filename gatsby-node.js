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
      allPrismicSales {
        edges {
          node {
            uid
          }
        }
      }
      allPrismicDoc {
        edges {
          node {
            uid
            data {
              content {
                text
              }
            }
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
      path: `/category/${edge.node.uid}/`,
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
      path: `/subcategory/${edge.node.uid}/`,
      component: subcategory,
      context: {
        uid: edge.node.uid,
      },
    })
  })

  console.log("Sale page build")
  const sale = path.resolve("src/templates/sale.js")

  pages.data.allPrismicSales.edges.forEach(edge => {
    console.log(edge.node.uid)
    createPage({
      path: `/sale/${edge.node.uid}/`,
      component: sale,
      context: {
        uid: edge.node.uid,
      },
    })
  })

  console.log("Document page build")
  const document = path.resolve("src/templates/document.js")

  pages.data.allPrismicDoc.edges.forEach(edge => {
    console.log(edge.node.uid)
    createPage({
      path: `/documents/${edge.node.uid}/`,
      component: document,
      context: {
        doc: edge.node,
      },
    })
  })
}
