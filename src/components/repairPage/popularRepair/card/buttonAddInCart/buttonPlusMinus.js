import React from "react"
import { Grid, makeStyles, Typography } from "@material-ui/core"

import Minus from "../../../../../../static/svg/minus.svg"
import Plus from "../../../../../../static/svg/plus.svg"

import {
  GlobalStateContext,
  GlobalDispatchContext,
} from "../../../../../context/GlobalContextProvider"

const useStyles = makeStyles(theme => ({
  wrapper: {
    backgroundClip: "padding-box",
    position: "relative",
    boxSizing: "border-box",
    background: "#fff",

    border: `1px solid ${theme.palette.color.accentSecondary}`,

    width: "calc(100% - 3.43vw)",
    borderRadius: "0.93vw",
    padding: "0.82vw",
    "@media(min-width: 1280px)": {
      width: "calc(100% - 44px)",
      borderRadius: "12px",
      padding: "10.5px",
    },
    "@media(max-width: 1025px)": {
      width: "calc(100% - 5.27vw)",
      borderRadius: "1.43vw",
      padding: "1.25vw",
    },
    "@media(max-width: 767px)": {
      width: "calc(100% - 10.62vw)",
      borderRadius: "2.89vw",
      padding: "2.53vw",
    },
  },
  icon: {
    minWidth: 0,
    minHeight: 0,
    padding: 0,
    background: "transparent",
    border: "none",
    cursor: "pointer",

    width: "0.93vw",
    height: "0.93vw",
    "@media(min-width: 1280px)": {
      width: "12px",
      height: "12px",
    },
    "@media(max-width: 1025px)": {
      width: "1.43vw",
      height: "1.43vw",
    },
    "@media(max-width: 767px)": {
      width: "2.89vw",
      height: "2.89vw",
    },
  },
  amount: {
    fontWeight: 700,
    lineHeight: 1.21,
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
  disable: {
    cursor: "default",
    "& path": {
      fill: theme.palette.color.secondaryLight,
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
 * Кнопка изменения количества товара в корзине
 * @module src/components/repairPage/popularRepair/card/buttonAddInCart/buttonPlusMinus
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.repair - объект ремонта
 */
export default function ButtonPlusMinus({repair}) {
  const classes = useStyles()

  const state = React.useContext(GlobalStateContext)
  const dispatch = React.useContext(GlobalDispatchContext)

  const count = state.inCart(repair)

  function plus() {
    dispatch({ type: "INCREMENT_PRODUCT_COUNT", payload: repair })
  }
  function minus() {
    dispatch({ type: "DECREMENT_PRODUCT_COUNT", payload: repair })
  }

  const classMinus = count > 1 ? "" : classes.disable
  const classPlus = count < 99 ? "" : classes.disable

  return (
    <Grid
      container
      justify="space-between"
      alignItems="center"
      className={classes.wrapper + " " + classes.unselect}
    >
      <button aria-label="минус" onClick={minus} className={classes.icon}>
        <Minus className={classMinus} />
      </button>

      <Typography className={classes.amount}>{count}</Typography>

      <button aria-label="плюс" onClick={plus} className={classes.icon}>
        <Plus className={classPlus} />
      </button>
    </Grid>
  )
}
