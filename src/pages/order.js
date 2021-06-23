import React, { useState } from "react"
import Card from "@material-ui/core/Card"
import { makeStyles } from "@material-ui/core/styles"
import {
  Button,
  CardContent,
  Dialog,
  Grid,
  Typography,
  Divider,
} from "@material-ui/core"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import OrderProductCard from "../components/orderPage/orderProductCard"

const useStyles = makeStyles(theme => ({
    orderTitle: {

  },
  divider:{

  },
}))

export default function OrderPage() {
  const classes = useStyles()

  const orderConfirmed = true

  const orderNumber = "877 780"
  const orderPay = "при получении"
  const orderAdress = "г. Санкт-Петербург, проспект Барклая, д.8, кв. 101"
  const orderDeliveryTime = "Сегодня 18/05/1999, с 12:00 до 13:00"
  const ordererName = "Елизавета"
  const ordererPhone = "8-999-333-34-45"
  const orderCost = "131 980"


  return (
    <>
      {orderConfirmed ? (
        <div className={classes.orderTitle}>
            <Typography>Заказ подтверждён</Typography>
        </div>
      ) : (
          <div className={classes.orderTitle}>
              <Typography>Заказ не был принят</Typography>
          </div>
      )}
      <Divider className={classes.divider} />
      <Typography>Номер заказа:</Typography>
      <Typography>#{orderNumber}</Typography>
      <Typography>Способ оплаты:</Typography>
      <Typography>{orderPay}</Typography>
      <Typography>Адрес доставки:</Typography>
      <Typography>{orderAdress}</Typography>
      <Typography>Дата и время доставки:</Typography>
      <Typography>{orderDeliveryTime}</Typography>
      <Typography>Имя получателя</Typography>
      <Typography>{ordererName}</Typography>
      <Typography>Дата и время доставки:</Typography>
      <Typography>{ordererPhone}</Typography>
      <Divider className={classes.divider}/>
      <OrderProductCard />
      <Divider className={classes.divider}/>
      <Typography>Итого: {orderCost}</Typography>
    </>
  )
}
