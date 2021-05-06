import React from "react"
import { Button, makeStyles, Typography } from "@material-ui/core"

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
  },
  buttonPage: {
    width: "27.03vw",
    height: "3.9vw",
    "@media(min-width: 1280px)": {
      width: "346px",
      height: "50px",
    },
    "@media(max-width: 834px)": {
      width: "92.2%",
      height: "5.99vw",
    },
    "@media(max-width: 414px)": {
      width: "84.29%",
      height: "12.07vw",
    },
  },
  buttonCard: {
    width: "16.09vw",
    height: "3.12vw",
    "@media(min-width: 1280px)": {
      width: "206px",
      height: "40px",
    },
    "@media(max-width: 834px)": {
      width: "24.7vw",
      height: "4.79vw",
    },
    "@media(max-width: 414px)": {
      width: "37.92vw",
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
    fontSize: "14px",
  },
}))

export default function ButtonAddCart({ product, text, variant }) {
  const classes = useStyles()
  function addToCart() {
    alert("add to cart")
  }
  const classText = variant === "page" ? classes.textPage : classes.textCard
  const classButton =
    variant === "page" ? classes.buttonPage : classes.buttonCard
  return (
    <Button onClick={addToCart} className={classes.button + " " + classButton}>
      <Typography align="center" className={classText}>
        {text}
      </Typography>
    </Button>
  )
}
