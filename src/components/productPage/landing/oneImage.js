import React from "react"
import { Grid, makeStyles } from "@material-ui/core"
import { GatsbyImage } from "gatsby-plugin-image"

const useStyles = makeStyles(theme => ({
  wrapper: {
    order: props => (props.order ? props.order : 0),
    width: "100%",
    height: "31.25vw",
    overflow: "hidden",
    WebkitBackfaceVisibility: 'hidden',
    MozBackfaceVisibility: 'hidden',
    WebkitTransform: 'translate3d(0, 0, 0)',
    MozTransform: 'translate3d(0, 0, 0)',
    marginTop: "2.18vw",
    borderRadius: "0.93vw",
    "@media(min-width: 1280px)": {
      height: "400px",
      marginTop: "28px",
      borderRadius: "12px",
    },
    "@media(max-width: 1025px)": {
      height: "47.96vw",
      marginTop: "3.35vw",
      borderRadius: "1.43vw",
    },
    "@media(max-width: 414px)": {
      height: "96.61vw",
      marginTop: "6.76vw",
      borderRadius: "2.89vw",
    },
  },
  imgWrapper: {
    "& picture": {
      width: "100%",
      height: "100%",
    },
  },
}))

export default function OneImage({ slice, ...other }) {
  const img =
    slice.primary.image?.localFile?.childImageSharp?.gatsbyImageData ?? false
  const alt = slice.primary.image.alt ?? "image"
  const order = slice.primary.order ?? false

  const classes = useStyles({ order: order })

  return img ? (
    <Grid {...other} className={classes.wrapper}>
      <GatsbyImage
        image={img}
        alt={alt}
        className={classes.imgWrapper}
        style={{ width: "100%", height: "100%" }}
        imgStyle={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
        }}
      />
    </Grid>
  ) : null
}
