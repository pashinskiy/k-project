import * as React from "react"
import { graphql } from "gatsby"
import { makeStyles, useMediaQuery, Grid } from "@material-ui/core"

import Seo from "../components/seo"

import CardProduct from "../components/catalog/catalogCardProduct"
import BreadCrumbs from "../components/breadCrumbs"
import HeaderWithIcon from "../components/headers/headerWithIcon"
import FastLink from "../components/catalog/fastLink"
import Sort from "../components/sort"
import Filter from "../components/filter"
import Pagination from "../components/pagination"

const useStyles = makeStyles(theme => ({
  wrapper: {
    marginTop: "2.18vw",
    "@media(min-width: 1280px)": {
      marginTop: "28px",
    },
    "@media(max-width: 834px)": {
      marginTop: "3.35vw",
    },
    "@media(max-width: 414px)": {
      marginTop: "6.76vw",
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
      padding: "2.39vw 0",
      borderWidth: "0.11vw",
    },
    "@media(max-width: 414px)": {
      padding: "4.83vw 0",
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

const IndexPage = ({ data: { allPrismicProduct, prismicSubcategory } }) => {
  const classes = useStyles()
  const mobile = useMediaQuery("(max-width: 834px)")

  const allProducts = allPrismicProduct.edges.map(edge => edge.node)
  const [filterProducts, setFilterProducts] = React.useState(allProducts)

  const arrayCards = filterProducts.map(product => (
    <CardProduct product={product} key={product.id} />
  ))

  return (
    <div className={classes.wrapper}>
      <Seo title="Home" />
      <BreadCrumbs
        links={[
          {
            title: "Каталог",
            href: `/catalog/`,
          },
        ]}
      />
      <HeaderWithIcon
        title={prismicSubcategory.data.name}
        count={allProducts.length}
      />
      <FastLink products={allProducts} />
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
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query productCategory($uid: String!) {
    prismicSubcategory(uid: { eq: $uid }) {
      data {
        name
      }
    }
    allPrismicProduct(filter: { data: { category: { uid: { eq: $uid } } } }) {
      edges {
        node {
          id
          uid
          data {
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
            color
          }
        }
      }
    }
  }
`
