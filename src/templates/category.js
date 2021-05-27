import * as React from "react"
import { graphql } from "gatsby"
import { makeStyles, Grid } from "@material-ui/core"

import Layout from "../components/layout"
import Seo from "../components/seo"

const useStyles = makeStyles(theme => ({}))

const Category = () => {
  const classes = useStyles()

  return (
    <Layout>
      <Seo title="Home" />
    </Layout>
  )
}

export default Category
