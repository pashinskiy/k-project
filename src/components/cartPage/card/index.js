import React from "react"
import { makeStyles, Grid, Typography } from "@material-ui/core"
import { GatsbyImage } from "gatsby-plugin-image"

import ButtonPlusMinus from "../../button/addInCartAndFav/buttonPlusMinus"

import Favorites from "../../../../static/svg/favorites.svg"
import NotFavorites from "../../../../static/svg/notFavorites.svg"
import Trash from "../../../../static/svg/trash.svg"

import {
  GlobalStateContext,
  GlobalDispatchContext,
} from "../../../context/GlobalContextProvider"
import { Link } from "gatsby"

const useStyle = makeStyles(theme => ({
  wrapper: {
    background: theme.palette.background.secondary,

    padding: "1.87vw",
    borderRadius: "0.93vw",
    overflow: "hidden",
    WebkitBackfaceVisibility: "hidden",
    MozBackfaceVisibility: "hidden",
    WebkitTransform: "translate3d(0, 0, 0)",
    MozTransform: "translate3d(0, 0, 0)",
    "@media(min-width: 1280px)": {
      padding: "24px",
      borderRadius: "12px",
    },
    "@media(max-width: 1025px)": {
      padding: "2.87w",
      borderRadius: "1.43vw",
    },
    "@media(max-width: 767px)": {
      padding: "3.38vw",
      borderRadius: "2.89vw",
    },
  },
  image: {
    background: theme.palette.background.main,

    width: "15.62vw",
    height: "12.5vw",
    borderRadius: "0.93vw",
    "@media(min-width: 1280px)": {
      width: "200px",
      height: "160px",
      borderRadius: "12px",
    },
    "@media(max-width: 1025px)": {
      width: "23.98vw",
      height: "19.18vw",
      borderRadius: "1.43vw",
    },
    "@media(max-width: 767px)": {
      width: "24.87vw",
      height: "24.87vw",
      borderRadius: "2.89vw",
    },
  },
  centralBlockWrapper: {
    marginLeft: "1.25vw",
    width: "22.89vw",
    "@media(min-width: 1280px)": {
      marginLeft: "16px",
      width: "293px",
    },
    "@media(max-width: 1025px)": {
      marginLeft: "1.91vw",
      width: "35.13vw",
    },
    "@media(max-width: 767px)": {
      marginLeft: "2.89vw",
      width: "43.47vw",
    },
  },
  title: {
    fontWeight: 700,
    lineHeight: 1.21,

    fontSize: "1.87vw",
    "@media(min-width: 1280px)": {
      fontSize: "24px",
    },
    "@media(max-width: 1025px)": {
      fontSize: "2.87vw",
    },
    "@media(max-width: 767px)": {
      fontSize: "3.38vw",
    },
  },
  priceWrapper: {
    marginTop: "0.31vw",
    "@media(min-width: 1280px)": {
      marginTop: "4px",
    },
    "@media(max-width: 1025px)": {
      marginTop: "0.47vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "0.96vw",
    },
  },
  price: {
    fontWeight: 700,
    lineHeight: 1.21,

    fontSize: "1.4vw",
    "@media(min-width: 1280px)": {
      fontSize: "18px",
    },
    "@media(max-width: 1025px)": {
      fontSize: "2.15vw",
    },
    "@media(max-width: 767px)": {
      fontSize: "3.38vw",
    },
  },
  oldPrice: {
    fontWeight: 400,
    lineHeight: 1.21,
    textDecoration: "line-through",
    color: theme.palette.color.secondaryLight,

    marginLeft: "0.62vw",
    fontSize: "1.09vw",
    "@media(min-width: 1280px)": {
      marginLeft: "8px",
      fontSize: "14px",
    },
    "@media(max-width: 1025px)": {
      marginLeft: "0.95vw",
      fontSize: "1.67vw",
    },
    "@media(max-width: 767px)": {
      marginLeft: "1.93vw",
      fontSize: "2.41vw",
    },
  },
  buttonPlusMinusWrapper: {
    position: "relative",
    zIndex: 0,

    marginTop: "3.12vw",
    width: "10.07vw",
    height: "3.12vw",
    "@media(min-width: 1280px)": {
      marginTop: "40px",
      width: "129px",
      height: "40px",
    },
    "@media(max-width: 1025px)": {
      marginTop: "4.79vw",
      width: "15.46vw",
      height: "4.79vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "4.83vw",
      width: "31.15vw",
      height: "7.24vw",
    },
  },
  iconWrapper: {
    width: "auto",
    alignSelf: "stretch",
  },
  icon: {
    minWidth: 0,
    minHeight: 0,
    padding: 0,
    border: "none",
    background: "transparent",
    cursor: "pointer",

    width: "3.12vw",
    height: "3.12vw",
    "@media(min-width: 1280px)": {
      width: "40px",
      height: "40px",
    },
    "@media(max-width: 1025px)": {
      width: "4.79vw",
      height: "4.79vw",
    },
    "@media(max-width: 767px)": {
      width: "7.24vw",
      height: "7.24vw",
    },
  },
  darkGrayColor: {
    "& path": {
      fill: theme.palette.color.secondaryLight,
    },
  },
  redColor: {
    "& path": {
      fill: "#FF5B5B",
    },
  },
  unselect: {
    "& *": {
      "-webkit-touch-callout": "none" /* iOS Safari */,
      "-webkit-user-select": "none" /* Chrome/Safari/Opera */,
      "-khtml-user-select": "none" /* Konqueror */,
      "-moz-user-select": "none" /* Firefox */,
      "-ms-user-select": "none" /* Internet Explorer/Edge */,
      "user-select": "none",
    },
  },
}))

/**
 * Карточка продукта на странице корзины
 * @module src/components/cartPage/cart
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.product - объект продукта полученый из prismic
 */
export default function Card({ product }) {
  const classes = useStyle()

  const state = React.useContext(GlobalStateContext)
  const dispatch = React.useContext(GlobalDispatchContext)

  const favorites = state.inFavorites(product)

  function addInFavorites() {
    dispatch({ type: "ADD_PRODUCT_IN_FAVORITES", payload: product })
  }
  function deleteFromFavorites() {
    dispatch({ type: "DELETE_PRODUCT_FROM_FAVORITES", payload: product})
  }
  function deleteFromCart() {
    dispatch({ type: "DELETE_PRODUCT_FROM_CART", payload: product})
  }

  // преобразуем цену
  function priceMod(value) {
    let price = "" + value
    let length = price.length
    for (let i = 1; i < length; i++) {
      if (i % 3 === 0) {
        price = price.slice(0, length - i) + " " + price.slice(length - i)
      }
    }
    return price
  }

  const img =
    product.data.images[0]?.image.localFile?.childImageSharp.gatsbyImageData ??
    false

  return img ? (
    <Grid container justify="space-between" className={classes.wrapper}>
      <Grid container alignItems="center" style={{ width: "auto" }}>
        <Link to={`/${product.uid}/`} style={{ textDecoration: "none" }}>
          <GatsbyImage loading="eager"
            image={img}
            alt={product.data.images[0]?.image.alt ?? "product"}
            className={classes.image + " " + classes.unselect}
            imgStyle={{ objectFit: "contain" }}
          />
        </Link>

        <div className={classes.centralBlockWrapper}>
          <Link to={`/${product.uid}/`} style={{ textDecoration: "none" }}>
            <Typography variant="body2" className={classes.title}>
              {product.data.name}
            </Typography>
          </Link>

          <Grid container alignItems="center" className={classes.priceWrapper}>
            <Typography className={classes.price}>
              {`${priceMod(product.data.price)} ₽`}
            </Typography>

            {product.data.old_price ? (
              <Typography className={classes.oldPrice}>
                {`${priceMod(product.data.old_price)} ₽`}
              </Typography>
            ) : null}
          </Grid>

          <div className={classes.buttonPlusMinusWrapper}>
            <ButtonPlusMinus variant="full" product={product} />
          </div>
        </div>
      </Grid>

      <Grid
        container
        direction="column"
        justify="space-between"
        className={classes.iconWrapper}
      >
        {favorites ? (
          <button onClick={deleteFromFavorites} className={classes.icon}>
            <Favorites className={classes.redColor} />
          </button>
        ) : (
          <button onClick={addInFavorites} className={classes.icon}>
            <NotFavorites className={classes.darkGrayColor} />
          </button>
        )}
        <button className={classes.icon}>
          <Trash className={classes.darkGrayColor} onClick={deleteFromCart} />
        </button>
      </Grid>
    </Grid>
  ) : null
}
