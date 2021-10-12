import * as React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"
import Layout from "../components/layout"

import SaleCardMain from "../components/saleCardPanel/saleCardMain.js"
import SalesTextPanel from "../components/salesTextPanel"
import { makeStyles } from "@material-ui/core"

import BreadCrumbs from "../components/breadCrumbs"

const useStyles = makeStyles(theme => ({
  wrapper: {
    marginTop: "2.18vw",
    "@media(min-width: 1280px)": {
      marginTop: "28px",
    },
    "@media(max-width: 1025px)": {
      marginTop: "3.35vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "6.76vw",
    },
  },
}))


const Sale = ({ data }) => {
  const classes = useStyles()
  const sale = data.prismicSales
  const socials = data.allPrismicFooter.edges[0].node.data.body2.filter(
    item => item.primary.social_img
  )
  
  return (
    <Layout>
      <Seo title="Sale" />
      <div className={classes.wrapper}>
        <BreadCrumbs
          links={[
            {
              title: "Акции и предложения",
              href: `/sales/`,
            },
            {
              title: sale.data.title.text,
              href: `/sales/${sale.uid}/`,
            },
          ]}
          />
        <SaleCardMain sale={sale} />
        <SalesTextPanel sale={sale} socials={socials} />
      </div>
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
    prismicSales(uid: {eq: $uid}, data: {salestext: {text: {ne: ""}}}) {
      uid
      data {
        creationdate
        enddate
        startdate
        image_mobile {
          alt
          localFile {
            childImageSharp {
              gatsbyImageData(width: 342)
            }
          }
        }
        previewimage {
          alt
          localFile {
            childImageSharp {
              gatsbyImageData(width: 1280)
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
        link {
          text
        }
        sales_order
        sales_products {
          product_doc {
            document {
              ... on PrismicProduct {
                data {
                  price
                  images {
                    image {
                      localFile {
                        childImageSharp {
                          gatsbyImageData
                        }
                      }
                      alt
                    }
                  }
                  name
                }
                uid
              }
            }
          }
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
