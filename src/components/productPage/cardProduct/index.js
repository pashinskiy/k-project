import * as React from "react"
import { Grid, useMediaQuery } from "@material-ui/core"

import ProductSlider from "./productSlider"
import BreadCrumbs from "../../breadCrumbs/breadCrumbs"
import Title from "./title"
import BlockPrice from "./blockPrice"
import AddInCartAndFav from "../../button/addInCartAndFav"
import Features from "./features"

export default function CardProduct({ prismicProduct, allPrismicProduct }) {
  const mobile = useMediaQuery("(max-width: 834px)")

  // массив фото
  const photos = prismicProduct.data.images.map(
    photo => photo.image.localFile.childImageSharp.fluid
  )

  // все продукты данной модели
  const allColors = allPrismicProduct.edges
    .filter(node => node.node.data.name === prismicProduct.data.name)
    .map(node => node.node)

  return (
    <>
      {mobile ? null : (
        <Title
          text={prismicProduct.data.name}
          stickersSlices={prismicProduct.data.body.filter(
            slice => slice.slice_type === "stickers"
          )}
          logo={
            prismicProduct.data.body.find(slice => slice.slice_type === "brand")
              ?.primary.image
          }
        />
      )}

      <BreadCrumbs />

      <Grid container justify="space-between">
        <ProductSlider photos={photos} />
        <BlockPrice product={prismicProduct} allColors={allColors} />
      </Grid>

      {mobile ? null : (
        <Features
          featuresSlices={prismicProduct.data.body.filter(
            slice => slice.slice_type === "features"
          )}
        />
      )}

      {mobile ? (
        <AddInCartAndFav text="В корзину" variant="page" fixed={true} />
      ) : null}
    </>
  )
}
