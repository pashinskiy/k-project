import * as React from "react"
import { graphql } from "gatsby"
import { useMediaQuery } from "@material-ui/core"

import Layout from "../components/layout"
import Seo from "../components/seo"

import CardProduct from "../components/catalog/catalogCardProduct"
import Pagination from "../components/catalog/Pagination"

const IndexPage = ({ data }) => {
  const mobile = useMediaQuery("(max-width: 834px)")

  const arrayCards = data.allPrismicProduct.edges.map((edge, i) => (
    <CardProduct product={edge.node} key={edge.node.id} />
  ))

  return (
    <Layout>
      <Seo title="Home" />
      <Pagination pageSize={mobile ? 5 : 10} products={arrayCards} />
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
                                fluid(maxHeight: 46) {
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
                slice_type
                items {
                  characteristic
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
