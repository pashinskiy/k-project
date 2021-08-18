import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

import ProductsScrollBar from "../../scrollBar/productsScrollBar"
import IconSimilarProduct from "../../../../static/svg/similarProducts.svg"

import { GlobalStateContext } from "../../../context/GlobalContextProvider"

export default function SimilarProducts({ category }) {
  const state = React.useContext(GlobalStateContext)

  return category ? (
    <ProductsScrollBar
      products={state.allPrismicProduct.edges
        .filter(edge => edge.node.data.category.document?.id === category.id)
        .map(edge => edge.node)}
      title="Похожие товары"
      icon={<IconSimilarProduct />}
      divider={true}
    />
  ) : null
}
