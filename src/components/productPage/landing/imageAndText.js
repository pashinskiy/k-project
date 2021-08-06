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
    boxSizing: "border-box",
    marginTop: "2.18vw",
    borderRadius: "0.93vw",
    overflow: "hidden",
    WebkitBackfaceVisibility: 'hidden',
    MozBackfaceVisibility: 'hidden',
    WebkitTransform: 'translate3d(0, 0, 0)',
    MozTransform: 'translate3d(0, 0, 0)',
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
    "@media(max-width: 767px)": {
      height: "96.61vw",
      marginTop: "6.76vw",
      borderRadius: "2.89vw",
    },
    "& *": {
      "&:first-child": {
        marginTop: 0,
      },
    },
  },
  imageBlock: {
    width: "57.18%",
    "@media(min-width: 1280px)": {
      width: "700px",
    },
    "@media(max-width: 1025px)": {
      width: "48.2%",
    },
    "@media(max-width: 767px)": {
      width: "100%",
    },
  },
  textBlock: {
    width: "40.52%",
    padding: "0.93vw",
    "@media(min-width: 1280px)": {
      width: "496px",
      padding: "12px",
    },
    "@media(max-width: 1025px)": {
      width: "48.2%",
      padding: "1.43vw",
    },
    "@media(max-width: 767px)": {
      height: "auto",
      width: "100%",
      padding: "2.89vw",
    },
  },
  accentText: {
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
    "@media(max-width: 767px)": {
      fontSize: "8.69vw",
      marginTop: "6.76vw",
    },
  },
  boldText: {
    color: theme.palette.color.main,
    fontWeight: 700,
    fontSize: "1.56vw",
    marginTop: "2.18vw",
    "@media(min-width: 1280px)": {
      fontSize: "20px",
      marginTop: "28px",
    },
    "@media(max-width: 1025px)": {
      fontSize: "2.39vw",
      marginTop: "3.35vw",
    },
    "@media(max-width: 767px)": {
      fontSize: "4.83vw",
      marginTop: "6.76vw",
    },
  },
  normalText: {
    color: theme.palette.color.secondary,
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
    "@media(max-width: 767px)": {
      fontSize: "4.1vw",
      marginTop: "6.76vw",
    },
  },
  smallText: {
    color: theme.palette.color.secondary,
    fontWeight: 400,
    fontSize: "0.93vw",
    marginTop: "6.25vw",
    "@media(min-width: 1280px)": {
      fontSize: "12px",
      marginTop: "80px",
    },
    "@media(max-width: 1025px)": {
      fontSize: "1.43vw",
      marginTop: "9.59vw",
    },
    "@media(max-width: 767px)": {
      fontSize: "2.89vw",
      marginTop: "19.32vw",
    },
    "&:first-child": {
      marginTop: "2.18vw",
      "@media(min-width: 1280px)": {
        marginTop: "28px",
      },
      "@media(max-width: 1025px)": {
        marginTop: "3.35vw",
      },
      "@media(max-width: 767px)": {
        marginTop: "6.76vw",
      },
    },
  },
  imgWrapper: {
    "& picture": {
      width: "100%",
      height: "100%",
    },
  },
}))

export default function TwoImages({ slice, ...other }) {
  const img =
    slice.primary.image?.localFile?.childImageSharp?.gatsbyImageData ?? false
  const alt = slice.primary.image.alt ?? "image"

  const accent_text = slice.primary.accent_text ?? false
  const bold_text = slice.primary.bold_text ?? false
  const normal_text = slice.primary.normal_text ?? false
  const small_text = slice.primary.small_text ?? false
  const position_text = slice.primary.position_text

  const order = slice.primary.order ?? false

  const classes = useStyles({ order: order })

  return (
    <Grid
      container
      justify="space-between"
      {...other}
      className={classes.wrapper}
    >
      {img ? (
        <Grid className={classes.wrapperBlock + " " + classes.imageBlock}>
          <GatsbyImage
            image={img}
            alt={alt ?? "img"}
            className={classes.imgWrapper}
            style={{ width: "100%", height: "100%" }}
            imgStyle={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
        </Grid>
      ) : null}

      <Grid
        container
        direction="column"
        justify="center"
        style={{ order: position_text ? 0 : -1 }}
        className={classes.wrapperBlock + " " + classes.textBlock}
      >
        <Typography variant="body2" hidden={!accent_text} className={classes.accentText}>
          {accent_text}
        </Typography>
        <Typography hidden={!bold_text} className={classes.boldText}>
          {bold_text}
        </Typography>
        <Typography hidden={!normal_text} className={classes.normalText}>
          {normal_text}
        </Typography>
        <Typography hidden={!small_text} className={classes.smallText}>
          {small_text}
        </Typography>
      </Grid>
    </Grid>
  )
}
