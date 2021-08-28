import * as React from "react"
import { makeStyles, useMediaQuery, Grid, Typography } from "@material-ui/core"
import Layout from "../components/layout"

import Seo from "../components/seo"

import CardProduct from "../components/catalog/catalogCardProduct"
import Sort from "../components/sort"
import Filter from "../components/filter"
import Pagination from "../components/pagination"
import Search from "../components/search"

import { GlobalStateContext } from "../context/GlobalContextProvider"

const useStyles = makeStyles(theme => ({
  smallText: {
    fontWeight: 400,
    lineHeight: 1.21,

    fontSize: "0.72vw",
    marginTop: "3.12vw",
    "@media(min-width: 1280px)": {
      fontSize: "14px",
      marginTop: "40px",
    },
    "@media(max-width: 1025px)": {
      fontSize: "1.67vw",
      marginTop: "4.79vw",
    },
    "@media(max-width: 767px)": {
      fontSize: "3.38vw",
      marginTop: "9.66vw",
    },
  },
  title: {
    fontWeight: 700,
    lineHeight: 1.21,

    fontSize: "2.81vw",
    marginTop: "0.78vw",
    "@media(min-width: 1280px)": {
      fontSize: "36px",
      marginTop: "10px",
    },
    "@media(max-width: 1025px)": {
      fontSize: "4.31vw",
      marginTop: "1.19vw",
    },
    "@media(max-width: 767px)": {
      fontSize: "4.83vw",
      marginTop: "2.41vw",
    },
  },
  blockSortAndFilter: {
    borderBottom: `solid 1px ${theme.palette.color.secondaryLight}`,
    position: "relative",

    padding: "2.18vw 0",
    "@media(min-width: 1280px)": {
      padding: "28px 0",
      borderWidth: "1px",
    },
    "@media(max-width: 1025px)": {
      padding: "4.79vw 0 2.39vw",
      borderWidth: "0.11vw",
    },
    "@media(max-width: 767px)": {
      padding: "9.66vw 0 4.83vw",
      borderWidth: "0.24vw",
    },
  },
  blockPagination: {
    width: "71.56vw",
    "@media(min-width: 1280px)": {
      width: "916px",
    },
    "@media(max-width: 1025px)": {
      width: "100%",
    },
  },
  title: {
    fontWeight: 700,
    lineHeight: 1.5,

    marginTop: "2.18vw",
    fontSize: "2.34vw",
    "@media(min-width: 1280px)": {
      marginTop: "28px",
      fontSize: "30px",
    },
    "@media(max-width: 1025px)": {
      marginTop: "3.35vw",
      fontSize: "3.59vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "6.76vw",
      fontSize: "7.24vw",
    },
  },
  text: {
    fontWeight: 400,
    lineHeight: 1.5,
    color: "#878787",

    marginTop: "0.93vw",
    fontSize: "1.87vw",
    "@media(min-width: 1280px)": {
      marginTop: "12px",
      fontSize: "24px",
    },
    "@media(max-width: 1025px)": {
      marginTop: "1.43vw",
      fontSize: "2.87vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "2.89vw",
      fontSize: "5.79vw",
    },
  },
  cleanFilter: {
    border: "none",
    borderBottom: "1px solid #878787",
    background: "transparent",

    fontSize: "inherit",
    color: "inherit",
    cursor: "pointer",
  },
}))

/**
 * Страница поиска продуктов
 * @module src/page/products
 */
export default function Products() {
  const classes = useStyles()

  const state = React.useContext(GlobalStateContext)

  const mobile = useMediaQuery("(max-width: 1025px)")
  const search = useMediaQuery("(max-width: 1025px)")

  const newUrl = new URL(window.location)
  const titleUrl = newUrl.searchParams.has("search")
    ? JSON.parse(newUrl.searchParams.get("search"))
    : ""
  const categoryUrl = newUrl.searchParams.has("category")
    ? JSON.parse(newUrl.searchParams.get("category"))
    : ""

  const [url, setUrl] = React.useState(null)
  
  const [allProducts, setAllProduct] = React.useState(
    state.allPrismicProduct.edges.map(edge => edge.node)
  )
  const [filterProducts, setFilterProducts] = React.useState([])

  if (newUrl.href !== url) {
    const newAllProduct = state.allPrismicProduct.edges
      .map(edge => edge.node)
      .filter(
        product =>
          (product.data.name.toLowerCase().includes(titleUrl.toLowerCase()) ||
            titleUrl === "") &&
          (product.data.main_category.document?.data.name === categoryUrl ||
            categoryUrl === "")
      )

    setUrl(newUrl.href)
    setAllProduct(newAllProduct)
    setFilterProducts(newAllProduct)
  }

  const arrayCards = filterProducts.map(product => (
    <CardProduct product={product} key={product.id} />
  ))

  function cleanFilter() {
    newUrl.search = ""
    window.location = newUrl.href
  }

  return (
    <Layout>
      <Seo title="Продукты" />

      {search ? <Search /> : null}

      {/[^\s]/.test(titleUrl) ? (
        <>
          <Typography className={classes.smallText}>Поиск по:</Typography>
          <Typography className={classes.title}>{titleUrl}</Typography>
        </>
      ) : null}

      <Grid
        container
        justify="space-between"
        className={classes.blockSortAndFilter}
      >
        <Sort products={filterProducts} setSortProducts={setFilterProducts} />
        {mobile ? (
          <Filter
            products={allProducts}
            setFilterProducts={setFilterProducts}
          />
        ) : null}
      </Grid>

      <Grid container justify="space-between">
        <Grid className={classes.blockPagination}>
          <Pagination
            pageSize={mobile ? 5 : 10}
            components={arrayCards}
            message={
              <Grid container direction="column">
                <Typography className={classes.title}>
                  К сожалению, таких товаров нет в наличии.
                </Typography>

                <Typography className={classes.text}>
                  Попробуйте изменить настройки фильтра. Или{" "}
                  <button onClick={cleanFilter} className={classes.cleanFilter}>
                    сбросить
                  </button>
                  .
                </Typography>
              </Grid>
            }
          />
        </Grid>
        {mobile ? null : (
          <Filter
            products={allProducts}
            setFilterProducts={setFilterProducts}
          />
        )}
      </Grid>
    </Layout>
  )
}
