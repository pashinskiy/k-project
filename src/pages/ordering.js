import React from "react"
import { graphql } from "gatsby"
import { makeStyles, Grid, Typography } from "@material-ui/core"
import Layout from "../components/layout"

import Seo from "../components/seo"
import HeaderWithIcon from "../components/headers/headerWithIcon"
import BreadCrumbs from "../components/breadCrumbs"
import OrderingContext from "../components/orderingPage/context"
import CartIcon from "../../static/svg/cart.svg"
import PriceBlock from "../components/orderingPage/priceBlock"
import DeliveryData from "../components/orderingPage/deliveryData"
import PayData from "../components/orderingPage/payData"
import RecipientData from "../components/orderingPage/recipientData"

import { GlobalStateContext } from "../context/GlobalContextProvider"

const useStyle = makeStyles(theme => ({
  mainBlockWrapper: {
    borderTop: `1px solid ${theme.palette.color.secondaryLight}`,
    borderBottom: `1px solid ${theme.palette.color.secondaryLight}`,

    marginTop: "2.18vw",
    padding: "2.18vw 0",
    "@media(min-width: 1280px)": {
      marginTop: "28px",
      padding: "28px 0",
    },
    "@media(max-width: 1025px)": {
      marginTop: "3.35vw",
      padding: "3.35vw 0",
    },
    "@media(max-width: 767px)": {
      marginTop: "6.76vw",
      padding: "6.76vw 0",
    },
  },
  orderingFormWrapper: {
    width: "56.32vw",
    "@media(min-width: 1280px)": {
      width: "721px",
    },
    "@media(max-width: 1025px)": {
      width: "100%",
    },
  },
  orderingFieldWrapper: {
    background: theme.palette.background.secondary,

    marginTop: "1.87vw",
    padding: "1.87vw",
    borderRadius: "0.93vw",
    "@media(min-width: 1280px)": {
      marginTop: "24px",
      padding: "24px",
      borderRadius: "12px",
    },
    "@media(max-width: 1025px)": {
      marginTop: "2.87vw",
      padding: "2.87vw",
      borderRadius: "1.43vw",
    },
    "@media(max-width: 767px)": {
      background: "transparent",
      marginTop: "5.79vw",
      padding: 0,
    },
    "&:first-child": {
      marginTop: 0,
    },
  },

  priceBlockWrapper: {
    width: "35.31vw",
    "@media(min-width: 1280px)": {
      width: "452px",
    },
    "@media(max-width: 1025px)": {
      position: "fixed",
      left: 0,
      bottom: 62,
      width: "100vw",
      zIndex: 99,
    },
  },
  disclaimer: {
    fontWeight: 300,
    lineHeight: 1.21,
    color: "#838383",

    marginTop: "2.18vw",
    width: "69.53vw",
    fontSize: "1.09vw",
    "@media(min-width: 1280px)": {
      marginTop: "28px",
      width: "890px",
      fontSize: "14px",
    },
    "@media(max-width: 1025px)": {
      marginTop: "3.35vw",
      width: "100%",
      fontSize: "1.67vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "6.76vw",
      fontSize: "2.89vw",
    },

    "& a": {
      fontWeight: 500,
    },
  },
  supportText: {
    marginTop: "1em",
    fontWeight: 500,
    lineHeight: 1.21,
    color: "#838383",
    textDecoration: "none",

    fontSize: "1.09vw",
    "@media(min-width: 1280px)": {
      fontSize: "14px",
    },
    "@media(max-width: 1025px)": {
      fontSize: "1.67vw",
    },
    "@media(max-width: 767px)": {
      fontSize: "2.89vw",
    },
  },
}))

const IndexPage = ({ data }) => {
  const classes = useStyle()
  const order = JSON.parse(localStorage.getItem("order"))

  const state = React.useContext(GlobalStateContext)

  const productsInCart = state.allPrismicProduct.edges
    .filter(edge => !!state.inCart(edge.node.id))
    .map(edge => edge.node)

  return (
    <Layout>
      <Seo title="Оформление заказа" />

      <HeaderWithIcon icon={<CartIcon />} title={`Оформление заказа`} />

      <BreadCrumbs
        links={[{ title: "Оформление заказа", href: "/ordering/" }]}
      />

      {order === null ? (
        <Typography>Нет выбранных товаров для оформления</Typography>
      ) : (
        <OrderingContext>
          <Grid
            container
            justify="space-between"
            className={classes.mainBlockWrapper}
          >
            <div className={classes.orderingFormWrapper}>
              <div className={classes.orderingFieldWrapper}>
                <DeliveryData prismicCartAndOrder={data.prismicCartAndOrder} />
              </div>

              <div className={classes.orderingFieldWrapper}>
                <PayData prismicCartAndOrder={data.prismicCartAndOrder} />
              </div>

              <div className={classes.orderingFieldWrapper}>
                <RecipientData prismicCartAndOrder={data.prismicCartAndOrder} />
              </div>
            </div>

            <div className={classes.priceBlockWrapper}>
              <PriceBlock orderingPage products={productsInCart} />
            </div>
          </Grid>

          <div
            className={classes.disclaimer}
            dangerouslySetInnerHTML={{
              __html: data.prismicCartAndOrder.data.disclaimer.text
                .split("\n")
                .join("<br>"),
            }}
          />

          <Typography className={classes.supportText}>
            {data.prismicCartAndOrder.data.title_support}
          </Typography>

          <a
            href={`tel:${data.prismicCartAndOrder.data.phone_support}`}
            className={classes.supportText}
          >
            {data.prismicCartAndOrder.data.phone_support}
          </a>
        </OrderingContext>
      )}
    </Layout>
  )
}

/**
 * Страница оформления заказа
 * @module src/page/ordering
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.data - объект данных полученый из prismic
 */
export default IndexPage

export const query = graphql`
  {
    prismicCartAndOrder {
      data {
        title_support
        phone_support
        disclaimer {
          text
        }
        sticker {
          alt
          localFile {
            childImageSharp {
              gatsbyImageData(height: 40)
            }
          }
        }
        description_standart
        description_express
        time_standart {
          range
        }
        description_card
        description_getting
        credit_partners {
          url
        }
        installment_plan_partners {
          url
        }
      }
    }
  }
`
