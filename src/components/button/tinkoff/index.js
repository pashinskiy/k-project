import React from "react"
import { Button, makeStyles, Modal, Typography } from "@material-ui/core"
import { navigate } from "gatsby"

import TinkoffIcon from "../../../../static/svg/tinkoff.svg"
import Cross from "../../../../static/svg/cross.svg"

const useStyles = makeStyles(theme => ({
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "100%",

    background: "#FFDD2D",
    textTransform: "none",

    borderRadius: "0.93vw",
    padding: "0.62vw",
    "@media(min-width: 1280px)": {
      borderRadius: "12px",
      padding: 8,
    },
    "@media(max-width: 1025px)": {
      borderRadius: "2.39vw",
      padding: "0.95vw",
    },
    "@media(max-width: 767px)": {
      borderRadius: "4.83vw",
      padding: "1.93vw",
    },
    "&:hover": {
      background: "#FFDD2D",
    },
  },
  icon: {
    width: "3.12vw",
    height: "2.65vw",
    "@media(min-width: 1280px)": {
      width: 40,
      height: 34,
    },
    "@media(max-width: 1025px)": {
      width: "4.79vw",
      height: "4.07vw",
    },
    "@media(max-width: 767px)": {
      width: "9.66vw",
      height: "8.21vw",
    },
  },
  text: {
    fontWeight: 700,
    lineHeight: 1.21,
    color: theme.palette.color.main,

    marginLeft: "0.78vw",
    fontSize: "1.32vw",
    "@media(min-width: 1280px)": {
      marginLeft: 10,
      fontSize: 17,
    },
    "@media(max-width: 1025px)": {
      marginLeft: "1.19vw",
      fontSize: "2.03vw",
    },
    "@media(max-width: 767px)": {
      marginLeft: "2.41vw",
      fontSize: "4.1vw",
    },
  },
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal__wrapper: {
    background: theme.palette.background.main,

    width: "62.5vw",
    borderRadius: "1.56vw",
    padding: "2.34vw",
    "@media(min-width: 1280px)": {
      width: 800,
      borderRadius: 20,
      padding: 30,
    },
    "@media(max-width: 1025px)": {
      width: "93.28vw",
      borderRadius: "2.39vw",
      padding: "3.59vw",
    },
    "@media(max-width: 767px)": {
      width: "86.47vw",
      borderRadius: "4.83vw",
      padding: "7.24vw",
    },
  },
  wrapper_first_block: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  modal__title: {
    fontWeight: 600,
    lineHeight: 1,

    fontSize: "2.81vw",
    "@media(max-width: 1025px)": {
      fontSize: 36,
    },
    "@media(max-width: 1025px)": {
      fontSize: "4.31vw",
    },
    "@media(max-width: 767px)": {
      fontSize: "5.79vw",
    },

    "& font": {
      ...theme.typography.body2,
      fontWeight: "inherit",
      lineHeight: "inherit",
      fontSize: "inherit",
    },
  },
  cross: {
    background: "transparent",
    padding: 0,
    border: "none",
    cursor: "pointer",

    width: "1.56vw",
    height: "1.56vw",
    "@media(max-width: 1025px)": {
      width: 20,
      height: 20,
    },
    "@media(max-width: 1025px)": {
      width: "2.39vw",
      height: "2.39vw",
    },
    "@media(max-width: 767px)": {
      width: "4.83vw",
      height: "4.83vw",
    },
  },
  wrapper_labels: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",

    marginTop: "3.12vw",
    "@media(max-width: 1025px)": {
      marginTop: 40,
    },
    "@media(max-width: 1025px)": {
      marginTop: "4.79vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "9.66vw",
    },
  },
  label: {
    width: "27.81vw",
    "@media(max-width: 1025px)": {
      width: 356,
    },
    "@media(max-width: 1025px)": {
      width: "41.36vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "6.76vw",
      width: "100%",

      "&:first-child": {
        marginTop: 0,
      },
    },

    "& input": {
      width: "100%",
      border: "1px solid #D6D5DF",
      outline: "none",

      marginTop: "1.09vw",
      borderRadius: "0.46vw",
      padding: "1.21vw 0.93vw",
      "@media(max-width: 1025px)": {
        marginTop: 14,
        borderRadius: 6,
        padding: "15.5px 12px",
      },
      "@media(max-width: 1025px)": {
        marginTop: "1.67vw",
        borderRadius: "0.71vw",
        padding: "1.85vw 1.43vw",
      },
      "@media(max-width: 767px)": {
        marginTop: "3.38vw",
        borderRadius: "1.44vw",
        padding: "3.74vw 2.89vw",
      },
    },
  },
  label__text: {
    fontWeight: 600,
    lineHeight: 1.21,
    color: theme.palette.color.main,

    fontSize: "1.32vw",
    "@media(min-width: 1280px)": {
      fontSize: 17,
    },
    "@media(max-width: 1025px)": {
      fontSize: "2.03vw",
    },
    "@media(max-width: 767px)": {
      fontSize: "4.1vw",
    },
  },
  modal__button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    border: "none",
    cursor: "pointer",

    background: "#FFDD2D",
    textTransform: "none",

    marginTop: "3.12vw",
    borderRadius: "0.93vw",
    padding: "0.62vw",
    "@media(min-width: 1280px)": {
      marginTop: 40,
      borderRadius: 12,
      padding: 8,
    },
    "@media(max-width: 1025px)": {
      marginTop: "4.79vw",
      borderRadius: "1.43vw",
      padding: "0.95vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "9.66vw",
      borderRadius: "4.83vw",
      padding: "1.93vw",
    },
    "&:hover": {
      background: "#FFDD2D",
    },
  },
  modal__сontent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    margin: "auto",
    outline: "none",
    background: theme.palette.background.main,

    width: "30vw",
    padding: "1.56vw",
    borderRadius: "1.56vw",
    "@media(min-width: 1280px)": {
      width: "384px",
      padding: "30px",
      borderRadius: "30px",
    },
    "@media(max-width: 767px)": {
      width: "9.27vw",
      padding: "3vw",
      borderRadius: "3vw",
    },
  },
  modal__сontent_text: {
    fontSize: "1.87vw",
    "@media(min-width: 1280px)": {
      fontSize: "24px",
    },
    "@media(max-width: 767px)": {
      fontSize: "5.79vw",
    },
  },
  error: {
    whidth: "100%",
    marginRight: "0.8em",
    color: "red",

    fontSize: "1.4vw",
    "@media(min-width: 1280px)": {
      fontSize: "18px",
    },
    "@media(max-width: 767px)": {
      fontSize: "4.34vw",
    },
  },
}))

/**
 * Кнопка оформления кредита в Тинькофф
 * @module src/components/button/tinkoff
 * @param {Object} props - объект свойств компонента React
 * @param {String} props.text - текст для отображения на кнопке
 * @param {function} props.onClick - функция вызываемая перед переходом
 */
export default function Tinkoff({ items }) {
  const classes = useStyles()
  const [showModal, setShowModal] = React.useState(false)
  const [name, setName] = React.useState("")
  const [phone, setPhone] = React.useState("+7")

  const [messageOpen, setMessageOpen] = React.useState(false)
  const [message, setMessage] = React.useState(null)

  // валидация формы
  function validForm() {
    const errors = []
    if (/[^a-zа-я\s]+$/i.test(name) || name === "")
      errors.push("некорректное имя")
    if (phone === "" || phone === "+7") errors.push("введите номер телефона")

    return errors
  }
  // открытие модального окна с авто закрытием через 10с
  function openModal() {
    setMessageOpen(true)
    setTimeout(setMessageOpen, 5000, false)
  }

  function send() {
    if (validForm().length) {
      setMessage([
        <Typography align="center" className={classes.modal__сontent_text}>
          Данные не отправлены
        </Typography>,
        ...validForm().map(err => (
          <Typography className={classes.error} align="left">
            - {err}
          </Typography>
        )),
      ])
      openModal()
    } else {
      const apiURL = "https://admin.krypton.ru/api/order/create/"

      const headers = new Headers()
      headers.append("Content-Type", "application/json")

      const body = JSON.stringify({
        name: name,
        phone: phone,
        variantPay: "в кредит",

        items: items.map(item => ({
          quantity: item.count,
          prismic_uid: item.product.uid,
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

          window.location.href = res.payment_data.url
        })
        .catch(error => {
          console.log(error)
        })
    }
  }

  return (
    <>
      <Button
        id="credit-tinkoff"
        disableRipple
        onClick={() => setShowModal(true)}
        className={classes.button}
      >
        <div className={classes.icon}>
          <TinkoffIcon />
        </div>

        <Typography
          id="credit-tinkoff-text"
          align="center"
          className={classes.text}
        >
          Кредит в Тинькофф
        </Typography>
      </Button>

      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        className={classes.modal}
        BackdropProps={{ style: { backgroundColor: "rgba(32, 29, 29, 0.9)" } }}
      >
        <div className={classes.modal__wrapper}>
          <div className={classes.wrapper_first_block}>
            <Typography className={classes.modal__title}>
              Заполните <font>заявку</font>
            </Typography>

            <button
              id="close"
              aria-label="close"
              onClick={() => setShowModal(false)}
              className={classes.cross}
            >
              <Cross />
            </button>
          </div>

          <div className={classes.wrapper_labels}>
            <label className={classes.label}>
              <Typography className={classes.label__text}>Имя</Typography>

              <input
                id="name"
                value={name}
                onInput={e => setName(e.target.value)}
              />
            </label>

            <label className={classes.label}>
              <Typography className={classes.label__text}>Телефон</Typography>

              <input
                id="phone"
                value={phone}
                onInput={e => setPhone(e.target.value)}
              />
            </label>
          </div>

          <button
            id="credit-tinkoff"
            onClick={send}
            className={classes.modal__button}
          >
            <div className={classes.icon}>
              <TinkoffIcon />
            </div>

            <Typography
              id="credit-tinkoff-text"
              align="center"
              className={classes.text}
            >
              Отправить заявку
            </Typography>
          </button>
        </div>
      </Modal>

      <Modal
        open={messageOpen}
        onClose={() => setMessageOpen(false)}
        className={classes.modal}
        BackdropProps={{ style: { backgroundColor: "rgba(32, 29, 29, 0.9)" } }}
      >
        <div className={classes.modal__сontent}>{message}</div>
      </Modal>
    </>
  )
}
