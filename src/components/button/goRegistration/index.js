import React from "react"
import { Button, makeStyles, Typography } from "@material-ui/core"
import { navigate } from "gatsby"

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
    "@media(max-width: 1025px)": {
      borderRadius: "4.79vw",
    },
    "@media(max-width: 767px)": {
      borderRadius: "4.83vw",
    },
    "&:hover": {
      background: theme.palette.background.accent,
    },
  },
  active: {
    boxShadow: "inset 0 0 2px 2px black",
  },
  text: {
    fontWeight: 700,
    lineHeight: 1.21,
    color: theme.palette.color.mainContrast,

    fontSize: "1.4vw",
    "@media(min-width: 1280px)": {
      fontSize: "18px",
    },
    "@media(max-width: 1025px)": {
      fontSize: "2.03vw",
    },
    "@media(max-width: 767px)": {
      fontSize: "4.1vw",
    },
  },
}))

/**
 * Кнопка перехода к регистрации
 * @module src/components/button/goRegistration
 * @param {Object} props - объект свойств компонента React
 * @param {String} props.text - текст для отображения на кнопке
 * @param {function} props.onClick - функция вызываемая перед переходом
 */
export default function GoRegistration({ text, onClick }) {
  const classes = useStyles()

  const [active, setActive] = React.useState("")

  function buttonClick() {
    onClick()
    navigate("/ordering")
  }

  return (
    <Button
      id="checkout"
      disableRipple
      onClick={buttonClick}
      onPointerDown={() => setActive(classes.active)}
      onPointerUp={() => setTimeout(() => setActive(""), 300)}
      className={classes.button + " " + classes.active}
    >
      <Typography id="checkout" align="center" className={classes.text}>
        {text}
      </Typography>
    </Button>
  )
}
