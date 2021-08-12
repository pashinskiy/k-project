import React from "react"
import { Grid, makeStyles, Typography, useMediaQuery } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  wrapper: {
    marginTop: "2.18vw",
    "@media(min-width: 1280px)": {
      marginTop: "28px",
    },
    "@media(max-width: 1025px)": {
      marginTop: "2.16vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "4.29vw",
    },
  },
  firstStringWrapper: {
    marginBottom: "1.09vw",
    "@media(min-width: 1280px)": {
      marginBottom: "14px",
    },
  },
  logo: {
    height: "2.73vw",
    "@media(min-width: 1280px)": {
      height: "35px",
    },
    "@media(max-width: 1025px)": {
      height: "4.19vw",
    },
    "@media(max-width: 767px)": {
      height: "8.45vw",
    },
  },
  text: {
    width: "100%",
    fontWeight: 900,
    lineHeight: 1.21,
    color: theme.palette.color.main,

    fontSize: "3.75vw",
    "@media(min-width: 1280px)": {
      fontSize: "48px",
    },
    "@media(max-width: 1025px)": {
      width: "50%",
      fontSize: "3.75vw",
    },
    "@media(max-width: 767px)": {
      width: "100%",
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
    "@media(max-width: 1025px)": {
      height: "3.95vw",
      marginLeft: 0,
      marginRight: "1.19vw",
    },
    "@media(max-width: 767px)": {
      height: "7.97vw",
      marginLeft: 0,
      marginRight: "2.41vw",
    },
  },
  stickerWrapperMobile: {
    width: "auto",
    marginTop: "1.91vw",
    "@media(max-width: 767px)": {
      marginTop: "3.68vw",
    },
  },
}))

export default function Title({ logo, text, stickersSlices }) {
  const classes = useStyles()
  const mobile = useMediaQuery("(max-width: 1025px)")
  // формируем объект для отображения логотипа брэнда при наличии
  const logoImg =
    logo !== null && logo
      ? { ...logo.localFile?.childImageSharp.fluid, alt: logo.alt }
      : null

  // достаем стикеры из слайсов и готовим к распечатке
  const stickersImgArr = stickersSlices.reduce((arr, stickersSlice) => {
    arr.push(
      ...stickersSlice.items.map((sticker, i) => {
        const img = sticker.sticker.document?.data.image.localFile?.publicURL
        const alt = sticker.sticker.document?.data.image.alt ?? "sticker"

        return (
          <div className={classes.sticker} key={i}>
            <img
              src={img}
              alt={alt ?? "img"}
              height={35}
              width={70}
              style={{ width: "auto", height: "100%" }}
            />
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

  return (
    <Grid container direction="column" className={classes.wrapper}>
      {logoImg || (stickersImgArr.length && !mobile) ? (
        <Grid
          container
          justify={justify}
          className={classes.firstStringWrapper}
          alignItems="flex-end"
        >
          {logoImg ? (
            <picture className={classes.logo}>
              <source srcSet={logoImg.srcSetWebp} type="image/webp" />
              <img
                src={logoImg.src}
                srcSet={logoImg.srcSet}
                alt={logoImg.alt ?? "sticker"}
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
      ) : null}
      <Typography className={classes.text}>{text}</Typography>
      {stickersImgArr.length && mobile ? (
        <Grid container className={classes.stickerWrapperMobile}>
          {stickersImgArr}
        </Grid>
      ) : null}
    </Grid>
  )
}
