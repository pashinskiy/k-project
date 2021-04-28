import React from "react"
import { Grid, makeStyles, Typography, useMediaQuery } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  logo: {
    height: "2.73vw",
    marginTop: "2.18vw",
    "@media(min-width: 1280px)": {
      height: "35px",
      marginTop: "28px",
    },
    "@media(max-width: 834px)": {
      height: "4.19vw",
      marginTop: "2.16vw",
    },
    "@media(max-width: 414px)": {
      height: "8.45vw",
      marginTop: "4.29vw",
    },
  },
  text: {
    fontWeight: 900,
    lineHeight: 1.21,
    fontSize: "3.75vw",
    marginTop: "1.09vw",
    "@media(min-width: 1280px)": {
      fontSize: "48px",
      marginTop: "14px",
    },
    "@media(max-width: 834px)": {
      fontSize: "3.75vw",
    },
    "@media(max-width: 414px)": {
      fontSize: "8.69vw",
    },
  },
  sticker: {
    height: "3.59vw",
    marginLeft: "0.78vw",
    "@media(min-width: 1280px)": {
      height: "46px",
      marginLeft: "10",
    },
    "@media(max-width: 834px)": {
      height: "3.95vw",
      marginLeft: "1.19vw",
    },
    "@media(max-width: 414px)": {
      height: "7.97vw",
      marginLeft: "2.41vw",
    },
  },
}))

export default function Title({ logo, text, stickersSlices }) {
  // input data
  // logo = {
  //   alt: "photo name",
  //   localFile: {
  //     childImageSharp: {
  //       fluid: {
  //         src:
  //           "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.svg/1200px-%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.svg.png",
  //         srcSet:
  //           "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.svg/1200px-%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.svg.png",
  //         srcSetWebp:
  //           "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.svg/1200px-%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.svg.png",
  //         aspectRatio: "1.5",
  //       },
  //     },
  //   },
  // }
  // text = "Умная колонка Яндекс.Станция Макс"

  const classes = useStyles()
  const mobile = useMediaQuery("(max-width: 834px)")
  // формируем объект для отображения логотипа брэнда при наличии
  const logoImg =
    logo !== null && logo
      ? { ...logo.localFile.childImageSharp.fluid, alt: logo.alt }
      : null

  // достаем стикеры из слайсов и готовим к распечатке
  const stickersImgArr = stickersSlices.reduce((arr, stickersSlice) => {
    arr.push(
      ...stickersSlice.items.map((sticker, i) => {
        const img =
          sticker.sticker.document.data.image.localFile.childImageSharp.fluid
        return (
          <div className={classes.sticker} key={i}>
            <picture style={{ display: "flex", width: "100%", height: "100%" }}>
              <source srcSet={img.srcSetWebp} type="image/webp" sizes="" />
              <img
                src={img.src}
                srcSet={img.srcSet}
                alt={sticker.sticker.document.data.image.alt}
                sizes=""
                width={img.aspectRatio}
                height="1"
                style={{ width: "auto", height: "100%" }}
              />
            </picture>
          </div>
        )
      })
    )
    return arr
  }, [])

  const justify =
    logoImg !== null && stickersImgArr.length && !mobile
      ? "space-between"
      : "flex-start"
  console.log(justify)

  return (
    <Grid container direction="column">
      <Grid container justify={justify} alignItems="flex-end">
        {logoImg ? (
          <picture className={classes.logo}>
            <source srcSet={logoImg.srcSetWebp} type="image/webp" />
            <img
              src={logoImg.src}
              srcSet={logoImg.srcSet}
              alt={logoImg.alt}
              height="1"
              width={logoImg.aspectRatio}
              style={{
                objectFit: "contain",
                width: "auto",
                height: "100%",
              }}
            />
          </picture>
        ) : null}
        {stickersImgArr.length && !mobile ? (
          <Grid container style={{ width: "auto" }}>
            {stickersImgArr}
          </Grid>
        ) : null}
      </Grid>
      <Typography className={classes.text}>{text}</Typography>
      {stickersImgArr.length && mobile ? (
        <Grid container style={{ width: "auto" }}>
          {stickersImgArr}
        </Grid>
      ) : null}
    </Grid>
  )
}
