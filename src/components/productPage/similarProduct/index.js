import React from "react"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import IconSimilarProduct from "../../../../static/svg/similarProducts.svg"
import HeaderWithIcon from "../../headers/headerWithIcon"
import CardSimilarProduct from "./cardProduct"

const useStyle = makeStyles(theme => ({
  wrapper: {},
  cardPanel: {
    cursor: "pointer",
    overflow: "scroll",
    scrollbarWidth: "none",
    "-ms-overflow-style": "none",
    width: "100vw",
    marginLeft: "-2.18vw",
    paddingLeft: "2.18vw",
    "@media(min-width: 1280px)": {
      width: "1280px",
      marginLeft: "-28px",
      paddingLeft: "28px",
    },
    "@media(max-width: 834px)": {
      marginLeft: "-3.35vw",
      paddingLeft: "3.35vw",
    },
    "@media(max-width: 414px)": {
      marginLeft: "-6.76vw",
      paddingLeft: "6.76vw",
    },
    "& *": {
      flexShrink: 0,
    },
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  wrapperCard: {
    paddingRight: "2.81vw",
    boxSizing: "border-box",
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

function setScrollBar(e) {
  const cardPanel = e.currentTarget
  const transition = cardPanel.style.transition
  cardPanel.style.transition = "none"
  //отмена перехвата браузера
  cardPanel.ondragstart = () => false

  const clientX = e.clientX
  const scrollLeft = cardPanel.scrollLeft

  document.addEventListener("pointermove", scrollBar)
  document.addEventListener("pointerup", deleteScrollBar)

  function deleteScrollBar() {
    cardPanel.style.transition = transition
    document.removeEventListener("pointermove", scrollBar)
    document.removeEventListener("pointerup", deleteScrollBar)
  }

  function scrollBar(e) {
    let newLeft = scrollLeft - e.clientX + clientX
    cardPanel.scrollLeft = newLeft
  }
}

export default function SimilarProduct({ products }) {
  const classes = useStyle()
  products = [...products, ...products, ...products]
  return (
    <Grid className={classes.wrapper}>
      <HeaderWithIcon
        title="Похожие товары"
        icon={<IconSimilarProduct />}
        divider={true}
      />
      <Grid
        container
        wrap="nowrap"
        onPointerDown={setScrollBar}
        className={classes.cardPanel}
      >
        {products.map((product, i) => (
          <div key={product.uid + i} className={classes.wrapperCard}>
            <CardSimilarProduct product={product} />
          </div>
        ))}
      </Grid>
    </Grid>
  )
}
