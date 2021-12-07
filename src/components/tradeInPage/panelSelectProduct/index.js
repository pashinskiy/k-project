import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { makeStyles, Typography } from "@material-ui/core"

import ProductsScrollBar from "./scrollBar/productsScrollBar"

import Cross from "../../../../static/svg/cross.svg"

const useStyles = makeStyles(theme => ({
  wrapper: {
    background: theme.palette.background.main,

    borderRadius: "1.56vw",
    padding: "2.34vw 0",
    width: "89.37vw",
    "@media(min-width: 1280px)": {
      borderRadius: 20,
      padding: "30px 0",
      width: 1144,
    },
    "@media(max-width: 1025px)": {
      borderRadius: "2.39vw",
      padding: "3.59vw 0",
      width: "93.28vw",
    },
    "@media(max-width: 767px)": {
      borderRadius: "4.83vw",
      padding: "7.24vw 0",
      width: "86.47vw",
    },
  },
  wrapper_first_block: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",

    padding: "0 2.34vw",
    "@media(min-width: 1280px)": {
      padding: "0 30px",
    },
    "@media(max-width: 1025px)": {
      padding: "0 3.59vw",
    },
    "@media(max-width: 767px)": {
      padding: "0 7.24vw",
    },
  },
  title: {
    fontWeight: 700,
    lineHeight: 1,

    fontSize: "2.81vw",
    "@media(max-width: 1025px)": {
      fontSize: 36,
    },
    "@media(max-width: 1025px)": {
      fontSize: "4.31vw",
    },
    "@media(max-width: 767px)": {
      fontSize: "8.69vw",
    },

    "& font": {
      ...theme.typography.body2,
      fontWeight: "inherit",
      lineHeight: "inherit",
      fontSize: "inherit",
    },
  },
  cross: {
    width: "1.56vw",
    height: "1.56vw",
    "@media(max-width: 1025px)": {
      width: 20,
      height: 20,
    },
    "@media(max-width: 1025px)": {
      width: "2.39vw",
      height: "2.39vw",
    },
    "@media(max-width: 767px)": {
      width: "4.83vw",
      height: "4.83vw",
    },
  },
  wrapper_search: {
    display: "flex",
    justifyContent: "space-between",
    background: theme.palette.background.secondary,

    marginTop: "1.25vw",
    marginLeft: "2.34vw",
    borderRadius: "0.93vw",
    width: "46.87vw",
    height: "3.51vw",
    padding: "1.09vw 1.25vw",
    "@media (min-width: 1280px)": {
      marginTop: 16,
      marginLeft: 30,
      borderRadius: 12,
      width: 600,
      height: 45,
      padding: "14px 16px",
    },
    "@media (max-width: 1025px)": {
      marginTop: "1.91vw",
      marginLeft: "3.59vw",
      borderRadius: "2.39vw",
      width: "53.95vw",
      height: "4.79vw",
      padding: "1.37vw 1.91vw",
    },
    "@media (max-width: 767px)": {
      marginTop: "3.86vw",
      marginLeft: "7.24vw",
      borderRadius: "4.83vw",
      width: "69.08vw",
      height: "9.66vw",
      padding: "2.77vw 3.86vw",
    },

    "& input": {
      background: "none",
      border: "none",
      outline: "none",

      width: "90.33%",
      "@media (max-width: 1025px)": {
        width: "87.11%",
      },
      "@media (max-width: 767px)": {
        width: "78.35%",
      },
    },
    "& input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active": {
      boxShadow: `0 0 0 30px ${theme.palette.background.secondary} inset !important`,
    },
    "& input[type=text]": {
      fontSize: "14px !important",
      fontWeight: "Inter !important",
    },
  },
  img: {
    width: 16,
    height: "auto",
    display: "block",
    marginRight: 5,
    "@media (max-width: 1025px)": {
      width: 24,
      marginRight: 0,
    },
  },
  wrapper_scroll_bar: {
    marginTop: "3.12vw",
    "@media(max-width: 1025px)": {
      marginTop: 40,
    },
    "@media(max-width: 1025px)": {
      marginTop: "4.79vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "9.66vw",
    },
  },
}))

/**
 * Панель выбора продукта
 * @module src/components/tradeInPage/panelSelectProduct
 * @param {Object} props - объект свойств компонента React
 * @param {Object[]} props.products - массив объектов продуктов полученный из prismic
 * @param {Object} props.selectProduct - объект выбранного продукта
 * @param {function} props.setProduct - функция выбора продукта
 * @param {function} props.close - функция закрытия
 */
export default function PanelSelectProduct({
  products,
  selectProduct,
  setProduct,
  close,
  data,
}) {
  const classes = useStyles()

  const [search, setSearch] = React.useState("")

  const foundProducts = React.useMemo(() => {
    if (search === "") return products

    return products.filter(product => {
      if (product.data.name.toLowerCase().includes(search.toLowerCase()))
        return true

      if (
        product.data.search_phrases
          ?.toLowerCase()
          .includes(search.toLowerCase())
      )
        return true

      return product.data.tags.some(item =>
        item.tag?.document?.data.name
          .toLowerCase()
          .includes(search.toLowerCase())
      )
    })
  }, [search])

  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapper_first_block}>
        <Typography className={classes.title}>
          Выберите <font>устройство</font>
        </Typography>

        <button
          id="close"
          aria-label="close"
          onClick={close}
          className={classes.cross}
        >
          <Cross />
        </button>
      </div>

      <div className={classes.wrapper_search}>
        <img
          src={
            data.allPrismicHeader.edges[0].node.data.find_img.localFile
              ?.publicURL
          }
          alt={data.allPrismicHeader.edges[0].node.data.find_img.alt ?? "img"}
          className={classes.search__img}
        />

        <input
          type="text"
          onInput={e => setSearch(e.currentTarget.value)}
          placeholder={
            data.allPrismicHeader.edges[0].node.data.field_example.text
          }
          name="search"
        />
      </div>

      <div className={classes.wrapper_scroll_bar}>
        <ProductsScrollBar
          products={foundProducts}
          selectProduct={selectProduct}
          setProduct={setProduct}
          close={close}
        />
      </div>
    </div>
  )
}
