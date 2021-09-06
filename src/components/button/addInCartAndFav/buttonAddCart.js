import React from "react"
import { Button, makeStyles, Typography } from "@material-ui/core"
import IconButtonPlus from "../../../../static/svg/iconButtonPlus.svg"

import { GlobalDispatchContext } from "../../../context/GlobalContextProvider"

const useStyles = makeStyles(theme => ({
  button: {
    padding: 0,
    background: theme.palette.background.accent,
    textTransform: "none",
    color: "#ffffff",
    lineHeight: 1.21,
    fontWeight: 700,
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
    "&:hover": {
      background: theme.palette.background.accent,
    },
  },
  buttonPage: {
    width: "calc(100% - 4.21vw)",
    height: "3.9vw",
    "@media(min-width: 1280px)": {
      width: "calc(100% - 54px)",
      height: "50px",
    },
    "@media(max-width: 1025px)": {
      width: "calc(100% - 6.47vw)",
      height: "5.99vw",
    },
    "@media(max-width: 767px)": {
      width: "calc(100% - 13.04vw)",
      height: "12.07vw",
    },
  },
  buttonCard: {
    width: "calc(100% - 3.43vw)",
    height: "3.12vw",
    "@media(min-width: 1280px)": {
      width: "calc(100% - 44px)",
      height: "40px",
    },
    "@media(max-width: 1025px)": {
      width: "calc(100% - 5.27vw)",
      height: "4.79vw",
    },
    "@media(max-width: 767px)": {
      width: "calc(100% - 10.62vw)",
      height: "9.66vw",
    },
  },
  textPage: {
    fontSize: "1.4vw",
    "@media(min-width: 1280px)": {
      fontSize: "18px",
    },
    "@media(max-width: 1025px)": {
      fontSize: "2.03vw",
    },
    "@media(max-width: 767px)": {
      fontSize: "4.1vw",
    },
  },
  textCard: {
    fontSize: "1.09vw",
    "@media(min-width: 1280px)": {
      fontSize: "14px",
    },
    "@media(max-width: 1025px)": {
      fontSize: "1.67vw",
    },
    "@media(max-width: 767px)": {
      fontSize: "3.38vw",
    },
  },
  buttonPageOffer: {
    width: "100%",
    height: "3.9vw",
    "@media(min-width: 1280px)": {
      height: "50px",
    },
    "@media(max-width: 1025px)": {
      height: "5.99vw",
    },
    "@media(max-width: 767px)": {
      height: "9.6618vw",
    },
  },
  iconButtonPlus: {
    width: "1.5625vw",
    height: "1.5625vw",
    marginRight: "0.78125vw",
    "@media(min-width: 1280px)": {
      width: "20px",
      height: "20px",
      marginRight: "10px",
    },
    "@media(max-width: 1025px)": {
      width: "2.398vw",
      height: "2.398vw",
      marginRight: "1.199vw",
    },
    "@media(max-width: 767px)": {
      width: "4.10628vw",
      height: "4.10628vw",
      marginRight: "3.8647vw",
    },
  },
}))

/**
 * Кнопка добавления товара в корзину
 * @module src/components/button/addInCartAndFav/buttonAddCart
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.product - объект продукта полученый из prismic
 * @param {String} props.text - текст для отображения на кнопке
 * @param {String} [props.variant = card] - вариант отбражения кнопки (page - для страницы продукта, offerPage - для окна аксесуаров, card - для карточки товара)
 * @param {function} props.setDialogOpen - функция установки состояния модального окна с аксессуарами
 */
export default function ButtonAddCart({
  product,
  text,
  variant,
  setDialogOpen,
}) {
  const classes = useStyles()

  const dispatch = React.useContext(GlobalDispatchContext)

  function addToCart() {
    if (variant !== "offerPage") setDialogOpen(true)
    dispatch({ type: "ADD_PRODUCT_IN_CART", payload: product.id })
  }

  let classText
  let classButton

  switch (variant) {
    case "page":
      classText = classes.textPage
      classButton = classes.buttonPage
      break
    case "offerPage":
      classText = classes.textCard
      classButton = classes.buttonPageOffer
      break
    case "card":
    default:
      classText = classes.textCard
      classButton = classes.buttonCard
  }
  return (
    <>
      <Button
        id="add-to-cart"
        disableRipple
        onClick={addToCart}
        aria-label="добавить в корзину"
        className={classes.button + " " + classButton}
      >
        {variant === "offerPage" ? (
          <IconButtonPlus id="add-to-cart" className={classes.iconButtonPlus} />
        ) : null}
        <Typography id="add-to-cart" align="center" className={classText}>
          {text}
        </Typography>
      </Button>
    </>
  )
}
