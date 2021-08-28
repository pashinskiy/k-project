import React, { useState } from "react"
import { Grid, makeStyles, Dialog } from "@material-ui/core"

import { GlobalStateContext } from "../../../context/GlobalContextProvider"

import ButtonAddCart from "./buttonAddCart"
import ButtonAddFavorites from "./buttonAddFavorites"
import ButtonPlusMinus from "./buttonPlusMinus"
import ButtonDelete from "./buttonDelete"
import ProductAddedCard from "../../productAddedCard"
import IconCloseDialog from "../../../../static/svg/iconCloseDialog.svg"

const useStyles = makeStyles(theme => ({
  wrapper: {
    marginTop: "1.56vw",
    "@media(min-width: 1280px)": {
      marginTop: "20px",
    },
  },
  fixed: {
    position: "fixed",
    bottom: 70,
    justifyContent: "space-evenly",
    left: 0,
    zIndex: 999,
  },
  iconCloseDialog: {
    cursor: "pointer",
    position: "absolute",
    top: "3.90625vw",
    right: "3.90625vw",
    width: "3.125vw",
    height: "3.125vw",
    "@media(min-width: 1280px)": {
      top: "50px",
      right: "50px",
      width: "40px",
      height: "40px",
    },
    "@media(max-width: 1025px)": {
      right: 0,
      top: "5.9952vw",
      width: "4.796vw",
      height: "4.796vw",
    },
    "@media(max-width: 767px)": {
      top: "5.7971vw",
      right: 0,
      width: "5.797vw",
      height: "5.797vw",
    },
  },
  dialogPaper: {
    background: "transparent",
    boxShadow: "none",
    position: "unset",
    // position: "relative",
    marginTop: "13.28125vw",
    "@media(min-width: 1280px)": {
      marginTop: "170px",
    },
    "@media(max-width: 1025px)": {
      marginTop: "0",
      position: "relative",
      paddingTop: "20.3836vw",
    },
    "@media(max-width: 767px)": {
      position: "relative",
      marginTop: "0",
      paddingTop: "17.149vw",
      maxWidth: "100%",
      marginRight: "5.1932vw",
      marginLeft: "4.5893vw",
    },
  },
}))

/**
 * Компонент добавления, удаления товара в избранное и корзину и изменения количества товара в корзине
 * @module src/components/button/addInCartAndFav
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.product - объект продукта полученый из prismic
 * @param {String} props.text - текст для отображения на кнопке добавления в корзину
 * @param {String} [props.variant = card] - вариант отбражения кнопок (page - для страницы продукта, offerPage - для окна аксесуаров, card - для карточки товара)
 * @param {Boolean} props.fixed - фиксирование положение кнопки
 */
export default function AddInCartAndFav({
  product,
  text,
  variant,
  fixed,
}) {
  const classes = useStyles()
  fixed = fixed ? classes.fixed : ""

  const [dialogOpen, setDialogOpen] = useState(false)

  const state = React.useContext(GlobalStateContext)
  const inCart = state.inCart(product?.id)

  function closeDialog() {
    setDialogOpen(false)
  }
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
        <ButtonAddCart
          product={product}
          text={text}
          variant={variant}
          setDialogOpen={setDialogOpen}
        />
      )}
      <ButtonAddFavorites product={product} variant={variant} />
      <Dialog
        open={dialogOpen}
        onClose={closeDialog}
        maxWidth={false}
        scroll={"body"}
        classes={{ paper: classes.dialogPaper }}
      >
        <IconCloseDialog
          className={classes.iconCloseDialog}
          onClick={e => closeDialog()}
        />
        <ProductAddedCard product={product} closeDialog={closeDialog} />
      </Dialog>
    </Grid>
  )
}
