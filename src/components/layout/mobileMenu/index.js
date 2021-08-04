import React from "react"
import { makeStyles } from "@material-ui/styles"
import ButtonWithIcon from "../header/buttonWithIcon"

import { GlobalStateContext } from "../../../context/GlobalContextProvider"

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
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginLeft: "-3.35vw",
      "& a": {
        display: "inherit",
      },
    },
    "@media(max-width: 414px)": {
      marginLeft: "-6.76vw",
    },
  },
  menu_point: {
    width: "calc(100vw / 4)",
  },
}))

export default function MobileMenu({ data }) {
  const classes = useStyles()

  const state = React.useContext(GlobalStateContext)

  return (
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
          alt={data.allPrismicHeader.edges[0]?.node.data.catalog_mobile_img.alt ?? "img"}
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
          alt={data.allPrismicHeader.edges[0]?.node.data.favorites_img.alt ?? "img"}
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
  )
}
