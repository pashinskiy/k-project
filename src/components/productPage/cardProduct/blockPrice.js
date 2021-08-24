import React from "react"
import {
  Grid,
  makeStyles,
  Modal,
  Typography,
  useMediaQuery,
} from "@material-ui/core"
import { navigate } from "gatsby"
import AddInCartAndFav from "../../button/addInCartAndFav"
import Title from "./title"
import Features from "./features"
import colors from "../../../templates/colors.json"

import Mokka from "../../../../static/svg/mokka.svg"
import MokkaInfo from "../../../../static/svg/mokkaInfo.svg"
import MokkaCross from "../../../../static/svg/mokkaCross.svg"
import { right } from "fp-ts/lib/EitherT"

const useStyles = makeStyles(theme => ({
  wrapper: {
    width: "35.31vw",
    height: "fit-content",
    borderRadius: "1.56vw 0 0 1.56vw",
    background: "#EFEFF2",
    padding: "3.12vw 2.03vw",
    zIndex: 0,
    "@media(min-width: 1280px)": {
      width: "452px",
      borderRadius: "20px 0 0 20px",
      padding: "40px 26px",
    },
    "@media(max-width: 1025px)": {
      width: "100%",
      borderRadius: 0,
      background: "transparent",
      padding: 0,
      marginTop: "1.19vw",
    },
    "@media(max-width: 767px)": {
      width: "100%",
      marginTop: "2.41vw",
    },
  },
  collorsPanel: {
    "@media(max-width: 1025px)": {
      minHeight: "3.12vw",
    },
    "@media(max-width: 767px)": {
      minHeight: "4.68vw",
      maxWidth: "90%",
    },
  },
  item: {
    padding: 0,
    border: "none",
    background: "transparent",
    minWidth: 0,
    minHeight: 0,
    cursor: "pointer",

    width: "3.12vw",
    height: "3.12vw",
    borderRadius: "100%",
    marginRight: "0.78vw",
    marginBottom: "0.78vw",
    overflow: "hidden",
    border: "1px solid #BCBCBC",
    boxShadow: "inset 0px 2px 4px rgba(0, 0, 0, 0.25)",
    boxSizing: "border-box",
    "@media(min-width: 1280px)": {
      width: "40px",
      height: "40px",
      marginRight: "10px",
      marginBottom: "10px",
    },
    "@media(max-width: 1025px)": {
      width: "3.59vw",
      height: "3.59vw",
      marginRight: "1.19vw",
      marginBottom: "1.19vw",
    },
    "@media(max-width: 767px)": {
      width: "7.24vw",
      height: "7.24vw",
      marginRight: "2.41vw",
      marginBottom: "2.41vw",
    },
  },
  active: {
    border: "2px solid #EFEFF2",
    boxShadow: "0px 0px 0 2px #681DE1",
  },
  priceWrapper: {
    marginTop: "1.72vw",
    "@media(min-width: 1280px)": {
      marginTop: "22px",
    },
    "@media(max-width: 1025px)": {
      marginTop: "1.91w",
    },
    "@media(max-width: 767px)": {
      marginTop: "3.86vw",
    },
  },
  price: {
    fontWeight: 900,
    fontSize: "3.75vw",
    marginRight: "1.25vw",
    "@media(min-width: 1280px)": {
      fontSize: "48px",
      marginRight: "16px",
    },
    "@media(max-width: 1025px)": {
      ...theme.typography.body2,
      fontWeight: 700,
      fontSize: "5.75vw",
      marginRight: "1.43vw",
      color: "#681DE1",
    },
    "@media(max-width: 767px)": {
      fontSize: "11.59vw",
      marginRight: "2.89vw",
    },
  },
  oldPrice: {
    fontWeight: 400,
    fontSize: "1.56vw",
    color: "#BDBDC6",
    "-webkit-text-fill-color": "#BDBDC6",
    textDecoration: "line-through",
    "@media(min-width: 1280px)": {
      fontSize: "20px",
    },
    "@media(max-width: 1025px)": {
      fontSize: "2.39vw",
    },
    "@media(max-width: 767px)": {
      fontSize: "4.83vw",
    },
  },
  title: {
    fontWeight: 700,
    lineHeight: 1.21,
    marginTop: "3.12vw",
    fontSize: "1.32vw",
    "@media(min-width: 1280px)": {
      marginTop: "40px",
      fontSize: "17px",
    },
    "@media(max-width: 1025px)": {
      marginTop: "4.79vw",
      fontSize: "2.03vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "9.66vw",
      fontSize: "4.1vw",
    },
  },
  textCredit: {
    fontWeight: 400,
    lineHeight: 1.21,
    fontSize: "1.01vw",
    marginTop: "0.62vw",
    "@media(min-width: 1280px)": {
      fontSize: "13px",
      marginTop: "8px",
    },
    "@media(max-width: 1025px)": {
      fontSize: "1.67vw",
      marginTop: "0.95vw",
    },
    "@media(max-width: 767px)": {
      fontSize: "3vw",
      marginTop: "1.93vw",
    },
    "& span": {
      fontWeight: 600,
    },
  },
  variantDevilery: {
    fontWeight: 700,
    fontSize: "1.09vw",
    lineHeight: 1.21,
    marginTop: "0.62vw",
    "@media(min-width: 1280px)": {
      fontSize: "14px",
      marginTop: "8px",
    },
    "@media(max-width: 1025px)": {
      fontSize: "1.67vw",
      marginTop: "0.95vw",
    },
    "@media(max-width: 767px)": {
      fontSize: "3.38vw",
      marginTop: "1.93vw",
    },
    "& span": {
      fontWeight: 400,
      color: "#000000",
      "-webkit-text-fill-color": "#000000",
    },
  },
  textSeller: {
    fontWeight: 700,
    fontSize: "1.09vw",
    lineHeight: 1.21,
    marginTop: "0.62vw",
    color: "#681DE1",
    "@media(min-width: 1280px)": {
      fontSize: "14px",
      marginTop: "8px",
    },
    "@media(max-width: 1025px)": {
      fontSize: "1.67vw",
      marginTop: "0.95vw",
    },
    "@media(max-width: 767px)": {
      fontSize: "3.38vw",
      marginTop: "1.93vw",
    },
  },
  rassrochkaSpan: {
    marginLeft: "0.625vw",
    "@media(min-width: 1280px)": {
      marginLeft: "8px",
    },
    "@media(max-width: 1025px)": {
      marginLeft: "0.95vw",
    },
    "@media(max-width: 767px)": {
      marginLeft: "1.93vw",
    },
  },
  mokka: {
    display: "inline-block",

    margin: "0 0.625vw",
    height: "1.32vw",
    "@media(min-width: 1280px)": {
      margin: "0 8px",
      height: "17px",
    },
    "@media(max-width: 1025px)": {
      margin: "0 0.95vw",
      height: "2.03vw",
    },
    "@media(max-width: 767px)": {
      margin: "0 1.93vw",
      height: "3.62vw",
    },
  },
  mokkaInfo: {
    display: "inline-block",
    cursor: "pointer",

    marginLeft: "0.31vw",
    height: "1.32vw",
    width: "1.32vw",
    "@media(min-width: 1280px)": {
      marginLeft: "4px",
      height: "17px",
      width: "17px",
    },
    "@media(max-width: 1025px)": {
      marginLeft: "0.47vw",
      height: "2.03vw",
      width: "2.03vw",
    },
    "@media(max-width: 767px)": {
      marginLeft: "0.96vw",
      height: "4.1vw",
      width: "4.1vw",
    },
  },
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  mokkaBaner: {
    position: "relative",
    background: "center / cover no-repeat url('/svg/mokkaBaner.png')",

    width: "58.12vw",
    height: "37.18vw",
    "@media(min-width: 1280px)": {
      width: 744,
      height: 476,
    },
    "@media(max-width: 1025px)": {
      width: "72.58vw",
      height: "46.43vw",
    },
    "@media(max-width: 767px)": {
      width: "97vw",
      height: "62.05vw",
    },
  },
  mokkaCross: {
    padding: 0,
    background: "transparent",
    minHeight: 0,
    minWidth: 0,
    border: "none",
    outline: "none",
    cursor: "pointer",

    position: "absolute",
    top: "7.77%",
    right: "3.76%",

    width: "3.225%",
    height: "5.042%",
  },
}))

export default function BlockPrice({ product, allColors }) {
  const classes = useStyles()
  const mobile = useMediaQuery("(max-width: 1025px)")

  const [showMokkaInfo, setShowMokkaInfo] = React.useState(false)

  // цвет продукта первый в массиве
  allColors.unshift(
    ...allColors.splice(allColors.findIndex(prod => prod.uid === product.uid))
  )

  // преобразуем цену
  function priceMod(value) {
    let price = "" + value
    let length = price.length
    for (let i = 1; i < length; i++) {
      if (i % 3 === 0) {
        price = price.slice(0, length - i) + " " + price.slice(length - i)
      }
    }
    return price
  }

  // варианты доставки
  const devilery = product.data.delivery.document?.data.variants ?? []
  // данные по кредиту и рассрочке
  const credit = product.data.credit.document?.data ?? null

  const creditValue =
    credit?.percent && credit?.months_1
      ? ((product.data.price / 100) *
          (100 + +credit.percent.replace(",", "."))) /
        credit.months_1
      : null

  const seller = product.data.body.find(
    slice => slice.slice_type === "Seller" || slice.slice_type === "seller"
  )
  const name_seller = seller?.primary?.name_seller ?? false
  const ogrn = seller?.primary?.ogrn ?? false

  return (
    <Grid container direction="column" className={classes.wrapper}>
      <Grid container className={classes.collorsPanel}>
        {allColors.map(prod => {
          const active = product.uid === prod.uid ? classes.active : ""
          return (
            <button
              onClick={() => navigate(`/${prod.uid}/`)}
              aria-label={`${prod.data.color_group}`}
              key={prod.uid}
              className={classes.item + " " + active}
              style={{
                background: prod.data.color ?? colors[prod.data.color_group],
              }}
            ></button>
          )
        })}
      </Grid>
      {mobile ? (
        <Title
          text={product.data.name}
          stickersSlices={product.data.body.filter(
            slice => slice.slice_type === "stickers"
          )}
          logo={
            product.data.brand.document?.data.body.find(
              slice => slice.slice_type === "brand"
            )?.primary.image
          }
        />
      ) : null}
      <Grid container alignItems="flex-end" className={classes.priceWrapper}>
        <Typography className={classes.price}>
          {priceMod(product.data.price)} &#8381;{" "}
          {product.data.old_price ? (
            <span className={classes.oldPrice}>
              {priceMod(product.data.old_price)} &#8381;
            </span>
          ) : null}
        </Typography>
      </Grid>
      {mobile ? null : (
        <AddInCartAndFav
          text="Добавить в корзину"
          product={product}
          variant="page"
          dialog
        />
      )}
      {mobile ? (
        <Features
          featuresSlices={product.data.body.filter(
            slice => slice.slice_type === "features"
          )}
        />
      ) : null}
      <Grid>
        {credit || product.data.price < 100000 ? (
          <>
            <Typography className={classes.title}>
              Рассрочка и кредит
            </Typography>
            <Typography hidden={!creditValue} className={classes.textCredit}>
              Кредит от <span>{priceMod(Math.trunc(creditValue))} ₽/мес</span>
            </Typography>

            {product.data.price < 100000 ? (
              <Typography
                hidden={!credit.months_2}
                className={classes.textCredit}
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Рассрочка от
                <span className={classes.rassrochkaSpan}>
                  {priceMod(Math.trunc(product.data.price / credit.months_2))}{" "}
                  ₽/мес
                </span>
                <span className={classes.mokka}>
                  <Mokka />
                </span>
                | оплата авансом
                <span
                  role="button"
                  onClick={() => setShowMokkaInfo(!showMokkaInfo)}
                  className={classes.mokkaInfo}
                >
                  <MokkaInfo />
                </span>
              </Typography>
            ) : null}
          </>
        ) : null}

        <Modal
          open={showMokkaInfo}
          onClose={() => setShowMokkaInfo(false)}
          className={classes.modal}
        >
          <div className={classes.mokkaBaner}>
            <button
              onClick={() => setShowMokkaInfo(false)}
              className={classes.mokkaCross}
            >
              <MokkaCross />
            </button>
          </div>
        </Modal>

        {devilery.length ? (
          <>
            <Typography className={classes.title}>Способ получения</Typography>
            {devilery.map(variant => (
              <Typography
                variant="body2"
                key={variant.name}
                className={classes.variantDevilery}
              >
                {variant.name} <span>{variant.description}</span>
              </Typography>
            ))}
          </>
        ) : null}

        {name_seller ? (
          <>
            <Typography className={classes.title}>Продавец</Typography>
            <Typography hidden={!creditValue} className={classes.textSeller}>
              {name_seller}
            </Typography>
            <Typography
              hidden={!credit.months_2}
              className={classes.textSeller}
            >
              {ogrn}
            </Typography>
          </>
        ) : null}
      </Grid>
    </Grid>
  )
}
