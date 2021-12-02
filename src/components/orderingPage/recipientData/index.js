import React from "react"
import { makeStyles, useMediaQuery, Grid } from "@material-ui/core"

import WrapperWithTitle from "../elementsForm/wrapperWithTitle"
import Input from "../elementsForm/input"

import HeaderWithIcon from "..//headerWithIcon"
import RecipientIcon from "../../../../static/svg/recipientIcon.svg"

import { OrderingStateContext, OrderingDispatchContext } from "../context"

const useStyle = makeStyles(theme => ({
  twoInputWrapper: {
    marginTop: "1.87vw",
    "@media(min-width: 1280px)": {
      marginTop: "24px",
    },
    "@media(max-width: 1025px)": {
      marginTop: "2.87vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "4.83vw",
    },

    "& > *": {
      width: "100%",
      marginTop: "1.87vw",
      "@media(min-width: 1280px)": {
        marginTop: "24px",
      },
      "@media(max-width: 1025px)": {
        marginTop: "2.87vw",
      },
      "@media(max-width: 767px)": {
        marginTop: "4.83vw !important",
      },

      "&:first-child": {
        marginTop: 0,
      },
    },
  },
  shortInput: {
    width: "44.87%",
    "@media(max-width: 767px)": {
      width: "100%",
    },
  },
}))

/**
 * Блок данных о клиенте
 * @module src/components/orderingPage/recipientData
 */
export default function RecipientData() {
  const classes = useStyle()
  const smartPhoneScreen = useMediaQuery("(max-width: 767px)")

  const orderingState = React.useContext(OrderingStateContext)
  const orderingDispatch = React.useContext(OrderingDispatchContext)

  function setName(value) {
    orderingDispatch({ type: "SET_NAME", payload: value })
  }
  function setPhone(value) {
    if (value.slice(0, 2) !== "+7") value = "+7"
    orderingDispatch({ type: "SET_PHONE", payload: value })
  }
  function setEmail(value) {
    orderingDispatch({ type: "SET_EMAIL", payload: value })
  }
  function setInn(value) {
    orderingDispatch({ type: "SET_INN", payload: value })
  }

  return (
    <>
      <HeaderWithIcon
        icon={smartPhoneScreen ? null : <RecipientIcon />}
        number={smartPhoneScreen ? 3 : null}
        title="Данные получателя"
      />

      <Grid
        container
        justify="space-between"
        className={classes.twoInputWrapper}
      >
        {orderingState.variantPay === "перевод" ? (
          <WrapperWithTitle
            title="ИНН"
            necessarily={orderingState.variantPay === "перевод"}
          >
            <Input
              id="inn"
              afterChange={setInn}
              checkValue={() => orderingState.validationInn()}
            />
          </WrapperWithTitle>
        ) : null}

        <WrapperWithTitle title="Имя" className={classes.shortInput}>
          <Input
            id="name"
            afterChange={setName}
            checkValue={() => orderingState.validationName()}
          />
        </WrapperWithTitle>

        <WrapperWithTitle
          title="Телефон"
          className={classes.shortInput}
          style={{ marginTop: orderingState.variantPay === "перевод" ? "" : 0 }}
        >
          <Input
            id="phone"
            afterChange={setPhone}
            checkValue={() => orderingState.validationPhone()}
            value={orderingState.phone}
          />
        </WrapperWithTitle>

        <WrapperWithTitle
          title="E-mail"
          necessarily={orderingState.variantPay === "перевод"}
        >
          <Input
            id="email"
            afterChange={setEmail}
            checkValue={() =>
              orderingState.variantPay === "перевод"
                ? orderingState.validationEmail()
                : true
            }
          />
        </WrapperWithTitle>
      </Grid>
    </>
  )
}
