import React, { useContext, useState } from "react"
import { Button, Dialog, Grid, makeStyles, Typography } from "@material-ui/core"
import ProductAddedCard from "../../cart/productAddedCard"
import IconButtonPlus from "../../../../static/svg/iconButtonPlus.svg"

import { GlobalDispatchContext, GlobalStateContext } from "../../../context/GlobalContextProvider"

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
    "@media(max-width: 834px)": {
      borderRadius: "1.43vw",
    },
    "@media(max-width: 414px)": {
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
    "@media(max-width: 834px)": {
      width: "calc(100% - 6.47vw)",
      height: "5.99vw",
    },
    "@media(max-width: 414px)": {
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
    "@media(max-width: 834px)": {
      width: "calc(100% - 5.27vw)",
      height: "4.79vw",
    },
    "@media(max-width: 414px)": {
      width: "calc(100% - 10.62vw)",
      height: "9.66vw",
    },
  },
  textPage: {
    fontSize: "1.4vw",
    "@media(min-width: 1280px)": {
      fontSize: "18px",
    },
    "@media(max-width: 834px)": {
      fontSize: "2.03vw",
    },
    "@media(max-width: 414px)": {
      fontSize: "4.1vw",
    },
  },
  textCard: {
    fontSize: "1.09vw",
    "@media(min-width: 1280px)": {
      fontSize: "14px",
    },
    "@media(max-width: 834px)": {
      fontSize: "1.67vw",
    },
    "@media(max-width: 414px)": {
      fontSize: "3.38vw",
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
    "@media(max-width: 834px)": {
      width: "2.398vw",
      height: "2.398vw",
      marginRight: "1.199vw",
      },
    "@media(max-width: 414px)": {
      width: "4.10628vw",
      height: "4.10628vw",
      marginRight: "3.8647vw",
      },
}
}))

export default function ButtonAddCart({ product, text, variant, dialog, iconPlus, setDialogOpen }) {
  const classes = useStyles()

  const dispatch = React.useContext(GlobalDispatchContext)
  const state = React.useContext(GlobalStateContext)

  function addToCart() {
    if(dialog)
      setDialogOpen(true)
    dispatch({ type: "ADD_PRODUCT_IN_CART", payload: product.id })
  }

  // const classText = variant === "page" ? classes.textPage : classes.textCard
  // const classButton =
  //   variant === "page" ? classes.buttonPage : classes.buttonCard

  let classText
  let classButton

  switch(variant){
    case "page":
      classText = classes.textPage
      classButton = classes.buttonPage
      break
    case "offerPage":
      classText = classes.textCard
      classButton = classes.buttonPage
      break
    default:
      classText = classes.textCard
      classButton = classes.buttonCard
  }
  return (
    <>
      <Button
        disableRipple
        onClick={addToCart}
        className={classes.button + " " + classButton}
      >
        {iconPlus ? <IconButtonPlus className={classes.iconButtonPlus}/> : null}
        <Typography align="center" className={classText}>
          {text}
        </Typography>
      </Button>
    </>
  )
}
