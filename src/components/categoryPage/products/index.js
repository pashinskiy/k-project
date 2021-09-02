import React from "react"
import { makeStyles, useMediaQuery } from "@material-ui/core"
import CardProduct from "../../scrollBar/productsScrollBar/cardProduct"
import ScrollBar from "../scrollBar"

const useStyles = makeStyles(theme => ({
  product: {
    marginRight: 12,
  },
}))

/**
 * Скролл бар с продуктами подкатегории для страницы категории
 * @module src/components/catalog/allProductsByCategory
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.subcategory - объект подкатегории полученый из prismic
 */
export default function AllProductsByCategory({ subcategory, products }) {
  const classes = useStyles()

  const maxWidth1024 = useMediaQuery("(max-width: 1025px)")

  return (
    <ScrollBar fullScreen={maxWidth1024} buttonNext>
      {products
        ?.filter(edge => edge.node.data.category.uid === subcategory?.uid)
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
