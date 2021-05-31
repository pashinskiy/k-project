import * as React from "react"
import { graphql } from "gatsby"
import { makeStyles, useMediaQuery, Grid } from "@material-ui/core"

import Layout from "../components/layout"
import Seo from "../components/seo"

import SaleCardMain from '../components/saleCardPanel/saleCardMain.js'

const useStyles = makeStyles(theme => ({}))

const Sale = ({ data }) => {
  const classes = useStyles()
  const sale = data.prismicSales
  console.log(data)

  return (
    <Layout>
      <Seo title="Sale" />
      <SaleCardMain sale={sale} />
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
        title {
          text
        }
        salestext {
          raw
        }
      }
    }
  }
`
