import React from "react"
import { makeStyles, Grid, Typography, Divider } from "@material-ui/core"
import { graphql } from "gatsby"
import {
  GlobalStateContext,
  GlobalDispatchContext,
} from "../context/GlobalContextProvider"
import Seo from "../components/seo"
import OrderConfirmedIcon from "../../static/svg/orderConfirmedIcon.svg"
import HeaderWithIcon from "../components/headers/headerWithIcon"
import OrderCard from "../components/cart/orderCard"
import Layout from "../components/layout"

const useStyle = makeStyles(theme => ({
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
  title: {
    fontSize: "1.875vw",
    lineHeight: "2.2695vw",
    "@media(min-width: 1280px)": {
      fontSize: 24,
      lineHeight: "29.05px",
    },
    "@media(max-width: 1025px)": {
      fontSize: "2.8776vw",
      lineHeight: "3.4832vw",
    },
    "@media(max-width: 767px)": {
      fontSize: "3.38164vw",
      lineHeight: "4.0917vw",
    },
  },
  titleOrderName: {
    color: theme.palette.color.main,
    width: "19.53125vw",
    marginRight: "4.6875vw",
    "@media(min-width: 1280px)": {
      width: "250px",
      marginRight: "60px",
    },
    "@media(max-width: 1025px)": {
      width: "29.976vw",
      marginRight: "7.1942vw",
    },
    "@media(max-width: 767px)": {
      width: "39.85507vw",
      marginRight: "1.93236vw",
    },
  },
  titleOrderValue: {
    color: theme.palette.color.main,
    fontWeight: 700,
    width: "29.2968vw",
    "@media(min-width: 1280px)": {
      width: "375px",
    },
    "@media(max-width: 1025px)": {
      width: "44.964vw",
    },
    "@media(max-width: 767px)": {
      width: "55.314vw",
    },
  },
  orderDataWrapper: {
    display: "flex",
    marginBottom: "1.25vw",
    "@media(min-width: 1280px)": {
      marginBottom: "16px",
    },
    "@media(max-width: 1025px)": {
      marginBottom: "1.9184vw",
    },
    "@media(max-width: 767px)": {
      marginBottom: "3.8647vw",
    },
    "&:nth-last-child(1)": {
      marginBottom: 0,
    },
  },
  orderInfoContainer: {
    width: "62.5vw",
    margin: "2.1875vw 0",
    "@media(min-width: 1280px)": {
      width: "800px",
      margin: "28px 0",
    },
    "@media(max-width: 1025px)": {
      width: "95.9232vw",
      margin: "3.3573vw 0",
    },
    "@media(max-width: 767px)": {
      width: "100%",
      margin: "6.76328vw 0",
    },
  },
  titleAllCost: {
    fontWeight: 700,
    textAlign: "right",

    width: "51.5625vw",
    marginTop: "1.25vw",
    "@media(min-width: 1280px)": {
      width: "660px",
      marginTop: "16px",
    },
    "@media(max-width: 1025px)": {
      width: "79.13669vw",
      marginTop: "1.9184vw",
    },
    "@media(max-width: 767px)": {
      width: "100%",
      marginTop: "1.9323vw",
    },
  },
  productContainer: {
    marginTop: "0.9375vw",
    "@media(min-width: 1280px)": {
      marginTop: "12px",
    },
    "@media(max-width: 1025px)": {
      marginTop: "1.4388vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "2.8985vw",
    },
  },
}))

const IndexPage = ({ data }) => {
  const classes = useStyle()

  const state = React.useContext(GlobalStateContext)
  const stateDispatch = React.useContext(GlobalDispatchContext)

  const [orderData, setOrderData] = React.useState(null)

  const order_number = JSON.parse(localStorage.getItem("order_number"))

  const productsInCart = state.allPrismicProduct.edges
    .filter(edge => !!state.inCart(edge.node.id))
    .map(edge => edge.node)
    .map(obj => ({ ...obj, count: state.inCart(obj.id) }))

  // преобразуем цену
  function priceMod(value) {
    let price = value.slice(0, -3)
    let length = price.length
    for (let i = 1; i < length; i++) {
      if (i % 3 === 0) {
        price = price.slice(0, length - i) + " " + price.slice(length - i)
      }
    }
    return price
  }

  React.useEffect(() => {
    fetch(`https://admin.krypton.ru/api/order/?id=${order_number}`)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setOrderData(res)
      })

    return () => {
      // localStorage.removeItem("order_data")
      // localStorage.removeItem("customer_credentials")
      localStorage.removeItem("cart")
      stateDispatch({ type: "CLEAN_CART" })
    }
  }, [])

  const orderInfo = []

  if (orderData !== null)
    orderInfo.push(
      {
        name: "Статус заказа: ",
        value: orderData.payment.status_comment,
      },
      {
        name: "Способ оплаты: ",
        value: orderData.payment.payment_type,
      },
      {
        name: "Адрес доставки: ",
        value: orderData.customer.address,
      },
      {
        name: "Дата и время доставки: ",
        value: `${orderData.order.delivery_date} с ${orderData.order.delivery_time_from} до ${orderData.order.delivery_time_to}`,
      },
      {
        name: "Имя получателя: ",
        value: orderData.customer.name,
      },
      {
        name: "Телефон получателя: ",
        value: orderData.customer.phone,
      }
    )

  return orderData !== null ? (
    <Layout>
      <Seo title="Корзина" />
      <HeaderWithIcon
        title={`Заказ №${order_number}`}
        icon={<OrderConfirmedIcon />}
      />
      <Divider />
      <div className={classes.orderInfoContainer}>
        {orderInfo.map(item => (
          <div className={classes.orderDataWrapper}>
            <Typography
              className={classes.titleOrderName + " " + classes.title}
            >
              {item.name}
            </Typography>
            <Typography
              className={classes.titleOrderValue + " " + classes.title}
            >
              {item.value}
            </Typography>
          </div>
        ))}
      </div>
      <Divider />

      {productsInCart.length ? (
        <Grid container className={classes.productContainer}>
          {productsInCart.map(item => (
            <OrderCard product={item} />
          ))}
        </Grid>
      ) : (
        <Grid container className={classes.productContainer}>
          {orderData.order.products.map(product => (
            <OrderCard
              product={{
                count: product.quantity,
                data: { name: product.name, price: product.price },
              }}
            />
          ))}
        </Grid>
      )}

      <Divider />
      <Typography className={classes.titleAllCost + " " + classes.title}>
        Итого: {priceMod(orderData.order.totalSumm)} &#8381;
      </Typography>

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
    </Layout>
  ) : null
}
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
