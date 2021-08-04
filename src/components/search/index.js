import React from "react"
import { makeStyles } from "@material-ui/styles"
import { graphql, useStaticQuery, navigate } from "gatsby"

const useStyles = makeStyles(theme => ({
  form: {
    display: "flex",
    justifyContent: "space-between",
    background: theme.palette.background.secondary,
    borderRadius: "12px 12px 12px 12px",
    width: "100%",
    height: 45,
    padding: "0px 0px 0px 16px",
    "@media (max-width: 1025px)": {
      height: 40,
      borderRadius: 100,
    },
    "& input": {
      background: "none",
      border: "none",
      padding: 5,
      width: "calc(100% - 120px - 16px)",
      outline: "none",
    },
    "& input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active": {
      boxShadow: `0 0 0 30px ${theme.palette.background.secondary} inset !important`,
    },
    "& input[type=text]": {
      fontSize: "14px !important",
      fontWeight: "Inter !important",
    },
    "& button": {
      width: 120,
      height: 45,
      border: "none",
      background: theme.palette.color.accent,
      color: "white",
      cursor: "pointer",
      borderRadius: "0px 12px 12px 0px",
      "@media (max-width: 1025px)": {
        width: 100,
        height: 40,
        borderRadius: "0px 100px 100px 0px",
      },
      fontSize: "14px !important",
      fontWeight: "Inter !important",
    },
  },
  img: {
    width: 16,
    height: "auto",
    display: "block",
    marginRight: 5,
    "@media (max-width: 1025px)": {
      width: 24,
      marginRight: 0,
    },
  },
  button: {
    width: 40,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media (min-width: 1025px)": {
      display: "none",
    },
  },
}))

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
              find_name {
                text
              }
              field_example {
                text
              }
            }
          }
        }
      }
    }
  `)

  const [value, setValue] = React.useState(
    data.allPrismicHeader.edges[0].node.data.field_example.text
  )

  function submit(e) {
    e.preventDefault()
    const url = new URL(window.location)
    url.searchParams.set("search", JSON.stringify(value))
    navigate(`/products/${url.search}`)
  }

  return (
    <form onSubmit={submit} className={classes.form}>
      <img
        src={
          data.allPrismicHeader.edges[0].node.data.find_img.localFile.publicURL
        }
        alt={data.allPrismicHeader.edges[0].node.data.find_img.alt ?? "img"}
        className={classes.img}
      />
      <input
        type="text"
        onInput={e => setValue(e.currentTarget.value)}
        placeholder={
          data.allPrismicHeader.edges[0].node.data.field_example.text
        }
        name="search"
      />
      <button type="submit">
        {data.allPrismicHeader.edges[0].node.data.find_name.text}
      </button>
    </form>
  )
}
