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
import MokkaIframeRegistration from "../../mokkaIframeRegistration"
import Tinkoff from "../../button/tinkoff"

const useStyles = makeStyles(theme => ({
  wrapper: {
    width: "35.31vw",
    height: "fit-content",
    borderRadius: props =>
      props.radiusAllCorners ? "1.56vw" : "1.56vw 0 0 1.56vw",
    background: "#EFEFF2",
    padding: "3.12vw 2.03vw",
    zIndex: 0,
    "@media(min-width: 1280px)": {
      width: "452px",
      borderRadius: props => (props.radiusAllCorners ? 20 : "20px 0 0 20px"),
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
  buttonsColorsPanel: {
    "@media(max-width: 1025px)": {
      marginTop: "2.56vw",
      minHeight: "3.12vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "5.16vw",
      minHeight: "4.68vw",
      maxWidth: "90%",
    },
  },
  buttonColor: {
    padding: 0,
    border: "none",
    background: "transparent",
    minWidth: 0,
    minHeight: 0,
    cursor: "pointer",

    overflow: "hidden",
    boxSizing: "border-box",
    borderRadius: "100px",
    boxShadow: "inset 0px 2px 4px rgba(0, 0, 0, 0.25)",

    width: "3.12vw",
    height: "3.12vw",
    marginRight: "0.78vw",
    marginBottom: "0.78vw",
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
    boxShadow: `0px 0px 0px 2px ${theme.palette.background.secondary}, 0px 0px 0px 4px #681DE1`,
  },
  buttonsMemoryPanel: {
    marginTop: "2.5vw",
    "@media(max-width: 1025px)": {
      marginTop: "2.87vw",
      minHeight: "3.12vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "5.79vw",
      minHeight: "4.68vw",
      maxWidth: "90%",
    },
  },
  buttonMemory: {
    padding: 0,
    border: "none",
    background: "transparent",
    minWidth: 0,
    minHeight: 0,
    cursor: "pointer",

    overflow: "hidden",
    boxSizing: "border-box",
    background: theme.palette.background.main,
    display: "flex",
    fontFamily: "Roboto",
    fontWeight: 400,
    lineHeight: 1.17,

    borderRadius: "0.78vw",
    marginRight: "0.78vw",
    marginBottom: "0.78vw",
    padding: "0.93vw",
    fontSize: "1.09vw",
    "@media(min-width: 1280px)": {
      borderRadius: "10px",
      marginRight: "10px",
      marginBottom: "10px",
      padding: "12px",
      fontSize: "14px",
    },
    "@media(max-width: 1025px)": {
      borderRadius: "1.19vw",
      marginRight: "1.19vw",
      marginBottom: "1.19vw",
      padding: "1.43vw",
      fontSize: "1.67vw",
    },
    "@media(max-width: 767px)": {
      borderRadius: "2.41vw",
      marginRight: "2.41vw",
      marginBottom: "2.41vw",
      padding: "2.89vw",
      fontSize: "3.38vw",
      boxShadow: `0px 0px 0px 2px ${theme.palette.background.secondary}`,
    },
  },
  activeButtonMemory: {
    boxShadow: `0px 0px 0px 2px ${theme.palette.background.secondary}, 0px 0px 0px 4px #681DE1`,
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
  wrapperTinkoffButton: {
    width: "100%",

    marginTop: "0.78vw",
    "@media(min-width: 1280px)": {
      marginTop: 10,
    },
    "@media(max-width: 1025px)": {
      marginTop: "1.91vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "3.86vw",
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
    cursor: "pointer",

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
  seller: {
    display: "flex",
    alignItems: "center",

    marginTop: "3.12vw",
    "@media(min-width: 1280px)": {
      marginTop: "40px",
    },
    "@media(max-width: 1025px)": {
      marginTop: "4.79vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "9.66vw",
    },
  },
  seller__logo: {
    width: "auto",

    marginRight: "0.62vw",
    height: "1.56vw",
    "@media(min-width: 1280px)": {
      marginRight: 8,
      height: 20,
    },
    "@media(max-width: 1025px)": {
      marginRight: "0.95vw",
      height: "2.39vw",
    },
    "@media(max-width: 767px)": {
      marginRight: "1.93vw",
      height: "4.83vw",
    },
  },
  seller__name: {
    fontWeight: 700,
    lineHeight: 1.21,
    color: "#681DE1",

    fontSize: "1.09vw",
    "@media(min-width: 1280px)": {
      fontSize: 14,
    },
    "@media(max-width: 1025px)": {
      fontSize: "1.67vw",
    },
    "@media(max-width: 767px)": {
      fontSize: "3.38vw",
    },
  },
  seller__info: {
    position: "relative",

    padding: 0,
    border: "none",
    background: "transparent",
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
  saller__pop_up: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",

    background: theme.palette.color.main,

    bottom: "calc(100% + 1.01vw)",
    borderRadius: "1.56vw",
    padding: "0.93vw",
    "@media(min-width: 1280px)": {
      bottom: "calc(100% + 13px)",
      borderRadius: 20,
      padding: 12,
    },
    "@media(max-width: 1025px)": {
      bottom: "calc(100% + 1.55vw)",
      borderRadius: "2.39vw",
      padding: "1.43vw",
    },
    "@media(max-width: 767px)": {
      bottom: "calc(100% + 3.14vw)",
      borderRadius: "4.83vw",
      padding: "2.89vw",
    },
  },
  pop_up__text: {
    position: "relative",

    fontWeight: 500,
    lineHeight: 1.5,
    color: theme.palette.color.mainContrast,
    whiteSpace: "nowrap",
    textAlign: "left",

    fontSize: "0.93vw",
    "@media(min-width: 1280px)": {
      fontSize: 12,
    },
    "@media(max-width: 1025px)": {
      fontSize: "1.43vw",
    },
    "@media(max-width: 767px)": {
      fontSize: "2.89vw",
    },
  },
  pop_up__rect: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%) rotate(45deg)",
    background: "inherit",

    bottom: "-0.39vw",
    height: "3.09vw",
    width: "3.09vw",
    "@media(min-width: 1280px)": {
      bottom: -5,
      height: 39.59,
      width: 39.59,
    },
    "@media(max-width: 1025px)": {
      bottom: "-0.59vw",
      height: "4.74vw",
      width: "4.74vw",
    },
    "@media(max-width: 767px)": {
      bottom: "-1.2vw",
      height: "9.56vw",
      width: "9.56vw",
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

/**
 * Блок с ценой на главной карточке товара
 * @module src/components/productPage/cardProduct/blockPrice
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.product - объект продукта полученный из prismic
 * @param {Object[]} props.allVariants - массив объектов всех продуктов этой же модели
 */
export default function BlockPrice({ product, allVariants, radiusAllCorners }) {
  const classes = useStyles({ radiusAllCorners })
  const mobile = useMediaQuery("(max-width: 1025px)")

  const [showMokkaInfo, setShowMokkaInfo] = React.useState(false)
  const [showMokkaIframe, setShowMokkaIframe] = React.useState(false)

  const [allColors, setAllColors] = React.useState([])
  const [allMemory, setAllMemory] = React.useState([])
  const [allProperty, setAllProperty] = React.useState([])

  React.useEffect(() => {
    const allColors = []
    const allMemory = []
    const allProperty = []

    // сортируем по памяти
    allVariants.sort((product_1, product_2) => {
      const price_1 = parseInt(product_1.data.memory?.match(/\d+/))
      const price_2 = parseInt(product_2.data.memory?.match(/\d+/))

      if (price_1 === price_2) return 0
      if (price_1 === undefined) return 1
      if (price_2 === undefined) return -1

      return price_1 - price_2
    })

    allVariants.forEach(variant => {
      // добавляем товар если товара с таким цветом нет
      if (
        !allColors.find(
          prod => prod.data.color_group === variant.data.color_group
        ) &&
        variant.data.color_group !== "none"
      ) {
        allColors.push(variant)
      }

      // если цвет товара не такой же как у главного на странице выходим
      if (variant.data.color_group !== product.data.color_group) return

      // добавляем товар если товара с такой памятью нет
      if (!allMemory.find(prod => prod.data.memory === variant.data.memory)) {
        if (variant.data.memory) allMemory.push(variant)
      }

      // добавляем  товар если товара с таким свойством нет
      if (
        !allProperty.find(prod => prod.data.property === variant.data.property)
      ) {
        if (variant.data.property) allProperty.push(variant)
      }
    })

    // цвет продукта первый в массиве
    // allColors.unshift(
    //   ...allColors.splice(
    //     allColors.findIndex(
    //       prod => prod.data.color_group === product.data.color_group
    //     )
    //   )
    // )

    setAllColors(allColors)
    setAllMemory(allMemory)
    setAllProperty(allProperty)
  }, [])

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

  const ps = +credit?.percent.replace(",", ".") / 12 / 100
  const creditValue =
    credit?.percent && credit?.months_1
      ? product.data.price * (ps / (1 - Math.pow(1 + ps, -credit?.months_1)))
      : null

  const seller = product.data.body.find(
    slice => slice.slice_type === "Seller" || slice.slice_type === "seller"
  )
  const seller_logo = seller?.primary?.seller_logo ?? false
  const seller_name = seller?.primary?.seller_name ?? false
  const seller_entity = seller?.primary?.seller_entity ?? false
  const ogrn = seller?.primary?.ogrn ?? false

  const featuresSlices = product.data.body.filter(
    slice => slice.slice_type === "features"
  )

  function switchShowMokkaInfo(e) {
    e.preventDefault()
    setShowMokkaInfo(!showMokkaInfo)
  }

  function switchShowMokkaIframe(e) {
    if (e.defaultPrevented) return
    setShowMokkaIframe(!showMokkaIframe)
  }

  const [showSellerInfo, setShowSellerInfo] = React.useState(false)

  return (
    <Grid container direction="column" className={classes.wrapper}>
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

      {allColors.length ? (
        <Grid container className={classes.buttonsColorsPanel}>
          {allColors.map(prod => {
            const active =
              product.data.color_group === prod.data.color_group
                ? classes.active
                : ""
            return (
              <button
                onClick={() => navigate(`/${prod.uid}/`)}
                aria-label={`${prod.data.color_group}`}
                key={prod.uid}
                className={classes.buttonColor + " " + active}
                style={{
                  background: prod.data.color ?? colors[prod.data.color_group],
                }}
              ></button>
            )
          })}
        </Grid>
      ) : null}

      {allMemory.length ? (
        <Grid container className={classes.buttonsMemoryPanel}>
          {allMemory.map(prod => {
            const active =
              product.data.memory === prod.data.memory
                ? classes.activeButtonMemory
                : ""
            return (
              <button
                id={`${prod.data.memory}`}
                onClick={() => navigate(`/${prod.uid}/`)}
                aria-label={`${prod.data.memory}`}
                key={prod.uid}
                className={classes.buttonMemory + " " + active}
              >
                {prod.data.memory}
              </button>
            )
          })}
        </Grid>
      ) : null}

      {allProperty.length ? (
        <Grid container className={classes.buttonsMemoryPanel}>
          {allProperty.map(prod => {
            const active =
              product.data.property === prod.data.property
                ? classes.activeButtonMemory
                : ""
            return (
              <button
                id={`${prod.data.property}`}
                onClick={() => navigate(`/${prod.uid}/`)}
                aria-label={`${prod.data.property}`}
                key={prod.uid}
                className={classes.buttonMemory + " " + active}
              >
                {prod.data.property}
              </button>
            )
          })}
        </Grid>
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
        <>
          <AddInCartAndFav
            text="Добавить в корзину"
            product={product}
            variant="page"
          />

          <div className={classes.wrapperTinkoffButton}>
            <Tinkoff items={[{ product: product, count: 1 }]} />
          </div>
        </>
      )}

      {mobile ? (
        <>
          {featuresSlices.length ? (
            <Features featuresSlices={featuresSlices} />
          ) : null}

          <div className={classes.wrapperTinkoffButton}>
            <Tinkoff items={[{ product: product, count: 1 }]} />
          </div>
        </>
      ) : null}

      <Grid>
        {credit || product.data.price < 100000 ? (
          <>
            <Typography className={classes.title}>
              Оплата авансом и кредит
            </Typography>
            <Typography
              hidden={!creditValue}
              className={classes.textCredit}
              style={{ cursor: "inherit" }}
            >
              Кредит в Тинькофф от{" "}
              <span>{priceMod(Math.trunc(creditValue))} ₽/мес</span>
            </Typography>

            {product.data.price < 100000 ? (
              <Typography
                role="button"
                onClick={switchShowMokkaIframe}
                hidden={!credit.months_2}
                className={classes.textCredit}
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Оплата авансом
                <span className={classes.rassrochkaSpan}>
                  от{" "}
                  {priceMod(Math.trunc(product.data.price / credit.months_2))}{" "}
                  ₽/мес
                </span>
                <span className={classes.mokka}>
                  <Mokka />
                </span>
                |
                <span
                  role="button"
                  onClick={switchShowMokkaInfo}
                  className={classes.mokkaInfo}
                >
                  <MokkaInfo aria-label="mokka info" />
                </span>
              </Typography>
            ) : null}
          </>
        ) : null}

        <Modal
          open={showMokkaIframe}
          onClose={() => setShowMokkaIframe(false)}
          className={classes.modal}
        >
          <MokkaIframeRegistration onClose={() => setShowMokkaIframe(false)} />
        </Modal>

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

        {seller_name ? (
          <div className={classes.seller}>
            {seller_logo.localFile ? (
              <img
                src={seller_logo.localFile.publicURL}
                alt={seller_logo.alt ?? "logo"}
                width={20}
                height={20}
                className={classes.seller__logo}
              />
            ) : null}

            <Typography className={classes.seller__name}>
              Продавец: {seller_name}
            </Typography>

            <button
              aria-label="seller info"
              onClick={() => setShowSellerInfo(!showSellerInfo)}
              onMouseEnter={() => setShowSellerInfo(true)}
              onMouseLeave={() => setShowSellerInfo(false)}
              className={classes.seller__info}
            >
              <MokkaInfo />

              {showSellerInfo ? (
                <div className={classes.saller__pop_up}>
                  <div className={classes.pop_up__rect} />

                  <Typography className={classes.pop_up__text}>
                    {seller_entity}
                  </Typography>

                  <Typography className={classes.pop_up__text}>
                    ОГРН: {ogrn}
                  </Typography>
                </div>
              ) : null}
            </button>
          </div>
        ) : null}
      </Grid>
    </Grid>
  )
}
