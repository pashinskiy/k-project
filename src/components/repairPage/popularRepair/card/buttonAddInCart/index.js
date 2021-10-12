import React from "react"
import { Grid, makeStyles } from "@material-ui/core"

import { GlobalStateContext } from "../../../../../context/GlobalContextProvider"

import ButtonAddCart from "./buttonAddCart"
import ButtonPlusMinus from "./buttonPlusMinus"
import ButtonDelete from "./buttonDelete"

const useStyles = makeStyles(theme => ({
  wrapper: {
    marginTop: "0.46vw",
    "@media(min-width: 1280px)": {
      marginTop: 6,
    },
    "@media(max-width: 1025px)": {
      marginTop: "0.71vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "1.44vw",
    },
  },
}))

/**
 * Компонент добавления, удаления ремонта в корзину и изменения количества в корзине
 * @module src/components/repairPage/popularRepair/card/buttonAddInCart
 * @param {Object} props - объект свойств компонента React
 * @param {String} props.text - текст для отображения на кнопке добавления в корзину
 * @param {Object} props.repair - объект ремонта
 */
export default function ButtonAddInCart({ text, repair }) {
  const classes = useStyles()

  const state = React.useContext(GlobalStateContext)
  const inCart = state.inCart(repair)

  return (
    <Grid container justify="space-between" className={classes.wrapper}>
      {inCart ? (
        <>
          <ButtonPlusMinus repair={repair} />
          <ButtonDelete repair={repair} />
        </>
      ) : (
        <ButtonAddCart text={text} repair={repair} />
      )}
    </Grid>
  )
}
