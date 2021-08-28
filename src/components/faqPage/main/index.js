import React from "react"
import { makeStyles, Grid, Typography, Button } from "@material-ui/core"

import { FaqStateContext, FaqDispatchContext } from "../context"

const useStyles = makeStyles(theme => ({
  wrapper: {
    paddingLeft: "3.12vw",
    "@media(min-width: 1280px)": {
      paddingLeft: "40px",
    },
    "@media(max-width: 1025px)": {
      paddingLeft: "4.79vw",
    },
    "@media(max-width: 767px)": {
      paddingLeft: 0,
    },
  },
  mainTitle: {
    fontWeight: 700,
    lineHeight: 1.21,

    fontSize: "2.81vw",
    "@media(min-width: 1280px)": {
      fontSize: "36px",
    },
    "@media(max-width: 1025px)": {
      fontSize: "4.31vw",
    },
    "@media(max-width: 767px)": {
      fontSize: "6.76vw",
      
      marginTop: "9.66vw",
    },
  },
  groupsWrapper: {
    marginLeft: "-3.04vw",
    width: "calc(100% + 3.04vw)",
    "@media(min-width: 1280px)": {
      marginLeft: "-39px",
      width: "calc(100% + 39px)",
    },
    "@media(max-width: 1025px)": {
      marginLeft: "-2.03vw",
      width: "calc(100% + 2.03vw)",
    },
    "@media(max-width: 767px)": {
      marginLeft: 0,
      paddingLeft: "2.41vw",
      width: "100%",
    },
  },
  qroupWrapper: {
    marginLeft: "3.04vw",
    width: "18.67vw",
    "@media(min-width: 1280px)": {
      marginLeft: "39px",
      width: "239px",
    },
    "@media(max-width: 1025px)": {
      marginLeft: "1.79vw",
      width: "27.57vw",
    },
    "@media(max-width: 767px)": {
      marginLeft: 0,
      width: "57.72vw",
    },
  },
  groupTitle: {
    fontWeight: 700,
    lineHeight: 1.21,

    marginTop: "2.18vw",
    fontSize: "1.32vw",
    "@media(min-width: 1280px)": {
      marginTop: "28px",
      fontSize: "17px",
    },
    "@media(max-width: 1025px)": {
      marginTop: "3.35vw",
      fontSize: "2.03vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "6.76vw",
      fontSize: "4.1vw",
    },
  },
  subgroupTitle: {
    display: "flex",
    justifyContent: "flex-start",
    padding: 0,

    fontWeight: 400,
    lineHeight: 1.21,
    color: theme.palette.color.secondary,

    marginTop: "0.93vw",
    "@media(min-width: 1280px)": {
      marginTop: "12px",
    },
    "@media(max-width: 1025px)": {
      marginTop: "1.43vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "2.89vw",
    },

    "&:nth-child(2)": {
      marginTop: "1.56vw",
      "@media(min-width: 1280px)": {
        marginTop: "20px",
      },
      "@media(max-width: 1025px)": {
        marginTop: "2.39vw",
      },
      "@media(max-width: 767px)": {
        marginTop: "4.83vw",
      },
    },

    "& span": {
      textAlign: "left",

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
  },
}))

/**
 * Главный экран страницы технической поддержки
 * @module src/components/faqPage/main
 */
export default function Main() {
  const classes = useStyles()

  const faqState = React.useContext(FaqStateContext)
  const faqDispatch = React.useContext(FaqDispatchContext)

  function setSubgroupId(slice) {
    faqDispatch({ type: "SET_COMPONENT", payload: slice })
  }

  return (
    <div className={classes.wrapper}>
      <Typography className={classes.mainTitle}>Главная</Typography>

      <Grid container className={classes.groupsWrapper}>
        {faqState.groupsQuestions.map(group => (
          <Grid
            container
            direction="column"
            key={group.id}
            style={{ order: group.data.order }}
            className={classes.qroupWrapper}
          >
            <Typography className={classes.groupTitle}>
              {group.data.group_name}
            </Typography>

            {group.data.body
              .filter(slice => slice.slice_type === "question_subgroup")
              .map(slice => (
                <Button
                  onClick={() => {
                    setSubgroupId(slice)
                  }}
                  key={slice.id}
                  className={classes.subgroupTitle}
                >
                  {slice.primary.subgroup_name}
                </Button>
              ))}
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
