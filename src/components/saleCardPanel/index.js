import { Grid, makeStyles, useMediaQuery } from "@material-ui/core"
import React from "react"
import SaleCard from "./saleCard"

const useStyles = makeStyles(theme => ({
    wrapper: {
      width: "calc(100% + 28px)",
      margin: "0 -14px",
    },
    cardItem:{
        padding: "14px",
    },
}))

/**
 * Панель всех акций на странице акций
 * @module src/components/saleCardPanel
 * @param {Object} props - объект свойств компонента React
 * @param {Object[]} props.sales - массив объектов акций полученый из prismic
 */
export default function SaleCardPanel({sales}) {
    const classes = useStyles()
  const isMobile = useMediaQuery("(max-width: 767px)")
  return (
    <Grid container className={classes.wrapper}>
      {sales.map((sale, i) => (
        <Grid item xs={isMobile ? 12 : 6} className={classes.cardItem} key={sale.uid + "_" + i}>
          <SaleCard sale={sale} key={sale.uid} />
        </Grid>
      ))}
    </Grid>
  )
}
