import React from "react"
import Grid from "@material-ui/core/Grid"
import DeliveryCard from "./deliveryCard.js"
import HeaderWithIcon from "../../headers/headerWithIcon.js"
import IconDelivery from "../../../../static/svg/deliveryIcon.svg"
import { makeStyles, useMediaQuery } from "@material-ui/core"

const useStyle = makeStyles(theme => ({
  wrapper: { overflow: "hidden" },
}))

/**
 * Блок доставки на странице продукта
 * @module src/components/productPage/delivery
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.prismicProduct - объект продукта полученый из prismic
 */
export default function DeliveryCards({ prismicProduct }) {
  const delivery = prismicProduct.data.delivery.document?.data.body[0]?.items

  const mobile = useMediaQuery("(max-width: 767px)")

  const classes = useStyle()

  return !delivery ? null : (
    <>
      <HeaderWithIcon
        icon={<IconDelivery />}
        title="Информация о доставке"
        divider={true}
      />
      <Grid container spacing={mobile ? 12 : null} className={classes.wrapper}>
        {delivery.length
          ? delivery.map(variant => (
              <Grid item key={variant.city_name}>
                <DeliveryCard
                  deliveryCity={variant.city_name}
                  deliveryDescription={variant.delivery_description}
                  deliveryCost={variant.cost}
                  deliveryTime={variant.timing}
                />
              </Grid>
            ))
          : null}
      </Grid>
    </>
  )
}
