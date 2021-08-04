import React from "react"
import { makeStyles, useMediaQuery } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import CardProduct from "../../scrollBar/productsScrollBar/cardProduct"
import ScrollBar from "../scrollBar"

const useStyles = makeStyles(theme => ({
  product: {
    marginRight: 12,
  },
}))

export default function AllProductsByCategory({ subcategory_product }) {
  const data = useStaticQuery(graphql`
    query AllProducts {
      allPrismicProduct {
        edges {
          node {
            id
            uid
            data {
              name
              price
              images {
                image {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(height: 200)
                    }
                  }
                  alt
                }
              }
              category {
                uid
              }
            }
          }
        }
      }
    }
  `)

  const classes = useStyles()

  const maxWidth1024 = useMediaQuery("(max-width: 1025px)")

  return (
    <ScrollBar fullScreen={maxWidth1024} buttonNext>
      {data.allPrismicProduct.edges
        ?.filter(
          sub =>
            sub.node.data.category.uid ===
            subcategory_product.child.document?.uid
        )
        .map((product, i) => {
          return product.node.data.images[0]?.image.localFile ? (
            <div key={`${product.node.uid} ${i}`} className={classes.product}>
              <CardProduct product={product.node} />
            </div>
          ) : null
        })}
    </ScrollBar>
  )
}
