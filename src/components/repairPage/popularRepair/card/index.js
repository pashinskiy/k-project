import React from "react"
import { makeStyles, Typography, useMediaQuery } from "@material-ui/core"
import { GatsbyImage } from "gatsby-plugin-image"
import ButtonAddInCart from "./buttonAddInCart"

const useStyle = makeStyles(theme => ({
  wrapper: {
    position: "relative",

    overflow: "hidden",
    WebkitBackfaceVisibility: "hidden",
    MozBackfaceVisibility: "hidden",
    WebkitTransform: "translate3d(0, 0, 0)",
    MozTransform: "translate3d(0, 0, 0)",

    display: "inline-block",
    background: theme.palette.background.main,

    borderRadius: "0.78vw",
    padding: "0.78vw",
    paddingBottom: "10.85vw",
    "@media(min-width: 1280px)": {
      borderRadius: 10,
      padding: 10,
      paddingBottom: 139,
    },
    "@media(max-width: 1025px)": {
      borderRadius: "1.19vw",
      padding: "1.19vw",
      paddingBottom: "16.66vw",
    },
    "@media(max-width: 767px)": {
      borderRadius: "2.41vw",
      padding: "2.41vw",
      paddingBottom: "33.57vw",
      border: `1px solid ${theme.palette.background.secondary}`,
    },
  },
  wrapper_price: {
    display: "flex",
    alignItems: "flex-end",
  },
  price_text_accent: {
    ...theme.typography.body2,
    fontWeight: 700,
    lineHeight: 1.21,

    fontSize: "1.56vw",
    "@media(min-width: 1280px)": {
      fontSize: 20,
    },
    "@media(max-width: 1025px)": {
      fontSize: "2.39vw",
    },
    "@media(max-width: 767px)": {
      fontSize: "4.83vw",
    },
  },
  price_text_through: {
    fontWeight: 400,
    lineHeight: 1.21,
    color: "#838383",
    textDecoration: "line-through",

    marginLeft: "0.62vw",
    fontSize: "0.93vw",
    "@media(min-width: 1280px)": {
      marginLeft: 8,
      fontSize: 12,
    },
    "@media(max-width: 1025px)": {
      marginLeft: "0.95vw",
      fontSize: "1.43vw",
    },
    "@media(max-width: 767px)": {
      marginLeft: "1.93vw",
      fontSize: "2.89vw",
    },
  },
  wrapper_services: {
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap",

    marginTop: "0.46vw",
    marginLeft: "-0.31vw",
    "@media(min-width: 1280px)": {
      marginTop: 6,
      marginLeft: -4,
    },
    "@media(max-width: 1025px)": {
      marginTop: "0.71vw",
      marginLeft: "-0.47vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "1.44vw",
      marginLeft: "-0.96vw",
    },
  },
  badge_wrapper: {
    background: theme.palette.background.brandLight,

    marginLeft: "0.31vw",
    borderRadius: "0.93vw",
    padding: "0.54vw 0.78vw",
    "@media(min-width: 1280px)": {
      marginLeft: 4,
      borderRadius: 12,
      padding: "7px 10px",
    },
    "@media(max-width: 1025px)": {
      marginLeft: "0.47vw",
      borderRadius: "1.43vw",
      padding: "0.83vw 1.19vw",
    },
    "@media(max-width: 767px)": {
      marginLeft: "0.96vw",
      borderRadius: "2.89vw",
      padding: "1.69vw 2.41vw",
    },
  },
  badge_text: {
    ...theme.typography.body2,
    fontWeight: 400,
    lineHeight: 1.5,

    fontSize: "0.93vw",
    "@media(min-width: 1280px)": {
      fontSize: 12,
    },
    "@media(max-width: 1025px)": {
      fontSize: "1.43vw",
    },
    "@media(max-width: 767px)": {
      fontSize: "2.89vw",
    },
  },

  image: {
    position: "absolute",
    right: 0,
    bottom: 0,

    width: "16.48vw",
    height: "10.07vw",
    "@media(min-width: 1280px)": {
      width: 211,
      height: 129,
    },
    "@media(max-width: 1025px)": {
      width: "25.29vw",
      height: "15.46vw",
    },
    "@media(max-width: 767px)": {
      width: "50.96vw",
      height: "31.15vw",
    },
  },
}))

/**
 * Карточка популярного ремонта со страницы ремонта
 * @module src/components/repairPage/popularRepair
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.repair - объект ремонта
 */
export default function Card({ repair }) {
  const classes = useStyle()

  const oldPrice = repair.data.old_price
  const price = repair.data.price
  const category = repair.data.category
  const service = repair.data.services[0].primary.name
  const image = repair.data.imageForPopular

  // преобразуем цену
  function priceMod(value) {
    let price = "" + value
    let length = price.length
    for (let i = 1; i < length; i++) {
      if (i % 3 === 0) {
        price = price.slice(0, length - i) + " " + price.slice(length - i)
      }
    }
    return price
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapper_price}>
        <Typography className={classes.price_text_accent}>
          {priceMod(price)}
        </Typography>

        {oldPrice ? (
          <Typography className={classes.price_text_through}>
            {priceMod(oldPrice)}
          </Typography>
        ) : null}
      </div>

      <div className={classes.wrapper_services}>
        <div className={classes.badge_wrapper}>
          <Typography className={classes.badge_text}>{category}</Typography>
        </div>

        <div className={classes.badge_wrapper}>
          <Typography className={classes.badge_text}>{service}</Typography>
        </div>
      </div>

      <ButtonAddInCart text="В корзину" repair={repair} />

      <GatsbyImage
        image={image?.localFile?.childImageSharp?.gatsbyImageData}
        alt={image?.alt ?? "photo"}
        className={classes.image}
        imgStyle={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
    </div>
  )
}
