import React from "react"
import { makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    background: "linear-gradient(180deg, #0094FF 0%, #FF00F5 100%)",
    borderRadius: "40px 12px 40px 40px",
    width: 80,
    height: 80,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  h5: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: "90%",
  },
  h6: {
    fontSize: 28,
    fontWeight: 700,
    lineHeight: "100%",
  },
}))

/**
 * Скидка на товар дня
 * @module src/components/mainPage/saleValue
 * @param {Object} props - объект свойств компонента React
 * @param {Number|String} props.value - значение скидки
 */
export default function SaleValue(props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography variant="h6" component="h1" className={classes.h6}>
        {props.value}%
      </Typography>
      <Typography variant="h5" component="h1" className={classes.h5}>
        скидка
      </Typography>
    </div>
  )
}
