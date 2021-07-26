import React from "react"
import { makeStyles, Typography } from "@material-ui/core"
import { GatsbyImage } from "gatsby-plugin-image"
import ScrollBar from "../../scrollBar"
import SaleValue from "../dayProduct/saleValue"

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 80,
    overflowX: "visible",
    "& h3": {
      fontSize: 36,
      fontWeight: 700,
      lineHeight: "100%",
      "@media (max-width: 1024px)": {
        fontSize: 28,
      },
      "@media (max-width: 767px)": {
        fontSize: 20,
      },
    },
  },
  title: {
    width: "100%",
    marginBottom: 24,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  catalog: {
    background: theme.palette.background.secondary,
    borderRadius: 12,
    overflow: "hidden",
    WebkitBackfaceVisibility: 'hidden',
    MozBackfaceVisibility: 'hidden',
    WebkitTransform: 'translate3d(0, 0, 0)',
    MozTransform: 'translate3d(0, 0, 0)',
    border: "none",
    padding: "8px 12px",
    fontSize: 14,
    color: theme.palette.color.accentSecondary,
    lineHeight: "100%",
    cursor: "pointer",
  },
  advantages: {
    display: "flex",
    overflowX: "visible",
  },
  card: {
    width: 297,
    height: 260,
    flexShrink: 0,
    borderRadius: 20,
    overflow: "hidden",
    WebkitBackfaceVisibility: 'hidden',
    MozBackfaceVisibility: 'hidden',
    WebkitTransform: 'translate3d(0, 0, 0)',
    MozTransform: 'translate3d(0, 0, 0)',
    background: theme.palette.background.secondary,
    marginRight: 12,
    "&:last-child": {
      marginRight: 0,
    },
    "& h4": {
      fontSize: 17,
      fontWeight: 700,
      padding: 12,
      borderRadius: 12,
      width: "100%",
      transform: "rotate(-4deg)",
      marginBottom: 8,
      background: "white",
      "& span": {
        color: theme.palette.color.accentSecondary,
      },
    },
  },
  img: {
    borderRadius: 20,
    overflow: "hidden",
    WebkitBackfaceVisibility: 'hidden',
    MozBackfaceVisibility: 'hidden',
    WebkitTransform: 'translate3d(0, 0, 0)',
    MozTransform: 'translate3d(0, 0, 0)',
    top: 0,
    width: "100%",
    height: "100%",
  },
  info: {
    padding: 8,
    zIndex: 5,
    width: 297,
    height: 260,
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
}))

export default function Sales(props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography variant="h3">Выгодные акции</Typography>
      </div>
      <div className={classes.advantages}>
        <ScrollBar buttonNext fullScreen>
          {props.data.allPrismicSale.edges.map((advantage, i) => (
            <div className={classes.card}>
              <div className={classes.info}>
                <SaleValue value={advantage.node.data.sale_value} />
                <Typography
                  variant="h4"
                  dangerouslySetInnerHTML={{
                    __html: advantage.node.data.sale_name.raw[0].text,
                  }}
                />
              </div>
              <GatsbyImage
                image={
                  advantage.node.data.sale_img.localFile.childImageSharp
                    .gatsbyImageData
                }
                alt={advantage.node.data.sale_img.alt}
                className={classes.img}
              />
            </div>
          ))}
        </ScrollBar>
      </div>
    </div>
  )
}
