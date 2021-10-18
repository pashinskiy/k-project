import React from "react"
import { Button, makeStyles, Typography } from "@material-ui/core"
import { navigate } from "gatsby"

import TinkoffIcon from "../../../../static/svg/tinkoff.svg"

const useStyles = makeStyles(theme => ({
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "100%",

    background: "#FFDD2D",
    textTransform: "none",

    borderRadius: "0.93vw",
    padding: "0.62vw",
    "@media(min-width: 1280px)": {
      borderRadius: "12px",
      padding: 8,
    },
    "@media(max-width: 1025px)": {
      borderRadius: "2.39vw",
      padding: "0.95vw",
    },
    "@media(max-width: 767px)": {
      borderRadius: "4.83vw",
      padding: "1.93vw",
    },
    "&:hover": {
      background: "#FFDD2D",
    },
  },
  icon: {
    width: "3.12vw",
    height: "2.65vw",
    "@media(min-width: 1280px)": {
      width: 40,
      height: 34,
    },
    "@media(max-width: 1025px)": {
      width: "4.79vw",
      height: "4.07vw",
    },
    "@media(max-width: 767px)": {
      width: "9.66vw",
      height: "8.21vw",
    },
  },
  text: {
    fontWeight: 700,
    lineHeight: 1.21,
    color: theme.palette.color.main,

    marginLeft: "0.78vw",
    fontSize: "1.32vw",
    "@media(min-width: 1280px)": {
      marginLeft: 10,
      fontSize: 17,
    },
    "@media(max-width: 1025px)": {
      marginLeft: "1.19vw",
      fontSize: "2.03vw",
    },
    "@media(max-width: 767px)": {
      marginLeft: "2.41vw",
      fontSize: "4.1vw",
    },
  },
}))

/**
 * Кнопка оформления кредита в Тинькофф
 * @module src/components/button/tinkoff
 * @param {Object} props - объект свойств компонента React
 * @param {String} props.text - текст для отображения на кнопке
 * @param {function} props.onClick - функция вызываемая перед переходом
 */
export default function Tinkoff({ items }) {
  const classes = useStyles()

  function buttonClick() {
      console.log(items)
  }

  return (
    <Button
      id="credit-tinkoff"
      disableRipple
      onClick={buttonClick}
      className={classes.button}
    >
      <div className={classes.icon}>
        <TinkoffIcon />
      </div>

      <Typography
        id="credit-tinkoff-text"
        align="center"
        className={classes.text}
      >
        Кредит в Тинькофф
      </Typography>
    </Button>
  )
}
