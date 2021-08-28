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
 * @module src/page/sales
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.data - объект данных полученый из prismic
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
