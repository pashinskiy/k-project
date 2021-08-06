import React from "react"
import {
  makeStyles,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
} from "@material-ui/core"

import { FaqStateContext, FaqDispatchContext } from "../context"

import Arrow from "../../../../static/svg/arrow.svg"

const useStyles = makeStyles(theme => ({
  mainWrapper: {
    display: "flex",
    justifyContent: "flex-start",

    padding: "0.78vw",
    borderRadius: "0.62vw",
    "@media(min-width: 1280px)": {
      padding: "10px",
      borderRadius: "8px",
    },
    "@media(max-width: 1025px)": {
      padding: "1.19vw",
      borderRadius: "0.95vw",
    },
    "@media(max-width: 767px)": {
      padding: "2.41vw",
      borderRadius: "1.93vw",
    },
  },
  mainWrapperActive: {
    background: theme.palette.background.secondary,
  },
  panelWrapper: {
    background: "transparent",
    boxShadow: "none",
    margin: "0 !important",

    "&:before": {
      display: "none",
    },
  },
  group: {
    minHeight: "0 !important",

    marginLeft: "0.31vw",
    padding: "0.78vw",
    borderRadius: "0.62vw",
    "@media(min-width: 1280px)": {
      marginLeft: "4px",
      padding: "10px",
      borderRadius: "8px",
    },
    "@media(max-width: 1025px)": {
      marginLeft: "0.47vw",
      padding: "1.19vw",
      borderRadius: "0.95vw",
    },
    "@media(max-width: 767px)": {
      marginLeft: "0.96vw",
      padding: "2.41vw",
      borderRadius: "1.93vw",
    },

    "& div": {
      margin: "0 !important",
      padding: "0 !important",
    },

    "& .MuiAccordionSummary-expandIcon.Mui-expanded": {
      transform: "rotate(270deg)",
    },
  },
  groupActive: {
    background: theme.palette.background.secondary,
  },
  subgroups: {
    padding: "0.62vw 0 0.78vw 2.18vw",
    "@media(min-width: 1280px)": {
      padding: "8px 0 10px 28px",
    },
    "@media(max-width: 1025px)": {
      padding: "0.95vw 0 1.19vw 3.35vw",
    },
    "@media(max-width: 767px)": {
      padding: "1.93vw 0 2.41vw 6.76vw",
    },
  },
  iconWrapper: {
    display: "flex",

    width: "1.25vw",
    height: "1.25vw",
    "@media(min-width: 1280px)": {
      width: "16px",
      height: "16px",
    },
    "@media(max-width: 1025px)": {
      width: "1.91vw",
      height: "1.91vw",
    },
    "@media(max-width: 767px)": {
      width: "3.86vw",
      height: "3.86vw",
    },

    "& path": {
      fill: theme.palette.color.secondaryLight,
    },
  },
  groupName: {
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
  subgroupName: {
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

    "&:first-child": {
      marginTop: 0,
    },

    "& span": {
      textAlign: "left",

      fontSize: "0.93vw",
      "@media(min-width: 1280px)": {
        fontSize: "12px",
      },
      "@media(max-width: 1025px)": {
        fontSize: "1.43vw",
      },
      "@media(max-width: 767px)": {
        fontSize: "2.89vw",
      },
    },
  },
  subgroupActive: {
    ...theme.typography.body2,
    fontWeight: 700,
    lineHeight: 1.21,
  },
}))

export default function Menu() {
  const classes = useStyles()

  const faqState = React.useContext(FaqStateContext)
  const faqDispatch = React.useContext(FaqDispatchContext)

  const [active, setActive] = React.useState("main")

  const icon = (
    <div className={classes.iconWrapper}>
      <Arrow />
    </div>
  )

  function setSubgroupId(slice) {
    faqDispatch({ type: "SET_COMPONENT", payload: slice })
  }

  function setMain() {
    faqDispatch({ type: "SET_COMPONENT", payload: "main" })
    setActive("main")
  }

  const mainActive = active === "main" ? classes.mainWrapperActive : ""

  return (
    <Grid container direction="column" className={classes.wrapper}>
      <Button
        onClick={setMain}
        className={classes.mainWrapper + " " + mainActive}
      >
        <Typography className={classes.groupName}>Главная</Typography>
      </Button>

      {faqState.groupsQuestions.map(group => {
        const groupActive = active === group.id ? classes.groupActive : ""

        return (
          <Accordion
            key={group.id}
            style={{ order: group.data.order }}
            className={classes.panelWrapper}
          >
            <AccordionSummary
              expandIcon={icon}
              IconButtonProps={{ disableRipple: true }}
              onClick={() => setActive(group.id)}
              className={classes.group + " " + groupActive}
            >
              <Typography className={classes.groupName}>
                {group.data.group_name}
              </Typography>
            </AccordionSummary>

            <AccordionDetails className={classes.subgroups}>
              <Grid container direction="column">
                {group.data.body
                  .filter(slice => slice.slice_type === "question_subgroup")
                  .map(slice => {
                    const subgroupActive =
                      faqState.component.id === slice.id
                        ? classes.subgroupActive
                        : ""

                    return (
                      <Button
                        onClick={() => setSubgroupId(slice)}
                        key={slice.id}
                        className={classes.subgroupName + " " + subgroupActive}
                      >
                        {slice.primary.subgroup_name}
                      </Button>
                    )
                  })}
              </Grid>
            </AccordionDetails>
          </Accordion>
        )
      })}
    </Grid>
  )
}
