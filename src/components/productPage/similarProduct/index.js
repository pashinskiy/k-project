import React from "react"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import IconSimilarProduct from "../../../../static/svg/similarProducts.svg"
import HeaderWithIcon from "../../headers/headerWithIcon"
import CardSimilarProduct from "./cardProduct"
import ScrollBar from "../../scrollBar"

const useStyle = makeStyles(theme => ({
  wrapper: {},
  wrapperCard: {
    boxSizing: "border-box",

    paddingRight: "2.81vw",
    "@media(min-width: 1280px)": {
      paddingRight: "36px",
    },
    "@media(max-width: 834px)": {
      paddingRight: "4.31vw",
    },
    "@media(max-width: 414px)": {
      paddingRight: "7.24vw",
    },
  },
}))

export default function SimilarProduct({ products }) {
  const classes = useStyle()

  return (
    <Grid className={classes.wrapper}>
      <HeaderWithIcon
        title="Похожие товары"
        icon={<IconSimilarProduct />}
        divider={true}
      />

      <ScrollBar fullScreen buttonNext>
        {products.map((product, i) => (
          <div key={product.uid + i} className={classes.wrapperCard}>
            <CardSimilarProduct product={product} />
          </div>
        ))}
      </ScrollBar>
    </Grid>
  )
}
