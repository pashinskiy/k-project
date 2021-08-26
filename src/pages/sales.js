import { graphql } from "gatsby"
import React from "react"
import HeaderWithIcon from "../components/headers/headerWithIcon"
import Seo from "../components/seo"
import SalesIcon from "../../static/svg/salesIcon.svg"
import SaleCardPanel from "../components/saleCardPanel"
import StoriesPanel from "../components/widgets/storiesPanel"
import ScrollBar from "../components/scrollBar"
import Layout from '../components/layout'

const IndexPage = ({ data }) => {
  const AllSales = data.allPrismicSales.edges.map(edge => edge.node)
  const allStories = data.allPrismicStories.edges.map(edge => edge.node)
  return (
    <Layout>
      <Seo title="Акции и предложения" />
      <HeaderWithIcon
        icon={<SalesIcon />}
        title="Акции и предложения"
        divider={false}
        subcategory
      />
      <ScrollBar fullScreen buttonNext >

        <StoriesPanel stories={allStories}/>
      </ScrollBar>
      <SaleCardPanel sales={AllSales} />
    </Layout>
  )
}

/**
 * Страница акций
 * @module page/sales
 * @param {Object} - свойства:
 * data - ответ на graphql запрос в данном модуле;
 */
export default IndexPage

export const query = graphql`
  query AllSales {
    allPrismicSales {
      edges {
        node {
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
              alt
            }
            previewtext {
              text
            }
            title {
              text
            }
            salestext {
              html
            }
          }
        }
      }
    }
    allPrismicStories {
      edges {
        node {
          data {
            link
            tumbler_link
            text {
              text
            }
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  }
`
