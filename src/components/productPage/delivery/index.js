import React from "react"
import Grid from "@material-ui/core/Grid"
import DeliveryCard from "./deliveryCard.js"
import { makeStyles } from "@material-ui/core/styles"
import HeaderWithIcon from "../../headers/headerWithIcon.js"
import IconDelivery from "../../../../static/svg/deliveryIcon.svg"

const useStyles = makeStyles({
  root: {
    margin: "0px",
    width: "100%",
  },
})
export default function DeliveryCards() {
  const classes = useStyles()
  return (
    <>
      <HeaderWithIcon
        icon={<IconDelivery />}
        title="Информация о доставке"
        divider={true}
      />
      <Grid container spacing="4" className={classes.root}>
        <Grid item>
          <DeliveryCard
            deliveryCity="Санкт Петербург"
            deliveryDescription="Доставка осуществляется за счет компании, сразу к вам домой, в течение часа."
            deliveryCost="бесплатно"
            deliveryTime="1 час"
          />
        </Grid>
        <Grid item>
          <DeliveryCard
            deliveryCity="Другие города в Российской Федерации"
            deliveryDescription="Услуги доставки во все города России, кроме Санкт-Петербурга, осуществляется компанией СДЭК."
            deliveryCost="300 руб."
            deliveryTime="2-7 дней"
          />
        </Grid>
      </Grid>
    </>
  )
}
