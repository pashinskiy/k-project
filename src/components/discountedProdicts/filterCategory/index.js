import React from "react"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import ScrollBar from "../../scrollBar"
import FiltersBySubcategory from "./filtersBySubcategory"

const useStyle = makeStyles(theme => ({
  wrapperBlock: {
    marginTop: "2.18vw",
    "@media(min-width: 1280px)": {
      marginTop: "28px",
    },
    "@media(max-width: 1025px)": {
      marginTop: "2.39vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "4.83vw",
    },
  },
}))

/**
 * Скролл бар с фильтрами по подкатегориям
 * @module src/components/discountedProdicts/filterCategory
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.products - массив объектов продуктов полученых из prismic
 */
export default function FilterCategory({ products }) {
  const classes = useStyle()

  return (
    <Grid container direction="column" className={classes.wrapperBlock}>
      <ScrollBar fullScreen>
        <FiltersBySubcategory products={products} />
      </ScrollBar>
    </Grid>
  )
}
