import React from "react"
import { makeStyles } from "@material-ui/styles"
import DefaultLink from "./link/default"
import SaleButton from "./link/sale"
import { Link } from "gatsby"
import CatalogButton from "./catalog"
import ButtonWithIcon from "./buttonWithIcon"
import Search from "./search"

const useStyles = makeStyles(theme => ({
  root: {
    height: 100,
    background: "white",
    display: "flex",
    alignItems: "center",
    "@media (max-width: 1024px)": {
      height: 70,
    },
  },
  wrapper: {
    width: "100%",
    zIndex: 1001,
  },
  submenu: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 8,
    "@media (max-width: 1024px)": {
      display: "none",
    },
  },
  menu: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    "@media (min-width: 1025px) and (max-width: 1279px)": {
      width: "17.8vw",
    },
    "@media (max-width: 1024px)": {
      height: 36,
      width: "auto",
    },
    "@media (max-width: 320px)": {
      height: "auto",
      width: "40vw",
    },
    "& img": {
      display: "block",
      transition: ".15s ease all",
      width: "auto",
      height: 52,
      "@media (min-width: 1025px) and (max-width: 1279px)": {
        width: "17.8vw",
      },
      "@media (max-width: 1024px)": {
        height: 36,
        width: "auto",
      },
      "@media (max-width: 320px)": {
        height: "auto",
        width: "40vw",
      },
    },
    "&:hover": {
      "& img": {
        transform: "translateY(-4px)",
      },
    },
  },
  catafind: {
    display: "flex",
    alignItems: "center",
    "@media (max-width: 1024px)": {
      flexDirection: "row-reverse",
    },
    "& .catalog": {
      marginRight: 28,
      "@media (min-width: 1025px) and (max-width: 1279px)": {
        marginRight: "1.4vw",
      },
      "@media (max-width: 1024px)": {
        marginLeft: 20,
        marginRight: 0,
      },
      "@media (max-width: 252px)": {
        marginLeft: "2vw",
      },
    },
  },
  background: {
    background: "white",
    zIndex: 999,
    position: "absolute",
    width: "100vw",
    height: 100,
    top: 0,
    left: 0,
    "@media (max-width: 1024px)": {
      height: 70,
    },
  },
}))

export default function Header({
  data,
  catalog,
  setCatalog,
  animation,
  setAnimation,
}) {
  const classes = useStyles()

  const links = data.allPrismicHeader?.edges[0]?.node.data.body

  return (  
    <header id="header" className={classes.root}>
      <div className={classes.wrapper}>
        <nav className={classes.submenu}>
          <SaleButton
            name={data.allPrismicHeader?.edges[0]?.node.data.sale_name.text}
          />

          {links?.map((links, i) => (
            <DefaultLink
              key={`info ${i}`}
              name={links.primary.link_name.text}
            />
          ))}
        </nav>
        <nav className={classes.menu}>
          <Link to={"/"} className={classes.logo}>
            <img
              src={
                data.allPrismicHeader.edges[0]?.node.data.logo_svg.localFile
                  .publicURL
              }
              alt={data.allPrismicHeader.edges[0]?.node.data.logo_svg.alt}
            />
          </Link>

          <div className={classes.catafind}>
            <CatalogButton
              data={data}
              catalog={catalog}
              setCatalog={setCatalog}
              animation={animation}
              setAnimation={setAnimation}
            />

            <Search data={data} />
          </div>

          <ButtonWithIcon
            name={data.allPrismicHeader.edges[0]?.node.data.favorites_name.text}
            img={
              data.allPrismicHeader.edges[0]?.node.data.favorites_img.localFile
                .publicURL + "#outline"
            }
            alt={data.allPrismicHeader.edges[0]?.node.data.favorites_img.alt}
          />

          <ButtonWithIcon
            name={data.allPrismicHeader.edges[0]?.node.data.cart_name.text}
            link={"/cart/"}
            img={
              data.allPrismicHeader.edges[0]?.node.data.cart_img.localFile
                .publicURL + "#outline"
            }
            alt={data.allPrismicHeader.edges[0]?.node.data.cart_img.alt}
          />
        </nav>
      </div>
      <div className={classes.background} />
    </header>
  )
}
