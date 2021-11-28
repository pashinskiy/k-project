import * as React from "react"
import { makeStyles } from "@material-ui/core"

import Layout from "../components/layout"
import SEO from "../components/seo"

const useStyles = makeStyles(theme => ({
  wrapper: {
    lineHeight: 1.5,

    "& *": {
      marginTop: ".5em",
    },

    "& ul": {
      paddingLeft: "1.5em",
    },

    "& h1,h2,h3,h4,h5,h6": {
      marginTop: "1em",
    },
  },
}))

const IndexPage = ({ pageContext: { doc } }) => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title={doc.data.name} />

      <div
        className={classes.wrapper}
        dangerouslySetInnerHTML={{ __html: doc.data.content.text }}
      />
    </Layout>
  )
}

/**
 * Шаблон страницы документа
 * @module src/templates/document
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.data - объект данных полученый из prismic
 * @param {Object} props.pageContext - объект контекста, передаваемый при формировании страницы
 */
export default IndexPage
