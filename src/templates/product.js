import * as React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"
import CardProduct from "../components/productPage/cardProduct"

import Landing from "../components/productPage/landing"
import Gallery from "../components/productPage/gallery"
import DeliveryCards from "../components/productPage/delivery"
import TabPanel from "../components/productPage/tabPanel"
import CharacteristicsBlock from "../components/productPage/characteristics"
import SimilarProducts from "../components/productPage/similarProducts"

const Product = ({ data: { prismicProduct } }) => {
  const IsDesktop = typeof window !== 'undefined' && window.matchMedia("(min-width: 1025px)").matches
  return (
    <>
      <Seo title="Home" />
      {(IsDesktop === true) ? <div style={{ marginTop: 36, }} /> : null}
      <div style={{ marginTop: 16, }} />
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
      <CardProduct prismicProduct={prismicProduct} />
      <SimilarProducts />
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
    </>
  )
}

export default Product

export const pageQuery = graphql`
  query ProductBySlug($uid: String!) {
    prismicProduct(uid: { eq: $uid }) {
      id
      uid
      data {
        brand {
          document {
            ... on PrismicBrand {
              id
              data {
                name
                body {
                  ... on PrismicBrandBodyLogo {
                    id
                    slice_type
                    primary {
                      image {
                        localFile {
                          childImageSharp {
                            gatsbyImageData
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
                }
              }
            }
          }
        }
        name
        color_name
        color
        old_price
        price
        images {
          image {
            localFile {
              childImageSharp {
                gatsbyImageData
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
                    id
                    data {
                      name
                      variant
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
      }
    }
  }
`
