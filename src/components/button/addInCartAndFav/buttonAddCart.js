import React, { useState } from "react"
import { Button, Dialog, makeStyles, Typography } from "@material-ui/core"
import ProductAddedCard from "../../cart/productAddedCard"

const useStyles = makeStyles(theme => ({
  button: {
    padding: 0,
    background: theme.palette.background.accent,
    textTransform: "none",
    color: "#ffffff",
    lineHeight: 1.21,
    fontWeight: 700,
    borderRadius: "0.93vw",
    "@media(min-width: 1280px)": {
      borderRadius: "12px",
    },
    "@media(max-width: 834px)": {
      borderRadius: "1.43vw",
    },
    "@media(max-width: 414px)": {
      borderRadius: "2.89vw",
    },
    "&:hover": {
      background: theme.palette.background.accent,
    },
  },
  buttonPage: {
    width: "calc(100% - 4.21vw)",
    height: "3.9vw",
    "@media(min-width: 1280px)": {
      width: "calc(100% - 54px)",
      height: "50px",
    },
    "@media(max-width: 834px)": {
      width: "calc(100% - 6.47vw)",
      height: "5.99vw",
    },
    "@media(max-width: 414px)": {
      width: "calc(100% - 13.04vw)",
      height: "12.07vw",
    },
  },
  buttonCard: {
    width: "calc(100% - 3.43vw)",
    height: "3.12vw",
    "@media(min-width: 1280px)": {
      width: "calc(100% - 44px)",
      height: "40px",
    },
    "@media(max-width: 834px)": {
      width: "calc(100% - 5.27vw)",
      height: "4.79vw",
    },
    "@media(max-width: 414px)": {
      width: "calc(100% - 10.62vw)",
      height: "9.66vw",
    },
  },
  textPage: {
    fontSize: "1.4vw",
    "@media(min-width: 1280px)": {
      fontSize: "18px",
    },
    "@media(max-width: 834px)": {
      fontSize: "2.03vw",
    },
    "@media(max-width: 414px)": {
      fontSize: "4.1vw",
    },
  },
  textCard: {
    fontSize: "1.09vw",
    "@media(min-width: 1280px)": {
      fontSize: "14px",
    },
    "@media(max-width: 834px)": {
      fontSize: "1.67vw",
    },
    "@media(max-width: 414px)": {
      fontSize: "3.38vw",
    },
  },
}))

export default function ButtonAddCart({ product, text, variant, setInCart }) {
  const [dialogOpen, setDialogOpen] = useState(false)
  const classes = useStyles()
  let dialog = true
  if (text === "В корзину") dialog = false

  let cartItems = localStorage.getItem("cart")
  cartItems = cartItems === null || !cartItems ? [] : JSON.parse(cartItems)

  function addToCart() {
    //логика добавления в корзину (localStorage)
    console.log(`add to cart ${product.uid}`)
    let cartItems = localStorage.getItem("cart")
    cartItems = cartItems === null || !cartItems ? [] : JSON.parse(cartItems)
    let hasItem = false
    cartItems.filter(function(item){
      if(item.name === product.uid){
        hasItem = true
      }
    })
    if (!hasItem) {
      let jsonCartItem = {"name": product.uid, "count": 1}
      cartItems.push(jsonCartItem)
      localStorage.setItem("cart", JSON.stringify(cartItems))
      setDialogOpen(true)
    }
  }
  function closeDialog() {
    setDialogOpen(false)
    setInCart(true)
  }
  const classText = variant === "page" ? classes.textPage : classes.textCard
  const classButton =
    variant === "page" ? classes.buttonPage : classes.buttonCard
  return (
    <>
      <Button
        disableRipple
        onClick={addToCart}
        className={classes.button + " " + classButton}
      >
        <Typography align="center" className={classText}>
          {text}
        </Typography>
      </Button>
      {dialog ? (
        <Dialog
          open={dialogOpen}
          onClose={closeDialog}
          maxWidth={false}
          scroll={"body"}
          PaperProps={{
            style: {
              background: "transparent",
              boxShadow: "none",
            },
          }}
        >
          <ProductAddedCard product={product} closeDialog={closeDialog} />
        </Dialog>
      ) : null}
    </>
  )
}
