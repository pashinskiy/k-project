import React from "react"
import { Box, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import HeaderWithIcon from "../../headers/headerWithIcon"
import ImagesRow from "./imagesRow"

import IconPhoto from "../../../../static/svg/photoIcon.svg"

const useStyle = makeStyles(theme => ({
  wrapper: {
    width: "100%",
    marginTop: "2.18vw",
    marginBottom: "2.18vw",
    "@media(min-width: 1280px)": {
      marginTop: "28px",
      marginBottom: "28px",
    },
    "@media(max-width: 834px)": {
      marginTop: "3.35vw",
      marginBottom: "3.35vw",
    },
    "@media(max-width: 414px)": {
      marginTop: "6.76vw",
      marginBottom: "6.76vw",
    },
  },
}))

export default function Gallery({ imagesArr }) {
  const images = imagesArr ? imagesArr : []
  const rows = []
  for (let i = 0; i < images.length; i += 2) {
    rows.push(images.slice(i, i + 2))
  }

  const classes = useStyle()

  return (
    <Box className={classes.wrapper}>
      <HeaderWithIcon title="Фото" icon={<IconPhoto />} divider={true} />
      <Grid container justify="space-between">
        {rows.map((row, i) => (
          <ImagesRow images={row} reverse={i % 2} key={i} />
        ))}
      </Grid>
    </Box>
  )
}
