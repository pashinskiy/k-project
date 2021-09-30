import React from "react"
import {
  makeStyles,
  Typography,
  Button,
  Card,
  useMediaQuery,
} from "@material-ui/core"
import { GatsbyImage } from "gatsby-plugin-image"

const useStyles = makeStyles(theme => ({
  wrapper: {
    width: "100%",
    height: "100%",
    boxShadow: "none",
    backgroundColor: theme.palette.background.secondary,
    position: "relative",
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
    },
    "@media(max-width: 1025px)": {
      borderRadius: "2.398vw",
      padding: "0.959vw",
    },
    "@media(max-width: 767px)": {
      borderRadius: "4.83vw",
      padding: "1.932vw",
    },
  },
  stretch: {
    width: "100%",
    height: "100%",
  },
  cardAction: {
    borderRadius: "0.9375vw",
    overflow: "hidden",
    WebkitBackfaceVisibility: "hidden",
    MozBackfaceVisibility: "hidden",
    WebkitTransform: "translate3d(0, 0, 0)",
    MozTransform: "translate3d(0, 0, 0)",
    "@media(min-width: 1280px)": {
      borderRadius: "12px",
    },
    "@media(max-width: 1025px)": {
      borderRadius: "1.438vw",
    },
    "@media(max-width: 767px)": {
      borderRadius: "2.898vw",
    },
  },
  text: {
    width: "100%",
    paddingRight: "0.9375vw",
    paddingLeft: "0.9375vw",
    "@media(min-width: 1280px)": {
      paddingRight: "12px",
      paddingLeft: "12px",
    },
    "@media(max-width: 1025px)": {
      paddingRight: "1.438vw",
      paddingLeft: "1.438vw",
    },
    "@media(max-width: 767px)": {
      paddingRight: "2.898vw",
      paddingLeft: "2.898vw",
    },
  },
  mainTitle: {
    fontWeight: 700,
    color: theme.palette.color.main,
    fontSize: "1.5625vw",
    paddingBottom: "0.9375vw",
    "@media(min-width: 1280px)": {
      paddingBottom: "12px",
      fontSize: 20,
    },
    "@media(max-width: 1025px)": {
      paddingBottom: "1.438vw",
      fontSize: "2.398vw",
    },
    "@media(max-width: 767px)": {
      paddingBottom: "2.898vw",
      fontSize: "4.83vw",
    },
  },
  previewText: {
    color: theme.palette.color.secondary,
    fontSize: "1.09375vw",
    paddingBottom: "2.1875vw",
    "@media(min-width: 1280px)": {
      paddingBottom: "28px",
      fontSize: 14,
    },
    "@media(max-width: 1025px)": {
      paddingBottom: "2.73vw",
      fontSize: "1.678vw",
    },
    "@media(max-width: 767px)": {
      paddingBottom: "6.76vw",
      fontSize: "3.381vw",
    },
  },

  button: {
    alignSelf: "flex-end",
    backgroundColor: "#D2D0E9",
    width: "11.40625vw",
    height: "3.59375vw",
    borderRadius: "0.9375vw",
    "@media(min-width: 1280px)": {
      width: "146px",
      height: "46px",
      borderRadius: "12px",
    },
    "@media(max-width: 1025px)": {
      width: "17.50599vw",
      height: "5.515vw",
      borderRadius: "1.438vw",
    },
    "@media(max-width: 767px)": {
      width: "35.265vw",
      height: "11.1vw",
      borderRadius: "2.898vw",
    },
  },
  buttonMobile: {
    marginLeft: "2.8125vw",
    marginTop: "0.9375vw",
    alignSelf: "flex-start",
    "@media(min-width: 1280px)": {
      marginTop: "12px",
      marginLeft: "36px",
    },
    "@media(max-width: 1025px)": {
      marginTop: "1.438vw",
      marginLeft: "2.53vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "2.898vw",
      marginLeft: "6.76vw",
      marginBottom: "6.76vw",
    },
  },
  buttonSales: {
    alignSelf: "flex-start",
    marginLeft: "0.9375vw",
    marginBottom: "0.9375vw",
    "@media(min-width: 1280px)": {
      marginLeft: "12px",
      marginBottom: "12px",
    },
    "@media(max-width: 1025px)": {
      marginLeft: "1.438vw",
      marginBottom: "1.438vw",
    },
    "@media(max-width: 767px)": {
      marginLeft: "2.898vw",
      marginBottom: "2.898vw",
    },
  },
  wrapperImg: {
    height: "15.625vw",
    borderRadius: "0.9375vw",
    overflow: "hidden",
    WebkitBackfaceVisibility: "hidden",
    MozBackfaceVisibility: "hidden",
    WebkitTransform: "translate3d(0, 0, 0)",
    MozTransform: "translate3d(0, 0, 0)",
    marginBottom: "2.1875vw",
    "@media(min-width: 1280px)": {
      height: "200px",
      borderRadius: "12px",
      marginBottom: "28px",
    },
    "@media(max-width: 1025px)": {
      height: "23.98vw",
      borderRadius: "1.438vw",
      marginBottom: "3.357vw",
    },
    "@media(max-width: 767px)": {
      height: "48.309vw",
      borderRadius: "2.898vw",
      marginBottom: "6.763vw",
    },
  },
  link: {
    textDecoration: "none",
  },
  buttonText: {
    fontWeight: "700",
    fontSize: "1.09375vw",
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

  wrapperImgMainPage: {
    // alignSelf: "stretch",
    flexGrow: "1",
    //необходимо задать
    height: "100px",
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
    },
    "@media(max-width: 1025px)": {
      borderRadius: "1.438vw",
      marginBottom: "3.357vw",
    },
    "@media(max-width: 767px)": {
      borderRadius: "2.898vw",
      marginBottom: "6.763vw",
    },
    "&:img": {
      borderRadius: "inherit",
    },
  },
  wrapperMainPage: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
  contentBoxContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    "@media(max-width: 767px)": {
      flexDirection: "column",
    },
  },
  contentBox: {
    position: "relative",
    padding: "0 2.1875vw 2.1875vw 2.1875vw",
    "@media(min-width: 1280px)": {
      padding: "0 28px 28px 28px",
    },
    "@media(max-width: 1025px)": {
      padding: "0 3.357vw 3.357vw 3.357vw",
    },
    "@media(max-width: 767px)": {
      padding: "0 6.763vw",
    },
  },
  buttonMainPage: {
    right: "2.1875vw",
    bottom: "2.1875vw",
    "@media(min-width: 1280px)": {
      right: "28px",
      bottom: "28px",
    },
    "@media(max-width: 1025px)": {
      right: "3.357vw",
      bottom: "3.357vw",
    },
    "@media(max-width: 767px)": {
      right: "6.763vw",
      bottom: "6.763vw",
    },
  },

  buttonMainPageNoPrev: {
    bottom: "2.382vw",
    "@media(min-width: 1280px)": {
      bottom: "30.5px",
    },
    "@media(max-width: 1025px)": {
      bottom: "3.657vw",
    },
    "@media(max-width: 767px)": {
      bottom: "7.367vw",
    },
  },

  mainTextMainPage: {
    lineHeight: "121%",
    fontWeight: 700,
    color: theme.palette.color.main,
    width: "53.125vw",
    fontSize: "2.8125vw",
    paddingBottom: "0.9375vw",
    "@media(min-width: 1280px)": {
      width: "680px",
      fontSize: 36,
      paddingBottom: "12px",
    },
    "@media(max-width: 1025px)": {
      width: "59.952vw",
      fontSize: "2.398vw",
      paddingBottom: "1.438vw",
    },
    "@media(max-width: 767px)": {
      width: "64.734vw",
      fontSize: "4.83vw",
      paddingBottom: "2.898vw",
    },
  },
  mainTextMainPageNoPrev: {
    paddingBottom: 0,
    "@media(max-width: 1025px)": {
      marginBottom: "1.318vw",
      marginTop: "1.318vw",
    },
  },

  previewTextMainPage: {
    color: theme.palette.color.secondary,
    width: "53.125vw",
    fontSize: "1.328vw",
    "@media(min-width: 1280px)": {
      width: "680px",
      fontSize: 17,
    },
    "@media(max-width: 1025px)": {
      width: "59.952vw",
      fontSize: "1.678vw",
    },
    "@media(max-width: 767px)": {
      width: "64.734vw",
      fontSize: "2.898vw",
    },
  },
  salesContentBoxContainer: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    justifyContent: "space-between"
  },
  salesContentBox: {
    flexDirection: "column",
    display: "flex",
  },
}))

/**
 * Карточка акции
 * @module src/components/saleCardPanel/saleCard
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.sale - объект акции полученый из prismic
 * @param {boolean} [props.mainPage] - отбразить вариант для главной страницы
 */
export default function SaleCard({ sale, mainPage }) {
  const classes = useStyles()
  const previewText = sale?.data.previewtext.text
  const tooMuchText = previewText?.length > 72
  const mobile = useMediaQuery("(max-width: 767px)")

  const mainPageLink = sale.data.link.text

  switch (mainPage) {
    case mainPage !== null: {
      const image = mobile
        ? sale?.data.image_mobile?.localFile?.childImageSharp?.gatsbyImageData
        : sale?.data.previewimage?.localFile?.childImageSharp?.gatsbyImageData

      const alt = mobile
        ? sale?.data.image_mobile?.alt
        : sale?.data.previewimage?.alt
      return (
        <Card className={classes.wrapper + " " + classes.wrapperMainPage}>
          <GatsbyImage
            loading="eager"
            image={image}
            alt={alt ?? "sales"}
            className={classes.wrapperImgMainPage}
            imgStyle={{ objectFit: "cover" }}
          />
          <div className={classes.contentBoxContainer}>
          <div className={classes.contentBox}>
            <Typography
              variant="body2"
              className={
                classes.mainTextMainPage +
                " " +
                (tooMuchText ? classes.mainTextMainPageNoPrev : null)
              }
            >
              {sale?.data.title.text}
            </Typography>
            {tooMuchText ? null : (
              <Typography className={classes.previewTextMainPage}>
                {previewText}
              </Typography>
            )}
          </div>
            <Button
              href={mainPageLink ? mainPageLink : `/sale/${sale?.uid}/`}
              className={
                classes.button +
                " " +
                (mobile
                  ? classes.buttonMobile
                  : classes.buttonMainPage +
                    " " +
                    (tooMuchText ? classes.buttonMainPageNoPrev : null))
              }
            >
              <Typography variant="body2" className={classes.buttonText}>
                Перейти
              </Typography>
            </Button>
          </div>
        </Card>
      )
    }
    default: {
      const image = mobile
        ? sale?.data.image_mobile?.localFile?.childImageSharp?.gatsbyImageData
        : sale?.data.previewimage?.localFile?.childImageSharp?.gatsbyImageData

      const alt = mobile
        ? sale?.data.image_mobile?.alt
        : sale?.data.previewimage?.alt
      console.log(sale.data)
      return (
        <Card className={classes.wrapper} style={{display: "flex", flexDirection: "column"}}>
          <GatsbyImage
            loading="eager"
            image={image}
            alt={alt ?? "sales"}
            className={classes.wrapperImg}
          />
          <div className={classes.salesContentBoxContainer}>
            <div className={classes.salesContentBox}>
            <Typography className={classes.mainTitle + " " + classes.text}>
            {sale?.data.title.text}
          </Typography>
          <Typography className={classes.previewText + " " + classes.text}>
            {sale?.data.previewtext.text}
          </Typography>
            </div>
            <Button
            href={mainPageLink ? mainPageLink : `/sale/${sale?.uid}/`}
            className={classes.button + " " + classes.buttonSales}
          >
            <Typography variant="body2" className={classes.buttonText}>
              Перейти
            </Typography>
          </Button>
          </div>
          {/* <Typography className={classes.mainTitle + " " + classes.text}>
            {sale?.data.title.text}
          </Typography>
          <Typography className={classes.previewText + " " + classes.text}>
            {sale?.data.previewtext.text}
          </Typography>
          <Button
            href={mainPageLink ? mainPageLink : `/sale/${sale?.uid}/`}
            className={classes.button + " " + classes.buttonSales}
          >
            <Typography variant="body2" className={classes.buttonText}>
              Перейти
            </Typography>
          </Button> */}
        </Card>
      )
    }
  }
}
