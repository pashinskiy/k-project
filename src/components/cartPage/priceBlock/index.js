import React from "react"
import {
  makeStyles,
  useMediaQuery,
  Grid,
  Typography,
  Modal,
} from "@material-ui/core"

import { GlobalStateContext } from "../../../context/GlobalContextProvider"

import GoRegistration from "../../button/goRegistration"

import Mokka from "../../../../static/svg/mokka.svg"
import MokkaInfo from "../../../../static/svg/mokkaInfo.svg"
import MokkaCross from "../../../../static/svg/mokkaCross.svg"
import MokkaIframeRegistration from "../../mokkaIframeRegistration"
import Tinkoff from "../../button/tinkoff"

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
      background: "transparent",

      padding: 0,
      borderRadius: 0,
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
      marginBottom: "3.35vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "6.03vw",
      marginBottom: "6.76vw",
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
      position: "fixed",
      left: "50%",
      transform: "translateX(-50%)",
      bottom: 70,
      width: "100vw",
      zIndex: 99,

      width: "98.08vw",
      height: "5.99vw",
    },
    "@media(max-width: 767px)": {
      width: "97.58vw",
      height: "12.07vw",
    },
  },
  wrapperTinkoffButton: {
    width: "100%",

    marginTop: "0.78vw",
    "@media(min-width: 1280px)": {
      marginTop: 10,
    },
    "@media(max-width: 1025px)": {
      margin: "3.35vw 0",
    },
    "@media(max-width: 767px)": {
      margin: "6.76vw 0",
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
    cursor: "pointer",

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

/**
 * Блок с ценой продуктов на странице корзины
 * @module src/components/cartPage/priceBlock
 * @param {Object} props - объект свойств компонента React
 * @param {Object[]} props.products - массив объектов продуктов полученых из prismic
 */
export default function PriceBlock({ products }) {
  const classes = useStyle()
  const state = React.useContext(GlobalStateContext)

  const mobile = useMediaQuery("(max-width: 1025px)")

  const [showMokkaInfo, setShowMokkaInfo] = React.useState(false)
  const [showMokkaIframe, setShowMokkaIframe] = React.useState(false)

  const summPrice = products.reduce((summ, product) => {
    return summ + product.data.price * state.inCart(product)
  }, 0)
  const summOldPrice = products.reduce((summ, product) => {
    return (
      summ +
      (product.data.old_price ?? product.data.price) * state.inCart(product)
    )
  }, 0)

  function goRegistration() {
    const positions = products.reduce((order, product, i) => {
      const num = i + 1
      const name = product.data.name
      const count = state.inCart(product)
      const position = `${num}. Товар: ${name}; Количество: ${count}. \n`
      return order + position
    }, "")

    const prodDataArr = []
    products.map(product => {
      const name = product.data.name
      const count = state.inCart(product)
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
  const devilery = products[0].data.delivery?.document?.data.variants ?? []
  // данные по кредиту и рассрочке
  const credit = products[0].data.credit?.document?.data ?? null

  const ps = +credit?.percent.replace(",", ".") / 12 / 100
  const creditValue =
    credit?.percent && credit?.months_1
      ? summPrice * (ps / (1 - Math.pow(1 + ps, -credit?.months_1)))
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

  function switchShowMokkaInfo(e) {
    e.preventDefault()
    setShowMokkaInfo(!showMokkaInfo)
  }

  function switchShowMokkaIframe(e) {
    if (e.defaultPrevented) return
    setShowMokkaIframe(!showMokkaIframe)
  }

  return (
    <div className={classes.wrapper}>
      {mobile ? <div className={classes.divider} /> : null}

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

      {state.servicesAvailable() ? null : (
        <div className={classes.wrapperTinkoffButton}>
          <Tinkoff items={state.cart} />
        </div>
      )}

      {(credit || devilery.length) &&
      summPrice < 100000 &&
      summPrice >= 5000 &&
      !mobile ? (
        <>
          <Typography className={classes.titleCreditAndDelivery}>
            Оплата авансом и кредит
          </Typography>

          <Typography
            hidden={!creditValue}
            className={classes.textCredit}
            style={{ cursor: "inherit" }}
          >
            Кредит в Тинькофф от{" "}
            <span>{priceMod(Math.trunc(creditValue))} ₽/мес</span>
          </Typography>

          {summPrice < 100000 && summPrice >= 5000 ? (
            <Typography
              role="button"
              onClick={switchShowMokkaIframe}
              hidden={!credit.months_2}
              className={classes.textCredit}
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              Оплата авансом
              <span className={classes.rassrochkaSpan}>
                от {priceMod(Math.trunc(summPrice / credit.months_2))} ₽/мес
              </span>
              <span className={classes.mokka}>
                <Mokka />
              </span>
              |
              <span
                role="button"
                onClick={switchShowMokkaInfo}
                className={classes.mokkaInfo}
              >
                <MokkaInfo aria-label="mokka info" />
              </span>
            </Typography>
          ) : null}
        </>
      ) : null}

      <Modal
        open={showMokkaIframe}
        onClose={() => setShowMokkaIframe(false)}
        className={classes.modal}
      >
        <MokkaIframeRegistration onClose={() => setShowMokkaIframe(false)} />
      </Modal>

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
