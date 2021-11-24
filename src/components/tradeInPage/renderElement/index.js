import React from "react"
import { makeStyles, Typography } from "@material-ui/core"
import { navigate } from "gatsby"

const useStyles = makeStyles(theme => ({
  text_paragraph: {
    fontWeight: 700,
    lineHeight: 1,

    fontSize: "1.32vw",
    "@media(min-width: 1280px)": {
      fontSize: 17,
    },
    "@media(max-width: 1025px)": {
      fontSize: "2.03vw",
    },
    "@media(max-width: 767px)": {
      lineHeight: 1.3,
      fontSize: "4.1vw",
    },
  },
  reference_paragraph: {
    fontWeight: 700,
    lineHeight: 1,
    textDecoration: "underline",

    fontSize: "1.32vw",
    "@media(min-width: 1280px)": {
      fontSize: 17,
    },
    "@media(max-width: 1025px)": {
      fontSize: "2.03vw",
    },
    "@media(max-width: 767px)": {
      lineHeight: 1.3,
      fontSize: "4.1vw",
    },
  },
  divider: {
    width: "100%",
    height: 1.5,
    background: theme.palette.background.accent,
  },

  svg_paragraph: {
    width: "auto",
    maxWidth: "100%",
    objectFit: "contain",

    height: "4.68vw",
    "@media(min-width: 1280px)": {
      height: 60,
    },
    "@media(max-width: 1025px)": {
      height: "7.19vw",
    },
    "@media(max-width: 767px)": {
      height: "14.49vw",
    },
  },
}))

/**
 * Элемент центрального блока параграфа
 * @module src/components/tradeInPage/RenderElement
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.paragraph - объект параграфа полученный из prismic
 */
export default function RenderElement({ paragraph }) {
  const classes = useStyles()

  function goLink(str) {
    if (!(str ?? false)) return

    if (str.slice(0, 4) === "http") {
      const anchor = document.createElement("a")
      anchor.href = str
      anchor.click()
    } else {
      navigate(str)
    }
  }

  switch (paragraph.slice_type) {
    case "paragraph":
      return (
        <Typography variant="body2" className={classes.text_paragraph}>
          {paragraph.primary.text_paragraph}
        </Typography>
      )
    case "paragraph_with_ref":
      return (
        <button onClick={() => goLink(paragraph.primary.reference_paragraph)}>
          <Typography variant="body2" className={classes.reference_paragraph}>
            {paragraph.primary.reference_text_paragraph}
          </Typography>

          <p className={classes.divider} />
        </button>
      )
    case "paragraph_with_svg":
      return (
        <img
          src={paragraph.primary.svg_paragraph.localFile.publicURL}
          alt={paragraph.primary.svg_paragraph.alt ?? "icon"}
          className={classes.svg_paragraph}
        />
      )
  }
}
