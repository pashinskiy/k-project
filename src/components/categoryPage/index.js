import * as React from "react"
import CategoryWidget from "../categoryCard"

const CategoryPage = (allPrismicCatalog) => {
  return (
    <>
        {console.log(allPrismicCatalog)}
      <CategoryWidget props= {allPrismicCatalog}/>
    </>
  )
}
export default CategoryPage
