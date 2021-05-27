import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import HeaderWithIcon from "../components/headers/headerWithIcon"
import SmartphonesIcon from "../../static/svg/smartphonesIcon.svg"
import { Grid } from "@material-ui/core"
import CardWidget from "../components/widgets/cardWidget"
import { makeStyles} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    wrapper: {
        
    },
    cardWidget: {
        width: "21.895%",
    },
    components: {
        width: "78.105%",
    }

}))

const Category = ({ data: { prismicCategory } }) => {
    const classes = useStyles()
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
      <Grid container className={classes.wrapper}>
          <Grid item className={classes.cardWidget}>
              <CardWidget variant="categoriesSingle" style={{width: "100%"}}/>
          </Grid>
          <Grid container className={classes.components}>


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
