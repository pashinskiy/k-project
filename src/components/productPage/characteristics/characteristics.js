import { Grid, Link, makeStyles, Typography } from "@material-ui/core"
import React from "react"
import DocumentIcon from "../../../../static/svg/documentIcon.svg"

const useStyles = makeStyles(theme => ({
  childTitle: {
    display: "block",
    width: "100%",
    fontFamily: "Inter",
    color: theme.palette.color.secondary,
    overflow: "hidden",
    verticalAlign: "bottom",
    "@media(min-width: 1280px)": {
      fontSize: 17,
    },
    "@media(min-width: 1025px)": {
      "&::after": {
        content: "''",
        backgroundColor: "#D6D5DF",
        height: "1px",
        position: "relative",
        verticalAlign: "baseline",
        width: "100%",
        display: "inline-block",
        left: "0.5em",
        marginRight: "-100%",
      },
    },
    "@media(max-width: 834px)": {
      fontSize: "1.67vw",
    },
    "@media(max-width: 414px)": {
      fontSize: "3.38vw",
    },
  },
  attribValue: {
    width: "100%",
    fontFamily: "Inter",
    display: "flex",
    color: theme.palette.color.secondary,
    "@media(min-width: 1280px)": {
      fontSize: 17,
    },
    "@media(max-width: 834px)": {
      fontSize: "1.67vw",
    },
    "@media(max-width: 414px)": {
      fontSize: "3.38vw",
      marginLeft: "1vw",
    },
  },
  wrapper: {
    width: "100%",
  },
  characteristicTitle: {
    fontWeight: 700,
    marginTop: "1.8vw",
    marginBottom: ".3vw",
    fontSize: 17,
    "@media(max-width: 834px)": {
      fontSize: 14,
      marginTop: "4vw",
      marginBottom: ".5vw",
    },
    "@media(max-width: 414px)": {
      marginTop: "10vw",
      marginBottom: "1vw",
    },
  },
  documentContainer: {
    width: "290px",
    margin: "0",
    paddingBottom: "25px",
  },
  documentTitle: {
    fontWeight: 700,
    fontSize: 14,
  },
  documentDescrition: {
    fontSize: 14,
    marginTop: "5px",
  },
  documentLink: {
    fontSize: 12,
    color: theme.palette.color.secondary,
    opacity: ".6",
    textDecoration: "underline",
    position: "absolute",
    bottom: "0px",
  },
  characteristicsContainer: {
    width: "70.31vw",
    "@media(min-width: 1280px)": {
      width: "900px",
    },
    "@media(max-width: 834px)": {
      width: "94.24vw",
      marginBottom: "10vw",
    },
  },
  wrapperChild: {
    width: "38.28vw",
    display: "flex",
    alignItems: "flex-end",
    paddingTop: "1.17vw",
    marginRight: "0.78vw",
    "@media(min-width: 1280px)": {
      width: "480px",
      marginRight: "10px",
      paddingTop: "15px",
    },
    "@media(max-width: 1024px)": {
      alignItems: "normal",
    },
    "@media(max-width: 834px)": {
      width: "38.84vw",
      marginRight: "1.19vw",
      paddingTop: "1.79vw",
    },
    "@media(max-width: 414px)": {
      width: "42.7vw",
      marginRight: "1vw",
      paddingTop: "3.62vw",
    },
  },
  wrapperAttrib: {
    width: "31.25vw",
    display: "flex",
    alignItems: "flex-end",
    paddingTop: "1.17vw",
    "@media(min-width: 1280px)": {
      width: "390px",
      paddingTop: "15px",
    },
    "@media(max-width: 1024px)": {
      alignItems: "normal",
    },
    "@media(max-width: 834px)": {
      width: "38.84vw",
      marginRight: "0px",
      paddingTop: "1.79vw",
    },
    "@media(max-width: 414px)": {
      width: "42.7vw",
      marginRight: "0px",
      paddingTop: "3.62vw",
    },
  },
}))

export default function Characteristics(props) {
  const classes = useStyles()
  const iconData = props.props.documents
  const characteristicTitlesArray = props.props.body1.map(function (
    parentItems
  ) {
    const attribArr = parentItems.items.map(function (childTitles) {
      return (
        <Grid container key={childTitles.characteristic.document.data.name}>
          <Grid item className={classes.wrapperChild}>
            <Typography className={classes.childTitle}>
              {childTitles.characteristic.document.data.name}  
            </Typography>
          </Grid>
          <Grid item className={classes.wrapperAttrib}>
            <Typography className={classes.attribValue}>
              {childTitles.value}
            </Typography>
          </Grid>
        </Grid>
      )
    })
    return (
      <Grid container className={classes.wrapper} key={parentItems.primary.title}>
        <Typography className={classes.characteristicTitle}>
          {parentItems.primary.title}
        </Typography>
        {attribArr}
      </Grid>
    )
  })
  return (
    <>
      <Grid container justify="space-between">
        <Grid item className={classes.characteristicsContainer}>
          {characteristicTitlesArray}
        </Grid>

        <Grid item style={{ paddingTop: "1.8vw" }}>
          {iconData.length
            ? iconData.map(variant => (
                <Grid
                  container
                  spacing={2}
                  key={variant.doc_title.text}
                  className={classes.documentContainer}
                >
                  <Grid item style={{ padding: "0" }}>
                    <DocumentIcon />
                  </Grid>
                  <Grid
                    item
                    style={{
                      padding: "0 0 0 10px",
                      position: "relative",
                      maxHeight: "70px",
                    }}
                  >
                    <Typography className={classes.documentTitle}>
                      {variant.doc_title.text}
                    </Typography>
                    <Typography className={classes.documentDescrition}>
                      {variant.doc_description.text}
                    </Typography>
                    <Link href={variant.file.url} className={classes.documentLink}>
                      Скачать
                    </Link>
                  </Grid>
                </Grid>
              ))
            : null}
        </Grid>
      </Grid>
    </>
  )
}
