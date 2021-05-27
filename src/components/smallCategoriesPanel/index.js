import { Grid, useMediaQuery } from "@material-ui/core"
import React from "react"
import CardWidget from "../widgets/cardWidget"
import { makeStyles } from "@material-ui/core/styles"
import FavoritesPlusIcon from "../../../static/svg/favoritesPlus.svg"

const useStyles = makeStyles(theme => ({
  containerRoot: {
    width: "calc(100% + 16px)",
    margin: "0 -16px 0 -16px",
    "-ms-overflow-style": "none",
    "@media(max-width: 834px)": {
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
    "@media(max-width: 834px)": {
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
    margin: "auto"
  },
  iconContainer: {
    alignSelf:"center",
    marginLeft: "4px",
    "@media(max-width: 834px)": {
    marginRight: "4px",
    }
  },
}))

export default function SmallCategoriesPanel(categories) {
  const classes = useStyles()
  const isMobile = useMediaQuery("(max-width: 834px)")
  const icon = (
    <Grid item className={classes.iconContainer}>
      <FavoritesPlusIcon className={classes.icon} onClick={addCategory} />
    </Grid>
  )

  function addCategory() {
    console.log("adding some categories")
  }

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
  console.log(categories)

  return (
    <Grid
      container
      className={classes.containerRoot}
      wrap={isMobile ? "nowrap" : null}
      onPointerDown={setScrollBar}
    >
      {isMobile ? icon : null}
      {categories.categories.map(item => (
        <Grid item className={classes.itemRoot} key={item.uid} >
          <CardWidget cardTitle={item.data.name} variant="small" />
        </Grid>
      ))}
      {isMobile ? null : icon}
    </Grid>
  )
}
