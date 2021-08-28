import React from "react"
import { makeStyles, Grid, Button, Typography } from "@material-ui/core"

import { FaqStateContext, FaqDispatchContext } from "../context"

const useStyles = makeStyles(theme => ({
  wrapper: {
    paddingLeft: "4.06vw",
    "@media(min-width: 1280px)": {
      paddingLeft: "52px",
    },
    "@media(max-width: 1025px)": {
      paddingLeft: "6.23vw",
    },
    "@media(max-width: 767px)": {
      paddingLeft: 0,
      
      marginTop: "9.66vw",
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
 * Панель результатов поиска страницы технической поддержки
 * @module src/components/faqPage/searchPanel
 */
export default function SearchPanel() {
  const classes = useStyles()

  const faqState = React.useContext(FaqStateContext)
  const faqDispatch = React.useContext(FaqDispatchContext)

  function setSubgroupId(slice) {
    faqDispatch({ type: "SET_COMPONENT", payload: slice })
  }

  // отбираем слайсы подгрупп и фильтруем по поиску
  const subgroups = faqState.groupsQuestions
    .map(group =>
      group.data.body.filter(slice => slice.slice_type === "question_subgroup")
    )
    .flat()
    .filter(subgroup => {
      return subgroup.primary.subgroup_name
        .toLowerCase()
        .includes(faqState.search.toLowerCase())
    })

  // сортируем подгруппы по алфавиту
  subgroups.sort((subgroup1, subgroup2) => {
    const a = subgroup1.primary.subgroup_name
    const b = subgroup2.primary.subgroup_name
    if (a > b) return 1
    if (a < b) return -1
    return 0
  })

  return (
    <Grid container direction="column" className={classes.wrapper}>
      {subgroups.length ? (
        subgroups.map(subgroup => (
          <Button
            onClick={() => {
              setSubgroupId(subgroup)
            }}
            key={subgroup.id}
            className={classes.subgroupName}
          >
            {subgroup.primary.subgroup_name}
          </Button>
        ))
      ) : (
        <Typography>ничего не найдено</Typography>
      )}
    </Grid>
  )
}
