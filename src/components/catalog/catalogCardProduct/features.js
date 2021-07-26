import React from "react"
import { Grid, makeStyles, Typography } from "@material-ui/core"
import { GatsbyImage } from "gatsby-plugin-image"

const useStyles = makeStyles(theme => ({
  wrapper: {
    width: "100%",
    position: " relative",
    boxSizing: "border-box",
    cursor: "pointer",

    overflow: "hidden",
    WebkitBackfaceVisibility: 'hidden',
    MozBackfaceVisibility: 'hidden',
    WebkitTransform: 'translate3d(0, 0, 0)',
    MozTransform: 'translate3d(0, 0, 0)',
    // overflow: "scroll",
    // scrollbarWidth: "none",
    // "-ms-overflow-style": "none",

    height: "2.89vw",
    "@media(min-width: 1280px)": {
      height: "37px",
    },
    "@media(max-width: 834px)": {
      height: "4.07vw",
    },
    "@media(max-width: 414px)": {
      height: "6.28vw",
    },
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  item: {
    height: "100%",
    width: "auto",
    flexShrink: 0,
    whiteSpace: "nowrap",

    boxSizing: "border-box",
    background: "#fff",

    backgroundClip: "padding-box",
    position: "relative",

    padding: "0.62vw 0.93vw",
    borderRadius: "0.93vw",
    overflow: "hidden",
    WebkitBackfaceVisibility: 'hidden',
    MozBackfaceVisibility: 'hidden',
    WebkitTransform: 'translate3d(0, 0, 0)',
    MozTransform: 'translate3d(0, 0, 0)',
    marginRight: "0.62vw",
    border: "0.15vw solid transparent",
    "@media(min-width: 1280px)": {
      padding: "8px 12px",
      borderRadius: "12px",
      marginRight: "8px",
      border: "2px solid transparent",
    },
    "@media(max-width: 834px)": {
      padding: "0.95vw 1.43vw",
      borderRadius: "1.43vw",
      marginRight: "0.95vw",
      border: "0.23vw solid transparent",
    },
    "@media(max-width: 414px)": {
      padding: "0.96vw 2.89vw",
      borderRadius: "2.89vw",
      marginRight: "0.96vw",
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
      "@media(max-width: 834px)": {
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
    "@media(max-width: 834px)": {
      marginRight: "1.19vw",
    },
    "@media(max-width: 414px)": {
      marginRight: "2.41vw",
    },
  },
  text: {
    fontWeight: 400,
    lineHeight: "1.2vw",
    fontSize: "1.09vw",
    "@media(min-width: 1280px)": {
      fontSize: "14px",
      lineHeight: "15.36px",
    },
    "@media(max-width: 834px)": {
      fontSize: "1.43vw",
      lineHeight: "1.7vw",
    },
    "@media(max-width: 414px)": {
      fontSize: "2.89vw",
      lineHeight: "3.8vw",
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
  // input data
  const classes = useStyles()

  const features = React.useRef()

  // достаем особые черты из слайсов и готовим к распечатке
  const featuresArr = featuresSlices.reduce((arr, featuresSlice) => {
    arr.push(
      ...featuresSlice.items.map((feature, i) => {
        return (
          <Grid container wrap="nowrap" key={i} className={classes.item}>
            {feature.image.localFile ? (
              <GatsbyImage
                image={feature.image?.localFile.childImageSharp.gatsbyImageData}
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

  function setScrollBar(e) {
    //   const cardPanel = e.currentTarget
    //   const transition = cardPanel.style.transition
    //   cardPanel.style.transition = "none"
    //   //отмена перехвата браузера
    //   cardPanel.ondragstart = () => false
    //   const clientX = e.clientX
    //   const scrollLeft = cardPanel.scrollLeft
    //   document.addEventListener("pointermove", scrollBar)
    //   document.addEventListener("pointerup", deleteScrollBar)
    //   function deleteScrollBar() {
    //     cardPanel.style.transition = transition
    //     document.removeEventListener("pointermove", scrollBar)
    //     document.removeEventListener("pointerup", deleteScrollBar)
    //   }
    //   function scrollBar(e) {
    //     let newLeft = scrollLeft - e.clientX + clientX
    //     cardPanel.scrollLeft = newLeft
    //   }
  }

  return (
    <Grid
      hidden={!featuresArr.length}
      container
      ref={features}
      onPointerDown={setScrollBar}
      className={classes.wrapper + " " + classes.unselect}
    >
      {featuresArr}
    </Grid>
  )
}
