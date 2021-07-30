import React from "react"
import { Grid, makeStyles, Typography } from "@material-ui/core"
import Arrow from "../../../static/svg/arrow.svg"
import { navigate } from "gatsby"

const useStyles = makeStyles(theme => ({
  wrapper: {
    width: "100%",
  },
  paginationBlock: {
    width: "100%",
    margin: "2.18vw 0 5.31vw",
    "@media(min-width: 1280px)": {
      margin: "28px 0 68px",
    },
    "@media(max-width: 1025px)": {
      margin: "3.35vw 0 8.15vw",
    },
    "@media(max-width: 414px)": {
      margin: "6.76vw 0 16.42vw",
      justifyContent: "center ",
    },
    "& button": {
      display: "flex",
      background: "transparent",
      cursor: "pointer",
      border: "none",
      outline: "none",
      padding: 0,
      height: "100%",
      width: "1.4vw",
      "@media(min-width: 1280px)": {
        width: "18px",
      },
      "@media(max-width: 1025px)": {
        width: "2.15vw",
      },
      "@media(max-width: 414px)": {
        width: "4.34vw",
      },
    },
  },
  mirror: {
    transform: "scale(-1, 1)",
  },
  paginationItemWrapper: {
    width: "auto",
    overflow: "hidden",
    height: "3.12vw",
    maxWidth: "16.87vw",
    margin: "0 0.93vw",
    "@media(min-width: 1280px)": {
      height: "40px",
      maxWidth: "216px",
      margin: "0 12px",
    },
    "@media(max-width: 1025px)": {
      height: "4.79vw",
      maxWidth: "25.89vw",
      margin: "0 1.43vw",
    },
    "@media(max-width: 414px)": {
      height: "9.66vw",
      maxWidth: "52.17vw",
      margin: "0 2.89vw",
    },
  },
  barItem: {
    width: "auto",
    height: "100%",
    marginLeft: 0,
  },
  paginationItem: {
    background: theme.palette.background.secondary,
    backgroundClip: "padding-box",
    position: "relative",
    flexShrink: 0,

    width: "3.12vw",
    height: "100%",
    borderRadius: "0.93vw",
    marginRight: "0.31vw",
    border: "0.15vw solid transparent",
    "@media(min-width: 1280px)": {
      width: "40px",
      borderRadius: "12px",
      marginRight: "4px",
      border: "2px solid transparent",
    },
    "@media(max-width: 1025px)": {
      width: "4.79vw",
      borderRadius: "1.43vw",
      marginRight: "0.47vw",
      border: "0.23vw solid transparent",
    },
    "@media(max-width: 414px)": {
      width: "9.66vw",
      borderRadius: "2.89vw",
      marginRight: "0.96vw",
      border: "0.48vw solid transparent",
    },
    "&:last-child": {
      marginRight: 0,
    },
    "& button": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "transparent",
      cursor: "pointer",
      border: "none",
      outline: "none",
      padding: 0,
      height: "100%",
      width: "100%",

      fontWeight: 400,
      lineHeight: 1.21,
      fontSize: "1.09vw",
      "@media(min-width: 1280px)": {
        fontSize: "14px",
      },
      "@media(max-width: 1025px)": {
        fontSize: "1.67vw",
      },
      "@media(max-width: 414px)": {
        fontSize: "3.38vw",
      },
    },
  },
  active: {
    "&::before": {
      content: "''",
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
      borderRadius: "inherit",
      background: theme.palette.background.accent,
      zIndex: -1,
      margin: "-0.15vw",
      "@media(min-width: 1280px)": {
        margin: "-2px",
      },
      "@media(max-width: 1025px)": {
        margin: "-0.23vw",
      },
      "@media(max-width: 414px)": {
        margin: "-0.48vw",
      },
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
  title: {
    fontWeight: 700,
    lineHeight: 1.5,

    marginTop: "2.18vw",
    fontSize: "2.34vw",
    "@media(min-width: 1280px)": {
      marginTop: "28px",
      fontSize: "30px",
    },
    "@media(max-width: 1025px)": {
      marginTop: "3.35vw",
      fontSize: "3.59vw",
    },
    "@media(max-width: 414px)": {
      marginTop: "6.76vw",
      fontSize: "7.24vw",
    },
  },
}))

export default function Pagination({ pageSize, components, message }) {
  const classes = useStyles()
  const barItem = React.useRef()

  message = message ? (
    message
  ) : (
    <Typography className={classes.title}>ничего не найдено.</Typography>
  )

  // смотрим адресную строку
  const url = new URL(window.location.href)
  const page = url.searchParams.has("page") ? +url.searchParams.get("page") : 1

  const lastPage = Math.ceil(components.length / pageSize)
  const showComponents = components.slice(
    pageSize * (page - 1),
    pageSize * page
  )

  function setPageUrl(value) {
    url.searchParams.set("page", value)
    navigate(url.search)
  }

  function goTo(i) {
    if (i < 1 || i > lastPage || i === page) return
    if (lastPage > 5) {
      const bar = barItem.current
      let newLeft = +bar.style.marginLeft.slice(0, -2)
      const step =
        +getComputedStyle(bar.children[0]).width.slice(0, -2) +
        +getComputedStyle(bar.children[0]).marginRight.slice(0, -2)

      if (i > 3 && i < lastPage - 2) newLeft = -step * (i - 3)
      else newLeft = i <= 3 ? 0 : -step * (lastPage - 5)

      bar.style.marginLeft = newLeft + "px"
    }
    setPageUrl(i)
  }

  const pagination = []
  for (let i = 1; i <= lastPage; i++) {
    const active = i === page ? classes.active : ""
    pagination.push(
      <Grid key={i} className={classes.paginationItem + " " + active}>
        <button onClick={() => goTo(i)}>{i}</button>
      </Grid>
    )
  }

  return (
    <Grid container className={classes.wrapper}>
      {showComponents.length ? showComponents : message}

      {lastPage > 1 ? (
        <Grid container alignItems="center" className={classes.paginationBlock}>
          <button onClick={() => goTo(page - 1)}>
            <Arrow className={classes.mirror} />
          </button>

          <Grid
            className={classes.paginationItemWrapper + " " + classes.unselect}
          >
            <Grid
              container
              wrap="nowrap"
              ref={barItem}
              className={classes.barItem}
            >
              {pagination}
            </Grid>
          </Grid>
          <button onClick={() => goTo(page + 1)}>
            <Arrow />
          </button>
        </Grid>
      ) : null}
    </Grid>
  )
}
