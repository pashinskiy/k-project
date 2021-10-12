import React from "react"
import { Button, makeStyles, Typography } from "@material-ui/core"

import { GlobalDispatchContext } from "../../../../../context/GlobalContextProvider"

const useStyles = makeStyles(theme => ({
  button: {
    padding: 0,
    background: theme.palette.background.accent,

    width: "100%",

    borderRadius: "0.93vw",
    padding: "0.89vw",
    "@media(min-width: 1280px)": {
      borderRadius: "12px",
      padding: 11.5,
    },
    "@media(max-width: 1025px)": {
      borderRadius: "1.43vw",
      padding: "1.37vw",
    },
    "@media(max-width: 767px)": {
      borderRadius: "2.89vw",
      padding: "2.77vw",
    },
    "&:hover": {
      background: theme.palette.background.accent,
    },
  },
  textCard: {
    fontWeight: 700,
    lineHeight: 1.21,
    textTransform: "none",
    color: "#ffffff",

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
}))

/**
 * Кнопка добавления ремонта в корзину
 * @module src/components/repairPage/popularRepair/card/buttonAddInCart/buttonAddCart
 * @param {Object} props - объект свойств компонента React
 * @param {String} props.text - текст для отображения на кнопке
 * @param {Object} props.repair - объект ремонта
 */
export default function ButtonAddCart({ text, repair }) {
  const classes = useStyles()

  const dispatch = React.useContext(GlobalDispatchContext)

  function addToCart() {
    dispatch({ type: "ADD_PRODUCT_IN_CART", payload: repair })
  }

  return (
    <Button
      id={`add-to-cart`}
      disableRipple
      onClick={addToCart}
      aria-label="добавить в корзину"
      className={classes.button}
    >
      <Typography
        id="add-to-cart-text"
        align="center"
        className={classes.textCard}
      >
        {text}
      </Typography>
    </Button>
  )
}
