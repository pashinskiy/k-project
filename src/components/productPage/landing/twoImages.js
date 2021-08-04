import React from "react"
import { Grid, makeStyles, Typography } from "@material-ui/core"
import { GatsbyImage } from "gatsby-plugin-image"

const useStyles = makeStyles(theme => ({
  wrapper: {
    order: props => (props.order ? props.order : 0),
  },
  wrapperBlock: {
    color: theme.palette.color.mainContrast,
    height: "31.25vw",
    width: "48.85%",
    position: "relative",
    boxSizing: "border-box",
    marginTop: "2.18vw",
    padding: "2.18vw",
    borderRadius: "0.93vw",
    overflow: "hidden",
    WebkitBackfaceVisibility: 'hidden',
    MozBackfaceVisibility: 'hidden',
    WebkitTransform: 'translate3d(0, 0, 0)',
    MozTransform: 'translate3d(0, 0, 0)',
    "@media(min-width: 1280px)": {
      height: "400px",
      marginTop: "28px",
      padding: "28px",
      borderRadius: "12px",
    },
    "@media(max-width: 1025px)": {
      height: "47.96vw",
      width: "48.2%",
      marginTop: "3.35vw",
      padding: "3.35vw",
      borderRadius: "1.43vw",
    },
    "@media(max-width: 414px)": {
      height: "96.61vw",
      width: "100%",
      marginTop: "6.76vw",
      padding: "6.76vw",
      borderRadius: "2.89vw",
    },
  },
  bigText: {
    fontWeight: 700,
    fontSize: "2.81vw",
    marginTop: "2.18vw",
    "@media(min-width: 1280px)": {
      fontSize: "36px",
      marginTop: "28px",
    },
    "@media(max-width: 1025px)": {
      fontSize: "4.31vw",
      marginTop: "3.35vw",
    },
    "@media(max-width: 414px)": {
      fontSize: "8.69vw",
      marginTop: "6.76vw",
    },
  },
  normalText: {
    fontWeight: 400,
    fontSize: "1.32vw",
    marginTop: "2.18vw",
    "@media(min-width: 1280px)": {
      fontSize: "17px",
      marginTop: "28px",
    },
    "@media(max-width: 1025px)": {
      fontSize: "2.03vw",
      marginTop: "3.35vw",
    },
    "@media(max-width: 414px)": {
      fontSize: "4.1vw",
      marginTop: "6.76vw",
    },
  },
  imgWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
    "& picture": {
      width: "100%",
      height: "100%",
    },
  },
}))

export default function TwoImages({ slice, ...other }) {
  const img_1 =
    slice.primary.image_1?.localFile?.childImageSharp.gatsbyImageData ?? false
  const alt_1 = slice.primary.image_1.alt ?? "image"
  const img_2 =
    slice.primary.image_2?.localFile?.childImageSharp.gatsbyImageData ?? false
  const alt_2 = slice.primary.image_2.alt ?? "image"

  const big_text_1 = slice.primary.big_text_1 ?? false
  const big_text_2 = slice.primary.big_text_2 ?? false
  const color_text_1 = slice.primary.color_text_1
  const color_text_2 = slice.primary.color_text_2
  const normal_text_1 = slice.primary.normal_text_1 ?? false
  const normal_text_2 = slice.primary.normal_text_2 ?? false
  const priority_1 = slice.primary.priority_1
  const priority_2 = slice.primary.priority_2
  const vertical_align_1 = slice.primary.vertical_align_1
  const vertical_align_2 = slice.primary.vertical_align_2

  const order = slice.primary.order ?? false

  const classes = useStyles({ order: order })

  const gradient_1 = (function () {
    if (!big_text_1 && !normal_text_1) return ""
    if (vertical_align_1)
      return "linear-gradient(139.56deg, rgba(66, 0, 255, 0.47) 13.15%, rgba(128, 0, 255, 0) 50%)"
    return "linear-gradient(27.62deg, rgba(66, 0, 255, 0.47) 13.15%, rgba(128, 0, 255, 0) 50%)"
  })()

  const gradient_2 = (function () {
    if (!big_text_2 && !normal_text_2) return ""
    if (vertical_align_2)
      return "linear-gradient(139.56deg, rgba(66, 0, 255, 0.47) 13.15%, rgba(128, 0, 255, 0) 50%)"
    return "linear-gradient(27.62deg, rgba(66, 0, 255, 0.47) 13.15%, rgba(128, 0, 255, 0) 50%)"
  })()

  return (
    <Grid
      container
      justify="space-between"
      {...other}
      className={classes.wrapper}
    >
      <Grid
        container
        direction="column"
        justify={vertical_align_1 ? "flex-start" : "flex-end"}
        className={classes.wrapperBlock}
        style={{
          color: color_text_1 ? "" : "#000000",
          background: gradient_1,
        }}
      >
        <Typography
          hidden={!big_text_1}
          className={classes.bigText}
          style={{ order: priority_1 ? 0 : 1 }}
        >
          {big_text_1}
        </Typography>{" "}
        <Typography hidden={!normal_text_1} className={classes.normalText}>
          {normal_text_1}
        </Typography>
        {img_1 ? (
          <GatsbyImage
            image={img_1}
            alt={alt_1 ?? "img"}
            className={classes.imgWrapper}
            style={{ width: "100%", height: "100%" }}
            imgStyle={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
        ) : null}
      </Grid>

      <Grid
        container
        direction="column"
        justify={vertical_align_2 ? "flex-start" : "flex-end"}
        className={classes.wrapperBlock}
        style={{
          color: color_text_2 ? "" : "#000000",
          background: gradient_2,
        }}
      >
        <Typography
          hidden={!big_text_2}
          className={classes.bigText}
          style={{ order: priority_2 ? 0 : 1 }}
        >
          {big_text_1}
        </Typography>{" "}
        <Typography hidden={!normal_text_2}>{normal_text_1}</Typography>
        {img_2 ? (
          <GatsbyImage
            image={img_2}
            alt={alt_2 ?? "img"}
            className={classes.imgWrapper}
            style={{ width: "100%", height: "100%" }}
            imgStyle={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
        ) : null}
      </Grid>
    </Grid>
  )
}
