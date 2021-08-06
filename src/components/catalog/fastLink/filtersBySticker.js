import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"

import CardWidget from "../../widgets/cardWidget"

const useStyle = makeStyles(theme => ({
  wrapper: {
    boxSizing: "border-box",

    width: "10.93vw",
    height: "12.89",
    paddingRight: "0.93vw",
    "@media(min-width: 1280px)": {
      width: "140px",
      height: "165px",
      paddingRight: "12px",
    },
    "@media(max-width: 1025px)": {
      width: "16.76vw",
      height: "19.76vw",
      paddingRight: "0.95vw",
    },
    "@media(max-width: 767px)": {
      width: "33.81vw",
      height: "39.85vw",
      paddingRight: "1.93vw",
    },
  },
}))

export default function FiltersBySticker({ products, category }) {
  const classes = useStyle()

  const data = useStaticQuery(graphql`
    {
      allPrismicSticker {
        edges {
          node {
            id
            data {
              name
              image {
                localFile {
                  publicURL
                }
              }
            }
          }
        }
      }
    }
  `)

  // собираем стикеры отображаемых продуктов
  const stickersId = new Set()
  products.forEach(product =>
    product.data.body
      .filter(slice => slice.slice_type === "stickers")
      .forEach(slice =>
        slice.items.forEach(item => {
          if (item.sticker.document === null) return
          stickersId.add(item.sticker.document.id)
        })
      )
  )

  const stickers = data.allPrismicSticker.edges
    .filter(edge => stickersId.has(edge.node.id))
    .map(edge => edge.node)

  return (
    <>
      {stickers.map(sticker => {
        const title = sticker.data.name.replace("ё", "е")
        const url = new URL(window.location.href)
        url.search = ""
        url.searchParams.set("Стикеры", JSON.stringify([sticker.id]))
        if (category) url.searchParams.set("category", JSON.stringify(category))
        return (
          <div key={sticker.id} className={classes.wrapper}>
            <CardWidget
              variant="brand"
              publicURL={sticker.data.image?.localFile?.publicURL}
              cardTitle={title}
              cardLink={category ? `/products/${url.search}` : `${url.search}`}
              gradientBack={true}
            />
          </div>
        )
      })}
    </>
  )
}
