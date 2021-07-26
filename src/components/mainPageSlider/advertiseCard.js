import React from "react"
import {
  makeStyles,
  Card,
} from "@material-ui/core"
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
    WebkitBackfaceVisibility: 'hidden',
    MozBackfaceVisibility: 'hidden',
    WebkitTransform: 'translate3d(0, 0, 0)',
    MozTransform: 'translate3d(0, 0, 0)',
    padding: "0.625vw",
    "@media(min-width: 1280px)": {
      borderRadius: "20px",
      padding: "8px",
    },
    "@media(max-width: 834px)": {
      borderRadius: "2.398vw",
      padding: "0.959vw",
    },
    "@media(max-width: 414px)": {
      borderRadius: "4.83vw",
      padding: "1.932vw",
    },
    "&":{
        lineHeight: 0,
    }
  },
  wrapperImg: {
    width: "100%",
    height: "22.1875vw",
    borderRadius: "0.9375vw",
    overflow: "hidden",
    WebkitBackfaceVisibility: 'hidden',
    MozBackfaceVisibility: 'hidden',
    WebkitTransform: 'translate3d(0, 0, 0)',
    MozTransform: 'translate3d(0, 0, 0)',
    "@media(min-width: 1280px)": {
      height: "284px",
      borderRadius: "12px",
    },
    "@media(max-width: 834px)": {
      height: "20.863vw",
      borderRadius: "1.438vw",
    },
    "@media(max-width: 414px)": {
      height: "131.4vw",
      borderRadius: "2.8985vw",
    },
    "&:img":{
      borderRadius: "inherit",
    },
  },
}))

export default function AdvertiseCard({ banner }) {
  const classes = useStyles()
  // console.log(banner)
  return (
    <Card className={classes.cardRoot}>
      <GatsbyImage
        image={banner.data.image?.localFile?.childImageSharp?.gatsbyImageData}
        alt={banner.data.image?.alt ?? "banner"}
        className={classes.wrapperImg}
        imgStyle={{ objectFit: "cover" }}
      />
    </Card>
  )
}
