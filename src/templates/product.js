import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import CardProduct from "../components/productPage/cardProduct"
import Landing from "../components/productPage/landing"
import DescriptionBlock from "../components/productPage/desciptionBlock"
import DeliveryCards from "../components/productPage/delivery"

const Product = ({ data: { prismicProduct, allPrismicProduct } }) => {
  return (
    <Layout>
      <Seo title="Home" />
      <CardProduct
        prismicProduct={prismicProduct}
        allPrismicProduct={allPrismicProduct}
      />
      <Landing slices={prismicProduct.data.body2} />
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
        body2 {
          ... on PrismicProductBody2OnlyText {
            slice_type
            primary {
              accent_color
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
                      sizes: "(min-width: 1280px) 1224px, 100vw"
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
                      sizes: "(min-width: 1280px) 598px, (max-width: 414px) 100vw, 50vw"
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
                      sizes: "(min-width: 1280px) 598px, (max-width: 414px) 100vw, 50vw"
                    )
                  }
                }
              }
            }
          }
        }
        delivery {
          document {
            ... on PrismicDelivery {
              data {
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
    allPrismicProduct {
      edges {
        node {
          data {
            name
            color_name
            color
          }
          uid
        }
      }
    }
  }
`
