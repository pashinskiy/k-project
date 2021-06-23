import React from "react"
import { Button, makeStyles, Typography } from "@material-ui/core"

import { GlobalStateContext } from "../../../context/GlobalContextProvider"

const useStyles = makeStyles(theme => ({
  button: {
    width: "100%",
    height: "100%",

    padding: 0,
    background: theme.palette.background.accent,
    textTransform: "none",

    borderRadius: "0.93vw",
    "@media(min-width: 1280px)": {
      borderRadius: "12px",
    },
    "@media(max-width: 834px)": {
      borderRadius: "4.79vw",
    },
    "@media(max-width: 414px)": {
      borderRadius: "4.83vw",
    },
    "&:hover": {
      background: theme.palette.background.accent,
    },
  },
  text: {
    fontWeight: 700,
    lineHeight: 1.21,
    color: theme.palette.color.mainContrast,

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
}))

export default function GoRegistration({ text, products }) {
  const classes = useStyles()
  const state = React.useContext(GlobalStateContext)

  function goRegistration() {
    const order = products.reduce((order, product, i) => {
      const num = i + 1
      const name = product.data.name
      const color = product.data.color_name
      const count = state.inCart(product.id)
      let position = `${num}. Товар: ${name}; Цвет: ${color}; Количество: ${count}. \n`
      return order + position
    }, "")

    localStorage.setItem("order", order)
  }

  return (
    <Button disableRipple onClick={goRegistration} className={classes.button}>
      <Typography align="center" className={classes.text}>
        {text}
      </Typography>
    </Button>
  )
}
