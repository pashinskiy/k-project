import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import MainPageSlider from "../components/mainPageSlider"
import Seo from "../components/seo"
import TestSlider from "../components/mainPageSlider/testSlider"

const IndexPage = ({ data }) => {
  console.log(data)
  const allSales = data.allPrismicSales.edges.map(edge => edge.node)
  return (
    <Layout>
      <Seo title="Home" />
      {/* <MainPageSlider sales={allSales} /> */}
      <TestSlider />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query MainPage {
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