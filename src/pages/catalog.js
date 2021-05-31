import * as React from "react"
import { graphql } from "gatsby"
import { makeStyles, useMediaQuery, Grid } from "@material-ui/core"

import Layout from "../components/layout"
import Seo from "../components/seo"

import BreadCrumbs from "../components/breadCrumbs"
import HeaderWithIcon from "../components/headers/headerWithIcon"
import CardProduct from "../components/catalog/catalogCardProduct"
import Pagination from "../components/pagination"
import Filter from "../components/filter"
import Sort from "../components/sort"
import FastLink from "../components/catalog/fastLink"

const useStyles = makeStyles(theme => ({
  blockSortAndFilter: {
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

const IndexPage = ({ data }) => {
  const classes = useStyles()
  const mobile = useMediaQuery("(max-width: 834px)")

  const allProducts = data.allPrismicProduct.edges.map(edge => edge.node)
  const [filterProducts, setFilterProducts] = React.useState(allProducts)

  const arrayCards = filterProducts.map(product => (
    <CardProduct product={product} key={product.id} />
  ))

  return (
    <Layout>
      <Seo title="Home" />
      <BreadCrumbs
        links={[
          {
            title: "Каталог",
            href: `/catalog/`,
          },
        ]}
      />
      {/* <HeaderWithIcon title={} count={allProducts.length} /> */}
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
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    allPrismicProduct {
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
  }
`
