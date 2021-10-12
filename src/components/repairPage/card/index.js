import React from "react"
import { makeStyles, Typography, useMediaQuery } from "@material-ui/core"
import { GatsbyImage } from "gatsby-plugin-image"

const useStyle = makeStyles(theme => ({
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    marginTop: "1.56vw",
    "@media(min-width: 1280px)": {
      marginTop: 20,
    },
    "@media(max-width: 1025px)": {
      marginTop: "2.39vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "10.62vw",
    },

    "&:first-child": {
      marginTop: 0,
    },
  },
  image: {
    width: "7.81vw",
    height: "7.81vw",
    "@media(min-width: 1280px)": {
      width: 100,
      height: 100,
    },
    "@media(max-width: 1025px)": {
      width: "11.99vw",
      height: "11.99vw",
    },
    "@media(max-width: 767px)": {
      width: "24.15vw",
      height: "24.15vw",
    },
  },
  wrapper_bages: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",

    width: "21.71vw",
    "@media(min-width: 1280px)": {
      width: 278,
    },
    "@media(max-width: 1025px)": {
      width: "33.33vw",
    },
    "@media(max-width: 767px)": {
      width: "59.9vw",
    },
  },
  wrapper_services: {
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap",

    marginLeft: "-0.31vw",
    "@media(min-width: 1280px)": {
      marginLeft: -4,
    },
    "@media(max-width: 1025px)": {
      marginLeft: "-0.47vw",
    },
    "@media(max-width: 767px)": {
      marginLeft: "-0.96vw",
    },

    "& > *": {
      marginTop: "0.31vw",
      marginLeft: "0.31vw",
      "@media(min-width: 1280px)": {
        marginTop: 4,
        marginLeft: 4,
      },
      "@media(max-width: 1025px)": {
        marginTop: "0.47vw",
        marginLeft: "0.47vw",
      },
      "@media(max-width: 767px)": {
        marginTop: "0.96vw",
        marginLeft: "0.96vw",
      },
    },
  },
  badge_wrapper: {
    background: theme.palette.background.brandLight,

    borderRadius: "0.93vw",
    padding: "0.54vw 0.78vw",
    "@media(min-width: 1280px)": {
      borderRadius: 12,
      padding: "7px 10px",
    },
    "@media(max-width: 1025px)": {
      borderRadius: "1.43vw",
      padding: "0.83vw 1.19vw",
    },
    "@media(max-width: 767px)": {
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
  wrapper_price: {
    display: "flex",
    alignItems: "flex-end",

    flexDirection: "column",
    "@media(max-width: 767px)": {
      flexDirection: "row-reverse",
      marginBottom: "0.96vw",
    },
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

    marginTop: "0.31vw",
    fontSize: "0.93vw",
    "@media(min-width: 1280px)": {
      marginTop: 4,
      fontSize: 12,
    },
    "@media(max-width: 1025px)": {
      marginTop: "0.47vw",
      fontSize: "1.43vw",
    },
    "@media(max-width: 767px)": {
      marginTop: 0,
      marginLeft: "0.96vw",
      fontSize: "2.89vw",
    },
  },
}))

/**
 * Карточка услуги со страницы ремонта
 * @module src/components/repairPage/card
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.repair - объект ремонта
 */
export default function Card({ repair }) {
  const classes = useStyle()
  const mobile = useMediaQuery("(max-width: 677px)")

  const totalPrice = repair.selectServices.reduce(
    (sum, service) => sum + service.primary.price,
    0
  )

  const totalOldPrice = repair.selectServices.reduce(
    (sum, service) => sum + service.primary.old_price,
    0
  )

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
      <GatsbyImage
        image={repair.doc.data.image.localFile.childImageSharp.gatsbyImageData}
        alt={repair.doc.data.image.alt}
        className={classes.image}
        imgStyle={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />

      <div className={classes.wrapper_bages}>
        {mobile ? (
          <div className={classes.wrapper_price}>
            <Typography className={classes.price_text_through}>
              {priceMod(totalOldPrice)} ₽
            </Typography>

            <Typography className={classes.price_text_accent}>
              {priceMod(totalPrice)} ₽
            </Typography>
          </div>
        ) : null}

        <div className={classes.badge_wrapper}>
          <Typography className={classes.badge_text}>
            {repair.doc.data.category}
          </Typography>
        </div>

        <div className={classes.wrapper_services}>
          {repair.selectServices.map(service => (
            <div className={classes.badge_wrapper}>
              <Typography className={classes.badge_text}>
                {service.primary.name}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      {mobile ? null : (
        <div className={classes.wrapper_price}>
          <Typography className={classes.price_text_through}>
            {priceMod(totalOldPrice)} ₽
          </Typography>

          <Typography className={classes.price_text_accent}>
            {priceMod(totalPrice)} ₽
          </Typography>
        </div>
      )}
    </div>
  )
}
