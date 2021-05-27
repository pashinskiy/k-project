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
      allPrismicCategory {
        edges {
          node {
            uid
            data {
              name
              children {
                child {
                  document {
                    ... on PrismicCategory {
                      uid
                    }
                  }
                }
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

  console.log("Sub-Categories page build")
  const subCategory = path.resolve("src/templates/subCategories.js")

  pages.data.allPrismicCategory.edges.forEach(edge => {
    edge.node.data.children.forEach(childCat => {
      console.log(childCat.uid)
      createPage({
        path: `subcategory/${childCat.uid}/`,
        component: subCategory,
        context: {
          uid: childCat.uid,
        },
    })
    })
  })

  console.log("Categories page build")
  const category = path.resolve("src/templates/categories.js")

  pages.data.allPrismicCategory.edges.forEach(edge => {
    console.log(edge.node.uid)
    createPage({
      path: `category/${edge.node.uid}/`,
      component: category,
      context: {
        uid: edge.node.uid,
      },
    })
  })
}
