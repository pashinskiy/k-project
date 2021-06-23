import React from "react"
import Card from "@material-ui/core/Card"
import { makeStyles } from "@material-ui/core/styles"
import {
  Button,
  Grid,
  Typography,
} from "@material-ui/core"
import CartIcon from "../../../static/svg/cartIcon.svg"
import { GatsbyImage } from "gatsby-plugin-image"
import CardOfferProduct from "./cardOfferProduct"

const useStyles = makeStyles(theme => ({
  cardRoot: {
    boxShadow: "none",
    backgroundColor: theme.palette.background.secondary,
    width: "49.2968vw",
    padding: "1.875vw",
    borderRadius: "1.5625vw",
    marginBottom: "40px",
    "@media(min-width: 1280px)": {
      width: "631px",
      padding: "24px",
      borderRadius: "20px",
    },
    "@media(max-width: 834px)": {
      width: "75.659vw",
      padding: "2.8776vw",
      borderRadius: "2.398vw",
    },
    "@media(max-width: 414px)": {
      width: "90.8212vw",
      padding: "5.797vw",
      borderRadius: "4.8309vw",
    },
  },
  headerWrapper: {
    display: "inline-flex",
    marginBottom: "2.1875vw",
    "@media(min-width: 1280px)": {
      marginBottom: "28px",
    },
    "@media(max-width: 834px)": {
      marginBottom: "3.3573vw",
    },
    "@media(max-width: 414px)": {
      marginBottom: "4.8309vw",
    },
  },
  cardHeaderTitle: {
    fontWeight: 700,
    color: theme.palette.color.main,
    fontSize: "2.8125vw",
    marginLeft: "0.9375vw",
    "@media(min-width: 1280px)": {
      fontSize: "36px",
      marginLeft: "12px",
    },
    "@media(max-width: 834px)": {
      fontSize: "4.3165vw",
      marginLeft: "1.4388vw",
    },
    "@media(max-width: 414px)": {
      fontSize: "3.8647vw",
      marginLeft: "2.8985vw",
    },
  },
  cartIcon: {
    alignSelf: "center",
    width: "3.125vw",
    height: "3.125vw",
    "@media(min-width: 1280px)": {
      width: "40px",
      height: "40px",
    },
    "@media(max-width: 834px)": {
      width: "4.796vw",
      height: "4.796vw",
    },
    "@media(max-width: 414px)": {
      width: "5.797vw",
      height: "5.797vw",
    },
  },
  productInfoWrapper: {
    display: "flex",
    marginBottom: "0.9375vw",
    "@media(min-width: 1280px)": {
      marginBottom: "12px",
    },
    "@media(max-width: 834px)": {
      marginBottom: "1.4388vw",
    },
    "@media(max-width: 414px)": {
      marginBottom: "2.8985vw",
    },
  },
  productImageContainer: {
    background: theme.palette.background.main,
    minWidth: "19.53125vw",
    width: "19.53125vw",
    height: "15.625vw",
    padding: "0.390625vw",
    borderRadius: "0.9375vw",
    "@media(min-width: 1280px)": {
      minWidth: "250px",
      width: "250px",
      height: "200px",
      padding: "5px",
      borderRadius: "12px",
    },
    "@media(max-width: 834px)": {
      minWidth: "29.976vw",
      width: "29.976vw",
      height: "23.98vw",
      padding: "0.5995vw",
      borderRadius: "1.4388vw",
    },
    "@media(max-width: 414px)": {
      minWidth: "24.154vw",
      width: "24.154vw",
      height: "24.154vw",
      padding: "1.2077vw",
      borderRadius: "2.8985vw",
    },
  },
  productTitle: {
    fontWeight: 700,
    fontSize: "1.875vw",
    marginBottom: "1.0546875vw",
    lineHeight: "2.265625vw",
    "@media(min-width: 1280px)": {
      fontSize: 24,
      marginBottom: "13.5px",
      lineHeight: "29px",
    },
    "@media(max-width: 834px)": {
      fontSize: "2.87769vw",
      marginBottom: "1.6187vw",
      lineHeight: "3.4772vw",
    },
    "@media(max-width: 414px)": {
      fontSize: "3.3816vw",
      marginBottom: "2.4154vw",
      lineHeight: "4.10628vw",
    },
  },
  productTextContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: "1.25vw",
    "@media(min-width: 1280px)": {
      marginLeft: "16px",
    },
    "@media(max-width: 834px)": {
      marginLeft: "1.9184vw",
    },
    "@media(max-width: 414px)": {
      marginLeft: "3.8647vw",
    },
  },
  costContainer: {
    marginLeft: "0",
    marginRight: "auto",
  },
  costMain: {
    fontWeight: 700,
    fontSize: "1.5625vw",
    "@media(min-width: 1280px)": {
      fontSize: 20,
    },
    "@media(max-width: 834px)": {
      fontSize: "2.398vw",
    },
    "@media(max-width: 414px)": {
      fontSize: "3.3816vw",
    },
  },
  costOld: {
    textDecoration: "line-through",
    textAlign: "end",
    color: theme.palette.color.secondaryLight,
    fontSize: "0.9375vw",
    "@media(min-width: 1280px)": {
      fontSize: 12,
    },
    "@media(max-width: 834px)": {
      fontSize: "1.4388vw",
    },
    "@media(max-width: 414px)": {
      fontSize: "2.8985vw",
    },
  },
  buttonContainer: {
    width: "100%",
    display: "flex",
  },
  buttonCheckout: {
    padding: 0,
    background: theme.palette.background.accent,
    textTransform: "none",
    color: "#ffffff",
    lineHeight: 1.21,
    fontWeight: 700,
    width: "19.84375vw",
    borderRadius: "0.93vw",
    height: "3.90625vw",
    fontSize: "1.09375vw",
    "@media(min-width: 1280px)": {
      borderRadius: "12px",
      width: "254px",
      height: "50px",
      fontSize: "14px",
    },
    "@media(max-width: 834px)": {
      borderRadius: "1.4388vw",
      width: "30.455vw",
      height: "5.9952vw",
      fontSize: "1.6786vw",
    },
    "@media(max-width: 414px)": {
      fontSize: "3.3816vw",
      borderRadius: "2.8985vw",
      height: "9.661vw",
      width: "32.367vw",
    },
    "&:hover": {
      background: theme.palette.background.accent,
    },
  },
  buttonContinue: {
    width: "auto",
    height: "auto",
    flexGrow: "1",

    fontSize: "1.09375vw",
    borderRadius: "0.9375vw",
    marginRight: "0.390625vw",
    "@media(min-width: 1280px)": {
      fontSize: "14px",
      borderRadius: "12px",
      marginRight: "5px",
    },
    "@media(max-width: 834px)": {
      fontSize: "1.6786vw",
      borderRadius: "1.4388vw",
      marginRight: "0.5995vw",
    },
    "@media(max-width: 414px)": {
      fontSize: "3.3816vw",
      borderRadius: "2.8985vw",
      marginRight: "1.2077vw",
    },
    fontWeight: 700,
    //градиент бордер
    border: "solid 1px transparent",
    backgroundImage:
      "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(180deg, #291AD5 0%, #681DE1 100%)",
    backgroundOrigin: "border-box",
    backgroundClip: "content-box, border-box",
    boxShadow: "1px 1000px 1px #EFEFF2 inset",
    //градиент текст
    "& span": {
      background: "-webkit-linear-gradient(270deg, #291AD5 0%, #681DE1 100%)",
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
    },
  },

  offerTitle: {
    fontWeight: 700,
    color: theme.palette.color.main,
    textAlign: "center",
    fontSize: "1.875vw",
    marginBottom: "2.1875vw",
    lineHeight: "2.265625vw",
    "@media(min-width: 1280px)": {
      fontSize: "24px",
      marginBottom: "28px",
      lineHeight: "29px",
    },
    "@media(max-width: 834px)": {
      fontSize: "2.877vw",
      marginBottom: "3.3573vw",
      lineHeight: "3.4772vw",
    },
    "@media(max-width: 414px)": {
      fontSize: "3.8647vw",
      marginBottom: "6.7632vw",
      lineHeight: "4.5893vw",
    },
  },
}))

export default function ProductAddedCard({ product, closeDialog }) {
  const classes = useStyles()
  const image =
    product.data.images[0]?.image?.localFile?.childImageSharp.gatsbyImageData
  const accessoriesArray = product.data.all_product_accessories

  return (
    <>
        <Card className={classes.cardRoot}>
          <div className={classes.headerWrapper}>
            <CartIcon className={classes.cartIcon} />
            <Typography className={classes.cardHeaderTitle}>
              Товар добавлен в корзину
            </Typography>
          </div>
          <div className={classes.productInfoWrapper}>
            <GatsbyImage
              image={image}
              alt="product-image"
              className={classes.productImageContainer}
              //высота и ширина для отступа от контейнера
              imgStyle={{
                objectFit: "contain",
                height: "95%",
                width: "95%",
                margin: "auto",
              }}
            />

            <div className={classes.productTextContainer}>
              <Typography variant="body2" className={classes.productTitle}>
                {product.data.name}
              </Typography>
              <div className={classes.costContainer}>
                <Typography className={classes.costMain}>
                  {product.data.price} &#8381;
                </Typography>
                <Typography className={classes.costOld}>
                  {product.data.old_price} &#8381;
                </Typography>
              </div>
            </div>
          </div>
          <div className={classes.buttonContainer}>
            <Button
              onClick={e => closeDialog()}
              className={classes.buttonContinue}
            >
              Продолжить покупки
            </Button>
            {/* TODO: Добавить ссылку на страницу оформления */}
            <Button href="#" className={classes.buttonCheckout}>
              Оформить
            </Button>
          </div>
        </Card>
        {accessoriesArray?.length !== 0 ? (
          <Card className={classes.cardRoot}>
            <Typography className={classes.offerTitle}>
              Добавьте аксессуар в комплект
            </Typography>
            <Grid container className={classes.accessoriesContainer}>
              {accessoriesArray.map(accessory => (
                <CardOfferProduct
                  accessory={accessory}
                  key={accessory.product_accessories.document?.uid + "-offer"}
                />
              ))}
            </Grid>
          </Card>
        ) : null}
    </>
  )
}
