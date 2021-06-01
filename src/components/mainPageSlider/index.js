import React, { useState } from "react"
import {
  makeStyles,
  Grid,
} from "@material-ui/core"
import SaleCard from "../saleCardPanel/saleCard"

const useStyles = makeStyles(theme => ({
    cardItem: {
        paddingBottom: "40px",
    }
}))

export default function MainPageSlider({sales}){
    const classes = useStyles()
    const [salesArray, setSalesArray] = useState(sales)
    // const [activeSale, setActiveSale] = useState()



    console.log(sales)

    return(
        <Grid container className={classes.wrapper}>
      {salesArray.map((sale, i) => (
        <Grid item xs={12} className={classes.cardItem} key={sale.uid + "_" + i}>
          <SaleCard sale={sale} key={sale.uid} mainPage/>
        </Grid>
      ))}
        </Grid>
    )
}