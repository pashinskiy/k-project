import React from "react"
import { makeStyles } from "@material-ui/styles"
import { Typography } from "@material-ui/core"
import DefaultLink from "../header/link/default"
import DefaultA from "./link/default"
import Social from "./social"
import WhiteLink from "./link"
import ProductSlider from "./productSlider"

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.background.secondary,
    width: "calc(100% + 28px * 2)",
    borderRadius: "20px 20px 0px 0px",
    marginTop: "70px",
    marginLeft: "-28px",
    "@media(max-width: 1279px)": {
      width: "calc(100% + 2.18vw * 2)",
      marginTop: "5.46vw",
      marginLeft: "-2.18vw",
    },
    "@media(max-width: 834px)": {
      width: "calc(100% + 3.35vw * 2)",
      marginTop: "8.39vw",
      marginLeft: "-3.35vw",
    },
    "@media(max-width: 414px)": {
      width: "calc(100% + 6.76vw * 2)",
      marginTop: "16.9vw",
      marginLeft: "-6.76vw",
    },
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    boxSizing: "border-box",
    padding: 60,
    "@media (max-width: 1279px)": {
      padding: "3.5vw",
    },
    "@media (max-width: 1024px)": {
      flexWrap: "wrap",
      padding: "10px 0px 0px 0px",
    },
  },
  menu: {
    maxWidth: 250,
    width: "100%",
    boxSizing: "border-box",
    padding: 30,
    '& [class^="MuiTypography-root"]': {
      fontSize: 17,
      fontWeight: "bold",
    },
    "&:last-child": {
      maxWidth: "fit-content",
      width: "fit-content",
    },
    "@media (max-width: 1024px)": {
      maxWidth: "100vw",
      width: "calc(100vw / 3)",
      "&:last-child": {
        maxWidth: "100%",
        width: "100%",
      },
    },
    "@media (max-width: 778px)": {
      maxWidth: "100vw",
      width: "49vw",
      "&:last-child": {
        width: "100%",
      },
    },
    "@media (max-width: 398px)": {
      "&:nth-child(3)": {
        width: "calc(100vw / 1.5)",
      },
    },
    "@media (max-width: 322px)": {
      width: "100vw !important",
    },
  },
  links: {
    display: "flex",
    flexDirection: "column",
    marginTop: 28,
    "& a": {
      marginLeft: 0,
      marginBottom: 12,
      fontSize: 14,
    },
  },
  seen: {
    marginTop: 28,
    "@media (max-width: 834px)": {
      margin: "0px -30px",
      marginTop: 28,
    },
  },
  addition: {
    background: theme.palette.color.accent,
    width: "100%",
    height: 45,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxSizing: "border-box",
    padding: "0px 24px",
    "@media (max-width: 1024px)": {
      background: theme.palette.color.mainContrast,
      display: "block",
      height: "auto",
      padding: 0,
    },
  },
  docs_wrapper: {
    "@media (max-width: 664px)": {
      boxSizing: "border-box",
      padding: 20,
      overflowX: "scroll",
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
  },
  docs: {
    display: "flex",
    "@media (max-width: 1024px)": {
      justifyContent: "center",
      boxSizing: "border-box",
      padding: 20,
    },
    "@media (max-width: 664px)": {
      width: "fit-content",
      justifyContent: "flex-start",
      padding: 0,
      "& a": {
        flex: "none",
      },
      "& a:last-child": {
        paddingRight: 20,
      },
    },
  },
  copyright: {
    '& [class^="MuiTypography-root"]': {
      fontSize: 12,
      color: "white",
    },
    "@media (max-width: 1024px)": {
      textAlign: "center",
      '& [class^="MuiTypography-root"]': {
        color: theme.palette.color.main,
      },
      paddingBottom: 142,
    },
  },
  social: {
    marginTop: 28,
    "& a": {
      "& img": {
        transition: ".15s ease all",
      },
      "&:hover": {
        "& img": {
          transform: "scale(1.2)",
        },
      },
    },
  },
}))

export default function Footer({ data }) {
  const classes = useStyles()

  const menu_links = data.allPrismicFooter.edges[0].node.data.body
  const about_links = data.allPrismicFooter.edges[0].node.data.body1
  const contact_links = data.allPrismicFooter.edges[0].node.data.body2
  const docs_links = data.allPrismicFooter.edges[0].node.data.body3

  const docs_from_footer = data.prismicDocs.data.from_footer

  return (
    <footer id="footer" className={classes.root}>
      <nav className={classes.nav}>
        <div className={classes.menu}>
          <Typography variant="h4">
            {data.allPrismicFooter.edges[0].node.data.menu_name.text}
          </Typography>
          <nav className={classes.links}>
            {menu_links.map((link, i) => (
              <DefaultLink
                key={`menu ${i}`}
                name={link.primary.link_name.text}
                link={link.primary.uid_link.text}
              />
            ))}
          </nav>
        </div>
        <div className={classes.menu}>
          <Typography variant="h4">
            {data.allPrismicFooter.edges[0].node.data.about_name.text}
          </Typography>
          <nav className={classes.links}>
            {about_links.map((link, i) => (
              <DefaultLink
                key={`info_2 ${i}`}
                name={link.primary.link_name.text}
                link={link.primary.link.url}
              />
            ))}
          </nav>
        </div>
        <div className={classes.menu}>
          <Typography variant="h4">
            {data.allPrismicFooter.edges[0].node.data.contact_name.text}
          </Typography>
          <nav className={classes.links}>
            {contact_links
              .filter(atr => atr.slice_type === "contact")
              .map((link, i) => (
                <DefaultA
                  key={`contact ${i}`}
                  name={link.primary.contact_link_name.text}
                  link={link.primary.contact_link.url}
                />
              ))}
          </nav>
          <nav className={classes.social}>
            {contact_links
              .filter(atr => atr.slice_type === "social")
              .map((link, i) => (
                <Social
                  key={`social ${i}`}
                  icon={link.primary.social_img.localFile?.publicURL}
                  alt={link.primary.social_img.alt ?? "img"}
                  link={link.primary.link.url}
                />
              ))}
          </nav>
        </div>
        <div className={classes.menu}>
          <Typography variant="h4">
            {data.allPrismicFooter.edges[0].node.data.seen_name.text}
          </Typography>
          <div className={classes.seen}>
            <ProductSlider data={data} />
          </div>
        </div>
      </nav>
      <div className={classes.addition}>
        <div className={classes.docs_wrapper}>
          <div className={classes.docs}>
            {docs_from_footer.map(doc => (
              <WhiteLink
                key={doc.doc.document.id}
                name={doc.doc.document.data.name}
                link={`/documents/${doc.doc.document.uid}/`}
              />
            ))}
            <WhiteLink key="all_docs" name="Все документы" link="/documents/" />
          </div>
        </div>
        <div className={classes.copyright}>
          <Typography variant="body1">{data.allPrismicFooter.edges[0].node.data.copyright.text}</Typography>
        </div>
      </div>
    </footer>
  )
}
