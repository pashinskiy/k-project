import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"
import { GatsbyImage } from "gatsby-plugin-image"

const useStyles = makeStyles(theme => ({
  orderTitle: {},
  divider: {},
  img: {},
}))

export default function OrderProductCard() {
  const classes = useStyles()
  return (
    <div>
      <GatsbyImage loading="eager" className={classes.img} />
      <div>
        <Typography></Typography>
        <Typography></Typography>
      </div>
      <div>
        <Typography></Typography>
      </div>
    </div>
  )
}
