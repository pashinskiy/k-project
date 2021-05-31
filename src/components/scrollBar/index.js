import React from "react"
import { Button, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import Arrow from "../../../static/svg/arrowWhite.svg"

const useStyle = makeStyles(theme => ({
  wrapper: {
    width: "100%",
    cursor: "pointer",
    position: "relative",

    overflow: "scroll",
    scrollbarWidth: "none",
    "-ms-overflow-style": "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },

    "& *": {
      flexShrink: 0,
    },
    "&:before": {
      content: "''",
      width: "20%",
      height: "100%",
      pointerEvents: "none",

      position: "absolute",
      zIndex: 1,
      right: 0,
      top: 0,

      background: `linear-gradient(-90deg,${theme.palette.background.main} 0%, transparent 100%)`,
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
    paddingLeft: "2.18vw",
    "@media(min-width: 1280px)": {
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
  },
  track: {
    width: "auto",
    transition: "1s transform",
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
    "@media(max-width: 834px)": {
      display: "none",
    },
  },
}))

export default function ScrollBar({ children, fullScreen, buttonNext }) {
  // fullScreen (boolean) прокрутка с выходом за границы layuot
  // buttonNext нужно ли отображить кнопку при переполнении
  const classes = useStyle()
  const size = fullScreen ? classes.fullScreen : ""

  const cardPanel = React.useRef()

  const maxTranslateX =
    cardPanel.current?.offsetWidth >
    cardPanel.current?.parentElement.offsetWidth * 0.87
      ? cardPanel.current?.parentElement.offsetWidth * 0.87 -
        cardPanel.current?.offsetWidth
      : 0

  function setScrollBar(e) {
    const panel = cardPanel.current
    const transition = panel.style.transition
    panel.style.transition = "none"
    //отмена перехвата браузера
    panel.ondragstart = () => false

    const clientX = e.clientX
    const translateX = +panel.style.transform.slice(10, -3)

    document.addEventListener("pointermove", scrollBar)
    document.addEventListener("pointerup", deleteScrollBar)

    function deleteScrollBar(e) {
      panel.style.transition = transition
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
      panel.style.transform = `translate(${newTranslateX}px)`
    }

    function noGoLink(e) {
      e.preventDefault()
    }
  }

  function next() {
    const panel = cardPanel.current
    const translateX = +panel.style.transform.slice(10, -3)
    const paddingLeft = panel.offsetLeft

    const nextElement = [...panel.children].find(child => {
      return child.offsetLeft > -(translateX - paddingLeft)
    })

    let newTranslateX = -nextElement.offsetLeft
    newTranslateX = newTranslateX < maxTranslateX ? 0 : newTranslateX
    panel.style.transform = `translate(${newTranslateX}px)`
  }

  return (
    <Grid
      container
      className={classes.wrapper + " " + classes.unselect + " " + size}
    >
      <Grid
        container
        ref={cardPanel}
        onPointerDown={setScrollBar}
        className={classes.track}
      >
        {children}
      </Grid>
      {maxTranslateX < 0 && buttonNext ? (
        <Button onClick={next} className={classes.button}>
          <Arrow />
        </Button>
      ) : null}
    </Grid>
  )
}
