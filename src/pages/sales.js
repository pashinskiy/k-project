import { makeStyles } from "@material-ui/core"
import { graphql } from "gatsby"
import React from "react"
import HeaderWithIcon from "../components/headers/headerWithIcon"
import Layout from "../components/layout"
import Seo from "../components/seo"
import SalesIcon from "../../static/svg/salesIcon.svg"
import SaleCardPanel from "../components/saleCardPanel"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",
  },
}))

const IndexPage = ({ data }) => {
  const classes = useStyles()
  const AllSales = data.allPrismicSales.edges.map(edge => edge.node)

  return (
    <Layout>
      <Seo title="Акции и предложения" />
      <HeaderWithIcon
        icon={<SalesIcon />}
        title="Акции и предложения"
        divider={false}
      />
      <SaleCardPanel sales={AllSales}/>

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
  }
`
