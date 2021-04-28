import React from "react"
import { Grid, makeStyles } from "@material-ui/core"
import ButtonAddCart from "./buttonAddCart"
import ButtonAddFavorites from "./buttonAddFavorites"
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

export default function AddInCartAndFav({ product, text, variant, fixed }) {
  const classes = useStyles()
  fixed = fixed ? classes.fixed : ""
  return (
    <Grid
      container
      justify="space-between"
      className={classes.wrapper + " " + fixed}
    >
      <ButtonAddCart product={product} text={text} variant={variant} />
      <ButtonAddFavorites />
    </Grid>
  )
}
