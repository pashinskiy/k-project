import * as React from "react"
import CategoryWidget from "../widgets"
import CardWidget from "../widgets/cardWidget"

const CategoryPage = (allPrismicCatalog) => {
  return (
    <>
      <CategoryWidget props= {allPrismicCatalog}/>
      <CardWidget variant="categoriesSingle" />
    </>
  )
}
export default CategoryPage
