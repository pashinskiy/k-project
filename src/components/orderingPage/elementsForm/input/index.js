import React from "react"
import { makeStyles, useMediaQuery } from "@material-ui/core"

import { OrderingDispatchContext } from "../../context"

const useStyle = makeStyles(theme => ({
  input: {
    width: "100%",
    background: theme.palette.background.main,
    border: `1px solid transparent`,
    outline: "none",

    fontWeight: 400,
    lineHeight: 1.21,

    padding: "1.17vw 0.93vw",
    borderRadius: "0.46vw",
    fontSize: "1.09vw",
    "@media(min-width: 1280px)": {
      padding: "15px 12px",
      borderRadius: "6px",
      fontSize: "14px",
    },
    "@media(max-width: 1025px)": {
      padding: "1.79vw 1.43vw",
      borderRadius: "0.71vw",
      fontSize: "1.67vw",
    },
    "@media(max-width: 767px)": {
      padding: "3.62vw 2.89vw",
      borderRadius: "1.44vw",
      fontSize: "3.38vw",
    },

    "&:focus": {
      border: `1px solid ${theme.palette.color.accentSecondary}`,
    },
  },
  error: {
    border: `1px solid #F1ADAD`,
    "@media(max-width: 767px)": {
      border: `1px solid ${theme.palette.color.accentSecondary}`,
    },
  },
}))

/**
 * Элемент ввода текста
 * @module src/components/orderingPage/elementsForms/input
 * @param {Object} props - объект свойств компонента React
 * @param {function} props.afterChange - функция установки нового значения
 * @param {function} props.checkValue - функция проверки валидности введенного значения должна возвращать boolean
 */
export default function Input({ afterChange, checkValue, ...other }) {
  const classes = useStyle()
  const orderingDispatch = React.useContext(OrderingDispatchContext)

  const smartPhoneScreen = useMediaQuery("(max-width: 767px)")

  checkValue = checkValue ? checkValue : () => true

  const error = checkValue() && !smartPhoneScreen ? "" : classes.error

  function onInput(e) {
    const newValue = e.currentTarget.value
    afterChange(newValue)
  }

  function focusing() {
    orderingDispatch({ type: "SET_FOCUSING_ON_FIELD", payload: true })
  }

  function blurring() {
    orderingDispatch({ type: "SET_FOCUSING_ON_FIELD", payload: false })
  }

  return (
    <input
      onInput={onInput}
      onFocus={focusing}
      onBlur={blurring}
      onKeyPress={e => {
        if (e.code === "Enter") blurring()
      }}
      className={classes.input + " " + error}
      {...other}
    />
  )
}
