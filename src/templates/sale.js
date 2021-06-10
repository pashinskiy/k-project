import * as React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"

import SaleCardMain from '../components/saleCardPanel/saleCardMain.js'
import SalesTextPanel from "../components/salesTextPanel"


const Sale = ({ data }) => {
  const sale = data.prismicSales
  const socials = data.allPrismicFooter.edges[0].node.data.body2.filter(item => item.primary.social_img)
  const products = data.allPrismicProduct.edges.map(edge => edge.node)
  // console.log(products)

  return (
    <>
      <Seo title="Sale" />
      <SaleCardMain sale={sale} />
      <SalesTextPanel sale={sale} socials={socials} products={products} />
    </>
  )
}

export default Sale

export const query = graphql`
  query SaleBySlug($uid: String!) {
    prismicSales(uid: { eq: $uid }) {
      uid
      data {
        creationdate
        enddate
        startdate
        previewimage {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        previewtext {
          text
        }
        title {
          text
        }
        salestext {
          raw
          html
        }
      }
    }
    allPrismicProduct {
      edges {
        node {
          data {
            name
            price
            color_name
            color
            images {
              image {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      width: 250
                      transformOptions: { fit: CONTAIN }
                      outputPixelDensities: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2]
                      sizes: "(min-width: 1280px) 250px, (max-width: 414px) 49.51vw, (max-width: 834px) 29.97vw, 19.53vw"
                    )
                  }
                }
              }
            }
          }
          uid
        }
      }
    }

    allPrismicFooter {
      edges {
        node {
          data {
            body2 {
              ... on PrismicFooterBody2Social {
                id
                primary {
                  link {
                    url
                  }
                  social_img {
                    alt
                    localFile {
                      publicURL
                    }
                  }
                }
                slice_type
              }
              ... on PrismicFooterBody2Contact {
                id
                slice_type
                primary {
                  contact_link {
                    url
                  }
                  contact_link_name {
                    text
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
