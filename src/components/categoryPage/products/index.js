import React from "react"
import { makeStyles, useMediaQuery } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import CardProduct from "../../scrollBar/productsScrollBar/cardProduct"
import ScrollBar from "../scrollBar"

import { GlobalStateContext } from "../../../context/GlobalContextProvider"

const useStyles = makeStyles(theme => ({
  product: {
    marginRight: 12,
  },
}))

/**
 * Скролл бар с продуктами подкатегории для страницы категории
 * @module components/catalog/allProductsByCategory
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.subcategory - объект подкатегории полученый из prismic
 */
export default function AllProductsByCategory({ subcategory }) {

  const classes = useStyles()
  
  const state = React.useContext(GlobalStateContext)

  const maxWidth1024 = useMediaQuery("(max-width: 1025px)")

  return (
    <ScrollBar fullScreen={maxWidth1024} buttonNext>
      {state.allPrismicProduct.edges
        ?.filter(
          sub =>
            sub.node.data.category.uid ===
            subcategory?.uid
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
