import * as React from "react"
import { graphql, Link } from "gatsby"
import { makeStyles, Grid } from "@material-ui/core"

import Seo from "../components/seo"

const useStyles = makeStyles(theme => ({
  wrapper: {
    marginTop: "2.18vw",
    paddingLeft: "1.17vw",
    "@media(max-width: 1280px)": {
      marginTop: "28px",
      paddingLeft: "15px",
    },
    "@media(max-width: 1025px)": {
      marginTop: "3.35vw",
      paddingLeft: "1.79vw",
    },
    "@media(max-width: 414px)": {
      marginTop: "6.76vw",
      paddingLeft: "3.62vw",
    },
  },
  link: {
    color: theme.palette.color.main,
    textDecoration: "none",

    marginTop: "0.78vw",
    fontSize: "1.09vw",
    "@media(max-width: 1280px)": {
      marginTop: "10px",
      fontSize: "14px",
    },
    "@media(max-width: 1025px)": {
      marginTop: "1.19vw",
      fontSize: "1.67vw",
    },
    "@media(max-width: 414px)": {
      marginTop: "2.41vw",
      fontSize: "3.38vw",
    },

    "&:hover": {
      ...theme.typography.body2,

      fontSize: "1.09vw",
      "@media(max-width: 1280px)": {
        fontSize: "14px",
      },
      "@media(max-width: 1025px)": {
        fontSize: "1.67vw",
      },
      "@media(max-width: 414px)": {
        fontSize: "3.38vw",
      },
    },
    "&:before": {
      content: "'-'",
      marginRight: "1em",
    },
    "&:first-child": {
      marginTop: 0,
    },
  },
}))

export default function Documents({ data }) {
  const classes = useStyles()

  const fromFooter = data.prismicDocs.data.from_footer
  const other = data.prismicDocs.data.other

  return (
    <>
      <Seo title="Документы" />

      <Grid container direction="column" className={classes.wrapper}>
        {fromFooter.map(doc => (
          <Link
            to={`/documents/${doc.doc.document.uid}/`}
            key={doc.doc.document.id}
            className={classes.link}
          >
            {doc.doc.document.data.name}
          </Link>
        ))}

        {other.map(doc => (
          <Link
            to={`/documents/${doc.doc.document.uid}/`}
            key={doc.doc.document.id}
            className={classes.link}
          >
            {doc.doc.document.data.name}
          </Link>
        ))}
      </Grid>
    </>
  )
}

export const query = graphql`
  {
    prismicDocs {
      data {
        from_footer {
          doc {
            document {
              ... on PrismicDoc {
                id
                uid
                data {
                  name
                }
              }
            }
          }
        }
        other {
          doc {
            document {
              ... on PrismicDoc {
                id
                uid
                data {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`
