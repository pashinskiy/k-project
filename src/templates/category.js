import * as React from "react"
import { graphql } from "gatsby"
import { makeStyles, Grid } from "@material-ui/core"

import Layout from "../components/layout"
import Seo from "../components/seo"
import CardWidget from "../components/widgets/cardWidget"

const useStyles = makeStyles(theme => ({
  categoryCardItem: {
    width: "187.5px",
    padding: "8px",
  },
  
}))

const Category = ({data: {allPrismicSubcategory}}) => {
  const classes = useStyles()
  const dataSubCategory = allPrismicSubcategory.edges.map(edge => edge.node)

  console.log(dataSubCategory)

  return (
    <Layout>
      <Seo title="Home" />
      <Grid container> 
      {dataSubCategory.length
          ? dataSubCategory.map((subCategory, i) => (
              <Grid item key={i} className={classes.categoryCardItem}>
                <CardWidget
                  cardImage={
                    subCategory.data.image?.localFile
                      ?.childImageSharp.gatsbyImageData
                  }
                  cardTitle={subCategory.data.name}
                  variant="category"
                />
              </Grid>
            ))
            : null}
      </Grid>
    </Layout>
  )
}

export default Category
export const pageQuery = graphql`
query Category {
  allPrismicSubcategory {
    edges {
      node {
        data {
          name
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
}`