// import { makeStyles } from "@material-ui/core"
import { graphql } from "gatsby"
import React from "react"
import HeaderWithIcon from "../components/headers/headerWithIcon"
import Layout from "../components/layout"
import Seo from "../components/seo"
import SalesIcon from "../../static/svg/salesIcon.svg"
import SaleCardPanel from "../components/saleCardPanel"
import StoriesPanel from "../components/widgets/storiesPanel"
import ScrollBar from "../components/scrollBar"
// import CardWidget from "../components/widgets/cardWidget"

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: "100%",
//     height: "100%",
//   },
// }))

const IndexPage = ({ data }) => {
  // const classes = useStyles()
  const AllSales = data.allPrismicSales.edges.map(edge => edge.node)
  const allStories = data.allPrismicStories.edges.map(edge => edge.node)

  console.log(AllSales[0].uid)
  return (
    <Layout>
      <Seo title="Акции и предложения" />
      <HeaderWithIcon
        icon={<SalesIcon />}
        title="Акции и предложения"
        divider={false}
      />
      <ScrollBar fullScreen buttonNext >

        <StoriesPanel stories={allStories}/>
      </ScrollBar>
      <SaleCardPanel sales={AllSales} />
      {/* <div style={{width: "100px", height: "100px"}}>
      <CardWidget
        cardImage={
          AllSales[0].data.previewimage.localFile.childImageSharp
            .gatsbyImageData
        }
        cardTitle={AllSales[0].uid}
        variant="brand"
      />

      </div> */}
      {/* <div style={{width:"100px", height:"100px"}} /> */}
    </Layout>
  )
}
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
