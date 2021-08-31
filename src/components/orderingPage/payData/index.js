import React from "react"
import { makeStyles, useMediaQuery, Typography } from "@material-ui/core"

import HeaderWithIcon from "../headerWithIcon"

import BankCard from "../../../../static/svg/bankCard.svg"

import { OrderingDispatchContext } from "../context"

import Mokka from "../../../../static/svg/mokka.svg"

const useStyle = makeStyles(theme => ({
  listWrapper: {
    marginTop: "2.34vw",
    "@media(min-width: 1280px)": {
      marginTop: "30px",
    },
    "@media(max-width: 1025px)": {
      marginTop: "3.59vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "4.83vw",
    },
  },
  item: {
    width: "100%",
    display: "flex",

    padding: 0,
    border: "none",
    background: "transparent",
    cursor: "pointer",

    marginTop: "1.56vw",
    "@media(min-width: 1280px)": {
      marginTop: "20px",
    },
    "@media(max-width: 1025px)": {
      marginTop: "2.39vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "3.86vw",
    },

    "&:first-child": {
      marginTop: 0,
    },
  },
  ratio: {
    borderRadius: "100%",
    background: theme.palette.background.main,
    border: `1px solid ${theme.palette.background.accentSecondary}`,
    flexShrink: 0,

    width: "1.4vw",
    height: "1.4vw",
    marginRight: "1.48vw",
    "@media(min-width: 1280px)": {
      width: "18px",
      height: "18px",
      marginRight: "19px",
    },
    "@media(max-width: 1025px)": {
      width: "2.15vw",
      height: "2.15vw",
      marginRight: "2.27vw",
    },
    "@media(max-width: 767px)": {
      width: "4.34vw",
      height: "4.34vw",
      marginRight: "1.69vw",
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
    "@media(max-width: 767px)": {
      boxShadow: `inset 0 0 0 0.48vw ${theme.palette.background.main}`,
    },
  },
  title: {
    fontWeight: 700,
    lineHeight: 1.21,

    fontSize: "1.4vw",
    "@media(min-width: 1280px)": {
      fontSize: "18px",
    },
    "@media(max-width: 1025px)": {
      fontSize: "2.15vw",
    },
    "@media(max-width: 767px)": {
      fontWeight: 400,
      fontSize: "3.38vw",
    },
  },
  description: {
    fontWeight: 400,
    lineHeight: 1.21,

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
      marginTop: "0.96vw",
      fontSize: "2.89vw",
    },

    "& a": {
      color: theme.palette.color.accentSecondary,
      textDecoration: "none",
      borderBottom: `1px solid ${theme.palette.color.accentSecondary}`,
    },
  },
  mokka: {
    display: "inline-block",

    marginLeft: "0.625vw",
    height: "1.32vw",
    "@media(min-width: 1280px)": {
      marginLeft: "8px",
      height: "17px",
    },
    "@media(max-width: 1025px)": {
      marginLeft: "0.95vw",
      height: "2.03vw",
    },
    "@media(max-width: 767px)": {
      marginLeft: "1.93vw",
      height: "3.62vw",
    },
  },
}))

/**
 * Блок данных об оплате
 * @module src/components/orderingPage/payData
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.prismicCartAndOrder - свойство prismicCartAndOrder объекта data полученного из prismic
 */
export default function PayData({ prismicCartAndOrder }) {
  const classes = useStyle()
  const smartPhoneScreen = useMediaQuery("(max-width: 415px)")

  const order = JSON.parse(localStorage.getItem("order"))

  const orderingDispatch = React.useContext(OrderingDispatchContext)

  const [value, setValue] = React.useState("онлайн")

  function setVariantPay(newValue) {
    setValue(newValue)
    orderingDispatch({ type: "SET_VARIANT_PAY", payload: newValue })
  }

  return (
    <>
      <HeaderWithIcon
        icon={smartPhoneScreen ? null : <BankCard />}
        number={smartPhoneScreen ? 2 : null}
        title="Оплата"
      />

      <div className={classes.listWrapper}>
        <button
          onClick={() => setVariantPay("онлайн")}
          className={classes.item}
        >
          <div
            className={
              classes.ratio +
              " " +
              (value === "онлайн" ? classes.activeRatio : "")
            }
          />

          <div>
            <Typography align="left" className={classes.title}>
              Онлайн
            </Typography>

            <Typography align="left" className={classes.description}>
              {prismicCartAndOrder.data.description_card}
            </Typography>
          </div>
        </button>

        <button
          onClick={() => setVariantPay("при получении")}
          className={classes.item}
        >
          <div
            className={
              classes.ratio +
              " " +
              (value === "при получении" ? classes.activeRatio : "")
            }
          />

          <div>
            <Typography align="left" className={classes.title}>
              При получении
            </Typography>

            <Typography align="left" className={classes.description}>
              {prismicCartAndOrder.data.description_getting}
            </Typography>
          </div>
        </button>

        <button
          onClick={() => setVariantPay("в кредит")}
          className={classes.item}
        >
          <div
            className={
              classes.ratio +
              " " +
              (value === "в кредит" ? classes.activeRatio : "")
            }
          />

          <Typography align="left" className={classes.title}>
            В кредит
          </Typography>
        </button>

        {order.price < 100000 && order.price >= 5000 ? (
          <button
            onClick={() => setVariantPay("в рассрочку")}
            className={classes.item}
          >
            <div
              className={
                classes.ratio +
                " " +
                (value === "в рассрочку" ? classes.activeRatio : "")
              }
            />

            <div>
              <Typography align="left" className={classes.title}>
                Оплата авансом
              </Typography>

              <Typography
                align="left"
                className={classes.description}
                style={{ display: "flex", alignItems: "center" }}
              >
                Мокка — оплата авансом
                <span className={classes.mokka}>
                  <Mokka />
                </span>
              </Typography>
            </div>
          </button>
        ) : null}
      </div>
    </>
  )
}
