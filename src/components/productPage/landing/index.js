import React from "react"
import { Grid, makeStyles } from "@material-ui/core"

import OnlyText from "./onlyText"

const useStyles = makeStyles(theme => ({}))

export default function Landing({ slices }) {
  const classes = useStyles()

  // разбивка слайсов по типам
  const onlyTextSlices = slices.filter(
    slice => slice.slice_type === "only_text"
  )

  return (
    <Grid container direction="column">
      {onlyTextSlices.map(slice => (
        <OnlyText slice={slice} />
      ))}
    </Grid>
  )
}
