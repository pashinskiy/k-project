import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import HeaderWithIcon from "../components/headers/headerWithIcon"
import SmartphonesIcon from "../../static/svg/smartphonesIcon.svg"
import { Grid } from "@material-ui/core"
import CardWidget from "../components/widgets/cardWidget"

const Category = ({ data: { prismicCategory } }) => {
  console.log(prismicCategory)
  return (
    <Layout>
      <Seo title={prismicCategory.data.name} />
      <HeaderWithIcon
        //TODO: dynamic icons for category
        icon={<SmartphonesIcon />}
        title={prismicCategory.data.name}
        divider={false}
      />
      <Grid>
          <Grid>
              <CardWidget variant="categoriesSingle"/>

          </Grid>
          <Grid>

          </Grid>
      </Grid>
    </Layout>
  )
}

export default Category

export const pageQuery = graphql`
  query CategoryBySlug($uid: String!) {
    prismicCategory(uid: { eq: $uid }) {
      uid
      data {
        name
        children {
          child {
            document {
              ... on PrismicCategory {
                uid
              }
            }
          }
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
`
