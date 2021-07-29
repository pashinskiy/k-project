import React from "react"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { GatsbyImage } from "gatsby-plugin-image"

const useStyle = makeStyles(theme => ({
  row: {
    "&:last-child": {
      "@media(min-width: 414.1px)": {
        "& *": { marginBottom: 0 },
      },
      "@media(max-width: 414px)": {
        "&:last-child": { marginBottom: 0 },
      },
    },
  },
  item: {
    height: "31.25vw",
    borderRadius: "0.93vw",
    overflow: "hidden",
    WebkitBackfaceVisibility: 'hidden',
    MozBackfaceVisibility: 'hidden',
    WebkitTransform: 'translate3d(0, 0, 0)',
    MozTransform: 'translate3d(0, 0, 0)',
    marginBottom: "1.81%",
    "@media(min-width: 1280px)": {
      height: "400px",
      borderRadius: "12px",
      //   marginBottom: "28px",
    },
    "@media(max-width: 1025px)": {
      height: "47.96vw",
      borderRadius: "1.43vw",
      //   marginBottom: "2.87vw",
    },
    "@media(max-width: 414px)": {
      height: "96.61vw",
      borderRadius: "2.89vw",
      marginBottom: "5.79vw",
    },
    "&:first-child": {
      width: "65.52%",
      "@media(max-width: 414px)": {
        width: "100%",
      },
    },
    "&:last-child": {
      width: props => (props.oneEl ? "100%" : "32.67%"),
      "@media(max-width: 414px)": {
        width: props => "100%",
      },
    },
    "& picture": {
      width: "100%",
      height: "100%",
    },
  },
}))

export default function ImagesRow({ images, reverse, ...other }) {
  // опускаем в useStyle информацию о количестве images
  const classes = useStyle({ oneEl: images.length === 1 })
  const direction = reverse ? "row-reverse" : "row"
  return (
    <Grid
      container
      justify="space-between"
      direction={direction}
      {...other}
      className={classes.row}
    >
      {images.map((image, i) => {
        const img = image?.localFile?.childImageSharp?.gatsbyImageData ?? null
        return img ? (
          <GatsbyImage
            image={img}
            alt={image.alt ?? `image_${i}`}
            key={i}
            className={classes.item}
            imgClassName={classes.image}
          />
        ) : null
      })}
    </Grid>
  )
}
