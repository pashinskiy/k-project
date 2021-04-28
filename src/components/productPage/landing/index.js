import React from "react"
import { Grid, makeStyles } from "@material-ui/core"

import OnlyText from "./onlyText"
import OneImage from "./oneImage"


const useStyles = makeStyles(theme => ({}))

export default function Landing({ slices }) {
  const classes = useStyles()

  // разбивка слайсов по типам
  const onlyTextSlices = slices.filter(
    slice => slice.slice_type === "only_text"
  )
  const oneImageSlices = slices.filter(
    slice => slice.slice_type === "one_image"
  )
  const twoImagesSlices = slices.filter(
    slice => slice.slice_type === "two_images"
  )

  console.log(oneImageSlices)
  console.log(twoImagesSlices)

  return (
    <Grid container alignItems="center" direction="column">
      {onlyTextSlices.map((slice, i) => (
        <OnlyText key={slice.slice_type + i} slice={slice} />
      ))}
      {oneImageSlices.map((slice, i) => (
        <OneImage key={slice.slice_type + i} slice={slice} />
      ))}
    </Grid>
  )
}
