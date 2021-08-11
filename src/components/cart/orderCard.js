import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Typography } from "@material-ui/core"
import { GatsbyImage } from "gatsby-plugin-image"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    width: "51.5625vw",
    marginBottom: "1.875vw",
    "@media(min-width: 1280px)": {
      width: "660px",
      marginBottom: "24px",
    },
    "@media(max-width: 1025px)": {
      width: "79.1366vw",
      marginBottom: "2.8776vw",
    },
    "@media(max-width: 767px)": {
      width: "86.7149vw",
      marginBottom: "1.6908vw",
    },
  },
  img: {
    background: theme.palette.background.main,
    width: "15.625vw",
    height: "12.5vw",
    marginRight: "1.25vw",

    "@media(min-width: 1280px)": {
      width: "200px",
      height: "160px",
      marginRight: "16px",
    },
    "@media(max-width: 1025px)": {
      width: "23.9808vw",
      height: "19.1846vw",
      marginRight: "1.91846vw",
    },
    "@media(max-width: 767px)": {
      width: "24.8792vw",
      height: "24.8792vw",
      marginRight: "2.8985vw",
    },
  },
  container: {
    alignSelf: "center",

    width: "23.4375vw",
    marginRight: "0.3906vw",
    "@media(min-width: 1280px)": {
      width: "300px",
      marginRight: "5px",
    },
    "@media(max-width: 1025px)": {
      width: "35.9712vw",
      marginRight: "0.5995vw",
    },
    "@media(max-width: 767px)": {
      width: "39.1304vw",
      marginRight: "1.2077vw",
    },
  },
  price: {
    alignSelf: "center",
    textAlign: "right",
    flexGrow: 1,
  },
  title: {
    fontWeight: 700,
    fontSize: "1.875vw",
    lineHeight: "2.2695vw",
    "@media(min-width: 1280px)": {
      fontSize: 24,
      lineHeight: "29.05px",
    },
    "@media(max-width: 1025px)": {
      fontSize: "2.87769vw",
      lineHeight: "3.4832vw",
    },
    "@media(max-width: 767px)": {
      fontSize: "3.3816vw",
      lineHeight: "4.0917vw",
    },
    titleCount: {
      "@media(max-width: 767px)": {
        fontSize: "2.8985vw",
        lineHeight: "3.50724vw",
      },
    },
  },
}))

export default function OrderCard({ product }) {
  const classes = useStyles()
  const image = product.data.images ? product.data.images[0]?.image : false

  return (
    <Grid className={classes.root}>
      {image ? (
        <GatsbyImage
          image={image.localFile?.childImageSharp.gatsbyImageData}
          alt={image.alt ?? "product-image-" + product.uid}
          className={classes.img}
          imgStyle={{ objectFit: "contain" }}
        />
      ) : null}

      <div className={classes.container}>
        <Typography variant="body2" className={classes.title}>
          {product.data.name}
        </Typography>
        <Typography className={classes.title + " " + classes.titleCount}>
          {product.count} шт.
        </Typography>
      </div>
      <Typography
        className={classes.price + " " + classes.title}
        className={classes.title + " " + classes.price}
      >
        {product?.data.price} &#8381;
      </Typography>
    </Grid>
  )
}
