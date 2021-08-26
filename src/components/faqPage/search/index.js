import React from "react"
import { makeStyles } from "@material-ui/styles"
import { graphql, useStaticQuery } from "gatsby"

import { FaqDispatchContext } from "../context"

const useStyles = makeStyles(theme => ({
  form: {
    display: "flex",
    background: theme.palette.background.secondary,

    padding: "1.09vw 1.25vw",
    borderRadius: "0.93vw",
    "@media (min-width: 1280px)": {
      padding: "14px 16px",
      borderRadius: "12px",
    },
    "@media (max-width: 1025px)": {
      padding: "1.67vw 1.91vw",
      borderRadius: "1.43vw",
    },
    "@media (max-width: 767px)": {
      padding: "3.38vw 3.86vw",
      borderRadius: "2.89vw",
    },

    "& :-webkit-autofill, :-webkit-autofill:hover, :-webkit-autofill:focus, :-webkit-autofill:active": {
      boxShadow: `0 0 0 30px ${theme.palette.background.secondary} inset !important`,
    },
  },
  input: {
    width: "100%",
    padding: 0,
    background: "none",
    border: "none",
    outline: "none",

    fontWeight: 400,
    lineHeight: 1.21,
    color: theme.palette.color.secondary,

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
  img: {
    width: "1.25vw",
    height: "1.25vw",
    marginRight: "0.78vw",
    "@media(min-width: 1280px)": {
      width: "16px",
      height: "16px",
      marginRight: "10px",
    },
    "@media(max-width: 1025px)": {
      width: "1.91vw",
      height: "1.91vw",
      marginRight: "1.19vw",
    },
    "@media(max-width: 767px)": {
      width: "3.86vw",
      height: "3.86vw",
      marginRight: "2.41vw",
    },
  },
}))

/**
 * Поиск на странице технической поддержки
 * @module components/faqPage/search
 */
export default function Search() {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    {
      allPrismicHeader {
        edges {
          node {
            data {
              find_img {
                localFile {
                  publicURL
                }
                alt
              }
            }
          }
        }
      }
    }
  `)

  const faqDispatch = React.useContext(FaqDispatchContext)

  function setComponent() {
    faqDispatch({ type: "SET_COMPONENT", payload: "search" })
  }

  function setSearch(value) {
    faqDispatch({ type: "SET_SEARCH", payload: value })
  }

  return (
    <form onSubmit={e => e.preventDefault()} className={classes.form}>
      <img
        src={
          data.allPrismicHeader.edges[0].node.data.find_img.localFile?.publicURL
        }
        alt={data.allPrismicHeader.edges[0].node.data.find_img.alt??"img"}
        className={classes.img}
      />
      <input
        onClick={setComponent}
        onInput={e => setSearch(e.currentTarget.value)}
        placeholder="Искать"
        className={classes.input}
      />
    </form>
  )
}
