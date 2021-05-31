import * as React from "react"
import { graphql } from "gatsby"
import { makeStyles, useMediaQuery, Grid } from "@material-ui/core"

import Layout from "../components/layout"
import Seo from "../components/seo"

const useStyles = makeStyles(theme => ({}))

const Sale = ({ data }) => {
  const classes = useStyles()
  console.log(data)

  return (
    <Layout>
      <Seo title="Sale" />
    </Layout>
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
        salestext {
          raw
        }
      }
    }
  }
`
