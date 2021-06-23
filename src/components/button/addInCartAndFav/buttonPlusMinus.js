import React from "react"
import { Grid, makeStyles, Typography } from "@material-ui/core"

import Minus from "../../../../static/svg/minus.svg"
import Plus from "../../../../static/svg/plus.svg"

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
  icon: {
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
    "& path": {
      fill: theme.palette.color.secondaryLight,
    },
  },
}))

export default function ButtonPlusMinus({ product, variant, setInCart }) {
  const classes = useStyles()

  const classButton =
    variant === "page" ? classes.buttonPage : classes.buttonCard

  let cartItems = localStorage.getItem("cart")
  cartItems = cartItems === null || !cartItems ? [] : JSON.parse(cartItems)
  let currentItemIndex = cartItems.findIndex(obj => obj.name === product.uid)

  const [count, setCount] = React.useState(cartItems[currentItemIndex].count)

  function plus() {
    console.log(`plus ${product.uid}`)
    if (count < 99){
      setCount(count + 1)  
      cartItems[currentItemIndex].count += 1 
      localStorage.setItem("cart", JSON.stringify(cartItems))
      console.log(cartItems)
    } 
  }
  function minus() {
    console.log(`minus ${product.uid}`)
    if (count > 1){
      setCount(count - 1)
      cartItems[currentItemIndex].count -= 1
      localStorage.setItem("cart", JSON.stringify(cartItems))
      console.log(cartItems)
    } 
  }

  const classMinus = count > 1 ? "" : classes.disable
  const classPlus = count < 99 ? "" : classes.disable

  return (
    <Grid
      container
      justify="space-between"
      alignItems="center"
      className={classes.wrapper + " " + classButton}
    >
      <Minus onClick={minus} className={classes.icon + " " + classMinus} />
      <Typography className={classes.amount}>{count}</Typography>
      <Plus onClick={plus} className={classes.icon + " " + classPlus} />
    </Grid>
  )
}
