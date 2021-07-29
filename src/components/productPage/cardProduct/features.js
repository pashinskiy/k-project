import React from "react"
import { Grid, makeStyles, Typography } from "@material-ui/core"
import { GatsbyImage } from "gatsby-plugin-image"

const useStyles = makeStyles(theme => ({
  wrapper: {
    width: "100vw",
    position: " relative",
    boxSizing: "border-box",
    marginTop: "4.06vw",
    marginLeft: "-2.18vw",
    paddingLeft: "2.18vw",

    overflowX: "scroll",
    scrollbarWidth: "none",
    "-ms-overflow-style": "none",

    "@media(min-width: 1280px)": {
      width: "1280px",
      marginTop: "52px",
      marginLeft: "-28px",
      paddingLeft: "28px",
    },
    "@media(max-width: 1025px)": {
      marginTop: "1.91vw",
      marginLeft: "-3.35vw",
      paddingLeft: "3.35vw",
    },
    "@media(max-width: 414px)": {
      marginTop: "3.86vw",
      marginLeft: "-6.76vw",
      paddingLeft: "6.76vw",
    },
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  item: {
    width: "auto",
    flexShrink: 0,
    
    whiteSpace: "nowrap",

    boxSizing: "border-box",
    background: "#fff",

    backgroundClip: "padding-box",
    position: "relative",

    height: "3.9vw",
    minWidth: "9vw",
    padding: "0.78vw 2.34vw",
    borderRadius: "1.56vw",
    marginRight: "0.78vw",
    border: "0.15vw solid transparent",
    "@media(min-width: 1280px)": {
      height: "50px",
      minWidth: "116px",
      padding: "10px 30px",
      borderRadius: "20px",
      marginRight: "10px",
      border: "2px solid transparent",
    },
    "@media(max-width: 1025px)": {
      height: "5.99vw",
      minWidth: "13.9vw",
      padding: "1.19vw 3.59vw",
      borderRadius: "2.39vw",
      marginRight: "0.95vw",
      border: "0.23vw solid transparent",
    },
    "@media(max-width: 414px)": {
      height: "12.07vw",
      minWidth: "28.01vw",
      padding: "2.41vw 7.24vw",
      borderRadius: "4.83vw",
      marginRight: "1.93vw",
      border: "0.48vw solid transparent",
    },

    "&::before": {
      content: "''",
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
      borderRadius: "inherit",
      background: theme.palette.background.accent,
      zIndex: -1,
      margin: "-0.15vw",
      "@media(min-width: 1280px)": {
        margin: "-2px",
      },
      "@media(max-width: 1025px)": {
        margin: "-0.23vw",
      },
      "@media(max-width: 414px)": {
        margin: "-0.48vw",
      },
    },
  },
  itemImg: {
    height: "100%",
    marginRight: "0.78vw",
    "@media(min-width: 1280px)": {
      marginRight: "10px",
    },
    "@media(max-width: 1025px)": {
      marginRight: "1.19vw",
    },
    "@media(max-width: 414px)": {
      marginRight: "2.41vw",
    },
  },
  text: {
    fontWeight: 300,
    lineHeight: "2.04vw",
    fontSize: "1.32vw",
    "@media(min-width: 1280px)": {
      fontSize: "17px",
      lineHeight: "26px",
    },
    "@media(max-width: 1025px)": {
      fontSize: "1.43vw",
      lineHeight: "3.15vw",
    },
    "@media(max-width: 414px)": {
      fontSize: "2.89vw",
      lineHeight: "6.29vw",
    },
  },
  unselect: {
    "& *": {
      "-webkit-touch-callout": "none" /* iOS Safari */,
      "-webkit-user-select": "none" /* Chrome/Safari/Opera */,
      "-khtml-user-select": "none" /* Konqueror */,
      "-moz-user-select": "none" /* Firefox */,
      "-ms-user-select": "none" /* Internet Explorer/Edge */,
      "user-select": "none",
    },
  },
}))

export default function Features({ featuresSlices }) {
  const classes = useStyles()

  // достаем особые черты из слайсов и готовим к распечатке
  const featuresArr = featuresSlices.reduce((arr, featuresSlice) => {
    arr.push(
      ...featuresSlice.items.map((feature, i) => {
        return (
          <Grid container wrap="nowrap" key={i} className={classes.item}>
            {feature.image.localFile ? (
              <GatsbyImage
                image={feature.image?.localFile?.childImageSharp?.gatsbyImageData}
                alt={feature.image.alt ?? "icon"}
                className={classes.itemImg}
                imgStyle={{ objectFit: "contain" }}
              />
            ) : null}
            <Typography align="center" className={classes.text}>
              {feature.feature}
            </Typography>
          </Grid>
        )
      })
    )
    return arr
  }, [])

  return (
    <Grid
      hidden={!featuresArr.length}
      container
      wrap="nowrap"
      className={classes.wrapper + " " + classes.unselect}
    >
      {featuresArr}
    </Grid>
  )
}
