import React from "react"
import { Grid, makeStyles } from "@material-ui/core"

import OnlyText from "./onlyText"
import OneImage from "./oneImage"
import TwoImages from "./twoImages"
import ImageAndText from "./imageAndText"

const useStyles = makeStyles(theme => ({
  wrapper: {
    padding: "2.18vw 0",
    "@media(min-width: 1280px)": {
      padding: "28px 0",
    },
    "@media(max-width: 834px)": {
      padding: "3.35vw 0",
    },
    "@media(max-width: 414px)": {
      padding: "6.76vw 0",
    },
  },
}))

export default function Landing({ slices }) {
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
  const imageAndText = slices.filter(
    slice => slice.slice_type === "image_and_text"
  )

  const classes = useStyles()

  console.log(slices.length)

  return (
    <Grid
      container
      alignItems="center"
      direction="column"
      style={{ display: slices.length ? "flex" : "none" }}
      className={classes.wrapper}
    >
      {onlyTextSlices.map((slice, i) => (
        <OnlyText key={slice.slice_type + i} slice={slice} />
      ))}
      {oneImageSlices.map((slice, i) => (
        <OneImage key={slice.slice_type + i} slice={slice} />
      ))}
      {twoImagesSlices.map((slice, i) => (
        <TwoImages key={slice.slice_type + i} slice={slice} />
      ))}
      {imageAndText.map((slice, i) => (
        <ImageAndText key={slice.slice_type + i} slice={slice} />
      ))}
    </Grid>
  )
}
