import React from "react"
import { Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import AddInCartAndFav from "../../button/addInCartAndFav"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const useStyle = makeStyles(theme => ({
  wrapper: {
    width: "19.53vw",
    "@media(min-width: 1280px)": {
      width: "250px",
    },
    "@media(max-width: 1025px)": {
      width: "29.97vw",
    },
    "@media(max-width: 767px)": {
      width: "49.51vw",
    },
    margin: "auto",
  },
  imageWrapper: {
    width: "100%",
    overflow: "hidden",
    WebkitBackfaceVisibility: "hidden",
    MozBackfaceVisibility: "hidden",
    WebkitTransform: "translate3d(0, 0, 0)",
    MozTransform: "translate3d(0, 0, 0)",
    background: theme.palette.background.main,

    height: "15.62vw",
    borderRadius: "1.56vw",
    "@media(min-width: 1280px)": {
      height: "200px",
      borderRadius: "20px",
    },
    "@media(max-width: 1025px)": {
      height: "23.98vw",
      borderRadius: "2.39vw",
    },
    "@media(max-width: 767px)": {
      height: "48.3vw",
      borderRadius: "4.83vw",
    },
    "& picture": {
      width: "100%",
      height: "100%",
    },
  },
  link: {
    textDecoration: "none",
  },
  allPrice: {
    display: "flex",
    alignItems: "flex-end",
  },
  price: {
    color: theme.palette.color.accentSecondary,
    fontWeight: 700,
    lineHeight: 1.21,
    fontSize: "1.56vw",
    marginTop: "1.56vw",
    "@media(min-width: 1280px)": {
      fontSize: "20px",
      marginTop: "20px",
    },
    "@media(max-width: 1025px)": {
      fontSize: "2.39vw",
      marginTop: "2.39vw",
    },
    "@media(max-width: 767px)": {
      fontSize: "4.83vw",
      marginTop: "4.83vw",
    },
  },
  oldPrice: {
    textDecorationLine: "line-through",
    color: "#838383",
    fontWeight: 500,
    fontSize: 12,
    marginLeft: 8,
  },
  title: {
    fontWeight: 400,
    lineHeight: 1.21,
    fontSize: "1.09vw",
    marginTop: "0.62vw",
    marginBottom: "0.62vw",
    "@media(min-width: 1280px)": {
      fontSize: "14px",
      marginTop: "8px",
      marginBottom: "8px",
    },
    "@media(max-width: 1025px)": {
      fontSize: "1.67vw",
      marginTop: "0.95vw",
      marginBottom: "0.95vw",
    },
    "@media(max-width: 767px)": {
      fontSize: "3.38vw",
      marginTop: "1.93vw",
      marginBottom: "1.93vw",
    },
  },
}))

export default function CardSimilarProduct({ product, afterChange }) {
  const img =
    product?.data.images[0]?.image.localFile?.childImageSharp.gatsbyImageData
  const alt = product?.data.images[0]?.image.alt
  const title = product?.data.name
  const old_price = product?.data.old_price
  const price = product?.data.price

  const sale = Math.trunc((price / old_price) * 100)

  const classes = useStyle()
  return (
    <Grid className={`${classes.wrapper} product--card`}>
      <Link to={`/${product?.uid}/`} className={classes.link}>
        <GatsbyImage loading="eager"
          image={img}
          alt={alt ?? `image product`}
          className={classes.imageWrapper}
          imgStyle={{ objectFit: "contain" }}
        />
        <div className={classes.allPrice}>
          <Typography className={classes.price}>{price} ₽</Typography>
          <Typography className={classes.oldPrice}>{old_price} ₽</Typography>
        </div>
        <Typography variant="body2" className={classes.title}>
          {title}
        </Typography>
      </Link>
      <AddInCartAndFav
        text="В корзину"
        product={product}
        afterChange={afterChange}
      />
    </Grid>
  )
}
