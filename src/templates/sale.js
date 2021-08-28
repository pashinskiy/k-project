import * as React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"
import Layout from "../components/layout"

import SaleCardMain from "../components/saleCardPanel/saleCardMain.js"
import SalesTextPanel from "../components/salesTextPanel"

import { GlobalStateContext } from "../context/GlobalContextProvider"

const Sale = ({ data }) => {
  const state = React.useContext(GlobalStateContext)

  const sale = data.prismicSales
  const socials = data.allPrismicFooter.edges[0].node.data.body2.filter(
    item => item.primary.social_img
  )
  const products = state.allPrismicProduct.edges.map(edge => edge.node)

  return (
    <Layout>
      <Seo title="Sale" />
      <SaleCardMain sale={sale} />
      <SalesTextPanel sale={sale} socials={socials} products={products} />
    </Layout>
  )
}

/**
 * Шаблон страницы акции
 * @module src/templates/sale
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.data - объект данных полученый из prismic
 */
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
