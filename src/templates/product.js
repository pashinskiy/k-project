import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import CardProduct from "../components/productPage/cardProduct"

import Landing from "../components/productPage/landing"
import Gallery from "../components/productPage/gallery"
import DeliveryCards from "../components/productPage/delivery"
import SimilarProduct from "../components/productPage/similarProduct"
import TabPanel from "../components/productPage/tabPanel"
import CharacteristicsBlock from "../components/productPage/characteristics"
import CategoryPage from "../components/categoryPage"

const Product = ({
  data: { prismicProduct, allPrismicProduct, allPrismicCatalog },
}) => {
  return (
    <Layout>
      <Seo title="Home" />
      <TabPanel
        links={[
          {
            title: "О товаре",
            href: "#about_product",
          },
          {
            title: "Описание",
            href: "#description",
          },
          {
            title: "Фото",
            href: "#photo",
          },
          {
            title: "Характеристики",
            href: "#characteristics",
          },
          {
            title: "Доставка",
            href: "#delivery",
          },
        ]}
      />
      <div id="about_product" />
      <CardProduct
        prismicProduct={prismicProduct}
        allPrismicProduct={allPrismicProduct}
      />
      <SimilarProduct
        products={allPrismicProduct.edges.map(edge => edge.node)}
      />
      <div id="description" />
      <Landing slices={prismicProduct.data.body2} />
      <div id="photo" />
      <Gallery
        imagesArr={prismicProduct.data.photos.map(photo => photo.image)}
      />
      <div id="characteristics" />
      <CharacteristicsBlock props={prismicProduct} />
      <div id="delivery" />
      <DeliveryCards prismicProduct={prismicProduct} />
      <CategoryPage allPrismicCatalog={allPrismicCatalog} />
    </Layout>
  )
}

export default Product

export const pageQuery = graphql`
  query ProductBySlug($uid: String!) {
    prismicProduct(uid: { eq: $uid }) {
      uid
      data {
        brand
        name
        color_name
        color
        old_price
        price
        images {
          image {
            localFile {
              childImageSharp {
                fluid(
                  maxWidth: 750
                  srcSetBreakpoints: [
                    750
                    700
                    650
                    600
                    550
                    500
                    450
                    400
                    350
                    300
                    250
                    200
                    150
                    100
                    50
                  ]
                  fit: CONTAIN
                ) {
                  srcSetWebp
                  srcSet
                  src
                  aspectRatio
                }
              }
            }
          }
        }
        photos {
          image {
            alt
            localFile {
              childImageSharp {
                gatsbyImageData(
                  height: 400
                  width: 1224
                  transformOptions: { cropFocus: CENTER, fit: COVER }
                  outputPixelDensities: [0.2, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2]
                  sizes: "(min-width: 1280px) 1224px, 95.62vw"
                )
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
          ... on PrismicProductBodyBrand {
            slice_type
            primary {
              image {
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
                alt
              }
            }
          }
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
                            fluid(maxHeight: 46) {
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
                localFile {
                  childImageSharp {
                    gatsbyImageData(height: 30)
                  }
                }
                alt
              }
            }
          }
        }
        body1 {
          ... on PrismicProductBody1Characteristics {
            items {
              value
              characteristic {
                document {
                  ... on PrismicCharacteristic {
                    data {
                      name
                    }
                  }
                }
              }
            }
            primary {
              title
            }
          }
        }
        description
        documents {
          doc_title {
            text
          }
          file {
            url
          }
          doc_description {
            text
          }
        }
        body2 {
          ... on PrismicProductBody2OnlyText {
            slice_type
            primary {
              accent_text
              bold_text
              normal_text
              small_text
              order
            }
          }
          ... on PrismicProductBody2OneImage {
            slice_type
            primary {
              order
              image {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      height: 400
                      width: 1224
                      transformOptions: { cropFocus: CENTER, fit: COVER }
                      outputPixelDensities: [
                        0.25
                        0.5
                        0.75
                        1
                        1.25
                        1.5
                        1.75
                        2
                      ]
                      sizes: "(min-width: 1280px) 1224px, 95.62vw"
                    )
                  }
                }
              }
            }
          }
          ... on PrismicProductBody2TwoImages {
            slice_type
            primary {
              order
              big_text_1
              big_text_2
              color_text_1
              color_text_2
              normal_text_1
              normal_text_2
              priority_1
              priority_2
              vertical_align_1
              vertical_align_2
              image_1 {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      height: 400
                      width: 598
                      transformOptions: { cropFocus: CENTER, fit: COVER }
                      outputPixelDensities: [
                        0.35
                        0.5
                        0.75
                        1
                        1.25
                        1.5
                        1.75
                        2
                      ]
                      sizes: "(min-width: 1280px) 598px, (max-width: 414px) 86.47vw, (max-width: 834px) 44.96vw, 50vw"
                    )
                  }
                }
              }
              image_2 {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      height: 400
                      width: 598
                      transformOptions: { cropFocus: CENTER, fit: COVER }
                      outputPixelDensities: [
                        0.35
                        0.5
                        0.75
                        1
                        1.25
                        1.5
                        1.75
                        2
                      ]
                      sizes: "(min-width: 1280px) 598px, (max-width: 414px) 86.47vw, (max-width: 834px) 44.96vw, 46.71vw"
                    )
                  }
                }
              }
            }
          }
          ... on PrismicProductBody2ImageAndText {
            slice_type
            primary {
              accent_text
              bold_text
              normal_text
              order
              position_text
              small_text
              image {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      height: 400
                      width: 700
                      transformOptions: { cropFocus: CENTER, fit: COVER }
                      outputPixelDensities: [
                        0.35
                        0.5
                        0.75
                        1
                        1.25
                        1.5
                        1.75
                        2
                      ]
                      sizes: "(min-width: 1280px) 700px, (max-width: 414px) 86.47vw, (max-width: 834px) 44.96vw, 54.68vw"
                    )
                  }
                }
              }
            }
          }
        }
      }
    }
    allPrismicProduct {
      edges {
        node {
          data {
            name
            price
            color_name
            color
            images {
              image {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      width: 250
                      transformOptions: { fit: CONTAIN }
                      outputPixelDensities: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2]
                      sizes: "(min-width: 1280px) 250px, (max-width: 414px) 49.51vw, (max-width: 834px) 29.97vw, 19.53vw"
                    )
                  }
                }
              }
            }
          }
          uid
        }
      }
    }
    allPrismicCatalog {
      edges {
        node {
          id
          data {
            categories {
              category {
                uid
                document {
                  ... on PrismicCategory {
                    data {
                      image {
                        localFile {
                          childImageSharp {
                            gatsbyImageData(
                              height: 128
                              width: 188
                              transformOptions: {
                                cropFocus: CENTER
                                fit: COVER
                              }
                              outputPixelDensities: [
                                0.35
                                0.5
                                0.75
                                1
                                1.25
                                1.5
                                1.75
                                2
                              ]
                              sizes: "(min-width: 1280px) 188px, (max-width: 414px) 40.84vw, (max-width: 834px) 21.905vw"
                            )
                          }
                        }
                      }
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
  }
`
