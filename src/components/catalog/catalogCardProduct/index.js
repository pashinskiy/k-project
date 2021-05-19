import * as React from "react"
import { Grid, makeStyles, Typography, useMediaQuery } from "@material-ui/core"
import { GatsbyImage } from "gatsby-plugin-image"

import BlockPrice from "./blockPrice"
import AddInCartAndFav from "../../button/addInCartAndFav"
import Features from "./features"

const useStyles = makeStyles(theme => ({
  wrapper: {
    width: "100%",
    minHeight: "26.25vw",
    padding: "2.18vw 0",
    borderBottom: "1px solid #E3E3EA",

    "@media(min-width: 1280px)": {
      minHeight: "336px",
      padding: "28px 0",
    },
    "@media(max-width: 834px)": {
      minHeight: "37.88vw",
      padding: "3.35vw 0",
    },
    "@media(max-width: 414px)": {
      minHeight: "56.03vw",
      padding: "6.76vw 0",
    },
  },
  wrapperLeftBlock: {
    width: "21.87vw",
    height: "100%",
    "@media(min-width: 1280px)": {
      width: "280px",
    },
    "@media(max-width: 834px)": {
      width: "23.98vw",
    },
    "@media(max-width: 414px)": {
      width: "33.81vw",
      minHeight: "43.96vw",
    },
  },
  wrapperImg: {
    width: "100%",
    height: "21.87vw",
    "@media(min-width: 1280px)": {
      height: "280px",
    },
    "@media(max-width: 834px)": {
      height: "23.98vw",
    },
    "@media(max-width: 414px)": {
      height: "33.81vw",
    },

    "& picture": {
      width: "100%",
      height: "100%",
      "& img": {
        width: "100%",
        height: "100%",
      },
    },
  },
  wrapperRightBlock: {
    width: "67.24%",
    height: "100%",
    "@media(max-width: 834px)": {
      width: "71.72%",
    },
    "@media(max-width: 414px)": {
      width: "57.54%",
    },
  },
  wrapperMainBlock: {
    width: "68.18%",
    height: "100%",
    "@media(max-width: 834px)": {
      width: "61.22%",
    },
    "@media(max-width: 414px)": {
      width: "100%",
    },
  },
  title: {
    fontWeight: 700,
    fontSize: "1.56vw",
    "@media(min-width: 1280px)": {
      fontSize: "20px",
    },
    "@media(max-width: 834px)": {
      fontSize: "2.03vw",
    },
    "@media(max-width: 414px)": {
      fontWeight: 400,
      fontSize: "3.38vw",
    },
  },
  wrapperRow: {
    marginTop: "0.93vw",
    "@media(min-width: 1280px)": {
      marginTop: "12px",
    },
    "@media(max-width: 834px)": {
      marginTop: "1.43vw",
    },
    "@media(max-width: 414px)": {
      marginTop: "2.89vw",
    },
  },
  color: {
    borderRadius: "100%",
    overflow: "hidden",
    boxSizing: "border-box",
    boxShadow: "inset 0px 2px 4px rgba(0, 0, 0, 0.25)",

    width: "2.89vw",
    height: "2.89vw",
    "@media(min-width: 1280px)": {
      width: "37px",
      height: "37px",
    },
    "@media(max-width: 834px)": {
      width: "4.07vw",
      height: "4.07vw",
    },
    "@media(max-width: 414px)": {
      width: "6.28vw",
      height: "6.28vw",
    },
  },
  features: {
    width: "26.79vw",
    "@media(min-width: 1280px)": {
      width: "343px",
    },
    "@media(max-width: 834px)": {
      width: "35.73vw",
    },
    "@media(max-width: 414px)": {
      width: "41.54vw",
    },
  },
  wrapperCharacteristics: {
    padding: "0.93vw 0",
    "@media(min-width: 1280px)": {
      padding: "12px 0",
    },
    "@media(max-width: 834px)": {
      padding: "1.43vw 0",
    },
    "@media(max-width: 414px)": {
      display: "none",
    },
  },
  characteristicRow: {
    marginTop: "0.62vw",
    "@media(min-width: 1280px)": {
      marginTop: "8px",
    },
    "@media(max-width: 834px)": {
      marginTop: "0.95vw",
    },
    "&:first-child": {
      marginTop: 0,
    },
  },
  text: {
    fontWeight: 400,
    lineHeight: 1.21,
    fontSize: "0.93vw",
    whiteSpace: "nowrap",
    "@media(min-width: 1280px)": {
      fontSize: "12px",
    },
    "@media(max-width: 834px)": {
      fontSize: "1.43vw",
    },
  },
  characteristic: {
    marginRight: "0.93vw",
    "@media(min-width: 1280px)": {
      marginRight: "12px",
    },
    "@media(max-width: 834px)": {
      marginRight: "1.43vw",
    },
  },
  sticker: {
    height: "2.34vw",
    marginRight: "0.93vw",
    "@media(min-width: 1280px)": {
      height: "30px",
      marginRight: "12px",
    },
    "@media(max-width: 834px)": {
      height: "3.59vw",
      marginRight: "1.43vw",
    },
    "@media(max-width: 414px)": {
      height: "7.24vw",
      marginRight: 0,
    },
    "& picture": {
      display: "flex",
      width: "100%",
      height: "100%",
      "& img": {
        width: "auto",
        height: "100%",
      },
    },
  },
  buttonBlock: {
    marginTop: "4.83vw",
  },
  wrapperSecondBlock: {
    width: "28.57%",
    zIndex: 0,
    "@media(min-width: 1280px)": {
      width: "178px",
    },
    "@media(max-width: 834px)": {
      width: "31.89%",
    },
    "@media(max-width: 414px)": {
      width: "100%",
    },
  },
}))

export default function CardProduct({ product, ...other }) {
  const classes = useStyles()
  const mobile = useMediaQuery("(max-width: 414px)")

  // достаем стикеры из слайсов и готовим к распечатке
  const stickersSlices = product.data.body.filter(
    slice => slice.slice_type === "stickers"
  )
  const stickersImgArr = stickersSlices.reduce((arr, stickersSlice) => {
    arr.push(
      ...stickersSlice.items.map((sticker, i) => {
        const img =
          sticker.sticker.document.data.image.localFile?.childImageSharp.fluid
        return (
          <div className={classes.sticker} key={i}>
            <picture style={{ display: "flex", width: "100%", height: "100%" }}>
              <source srcSet={img?.srcSetWebp} type="image/webp" sizes="" />
              <img
                src={img?.src}
                srcSet={img?.srcSet}
                alt={sticker.sticker.document.data.image.alt}
                sizes=""
                width={img?.aspectRatio}
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

  const characteristics = product.data.body1
    .find(el => el.slice_type === "characteristics")
    ?.items?.slice(0, 4)
    .map(item => (
      <Grid
        container
        key={item.characteristic}
        className={classes.characteristicRow}
      >
        <Typography className={classes.text + " " + classes.characteristic}>
          {item.characteristic}:
        </Typography>
        <Typography className={classes.text}>{item.value}</Typography>
      </Grid>
    ))

  return (
    <Grid
      container
      alignItems="center"
      justify="space-between"
      className={classes.wrapper}
      {...other}
    >
      <Grid
        container
        direction="column"
        justify={stickersImgArr.length && mobile ? "space-between" : "center"}
        className={classes.wrapperLeftBlock}
      >
        {stickersImgArr.length && mobile ? (
          <Grid
            container
            className={classes.wrapperRow}
            style={{ width: "auto", margin: "0 auto" }}
          >
            {stickersImgArr[0]}
          </Grid>
        ) : null}
        <GatsbyImage
          image={
            product.data.images[0]?.image.localFile?.childImageSharp
              .gatsbyImageData
          }
          alt={product.data.images[0]?.image.alt ?? "product"}
          className={classes.wrapperImg}
        />
      </Grid>

      <Grid
        container
        justify="space-between"
        className={classes.wrapperRightBlock}
      >
        <Grid className={classes.wrapperMainBlock}>
          {mobile ? <BlockPrice product={product} /> : null}
          <Typography className={classes.wrapperRow + " " + classes.title}>
            {product.data.name} {mobile ? product.data.color_name : null}
          </Typography>
          <Typography hidden={mobile} className={classes.title}>
            {product.data.color_name}
          </Typography>

          <Grid
            container
            justify="space-between"
            className={classes.wrapperRow}
          >
            <div
              className={classes.color}
              style={{
                background: product.data.color,
              }}
            />
            <Grid className={classes.features}>
              <Features
                featuresSlices={product.data.body.filter(
                  slice => slice.slice_type === "features"
                )}
              />
            </Grid>
          </Grid>

          {characteristics ? (
            <Grid
              container
              className={
                classes.wrapperRow + " " + classes.wrapperCharacteristics
              }
            >
              {characteristics}
            </Grid>
          ) : null}

          {stickersImgArr.length && !mobile ? (
            <Grid
              container
              className={classes.wrapperRow}
              style={{ width: "auto" }}
            >
              {stickersImgArr}
            </Grid>
          ) : null}
          {mobile ? (
            <Grid container className={classes.buttonBlock}>
              <AddInCartAndFav
                text="В корзину"
                product={product}
                variant="card"
              />
            </Grid>
          ) : null}
        </Grid>

        {mobile ? null : (
          <Grid className={classes.wrapperSecondBlock}>
            <BlockPrice product={product} />
            <AddInCartAndFav
              text="В корзину"
              product={product}
              variant="card"
            />
          </Grid>
        )}
      </Grid>
    </Grid>
  )
}
