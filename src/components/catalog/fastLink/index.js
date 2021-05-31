import React from "react"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import ScrollBar from "../../scrollBar"
import PopularBrand from "../../popularBrand"
import FiltersBySticker from "./filtersBySticker"
import FiltersByTag from "./filtersByTag"

const useStyle = makeStyles(theme => ({
  wrapper: {
    padding: "2.18vw 0",
    "@media(min-width: 1280px)": {
      padding: "28px 0",
    },
    "@media(max-width: 834px)": {
      padding: "2.39vw 0",
    },
    "@media(max-width: 414px)": {
      padding: "4.83vw 0",
    },
  },
  wrapperSecondBlock: {
    marginTop: "2.18vw",
    "@media(min-width: 1280px)": {
      marginTop: "28px",
    },
    "@media(max-width: 834px)": {
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
    <Grid container direction="column" className={classes.wrapper}>
      <ScrollBar fullScreen>
        <FiltersByTag products={products} />
      </ScrollBar>

      <Grid className={classes.wrapperSecondBlock}>
        <ScrollBar fullScreen buttonNext>
          <FiltersBySticker products={products} />
          <PopularBrand products={products} />
        </ScrollBar>
      </Grid>
    </Grid>
  )
}
