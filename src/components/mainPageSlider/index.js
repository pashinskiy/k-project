import React from "react"
import { Button, Grid, useMediaQuery, Card } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Link, useStaticQuery, graphql } from "gatsby"
import Arrow from "../../../static/svg/arrowWhite.svg"
import SaleCard from "../saleCardPanel/saleCard"
import AdvertiseCard from "./advertiseCard"
import { GatsbyImage } from "gatsby-plugin-image"

const useStyle = makeStyles(theme => ({
  wrapper: {
    width: "100%",
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",

    "&:before": {
      content: "''",
      display: "block",
      position: "absolute",
      left: 0,
      height: "100%",
      "@media (min-width: 1024px)": {
        background: `linear-gradient(90deg, ${theme.palette.background.main} 0%, rgba(255, 255, 255, 0) 100%)`,
      },
      zIndex: 1,
      pointerEvents: "none",

      width: "4.68vw",
      "@media(min-width: 1280px)": {
        width: "60px",
      },
      "@media(max-width: 1025px)": {
        width: "5.6vw",
      },
      "@media(max-width: 767px)": {
        width: "8.93vw",
      },
    },
    "&:after": {
      content: "''",
      display: "block",
      position: "absolute",
      right: 0,
      height: "100%",
      background: `linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, ${theme.palette.background.main} 100%)`,
      zIndex: 1,
      pointerEvents: "none",

      width: "4.68vw",
      "@media(min-width: 1280px)": {
        width: "60px",
      },
      "@media(max-width: 1025px)": {
        width: "5.6vw",
      },
      "@media(max-width: 767px)": {
        width: "8.93vw",
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

    marginLeft: "-2.18vw",
    // paddingLeft: "2.18vw",
    "@media(min-width: 1280px)": {
      marginLeft: "-28px",
      //   paddingLeft: "28px",
    },
    "@media(max-width: 1025px)": {
      marginLeft: "-3.35vw",
      //   paddingLeft: "3.35vw",
    },
    "@media(max-width: 767px)": {
      marginLeft: "-6.76vw",
      //   paddingLeft: "6.76vw",
    },
  },
  track: {
    height: "42.89vw",

    width: "auto",
    transition: "0.6s transform",
    position: "relative",
    boxSizing: "border-box",

    touchAction: "none",
    "@media(max-width: 1025px)": {
      height: "53.56vw",

      width: "100%",
      position: "relative",
      touchAction: "auto",  
      flexWrap: "nowrap",
      overflowX: "scroll",
      scrollbarWidth: "none",
      "-ms-overflow-style": "none",
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
    "@media(max-width: 767px)": {
      height: "66.96vh",
    },
  },
  itemAll: {
    width: "90.625vw",
    maxWidth: "1160px",
    height: "91%",
    alignSelf: "center",
    // transform: "scaleY(0.9)",
    transition: "height .6s",

    marginRight: "0.9375vw",
    "@media(min-width: 1280px)": {
      marginRight: "12px",
    },

    "@media(max-width: 1025px)": {
      width: "88.729vw",
      marginRight: "1.4388vw",
      "&:last-child": {
        marginRight: 0,
      },
    },
    "@media(max-width: 767px)": {
      width: "82.125vw",
      height: "83.33%",
      marginRight: "2.898vw",
    },
  },
  itemActive: {
    width: "90.625vw",
    maxWidth: "1160px",
    height: "100%",
    // transform: "scaleY(1)",
    transition: "height .6s",
    "@media(max-width: 1025px)": {
      width: "88.729vw",
    },
    "@media(max-width: 767px)": {
      width: "82.125vw",
    },
  },
  button: {
    minWidth: 0,
    position: "absolute",
    zIndex: 2,
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
    "@media(max-width: 1025px)": {
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
    transition: "width .6s",
    "&:hover": {
      backgroundColor: "#C4C4C4",
    },
  },
  activeSmallButton: {
    width: "28px",
  },
  cardRoot: {
    width: "100%",
    height: "100%",
    boxShadow: "none",
    backgroundColor: theme.palette.background.secondary,
    position: "relative",
    borderRadius: "1.5625vw",
    overflow: "hidden",
    WebkitBackfaceVisibility: "hidden",
    MozBackfaceVisibility: "hidden",
    WebkitTransform: "translate3d(0, 0, 0)",
    MozTransform: "translate3d(0, 0, 0)",
    padding: "0.625vw",
    "@media(min-width: 1280px)": {
      borderRadius: "20px",
      padding: "8px",
    },
    "@media(max-width: 1025px)": {
      borderRadius: "2.398vw",
      padding: "0.959vw",
    },
    "@media(max-width: 767px)": {
      borderRadius: "4.83vw",
      padding: "1.932vw",
    },
    "&": {
      lineHeight: 0,
    },
  },
  wrapperImg: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    WebkitBackfaceVisibility: "hidden",
    MozBackfaceVisibility: "hidden",
    WebkitTransform: "translate3d(0, 0, 0)",
    MozTransform: "translate3d(0, 0, 0)",

    borderRadius: "0.9375vw",
    "@media(min-width: 1280px)": {
      borderRadius: "12px",
    },
    "@media(max-width: 1025px)": {
      borderRadius: "1.438vw",
    },
    "@media(max-width: 767px)": {
      borderRadius: "2.8985vw",
    },
    "&:img": {
      borderRadius: "inherit",
    },
  },
}))

/**
 * Слайдер банеров на главной
 * @module src/components/mainPageSlider
 * @param {Object} props - объект свойств компонента React
 * @param {Object[]} props.array - массив объектов акций или банеров полученый из prismic
 * @param {String} props.variant - вариант отображения sales или promotionBanner
 */
export default function MainPageSlider({ array, variant }) {
  const classes = useStyle()
  const [activeChild, setActiveChild] = React.useState()
  const mobile = useMediaQuery("(max-width: 1025px)")

  const data = useStaticQuery(graphql`
    {
      prismicMainPage {
        data {
          image {
            alt
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          baner_mobile {
            alt
            localFile {
              childImageSharp {
                gatsbyImageData(height: 200)
              }
            }
          }
        }
      }
    }
  `)

  let contentArray = array
  switch (variant) {
    case "sales":
      contentArray = contentArray.map((sale, i) => (
        <Grid item className={classes.itemAll} key={sale.uid + "_" + i}>
          <SaleCard sale={sale} key={sale.uid} mainPage />
        </Grid>
      ))
      const imageBaner = mobile
        ? data.prismicMainPage.data.baner_mobile
        : data.prismicMainPage.data.image
      if (imageBaner?.localFile ?? false)
        contentArray.unshift(
          <Grid item className={classes.itemAll} key="bannerMokka">
            <Card className={classes.cardRoot}>
              <GatsbyImage
                image={imageBaner.localFile.childImageSharp.gatsbyImageData}
                alt={imageBaner.alt ?? "mokka"}
                className={classes.wrapperImg}
                imgStyle={{ objectFit: "cover" }}
              />
            </Card>
          </Grid>
        )
      break
    case "promotionBanner":
      contentArray = contentArray.map((banner, i) =>
        banner.data.tumbler_link === true ? (
          <Grid item className={classes.itemAll} key={banner.uid + "_" + i}>
            <Link to={`${banner.data.link}`}>
              <AdvertiseCard banner={banner} key={banner.uid} />
            </Link>
          </Grid>
        ) : (
          <Grid item className={classes.itemAll} key={banner.uid + "_" + i}>
            <a
              href={`${banner.data.link}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AdvertiseCard banner={banner} key={banner.uid} />
            </a>
          </Grid>
        )
      )
      break
    default:
      if (variant !== "sales" && variant !== "promotionBanner")
        console.log("Выберите вариант sales или promotionBanner")
  }

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
      window.getComputedStyle(parentNode.children[0]).marginRight
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

      if (window.screen.width < 1025) {
        node.style.padding = `
          0 ${
            (window.screen.width -
              node.children[active].getBoundingClientRect().width) /
            2
          }px`

        node.scroll({
          left: node.children[active].offsetLeft - node.children[0].offsetLeft,
          behavior: "smooth",
        })
        return
      }

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
      // console.log(cardPanel.style.transform)

      document.removeEventListener("pointermove", scrollBar)
      document.removeEventListener("pointerup", deleteScrollBar)

      setTimeout(
        () =>
          document.removeEventListener("click", noGoLink, {
            once: true,
            capture: true,
          }),
        0
      )
    }

    function scrollBar(e) {
      if (Math.abs(e.clientY - clientY) > 15 && eventScroll === null) {
        eventScroll = true
      }
      if (Math.abs(e.clientX - clientX) > 15 && eventScroll === null) {
        eventScroll = false
        e.preventDefault()
      }
      if (eventScroll === null) return
      if (eventScroll === true) {
        window.scrollTo(0, scroll + clientY - e.clientY)
        return
      }

      document.addEventListener("click", noGoLink, {
        once: true,
        capture: true,
      })
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

  function setCentralSliderInMobile(e) {
    const elemWidth = cardPanel.children[0].getBoundingClientRect().width
    const marginRight =
      cardPanel.children[1].offsetLeft -
      (cardPanel.children[0].offsetLeft + elemWidth)
    const scrollLeft = cardPanel.scrollLeft

    const newIndex = Math.round(scrollLeft / (elemWidth + marginRight))

    if (newIndex !== activeChild) {
      setActiveChildStyle(cardPanel, newIndex)
      setActiveChild(newIndex)
    }
  }

  return (
    <Grid container className={classes.wrapper + " " + classes.fullScreen}>
      <Grid container className={classes.wrapperTrack + " " + classes.unselect}>
        <Grid
          container
          ref={setRef}
          onPointerDown={!mobile ? setScrollBar : null}
          onScroll={mobile ? setCentralSliderInMobile : null}
          onScrollEnd={mobile ? console.log("123") : null}
          className={classes.track}
        >
          {contentArray}
        </Grid>

        <Button
          aria-label="вперед"
          className={classes.button + " " + classes.buttonRight}
          onClick={handleButtonRigth}
        >
          <Arrow />
        </Button>

        <Button
          aria-label="назад"
          className={classes.button + " " + classes.buttonLeft}
          onClick={handleButtonLeft}
        >
          <Arrow />
        </Button>

        <Grid container className={classes.smallButtonContainer}>
          {contentArray.map((sale, i) => (
            <Button
              aria-label={`slider ${i}`}
              className={
                i === activeChild
                  ? classes.smallButton + " " + classes.activeSmallButton
                  : classes.smallButton
              }
              key={"small-button-" + i}
              onClick={mobile ? null : e => handleSmallButtonClick(i)}
            ></Button>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}
