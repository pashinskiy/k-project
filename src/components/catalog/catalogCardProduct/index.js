import * as React from "react"
import { Grid, makeStyles, Typography, useMediaQuery } from "@material-ui/core"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link, navigate } from "gatsby"

import BlockPrice from "./blockPrice"
import AddInCartAndFav from "../../button/addInCartAndFav"
import Features from "./features"

import palette from "../../../templates/colors.json"

const useStyles = makeStyles(theme => ({
  wrapper: {
    width: "100%",
    minHeight: "26.25vw",
    padding: "2.18vw 0",
    borderBottom: "1px solid #E3E3EA",
    overflow: "hidden",
    WebkitBackfaceVisibility: "hidden",
    MozBackfaceVisibility: "hidden",
    WebkitTransform: "translate3d(0, 0, 0)",
    MozTransform: "translate3d(0, 0, 0)",
    "@media(min-width: 1280px)": {
      minHeight: "336px",
      padding: "28px 0",
    },
    "@media(max-width: 1025px)": {
      minHeight: "37.88vw",
      padding: "3.35vw 0",
    },
    "@media(max-width: 767px)": {
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
    "@media(max-width: 1025px)": {
      width: "23.98vw",
    },
    "@media(max-width: 767px)": {
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
    "@media(max-width: 1025px)": {
      height: "23.98vw",
    },
    "@media(max-width: 767px)": {
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
    "@media(max-width: 1025px)": {
      width: "71.72%",
    },
    "@media(max-width: 767px)": {
      width: "57.54%",
    },
  },
  wrapperMainBlock: {
    width: "68.18%",
    height: "100%",
    "@media(max-width: 1025px)": {
      width: "61.22%",
    },
    "@media(max-width: 767px)": {
      width: "100%",
    },
  },
  title: {
    fontWeight: 700,
    color: theme.palette.color.main,
    fontSize: "1.56vw",
    "@media(min-width: 1280px)": {
      fontSize: "20px",
    },
    "@media(max-width: 1025px)": {
      fontSize: "2.03vw",
    },
    "@media(max-width: 767px)": {
      fontWeight: 400,
      fontSize: "3.38vw",
    },
  },
  wrapperRow: {
    marginTop: "0.93vw",
    "@media(min-width: 1280px)": {
      marginTop: "12px",
    },
    "@media(max-width: 1025px)": {
      marginTop: "1.43vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "2.89vw",
    },
  },
  color: {
    borderRadius: "100%",
    overflow: "hidden",
    WebkitBackfaceVisibility: "hidden",
    MozBackfaceVisibility: "hidden",
    WebkitTransform: "translate3d(0, 0, 0)",
    MozTransform: "translate3d(0, 0, 0)",
    boxSizing: "border-box",
    boxShadow: "inset 0px 2px 4px rgba(0, 0, 0, 0.25)",

    width: "2.89vw",
    height: "2.89vw",
    "@media(min-width: 1280px)": {
      width: "37px",
      height: "37px",
    },
    "@media(max-width: 1025px)": {
      width: "4.07vw",
      height: "4.07vw",
    },
    "@media(max-width: 767px)": {
      width: "6.28vw",
      height: "6.28vw",
    },
  },
  features: {
    overflow: "hidden",

    width: "26.79vw",
    "@media(min-width: 1280px)": {
      width: "343px",
    },
    "@media(max-width: 1025px)": {
      width: "35.73vw",
    },
    "@media(max-width: 767px)": {
      width: "41.54vw",
    },
  },
  wrapperCharacteristics: {
    padding: "0.93vw 0",
    "@media(min-width: 1280px)": {
      padding: "12px 0",
    },
    "@media(max-width: 1025px)": {
      padding: "1.43vw 0",
    },
    "@media(max-width: 767px)": {
      display: "none",
    },
  },
  characteristicRow: {
    marginTop: "0.62vw",
    "@media(min-width: 1280px)": {
      marginTop: "8px",
    },
    "@media(max-width: 1025px)": {
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
    "@media(max-width: 1025px)": {
      fontSize: "1.43vw",
    },
  },
  characteristic: {
    marginRight: "0.93vw",
    "@media(min-width: 1280px)": {
      marginRight: "12px",
    },
    "@media(max-width: 1025px)": {
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
    "@media(max-width: 1025px)": {
      height: "3.59vw",
      marginRight: "1.43vw",
    },
    "@media(max-width: 767px)": {
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
    "@media(max-width: 1025px)": {
      width: "31.89%",
    },
    "@media(max-width: 767px)": {
      width: "100%",
    },
  },
  link: {
    textDecoration: "none",
    display: "contents",
    "@media(max-width: 767px)": {
      display: "block",
      marginTop: "2.89vw",
    },
  },
  buttonLink: {
    padding: 0,
    border: "none",
    background: "transparent",
    minWidth: 0,
    minHeight: 0,
    cursor: "pointer",
  },
}))

/**
 * Карточка продукта на странице подкатегории и католога
 * @module src/components/catalog/catalogCardProduct
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.product - объект продукта полученый из prismic
 */
export default function CardProduct({ product, ...other }) {
  const classes = useStyles()
  const mobile = useMediaQuery("(max-width: 767px)")

  // достаем стикеры из слайсов и готовим к распечатке
  const stickersSlices = product.data.body.filter(
    slice => slice.slice_type === "stickers"
  )
  const stickersImgArr = stickersSlices.reduce((arr, stickersSlice) => {
    arr.push(
      ...stickersSlice.items.map((sticker, i) => {
        const img = sticker.sticker.document?.data.image.localFile?.publicURL
        const alt = sticker.sticker.document?.data.image.alt
        return (
          <div className={classes.sticker} key={i}>
            <img
              src={img}
              alt={alt ?? "img"}
              width={70}
              height={35}
              style={{ width: "auto", height: "100%" }}
            />
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
        key={item.characteristic.document?.data.name}
        className={classes.characteristicRow}
      >
        <Typography className={classes.text + " " + classes.characteristic}>
          {item.characteristic.document?.data.name}:
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
        <button
          name={`${product.data.name}`}
          onClick={() => navigate(`/${product.uid}`)}
          className={classes.buttonLink}
        >
          <GatsbyImage
            loading="eager"
            image={
              product.data.images[0]?.image.localFile?.childImageSharp
                .gatsbyImageData
            }
            alt={product.data.images[0]?.image.alt ?? "product"}
            className={classes.wrapperImg}
            imgStyle={{ objectFit: "contain" }}
          />
        </button>
      </Grid>

      <Grid
        container
        justify="space-between"
        className={classes.wrapperRightBlock}
      >
        <Grid className={classes.wrapperMainBlock}>
          {mobile ? <BlockPrice product={product} /> : null}

          <Link to={`/${product.uid}`} className={classes.link}>
            <Typography className={classes.title}>
              {product.data.name}
            </Typography>
          </Link>

          <Grid
            container
            justify="space-between"
            className={classes.wrapperRow}
          >
            <div
              className={classes.color}
              style={{
                background:
                  product.data.color ?? palette[product.data.color_group],
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
