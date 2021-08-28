import React from "react"
import { navigate } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"

import CardWidget from "../../widgets/cardWidget"

const useStyle = makeStyles(theme => ({
  wrapper: {
    padding: 0,
    border: "none",
    background: "transparent",
    minHeight: 0,
    minWidth: 0,
    cursor: "pointer",

    paddingRight: "0.62vw",
    "@media(min-width: 1280px)": {
      paddingRight: "8px",
    },
    "@media(max-width: 1025px)": {
      paddingRight: "0.95vw",
    },
    "@media(max-width: 767px)": {
      paddingRight: "1.93vw",
    },
  },
}))

/**
 * Набор фильтров по подкатегориям
 * @module src/components/discountedProdicts/filterCategory/filtersBySubcategory
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.products - массив объектов продуктов полученых из prismic
 */
export default function FiltersBySubcategory({ products }) {
  const classes = useStyle()

  // собираем категории отображаемых продуктов
  const categories = new Set()
  products.forEach(product => {
    if (product.data.category.document === null) return
    categories.add(product.data.category.document.data.name)
  })

  function filter(value) {
    const url = new URL(window.location)
    url.search = ""
    url.searchParams.set("subcategory", JSON.stringify(value))
    window.location = url.href
    navigate(`${window.location.pathname}${url.search}`)
  }

  return (
    <>
      {[...categories].map(category => {
        return (
          <button
            onClick={() => filter(category)}
            aria-label={category}
            key={category}
            className={classes.wrapper}
          >
            <CardWidget variant="small" cardTitle={category} />
          </button>
        )
      })}
    </>
  )
}
