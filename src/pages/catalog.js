import * as React from "react"
import { graphql } from "gatsby"
import { Grid, useMediaQuery } from "@material-ui/core"

import Layout from "../components/layout"
import Seo from "../components/seo"

import CardProduct from "../components/catalog/catalogCardProduct"
import Pagination from "../components/catalog/Pagination"
import Filter from "../components/filter"

const IndexPage = ({ data }) => {
  const mobile = useMediaQuery("(max-width: 834px)")

  const allProducts = data.allPrismicProduct.edges.map(edge => edge.node)
  const [filterProducts, setFilterProducts] = React.useState(allProducts)

  const arrayCards = filterProducts.map(product => (
    <CardProduct product={product} key={product.id} />
  ))

  return (
    <Layout>
      <Seo title="Home" />
      <Grid container justify="space-between">
        <Pagination pageSize={mobile ? 5 : 10} products={arrayCards} />
        <Filter products={allProducts} setFilterProducts={setFilterProducts} />
      </Grid>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    allPrismicProduct {
      edges {
        node {
          id
          uid
          data {
            brand {
              document {
                ... on PrismicBrand {
                  id
                  data {
                    name
                  }
                }
              }
            }
            name
            price
            old_price
            color
            color_name
            images {
              image {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
            body {
              ... on PrismicProductBodyStickers {
                slice_type
                items {
                  sticker {
                    document {
                      ... on PrismicSticker {
                        id
                        data {
                          image {
                            alt
                            localFile {
                              childImageSharp {
                                fluid(maxHeight: 35) {
                                  aspectRatio
                                  src
                                  srcSet
                                  srcSetWebp
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              ... on PrismicProductBodyFeatures {
                slice_type
                items {
                  feature
                  image {
                    alt
                    localFile {
                      childImageSharp {
                        gatsbyImageData(height: 30)
                      }
                    }
                  }
                }
              }
            }
            body1 {
              ... on PrismicProductBody1Characteristics {
                id
                slice_type
                items {
                  characteristic {
                    document {
                      ... on PrismicCharacteristic {
                        id
                        data {
                          name
                          variant
                        }
                      }
                    }
                  }
                  value
                }
              }
            }
            color
          }
        }
      }
    }
  }
`
