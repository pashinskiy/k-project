import React from "react"
import { Grid, makeStyles, Typography } from "@material-ui/core"
import { GatsbyImage } from "gatsby-plugin-image"

const useStyles = makeStyles(theme => ({
  wrapper: {
    height: "3.9vw",
    width: "calc(100% + 2.18vw)",
    overflow: "hidden",
    position: " relative",
    boxSizing: "border-box",
    marginTop: "4.06vw",
    "@media(min-width: 1280px)": {
      height: "50px",
      width: "calc(100% + 28px)",
      marginTop: "52px",
    },
    "@media(max-width: 834px)": {
      width: "calc(100% + 3.35vw)",
      height: "5.99vw",
      marginTop: "1.91vw",
    },
    "@media(max-width: 414px)": {
      width: "calc(100% + 6.76vw)",
      height: "12.07vw",
      marginTop: "3.86vw",
    },
  },
  bar: {
    height: "100%",
    width: "auto",
    position: "absolute",
    left: 0,
    touchAction: "none",
  },
  item: {
    height: "100%",
    width: "auto",
    minWidth: "9vw",
    padding: "0.78vw 2.34vw",
    borderRadius: "1.56vw",
    marginRight: "0.78vw",
    whiteSpace: "nowrap",

    boxSizing: "border-box",
    background: "#fff",

    backgroundClip: "padding-box",
    border: "0.15vw solid transparent",
    position: "relative",

    fontWeight: 300,
    lineHeight: "2.34vw",
    fontSize: "1.32vw",

    "@media(min-width: 1280px)": {
      minWidth: "116px",
      padding: "10px 30px",
      borderRadius: "20px",
      marginRight: "10px",
      border: "2px solid transparent",
      fontSize: "17px",
      lineHeight: "30px",
    },
    "@media(max-width: 834px)": {
      minWidth: "13.9vw",
      padding: "1.19vw 3.59vw",
      borderRadius: "2.39vw",
      marginRight: "0.95vw",
      border: "0.23vw solid transparent",
      fontSize: "1.43vw",
      lineHeight: "3.61vw",
    },
    "@media(max-width: 414px)": {
      minWidth: "28.01vw",
      padding: "2.41vw 7.24vw",
      borderRadius: "4.83vw",
      marginRight: "1.93vw",
      border: "0.48vw solid transparent",
      fontSize: "2.89vw",
      lineHeight: "7.25vw",
    },

    "&::before": {
      content: "''",
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
      borderRadius: "inherit",
      background: "linear-gradient(180deg, #291AD5 0%, #681DE1 100%)",
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
    fontWeight: 300,
    lineHeight: "2.34vw",
    fontSize: "1.32vw",

    "@media(min-width: 1280px)": {
      fontSize: "17px",
      lineHeight: "30px",
    },
    "@media(max-width: 834px)": {
      fontSize: "1.43vw",
      lineHeight: "3.61vw",
    },
    "@media(max-width: 414px)": {
      fontSize: "2.89vw",
      lineHeight: "7.25vw",
    },
  },
}))

export default function Features({ featuresSlices }) {
  // input data
  const classes = useStyles()

  // достаем особые черты из слайсов и готовим к распечатке
  const featuresArr = featuresSlices.reduce((arr, featuresSlice) => {
    arr.push(
      ...featuresSlice.items.map((feature, i) => {
        return (
          <Grid container key={i} className={classes.item}>
            {feature.image.localFile ? (
              <GatsbyImage
                image={feature.image.localFile.childImageSharp.gatsbyImageData}
                alt={feature.image.alt}
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
    const bar = e.currentTarget
    //отмена перехвата браузера
    bar.ondragstart = () => false

    const clientX = e.clientX
    const left = +bar.style.left.slice(0, -2)
    const minLeft =
      bar.parentElement.offsetWidth > bar.offsetWidth
        ? 0
        : bar.parentElement.offsetWidth - bar.offsetWidth - 1

    document.addEventListener("pointermove", scrollBar)
    document.addEventListener("pointerup", deleteScrollBar)

    function deleteScrollBar() {
      document.removeEventListener("pointermove", scrollBar)
      document.removeEventListener("pointerup", deleteScrollBar)
    }

    function scrollBar(e) {
      console.log("move")
      let newLeft = left + e.clientX - clientX
      newLeft = newLeft > 0 ? 0 : newLeft
      newLeft = newLeft < minLeft ? minLeft : newLeft
      bar.style.left = newLeft + "px"
      console.log(newLeft)
    }
  }

  return (
    <Grid className={classes.wrapper}>
      <Grid
        className={classes.bar}
        container
        wrap="nowrap"
        onPointerDown={setScrollBar}
      >
        {featuresArr}
      </Grid>
    </Grid>
  )
}
