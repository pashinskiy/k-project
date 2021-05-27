import React from "react"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

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
    paddingRight: "0.93vw",
    boxSizing: "border-box",
    "@media(min-width: 1280px)": {
      paddingRight: "12px",
    },
    "@media(max-width: 834px)": {
      paddingRight: "1.43vw",
    },
    "@media(max-width: 414px)": {
      paddingRight: "2.89vw",
    },
  },
  unselect: {
    "& *": {
      "-webkit-touch-callout": "none" /* iOS Safari */,
      "-webkit-user-select": "none" /* Chrome/Safari/Opera */,
      "-khtml-user-select": "none" /* Konqueror */,
      "-moz-user-select": "none" /* Firefox */,
      "-ms-user-select": "none" /* Internet Explorer/Edge */,
      "user-select": "none",
    },
  },
}))

export default function FastLink({ products }) {
  const classes = useStyle()

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
  
  return (
    <Grid className={classes.wrapper}>
      
      <Grid
        container
        wrap="nowrap"
        onPointerDown={setScrollBar}
        className={classes.cardPanel}
      >
        {products.map((product, i) => (
          <div
            key={product.uid + i}
            className={classes.wrapperCard + " " + classes.unsecect}
          >
            <Grid></Grid>
          </div>
        ))}
      </Grid>
    </Grid>
  )
}
