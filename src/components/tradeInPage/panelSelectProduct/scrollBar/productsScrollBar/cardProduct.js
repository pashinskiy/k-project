import React from "react"
import { Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import SelectMark from "../../../../../../static/svg/selectMark.svg"

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
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    background: theme.palette.background.accent,

    marginTop: "1.56vw",
    borderRadius: "0.93vw",
    height: "3.12vw",
    "@media(min-width: 1280px)": {
      marginTop: 20,
      borderRadius: 12,
      height: 40,
    },
    "@media(max-width: 1025px)": {
      marginTop: "2.39vw",
      borderRadius: "1.43vw",
      height: "4.79vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "4.83vw",
      borderRadius: "2.89vw",
      height: "9.66vw",
    },
  },
  button__active: {
    background: theme.palette.background.main,
    boxShadow: `inset 0 0 0 1px ${theme.palette.color.accentSecondary}`,
  },
  selectMark: {
    display: "flex",

    marginRight: "0.66vw",
    width: "1.25vw",
    height: "1.31vw",
    "@media(min-width: 1280px)": {
      marginRight: 8.5,
      width: 16,
      height: 16.77,
    },
    "@media(max-width: 1025px)": {
      marginRight: "1.01vw",
      width: "1.91vw",
      height: "2.01vw",
    },
    "@media(max-width: 767px)": {
      marginRight: "2.05vw",
      width: "3.86vw",
      height: "4.05vw",
    },
  },
  button__text: {
    fontWeight: 700,
    lineHeight: 1.21,
    color: theme.palette.color.mainContrast,

    fontSize: "1.09vw",
    "@media(min-width: 1280px)": {
      fontSize: 14,
    },
    "@media(max-width: 1025px)": {
      fontSize: "1.67vw",
    },
    "@media(max-width: 767px)": {
      fontSize: "3.38vw",
    },
  },
}))

/**
 * Карточка товара в слайдер продуктов
 * @module src/components/tradeInPage/panelSelectProduct/productsScrollBar/cardProduct
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.products - объект продукта полученный из prismic
 * @param {function} props.setProduct - функция выбора продукта
 * @param {function} props.close - функция закрытия
 * @param {Boolean} props.active - влаг активной карточки
 *
 */
export default function CardProduct({ product, setProduct, close, active }) {
  const classes = useStyle()

  const img =
    product?.data.images[0]?.image.localFile?.childImageSharp.gatsbyImageData
  const alt = product?.data.images[0]?.image.alt
  const title = product?.data.name
  const price = product?.data.price

  function clickButton() {
    setProduct(product)
    close()
  }

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
        <Typography variant="body2" className={classes.title}>
          {title}
        </Typography>
      </Link>

      <button
        onClick={clickButton}
        className={
          classes.button + " " + (active ? classes.button__active : "")
        }
      >
        {active ? (
          <>
            <div className={classes.selectMark}>
              <SelectMark />
            </div>

            <Typography variant="body2" className={classes.button__text}>
              Выбрано
            </Typography>
          </>
        ) : (
          <Typography className={classes.button__text}>Выбрать</Typography>
        )}
      </button>
    </Grid>
  ) : null
}
