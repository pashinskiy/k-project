import React from "react"
import { makeStyles, Grid, Typography } from "@material-ui/core"
import Layout from '../components/layout'

import Seo from "../components/seo"
import FaqContext from "../components/faqPage/context"
import Search from "../components/faqPage/search"
import Menu from "../components/faqPage/menu"
import ShowComponent from "../components/faqPage/showComponent"

const useStyle = makeStyles(theme => ({
  wrapper: {
    marginTop: "2.18vw",
    "@media(min-width: 1280px)": {
      marginTop: "28px",
    },
    "@media(max-width: 1025px)": {
      marginTop: "3.35vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "3.86vw",
    },
  },
  menuWrapper: {
    alignSelf: "stretch",

    width: "20.46vw",
    paddingRight: "0.93vw",
    borderRight: `1px solid ${theme.palette.color.secondaryLight}`,
    "@media(min-width: 1280px)": {
      width: "262px",
      paddingRight: "12px",
    },
    "@media(max-width: 1025px)": {
      width: "31.41vw",
      paddingRight: "1.43vw",
    },
    "@media(max-width: 767px)": {
      width: "100%",
      paddingRight: 0,
      borderRight: "none",
      borderBottom: `1px solid ${theme.palette.color.secondaryLight}`,
    },

    "& > *:nth-child(2)": {
      marginBottom: "2.18vw",
      "@media(min-width: 1280px)": {
        marginBottom: "28px",
      },
      "@media(max-width: 1025px)": {
        marginBottom: "3.35vw",
      },
      "@media(max-width: 767px)": {
        marginBottom: "6.76vw",
      },
    },
  },
  menuTitle: {
    fontWeight: 700,
    lineHeight: 1.21,

    marginBottom: "1.25vw",
    fontSize: "1.32vw",
    "@media(min-width: 1280px)": {
      marginBottom: "16px",
      fontSize: "17px",
    },
    "@media(max-width: 1025px)": {
      marginBottom: "1.91vw",
      fontSize: "2.03vw",
    },
    "@media(max-width: 767px)": {
      marginBottom: "3.86vw",
      fontSize: "6.76vw",
    },
  },
  componentWrapper: {
    width: "75.15vw",
    "@media(min-width: 1280px)": {
      width: "962px",
    },
    "@media(max-width: 1025px)": {
      width: "61.51vw",
    },
    "@media(max-width: 767px)": {
      width: "100%",
    },
  },
}))

const IndexPage = () => {
  const classes = useStyle()

  return (
    <Layout>
      <Seo title="FAQ" />

      <FaqContext>
        <Grid container justify="space-between" className={classes.wrapper}>
          <div className={classes.menuWrapper}>
            <Typography className={classes.menuTitle}>FAQ</Typography>
            <Search />
            <Menu />
          </div>

          <div className={classes.componentWrapper}>
            <ShowComponent />
          </div>
        </Grid>
      </FaqContext>
    </Layout>
  )
}

/**
 * Страница техподдержки
 * @module src/page/faq
 */
export default IndexPage
