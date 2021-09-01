import React from "react"
import { makeStyles, Card, useMediaQuery } from "@material-ui/core"
import { GatsbyImage } from "gatsby-plugin-image"

const useStyles = makeStyles(theme => ({
  root: {
    width: "auto",
    height: "auto",
  },
  cardRoot: {
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
    "&": {
      lineHeight: 0,
    },
  },
  wrapperImg: {
    width: "100%",
    height: "22.1875vw",
    borderRadius: "0.9375vw",
    overflow: "hidden",
    WebkitBackfaceVisibility: "hidden",
    MozBackfaceVisibility: "hidden",
    WebkitTransform: "translate3d(0, 0, 0)",
    MozTransform: "translate3d(0, 0, 0)",
    "@media(min-width: 1280px)": {
      height: "284px",
      borderRadius: "12px",
    },
    "@media(max-width: 1025px)": {
      height: "20.863vw",
      borderRadius: "1.438vw",
    },
    "@media(max-width: 767px)": {
      height: "131.4vw",
      borderRadius: "2.8985vw",
    },
    "&:img": {
      borderRadius: "inherit",
    },
  },
}))

/**
 * Слайдер банеров на главной
 * @module src/components/mainPageSlider/advertiseCard
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.banner - объект банера полученый из prismic
 */
export default function AdvertiseCard({ banner }) {
  const classes = useStyles()
  const mobile = useMediaQuery("(max-width: 767px)")

  const image = mobile
    ? banner.data.image_mobile?.localFile?.childImageSharp?.gatsbyImageData
    : banner.data.image?.localFile?.childImageSharp?.gatsbyImageData

  const alt = mobile ? banner.data.image_mobile?.alt : banner.data.image?.alt

  return (
    <Card className={classes.cardRoot}>
      <GatsbyImage
        loading="eager"
        image={image}
        alt={alt ?? "banner"}
        className={classes.wrapperImg}
        imgStyle={{ objectFit: "cover" }}
      />
    </Card>
  )
}
