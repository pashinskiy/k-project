import * as React from "react"
import { graphql, navigate } from "gatsby"
import { makeStyles, useMediaQuery, Grid, Typography } from "@material-ui/core"

import Seo from "../components/seo"

import CardProduct from "../components/catalog/catalogCardProduct"
import BreadCrumbs from "../components/breadCrumbs"
import HeaderWithIcon from "../components/headers/headerWithIcon"
import FastLink from "../components/catalog/fastLink"
import Sort from "../components/sort"
import Filter from "../components/filter"
import Pagination from "../components/pagination"
import Layout from "../components/layout"

const useStyles = makeStyles(theme => ({
  wrapper: {
    marginTop: "2.18vw",
    "@media(min-width: 1280px)": {
      marginTop: "28px",
    },
    "@media(max-width: 1025px)": {
      marginTop: "3.35vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "6.76vw",
    },
  },
  blockSortAndFilter: {
    borderBottom: `solid 1px ${theme.palette.color.secondaryLight}`,
    position: "relative",

    padding: "3.2vw 0 2.18vw",
    "@media(min-width: 1280px)": {
      padding: "41px 0 28px",
      borderWidth: "1px",
    },
    "@media(max-width: 1025px)": {
      padding: "4.45vw 0 2.39vw",
      borderWidth: "0.11vw",
    },
    "@media(max-width: 767px)": {
      padding: "14vw 0 4.83vw",
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

const IndexPage = ({ data: { prismicSubcategory, allPrismicProduct } }) => {
  const classes = useStyles()
  const mobile = useMediaQuery("(max-width: 1025px)")

  const [allProducts, setAllProducts] = React.useState(
    allPrismicProduct.edges.map(edge => edge.node)
  )
  const [filterProducts, setFilterProducts] = React.useState([])

  function sortingProducts(newValue){
    setAllProducts(newValue)
    setFilterProducts(newValue)
  }

  const arrayCards = filterProducts.map(product => (
    <CardProduct product={product} key={product.id} />
  ))

  function cleanFilter() {
    navigate(`${window.location.pathname}`)
  }

  return (
    <Layout>
      <div className={classes.wrapper}>
        <Seo title="Home" />
        <BreadCrumbs
          links={[
            {
              title: "Каталог",
              href: `/products/`,
            },
          ]}
        />
        <HeaderWithIcon
          title={prismicSubcategory.data.name}
          count={allProducts.length}
          subcategory
        />
        <FastLink products={allProducts} />
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
                    <button
                      onClick={cleanFilter}
                      className={classes.cleanFilter}
                    >
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
      </div>
    </Layout>
  )
}

/**
 * Шаблон страницы подкатегории
 * @module src/templates/subcategory
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.data - объект данных полученый из prismic
 */
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
