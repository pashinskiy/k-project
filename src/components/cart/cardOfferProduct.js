import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Button, Typography } from "@material-ui/core"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import ButtonAddCart from "../button/addInCartAndFav/buttonAddCart"

import { GlobalStateContext } from "../../context/GlobalContextProvider"
import OfferAddedButtonIcon from "../../../static/svg/offerAddedButtonIcon.svg"

const useStyles = makeStyles(theme => ({
  accessoriesRoot: {
    marginBottom: "2.1875vw",
    marginRight: "2.1875vw",
    width: "19.53125vw",
    "@media(min-width: 1280px)": {
      width: "250px",
      marginBottom: "28px",
      marginRight: "28px",
    },
    "@media(max-width: 834px)": {
      width: "29.976vw",
      marginBottom: "3.3573vw",
      marginRight: "3.3573vw",
    },
    "@media(max-width: 414px)": {
      width: "37.198vw",
      marginBottom: "6.7632vw",
      marginRight: "4.8309vw",
    },

    "&:nth-of-type(2n)": {
      marginRight: 0,
    },
  },

  productImageContainer: {
    background: theme.palette.background.main,
    height: "15.625vw",
    padding: "0.390625vw",
    borderRadius: "0.9375vw",
    overflow: "hidden",
    WebkitBackfaceVisibility: 'hidden',
    MozBackfaceVisibility: 'hidden',
    WebkitTransform: 'translate3d(0, 0, 0)',
    MozTransform: 'translate3d(0, 0, 0)',
    marginBottom: "1.914vw",
    "@media(min-width: 1280px)": {
      height: "200px",
      padding: "5px",
      borderRadius: "12px",
      marginBottom: "24.5px",
    },
    "@media(max-width: 834px)": {
      height: "23.98vw",
      padding: "0.5995vw",
      borderRadius: "1.4388vw",
      marginBottom: "2.9376vw",
    },
    "@media(max-width: 414px)": {
      height: "37.198vw",
      padding: "1.2077vw",
      borderRadius: "2.8985vw",
      marginBottom: "2.898vw",
    },
  },
  accessoriesPrice: {
    color: theme.palette.color.main,
    fontWeight: 700,
    marginBottom: "0.625vw",
    fontSize: "1.5625vw",
    lineHeight: "1.875vw",
    "@media(min-width: 1280px)": {
      marginBottom: "8px",
      fontSize: 20,
      lineHeight: "24px",
    },
    "@media(max-width: 834px)": {
      marginBottom: "0.9592vw",
      fontSize: "2.398vw",
      lineHeight: "2.8776vw",
    },
    "@media(max-width: 414px)": {
      marginBottom: "1.9323vw",
      fontSize: "4.8309vw",
      lineHeight: "5.797vw",
    },
  },
  accessoriesTitle: {
    lineHeight: "1.328125vw",
    fontSize: "1.09375vw",
    "@media(min-width: 1280px)": {
      lineHeight: "17px",
      fontSize: 14,
    },
    "@media(max-width: 834px)": {
      lineHeight: "2.0383vw",
      fontSize: "1.6786vw",
    },
    "@media(max-width: 414px)": {
      lineHeight: "4.1062vw",
      fontSize: "3.3816vw",
    },
  },
  titlesConteiner: {
    marginBottom: "1.914vw",
    width: "15.625vw",
    "@media(min-width: 1280px)": {
      marginBottom: "24.5px",
      width: "200px",
    },
    "@media(max-width: 834px)": {
      width: "23.98vw",
      marginBottom: "2.9376vw",
    },
    "@media(max-width: 414px)": {
      width: "37.198vw",
      marginBottom: "2.898vw",
    },
  },
  buttonAdded: {
    width: "100%",
    height: "3.90625vw",
    fontSize: "1.09375vw",
    borderRadius: "0.9375vw",
    "@media(min-width: 1280px)": {
      height: "50px",
      fontSize: "14px",
      borderRadius: "12px",
    },
    "@media(max-width: 834px)": {
      height: "5.9952vw",
      fontSize: "1.6786vw",
      borderRadius: "1.4388vw",
    },
    "@media(max-width: 414px)": {
      width: "99.6%",
      height: "9.6618vw",
      fontSize: "3.3816vw",
      borderRadius: "2.8985vw",
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

  buttonAddCart: {
    "& p": {
      fontSize: "1.09375vw",
      "@media(min-width: 1280px)": {
        fontSize: "14px",
      },
      "@media(max-width: 834px)": {
        fontSize: "1.6786vw",
      },
      "@media(max-width: 414px)": {
        fontSize: "3.3816vw",
      },
    },
  },
  iconOfferAdded: {
    width: "1.328125vw",
    height: "1.328125vw",
    marginRight: "0.78125vw",
    "@media(min-width: 1280px)": {
      width: "17px",
      height: "17px",
      marginRight: "10px",
    },
    "@media(max-width: 834px)": {
      width: "2.03836vw",
      height: "2.03836vw",
      marginRight: "1.199vw",
    },
    "@media(max-width: 414px)": {
      width: "4.1062vw",
      height: "4.1062vw",
      marginRight: "2.41545vw",
    },
  },
}))

export default function CardOfferProduct({ accessory }) {
  const classes = useStyles()
  const accessoryItem = accessory.product_accessories.document

  const state = React.useContext(GlobalStateContext)
  const inCart = !!state.inCart(accessoryItem.id)

  return (
    // <Grid item className={classes.accessoriesRoot}>
    <>
      <Link
        to={`/${accessoryItem.uid}/`}
        key={accessoryItem.uid}
        style={{ textDecoration: "none" }}
      >
        <GatsbyImage
          image={
            accessoryItem?.data.images[0].image.localFile.childImageSharp
              .gatsbyImageData
          }
          alt={
            accessoryItem?.data.images[0].image.alt
              ? accessoryItem.data.images[0].image.alt
              : "accessory-image-" + accessoryItem.uid
          }
          className={classes.productImageContainer}
          //высота и ширина для отступа от контейнера
          imgStyle={{
            objectFit: "contain",
            // height: "95%",
            // width: "95%",
            margin: "auto",
          }}
        />
        <div className={classes.titlesConteiner}>
          <Typography className={classes.accessoriesPrice}>
            {accessoryItem?.data.price} &#8381;
          </Typography>
          <Typography variant="body2" className={classes.accessoriesTitle}>
            {accessoryItem?.data.name}
          </Typography>
        </div>
      </Link>
      {inCart ? (
        <Button className={classes.buttonAdded}>
          <OfferAddedButtonIcon className={classes.iconOfferAdded} />
          Добавлено
        </Button>
      ) : (
        <ButtonAddCart
          product={accessoryItem}
          text="Добавить"
          iconPlus={true}
          variant="offerPage"
          className={classes.buttonAddCart}
        />
      )}
      {/* // </Grid> */}
    </>
  )
}
