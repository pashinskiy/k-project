import React from "react"
import { makeStyles, Typography } from "@material-ui/core"

import Star from "../../../../../static/svg/star.svg"

const useStyle = makeStyles(theme => ({
  title: {
    display: "flex",
    fontWeight: 400,
    lineHeight: 1.21,

    fontSize: "1.09vw",
    "@media(min-width: 1280px)": {
      fontSize: "14px",
    },
    "@media(max-width: 1025px)": {
      fontSize: "1.67vw",
    },
    "@media(max-width: 767px)": {
      fontSize: "3.38vw",
    },
  },
  icon: {
    display: "flex",

    width: "0.78vw",
    height: "0.78vw",
    marginLeft: "0.23vw",
    "@media(min-width: 1280px)": {
      width: "10px",
      height: "10px",
      marginLeft: "3px",
    },
    "@media(max-width: 1025px)": {
      width: "1.19vw",
      height: "1.19vw",
      marginLeft: "0.35vw",
    },
    "@media(max-width: 767px)": {
      width: "2.41vw",
      height: "2.41vw",
      marginLeft: "0.72vw",
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
 * @module src/components/orderingPage/elementsForms/wrapperWithTitle
 * @param {Object} props - объект свойств компонента React
 * @param {String} props.title - заголовок блока
 * @param {Object} props.children - дочерние компоненты
 */
export default function WrapperWithTitle({ title, children }) {
  const classes = useStyle()

  return (
    <div>
      <Typography className={classes.title}>
        {title}
        <i className={classes.icon}>
          <Star />
        </i>
      </Typography>

      <div className={classes.childrenWrapper}>{children}</div>
    </div>
  )
}
