import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

import ProductsScrollBar from "../../scrollBar/productsScrollBar"
import IconSimilarProduct from "../../../../static/svg/similarProducts.svg"

export default function SimilarProducts({ category }) {
  const data = useStaticQuery(graphql`
    {
      allPrismicProduct {
        edges {
          node {
            id
            uid
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
          }
        }
      }
    }
  `)

  return (
    <ProductsScrollBar
      products={data.allPrismicProduct.edges.map(edge => edge.node)}
      title="Похожие товары"
      icon={<IconSimilarProduct />}
      divider={true}
    />
  )
}
