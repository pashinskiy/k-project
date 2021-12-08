import React from "react"
import { graphql } from "gatsby"
import { makeStyles, Grid, Typography } from "@material-ui/core"
import Layout from "../components/layout"

import {
  GlobalStateContext,
  GlobalDispatchContext,
} from "../context/GlobalContextProvider"

import Seo from "../components/seo"
import HeaderWithIcon from "../components/headers/headerWithIcon"
import CartIcon from "../../static/svg/cart.svg"
import PriceBlock from "../components/cartPage/priceBlock"
import Card from "../components/cartPage/card"
import CardRequest from "../components/cartPage/cardRequest"

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
  cardsWrapper: {
    width: "56.32vw",
    "@media(min-width: 1280px)": {
      width: "721px",
    },
    "@media(max-width: 1025px)": {
      width: "100%",
    },
  },
  cardWrapper: {
    marginTop: "1.56vw",
    "@media(min-width: 1280px)": {
      marginTop: "20px",
    },
    "@media(max-width: 1025px)": {
      marginTop: "2.39vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "3.86vw",
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
      width: "100%",
      order: -1,
      // position: "fixed",
      // left: 0,
      // bottom: 62,
      // width: "100vw",
      // zIndex: 99,
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

  const state = React.useContext(GlobalStateContext)
  const dispatch = React.useContext(GlobalDispatchContext)
  const countProducts = state.cart.length ? state.cart.length : "0"

  React.useEffect(() => {
    if (!state.cart.length) return

    const urlCheckPrice = "https://admin.krypton.ru/api/product/get-price"
    const headers = new Headers()
    headers.append("Content-Type", "application/json")

    const body = JSON.stringify({
      products: state.cart.map(item => item.product.uid),
    })

    const init = {
      method: "POST",
      headers,
      body,
    }

    fetch(urlCheckPrice, init)
      .then(res => res.json())
      .then(res => {
        state.cart
          .filter(
            item =>
              res.products[item.product.uid] !== null || item.product.repair
          )
          .forEach(item => {
            if (item.product.repair) return
            item.product.data.price = res.products[item.product.uid]
          })

        console.log(state.cart)

        dispatch({ type: "UPD_CART", payload: state.cart })
      })
  }, [])

  const word = (() => {
    switch (countProducts) {
      case 1:
        return "товар"
      case 2:
      case 3:
      case 4:
        return "товара"
      default:
        return "товаров"
    }
  })()

  const productsInCart = state.cart.map(item => item.product)

  return (
    <Layout>
      <Seo title="Корзина" />
      <HeaderWithIcon
        icon={<CartIcon />}
        title={`В корзине ${state.cart.length} ${word}`}
      />

      {!!productsInCart.length ? (
        <>
          <Grid
            container
            justify="space-between"
            className={classes.mainBlockWrapper}
          >
            <Grid container direction="column" className={classes.cardsWrapper}>
              {productsInCart.map(product =>
                product.repair ? (
                  <div key={product.id} className={classes.cardWrapper}>
                    <CardRequest repair={product} />
                  </div>
                ) : (
                  <div key={product.id} className={classes.cardWrapper}>
                    <Card product={product} />
                  </div>
                )
              )}
            </Grid>

            <div className={classes.priceBlockWrapper}>
              <PriceBlock products={productsInCart} />
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
        </>
      ) : null}
    </Layout>
  )
}

/**
 * Страница корзины покупок
 * @module src/page/cart
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
      }
    }
  }
`
