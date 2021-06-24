import React from "react"
import { makeStyles, Grid, Typography, Button } from "@material-ui/core"

import Arrow from "../../../../../static/svg/arrow.svg"

const useStyle = makeStyles(theme => ({
  input: {
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
    "@media(max-width: 834px)": {
      padding: "1.79vw 1.43vw",
      borderRadius: "0.71vw",
      fontSize: "1.67vw",
    },
    "@media(max-width: 414px)": {
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
  },
}))

export default function Input({ afterChange, checkValue, ...other }) {
  const classes = useStyle()
  checkValue = checkValue ? checkValue : () => true
  const [value, setValue] = React.useState("")

  const error = checkValue(value) ? "" : classes.error

  function onInput(e) {
    const newValue = e.currentTarget.value
    if (checkValue(newValue) || newValue === "") {
      setValue(newValue)
      afterChange(newValue)
    } else {
      e.currentTarget.value = value
    }
  }

  return (
    <input
      onInput={onInput}
      className={classes.input + " " + error}
      {...other}
    />
  )
}
