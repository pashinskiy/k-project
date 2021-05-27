import React, { useState } from "react"
import HeaderWithIcon from "../components/headers/headerWithIcon"
import FavoritesIcon from "../../static/svg/favoritesIcon.svg"
import { Grid, makeStyles, Typography, useMediaQuery } from "@material-ui/core"
import Layout from "../components/layout"
import CardSimilarProduct from "../components/productPage/similarProduct/cardProduct"
import { graphql, useStaticQuery } from "gatsby"
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

    padding: "1.56vw 0",
    "@media(min-width: 1280px)": {
      padding: "20px 0",
      borderWidth: "1px",
    },
    "@media(max-width: 834px)": {
      padding: "2.39vw 0",
      borderWidth: "0.11vw",
    },
    "@media(max-width: 414px)": {
      padding: "4.83vw 0",
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

  const isPad = useMediaQuery("(max-width: 834px)")
  const isMobile = useMediaQuery("(max-width: 414px)")

  const [favoritesArray, setFavoritesArray] = useState(favorites)
  const dataProducts = data.allPrismicProduct.edges.map(edge => edge.node)
  const dataCategory = data.allPrismicCategory.edges.map(edge => edge.node)
  const [filterProducts, setFilterProducts] = React.useState(dataProducts)

  const arrayCards = favoritesArray.length !== 0 ? (
    filterProducts.map((product, i) =>
      favorites.indexOf(product.uid) !== -1 ? (
        <Grid
          item
          xs={isMobile ? 12 : 4}
          className={classes.itemRoot}
          key={product.uid + "_" + i}
        >
          {isMobile ? <CardProduct product={product}
            afterChange={setNewFavorites} /> : <CardSimilarProduct
            product={product}
            afterChange={setNewFavorites}
          />}
        </Grid>
      ) : null
    )
  ) : (
    <Typography align="center">
      Добавьте понравившийся товар в избранное
    </Typography>
  )

  // обновление списка Favorites
  function setNewFavorites() {
    let favorites = localStorage.getItem("favorites")
    favorites = favorites === null || !favorites ? [] : JSON.parse(favorites)
    setFavoritesArray(favorites)
  }

  return (
    <Layout>
      <Seo title="Favorites" />
      <HeaderWithIcon
        icon={<FavoritesIcon />}
        title="Избранное"
        divider={false}
        count={favoritesArray.length ? favoritesArray.length : "0"}
      />
      <SmallCategoriesPanel categories={dataCategory} />
      <Grid container justify="space-between" className={classes.sortFiltwrapper}>
        <Sort products={filterProducts} setSortProducts={setFilterProducts} />
      </Grid>

      <Grid container  alignItems="center" className={classes.containerRoot}>
      {arrayCards}
      {/* <Pagination pageSize={isMobile ? 5 : 10} components={arrayCards} /> */}
      </Grid>
    </Layout>
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
              color_name
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