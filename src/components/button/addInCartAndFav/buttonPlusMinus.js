import React from "react"
import { Grid, makeStyles, Typography } from "@material-ui/core"

import Minus from "../../../../static/svg/minus.svg"
import Plus from "../../../../static/svg/plus.svg"

import {
  GlobalStateContext,
  GlobalDispatchContext,
} from "../../../context/GlobalContextProvider"

const useStyles = makeStyles(theme => ({
  wrapper: {
    backgroundClip: "padding-box",
    position: "relative",
    boxSizing: "border-box",
    background: "#fff",

    borderRadius: "0.93vw",
    border: "0.15vw solid transparent",
    padding: "0 0.93vw",
    "@media(min-width: 1280px)": {
      borderRadius: "12px",
      border: "2px solid transparent",
      padding: "0 12px",
    },
    "@media(max-width: 834px)": {
      borderRadius: "1.43vw",
      border: "0.23vw solid transparent",
      padding: "0 1.43vw",
    },
    "@media(max-width: 414px)": {
      borderRadius: "2.89vw",
      border: "0.48vw solid transparent",
      padding: "0 2.89vw",
    },

    "&::before": {
      content: "''",
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
      borderRadius: "inherit",
      background: theme.palette.background.accent,
      zIndex: -1,
      margin: "-0.15vw",
      "@media(min-width: 1280px)": {
        margin: "-2px",
      },
      "@media(max-width: 834px)": {
        margin: "-0.23vw",
      },
      "@media(max-width: 414px)": {
        margin: "-0.48vw",
      },
    },
  },
  buttonPage: {
    width: "calc(100% - 8.43vw)",
    height: "3.9vw",
    "@media(min-width: 1280px)": {
      width: "calc(100% - 108px)",
      height: "50px",
    },
    "@media(max-width: 834px)": {
      width: "calc(100% - 12.94vw)",
      height: "5.99vw",
    },
    "@media(max-width: 414px)": {
      width: "calc(100% - 26.08vw)",
      height: "12.07vw",
    },
  },
  buttonCard: {
    width: "calc(100% - 6.87vw)",
    height: "3.12vw",
    "@media(min-width: 1280px)": {
      width: "calc(100% - 88px)",
      height: "40px",
    },
    "@media(max-width: 834px)": {
      width: "calc(100% - 10.55vw)",
      height: "4.79vw",
    },
    "@media(max-width: 414px)": {
      width: "calc(100% - 21.25vw)",
      height: "9.66vw",
    },
  },
  buttonFull: {
    width: "100%",
    height: "100%",
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
    "@media(max-width: 834px)": {
      width: "1.43vw",
      height: "1.43vw",
    },
    "@media(max-width: 414px)": {
      width: "2.89vw",
      height: "2.89vw",
    },
  },
  amount: {
    fontWeight: 700,
    lineHeight: 1.21,
    fontSize: "1.32vw",
    "@media(min-width: 1280px)": {
      fontSize: "17px",
    },
    "@media(max-width: 834px)": {
      fontSize: "1.67vw",
    },
    "@media(max-width: 414px)": {
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

export default function ButtonPlusMinus({ product, variant }) {
  const classes = useStyles()
  const classButton = (() => {
    switch (variant) {
      case "page":
        return classes.buttonPage
      case "full":
        return classes.buttonFull
      default:
        return classes.buttonCard
    }
  })()

  const state = React.useContext(GlobalStateContext)
  const dispatch = React.useContext(GlobalDispatchContext)

  const count = state.inCart(product.id)

  function plus() {
    dispatch({ type: "INCREMENT_PRODUCT_COUNT", payload: product.id })
  }
  function minus() {
    dispatch({ type: "DECREMENT_PRODUCT_COUNT", payload: product.id })
  }

  const classMinus = count > 1 ? "" : classes.disable
  const classPlus = count < 99 ? "" : classes.disable

  return (
    <Grid
      container
      justify="space-between"
      alignItems="center"
      className={classes.wrapper + " " + classes.unselect + " " + classButton}
    >
      <button onClick={minus} className={classes.icon}>
        <Minus className={classMinus} />
      </button>

      <Typography className={classes.amount}>{count}</Typography>

      <button onClick={plus} className={classes.icon}>
        <Plus className={classPlus} />
      </button>
    </Grid>
  )
}
