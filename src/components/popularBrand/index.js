import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import CardWidget from "../widgets/cardWidget"

const useStyle = makeStyles(theme => ({
  wrapper: {
    boxSizing: "border-box",
    borderRadius: "100%",

    width: "10.93vw",
    // height: "12.89vw",
    paddingRight: "0.93vw",
    "@media(min-width: 1280px)": {
      width: "140px",
      // height: "165px",
      paddingRight: "12px",
    },
    "@media(max-width: 1025px)": {
      width: "16.76vw",
      // height: "19.76vw",
      paddingRight: "0.95vw",
    },
    "@media(max-width: 414px)": {
      width: "33.81vw",
      // height: "39.85vw",
      paddingRight: "1.93vw",
    },
  },
}))

export default function PopularBrand({ products }) {
  const classes = useStyle()

  const data = useStaticQuery(graphql`
    {
      allPrismicBrand {
        edges {
          node {
            id
            data {
              name
              body {
                ... on PrismicBrandBodyLogo {
                  slice_type
                  primary {
                    image {
                      localFile {
                        childImageSharp {
                          gatsbyImageData(
                            width: 100
                            height: 100
                            transformOptions: { fit: CONTAIN }
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
      }
    }
  `)

  // собираем брэнды отображаемых продуктов
  const popularBrandId = new Set()
  products.forEach(product => {
    if (product.data.brand.document === null) return
    if (!product.data.brand.document.data.popular) return
    if (product.data.brand.document.data.name === null) return
    popularBrandId.add(product.data.brand.document.id)
  })

  const popularBrand = data.allPrismicBrand.edges
    .filter(edge => popularBrandId.has(edge.node.id))
    .map(edge => edge.node)

  return (
    <>
      {popularBrand.map(product => {
        const title = product.data.name.replace("ё", "е")
        const url = new URL(window.location.href)
        url.search = ""
        url.searchParams.set("Производитель", JSON.stringify([title]))
        return (
          <div key={product.id} className={classes.wrapper}>
            <CardWidget
              variant="brand"
              cardImage={
                product.data.body.filter(
                  slice => (slice.slice_type = "logo")
                )[0].primary.image?.localFile?.childImageSharp.gatsbyImageData
              }
              cardTitle={title}
              cardLink={url.href}
            />
          </div>
        )
      })}
    </>
  )
}
