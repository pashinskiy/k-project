import React from "react"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import HeaderWithIcon from "../../headers/headerWithIcon"
import CardSimilarProduct from "./cardProduct"
import ScrollBar from "../"

const useStyle = makeStyles(theme => ({
  wrapper: {},
  wrapperCard: {
    boxSizing: "border-box",

    paddingRight: "2.81vw",
    "@media(min-width: 1280px)": {
      paddingRight: "36px",
    },
    "@media(max-width: 1025px)": {
      paddingRight: "4.31vw",
    },
    "@media(max-width: 414px)": {
      paddingRight: "7.24vw",
    },
  },
}))

export default function ProductsScrollBar({ products, title, icon, divider }) {
  const classes = useStyle()

  return (
    <Grid className={classes.wrapper}>
      {title ? (
        <HeaderWithIcon title={title} icon={icon} divider={divider} />
      ) : null}

      <ScrollBar fullScreen buttonNext>
        {products.map((product, i) => {
          const checkImg =
            (<CardSimilarProduct product={product} />).props.product.data
              .images[0]?.image.localFile ?? false

          return checkImg ? (
            <div key={product.uid} className={classes.wrapperCard}>
              <CardSimilarProduct product={product} />
            </div>
          ) : null
        })}
      </ScrollBar>
    </Grid>
  )
}
