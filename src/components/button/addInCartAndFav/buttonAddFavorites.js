import React from "react"
import { Button, makeStyles } from "@material-ui/core"

import Favorites from "../../../../static/svg/favorites.svg"
import NotFavorites from "../../../../static/svg/notFavorites.svg"

import {
  GlobalStateContext,
  GlobalDispatchContext,
} from "../../../context/GlobalContextProvider"

const useStyles = makeStyles(theme => ({
  button: {
    minWidth: 0,
    borderRadius: "0.93vw",
    "@media(min-width: 1280px)": {
      borderRadius: "12px",
    },
    "@media(max-width: 1025px)": {
      borderRadius: "1.43vw",
    },
    "@media(max-width: 767px)": {
      borderRadius: "2.89vw",
    },
  },
  buttonPage: {
    width: "3.9vw",
    height: "3.9vw",
    padding: "1.01vw",
    "@media(min-width: 1280px)": {
      width: "50px",
      height: "50px",
      padding: "13px",
    },
    "@media(max-width: 1025px)": {
      width: "5.99vw",
      height: "5.99vw",
      padding: "1.55vw",
    },
    "@media(max-width: 767px)": {
      width: "12.07vw",
      height: "12.07vw",
      padding: "3.14vw",
    },
  },
  buttonCard: {
    width: "3.12vw",
    height: "3.12vw",
    padding: "0.78vw",
    "@media(min-width: 1280px)": {
      width: "40px",
      height: "40px",
      padding: "10px",
    },
    "@media(max-width: 1025px)": {
      width: "4.79VW",
      height: "4.79vw",
      padding: "1.19vw",
    },
    "@media(max-width: 767px)": {
      width: "9.66vw",
      height: "9.66vw",
      padding: "2.41vw",
    },
  },
  notFavorites: {
    background: "#F1ADAD",
    "&:hover": {
      background: "#F1ADAD",
    },
  },
  favorites: {
    background: "#FF5B5B",
    "&:hover": {
      background: "#FF5B5B",
    },
  },
}))

/**
 * Кнопка добавления товара в корзину
 * @module src/components/button/addInCartAndFav/buttonAddFavorites
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.product - объект продукта полученый из prismic
 * @param {String} [props.variant = card] - вариант отбражения кнопки (page - для страницы продукта,card - для карточки товара)
 */
export default function ButtonAddFavorites({ product, variant }) {
  const classes = useStyles()

  const dispatch = React.useContext(GlobalDispatchContext)
  const state = React.useContext(GlobalStateContext)

  const isFavorite = state.inFavorites(product)

  function changeToFavorites() {
    if (!isFavorite)
      dispatch({ type: "ADD_PRODUCT_IN_FAVORITES", payload: product })
    else
      dispatch({ type: "DELETE_PRODUCT_FROM_FAVORITES", payload: product })
  }

  const background = isFavorite ? classes.favorites : classes.notFavorites

  const classButton =
    variant === "page" ? classes.buttonPage : classes.buttonCard
  return (
    <Button
      id="add-to-wishlist"
      disableRipple
      onClick={changeToFavorites}
      aria-label={isFavorite ? "убрать из избранного" : "добавить в избранное"}
      className={classes.button + " " + classButton + " " + background}
    >
      {isFavorite ? <Favorites /> : <NotFavorites />}
    </Button>
  )
}
