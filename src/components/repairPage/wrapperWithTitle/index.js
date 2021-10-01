import React from "react"
import { makeStyles, Typography } from "@material-ui/core"

const useStyle = makeStyles(theme => ({
  wrapper: {
    marginTop: "2.34vw",
    "@media(min-width: 1280px)": {
      marginTop: 30,
    },
    "@media(max-width: 767px)": {
      marginTop: "7.24vw",
    },
  },
  title: {
    display: "flex",
    fontWeight: 400,
    lineHeight: 1.21,

    fontSize: "1.09vw",
    "@media(min-width: 1280px)": {
      fontSize: "14px",
    },
    "@media(max-width: 767px)": {
      fontSize: "3.38vw",
    },
  },
  childrenWrapper: {
    marginTop: "0.62vw",
    "@media(min-width: 1280px)": {
      marginTop: "8px",
    },
    "@media(max-width: 1025px)": {
      marginTop: "0.95vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "1.93vw",
    },
  },
}))

/**
 * Компонент-обертка для элементов формы
 * @module src/components/repairPage/wrapperWithTitle
 * @param {Object} props - объект свойств компонента React
 * @param {String} props.title - заголовок блока
 * @param {Object} props.children - дочерние компоненты
 */
export default function WrapperWithTitle({ title, children }) {
  const classes = useStyle()

  return (
    <div className={classes.wrapper}>
      <Typography className={classes.title}>{title}</Typography>

      <div className={classes.childrenWrapper}>{children}</div>
    </div>
  )
}
