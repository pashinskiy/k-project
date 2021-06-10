import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import MainPageSlider from "../components/mainPageSlider"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  const allSales = data.allPrismicSales.edges.map(edge => edge.node)
  const allPromotionBanners = data.allPrismicPromotionBanner.edges.map(edge => edge.node)

  console.log(allPromotionBanners)
  return (
    <>
      <Seo title="Home" />
      <MainPageSlider array={allSales} variant={"sales"} />
      <MainPageSlider array={allPromotionBanners} variant={"promotionBanner"}/>
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
            link {
              text
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
    allPrismicPromotionBanner {
      edges {
        node {
          data {
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData(quality: 100)
                }
              }
              alt
            }
          }
        }
      }
    }
  }
`