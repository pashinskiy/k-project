import React from "react"
import { makeStyles, Grid, Typography, Divider } from "@material-ui/core"
import { graphql } from "gatsby"
import { GlobalStateContext } from "../context/GlobalContextProvider"
import Seo from "../components/seo"
import OrderConfirmedIcon from "../../static/svg/orderConfirmedIcon.svg"
import HeaderWithIcon from "../components/headers/headerWithIcon"
import OrderCard from "../components/cart/orderCard"
import Layout from '../components/layout'

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
    "@media(max-width: 414px)": {
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
    "@media(max-width: 414px)": {
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
    "@media(max-width: 414px)": {
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
    "@media(max-width: 414px)": {
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
    "@media(max-width: 414px)": {
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
    "@media(max-width: 414px)": {
      marginBottom: "3.8647vw",
    },
    "&:nth-last-child(1)": {
      marginBottom: 0,
    }
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
    "@media(max-width: 414px)": {
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
    "@media(max-width: 414px)": {
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
    "@media(max-width: 414px)": {
      marginTop: "2.8985vw",
    },
  }
}))

const IndexPage = ({ data }) => {
  const classes = useStyle()

  const state = React.useContext(GlobalStateContext)
  const productsInCart = data.allPrismicProduct.edges
    .filter(edge => !!state.inCart(edge.node.id))
    .map(edge => edge.node)
    .map(obj => ({ ...obj, count: state.inCart(obj.id) }))

  let allCost = 0 
  productsInCart.map(item => allCost += item.data.price)

  const orderData = [
    {
      name: "Номер заказа: ",
      value: "#877 780",
    },
    {
      name: "Способ оплаты: ",
      value: "при получении",
    },
    {
      name: "Адрес доставки: ",
      value: "г.Санкт-Петербург, проспект Барклая, д.8, кв. 101",
    },
    {
      name: "Дата и время доставки: ",
      value: "Сегодня 18/05/1999, с 12:00 до 13:00",
    },
    {
      name: "Имя получателя: ",
      value: "Елизавета",
    },
    {
      name: "Телефон получателя: ",
      value: "8-999-333-34-45",
    },
  ]

  return (
    <Layout>
      <Seo title="Корзина" />
      <HeaderWithIcon
        title="Заказ подтверждён"
        icon={<OrderConfirmedIcon />}
      />
      <Divider />
      {!!productsInCart.length ? (
        <>
          <div className={classes.orderInfoContainer}>
            {orderData.map(item => (
              <div className={classes.orderDataWrapper}>
                <Typography className={classes.titleOrderName + " " + classes.title}>
                  {item.name}
                </Typography>
                <Typography className={classes.titleOrderValue + " " + classes.title}>
                  {item.value}
                </Typography>
              </div>
            ))}
          </div>
          <Divider />

          <Grid container className={classes.productContainer}>
            {productsInCart.map(item => (
              <OrderCard product={item} />
            ))}
          </Grid>

          <Divider />
          <Typography className={classes.titleAllCost + " " + classes.title}>
            Итого: {allCost} &#8381;
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
        </>
      ) : null}
    </Layout>
  )
}
export default IndexPage

export const query = graphql`
  {
    allPrismicProduct {
      edges {
        node {
          id
          uid
          data {
            name
            price
            old_price
            images {
              image {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
            delivery {
              document {
                ... on PrismicDelivery {
                  data {
                    body {
                      ... on PrismicDeliveryBodyDeliveryToCities {
                        id
                        items {
                          city_name
                          cost
                          delivery_description
                          timing
                        }
                      }
                    }
                    variants {
                      description
                      name
                    }
                  }
                }
              }
            }
            credit {
              document {
                ... on PrismicCredit {
                  data {
                    months_1
                    months_2
                    percent
                  }
                }
              }
            }
          }
        }
      }
    }
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
