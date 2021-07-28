import * as React from "react"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({}))

const IndexPage = ({ pageContext: { content } }) => {
  const classes = useStyles()

  return <div dangerouslySetInnerHTML={{ __html: content }} />
}

export default IndexPage
