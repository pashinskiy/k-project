import React from "react"
import { Grid, makeStyles, Typography, useMediaQuery } from "@material-ui/core"
import { Link } from "gatsby"
import AddInCartAndFav from "../../button/addInCartAndFav"
import Title from "./title"
import Features from "./features"

const useStyles = makeStyles(theme => ({
  wrapper: {
    width: "35.31vw",
    height: "fit-content",
    borderRadius: "1.56vw 0 0 1.56vw",
    background: "#EFEFF2",
    padding: "3.12vw 2.03vw",
    "@media(min-width: 1280px)": {
      width: "452px",
      borderRadius: "20px 0 0 20px",
      padding: "40px 26px",
    },
    "@media(max-width: 834px)": {
      width: "100%",
      borderRadius: 0,
      background: "transparent",
      padding: 0,
      marginTop: "1.19vw",
    },
    "@media(max-width: 414px)": {
      width: "100%",
      marginTop: "2.41vw",
    },
  },
  collorsPanel: {
    "@media(max-width: 834px)": {
      minHeight: "3.12vw",
    },
    "@media(max-width: 414px)": {
      minHeight: "4.68vw",
      maxWidth: "90%",
    },
  },
  item: {
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
    "@media(max-width: 834px)": {
      width: "3.59vw",
      height: "3.59vw",
      marginRight: "1.19vw",
      marginBottom: "1.19vw",
    },
    "@media(max-width: 414px)": {
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
    "@media(max-width: 834px)": {
      marginTop: "1.91w",
    },
    "@media(max-width: 414px)": {
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
    "@media(max-width: 834px)": {
      fontSize: "5.75vw",
      marginRight: "1.43vw",
      background: "linear-gradient(180deg, #291AD5 0%, #681DE1 100%)",
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
      color: "#681DE1",
    },
    "@media(max-width: 414px)": {
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
    "@media(max-width: 834px)": {
      fontSize: "2.39vw",
    },
    "@media(max-width: 414px)": {
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
    "@media(max-width: 834px)": {
      marginTop: "4.79vw",
      fontSize: "2.03vw",
    },
    "@media(max-width: 414px)": {
      marginTop: "9.66vw",
      fontSize: "4.1vw",
    },
  },
  textCredit: {
    fontWeight: 400,
    lineHeight: 1.21,
    fontSize: "1.09vw",
    marginTop: "0.62vw",
    "@media(min-width: 1280px)": {
      fontSize: "14px",
      marginTop: "8px",
    },
    "@media(max-width: 834px)": {
      fontSize: "1.67vw",
      marginTop: "0.95vw",
    },
    "@media(max-width: 414px)": {
      fontSize: "3.38vw",
      marginTop: "1.93vw",
    },
    "& span": {
      fontWeight: 600,
    },
  },
  variantDevilery: {
    background: "linear-gradient(180deg, #291AD5 0%, #681DE1 100%)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    color: "#681DE1",
    fontWeight: 700,
    fontSize: "1.09vw",
    lineHeight: 1.21,
    marginTop: "0.62vw",
    "@media(min-width: 1280px)": {
      fontSize: "14px",
      marginTop: "8px",
    },
    "@media(max-width: 834px)": {
      fontSize: "1.67vw",
      marginTop: "0.95vw",
    },
    "@media(max-width: 414px)": {
      fontSize: "3.38vw",
      marginTop: "1.93vw",
    },
    "& span": {
      fontWeight: 400,
      color: "#000000",
      "-webkit-text-fill-color": "#000000",
    },
  },
}))

export default function BlockPrice({ product, allColors }) {
  // input data

  // product = {
  //   uid: "1234567",
  //   data: {
  //     name: "name",
  //     color: "red",
  //     price: "19000",
  //     oldPrice: "50000",
  //   },
  // }
  // allColors = [
  //   { uid: "123", data: { color_name: "Красный", color: "red" } },
  //   { uid: "6787", data: { color_name: "Желтый", color: "yellow" } },
  // ]

  const classes = useStyles()
  const mobile = useMediaQuery("(max-width: 834px)")

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

  return (
    <Grid container direction="column" className={classes.wrapper}>
      <Grid container className={classes.collorsPanel}>
        {allColors.map(prod => {
          const active =
            prod.data.color_name === product.data.color_name
              ? classes.active
              : ""
          return (
            <Link to={`/${prod.uid}/`} key={prod.uid}>
              <div
                className={classes.item + " " + active}
                style={{
                  background: prod.data.color,
                }}
              ></div>
            </Link>
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
            product.data.body.find(slice => slice.slice_type === "brand")
              ?.primary.image
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
        {credit ? (
          <>
            <Typography className={classes.title}>
              Рассрочка и кредит
            </Typography>
            <Typography hidden={!creditValue} className={classes.textCredit}>
              Кредит от <span>{priceMod(Math.trunc(creditValue))} ₽/мес</span>
            </Typography>
            <Typography
              hidden={!credit.months_2}
              className={classes.textCredit}
            >
              Рассрочка от{" "}
              <span>
                {priceMod(Math.trunc(product.data.price / credit.months_2))}{" "}
                ₽/мес
              </span>
            </Typography>
          </>
        ) : null}

        {devilery.length ? (
          <>
            <Typography className={classes.title}>Способ получения</Typography>
            {devilery.map(variant => (
              <Typography
                key={variant.name}
                className={classes.variantDevilery}
              >
                {variant.name} <span>{variant.description}</span>
              </Typography>
            ))}
          </>
        ) : null}
      </Grid>
    </Grid>
  )
}
