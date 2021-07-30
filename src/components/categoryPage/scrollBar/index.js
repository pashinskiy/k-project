import React from "react"
import { Button, Grid, useMediaQuery } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import Arrow from "../../../../static/svg/arrowWhite.svg"

const useStyle = makeStyles(theme => ({
  wrapper: {
    width: "100%",
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",

    "&:before": {
      content: "''",
      width: "20%",
      height: "100%",
      pointerEvents: "none",

      position: "absolute",
      zIndex: 6,
      right: 0,
      top: 0,

      background: props =>
        props.maxTranslateX < 0 && props.buttonNext
          ? `linear-gradient(-90deg,${theme.palette.background.main} 0%, rgb(255, 255, 255, 0) 100%)`
          : "none",

      "@media(max-width: 1025px)": {
        display: "none",
      },
    },
  },
  wrapperTrack: {
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
    flexShrink: 0,

    marginLeft: "-2.18vw",
    paddingLeft: "2.18vw",
    "@media(min-width: 1280px)": {
      marginLeft: "-28px",
      paddingLeft: "28px",
    },
    "@media(max-width: 1025px)": {
      marginLeft: "-3.35vw",
      paddingLeft: "3.35vw",
    },
    "@media(max-width: 414px)": {
      marginLeft: "-6.76vw",
      paddingLeft: "6.76vw",
    },
  },
  track: {
    width: "auto",
    touchAction: "none",
    transition: ".3s transform",
    position: "relative",
    boxSizing: "border-box",
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
    "@media(max-width: 1025px)": {
      display: "none",
    },
  },
}))

export default function ScrollBar({ children, fullScreen, buttonNext }) {
  // fullScreen (boolean) прокрутка с выходом за границы layuot
  // buttonNext нужно ли отображить кнопку при переполнении

  const maxWidth1024 = useMediaQuery("(max-width: 1025px)")

  const classes = useStyle()
  const size = fullScreen ? classes.fullScreen : ""

  const [cardPanel, setCardPanel] = React.useState(null)

  const maxTranslateX =
    cardPanel?.offsetWidth > cardPanel?.parentElement.offsetWidth
      ? cardPanel?.parentElement.offsetWidth * (maxWidth1024 ? 1 : 0.87) -
        cardPanel?.offsetWidth
      : 0

  const setRef = React.useCallback(node => {
    if (node !== null) {
      setCardPanel(node)
    }
  }, [])

  function setScrollBar(e) {
    let eventScroll = null
    const clientY = e.clientY
    const scroll = window.pageYOffset

    const transition = window.getComputedStyle(cardPanel).transition
    cardPanel.style.transition = "none"

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
      if (eventScroll === null) {
        eventScroll =
          Math.abs(e.clientX - clientX) < Math.abs(e.clientY - clientY)
      }
      if (eventScroll) {
        window.scrollTo(0, scroll + clientY - e.clientY)
        return
      }

      document.addEventListener("click", noGoLink)
      let newTranslateX = translateX + e.clientX - clientX
      newTranslateX = newTranslateX > 0 ? 0 : newTranslateX
      newTranslateX =
        newTranslateX < maxTranslateX ? maxTranslateX : newTranslateX
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
    <Grid container className={classes.wrapper + " " + size}>
      <Grid
        container
        className={classes.wrapperTrack + " " + classes.unselect}
        style={{ overflow: fullScreen ? "visible" : "hidden" }}
      >
        <Grid
          container
          ref={setRef}
          onPointerDown={setScrollBar}
          className={classes.track}
        >
          {children}
        </Grid>
      </Grid>

      {maxTranslateX < 0 && buttonNext ? (
        <Button onClick={next} className={classes.button}>
          <Arrow />
        </Button>
      ) : null}
    </Grid>
  )
}
