import * as React from "react"
import { graphql } from "gatsby"
import { makeStyles, useMediaQuery, Grid, Typography } from "@material-ui/core"
import Layout from "../components/layout"

import Seo from "../components/seo"

import CardProduct from "../components/catalog/catalogCardProduct"
import Sort from "../components/sort"
import Filter from "../components/filter"
import Pagination from "../components/pagination"
import Search from "../components/search"

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
    "@media(max-width: 414px)": {
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
    "@media(max-width: 414px)": {
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
    "@media(max-width: 414px)": {
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
    "@media(max-width: 414px)": {
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
    "@media(max-width: 414px)": {
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

export default function Products({ data: { allPrismicProduct } }) {
  const classes = useStyles()
  const mobile = useMediaQuery("(max-width: 1025px)")
  const search = useMediaQuery("(max-width: 1025px)")

  const url = new URL(window.location.href)
  const titleUrl = url.searchParams.has("search")
    ? JSON.parse(url.searchParams.get("search"))
    : ""
  const categoryUrl = url.searchParams.has("category")
    ? JSON.parse(url.searchParams.get("category"))
    : ""

  const [title, setTitle] = React.useState(null)
  const [category, setCategory] = React.useState(null)
  const [allProducts, setAllProduct] = React.useState(allPrismicProduct.edges.map(edge => edge.node))
  const [filterProducts, setFilterProducts] = React.useState([])

  if (title !== titleUrl) {
    const newAllProduct = allPrismicProduct.edges
      .map(edge => edge.node)
      .filter(product =>
        product.data.name.toLowerCase().includes(titleUrl.toLowerCase())
      )

    setTitle(titleUrl)
    setAllProduct(newAllProduct)
    setFilterProducts(newAllProduct)
  }

  if (category !== categoryUrl && categoryUrl !== "") {
    console.log(allProducts[0].data.main_category.document?.data.name)
    const newAllProduct = allProducts.filter(
      product => product.data.main_category.document?.data.name === categoryUrl
    )

    setCategory(categoryUrl)
    setAllProduct(newAllProduct)
    setFilterProducts(newAllProduct)
  }

  const arrayCards = filterProducts.map(product => (
    <CardProduct product={product} key={product.id} />
  ))

  function cleanFilter() {
    const url = new URL(window.location)
    url.search = ""
    window.location = url.href
  }

  return (
    <Layout>
      <Seo title="Продукты" />

      {search ? <Search /> : null}

      {/[^\s]/.test(title) ? (
        <>
          <Typography className={classes.smallText}>Поиск по:</Typography>
          <Typography className={classes.title}>{title}</Typography>
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

export const query = graphql`
  {
    allPrismicProduct {
      edges {
        node {
          id
          uid
          data {
            main_category {
              document {
                ... on PrismicCategory {
                  id
                  data {
                    name
                  }
                }
              }
            }
            brand {
              document {
                ... on PrismicBrand {
                  id
                  data {
                    name
                    popular
                  }
                }
              }
            }
            name
            price
            old_price
            color
            color_group
            images {
              image {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
            body {
              ... on PrismicProductBodyStickers {
                slice_type
                items {
                  sticker {
                    document {
                      ... on PrismicSticker {
                        id
                        data {
                          image {
                            alt
                            localFile {
                              publicURL
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              ... on PrismicProductBodyFeatures {
                slice_type
                items {
                  feature
                  image {
                    alt
                    localFile {
                      childImageSharp {
                        gatsbyImageData(height: 30)
                      }
                    }
                  }
                }
              }
            }
            body1 {
              ... on PrismicProductBody1Characteristics {
                id
                slice_type
                items {
                  characteristic {
                    document {
                      ... on PrismicCharacteristic {
                        id
                        data {
                          name
                          variant
                          order
                        }
                      }
                    }
                  }
                  value
                }
              }
            }
          }
        }
      }
    }
  }
`
