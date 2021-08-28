import React from "react"
import { Button, Typography, makeStyles } from "@material-ui/core"
import IconCross from "../../../static/svg/cross.svg"

const useStyles = makeStyles(theme => ({
  cleanFilterButton: {
    background: theme.palette.background.secondary,
    width: "auto",
    display: "flex",
    justifyContent: "space-between",
    minWidth: 0,

    padding: "0.31vw 0.62vw",
    marginLeft: "0.62vw",
    borderRadius: "1.56vw",
    "@media(min-width: 1280px)": {
      padding: "4px 8px",
      marginLeft: "8px",
      borderRadius: "20px",
    },
    "@media(max-width: 1025px)": {
      padding: "0.47vw 0.95vw",
      marginLeft: "0.95vw",
      borderRadius: "2.39vw",
    },
    "@media(max-width: 767px)": {
      padding: "0.96vw 1.93vw",
      marginLeft: "1.93vw",
      borderRadius: "4.83vw",
    },
  },
  buttonText: {
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
  cleanFilterButtonIcon: {
    width: "0.62vw",
    height: "0.62vw",
    marginLeft: "0.62vw",
    "@media(min-width: 1280px)": {
      width: "8px",
      height: "8px",
      marginLeft: "8px",
    },
    "@media(max-width: 1025px)": {
      width: "0.95vw",
      height: "0.95vw",
      marginLeft: "0.95vw",
    },
    "@media(max-width: 767px)": {
      width: "1.93vw",
      height: "1.93vw",
      marginLeft: "1.93vw",
    },
  },
}))

/**
 * Кнопка очистки фильтра 
 * @module src/components/filter/buttonClean
 * @param {Object} props - объект свойств компонента React
 * @param {Number|String} props.count - количество установленных фильтров
 * @param {function} props.clean - функция очистки фильтра
 */
export default function ButtonClean({ count, clean }) {
  const classes = useStyles()

  return count ? (
    <Button onClick={clean} className={classes.cleanFilterButton}>
      <Typography className={classes.buttonText}>{count}</Typography>
      <IconCross className={classes.cleanFilterButtonIcon} />
    </Button>
  ) : null
}
