import { Grid, useMediaQuery } from "@material-ui/core"
import React from "react"
import CardWidget from "../widgets/cardWidget"
import { makeStyles } from "@material-ui/core/styles"
import FavoritesPlusIcon from "../../../static/svg/favoritesPlus.svg"
import { navigate } from "gatsby"

const useStyles = makeStyles(theme => ({
  containerRoot: {
    width: "calc(100% + 16px)",
    margin: "0 -16px 0 -16px",
    "-ms-overflow-style": "none",
    "@media(max-width: 1025px)": {
      width: "100vw",
      marginLeft: "-3.35vw",
      paddingLeft: "3.35vw",
      //   paddingLeft: "8px",
      "& *": {
        flexShrink: 0,
      },
      "&::-webkit-scrollbar": {
        display: "none",
      },
      overflow: "scroll",
      scrollbarWidth: "none",
    },
  },
  itemRoot: {
    padding: "4px",
    "@media(max-width: 1025px)": {
      boxSizing: "border-box",
      "-webkit-touch-callout": "none",
      "-webkit-user-select": "none",
      "-khtml-user-select": "none",
      "-moz-user-select": "none",
      "-ms-user-select": "none",
      "user-select": "none",
    },
  },
  icon: {
    width: "57px",
    height: "57px",
    cursor: "pointer",
    display: "block",
    margin: "auto",
  },
  iconContainer: {
    alignSelf: "center",
    marginLeft: "4px",
    "@media(max-width: 1025px)": {
      marginRight: "4px",
    },
  },
}))

/**
 * Панель категорий на странице избранного
 * @module src/components/smallCategoriesPanel
 * @param {Object} props - объект свойств компонента React
 * @param {Object[]} props.categories - массив объектов категорий полученный из prismic
 */
export default function SmallCategoriesPanel({categories}) {
  const classes = useStyles()
  const isMobile = useMediaQuery("(max-width: 1025px)")
  const icon = (
    <Grid item className={classes.iconContainer}>
      <FavoritesPlusIcon className={classes.icon} onClick={addCategory} />
    </Grid>
  )

  function addCategory() {
    navigate("/products/")
  }

  function setScrollBar(e) {
    let eventScroll = null
    const clientY = e.clientY
    const scroll = window.pageYOffset

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
      // if (eventScroll === null) {
      //   eventScroll =
      //     Math.abs(e.clientY - clientY) >= Math.abs(e.clientX - clientX)
      // }
      // if (eventScroll) {
      //   window.scrollTo(0, scroll + clientY - e.clientY)
      //   return
      // }

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

      let newLeft = scrollLeft - e.clientX + clientX
      cardPanel.scrollLeft = newLeft
    }
  }

  return (
    <Grid
      container
      className={classes.containerRoot}
      wrap={isMobile ? "nowrap" : null}
      onPointerDown={setScrollBar}
    >
      {isMobile ? icon : null}
      {categories.map(item => (
        <Grid item className={classes.itemRoot} key={item.uid}>
          <CardWidget cardTitle={item.data.name} variant="small" />
        </Grid>
      ))}
      {isMobile ? null : icon}
    </Grid>
  )
}
