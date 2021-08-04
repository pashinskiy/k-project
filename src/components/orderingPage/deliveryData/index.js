import React from "react"
import { makeStyles, useMediaQuery, Grid, Typography } from "@material-ui/core"
import { GatsbyImage } from "gatsby-plugin-image"

import HeaderWithIcon from "../headerWithIcon"
import SmallHeaderWithIcon from "../smallHeaderWithIcon"
import SmallHeaderAccentWithIcon from "../smallHeaderAccentWithIcon"

import WrapperWithTitle from "../elementsForm/wrapperWithTitle"
import VariantDelivery from "../elementsForm/variantDelivery"
import Select from "../elementsForm/select"
import ListRatioRect from "../elementsForm/listRatioRect"
import Input from "../elementsForm/input"

import Delivery from "../../../../static/svg/delivery.svg"
import Watch from "../../../../static/svg/watch.svg"
import Geo from "../../../../static/svg/geo.svg"

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
    "@media(max-width: 414px)": {
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
    "@media(max-width: 414px)": {
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
    "@media(max-width: 414px)": {
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
    "@media(max-width: 414px)": {
      marginTop: "2.65vw",
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
    "@media(max-width: 414px)": {
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
      "@media(max-width: 414px)": {
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
    "@media(max-width: 414px)": {
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
    "@media(max-width: 414px)": {
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
    "@media(max-width: 414px)": {
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
    "@media(max-width: 414px)": {
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
    "@media(max-width: 414px)": {
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
    "@media(max-width: 414px)": {
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
      "@media(max-width: 414px)": {
        marginTop: "3.86vw",
      },
    },
  },
  twoInputWrapper: {
    "& > *": {
      width: "47.42%",
    },
  },
}))

export default function DeliveryData({ prismicCartAndOrder }) {
  const classes = useStyle()
  const smartPhoneScreen = useMediaQuery("(max-width: 414px)")

  const stickerDelivery = prismicCartAndOrder.data.sticker ?? false
  
  const cities = ["Санкт-Петербург", "Москва", "Владивосток"]
  const streets = [
    "Проспект Барклая",
    "Проспект Просвещения",
    "Проспект Культуры",
  ]
  const dates = [
    `${getDate("+1")}, завтра`,
    `${getDate("+2")}, послезавтра`,
    `${getDate("+3")}, через 2 дня`,
  ]
  const timeStandartDelivery = prismicCartAndOrder.data.time_standart.map(
    item => item.range
  )

  React.useEffect(() => {
    setCity(cities[0])
    setDate(dates[0])
    setTime(timeStandartDelivery[0])
    setStreet(streets[0])
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

  // получение диапазонов экспресс доставки
  const [
    showTimesExpressDelivery,
    setShowTimesExpressDelivery,
  ] = React.useState(false)
  function getTimesExpress() {
    const date = new Date()

    const hour = date.getHours() < 10 ? 10 : date.getHours()
    const min =
      date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()

    const times = []
    for (let i = hour; i < 20; i++) {
      times.push(`Сегодня с ${i}:${min} до ${i + 1}:${min}`)
    }

    return hour < 20 ? times : ["Завтра с 10:00 до 11:00"]
  }

  // функции для компонентов
  function setCity(value) {
    orderingDispatch({ type: "SET_CITY", payload: value })
  }
  function setVariantDelivery(value) {
    orderingDispatch({ type: "SET_VARIANT_DELIVERY", payload: value })
    if (value === "express") {
      orderingDispatch({ type: "SET_TIME", payload: getTimesExpress()[0] })
    }
    if (value === "standart") {
      orderingDispatch({ type: "SET_TIME", payload: timeStandartDelivery[0] })
    }
  }
  function setDate(value) {
    orderingDispatch({ type: "SET_DATE", payload: value })
  }
  function setTime(value) {
    orderingDispatch({ type: "SET_TIME", payload: value })
  }
  function setStreet(value) {
    orderingDispatch({ type: "SET_STREET", payload: value })
  }
  function setHouse(value) {
    orderingDispatch({ type: "SET_HOUSE", payload: value })
  }
  function setApartment(value) {
    orderingDispatch({ type: "SET_APARTAMENT", payload: value })
  }

  return (
    <div className={classes.wrapper}>
      <Grid container alignItems="center">
        <HeaderWithIcon
          icon={smartPhoneScreen ? null : <Delivery />}
          number={smartPhoneScreen ? 1 : null}
          title="Доставка"
          style={{ width: "auto" }}
        />

        {stickerDelivery ? (
          <GatsbyImage
            image={stickerDelivery.localFile?.childImageSharp.gatsbyImageData}
            alt={stickerDelivery.alt ?? "sticker"}
            className={classes.deliveryImage}
            imgStyle={{ objectFit: "contain" }}
          />
        ) : null}
      </Grid>

      <div className={classes.selectCityWrapper}>
        <WrapperWithTitle title="Город">
          <Select options={cities} afterChange={setCity} />
        </WrapperWithTitle>
      </div>

      <div className={classes.variantDeliveryWrapper}>
        <VariantDelivery
          value={orderingState.variantDelivery}
          setValue={setVariantDelivery}
          prismicCartAndOrder={prismicCartAndOrder}
        />
      </div>

      {/* ----------------- Standart delivery ----------------- */}
      {orderingState.variantDelivery === "standart" ? (
        <div className={classes.infoAboutStandartDeliveryWrapper}>
          <SmallHeaderWithIcon
            icon={smartPhoneScreen ? <Watch /> : null}
            number={smartPhoneScreen ? null : 1}
            title="Выберите дату и время доставки"
          />

          <WrapperWithTitle title="Дата">
            <Select options={dates} afterChange={setDate} />
          </WrapperWithTitle>

          <WrapperWithTitle title="Время">
            {smartPhoneScreen ? (
              <Select options={timeStandartDelivery} afterChange={setTime} />
            ) : (
              <ListRatioRect
                list={timeStandartDelivery}
                afterChange={setTime}
              />
            )}
          </WrapperWithTitle>
        </div>
      ) : null}

      {/* --------------------- Express delivery --------------------- */}
      {orderingState.variantDelivery === "express" ? (
        <div className={classes.infoAboutExpressDeliveryWrapper}>
          <Typography className={classes.infoAboutExpressDeliveryTitle}>
            Заказ будет доставлен:
          </Typography>

          <SmallHeaderAccentWithIcon
            icon={<Watch />}
            title={orderingState.time}
          />

          <div className={classes.timesExpressWrapper}>
            <button
              onClick={() =>
                setShowTimesExpressDelivery(!showTimesExpressDelivery)
              }
            >
              <Typography className={classes.timesExpressTitle}>
                Изменить время доставки
              </Typography>
            </button>

            {showTimesExpressDelivery ? (
              <Grid container direction="column">
                {getTimesExpress().map(time => (
                  <button
                    key={time}
                    onClick={() => {
                      setTime(time)
                      setShowTimesExpressDelivery(false)
                    }}
                  >
                    <Typography
                      align="left"
                      className={classes.timesExpressVariant}
                    >
                      {time}
                    </Typography>
                  </button>
                ))}
              </Grid>
            ) : null}
          </div>
        </div>
      ) : null}

      <div className={classes.infoAddressWrapper}>
        <SmallHeaderWithIcon
          icon={
            smartPhoneScreen || orderingState.variantDelivery === "express" ? (
              <Geo />
            ) : null
          }
          number={
            smartPhoneScreen || orderingState.variantDelivery === "express"
              ? null
              : 2
          }
          title="Укажите адрес"
        />
        <WrapperWithTitle title="Улица">
          <Select options={streets} afterChange={setStreet} />
        </WrapperWithTitle>

        <Grid
          container
          justify="space-between"
          className={classes.twoInputWrapper}
        >
          <WrapperWithTitle title="Дом">
            <Input
              afterChange={setHouse}
              checkValue={() => orderingState.validationHouse()}
            />
          </WrapperWithTitle>

          <WrapperWithTitle title="Квартира">
            <Input
              afterChange={setApartment}
              checkValue={() => orderingState.validationApartament()}
            />
          </WrapperWithTitle>
        </Grid>
      </div>
    </div>
  )
}
