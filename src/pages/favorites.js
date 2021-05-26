import React, { useState } from "react"
import HeaderWithIcon from "../components/headers/headerWithIcon"
import FavoritesIcon from "../../static/svg/favoritesIcon.svg"
import { Grid, makeStyles, Typography } from "@material-ui/core"
import Layout from "../components/layout"
import CardSimilarProduct from "../components/productPage/similarProduct/cardProduct"
import { graphql, useStaticQuery } from "gatsby"
import Seo from "../components/seo"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",
  },
}))

export default function FavoritesPage() {
  const classes = useStyles()
  const products = useStaticQuery(graphql`
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
    }
  `)

  //считываем состояниe LocalStorage
  let favorites = localStorage.getItem("favorites")
  favorites = favorites === null || !favorites ? [] : JSON.parse(favorites)

  const [favoritesArray, setFavoritesArray] = useState(favorites)
  const data = products.allPrismicProduct.edges
  console.log("rendered self")
  // const filteredData = data.filter(product => favorites.indexOf(product.node.uid) !== -1)
  // console.log(filteredData)

  // обновление списка Favorites
  function setNewFavorites() {
    let favorites = localStorage.getItem("favorites")
    favorites = favorites === null || !favorites ? [] : JSON.parse(favorites)
    setFavoritesArray(favorites)
    console.log("changed")
  }

  return (
    <Layout>
      <Seo title="Favorites" />
      <HeaderWithIcon
        icon={<FavoritesIcon />}
        title="Избранное"
        divider={false}
        count={favoritesArray.length}
      />
      <Grid container>
        {favoritesArray.length !== 0 ? (
          data.map((product, i) =>
            favorites.indexOf(product.node.uid) !== -1 ? (
              <div
                key={product.node.uid + "_" + i}
              >
                <CardSimilarProduct product={product.node}/>
              </div>
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
