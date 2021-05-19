import React from "react"
import { Grid, makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  wrapper: {},
}))

export default function BlockFromTo({ spacing, slider }) {
  const classes = useStyles()

  // границы bynthdfkf
  const spacingArray = [...spacing].sort((a, b) => a - b)
  const spacingMaxAll = spacingArray[spacingArray.length - 1]
  const spacingMinAll = spacingArray[0]

  return spacingMaxAll !== spacingMinAll ? (
    <Grid className={classes.wrapper}>
      {spacingMaxAll}-{spacingMinAll}
    </Grid>
  ) : null
}
