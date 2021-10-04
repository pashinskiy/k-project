import React from "react"
import { makeStyles, Grid, Typography } from "@material-ui/core"

import Trash from "../../../../static/svg/trash.svg"

import {
  GlobalStateContext,
  GlobalDispatchContext,
} from "../../../context/GlobalContextProvider"

const useStyle = makeStyles(theme => ({
  wrapper: {
    background: theme.palette.background.secondary,

    padding: "1.87vw",
    borderRadius: "0.93vw",
    overflow: "hidden",

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
  icon: {
    minWidth: 0,
    minHeight: 0,
    padding: 0,
    border: "none",
    background: "transparent",
    cursor: "pointer",
    alignSelf: "center",

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
}))

/**
 * Карточка услуги на странице корзины
 * @module src/components/cartPage/cardRequest
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.product - объект услуги
 */
export default function CardRequest({ product }) {
  const classes = useStyle()

  const state = React.useContext(GlobalStateContext)
  const dispatch = React.useContext(GlobalDispatchContext)

  function deleteFromCart() {
    dispatch({ type: "DELETE_PRODUCT_FROM_CART", payload: product })
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

  return (
    <Grid container justify="space-between" className={classes.wrapper}>
      <div>
        <Typography>Ремонт техники</Typography>
        <Typography>Категория: {product.data.category}</Typography>
      </div>

      <div>
        {product.data.services.map(service => (
          <Typography>- {service.name}</Typography>
        ))}
      </div>

      <button className={classes.icon}>
        <Trash className={classes.darkGrayColor} onClick={deleteFromCart} />
      </button>
    </Grid>
  )
}
