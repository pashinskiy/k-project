import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import CardWidget from "../../widgets/cardWidget"

const useStyle = makeStyles(theme => ({
  wrapper: {
    paddingRight: "0.62vw",
    "@media(min-width: 1280px)": {
      paddingRight: "8px",
    },
    "@media(max-width: 834px)": {
      paddingRight: "0.95vw",
    },
    "@media(max-width: 414px)": {
      paddingRight: "1.93vw",
    },
  },
}))

export default function FiltersByTag({ products }) {
  const classes = useStyle()

  // собираем тэги  отображаемых продуктов
  const tags = new Set()
  products.forEach(product =>
    product.data.tags.forEach(tag => {
      if (tag.tag.document === null) return
      tags.add(tag.tag.document.data.name)
    })
  )

  return (
    <>
      {[...tags].map(tag => {
        const title = tag.replace("ё", "е")
        const url = new URL(window.location.href)
        url.search = ""
        url.searchParams.set("tags", JSON.stringify([tag]))
        return (
          <div key={tag} className={classes.wrapper}>
            <CardWidget variant="small" cardTitle={title} cardLink={url.href} />
          </div>
        )
      })}
    </>
  )
}
