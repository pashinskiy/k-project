import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

import ProductsScrollBar from "../../scrollBar/productsScrollBar"
import IconSimilarProduct from "../../../../static/svg/similarProducts.svg"

/**
 * Слайдер с похожими продуктами на странице товара
 * @module src/components/productPage/similarProducts
 * @param {Object} props - объект свойств компонента React
 * @param {Object[]} props.products - массив объектов продуктов полученый из prismic
 */
export default function SimilarProducts({ products }) {

  return products.length ? (
    <ProductsScrollBar
      products={products}
      title="Похожие товары"
      icon={<IconSimilarProduct />}
      divider={true}
    />
  ) : null
}
