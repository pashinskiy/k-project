import React from "react"
import { makeStyles } from "@material-ui/styles"
import ButtonWithIcon from "../header/buttonWithIcon"

import { GlobalStateContext } from "../../../context/GlobalContextProvider"
import { useMediaQuery } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    display: "none",
    background: theme.palette.background.secondary,
    borderRadius: "20px 20px 0px 0px",
    position: "fixed",
    bottom: 0,
    height: 62,
    zIndex: 1000,
    width: "100%",
    "@media(max-width: 1025px)": {
      paddingTop: 5,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginLeft: "-3.35vw",
      boxShadow: `inset 0 0 0 0.05vw #D6D5DF`,

      "& a": {
        display: "inherit",
      },
    },
    "@media(max-width: 767px)": {
      marginLeft: "-6.76vw",
      boxShadow: `inset 0 0 0 0.12vw #D6D5DF`,
    },
  },
  menu_point: {
    width: "calc(100vw / 4)",
  },
}))

/**
 * Меню для мобильных
 * @module src/components/layout/mobileMenu
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.data - объект данных полученый из prismic
 */
export default function MobileMenu({ data }) {
  const classes = useStyles()
  const mobile = useMediaQuery("(max-width: 1025px)")

  const state = React.useContext(GlobalStateContext)

  return mobile ? (
    <nav className={classes.root}>
      <div className={classes.menu_point}>
        <ButtonWithIcon
          name={data.allPrismicHeader.edges[0]?.node.data.main_name.text}
          link="/"
          img={
            data.allPrismicHeader.edges[0]?.node.data.main_img.localFile
              .publicURL + "#outline"
          }
          alt={data.allPrismicHeader.edges[0]?.node.data.main_img.alt}
        />
      </div>
      <div className={classes.menu_point}>
        <ButtonWithIcon
          name={data.allPrismicHeader.edges[0]?.node.data.catalog_name.text}
          link="/products/"
          img={
            data.allPrismicHeader.edges[0]?.node.data.catalog_mobile_img
              .localFile?.publicURL + "#outline"
          }
          alt={
            data.allPrismicHeader.edges[0]?.node.data.catalog_mobile_img.alt ??
            "img"
          }
        />
      </div>
      <div className={classes.menu_point}>
        <ButtonWithIcon
          name={data.allPrismicHeader.edges[0]?.node.data.favorites_name.text}
          link="/favorites/"
          img={
            data.allPrismicHeader.edges[0]?.node.data.favorites_img.localFile
              .publicURL + "#outline"
          }
          alt={
            data.allPrismicHeader.edges[0]?.node.data.favorites_img.alt ?? "img"
          }
          count={state.favorites.length}
        />
      </div>
      <div className={classes.menu_point}>
        <ButtonWithIcon
          name={data.allPrismicHeader.edges[0]?.node.data.cart_name.text}
          link="/cart/"
          img={
            data.allPrismicHeader.edges[0]?.node.data.cart_img.localFile
              .publicURL + "#outline"
          }
          alt={data.allPrismicHeader.edges[0]?.node.data.cart_img.alt ?? "img"}
          count={state.cart.length}
        />
      </div>
    </nav>
  ) : null
}
