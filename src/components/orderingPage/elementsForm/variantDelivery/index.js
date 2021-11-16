import React from "react"
import { makeStyles, Grid, Typography } from "@material-ui/core"

import Standart from "../../../../../static/svg/deliveryIcon.svg"
import Express from "../../../../../static/svg/deliveryMobile.svg"

import { OrderingStateContext } from "../../context"

const useStyle = makeStyles(theme => ({
  wrapper: {
    background: theme.palette.background.secondary,

    "@media(max-width: 767px)": {
      padding: "0.96vw",
      borderRadius: "2.89vw",
    },
  },
  itemWrapper: {
    width: "50%",
    display: "flex",
    padding: 0,
    border: "none",
    cursor: "pointer",
    background: "none",
    "@media(max-width: 767px)": {
      justifyContent: "center",
      alignItems: "center",
      padding: "2.89vw",
      borderRadius: "2.17vw",
    },
  },
  activeItem: {
    "@media(max-width: 767px)": {
      background: theme.palette.background.main,
      "&:hover": {
        background: theme.palette.background.main,
      },
    },
  },
  ratio: {
    borderRadius: "100%",
    background: theme.palette.background.main,
    border: `1px solid ${theme.palette.background.accentSecondary}`,
    flexShrink: 0,

    width: "1.4vw",
    height: "1.4vw",
    marginTop: "0.23vw",
    marginRight: "1.48vw",
    "@media(min-width: 1280px)": {
      width: "18px",
      height: "18px",
      marginTop: "3px",
      marginRight: "19px",
    },
    "@media(max-width: 1025px)": {
      width: "2.15vw",
      height: "2.15vw",
      marginTop: "0.35vw",
      marginRight: "2.27vw",
    },
    "@media(max-width: 767px)": {
      display: "none",
    },
  },
  activeRatio: {
    background: theme.palette.background.accentSecondary,

    boxShadow: `inset 0 0 0 0.15vw ${theme.palette.background.main}`,
    "@media(min-width: 1280px)": {
      boxShadow: `inset 0 0 0 2px ${theme.palette.background.main}`,
    },
    "@media(max-width: 1025px)": {
      boxShadow: `inset 0 0 0 0.23vw ${theme.palette.background.main}`,
    },
  },
  title: {
    fontWeight: 700,
    lineHeight: 1.21,
    textAlign: "left",

    fontSize: "1.4vw",
    "@media(min-width: 1280px)": {
      fontSize: "18px",
    },
    "@media(max-width: 1025px)": {
      fontSize: "2.15vw",
    },
    "@media(max-width: 767px)": {
      textAlign: "center",
      fontSize: "2.89vw",
    },
  },
  description: {
    fontWeight: 400,
    lineHeight: 1.21,
    textAlign: "left",

    marginTop: "0.62vw",
    fontSize: "1.09vw",
    "@media(min-width: 1280px)": {
      marginTop: "8px",
      fontSize: "14px",
    },
    "@media(max-width: 1025px)": {
      marginTop: "0.95vw",
      fontSize: "1.67vw",
    },
    "@media(max-width: 767px)": {
      color: theme.palette.color.secondary,
      textAlign: "center",

      marginTop: "1.93vw",
      fontSize: "2.89vw",
    },
  },
  icon: {
    display: "none",
    "@media(max-width: 767px)": {
      display: "block",
      width: "5.79vw",
      height: "5.79vw",
      margin: "0 auto",
    },
  },
}))

/**
 * Блок выбора варианта доставки
 * @module src/components/orderingPage/elementsForms/variantDelivery
 * @param {Object} props - объект свойств компонента React
 * @param {String} props.value - текущее значение
 * @param {function} props.setValue - функция установки нового значения
 * @param {Object} props.prismicCartAndOrder - свойство prismicCartAndOrder объекта data полученного из prismic
 */
export default function VariantDelivery({
  value,
  setValue,
  prismicCartAndOrder,
}) {
  const classes = useStyle()
  const orderingState = React.useContext(OrderingStateContext)

  function setStandartDelivery() {
    setValue("standart")
  }

  function setExpressDelivery() {
    setValue("express")
  }

  return /^\s*санкт-петербург\s*$/i.test(orderingState.city) ? (
    <Grid container justify="space-between" className={classes.wrapper}>
      <button
        id="variant_delivery_standart"
        aria-label="variant delivery standart"
        onClick={setStandartDelivery}
        className={
          classes.itemWrapper +
          " " +
          (value === "standart" ? classes.activeItem : "")
        }
      >
        <div
          className={
            classes.ratio +
            " " +
            (value === "standart" ? classes.activeRatio : "")
          }
        />

        <div>
          <div className={classes.icon}>
            <Standart />
          </div>

          <Typography className={classes.title}>Стандартная</Typography>

          <Typography className={classes.description}>
            {prismicCartAndOrder.data.description_standart}
          </Typography>
        </div>
      </button>

      <button
        id="variant_delivery_express"
        aria-label="variant delivery express"
        onClick={setExpressDelivery}
        className={
          classes.itemWrapper +
          " " +
          (value === "express" ? classes.activeItem : "")
        }
      >
        <div
          className={
            classes.ratio +
            " " +
            (value === "express" ? classes.activeRatio : "")
          }
        />
        <div>
          <div className={classes.icon}>
            <Express />
          </div>

          <Typography className={classes.title}>Экспресс</Typography>

          <Typography className={classes.description}>
            {prismicCartAndOrder.data.description_express}
          </Typography>
        </div>
      </button>
    </Grid>
  ) : null
}
