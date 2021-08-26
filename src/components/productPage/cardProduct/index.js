import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Grid, useMediaQuery } from "@material-ui/core"

import ProductSlider from "./productSlider"
import BreadCrumbs from "../../breadCrumbs"
import Title from "./title"
import BlockPrice from "./blockPrice"
import AddInCartAndFav from "../../button/addInCartAndFav"
import Features from "./features"

import { GlobalStateContext } from "../../../context/GlobalContextProvider"

export default function CardProduct({ prismicProduct }) {
  const mobile = useMediaQuery("(max-width: 1025px)")

  const state = React.useContext(GlobalStateContext)
  // массив фото
  const photos = prismicProduct.data.images.map(
    photo => photo.image.localFile?.childImageSharp.fluid
  )

  // все продукты данной модели
  const allColors = state.allPrismicProduct.edges
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
            prismicProduct.data.brand.document?.data.body.find(
              slice => slice.slice_type === "logo"
            )?.primary.image
          }
        />
      )}

      <BreadCrumbs
        links={[
          {
            title: prismicProduct.data.name,
            href: `/${prismicProduct.uid}/`,
          },
        ]}
      />

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
        <AddInCartAndFav
          product={prismicProduct}
          text="В корзину"
          variant="page"
          fixed={true}
        />
      ) : null}
    </>
  )
}
