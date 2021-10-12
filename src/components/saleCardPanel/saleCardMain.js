import React from "react"
import { makeStyles, Typography, Card, useMediaQuery } from "@material-ui/core"
import { GatsbyImage } from "gatsby-plugin-image"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",
    boxShadow: "none",
    backgroundColor: theme.palette.background.secondary,
    position: "relative",

    marginBottom: "2.1875vw",
    borderRadius: "1.5625vw",
    overflow: "hidden",
    WebkitBackfaceVisibility: "hidden",
    MozBackfaceVisibility: "hidden",
    WebkitTransform: "translate3d(0, 0, 0)",
    MozTransform: "translate3d(0, 0, 0)",
    padding: "0.625vw",
    "@media(min-width: 1280px)": {
      borderRadius: "20px",
      padding: "8px",
      marginBottom: "28px",
    },
    "@media(max-width: 1025px)": {
      borderRadius: "2.398vw",
      padding: "0.959vw",
      marginBottom: "3.357vw",
    },
    "@media(max-width: 767px)": {
      borderRadius: "4.83vw",
      padding: "1.932vw",
      marginBottom: "6.763vw",
    },
  },

  wrapperImg: {
    height: "31.25vw",
    borderRadius: "0.9375vw",
    overflow: "hidden",
    WebkitBackfaceVisibility: "hidden",
    MozBackfaceVisibility: "hidden",
    WebkitTransform: "translate3d(0, 0, 0)",
    MozTransform: "translate3d(0, 0, 0)",
    marginBottom: "2.1875vw",
    "@media(min-width: 1280px)": {
      borderRadius: "12px",
      marginBottom: "28px",
      height: "400px",
    },
    "@media(max-width: 1025px)": {
      borderRadius: "1.438vw",
      marginBottom: "3.357vw",
      height: "47.961vw",
    },
    "@media(max-width: 767px)": {
      borderRadius: "2.898vw",
      marginBottom: "6.763vw",
      height: "96.618vw",
    },
  },
  text: {
    width: "100%",
    paddingRight: "2.1875vw",
    paddingLeft: "2.1875vw",
    "@media(min-width: 1280px)": {
      paddingRight: "28px",
      paddingLeft: "28px",
    },
    "@media(max-width: 1025px)": {
      paddingRight: "3.357vw",
      paddingLeft: "3.357vw",
    },
    "@media(max-width: 767px)": {
      paddingRight: "6.763vw",
      paddingLeft: "6.763vw",
    },
  },

  mainTitle: {
    fontWeight: 700,
    color: theme.palette.color.main,
    fontSize: "2.8125vw",
    marginBottom: "0.9375vw",
    "@media(min-width: 1280px)": {
      fontSize: 36,
      marginBottom: "12px",
    },
    "@media(max-width: 1025px)": {
      fontSize: "4.316vw",
      marginBottom: "1.438vw",
    },
    "@media(max-width: 767px)": {
      fontSize: "8.695vw",
      marginBottom: "2.898vw",
    },
  },

  dateWrapper: {
    display: "flex",
    paddingRight: "2.1875vw",
    paddingLeft: "2.1875vw",
    marginBottom: "2.1875vw",
    "@media(min-width: 1280px)": {
      marginBottom: "28px",
      paddingRight: "28px",
      paddingLeft: "28px",
    },
    "@media(max-width: 1025px)": {
      paddingRight: "3.357vw",
      paddingLeft: "3.357vw",
      marginBottom: "3.357vw",
    },
    "@media(max-width: 767px)": {
      paddingRight: "6.763vw",
      paddingLeft: "6.763vw",
      marginBottom: "6.763vw",
    },
  },
  textDate: {
    color: theme.palette.color.secondary,
    fontSize: "1.093vw",
    "@media(min-width: 1280px)": {
      fontSize: 14,
    },
    "@media(max-width: 1025px)": {
      fontSize: "1.678vw",
    },
    "@media(max-width: 767px)": {
      fontSize: "3.381vw",
    },
  },
  saleCreationDate: {
    marginRight: "6.622vw",
    "@media(min-width: 1280px)": {
      marginRight: "80px",
    },
    "@media(max-width: 1025px)": {
      marginRight: "9.592vw",
    },
    "@media(max-width: 767px)": {
      marginRight: "19.323vw",
    },
  },
  dateSection: {
    marginLeft: "0.625vw",
    "@media(min-width: 1280px)": {
      marginLeft: "8px",
    },
    "@media(max-width: 1025px)": {
      marginLeft: "0.959vw",
    },
    "@media(max-width: 767px)": {
      marginLeft: "1.932vw",
    },
  },
}))

/**
 * Карточка акции на страницу акции
 * @module src/components/saleCardPanel/saleCardMain
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.sale - объект акции полученый из prismic
 */
export default function SaleCardMain({ sale }) {
  const classes = useStyles()

  const creationDate = new Date(sale.data.creationdate)
    .toLocaleString("ru", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .replace(" г.", "")

  const startDate = new Date(sale.data.startdate)
    .toLocaleString("ru", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .replace(" г.", "")

  const endDate = new Date(sale.data.enddate)
    .toLocaleString("ru", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .replace(" г.", "")

  const mobile = useMediaQuery("(max-width: 767px)")

  const image = mobile ? sale.data.image_mobile : sale.data.previewimage

  return (
    <Card className={classes.root}>
      <GatsbyImage
        loading="eager"
        image={image?.localFile?.childImageSharp.gatsbyImageData}
        alt={image.alt ?? "sales"}
        className={classes.wrapperImg}
      />
      <Typography className={classes.mainTitle + " " + classes.text}>
        {sale.data.title.text}
      </Typography>
      <div className={classes.dateWrapper}>
        {mobile ? null : (
          <Typography
            className={classes.saleCreationDate + " " + classes.textDate}
          >
            {creationDate}
          </Typography>
        )}

        <Typography className={classes.dateConst + " " + classes.textDate}>
          Сроки{mobile ? ":" : " проведения:"}
        </Typography>
        <Typography
          variant="body2"
          className={classes.dateSection + " " + classes.textDate}
        >
          {startDate + " – " + endDate}
        </Typography>
      </div>
    </Card>
  )
}
