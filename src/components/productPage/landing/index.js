import React from "react"
import { Grid, makeStyles } from "@material-ui/core"

import OnlyText from "./onlyText"
import OneImage from "./oneImage"
import TwoImages from "./twoImages"
import ImageAndText from "./imageAndText"

const useStyles = makeStyles(theme => ({
  wrapper: {
    padding: "3.12vw 0 2.18vw",
    "@media(min-width: 1280px)": {
      padding: "40px 0 28px",
    },
    "@media(max-width: 834px)": {
      padding: "4.79vw 0 3.35vw",
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
