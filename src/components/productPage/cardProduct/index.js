import * as React from "react"
import { Grid, useMediaQuery } from "@material-ui/core"

import ProductSlider from "./productSlider"
import BreadCrumbs from "../../breadCrumbs"
import Title from "./title"
import BlockPrice from "./blockPrice"
import AddInCartAndFav from "../../button/addInCartAndFav"
import Features from "./features"

/**
 * Главная карточка продукта на странице продукта
 * @module src/components/productPage/cardProduct
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.prismicProduct - объект продукта полученый из prismic
 * @param {Object} props.allVariant - объект всех продуктов данной модели полученый из prismic
 */
export default function CardProduct({ prismicProduct, allVariant }) {
  const mobile = useMediaQuery("(max-width: 1025px)")

  // массив фото
  const photos = prismicProduct.data.images
    .map(photo => photo.image.localFile?.childImageSharp.fluid)
    .filter(photo => !!photo?.src)

  // массив всех продукты данной модели
  allVariant = allVariant.length
    ? allVariant.map(edge => edge.node)
    : [prismicProduct]

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

      <Grid container justify={photos.length ? "space-between" : "center"}>
        {photos.length ? <ProductSlider photos={photos} /> : null}
        <BlockPrice product={prismicProduct} allVariants={allVariant} radiusAllCorners={!photos.length}/>
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
