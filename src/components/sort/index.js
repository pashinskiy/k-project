import React from "react"
import { makeStyles, Button, Typography, Grid } from "@material-ui/core"
import { navigate } from "gatsby"

import IconSort from "../../../static/svg/sort.svg"

import {
  GlobalStateContext,
  GlobalDispatchContext,
} from "../../context/GlobalContextProvider"

const useStyles = makeStyles(theme => ({
  button: {
    padding: 0,
    width: "auto",
    display: "flex",
    justifyContent: "space-between",
    minWidth: 0,
    position: "relative",
  },
  icon: {
    height: "1.85vw",
    width: "1.85vw",
    marginRight: "0.62vw",
    "@media(min-width: 1280px)": {
      width: "24px",
      height: "24px",
      marginRight: "8px",
    },
    "@media(max-width: 1025px)": {
      width: "2.87vw",
      height: "2.87vw",
      marginRight: "0.95vw",
    },
    "@media(max-width: 767px)": {
      width: "5.79vw",
      height: "5.79vw",
      marginRight: "1.93vw",
    },
  },
  text: {
    fontWeight: 400,
    lineHeight: 1.21,

    fontSize: "1.09vw",
    "@media(min-width: 1280px)": {
      fontSize: "14px",
    },
    "@media(max-width: 1025px)": {
      fontSize: "1.67vw",
    },
    "@media(max-width: 767px)": {
      fontSize: "3.38vw",
    },
  },
  variantsWrapper: {
    background: theme.palette.background.secondary,
    position: "absolute",
    left: 0,
    zIndex: 1,

    width: "14.14vw",
    padding: "0.93vw",
    borderRadius: "1.56vw",
    top: "calc(100% - 1.56vw)",
    "@media(min-width: 1280px)": {
      width: "181px",
      padding: "12px",
      borderRadius: "20px",
      top: "calc(100% - 12px)",
    },
    "@media(max-width: 1025px)": {
      width: "21.7vw",
      padding: "1.43vw",
      borderRadius: "2.39vw",
      top: "calc(100% - 2.39vw)",
    },
    "@media(max-width: 767px)": {
      width: "43.71vw",
      padding: "2.89vw",
      borderRadius: "4.83vw",
      top: "calc(100% - 4.83vw)",
    },
  },
  variant: {
    color: theme.palette.color.main,
    minWidth: 0,
    padding: "0.62vw 0.93vw",
    borderRadius: "0.62vw",
    "@media(min-width: 1280px)": {
      padding: "8px 12px",
      borderRadius: "8px",
    },
    "@media(max-width: 1025px)": {
      padding: "0.95vw 1.43vw",
      borderRadius: "0.95vw",
    },
    "@media(max-width: 767px)": {
      padding: "1.93vw 2.89vw",
      borderRadius: "1.93vw",
    },
    "&:hover": {
      backgroundColor: theme.palette.background.secondaryDark,
    },
  },
}))

export default function Sort({ products, setSortProducts }) {
  const classes = useStyles()
  const state = React.useContext(GlobalStateContext)
  const dispatch = React.useContext(GlobalDispatchContext)

  const variantsSort = [
    { name: "Сначала дешевые", func: sortByPrice },
    { name: "Сначала дорогие", func: sortByPriceInv },
  ]
  const [value, setValue] = React.useState("Сортировать")
  const [show, setShow] = React.useState(false)

  function openPanel() {
    if (show) return
    setShow(true)
    setTimeout(
      () =>
        document.addEventListener("click", () => setShow(false), {
          once: true,
        }),
      0
    )
  }

  function sortByPrice(product1, product2) {
    return product1.data.price - product2.data.price
  }
  function sortByPriceInv(product1, product2) {
    return product2.data.price - product1.data.price
  }

  // function sortByNew(product1, product2) {}
  // function sortBySale(product1, product2) {}
  // function sortByPopular(product1, product2) {}

  function sorting(name, func) {
    setValue(name)
    const newAllProduct = [...products].sort(func)
    setSortProducts(newAllProduct)

    dispatch({
      type: "SET_ALL_PRODUCTS",
      payload: {
        edges: state.allPrismicProduct.edges
          .map(edge => edge.node)
          .sort(func)
          .map(product => ({ node: product })),
      },
    })

    const url = new URL(window.location.href)
    url.searchParams.set("page", 1)
    navigate(url.search)
  }

  return (
    <Grid>
      <Button onClick={openPanel} className={classes.button}>
        <IconSort className={classes.icon} />
        <Typography className={classes.text}>{value}</Typography>
      </Button>

      {show ? (
        <Grid container justify="column" className={classes.variantsWrapper}>
          {variantsSort.map(variant => (
            <Button
              onClick={() => sorting(variant.name, variant.func)}
              className={classes.text + " " + classes.variant}
              key={variant.name}
            >
              {variant.name}
            </Button>
          ))}
        </Grid>
      ) : null}
    </Grid>
  )
}
