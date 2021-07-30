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
    "@media(max-width: 414px)": {
      padding: "11.83vw 0 6.76vw",
      borderWidth: "0.24vw",
    },
  },
  itemRoot: {
    margin: "40px 0",
    "@media(max-width: 414px)": {
      margin: "0px",
    },
  },
}))

const IndexPage = ({ data }) => {
  const classes = useStyles()

  //считываем состояниe LocalStorage
  let favorites = localStorage.getItem("favorites")
  favorites = favorites === null || !favorites ? [] : JSON.parse(favorites)

  const isMobile = useMediaQuery("(max-width: 414px)")

  const [favoritesArray, setFavoritesArray] = useState(favorites)
  const dataProducts = data.allPrismicProduct.edges.map(edge => edge.node)
  const dataCategory = data.allPrismicCategory.edges.map(edge => edge.node)
  const [filterProducts, setFilterProducts] = React.useState(dataProducts)

  const arrayCards = filterProducts
    .filter(product => favorites.includes(product.id))
    .map((product, i) => (
      <Grid
        item
        xs={isMobile ? 12 : 4}
        className={classes.itemRoot}
        key={product.uid + "_" + i}
      >
        {isMobile ? (
          <CardProduct product={product} afterChange={setNewFavorites} />
        ) : (
          <CardSimilarProduct product={product} afterChange={setNewFavorites} />
        )}
      </Grid>
    ))

    console.log(favorites)
  // обновление списка Favorites
  function setNewFavorites() {
    let favorites = localStorage.getItem("favorites")
    favorites = favorites === null || !favorites ? [] : JSON.parse(favorites)
    setFavoritesArray(favorites)
  }

  return (
    <>
      <Seo title="Favorites" />
      <HeaderWithIcon
        icon={<FavoritesIcon />}
        title="Избранное"
        divider={false}
        count={favoritesArray.length ? favoritesArray.length : "0"}
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
    </>
  )
}

export default IndexPage

export const query = graphql`
  query FavPage {
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
                  }
                }
              }
            }
            name
            price
            old_price
            color
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
            color
          }
        }
      }
    }
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
