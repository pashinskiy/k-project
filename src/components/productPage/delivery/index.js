import React from "react"
import Grid from "@material-ui/core/Grid"
import DeliveryCard from "./deliveryCard.js"
import { makeStyles } from "@material-ui/core/styles"
import HeaderWithIcon from "../../headers/headerWithIcon.js"
import IconDelivery from "../../../../static/svg/deliveryIcon.svg"
import { useMediaQuery } from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
})
export default function DeliveryCards(prismicProduct) {
  const classes = useStyles()
  const delivery =
    prismicProduct.prismicProduct.data.delivery.document?.data.body[0].items ??
    []

    const mobile = useMediaQuery("(max-width: 414px)")

  return (
    <>
      <HeaderWithIcon
        icon={<IconDelivery />}
        title="Информация о доставке"
        divider={true}
      />
      <Grid container spacing={mobile ? 12 : null}>
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
