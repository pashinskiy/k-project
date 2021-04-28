import * as React from "react"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  wrapper: {
    boxSizing: "border-box",
    width: "100vw",
    padding: "0 2.18vw",
    margin: "0 auto",
    overflow: "hidden",
    "@media(min-width: 1280px)": {
      width: "1280px",
      padding: "0 28px",
    },
    "@media(max-width: 834px)": {
      padding: "0 3.35vw",
    },
    "@media(max-width: 414px)": {
      padding: "0 6.76vw",
    },
  },
}))

const Layout = ({ children }) => {
  const classes = useStyles()

  return <main className={classes.wrapper}>{children}</main>
}

export default Layout
