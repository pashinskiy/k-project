import React from "react"
import { Grid, makeStyles } from "@material-ui/core"
import ButtonAddCart from "./buttonAddCart"
import ButtonAddFavorites from "./buttonAddFavorites"
import ButtonPlusMinus from "./buttonPlusMinus"
import ButtonDelete from "./buttonDelete"

const useStyles = makeStyles(theme => ({
  wrapper: {
    marginTop: "1.56vw",
    "@media(min-width: 1280px)": {
      marginTop: "20px",
    },
  },
  fixed: {
    position: "fixed",
    bottom: "3%",
    justifyContent: "space-evenly",
    left: 0,
    zIndex: 999,
  },
}))

export default function AddInCartAndFav({ product, text, variant, fixed, afterChange}) {
  const classes = useStyles()
  fixed = fixed ? classes.fixed : ""

  const inCart = product.uid === "yandex-col1"
  return (
    <Grid
      container
      justify="space-between"
      className={classes.wrapper + " " + fixed}
    >
      {inCart ? (
        <>
          <ButtonPlusMinus product={product} variant={variant} />
          <ButtonDelete product={product} variant={variant} />
        </>
      ) : (
        <ButtonAddCart product={product} text={text} variant={variant} />
      )}
      <ButtonAddFavorites product={product} variant={variant} afterChange={afterChange} />
    </Grid>
  )
}
