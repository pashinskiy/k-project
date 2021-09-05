import React, { useState } from "react"
import HeaderWithIcon from "../components/headers/headerWithIcon"
import FavoritesIcon from "../../static/svg/favoritesIcon.svg"
import { Grid, makeStyles, Typography, useMediaQuery } from "@material-ui/core"
import CardSimilarProduct from "../components/scrollBar/productsScrollBar/cardProduct"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import SmallCategoriesPanel from "../components/smallCategoriesPanel"
import Sort from "../components/sort"
import Pagination from "../components/pagination"
import CardProduct from "../components/catalog/catalogCardProduct"
import Layout from "../components/layout"

import { GlobalStateContext } from "../context/GlobalContextProvider"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",
  },
  sortFiltwrapper: {
    borderBottom: `solid 1px ${theme.palette.color.secondaryLight}`,
    position: "relative",

    padding: "3.12vw 0 2.18vw",
    "@media(min-width: 1280px)": {
      padding: "40px 0 28px",
      borderWidth: "1px",
    },
    "@media(max-width: 1025px)": {
      padding: "5.87vw 0 2.39vw",
      borderWidth: "0.11vw",
    },
    "@media(max-width: 767px)": {
      padding: "11.83vw 0 6.76vw",
      borderWidth: "0.24vw",
    },
  },
  itemRoot: {
    margin: "40px 0",
    "@media(max-width: 767px)": {
      margin: "0px",
    },
  },
}))

const IndexPage = ({ data }) => {
  const classes = useStyles()
  const state = React.useContext(GlobalStateContext)
  const isMobile = useMediaQuery("(max-width: 767px)")

  const dataCategory = data.allPrismicCategory.edges.map(edge => edge.node)
  const [filterProducts, setFilterProducts] = React.useState(state.favorites)

  const arrayCards = state.favorites.map((product, i) => (
    <Grid
      item
      xs={isMobile ? 12 : 4}
      className={classes.itemRoot}
      key={product.uid + "_" + i}
    >
      {isMobile ? (
        <CardProduct product={product} />
      ) : (
        <CardSimilarProduct product={product} />
      )}
    </Grid>
  ))

  return (
    <Layout>
      <Seo title="Favorites" />
      <HeaderWithIcon
        icon={<FavoritesIcon />}
        title="Избранное"
        divider={false}
        count={state.favorites.length ? state.favorites.length : "0"}
        subcategory
      />
      <SmallCategoriesPanel categories={dataCategory} />
      <Grid
        container
        justify="space-between"
        className={classes.sortFiltwrapper}
      >
        <Sort products={filterProducts} setSortProducts={setFilterProducts} />
      </Grid>

      <Grid container alignItems="center" className={classes.containerRoot}>
        {arrayCards.length !== 0 ? (
          <Pagination pageSize={isMobile ? 5 : 6} components={arrayCards} />
        ) : (
          <Typography align="center">
            Добавьте понравившийся товар в избранное
          </Typography>
        )}
      </Grid>
    </Layout>
  )
}

/**
 * Страница избранного
 * @module src/page/favorites
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.data - объект данных полученый из prismic
 */
export default IndexPage

export const query = graphql`
  query FavPage {
    allPrismicCategory {
      edges {
        node {
          data {
            name
          }
          uid
        }
      }
    }
  }
`
