import React from "react"
import { makeStyles, useMediaQuery, Grid, Typography } from "@material-ui/core"
import { GatsbyImage } from "gatsby-plugin-image"

import HeaderWithIcon from "../headerWithIcon"
import SmallHeaderWithIcon from "../smallHeaderWithIcon"

import WrapperWithTitle from "../elementsForm/wrapperWithTitle"
import VariantDelivery from "../elementsForm/variantDelivery"
import Select from "../elementsForm/select"
import ListRatioRect from "../elementsForm/listRatioRect"
import Input from "../elementsForm/input"

import Delivery from "../../../../static/svg/delivery.svg"
import Watch from "../../../../static/svg/watch.svg"
import Geo from "../../../../static/svg/geo.svg"

const useStyle = makeStyles(theme => ({
  wrapper: {
    width: "34.92vw",
    "@media(min-width: 1280px)": {
      width: "447px",
    },
    "@media(max-width: 834px)": {
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
    "@media(max-width: 834px)": {
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
  wrapperSelectCity: {
    marginTop: "0.93vw",
    "@media(min-width: 1280px)": {
      marginTop: "12px",
    },
    "@media(max-width: 834px)": {
      marginTop: "1.43vw",
    },
    "@media(max-width: 414px)": {
      marginTop: "1.93",
    },
  },
  wrapperInfoAboutStandartDelivery: {
    marginTop: "2.81vw",
    "@media(min-width: 1280px)": {
      marginTop: "36px",
    },
    "@media(max-width: 834px)": {
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
      "@media(max-width: 834px)": {
        marginTop: "2.39vw",
      },
      "@media(max-width: 414px)": {
        marginTop: "3.86vw",
      },
    },
  },
  wrapperInfoAddress: {
    marginTop: "1.87vw",
    "@media(min-width: 1280px)": {
      marginTop: "24px",
    },
    "@media(max-width: 834px)": {
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
      "@media(max-width: 834px)": {
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

export default function DeliveryData({ prismicCartAndOrder, afterChange }) {
  const classes = useStyle()
  const smartPhoneScreen = useMediaQuery("(max-width: 414px)")
  const stickerDelivery = prismicCartAndOrder.data.sticker ?? false

  const [city, setCity] = React.useState(false)

  const [variantDelivery, setVariantDelivery] = React.useState("standart")
  const [date, setDate] = React.useState(false)
  const [time, setTime] = React.useState(false)
  const [street, setStreet] = React.useState(false)
  const [house, setHouse] = React.useState(false)
  const [apartment, setApartment] = React.useState(false)
  const [variantPay, setVariantPay] = React.useState(false)
  const [name, setName] = React.useState(false)
  const [phone, setPhone] = React.useState(false)

  console.log({
    city,
    date,
    time,
    street,
    house,
    apartment,
  })

  function checkNumber(value) {
    return /^[0-9]+$/.test(value)
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
            image={stickerDelivery.localFile.childImageSharp.gatsbyImageData}
            alt={stickerDelivery.alt ?? "sticker"}
            className={classes.deliveryImage}
            imgStyle={{ objectFit: "contain" }}
          />
        ) : null}
      </Grid>

      <div className={classes.wrapperSelectCity}>
        <WrapperWithTitle title="Город">
          <Select
            options={["Санкт-Петербург", "Москва", "Владивосток"]}
            afterChange={setCity}
          />
        </WrapperWithTitle>
      </div>

      <VariantDelivery value={variantDelivery} setValue={setVariantDelivery} />

      {/* ******************************************************* */}
      <div className={classes.wrapperInfoAboutStandartDelivery}>
        <SmallHeaderWithIcon
          icon={smartPhoneScreen ? <Watch /> : null}
          number={smartPhoneScreen ? null : 1}
          title="Выберите дату и время доставки"
        />

        <WrapperWithTitle title="Дата">
          <Select
            options={[
              "18/05/2021, завтра",
              "19/05/2021, послезавтра",
              "20/05/2021, через 2 дня",
            ]}
            afterChange={setDate}
          />
        </WrapperWithTitle>

        <WrapperWithTitle title="Время">
          {smartPhoneScreen ? (
            <Select
              options={[
                "10:00 - 12:00",
                "12:00 - 14:00",
                "14:00 - 16:00",
                "16:00 - 18:00",
                "18:00 - 20:00",
              ]}
              afterChange={setTime}
            />
          ) : (
            <ListRatioRect
              list={[
                "10:00 - 12:00",
                "12:00 - 14:00",
                "14:00 - 16:00",
                "16:00 - 18:00",
                "18:00 - 20:00",
              ]}
              afterChange={setTime}
            />
          )}
        </WrapperWithTitle>
      </div>
      {/* ******************************************************* */}

      <div className={classes.wrapperInfoAddress}>
        <SmallHeaderWithIcon
          icon={smartPhoneScreen ? <Geo /> : null}
          number={smartPhoneScreen ? null : 2}
          title="Укажите адрес"
        />
        <WrapperWithTitle title="Улица">
          <Select
            options={[
              "Проспект Барклая",
              "Проспект Просвещения",
              "Проспект Культуры",
            ]}
            afterChange={setStreet}
          />
        </WrapperWithTitle>

        <Grid
          container
          justify="space-between"
          className={classes.twoInputWrapper}
        >
          <WrapperWithTitle title="Дом">
            <Input afterChange={setHouse} checkValue={checkNumber} />
          </WrapperWithTitle>

          <WrapperWithTitle title="Квартира">
            <Input afterChange={setApartment} checkValue={checkNumber} />
          </WrapperWithTitle>
        </Grid>
      </div>
    </div>
  )
}
