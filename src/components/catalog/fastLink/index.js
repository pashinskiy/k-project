import React from "react"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import ScrollBar from "../../scrollBar"
import PopularBrand from "../../popularBrand"
import FiltersBySticker from "./filtersBySticker"
import FiltersByTag from "./filtersByTag"

const useStyle = makeStyles(theme => ({
  wrapperBlock: {
    marginTop: "2.18vw",
    "@media(min-width: 1280px)": {
      marginTop: "28px",
    },
    "@media(max-width: 1025px)": {
      marginTop: "2.39vw",
    },
    "@media(max-width: 414px)": {
      marginTop: "4.83vw",
    },
  },
}))

export default function FastLink({ products }) {
  const classes = useStyle()

  return (
    <Grid container direction="column" className={classes.wrapperBlock}>
      <ScrollBar fullScreen>
        <FiltersByTag products={products} />
      </ScrollBar>

      <Grid className={classes.wrapperBlock}>
        <ScrollBar fullScreen buttonNext>
          <FiltersBySticker products={products} />
          <PopularBrand products={products} />
        </ScrollBar>
      </Grid>
    </Grid>
  )
}
