import * as React from "react"
import { graphql } from "gatsby"
import { makeStyles, useMediaQuery, Grid, Typography } from "@material-ui/core"

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
    "@media(max-width: 834px)": {
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
    "@media(max-width: 834px)": {
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
    "@media(max-width: 834px)": {
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
    "@media(max-width: 834px)": {
      width: "100%",
    },
  },
}))

export default function Products({ data: { allPrismicProduct } }) {
  const classes = useStyles()
  const mobile = useMediaQuery("(max-width: 834px)")
  const search = useMediaQuery("(max-width: 1024px)")

  const url = new URL(window.location.href)
  const titleUrl = url.searchParams.has("search")
    ? JSON.parse(url.searchParams.get("search"))
    : ""

  const [title, setTitle] = React.useState(null)
  const [allProducts, setAllProduct] = React.useState([])
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

  const arrayCards = filterProducts.map(product => (
    <CardProduct product={product} key={product.id} />
  ))

  return (
    <>
      <Seo title="Продукты" />

      {search ? <Search /> : null}

      <Typography className={classes.smallText}>Поиск по:</Typography>
      <Typography className={classes.title}>{title}</Typography>

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
          <Pagination pageSize={mobile ? 5 : 10} components={arrayCards} />
        </Grid>
        {mobile ? null : (
          <Filter
            products={allProducts}
            setFilterProducts={setFilterProducts}
          />
        )}
      </Grid>
    </>
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
            color_name
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
