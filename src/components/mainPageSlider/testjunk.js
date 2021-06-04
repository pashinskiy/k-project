import React, { useState } from "react"
import { makeStyles, Grid, Button } from "@material-ui/core"
import SaleCard from "../saleCardPanel/saleCard"
import Arrow from "../../../static/svg/arrowWhite.svg"

const useStyles = makeStyles(theme => ({
  wrapper: {
    width: "100%",
    position: "relative",
    overflow: "scroll",
    // scrollbarWidth: "none",
    scrollSnapType: "both mandatory",
    "&:before": {
      content: "''",
      width: "100%",
      height: "100%",
      pointerEvents: "none",

      position: "absolute",
      zIndex: 1,
    },
    "-ms-overflow-style": "none",
    // "&::-webkit-scrollbar": {
    //   display: "none",
    // },
    "& *": {
      flexShrink: 0,
    },
  },
  fullScreen: {
    width: "100vw",
    maxWidth: "1280px",
  },

  track: {
    width: "auto",
    touchAction: "none",
    transition: "1s transform",
    position: "relative",
    boxSizing: "border-box",
  },
  cardItem: {
    width: "1160px",
    paddingLeft: "12px",
  },

  button: {
  minWidth: 0,
  position: "absolute",
  zIndex: 1,
  top: "50%",
  // transform: "translateY(-50%)",
  background: theme.palette.background.accent,
  borderRadius: "100%",

  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",

  width: "3.59vw",
  height: "3.59vw",
  padding: "1.01vw",
  "@media(min-width: 1280px)": {
    width: "46px",
    height: "46px",
    padding: "13px",
  },
  "@media(max-width: 834px)": {
    display: "none",
  },
},
  buttonLeft: {
    left: 0,
    transform: "translateY(-50%) scaleX(-1)",
  },
  buttonRight: {
    right: 0,
    transform: "translateY(-50%)",
  },
}))

export default function Test({ sales }) {
  const classes = useStyles()
  const [salesArray, setSalesArray] = useState(sales)
  // const [activeSale, setActiveSale] = useState()
  const [cardPanel, setCardPanel] = React.useState(null)
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState();
  const [scrollLeft, setScrollLeft] = useState();
  


  const setRef = React.useCallback(node => {
    if (node !== null) {
      setCardPanel(node)
    }
  }, [])
  function setScrollBar(e) {


    //отмена перехвата браузера
    cardPanel.ondragstart = () => false
    console.log(cardPanel.scrollLeft)
    // const translateX = +cardPanel.style.transform.slice(10, -3)
    setIsDown(true)
    cardPanel.style.scrollSnapType = "unset"
    setStartX(e.pageX - cardPanel.offsetLeft)
    setScrollLeft(cardPanel.scrollLeft)

    document.addEventListener("pointermove", scrollBar)
    document.addEventListener("pointerup", deleteScrollBar)

    function deleteScrollBar(e) {

      document.removeEventListener("pointermove", scrollBar)
      document.removeEventListener("pointerup", deleteScrollBar)
      cardPanel.style.scrollSnapType = "both mandatory"
      // setTimeout(() => document.removeEventListener("click", noGoLink), 0)
    }

    function scrollBar(e) {
      // if (!isDown) return
      // e.preventDefault()
      const x = e.pageX - cardPanel.offsetLeft
      const SCROLL_SPEED = 3
      const walk = (x - startX) * SCROLL_SPEED
      cardPanel.scrollLeft = scrollLeft - walk
    }

    function noGoLink(e) {
      e.preventDefault()
    }
  }

  return (
    <Grid container className={classes.wrapper + " " + classes.fullScreen}>
      <Grid container           ref={setRef}
          onPointerDown={setScrollBar} className={classes.track}>
        {salesArray.map((sale, i) => (
          <Grid item className={classes.cardItem} key={sale.uid + "_" + i}>
            <SaleCard sale={sale} key={sale.uid} mainPage />
          </Grid>
        ))}
      </Grid>
      <Button className={classes.button + " " + classes.buttonRight}>
          <Arrow />
        </Button>
        <Button className={classes.button + " " + classes.buttonLeft}>
          <Arrow />
        </Button>
    </Grid>
  )
}
