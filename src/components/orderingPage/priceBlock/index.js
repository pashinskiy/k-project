import React from "react"
import { Helmet } from "react-helmet"
import {
  makeStyles,
  useMediaQuery,
  Grid,
  Typography,
  Modal,
} from "@material-ui/core"

import Pay from "../../button/pay"

import { OrderingStateContext } from "../context"

import Star from "../../../../static/svg/star.svg"
import { navigate } from "gatsby"

import Mokka from "../../../../static/svg/mokka.svg"
import MokkaInfo from "../../../../static/svg/mokkaInfo.svg"
import MokkaCross from "../../../../static/svg/mokkaCross.svg"
import MokkaIframeRegistration from "../../mokkaIframeRegistration"
import MokkaIframePay from "../../mokkaIframePay"

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
    "@media(max-width: 1025px)": {
      background: "transparent",

      padding: 0,
      borderRadius: 0,
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
      marginBottom: "6.03vw",
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
  errorWrapper: {
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
  error: {
    display: "flex",
    fontWeight: 400,
    lineHeight: 1.21,
    color: "#FF5B5B",

    fontSize: "1.09vw",
    "@media(min-width: 1280px)": {
      fontSize: "14px",
    },
    "@media(max-width: 1025px)": {
      fontSize: "1.67vw",
    },
    "@media(max-width: 767px)": {
      fontSize: "3.38vw",
    },
  },
  icon: {
    display: "flex",

    width: "0.78vw",
    height: "0.78vw",
    marginRight: "0.23vw",
    "@media(min-width: 1280px)": {
      width: "10px",
      height: "10px",
      marginRight: "3px",
    },
    "@media(max-width: 1025px)": {
      width: "1.19vw",
      height: "1.19vw",
      marginRight: "0.35vw",
    },
    "@media(max-width: 767px)": {
      width: "2.41vw",
      height: "2.41vw",
      marginRight: "0.72vw",
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
      zIndex: 99,

      width: "98.08vw",
      height: "5.99vw",
    },
    "@media(max-width: 767px)": {
      width: "97.58vw",
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
 * Блок цены на странице оформления заказа
 * @module src/components/orderingPage/priceBlock
 * @param {Object} props - объект свойств компонента React
 * @param {Object[]} props.products - массив объектов продуктов полученых из prismic
 */
export default function PriceBlock({ products }) {
  const classes = useStyle()
  const mobile = useMediaQuery("(max-width: 1025px)")

  const [showMokkaInfo, setShowMokkaInfo] = React.useState(false)
  const [showMokkaIframe, setShowMokkaIframe] = React.useState(false)
  const [mokkaFormUrl, setMokkaFormUrl] = React.useState(false)

  const orderingState = React.useContext(OrderingStateContext)

  const validData = orderingState.validationAll()

  const order = JSON.parse(localStorage.getItem("order"))

  const [sendQuery, setSendQuery] = React.useState(false)

  function payOrder() {
    if (sendQuery) return

    if (validData) {
      setSendQuery(true)
      const apiURL = "https://admin.krypton.ru/api/order/create/"

      const headers = new Headers()
      headers.append("Content-Type", "application/json")

      const body = JSON.stringify({
        name: orderingState.name,
        phone: orderingState.phone,
        email: orderingState.email,
        city: orderingState.city,
        street: orderingState.street,
        house: orderingState.house,
        apartment: orderingState.apartment,
        variantDelivery: orderingState.variantDelivery,
        variantPay: orderingState.variantPay,
        date: orderingState.date.slice(0, 10).split("/").reverse().join("-"),
        time_from: orderingState.time.slice(0, 5),
        time_to: orderingState.time.slice(-5),

        items: order.allProductsJson.map(product => ({
          quantity: product.quantity,
          prismic_uid: product.product_uid,
        })),
      })

      const init = {
        method: "POST",
        headers,
        body,
      }

      fetch(apiURL, init)
        .then(res => res.json())
        .then(res => {
          localStorage.setItem("order_number", JSON.stringify(res.order_number))

          if (res.error) {
            localStorage.setItem(
              "order_number",
              JSON.stringify(res.order_number)
            )
            navigate("/order/", { state: { error: res.status } })
            return
          }

          if (orderingState.variantPay === "при получении") {
            navigate("/order/")
          }
          if (orderingState.variantPay === "в рассрочку") {
            console.log(res.payment_data.url)
            setMokkaFormUrl(res.payment_data.url)
          }
          if (orderingState.variantPay === "онлайн") {
            window.location.href = res.payment_data.url
          }
          if (orderingState.variantPay === "в кредит") {
            window.location.href = res.payment_data.url
          }
        })
        .catch(error => {
          setSendQuery(false)
          console.log(error)
        })
    }
  }

  // варианты доставки
  const devilery = products[0]?.data.delivery?.document?.data.variants ?? []
  // данные по кредиту и рассрочке
  const credit = products[0]?.data.credit?.document?.data ?? null

  const ps = +credit?.percent.replace(",", ".") / 12 / 100
  const creditValue =
    credit?.percent && credit?.months_1
      ? order.price * (ps / (1 - Math.pow(1 + ps, -credit?.months_1)))
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
      <Grid container justify="space-between">
        <Typography className={classes.normalText}>Стоимость</Typography>

        <Typography className={classes.normalText}>{`${priceMod(
          order.price - order.sale
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
        >{`${priceMod(order.sale)} ₽`}</Typography>
      </Grid>

      <Grid
        container
        justify="space-between"
        className={classes.discountWrapper}
      >
        <Typography className={classes.normalText}>Доставка</Typography>

        <Typography className={classes.normalText} style={{ color: "#20CA1D" }}>
          Бесплатно
        </Typography>
      </Grid>

      <Grid
        container
        justify="space-between"
        className={classes.totalPriceWrapper}
      >
        <Typography className={classes.boldText}>Итого</Typography>

        <Typography className={classes.boldText}>{`${priceMod(
          order.price
        )} ₽`}</Typography>
      </Grid>

      {validData || mobile ? null : (
        <div className={classes.errorWrapper}>
          <Typography className={classes.error}>
            <i className={classes.icon}>
              <Star />
            </i>
            Некоторые поля заполнены некорректно
          </Typography>
        </div>
      )}

      <div className={classes.goRegistration}>
        {orderingState.variantPay === "онлайн" ? (
          <Helmet>
            <script src="https://securepay.tinkoff.ru/html/payForm/js/tinkoff_v2.js"></script>
          </Helmet>
        ) : null}

        {orderingState.variantPay === "в кредит" ? (
          <Helmet>
            <script src="https://forma.tinkoff.ru/static/onlineScript.js" />
          </Helmet>
        ) : null}

        <Pay text="Подтвердить заказ" products={products} onClick={payOrder} />

        <Modal open={mokkaFormUrl} className={classes.modal}>
          <MokkaIframePay url={mokkaFormUrl} />
        </Modal>
      </div>

      {(credit || devilery.length) &&
      order.price < 100000 &&
      order.price >= 5000 &&
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

          {order.price < 100000 && order.price >= 5000 ? (
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
                от {priceMod(Math.trunc(order.price / credit.months_2))} ₽/мес
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
