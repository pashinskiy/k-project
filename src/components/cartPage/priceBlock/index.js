import React from "react"
import { makeStyles, useMediaQuery, Grid, Typography, Modal } from "@material-ui/core"

import { GlobalStateContext } from "../../../context/GlobalContextProvider"

import GoRegistration from "../../button/goRegistration"

import Mokka from "../../../../static/svg/mokka.svg"
import MokkaInfo from "../../../../static/svg/mokkaInfo.svg"
import MokkaCross from "../../../../static/svg/mokkaCross.svg"

const useStyle = makeStyles(theme => ({
  wrapper: {
    background: theme.palette.background.secondary,
    touchAction: "none",

    padding: "3.12vw 2.03vw",
    borderRadius: "1.56vw 0 0 1.56vw",
    "@media(min-width: 1280px)": {
      padding: "40px 26px",
      borderRadius: "20px 0 0 20px",
    },
    "@media(max-width: 1025px)": {
      padding: "5.03vw 2.87vw 0.95vw",
      borderRadius: "2.39vw 2.39vw 0 0 ",
      boxShadow: "0px 0px 2.39vw rgba(0, 0, 0, 0.25)",
    },
    "@media(max-width: 767px)": {
      padding: "10.14vw 5.79vw 2.41vw",
      borderRadius: "4.83vw 4.83vw 0 0 ",
      boxShadow: "0px 0px 4.83vw rgba(0, 0, 0, 0.25)",
    },
  },
  divider: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    background: theme.palette.background.secondaryLight,

    "@media(max-width: 1025px)": {
      top: "1.43vw",
      width: "11.87vw",
      height: "0.59vw",
      borderRadius: "0.59vw",
    },
    "@media(max-width: 767px)": {
      top: "2.89vw",
      width: "23.91vw",
      height: "1.2vw",
      borderRadius: "1.2vw",
    },
  },
  discountWrapper: {
    marginTop: "0.93vw",
    "@media(min-width: 1280px)": {
      marginTop: "12px",
    },
    "@media(max-width: 1025px)": {
      marginTop: "0.95vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "1.93vw",
    },
  },
  totalPriceWrapper: {
    marginTop: "1.56vw",
    "@media(min-width: 1280px)": {
      marginTop: "20px",
    },
    "@media(max-width: 1025px)": {
      marginTop: "2.99vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "6.03vw",
    },
  },
  normalText: {
    fontWeight: 400,
    lineHeight: 1.21,

    fontSize: "1.87vw",
    "@media(min-width: 1280px)": {
      fontSize: "24px",
    },
    "@media(max-width: 1025px)": {
      fontSize: "2.15vw",
    },
    "@media(max-width: 767px)": {
      fontSize: "4.34vw",
    },
  },
  boldText: {
    fontWeight: 700,
    lineHeight: 1.21,

    fontSize: "2.81vw",
    "@media(min-width: 1280px)": {
      fontSize: "36px",
    },
    "@media(max-width: 1025px)": {
      fontWeight: 900,
      fontSize: "2.99vw",
    },
    "@media(max-width: 767px)": {
      fontSize: "6.03vw",
    },
  },
  goRegistration: {
    width: "100%",

    marginTop: "1.56vw",
    height: "3.9vw",
    "@media(min-width: 1280px)": {
      marginTop: "20px",
      height: "50px",
    },
    "@media(max-width: 1025px)": {
      width: "98.08vw",
      marginTop: "1.91vw",
      marginLeft: "-1.91vw",
      height: "5.99vw",
    },
    "@media(max-width: 767px)": {
      width: "97.58vw",
      marginTop: "4.83vw",
      marginLeft: "-4.58vw",
      height: "12.07vw",
    },
  },
  titleCreditAndDelivery: {
    fontWeight: 700,
    lineHeight: 1.21,
    marginTop: "3.12vw",
    fontSize: "1.32vw",
    "@media(min-width: 1280px)": {
      marginTop: "40px",
      fontSize: "17px",
    },
    "@media(max-width: 1025px)": {
      marginTop: "4.79vw",
      fontSize: "2.03vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "9.66vw",
      fontSize: "4.1vw",
    },
  },
  textCredit: {
    fontWeight: 400,
    lineHeight: 1.21,
    fontSize: "1.01vw",
    marginTop: "0.62vw",
    "@media(min-width: 1280px)": {
      fontSize: "13px",
      marginTop: "8px",
    },
    "@media(max-width: 1025px)": {
      fontSize: "1.67vw",
      marginTop: "0.95vw",
    },
    "@media(max-width: 767px)": {
      fontSize: "3vw",
      marginTop: "1.93vw",
    },
    "& span": {
      fontWeight: 600,
    },
  },
  variantDevilery: {
    fontWeight: 700,
    fontSize: "1.09vw",
    lineHeight: 1.21,
    marginTop: "0.62vw",
    "@media(min-width: 1280px)": {
      fontSize: "14px",
      marginTop: "8px",
    },
    "@media(max-width: 1025px)": {
      fontSize: "1.67vw",
      marginTop: "0.95vw",
    },
    "@media(max-width: 767px)": {
      fontSize: "3.38vw",
      marginTop: "1.93vw",
    },
    "& span": {
      fontWeight: 400,
      color: "#000000",
      "-webkit-text-fill-color": "#000000",
    },
  },
  rassrochkaSpan: {
    marginLeft: "0.625vw",
    "@media(min-width: 1280px)": {
      marginLeft: "8px",
    },
    "@media(max-width: 1025px)": {
      marginLeft: "0.95vw",
    },
    "@media(max-width: 767px)": {
      marginLeft: "1.93vw",
    },
  },
  mokka: {
    display: "inline-block",

    margin: "0 0.625vw",
    height: "1.32vw",
    "@media(min-width: 1280px)": {
      margin: "0 8px",
      height: "17px",
    },
    "@media(max-width: 1025px)": {
      margin: "0 0.95vw",
      height: "2.03vw",
    },
    "@media(max-width: 767px)": {
      margin: "0 1.93vw",
      height: "3.62vw",
    },
  },
  mokkaInfo: {
    display: "inline-block",
    cursor: "pointer",

    marginLeft: "0.31vw",
    height: "1.32vw",
    width: "1.32vw",
    "@media(min-width: 1280px)": {
      marginLeft: "4px",
      height: "17px",
      width: "17px",
    },
    "@media(max-width: 1025px)": {
      marginLeft: "0.47vw",
      height: "2.03vw",
      width: "2.03vw",
    },
    "@media(max-width: 767px)": {
      marginLeft: "0.96vw",
      height: "4.1vw",
      width: "4.1vw",
    },
  },
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  mokkaBaner: {
    position: "relative",
    background: "center / cover no-repeat url('/svg/mokkaBaner.png')",

    width: "58.12vw",
    height: "37.18vw",
    "@media(min-width: 1280px)": {
      width: 744,
      height: 476,
    },
    "@media(max-width: 1025px)": {
      width: "72.58vw",
      height: "46.43vw",
    },
    "@media(max-width: 767px)": {
      width: "97vw",
      height: "62.05vw",
    },
  },
  mokkaCross: {
    padding: 0,
    background: "transparent",
    minHeight: 0,
    minWidth: 0,
    border: "none",
    outline: "none",
    cursor: "pointer",

    position: "absolute",
    top: "7.77%",
    right: "3.76%",

    width: "3.225%",
    height: "5.042%",
  },
}))

export default function PriceBlock({ products }) {
  const classes = useStyle()
  const state = React.useContext(GlobalStateContext)
  const [showMoreInfo, setShowMoreInfo] = React.useState(false)
  const mobile = useMediaQuery("(max-width: 1025px)")

  const [showMokkaInfo, setShowMokkaInfo] = React.useState(false)

  function swipeStart(e) {
    const clientY = e.clientY

    document.addEventListener("pointerup", swipeEnd)

    function swipeEnd(e) {
      if (clientY - e.clientY > 50) setShowMoreInfo(true)
      if (e.clientY - clientY > 50) setShowMoreInfo(false)
      document.removeEventListener("pointerup", swipeEnd)
    }
  }

  const summPrice = products.reduce((summ, product) => {
    return summ + product.data.price * state.inCart(product.id)
  }, 0)
  const summOldPrice = products.reduce((summ, product) => {
    return (
      summ +
      (product.data.old_price ?? product.data.price) * state.inCart(product.id)
    )
  }, 0)

  function goRegistration() {
    const positions = products.reduce((order, product, i) => {
      const num = i + 1
      const name = product.data.name
      const count = state.inCart(product.id)
      const position = `${num}. Товар: ${name}; Количество: ${count}. \n`
      return order + position
    }, "")

    const prodDataArr = []
    products.map(product => {
      const name = product.data.name
      const count = state.inCart(product.id)
      const jsonData = {
        product_name: name,
        product_uid: product.uid,
        quantity: count,
        price: product.data.price,
      }
      prodDataArr.push(jsonData)
    })

    localStorage.setItem(
      "order",
      JSON.stringify({
        positions,
        price: summPrice,
        sale: summPrice - summOldPrice,
        allProductsJson: prodDataArr,
      })
    )
  }

  // варианты доставки
  const devilery = products[0].data.delivery.document?.data.variants ?? []
  // данные по кредиту и рассрочке
  const credit = products[0].data.credit.document?.data ?? null

  const creditValue =
    credit?.percent && credit?.months_1
      ? ((products[0].data.price / 100) *
          (100 + +credit.percent.replace(",", "."))) /
        credit.months_1
      : null

  // преобразуем цену
  function priceMod(value) {
    let price = "" + value
    let length = price.length
    for (let i = 1; i < length; i++) {
      if (i % 3 === 0) {
        price = price.slice(0, length - i) + " " + price.slice(length - i)
      }
    }
    return price
  }

  return (
    <div onPointerDown={mobile ? swipeStart : null} className={classes.wrapper}>
      {mobile ? <div className={classes.divider} /> : null}

      {showMoreInfo || !mobile ? (
        <>
          <Grid container justify="space-between">
            <Typography className={classes.normalText}>Стоимость</Typography>

            <Typography className={classes.normalText}>{`${priceMod(
              summOldPrice
            )} ₽`}</Typography>
          </Grid>

          <Grid
            container
            justify="space-between"
            className={classes.discountWrapper}
          >
            <Typography className={classes.normalText}>Скидка</Typography>

            <Typography
              className={classes.normalText}
              style={{ color: "#FF5B5B" }}
            >{`${priceMod(summPrice - summOldPrice)} ₽`}</Typography>
          </Grid>
        </>
      ) : null}

      <Grid
        container
        justify="space-between"
        className={classes.totalPriceWrapper}
      >
        <Typography className={classes.boldText}>Итого</Typography>

        <Typography className={classes.boldText}>{`${priceMod(
          summPrice
        )} ₽`}</Typography>
      </Grid>

      <div className={classes.goRegistration}>
        <GoRegistration text="Перейти к оформлению" onClick={goRegistration} />
      </div>

      {(credit && !mobile) || summPrice < 100000 ? (
        <>
          <Typography className={classes.titleCreditAndDelivery}>
            Рассрочка и кредит
          </Typography>

          <Typography hidden={!creditValue} className={classes.textCredit}>
            Кредит от <span>{priceMod(Math.trunc(creditValue))} ₽/мес</span>
          </Typography>

          {summPrice < 100000 ? (
            <Typography
              hidden={!credit.months_2}
              className={classes.textCredit}
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              Рассрочка от
              <span className={classes.rassrochkaSpan}>
                {priceMod(Math.trunc(summPrice / credit.months_2))} ₽/мес
              </span>
              <span className={classes.mokka}>
                <Mokka />
              </span>
              | оплата авансом
              <span
                role="button"
                onClick={() => setShowMokkaInfo(!showMokkaInfo)}
                className={classes.mokkaInfo}
              >
                <MokkaInfo />
              </span>
            </Typography>
          ) : null}
        </>
      ) : null}

      <Modal
        open={showMokkaInfo}
        onClose={() => setShowMokkaInfo(false)}
        className={classes.modal}
      >
        <div className={classes.mokkaBaner}>
          <button
            onClick={() => setShowMokkaInfo(false)}
            className={classes.mokkaCross}
          >
            <MokkaCross />
          </button>
        </div>
      </Modal>

      {devilery.length && !mobile ? (
        <>
          <Typography className={classes.titleCreditAndDelivery}>
            Способ получения
          </Typography>

          {devilery.map(variant => (
            <Typography
              variant="body2"
              key={variant.name}
              className={classes.variantDevilery}
            >
              {variant.name} <span>{variant.description}</span>
            </Typography>
          ))}
        </>
      ) : null}
    </div>
  )
}
