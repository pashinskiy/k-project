import React from "react"
import { Button, Grid, Card, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import Arrow from "../../../static/svg/arrowWhite.svg"

const useStyle = makeStyles(theme => ({
  wrapper: {
    width: "100%",
    cursor: "pointer",
    position: "relative",

    // "&:before": {
    //   content: "''",
    //   width: "20%",
    //   height: "100%",
    //   pointerEvents: "none",

    //   position: "absolute",
    //   zIndex: 1,
    //   right: 0,
    //   top: 0,

    //   background: `linear-gradient(-90deg,${theme.palette.background.main} 0%, transparent 100%)`,
    // },
  },
  wrapperTrack: {
    overflow: "scroll",
    scrollbarWidth: "none",
    "-ms-overflow-style": "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },

    "& *": {
      flexShrink: 0,
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
  fullScreen: {
    width: "100vw",
    maxWidth: "1280px",

    marginLeft: "-2.18vw",
    // paddingLeft: "2.18vw",
    "@media(min-width: 1280px)": {
      marginLeft: "-28px",
    //   paddingLeft: "28px",
    },
    "@media(max-width: 834px)": {
      marginLeft: "-3.35vw",
    //   paddingLeft: "3.35vw",
    },
    "@media(max-width: 414px)": {
      marginLeft: "-6.76vw",
    //   paddingLeft: "6.76vw",
    },
  },
  track: {
    width: "auto",
    touchAction: "none",
    transition: "1s transform",
    position: "relative",
    boxSizing: "border-box",
    gridColumnGap: "12px",
  },
  button: {
    minWidth: 0,

    position: "absolute",
    zIndex: 1,
    right: 0,
    top: "50%",
    transform: "translateY(-50%)",
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
  item: {
      width: "90.625vw",
      maxWidth: "1160px",
      height: "18vw",
      opacity: .5,
      alignSelf: "center",
    //   marginRight: "12px",
  },
  itemActive: {
    width: "90.625vw",
    maxWidth: "1160px",
    height: "20vw",
    opacity: 1,
  }
}))

export default function TestSlider({ children, fullScreen, buttonNext }) {

    const testArray = [1,2,3,4,5,6,7,8,9,10]
    const [activeChild, setActiveChild] = React.useState()

  // fullScreen (boolean) прокрутка с выходом за границы layuot
  // buttonNext нужно ли отображить кнопку при переполнении
  const classes = useStyle()

  const [cardPanel, setCardPanel] = React.useState(null)

  const maxTranslateX =
    cardPanel?.offsetWidth > cardPanel?.parentElement.offsetWidth
      ? cardPanel?.parentElement.offsetWidth- cardPanel?.offsetWidth
      : 0
    // const maxTranslateX = cardPanel.paren
  const setRef = React.useCallback(node => {
    if (node !== null) {
      setCardPanel(node)
      let childrenCount = node.children.length
      let active = childrenCount / 2
      let childWidth = node.children[0].offsetWidth
      setActiveChild(active)
    //   node.style.transform = `translate(${newTranslateX}px)`
    console.log(window.getComputedStyle(node).gridColumnGap)
    }
  }, [])

  function setScrollBar(e) {
    const transition = window.getComputedStyle(cardPanel).transition
    cardPanel.style.transition = "none"

    console.log(cardPanel.style.transform)
    //отмена перехвата браузера
    cardPanel.ondragstart = () => false

    const clientX = e.clientX
    const translateX = +cardPanel.style.transform.slice(10, -3)

    document.addEventListener("pointermove", scrollBar)
    document.addEventListener("pointerup", deleteScrollBar)

    function deleteScrollBar(e) {
      cardPanel.style.transition = transition
      document.removeEventListener("pointermove", scrollBar)
      document.removeEventListener("pointerup", deleteScrollBar)
      setTimeout(() => document.removeEventListener("click", noGoLink), 0)
    }

    function scrollBar(e) {
        
      document.addEventListener("click", noGoLink)
      let newTranslateX = translateX + e.clientX - clientX
      newTranslateX = newTranslateX > 0 ? 0 : newTranslateX
      newTranslateX =
        newTranslateX < maxTranslateX ? maxTranslateX : newTranslateX
        // console.log(newTranslateX)
      cardPanel.style.transform = `translate(${newTranslateX}px)`
    }

    function noGoLink(e) {
      e.preventDefault()
    }
  }

  function next() {
    const translateX = +cardPanel.style.transform.slice(10, -3)
    const paddingLeft = cardPanel.offsetLeft

    const nextElement = [...cardPanel.children].find(child => {
      return child.offsetLeft > -(translateX - paddingLeft)
    })

    let newTranslateX = -nextElement.offsetLeft
    newTranslateX = newTranslateX < maxTranslateX ? 0 : newTranslateX
    cardPanel.style.transform = `translate(${newTranslateX}px)`
  }

  return (
    <Grid container className={classes.wrapper + " " + classes.fullScreen}>
      <Grid container className={classes.wrapperTrack + " " + classes.unselect}>
        <Grid
          container
          ref={setRef}
          onPointerDown={setScrollBar}
          className={classes.track}
        >
          {testArray.map((test, i) => (    <Card id={"item" + i} style={{background: "gray"}} className={classes.item} ><Typography>BlahBlah</Typography></Card>))}
        </Grid>
      </Grid>
    </Grid>
  )
}
