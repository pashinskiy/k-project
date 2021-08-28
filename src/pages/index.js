import * as React from "react"
import { graphql } from "gatsby"
import { makeStyles } from "@material-ui/core"
import MainPageSlider from "../components/mainPageSlider"
import Seo from "../components/seo"
import Card from "../components/mainPage/dayProduct"
import Categories from "../components/mainPage/categories"
import News from "../components/mainPage/news"
import Advantages from "../components/mainPage/advantages"
import Sales from "../components/mainPage/sales"
import Hot from "../components/mainPage/hot"
import NewProducts from "../components/mainPage/newProducts"
import Popular from "../components/mainPage/popular"
import SocialNetworks from "../components/mainPage/social"
import Layout from "../components/layout"

const useStyles = makeStyles(theme => ({
  day_news_categories: {
    display: "grid",
    gridTemplateColumns: "1fr 854px",
    gap: 40,
    rowGap: 0,
    "& .index--day--product": {
      gridRow: "span 2",
    },
    "@media (max-width: 1279px)": {
      gap: 22,
      rowGap: 40,
      gridTemplateColumns: "1fr auto",
      "& .index--day--product": {
        gridRow: 2,
      },
    },
    "@media (max-width: 767px)": {
      "& .index--day--product": {
        gridColumn: "span 2",
      },
    },
  },
}))

const IndexPage = ({ data }) => {
  const classes = useStyles()

  const allSales = data.allPrismicSales.edges.map(edge => edge.node)

  const allPromotionBanners = data.allPrismicPromotionBanner.edges.map(
    edge => edge.node
  )

  return (
    <Layout>
      <Seo title="Krypton – интернет-маркетплейс, который вы так долго искали" />
      <div style={{ marginBottom: 28 }} />
      <MainPageSlider array={allSales} variant={"sales"} />
      <div style={{ marginBottom: 40 }} />
      <div className={classes.day_news_categories}>
        <Card data={data} />
        <News data={data.allPrismicStories} />
        <Categories data={data.allPrismicCategory} />
      </div>
      <Advantages data={data} />
      <Sales data={data} />
      <div style={{ marginBottom: 80 }} />
      <Hot data={data} />
      <div style={{ marginBottom: 80 }} />
      <MainPageSlider array={allPromotionBanners} variant={"promotionBanner"} />
      <div style={{ marginBottom: 80 }} />
      <NewProducts data={data} />
      <div style={{ marginBottom: 80 }} />
      <Popular data={data} />
      <div style={{ marginBottom: 100 }} />
      <SocialNetworks data={data} />
    </Layout>
  )
}

/**
 * Главная страница
 * @module src/page/index
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.data - объект данных полученый из prismic
 */
export default IndexPage

export const query = graphql`
  query MainPage {
    allPrismicMainPage {
      edges {
        node {
          data {
            hot {
              hot_product {
                document {
                  ... on PrismicProduct {
                    id
                    uid
                    data {
                      all_product_accessories {
                        product_accessories {
                          document {
                            ... on PrismicProduct {
                              uid
                              id
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
                                price
                                name
                              }
                            }
                          }
                        }
                      }
                      images {
                        image {
                          localFile {
                            childImageSharp {
                              gatsbyImageData(height: 200)
                            }
                          }
                        }
                      }
                      price
                      name
                    }
                  }
                }
              }
            }
            new {
              new_product {
                document {
                  ... on PrismicProduct {
                    id
                    uid
                    data {
                      all_product_accessories {
                        product_accessories {
                          document {
                            ... on PrismicProduct {
                              uid
                              id
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
                                price
                                name
                              }
                            }
                          }
                        }
                      }
                      images {
                        image {
                          localFile {
                            childImageSharp {
                              gatsbyImageData(height: 200)
                            }
                          }
                        }
                      }
                      price
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    allPrismicBrand {
      edges {
        node {
          data {
            name
            body {
              ... on PrismicBrandBodyLogo {
                id
                primary {
                  image {
                    localFile {
                      childImageSharp {
                        gatsbyImageData(
                          height: 100
                          width: 100
                          transformOptions: { fit: CONTAIN }
                        )
                      }
                    }
                  }
                }
              }
            }
            popular
          }
        }
      }
    }
    allPrismicSale {
      edges {
        node {
          data {
            sale_img {
              alt
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 297
                    transformOptions: { fit: CONTAIN }
                  )
                }
              }
            }
            sale_name {
              raw
            }
            sale_value
            link
            tumbler_link
          }
        }
      }
    }
    allPrismicAdvantage(sort: { fields: data___priority }) {
      edges {
        node {
          data {
            adv_img {
              alt
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 194
                    transformOptions: { fit: CONTAIN }
                  )
                }
              }
            }
            adv_title {
              raw
            }
          }
        }
      }
    }
    allPrismicSales {
      edges {
        node {
          uid
          data {
            creationdate
            enddate
            startdate
            previewimage {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 1144
                    transformOptions: { fit: CONTAIN }
                  )
                }
              }
              alt
            }
            previewtext {
              text
            }
            title {
              text
            }
            salestext {
              html
            }
            link {
              text
            }
          }
        }
      }
    }
    allPrismicStories {
      edges {
        node {
          data {
            link
            tumbler_link
            text {
              text
            }
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 144
                    transformOptions: { fit: CONTAIN }
                  )
                }
              }
            }
          }
        }
      }
    }
    allPrismicPromotionBanner {
      edges {
        node {
          data {
            link
            tumbler_link
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 1144
                    transformOptions: { fit: CONTAIN }
                  )
                }
              }
              alt
            }
          }
        }
      }
    }
    allPrismicDayProduct {
      edges {
        node {
          data {
            product {
              document {
                ... on PrismicProduct {
                  id
                  uid
                  data {
                    all_product_accessories {
                      product_accessories {
                        document {
                          ... on PrismicProduct {
                            uid
                            id
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
                              price
                              name
                            }
                          }
                        }
                      }
                    }
                    name
                    price
                    old_price
                    images {
                      image {
                        alt
                        localFile {
                          childImageSharp {
                            gatsbyImageData(
                              height: 200
                              transformOptions: { fit: CONTAIN }
                            )
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
      }
    }
    allPrismicCategory(sort: { fields: data___order }) {
      edges {
        node {
          uid
          data {
            image {
              alt
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 235
                    transformOptions: { fit: CONTAIN }
                  )
                }
              }
            }
            name
          }
        }
      }
    }
    allPrismicFooterBody2Social {
      edges {
        node {
          primary {
            social_name {
              raw
            }
            social_img_white {
              localFile {
                publicURL
              }
              alt
            }
            link {
              url
            }
          }
        }
      }
    }
  }
`
