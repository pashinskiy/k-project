import React from "react"
import { Button, makeStyles } from "@material-ui/core"

import Delete from "../../../../../../static/svg/trash.svg"
import { GlobalDispatchContext } from "../../../../../context/GlobalContextProvider"

const useStyles = makeStyles(theme => ({
  button: {
    minWidth: 0,
    background: theme.palette.background.accent,

    borderRadius: "0.93vw",
    width: "3.12vw",
    height: "3.12vw",
    padding: "0.78vw",
    "@media(min-width: 1280px)": {
      borderRadius: "12px",
      width: "40px",
      height: "40px",
      padding: "10px",
    },
    "@media(max-width: 1025px)": {
      borderRadius: "1.43vw",
      width: "4.79VW",
      height: "4.79vw",
      padding: "1.19vw",
    },
    "@media(max-width: 767px)": {
      borderRadius: "2.89vw",
      width: "9.66vw",
      height: "9.66vw",
      padding: "2.41vw",
    },
  },
}))

/**
 * Кнопка удаления ремонта из корзины
 * @module src/components/repairPage/popularRepair/card/buttonAddInCart/buttonDelete
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.repair - объект ремонта
 */
export default function ButtonDelete({ repair }) {
  const classes = useStyles()
  const dispatch = React.useContext(GlobalDispatchContext)

  function deleteInCart() {
    dispatch({ type: "DELETE_PRODUCT_FROM_CART", payload: repair })
  }

  return (
    <Button
      disableRipple
      aria-label="убрать из корзины"
      onClick={deleteInCart}
      className={classes.button}
    >
      <Delete />
    </Button>
  )
}
