import React from "react"
import {
  makeStyles,
  useMediaQuery,
  Grid,
  Typography,
  Button,
} from "@material-ui/core"

import HeaderWithIcon from "../headerWithIcon"
import SmallHeaderWithIcon from "../smallHeaderWithIcon"

import WrapperWithTitle from "../elementsForm/wrapperWithTitle"
import SelectCityRepair from "../elementsForm/selectCityRepair"
import VariantDeliveryRepair from "../elementsForm/variantDeliveryRepair"
import Select from "../elementsForm/select"
import ListRatioRect from "../elementsForm/listRatioRect"
import Input from "../elementsForm/input"

import Hammer from "../../../../static/svg/hammer.svg"
import Watch from "../../../../static/svg/watch.svg"
import Geo from "../../../../static/svg/geo.svg"

import { GlobalStateContext } from "../../../context/GlobalContextProvider"
import { OrderingStateContext, OrderingDispatchContext } from "../context"

const useStyle = makeStyles(theme => ({
  wrapper: {
    width: "34.92vw",
    "@media(min-width: 1280px)": {
      width: "447px",
    },
    "@media(max-width: 1025px)": {
      width: "53.59vw",
    },
    "@media(max-width: 767px)": {
      width: "100%",
    },
  },
  deliveryImage: {
    marginLeft: "0.93vw",
    width: "6.25vw",
    height: "3.12vw",
    "@media(min-width: 1280px)": {
      marginLeft: "12px",
      width: "80px",
      height: "40px",
    },
    "@media(max-width: 1025px)": {
      marginLeft: "1.43vw",
      width: "9.59vw",
      height: "4.79vw",
    },
    "@media(max-width: 767px)": {
      marginLeft: "1.93vw",
      width: "13.32vw",
      height: "9.66vw",
    },
  },
  selectCityWrapper: {
    marginTop: "0.93vw",
    "@media(min-width: 1280px)": {
      marginTop: "12px",
    },
    "@media(max-width: 1025px)": {
      marginTop: "1.43vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "1.93",
    },
  },
  variantDeliveryWrapper: {
    marginTop: "2.81vw",
    "@media(min-width: 1280px)": {
      marginTop: "36px",
    },
    "@media(max-width: 1025px)": {
      marginTop: "4.31vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "2.65vw",
    },
  },
  buttonWrapper: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 0,

    marginTop: "2.81vw",
    "@media(min-width: 1280px)": {
      marginTop: "36px",
    },
    "@media(max-width: 1025px)": {
      marginTop: "4.31vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "6.76vw",
    },
  },
  ratio: {
    background: theme.palette.background.main,

    marginRight: "1.56vw",
    width: "2.5vw",
    height: "1.4vw",
    padding: "0.23vw",
    borderRadius: "0.46vw",
    boxShadow: `inset 0 0 0 0.07vw ${theme.palette.background.accentSecondary}`,
    "@media(min-width: 1280px)": {
      marginRight: "20px",
      width: "32px",
      height: "18px",
      padding: "3px",
      borderRadius: "6px",
      boxShadow: `inset 0 0 0 1px ${theme.palette.background.accentSecondary}`,
    },
    "@media(max-width: 1025px)": {
      marginRight: "2.39vw",
      width: "3.83vw",
      height: "2.15vw",
      padding: "0.35vw",
      borderRadius: "0.71vw",
      boxShadow: `inset 0 0 0 0.11vw ${theme.palette.background.accentSecondary}`,
    },
    "@media(max-width: 767px)": {
      marginRight: "4.83vw",
      width: "7.72vw",
      height: "4.34vw",
      padding: "0.72vw",
      borderRadius: "1.44vw",
      boxShadow: `inset 0 0 0 0.24vw ${theme.palette.background.accentSecondary}`,
    },

    "&:before": {
      content: "''",
      display: "block",
      background: theme.palette.background.accentSecondary,

      width: "0.93vw",
      height: "0.93vw",
      borderRadius: "0.31vw",
      "@media(min-width: 1280px)": {
        width: "12px",
        height: "12px",
        borderRadius: "4px",
      },
      "@media(max-width: 1025px)": {
        width: "1.43vw",
        height: "1.43vw",
        borderRadius: "0.47vw",
      },
      "@media(max-width: 767px)": {
        width: "2.89vw",
        height: "2.89vw",
        borderRadius: "0.96vw",
      },
    },
  },
  active: {
    background: theme.palette.background.accentSecondary,
    boxShadow: "none",
    "&:before": {
      background: theme.palette.background.main,
      marginLeft: "auto",
    },
  },
  infoAboutStandartDeliveryWrapper: {
    marginTop: "2.81vw",
    "@media(min-width: 1280px)": {
      marginTop: "36px",
    },
    "@media(max-width: 1025px)": {
      marginTop: "4.31vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "6.76vw",
    },

    "& > *:nth-child(n+2)": {
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
    },
  },
  infoAboutExpressDeliveryWrapper: {
    marginTop: "2.81vw",
    "@media(min-width: 1280px)": {
      marginTop: "36px",
    },
    "@media(max-width: 1025px)": {
      marginTop: "4.31vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "5.55vw",
    },
  },
  infoAboutExpressDeliveryTitle: {
    fontWeight: 400,
    lineHeight: 1.21,

    fontSize: "1.25vw",
    marginBottom: "0.62vw",
    "@media(min-width: 1280px)": {
      fontSize: "16px",
      marginBottom: "8px",
    },
    "@media(max-width: 1025px)": {
      marginBottom: "0.95vw",
      fontSize: "1.91vw",
    },
    "@media(max-width: 767px)": {
      marginBottom: "1.93vw",
      fontSize: "3.86vw",
    },
  },
  timesExpressWrapper: {
    lineHeight: 0,

    marginTop: "0.93vw",
    "@media(min-width: 1280px)": {
      marginTop: "12px",
    },
    "@media(max-width: 1025px)": {
      marginTop: "1.43vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "2.89vw",
    },

    "& button": {
      background: "transparent",
      padding: 0,
      minWidth: 0,
      border: "none",
      cursor: "pointer",
    },
  },
  timesExpressTitle: {
    fontWeight: 500,
    lineHeight: 1.21,
    color: theme.palette.color.accentSecondary,
    borderBottom: `1px solid ${theme.palette.color.accentSecondary}`,

    fontSize: "0.93vw",
    "@media(min-width: 1280px)": {
      fontSize: "12px",
    },
    "@media(max-width: 1025px)": {
      fontSize: "1.43vw",
    },
    "@media(max-width: 767px)": {
      fontSize: "2.89vw",
    },
  },
  timesExpressVariant: {
    fontWeight: 500,
    lineHeight: 1.21,
    color: theme.palette.color.accentSecondary,

    marginTop: "0.39vw",
    fontSize: "0.93vw",
    "@media(min-width: 1280px)": {
      marginTop: "5px",
      fontSize: "12px",
    },
    "@media(max-width: 1025px)": {
      marginTop: "0.59vw",
      fontSize: "1.43vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "1.93vw",
      fontSize: "2.89vw",
    },
  },
  infoAddressWrapper: {
    marginTop: "1.87vw",
    "@media(min-width: 1280px)": {
      marginTop: "24px",
    },
    "@media(max-width: 1025px)": {
      marginTop: "2.87vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "6.76vw",
    },

    "& > *:nth-child(n+2)": {
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
    },
  },
  twoInputWrapper: {
    "& > *": {
      width: "47.42%",
    },
  },
  text: {
    marginTop: "0px !important",

    fontWeight: 400,
    lineHeight: 1.5,

    fontSize: "1.08vw",
    "@media(min-width: 1280px)": {
      fontSize: "13.9px",
    },
    "@media(max-width: 1025px)": {
      fontSize: "1.66vw",
    },
    "@media(max-width: 767px)": {
      fontSize: "3.35vw",
    },

    "& font": {
      ...theme.typography.body2,
      fontSize: "inherit",
    },
  },
}))

/**
 * Блок данных о ремонте
 * @module src/components/orderingPage/repairData
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.prismicCartAndOrder - свойство prismicCartAndOrder объекта data полученного из prismic
 */
export default function RepairData({ prismicCartAndOrder }) {
  const classes = useStyle()
  const smartPhoneScreen = useMediaQuery("(max-width: 767px)")

  const state = React.useContext(GlobalStateContext)

  const dates = [
    `${getDate("+1")}, завтра`,
    `${getDate("+2")}, послезавтра`,
    `${getDate("+3")}, через 2 дня`,
  ]
  const timeStandartDelivery = prismicCartAndOrder.data.time_standart.map(
    item => item.range
  )

  React.useEffect(() => {
    setDate(dates[0])
    setTime(timeStandartDelivery[0])
  }, [])

  const orderingState = React.useContext(OrderingStateContext)
  const orderingDispatch = React.useContext(OrderingDispatchContext)

  // получение строки с датой
  function getDate(value) {
    const date = new Date()
    if (value === "+1") date.setDate(date.getDate() + 1)
    if (value === "+2") date.setDate(date.getDate() + 2)
    if (value === "+3") date.setDate(date.getDate() + 3)

    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()

    const month =
      date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1

    const year = date.getFullYear()

    return `${day}/${month}/${year}`
  }

  function toggleUseDataDelivery() {
    orderingDispatch({ type: "TOGGLE_USE_DATA_DELIVERY" })
  }

  // функции для компонентов
  function setVariantDelivery(value) {
    orderingDispatch({ type: "SET_REPAIR_VARIANT_DELIVERY", payload: value })
    if (value === "inShop") {
      setTime(false)
    }
    if (value === "courier") {
      setTime(timeStandartDelivery[0])
    }
  }
  function setDate(value) {
    orderingDispatch({ type: "SET_REPAIR_DATE", payload: value })
  }
  function setTime(value) {
    orderingDispatch({ type: "SET_REPAIR_TIME", payload: value })
  }
  function setStreet(value) {
    orderingDispatch({ type: "SET_REPAIR_STREET", payload: value })
  }
  function setHouse(value) {
    orderingDispatch({ type: "SET_REPAIR_HOUSE", payload: value })
  }
  function setApartment(value) {
    orderingDispatch({ type: "SET_REPAIR_APARTAMENT", payload: value })
  }

  const number = state.productAvailable() ? "1.2" : 1
  const showButton =
    orderingState.street && orderingState.house && orderingState.apartment

  return (
    <div className={classes.wrapper}>
      <HeaderWithIcon
        icon={smartPhoneScreen ? null : <Hammer />}
        number={smartPhoneScreen ? number : null}
        title="Ремонт"
      />

      <div className={classes.selectCityWrapper}>
        <WrapperWithTitle title="Город">
          <SelectCityRepair />
        </WrapperWithTitle>
      </div>

      <div className={classes.variantDeliveryWrapper}>
        <VariantDeliveryRepair
          value={orderingState.repairVariantDelivery}
          setValue={setVariantDelivery}
          prismicCartAndOrder={prismicCartAndOrder}
        />
      </div>

      {/* ----------------- Courier delivery ----------------- */}
      {orderingState.repairVariantDelivery === "courier" ? (
        <>
          {showButton ? (
            <Button
              id="use_data_delivery"
              aria-label="use data delivery"
              onClick={toggleUseDataDelivery}
              className={classes.buttonWrapper}
            >
              <Grid
                className={
                  classes.ratio +
                  " " +
                  (orderingState.useDataDelivery ? classes.active : "")
                }
              />

              <Typography align="left" className={classes.text}>
                Использовать данные доставки для вывоза устройства курьером
              </Typography>
            </Button>
          ) : null}

          {orderingState.useDataDelivery && showButton ? null : (
            <div className={classes.infoAboutStandartDeliveryWrapper}>
              <SmallHeaderWithIcon
                icon={smartPhoneScreen ? <Watch /> : null}
                number={smartPhoneScreen ? null : 1}
                title="Выберите дату и время доставки"
              />

              <WrapperWithTitle title="Дата">
                <Select
                  options={dates}
                  afterChange={setDate}
                  id="select_date_repair"
                />
              </WrapperWithTitle>

              <WrapperWithTitle title="Время">
                {smartPhoneScreen ? (
                  <Select
                    options={timeStandartDelivery}
                    afterChange={setTime}
                    id="select_time_repair"
                  />
                ) : (
                  <ListRatioRect
                    list={timeStandartDelivery}
                    afterChange={setTime}
                  />
                )}
              </WrapperWithTitle>

              <SmallHeaderWithIcon
                icon={smartPhoneScreen ? <Geo /> : null}
                number={smartPhoneScreen ? null : 2}
                title="Укажите адрес"
              />

              <WrapperWithTitle title="Улица" necessarily={false}>
                <Input afterChange={setStreet} id="street_repair" />
              </WrapperWithTitle>

              <Grid
                container
                justify="space-between"
                className={classes.twoInputWrapper}
              >
                <WrapperWithTitle title="Дом" necessarily={false}>
                  <Input afterChange={setHouse} id="street_house" />
                </WrapperWithTitle>

                <WrapperWithTitle title="Квартира" necessarily={false}>
                  <Input afterChange={setApartment} id="street_apartment" />
                </WrapperWithTitle>
              </Grid>
            </div>
          )}
        </>
      ) : (
        <div className={classes.infoAboutStandartDeliveryWrapper}>
          <Typography className={classes.text}>
            Режим работы магазина Krypton:{" "}
            <font>{prismicCartAndOrder.data.time_work}</font>
          </Typography>

          <Typography className={classes.text}>
            Адрес: <font>{prismicCartAndOrder.data.address}</font>
          </Typography>
        </div>
      )}
    </div>
  )
}
