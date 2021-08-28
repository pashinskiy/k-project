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
    background: theme.palette.background.main,

    height: "15.62vw",
    borderRadius: "1.56vw",
    overflow: "hidden",
    WebkitBackfaceVisibility: "hidden",
    MozBackfaceVisibility: "hidden",
    WebkitTransform: "translate3d(0, 0, 0)",
    MozTransform: "translate3d(0, 0, 0)",
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
  price: {
    color: theme.palette.color.main,
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
  title: {
    fontWeight: 400,
    lineHeight: 1.21,

    height: "2.63vw",
    fontSize: "1.09vw",
    marginTop: "0.62vw",
    "@media(min-width: 1280px)": {
      height: "33.88px",
      fontSize: "14px",
      marginTop: "8px",
    },
    "@media(max-width: 1025px)": {
      height: "4.04vw",
      fontSize: "1.67vw",
      marginTop: "0.95vw",
    },
    "@media(max-width: 767px)": {
      height: "8.17vw",
      fontSize: "3.38vw",
      marginTop: "1.93vw",
    },
  },
}))

/**
 * Карточка товара в слайдер продуктов
 * @module src/components/scrollBar/productsScrollBar/cardProduct
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.products - объект продукта полученный из prismic
 * @param {boolean} props.allTitle - отмена ограничения по высоте в названии товара
 */
export default function CardProduct({ product, allTitle }) {
  const classes = useStyle()

  const img =
    product.data.images[0]?.image.localFile?.childImageSharp.gatsbyImageData
  const alt = product.data.images[0]?.image.alt
  const title = product.data.name
  const price = product.data.price

  return img ? (
    <Grid className={`${classes.wrapper} product--card`}>
      <Link to={`/${product.uid}/`} className={classes.link}>
        <GatsbyImage
          loading="eager"
          image={img}
          alt={alt ?? `image product`}
          className={classes.imageWrapper}
          imgStyle={{ objectFit: "contain" }}
        />
        <Typography className={classes.price}>{price} ₽</Typography>
        <Typography
          variant="body2"
          className={classes.title}
          style={{ height: allTitle ? "auto" : "" }}
        >
          {title}
        </Typography>
      </Link>
      <AddInCartAndFav text="В корзину" product={product} />
    </Grid>
  ) : null
}
