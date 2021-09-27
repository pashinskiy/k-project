import * as React from "react"
import { graphql, navigate } from "gatsby"
import { makeStyles, useMediaQuery, Grid, Typography } from "@material-ui/core"
import Layout from "../components/layout"

import Seo from "../components/seo"

import CardProduct from "../components/catalog/catalogCardProduct"
import FilterCategory from "../components/discountedProdicts/filterCategory"
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
 * @param {Object} props.data - объект данных полученый из prismic
 */
export default function Products({ data: { allPrismicProduct } }) {
  const classes = useStyles()

  const mobile = useMediaQuery("(max-width: 1025px)")
  const search = useMediaQuery("(max-width: 1025px)")

  const [title, setTitle] = React.useState("")
  const [category, setCategory] = React.useState("")
  const [subcategory, setSubcategory] = React.useState("")

  const newUrl = new URL(window.location)
  const titleUrl = newUrl.searchParams.has("search")
    ? JSON.parse(newUrl.searchParams.get("search"))
    : ""
  const categoryUrl = newUrl.searchParams.has("category")
    ? JSON.parse(newUrl.searchParams.get("category"))
    : ""
  const subcategoryUrl = newUrl.searchParams.has("subcategory")
    ? JSON.parse(newUrl.searchParams.get("subcategory"))
    : ""

  const [allProducts, setAllProduct] = React.useState(
    allPrismicProduct.edges.map(edge => edge.node)
  )
  const [filterProducts, setFilterProducts] = React.useState([])

  function searchByTitle(edge) {
    console.log(edge)
    if (
      edge.node.data.name.toLowerCase().includes(titleUrl.toLowerCase()) ||
      titleUrl === ""
    )
      return true

    return edge.node.data.tags.some(item =>
      item.tag?.document?.data.name
        .toLowerCase()
        .includes(titleUrl.toLowerCase())
    )
  }

  function searchByCategory(edge) {
    return (
      edge.node.data.main_category.document?.data.name === categoryUrl ||
      categoryUrl === ""
    )
  }

  function searchBySubcategory(edge) {
    return (
      edge.node.data.category.document?.data.name === subcategoryUrl ||
      subcategoryUrl === ""
    )
  }

  if (
    titleUrl !== title ||
    categoryUrl !== category ||
    subcategoryUrl !== subcategory
  ) {
    const newAllProduct = allPrismicProduct.edges
      .filter(
        edge =>
          searchByTitle(edge) &&
          searchByCategory(edge) &&
          searchBySubcategory(edge)
      )
      .map(edge => edge.node)

    setTitle(titleUrl)
    setCategory(categoryUrl)
    setSubcategory(subcategoryUrl)
    setAllProduct(newAllProduct)
    setFilterProducts(newAllProduct)
  }

  const arrayCards = filterProducts.map(product => (
    <CardProduct product={product} key={product.id} />
  ))

  function cleanFilter() {
    navigate(`${window.location.pathname}`)
  }

  function sortingProducts(newValue) {
    setAllProduct(newValue)
    setFilterProducts(newValue)
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

      <FilterCategory
        products={allPrismicProduct.edges
          .filter(
            edge =>
              (edge.node.data.name
                .toLowerCase()
                .includes(titleUrl.toLowerCase()) ||
                titleUrl === "") &&
              (edge.node.data.main_category.document?.data.name ===
                categoryUrl ||
                categoryUrl === "")
          )
          .map(edge => edge.node)}
      />

      <Grid
        container
        justify="space-between"
        className={classes.blockSortAndFilter}
      >
        <Sort products={allProducts} setSortProducts={sortingProducts} />
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
  query {
    allPrismicProduct {
      edges {
        node {
          id
          uid
          data {
            all_product_accessories {
              product_accessories {
                document {
                  ... on PrismicProduct {
                    id
                    uid
                    data {
                      name
                      price
                      old_price
                      images {
                        image {
                          localFile {
                            childImageSharp {
                              gatsbyImageData
                            }
                          }
                          alt
                        }
                      }
                      delivery {
                        document {
                          ... on PrismicDelivery {
                            data {
                              body {
                                ... on PrismicDeliveryBodyDeliveryToCities {
                                  id
                                  items {
                                    city_name
                                    cost
                                    delivery_description
                                    timing
                                  }
                                }
                              }
                              variants {
                                description
                                name
                              }
                            }
                          }
                        }
                      }
                      credit {
                        document {
                          ... on PrismicCredit {
                            data {
                              months_1
                              months_2
                              percent
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            main_category {
              id
              uid
              document {
                ... on PrismicCategory {
                  id
                  data {
                    name
                  }
                }
              }
            }
            category {
              id
              uid
              document {
                ... on PrismicSubcategory {
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
            sale_product
            images {
              image {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData(height: 200)
                  }
                }
              }
            }
            tags {
              tag {
                document {
                  ... on PrismicTag {
                    id
                    data {
                      name
                    }
                  }
                }
              }
            }
            delivery {
              document {
                ... on PrismicDelivery {
                  data {
                    body {
                      ... on PrismicDeliveryBodyDeliveryToCities {
                        id
                        items {
                          city_name
                          cost
                          delivery_description
                          timing
                        }
                      }
                    }
                    variants {
                      description
                      name
                    }
                  }
                }
              }
            }
            credit {
              document {
                ... on PrismicCredit {
                  data {
                    months_1
                    months_2
                    percent
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
                              childImageSharp {
                                fluid(maxHeight: 35) {
                                  aspectRatio
                                  src
                                  srcSet
                                  srcSetWebp
                                }
                              }
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
