import React from "react"
import { Button, Grid, Typography, useMediaQuery } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyle = makeStyles(theme => ({
  wrapper: {
    position: "sticky",
    top: 0,
    zIndex: 99,

    width: "calc(100% + 4.36vw)",
    height: "3.9vw",
    marginLeft: "-2.18vw",
    marginTop: "2.81vw",
    "@media(min-width: 1280px)": {
      width: "calc(100% + 56px)",
      height: "50px",
      marginLeft: "-28px",
      marginTop: "36px",
    },
    "@media(max-width: 1025px)": {
      width: "calc(100% + 6.7vw)",
      height: "4.79vw",
      marginLeft: "-3.35vw",
      marginTop: "1.91vw",
    },
    "@media(max-width: 767px)": {
      width: "100vw",
      height: "12.07vw",
      marginLeft: "-6.76vw",
      marginTop: "3.86vw",
      overflow: "scroll",
      scrollbarWidth: "none",
      "-ms-overflow-style": "none",
    },
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  link: {
    textDecoration: "none",
    textTransform: "none",
    borderRadius: 0,
    transition: "none",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 3.12vw",
    color: theme.palette.color.secondary,
    background: theme.palette.background.secondary,

    "@media(min-width: 1280px)": {
      padding: "0 40px",
    },
    "@media(max-width: 1025px)": {
      padding: "0 4.79vw",
    },
    "@media(max-width: 767px)": {
      padding: "0 9.66vw",
      flexShrink: 0,
    },
    "&:first-child": {
      borderRadius: "1.56vw 0 0 1.56vw",
      "@media(min-width: 1280px)": {
        borderRadius: "20px 0 0 20px",
      },
      "@media(max-width: 1025px)": {
        borderRadius: "2.39vw 0 0 2.39vw",
      },
      "@media(max-width: 767px)": {
        borderRadius: "4.83vw 0 0 4.83vw",
      },
    },
    "&:last-child": {
      borderRadius: "0 1.56vw 1.56vw 0",
      "@media(min-width: 1280px)": {
        borderRadius: "0 20px 20px 0",
      },
      "@media(max-width: 1025px)": {
        borderRadius: "0 2.39vw 2.39vw 0",
      },
      "@media(max-width: 767px)": {
        borderRadius: "0 4.83vw 4.83vw 0",
      },
    },
    "&:hover": {
      background: theme.palette.background.secondary,
    },
  },
  title: {
    whiteSpace: "nowrap",
    fontWeight: 400,
    lineHeight: 1.21,
    fontSize: "1.32vw",
    "@media(min-width: 1280px)": {
      fontSize: "17px",
    },
    "@media(max-width: 1025px)": {
      fontSize: "1.67vw",
    },
    "@media(max-width: 767px)": {
      fontSize: "4.1vw",
    },
  },
  active: {
    color: theme.palette.color.mainContrast,
    background: theme.palette.background.accent,
    "&:hover": {
      color: theme.palette.color.mainContrast,
      background: theme.palette.background.accent,
    },
  },
}))

/**
 * Блок навигации на странице товара
 * @module src/components/productPage/tabPanel
 * @param {Object} props - объект свойств компонента React
 * @param {Object[]} props.links - массив объектов кнопок
 * @param {String} props.links[].title - такст кнопки
 * @param {String} props.links[].href - html якорь для навигации
 */
export default function TabPanel({ links }) {
  const classes = useStyle()
  const [index, setIndex] = React.useState(0)

  const mobile = useMediaQuery("(max-width: 767px)")

  function scrollAnchor(i) {
    window.scrollTo({
      behavior: "smooth",
      left: 0,
      top:
        document.querySelector(links[i].href)?.offsetTop -
        document.querySelector("#tab_panel").offsetHeight,
    }) // document.querySelector("header")?.offsetHeight

    setIndex(i)
  }

  return (
    <Grid id="tab_panel" container wrap="nowrap" className={classes.wrapper}>
      {links.map((link, i) => {
        const active = i === index ? classes.active : ""
        return (
          <Button
            disableRipple
            onClick={() => scrollAnchor(i)}
            key={link.title}
            className={classes.link + " " + active}
            style={{ width: mobile ? "auto" : 100 / links.length + "%" }}
          >
            <Typography className={classes.title}>{link.title}</Typography>
          </Button>
        )
      })}
    </Grid>
  )
}
