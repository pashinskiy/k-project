import React, { useState } from "react"
import HeaderWithIcon from "../components/headers/headerWithIcon"
import FavoritesIcon from "../../static/svg/favoritesIcon.svg"
import { Grid, makeStyles, Typography, useMediaQuery } from "@material-ui/core"
import Layout from "../components/layout"
import CardSimilarProduct from "../components/productPage/similarProduct/cardProduct"
import { graphql, useStaticQuery } from "gatsby"
import Seo from "../components/seo"
import SmallCategoriesPanel from "../components/smallCategoriesPanel"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",
  },
  itemRoot: {
    marginBottom: "80px",
  },
}))

export default function FavoritesPage() {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query FavPage {
      allPrismicProduct {
        edges {
          node {
            data {
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
              name
              price
            }
            uid
          }
        }
      }
      allPrismicCategory {
        edges {
          node {
            data {
              name
            }
          }
        }
      }
    }
  `)

  //считываем состояниe LocalStorage
  let favorites = localStorage.getItem("favorites")
  favorites = favorites === null || !favorites ? [] : JSON.parse(favorites)

  const isMobile = useMediaQuery("(max-width: 414px)")

  const [favoritesArray, setFavoritesArray] = useState(favorites)
  const dataProducts = data.allPrismicProduct.edges
  const dataCategory = data.allPrismicCategory.edges

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
      <Grid container justify="space-evenly" className={classes.containerRoot}>
        {favoritesArray.length !== 0 ? (
          dataProducts.map((product, i) =>
            favorites.indexOf(product.node.uid) !== -1 ? (
              <Grid item xs={isMobile ? 12 : 4} className={classes.itemRoot}>
                <CardSimilarProduct
                  key={product.node.uid + "_" + i}
                  product={product.node}
                  afterChange={setNewFavorites}
                />
              </Grid>
            ) : null
          )
        ) : (
          <Typography align="center">
            Добавьте понравившийся товар в избранное
          </Typography>
        )}
      </Grid>
    </Layout>
  )
}
