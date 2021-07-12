import React from "react"
import {
  Button,
  Grid,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import Arrow from "../../../static/svg/arrowWhite.svg"
import SaleCard from "../saleCardPanel/saleCard"
import AdvertiseCard from "./advertiseCard"

const useStyle = makeStyles(theme => ({
  wrapper: {
    width: "100%",
    cursor: "pointer",
    position: "relative",
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
    gridColumnGap: "0.9375vw",
    "@media(min-width: 1280px)": {
      gridColumnGap: "12px",
    },
    "@media(max-width: 834px)": {
      gridColumnGap: "1.4388vw",
    },
    "@media(max-width: 414px)": {
      gridColumnGap: "2.898vw",
    },
  },
  itemAll: {
    width: "90.625vw",
    maxWidth: "1160px",
    height: "100%",
    opacity: 0.5,
    alignSelf: "center",
    transform: "scaleY(0.9)",
    transition: "transform 1s, opacity 1s",
    "@media(max-width: 834px)": {
      width: "88.729vw",
    },
    "@media(max-width: 414px)": {
      width: "82.125vw",
    },
  },
  itemActive: {
    width: "90.625vw",
    maxWidth: "1160px",
    height: "100%",
    opacity: 1,
    transform: "scaleY(1)",
    transition: "transform 1s, opacity 1s",
    "@media(max-width: 834px)": {
      width: "88.729vw",
    },
    "@media(max-width: 414px)": {
      width: "82.125vw",
    },
  },
  button: {
    minWidth: 0,
    position: "absolute",
    zIndex: 1,
    top: "50%",
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
    left: "4px",
    transform: "translateY(-50%) scaleX(-1)",
  },
  buttonRight: {
    right: "4px",
    transform: "translateY(-50%)",
  },
  smallButtonContainer: {
    justifyContent: "center",
    marginTop: "12px",
  },

  smallButton: {
    width: "6px",
    height: "6px",
    minHeight: "6px",
    minWidth: "6px",
    padding: 0,
    marginRight: "4px",
    backgroundColor: "#C4C4C4",
    borderRadius: "1000px",
    transition: "width 1s",
    "&:hover": {
      backgroundColor: "#C4C4C4",
    },
  },
  activeSmallButton: {
    width: "28px",
  },
}))

export default function MainPageSlider({ array, variant }) {
  const classes = useStyle()
  const [activeChild, setActiveChild] = React.useState()
  let contentArray = array
  switch(variant){
    case "sales":
      contentArray = contentArray.map((sale, i) => (
        <Grid item className={classes.itemAll} key={sale.uid + "_" + i}>
          <SaleCard sale={sale} key={sale.uid} mainPage />
        </Grid>
      ))
      break
    case "promotionBanner":
      contentArray = contentArray.map((banner, i) => (
        <Grid item className={classes.itemAll} key={banner.uid + "_" + i}>
          <AdvertiseCard banner={banner} key={banner.uid} />
        </Grid>
      ))
      break
    default: 
    if(variant !== "sales" && variant !== "promotionBanner")
      console.log("Выберите вариант sales или promotionBanner")
  }
  // console.log(contentArray)

  const [cardPanel, setCardPanel] = React.useState(null)
  //вычисляем размер экрана
  const parentWidthConst =
    window.screen.width > 1280 ? 1280 : window.screen.width
  //расстояние между началом экрана и паддингом следующего итема
  const gapBetweenConst =
    (parentWidthConst - cardPanel?.children[0].offsetWidth) / 2
  //правый барьер
  const maxTranslateX =
    cardPanel?.offsetWidth > cardPanel?.parentElement.offsetWidth
      ? cardPanel?.parentElement.offsetWidth -
        cardPanel?.offsetWidth -
        gapBetweenConst
      : gapBetweenConst
  function getTransition(parentNode, activeChild) {
    let childWidth = parentNode.children[0].offsetWidth
    let childPadding = parseFloat(
      window.getComputedStyle(parentNode).gridColumnGap
    )
    let parentWidth = window.screen.width > 1280 ? 1280 : window.screen.width
    let gapBetween = (parentWidth - childWidth) / 2
    return -((childWidth + childPadding) * activeChild) + gapBetween
  }

  function setActiveChildStyle(parentNode, childNode) {
    ;[...parentNode.children].map(child =>
      child.classList.remove(classes.itemActive)
    )
    parentNode.children[childNode].classList.add(classes.itemActive)
  }

  function getActiveChild(parentNode) {
    let transition = parentNode.style.transform.slice(10, -3)
    let childWidth = parentNode.children[0].offsetWidth
    return Math.abs(Math.round(transition / childWidth))
  }

  const setRef = React.useCallback(node => {
    if (node !== null) {
      setCardPanel(node)
      //выбираем активную карточку
      let childrenCount = node.children.length
      let active = Math.ceil(childrenCount / 2) - 1
      setActiveChild(active)
      node.children[active].classList.add(classes.itemActive)

      //центрирование активной карточки
      node.style.transform = `translate(${getTransition(node, active)}px)`
    }
  }, [])

  function setScrollBar(e) {
    const bar = e.currentTarget
    bar.style.cursor = "grabbing"

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
      bar.style.cursor = "grab"
      cardPanel.style.transition = transition
      //при pointerUP происходит центрирование активного итема
      cardPanel.style.transform = `translate(${getTransition(
        cardPanel,
        getActiveChild(cardPanel)
      )}px)`
      setActiveChildStyle(cardPanel, getActiveChild(cardPanel))
      setActiveChild(getActiveChild(cardPanel))
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
      //левый барьер
      newTranslateX =
        newTranslateX > gapBetweenConst ? gapBetweenConst : newTranslateX
      newTranslateX =
        newTranslateX < maxTranslateX ? maxTranslateX : newTranslateX
      cardPanel.style.transform = `translate(${newTranslateX}px)`
    }

    function noGoLink(e) {
      e.preventDefault()
    }
  }

  function handleButtonRigth() {
    let tempActive = activeChild
    if (activeChild < cardPanel.children.length - 1) {
      tempActive = tempActive + 1
      cardPanel.style.transform = `translate(${getTransition(
        cardPanel,
        tempActive
      )}px)`
      setActiveChild(tempActive)
      setActiveChildStyle(cardPanel, tempActive)
    } else if (activeChild === cardPanel.children.length - 1) {
      tempActive = 0
      cardPanel.style.transform = `translate(${getTransition(
        cardPanel,
        tempActive
      )}px)`
      setActiveChild(tempActive)
      setActiveChildStyle(cardPanel, tempActive)
    }
  }
  function handleButtonLeft() {
    let tempActive = activeChild
    if (activeChild > 0) {
      tempActive = tempActive - 1
      cardPanel.style.transform = `translate(${getTransition(
        cardPanel,
        tempActive
      )}px)`
      setActiveChild(tempActive)
      setActiveChildStyle(cardPanel, tempActive)
    } else if (activeChild === 0) {
      tempActive = cardPanel.children.length - 1
      cardPanel.style.transform = `translate(${getTransition(
        cardPanel,
        tempActive
      )}px)`
      setActiveChild(tempActive)
      setActiveChildStyle(cardPanel, tempActive)
    }
  }

  function handleSmallButtonClick(number) {
    let tempActive = number
    cardPanel.style.transform = `translate(${getTransition(
      cardPanel,
      tempActive
    )}px)`
    setActiveChild(tempActive)
    setActiveChildStyle(cardPanel, tempActive)
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
          {contentArray}
        </Grid>
        <Button
          className={classes.button + " " + classes.buttonRight}
          onClick={handleButtonRigth}
        >
          <Arrow />
        </Button>
        <Button
          className={classes.button + " " + classes.buttonLeft}
          onClick={handleButtonLeft}
        >
          <Arrow />
        </Button>
        <Grid container className={classes.smallButtonContainer}>
          {contentArray.map((sale, i) => (
            
            <Button
              className={
                i === activeChild
                  ? classes.smallButton + " " + classes.activeSmallButton
                  : classes.smallButton
              }
              onClick={(e) => handleSmallButtonClick(i)}
            ></Button>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}
