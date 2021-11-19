import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import CardProduct from "./cardProduct"
import ScrollBar from "../"
import { Typography } from "@material-ui/core"

const useStyle = makeStyles(theme => ({
  wrapper: {},
  wrapperCard: {
    boxSizing: "border-box",

    paddingRight: "2.81vw",
    "@media(min-width: 1280px)": {
      paddingRight: "36px",
    },
    "@media(max-width: 1025px)": {
      paddingRight: "4.31vw",
    },
    "@media(max-width: 767px)": {
      paddingRight: "7.24vw",
    },
  },
}))

/**
 * Блок слайдера продуктов
 * @module src/components/tradeInPage/panelSelectProduct/productsScrollBar
 * @param {Object} props - объект свойств компонента React
 * @param {Object[]} props.products - массив объектов продуктов полученный из prismic
 * @param {Object} props.selectProduct - объект выбранного продукта
 * @param {function} props.setProduct - функция выбора продукта
 * @param {function} props.close - функция закрытия
 */
export default function ProductsScrollBar({
  products,
  selectProduct,
  setProduct,
  close,
}) {
  const classes = useStyle()

  return products.length ? (
    <ScrollBar>
      {products.map((product, i) => {
        const checkImg = product.data.images[0]?.image.localFile ?? false

        return checkImg ? (
          <div key={product.uid} className={classes.wrapperCard}>
            <CardProduct
              product={product}
              setProduct={setProduct}
              close={close}
              active={product.uid === selectProduct?.uid}
            />
          </div>
        ) : null
      })}
    </ScrollBar>
  ) : (
    <Typography align="center">Такие товары не найдены</Typography>
  )
}
