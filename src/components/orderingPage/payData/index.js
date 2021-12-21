import React from "react"
import {
  makeStyles,
  useMediaQuery,
  Typography,
  Slider,
} from "@material-ui/core"

import HeaderWithIcon from "../headerWithIcon"

import BankCard from "../../../../static/svg/bankCard.svg"

import { GlobalStateContext } from "../../../context/GlobalContextProvider"
import { OrderingDispatchContext, OrderingStateContext } from "../context"

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
    flexDirection: "column",

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
    color: theme.palette.color.main,

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
  radioButtonPay: {
    display: "flex",
  },
  sliderWrapper: {
    display: "flex",
    width: "31.25vw",
    marginLeft: "3.125vw",
    "@media(min-width: 1280px)": {
      width: 400,
      marginLeft: 40,
    },
    "@media(max-width: 1025px)": {
      width: "40vw",
      marginLeft: "4vw",
    },
    "@media(max-width: 767px)": {
      width: "85%",
      marginLeft: "6.25vw",
    },
  }
}))

/**
 * Блок данных об оплате
 * @module src/components/orderingPage/payData
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.prismicCartAndOrder - свойство prismicCartAndOrder объекта data полученного из prismic
 */
export default function PayData({ prismicCartAndOrder, legalEntities }) {
  const classes = useStyle()
  const smartPhoneScreen = useMediaQuery("(max-width: 767px)")
  const state = React.useContext(GlobalStateContext)

  const order = JSON.parse(localStorage.getItem("order"))

  const orderingState = React.useContext(OrderingStateContext)
  const orderingDispatch = React.useContext(OrderingDispatchContext)
  const [sliderValue, setSliderValue] = React.useState(0)
  
  orderingState.vsegdaCode = sliderValue

  const handleChangeSlider = (event, newValue) => {
    setSliderValue(newValue)
    orderingState.vsegdaCode = sliderValue
  }
  const marksSlider = [
    {
      value: 0,
      label: '6 мес.',
    },
    {
      value: 1,
      label: '10 мес.',
    },
    {
      value: 2,
      label: '12 мес.',
    },
    {
      value: 3,
      label: '24 мес.',
    },
  ]

  function valueTextSlider(sliderValue) {
    switch (sliderValue) {
      case 0:
        return "6 мес."
      case 1:
        return "10 мес."
      case 2:
        return "12 мес."
      case 3:
        return "24 мес."
    }
  }

  function setVariantPay(newValue) {
    orderingDispatch({ type: "SET_VARIANT_PAY", payload: newValue })
  }

  React.useEffect(() => {
    if (legalEntities) setVariantPay("перевод")
  }, [legalEntities])

  return (
    <>
      <HeaderWithIcon
        icon={smartPhoneScreen ? null : <BankCard />}
        number={smartPhoneScreen ? 2 : null}
        title="Оплата"
      />

      <div className={classes.listWrapper}>
        <div className={classes.item}>
          <button
            id="online_pay"
            aria-label="online pay"
            onClick={() => setVariantPay("онлайн")}
            className={classes.radioButtonPay}
          >
            <div
              className={
                classes.ratio +
                " " +
                (orderingState.variantPay === "онлайн"
                  ? classes.activeRatio
                  : "")
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
        </div>
        <div className={classes.item}>
          <button
            id="upon_receipt_pay"
            aria-label="upon receipt pay"
            onClick={() => setVariantPay("при получении")}
            className={classes.radioButtonPay}
          >
            <div
              className={
                classes.ratio +
                " " +
                (orderingState.variantPay === "при получении"
                  ? classes.activeRatio
                  : "")
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
        </div>

        {state.servicesAvailable() ? null : (
          <div className={classes.item}>
            <button
              id="on_credit_pay"
              aria-label="on credit pay"
              onClick={() => setVariantPay("в кредит")}
              className={classes.radioButtonPay}
            >
              <div
                className={
                  classes.ratio +
                  " " +
                  (orderingState.variantPay === "в кредит"
                    ? classes.activeRatio
                    : "")
                }
              />

              <Typography align="left" className={classes.title}>
                Кредит в Тинькофф
              </Typography>
            </button>
          </div>
        )}

        {state.servicesAvailable() ? null : (
          <div className={classes.item}>
            <button
              id="on_credit_all_yes_pay"
              aria-label="on credit all yes pay"
              onClick={() => setVariantPay("всегда да")}
              className={classes.radioButtonPay}
            >
              <div
                className={
                  classes.ratio +
                  " " +
                  (orderingState.variantPay === "всегда да"
                    ? classes.activeRatio
                    : "")
                }
              />

              <Typography align="left" className={classes.title}>
                Кредит в Всегда.Да
              </Typography>
            </button>
            {orderingState.variantPay === "всегда да" ? (
              <div className={classes.sliderWrapper}>
                <Slider
                  aria-label="vsegda-credit-slider"
                  min={0}
                  max={3}
                  value={orderingState.vsegdaCode}
                  onChange={handleChangeSlider}
                  getAriaValueText={valueTextSlider}
                  step={1}
                  marks={marksSlider}
                />
              </div>
            ) : null}
          </div>
        )}

        {!state.servicesAvailable() &&
        order.price < 100000 &&
        order.price >= 5000 ? (
          <div className={classes.item}>
            <button
              id="by_installments_pay"
              aria-label="by installments pay"
              onClick={() => setVariantPay("в рассрочку")}
              className={classes.radioButtonPay}
            >
              <div
                className={
                  classes.ratio +
                  " " +
                  (orderingState.variantPay === "в рассрочку"
                    ? classes.activeRatio
                    : "")
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
          </div>
        ) : null}
        <div className={classes.item}>
          <button
            id="legal_entities"
            aria-label="legal_entities"
            className={classes.radioButtonPay}
            onClick={() => setVariantPay("перевод")}
          >
            <div
              className={
                classes.ratio +
                " " +
                (orderingState.variantPay === "перевод"
                  ? classes.activeRatio
                  : "")
              }
            />

            <div>
              <Typography align="left" className={classes.title}>
                Банковский перевод для юридических лиц
              </Typography>

              <Typography align="left" className={classes.description}>
                Карта Visa, MasterCard, Мир
              </Typography>
            </div>
          </button>
        </div>
      </div>
    </>
  )
}
