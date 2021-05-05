import React from "react"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import AddInCartAndFav from "../../button/addInCartAndFav"
import { GatsbyImage } from "gatsby-plugin-image"

const useStyle = makeStyles(theme => ({
  wrapper: {
    width: "19.53vw",
    "@media(min-width: 1280px)": {
      width: "250px",
    },
    "@media(max-width: 834px)": {
      width: "29.97vw",
    },
    "@media(max-width: 414px)": {
      width: "49.51vw",
    },
  },
  imageWrapper: {
    width: "100%",
    overflow: "hidden",
    height: "15.62vw",
    "@media(min-width: 1280px)": {
      height: "200px",
    },
    "@media(max-width: 834px)": {
      height: "23.98vw",
    },
    "@media(max-width: 414px)": {
      height: "48.3vw",
    },
    "& picture": {
      width: "100%",
      height: "100%",
    },
  },
}))

export default function CardSimilarProduct({ product }) {
  const img =
    product.data.images[0].image.localFile.childImageSharp.gatsbyImageData
  const alt = product.data.images[0].image.alt

  const classes = useStyle()
  return (
    <Grid className={classes.wrapper}>
      <GatsbyImage
        image={img}
        alt={alt ?? `image product`}
        className={classes.imageWrapper}
        imgStyle={{ objectFit: "contain" }}
      />
      <AddInCartAndFav text="В корзину" product={product} />
    </Grid>
  )
}
