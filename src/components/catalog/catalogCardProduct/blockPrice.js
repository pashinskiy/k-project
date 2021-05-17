import React from "react"
import { Grid, makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  price: {
    fontWeight: 700,
    lineHeight: 1.21,
    fontSize: "1.56vw",
    marginRight: "0.62vw",
    "@media(min-width: 1280px)": {
      fontSize: "20px",
      marginRight: "8px",
    },
    "@media(max-width: 834px)": {
      fontSize: "2.39vw",
      marginRight: "0.95vw",
    },
    "@media(max-width: 414px)": {
      fontSize: "4.83vw",
      marginRight: "1.93vw",
    },
  },
  oldPrice: {
    fontWeight: 400,
    fontSize: "0.93vw",
    color: "#BDBDC6",
    "-webkit-text-fill-color": "#BDBDC6",
    textDecoration: "line-through",
    "@media(min-width: 1280px)": {
      fontSize: "12px",
    },
    "@media(max-width: 834px)": {
      fontSize: "1.43vw",
    },
    "@media(max-width: 414px)": {
      fontSize: "2.89vw",
    },
  },
}))

export default function BlockPrice({ product }) {
  // input data

  // product = {
  //   uid: "1234567",
  //   data: {
  //     name: "name",
  //     color: "red",
  //     price: "19000",
  //     oldPrice: "50000",
  //   },
  // }
  // allColors = [
  //   { uid: "123", data: { color_name: "Красный", color: "red" } },
  //   { uid: "6787", data: { color_name: "Желтый", color: "yellow" } },
  // ]

  const classes = useStyles()

  // преобразуем цену
  function priceMod(value) {
    let price = "" + value
    let length = price.length
    for (let i = 1; i < length; i++) {
      if (i % 3 === 0) {
        price = price.slice(0, length - i) + " " + price.slice(length - i)
      }
    }
    return price
  }

  return (
    <Grid container alignItems="flex-end">
      <Typography variant="body2" className={classes.price}>
        {priceMod(product.data.price)} &#8381;{" "}
        {product.data.old_price ? (
          <span className={classes.oldPrice}>
            {priceMod(product.data.old_price)} &#8381;
          </span>
        ) : null}
      </Typography>
    </Grid>
  )
}
