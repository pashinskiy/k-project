import React from "react"
import { makeStyles, Typography, Grid, Button } from "@material-ui/core"
import { GatsbyImage } from "gatsby-plugin-image"

import Info from "../../../../static/svg/info.svg"

const useStyles = makeStyles(theme => ({
  leftBlock: {
    width: "68.91%",
    "@media(max-width: 1025px)": {
      width: "100%",
    },
  },
  rightBlock: {
    background: theme.palette.background.secondary,
    width: "28.54%",

    padding: "3.12vw 1.56vw",
    borderRadius: "2.81vw 0 0 2.81vw",
    overflow: "hidden",
    WebkitBackfaceVisibility: "hidden",
    MozBackfaceVisibility: "hidden",
    WebkitTransform: "translate3d(0, 0, 0)",
    MozTransform: "translate3d(0, 0, 0)",
    "@media(min-width: 1280px)": {
      padding: "40px 20px",
      borderRadius: "20px 0 0 20px",
    },
    "@media(max-width: 1025px)": {
      display: "none",
    },
  },
  mainTitle: {
    fontWeight: 700,
    lineHeight: 1.21,

    marginLeft: "4.06vw",
    fontSize: "2.81vw",
    "@media(min-width: 1280px)": {
      marginLeft: "52px",
      fontSize: "36px",
    },
    "@media(max-width: 1025px)": {
      marginLeft: "6.23vw",
      fontSize: "4.31vw",
    },
    "@media(max-width: 767px)": {
      marginLeft: 0,
      fontSize: "6.76vw",

      marginTop: "9.66vw",
    },
  },
  questionsWrapper: {
    borderLeft: `1px solid ${theme.palette.color.accentSecondary}`,

    marginTop: "2.18vw",
    marginLeft: "1.87vw",
    paddingLeft: "2.18vw",
    "@media(min-width: 1280px)": {
      marginTop: "28px",
      marginLeft: "24px",
      paddingLeft: "28px",
    },
    "@media(max-width: 1025px)": {
      marginTop: "3.35vw",
      marginLeft: "2.87vw",
      paddingLeft: "3.35vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "6.76vw",
      marginLeft: 0,
      paddingLeft: 0,

      borderLeft: "none",
    },
  },
  questionTitle: {
    position: "relative",

    fontWeight: 700,
    lineHeight: 1.21,

    marginTop: "2.18vw",
    fontSize: "1.87vw",
    "@media(min-width: 1280px)": {
      marginTop: "28px",
      fontSize: "24px",
    },
    "@media(max-width: 1025px)": {
      marginTop: "3.35vw",
      fontSize: "2.87vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "6.76vw",
      fontSize: "5.79vw",
    },

    "&:first-child": {
      marginTop: 0,
    },

    "&:before": {
      content: '""',
      display: "block",
      background: theme.palette.background.main,
      borderRadius: "100%",
      position: "absolute",

      width: "1.87vw",
      height: "1.87vw",
      top: "0.23vw",
      left: "-3.12vw",
      border: `0.23vw solid ${theme.palette.color.accentSecondary}`,
      boxShadow: `0 0 0 0.93vw ${theme.palette.background.main}`,
      "@media(min-width: 1280px)": {
        width: "24px",
        height: "24px",
        top: "3px",
        left: "-40px",
        borderWidth: "3px",
        boxShadow: `0 0 0 12px ${theme.palette.background.main}`,
      },
      "@media(max-width: 1025px)": {
        width: "2.87vw",
        height: "2.87vw",
        top: "0.35vw",
        left: "-4.79vw",
        borderWidth: "0.35vw",
        boxShadow: `0 0 0 1.43vw ${theme.palette.background.main}`,
      },
      "@media(max-width: 767px)": {
        display: "none",
      },
    },
  },
  slicesWrapper: {
    marginTop: "1.87vw",
    "@media(min-width: 1280px)": {
      marginTop: "24px",
    },
    "@media(max-width: 1025px)": {
      marginTop: "2.87vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "5.79vw",
    },
  },
  slice: {
    fontWeight: 400,
    lineHeight: 1.21,
    color: theme.palette.color.secondary,

    marginBottom: "1.25vw",
    fontSize: "1.09vw",
    "@media(min-width: 1280px)": {
      marginBottom: "16px",
      fontSize: "14px",
    },
    "@media(max-width: 1025px)": {
      marginBottom: "1.91vw",
      fontSize: "1.67vw",
    },
    "@media(max-width: 767px)": {
      marginBottom: "3.86vw",
      fontSize: "3.38vw",
    },

    "&:last-child": {
      marginBottom: 0,
    },

    "& a": {
      color: theme.palette.color.accentSecondary,
      textDecoration: "none",
      borderBottom: `1px solid ${theme.palette.color.accentSecondary}`,
    },

    "& h1,h2,h3,h4,h5,h6": {
      fontWeight: 700,
      color: theme.palette.color.main,
      marginTop: 0,
    },
    "& h1": {
      fontSize: "1.21em",
    },
    "& h2": {
      fontSize: "1.15em",
    },
    "& h3": {
      fontSize: "1.10em",
    },
    "& h4": {
      fontSize: "1em",
    },
    "& h5": {
      fontSize: "0.8em",
    },
    "& h6": {
      fontSize: "0.5em",
    },

    "& ul": {
      marginBottom: 0,

      marginTop: "1.56vw",
      paddingLeft: "1.56vw",
      "@media(min-width: 1280px)": {
        marginBottom: "20px",
        paddingLeft: "20px",
      },
      "@media(max-width: 1025px)": {
        marginBottom: "2.39vw",
        paddingLeft: "2.39vw",
      },
      "@media(max-width: 767px)": {
        marginBottom: "4.83vw",
        paddingLeft: "4.83vw",
      },
    },
  },
  sliceImage: {
    background: theme.palette.background.secondary,

    height: "19.29vw",
    borderRadius: "0.93vw",
    overflow: "hidden",
    WebkitBackfaceVisibility: "hidden",
    MozBackfaceVisibility: "hidden",
    WebkitTransform: "translate3d(0, 0, 0)",
    MozTransform: "translate3d(0, 0, 0)",
    "@media(min-width: 1280px)": {
      height: "247px",
      borderRadius: "12px",
    },
    "@media(max-width: 1025px)": {
      height: "23.86vw",
      borderRadius: "0.71vw",
    },
    "@media(max-width: 767px)": {
      height: "38.88vw",
      borderRadius: "1.44vw",
    },
  },
  sliceInfoWrapper: {
    background: theme.palette.background.secondary,

    padding: "0.93vw",
    borderRadius: "0.78vw",
    "@media(min-width: 1280px)": {
      padding: "12px",
      borderRadius: "10px",
    },
    "@media(max-width: 1025px)": {
      padding: "1.43vw",
      borderRadius: "1.19vw",
    },
    "@media(max-width: 767px)": {
      padding: "2.89vw",
      borderRadius: "2.41vw",
    },
  },
  sliceInfoIcon: {
    width: "1.87vw",
    height: "1.87vw",
    marginRight: "0.78vw",
    "@media(min-width: 1280px)": {
      width: "24px",
      height: "24px",
      marginRight: "10px",
    },
    "@media(max-width: 1025px)": {
      width: "2.87vw",
      height: "2.87vw",
      marginRight: "1.19vw",
    },
    "@media(max-width: 767px)": {
      width: "5.79vw",
      height: "5.79vw",
      marginRight: "2.41vw",
    },
  },
  sliceInfoText: {
    color: theme.palette.color.main,

    width: "42.2vw",
    "@media(min-width: 1280px)": {
      width: "550px",
    },
    "@media(max-width: 1025px)": {
      width: "47.56vw",
    },
    "@media(max-width: 767px)": {
      width: "72.42vw",
    },
  },
  anchorText: {
    display: "flex",
    justifyContent: "flex-start",
    padding: 0,

    marginTop: "1.56vw",
    "@media(min-width: 1280px)": {
      marginTop: "20px",
    },

    "&:first-child": {
      marginTop: 0,
    },

    "& span": {
      textAlign: "left",
      ...theme.typography.body2,

      fontSize: "1.32vw",
      "@media(min-width: 1280px)": {
        fontSize: "17px",
      },
    },
  },
}))

/**
 * Компонент отображения подгруппы вопросов на странице технической поддержки
 * @module components/faqPage/subgroup
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.subgroup - объект подгруппы вопросов полученый из prismic
 */
export default function Subgroup({ subgroup }) {
  const classes = useStyles()

  const questions = subgroup.items
    .filter(item => item.question.document !== null)
    .map(item => item.question.document)

  function scrollAnchor(id) {
    window.scrollTo({
      behavior: "smooth",
      left: 0,
      top: document.querySelector(`#${id}`).offsetTop,
    })
  }

  return (
    <Grid container justify="space-between" alignItems="flex-start">
      <div className={classes.leftBlock}>
        <Typography className={classes.mainTitle}>
          {subgroup.primary.subgroup_name}
        </Typography>

        <div className={classes.questionsWrapper}>
          {questions.map((question, i) => (
            <>
              <Typography
                id={`qustion_${i + 1}`}
                className={classes.questionTitle}
              >
                {question.data.question}
              </Typography>

              <Grid
                container
                direction="column"
                className={classes.slicesWrapper}
              >
                {question.data.body.map(slice => {
                  switch (slice.slice_type) {
                    case "text":
                      return (
                        <div
                          className={classes.slice}
                          dangerouslySetInnerHTML={{
                            __html: slice.primary.text.text,
                          }}
                          style={{ order: slice.primary.order }}
                        />
                      )
                    case "image":
                      const image =
                        slice.primary.image.localFile?.childImageSharp
                          ?.gatsbyImageData
                      const alt = slice.primary.image.alt ?? "image"

                      return image ? (
                        <GatsbyImage loading="eager"
                          image={image}
                          alt={alt ?? "img"}
                          className={classes.slice + " " + classes.sliceImage}
                          style={{ order: slice.primary.order }}
                        />
                      ) : null
                    case "info":
                      return (
                        <Grid
                          container
                          alignItems="center"
                          className={
                            classes.slice + " " + classes.sliceInfoWrapper
                          }
                          style={{ order: slice.primary.order }}
                        >
                          <div className={classes.sliceInfoIcon}>
                            <Info />
                          </div>

                          <div
                            className={classes.sliceInfoText}
                            dangerouslySetInnerHTML={{
                              __html: slice.primary.text.text,
                            }}
                          />
                        </Grid>
                      )
                    default:
                      return null
                  }
                })}
              </Grid>
            </>
          ))}
        </div>
      </div>

      {questions.length ? (
        <Grid container direction="column" className={classes.rightBlock}>
          {questions.map((question, i) => (
            <Button
              onClick={() => {
                scrollAnchor(`qustion_${i + 1}`)
              }}
              className={classes.anchorText}
            >
              {question.data.question}
            </Button>
          ))}
        </Grid>
      ) : null}
    </Grid>
  )
}
