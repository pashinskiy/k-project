import * as React from "react"
import { graphql } from "gatsby"
import { Grid, useMediaQuery } from "@material-ui/core"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ProductSlider from "../components/productPage/productSlider"
import BreadCrumbs from "../components/breadCrumbs/breadCrumbs"
import Title from "../components/productPage/title"
import BlockPrice from "../components/productPage/blockPrice"
import AddInCartAndFav from "../components/button/addInCartAndFav"
import Features from "../components/productPage/features"
import DescriptionBlock from "../components/productPage/desciptionBlock"
import DeliveryCards from "../components/productPage/delivery"

const Product = ({ data: { prismicProduct, allPrismicProduct } }) => {
  const mobile = useMediaQuery("(max-width: 834px)")

  // массив фото
  const photos = prismicProduct.data.images.map(
    photo => photo.image.localFile.childImageSharp.fluid
  )

  // все продукты данной модели
  const allColors = allPrismicProduct.edges
    .filter(node => node.node.data.name === prismicProduct.data.name)
    .map(node => node.node)

  return (
    <Layout>
      <Seo title="Home" />
      {mobile ? null : (
        <Title
          text={prismicProduct.data.name}
          stickersSlices={prismicProduct.data.body.filter(
            slice => slice.slice_type === "stickers"
          )}
          logo={
            prismicProduct.data.body.find(slice => slice.slice_type === "brand")
              ?.primary.image
          }
        />
      )}
      <BreadCrumbs />
      <Grid container justify="space-between">
        <ProductSlider photos={photos} />
        <BlockPrice product={prismicProduct} allColors={allColors} />
      </Grid>
      <Features
        featuresSlices={prismicProduct.data.body.filter(
          slice => slice.slice_type === "features"
        )}
      />
      {mobile ? (
        <AddInCartAndFav text="В корзину" variant="page" fixed={true} />
      ) : null}
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
