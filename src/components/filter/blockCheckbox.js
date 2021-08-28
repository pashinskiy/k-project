import React from "react"
import { Button, Grid, makeStyles, Typography } from "@material-ui/core"

import Wrapper from "./wrapper"
import Check from "../../../static/svg/check.svg"

const useStyles = makeStyles(theme => ({
  wrapper: {
    overflow: props => (props.show ? "auto" : "hidden"),

    maxHeight: "24.14vw",
    "@media(min-width: 1280px)": {
      maxHeight: "309px",
    },
    "@media(max-width: 1025px)": {
      maxHeight: "37.05vw",
    },
    "@media(max-width: 767px)": {
      maxHeight: "74.63vw",
    },

    scrollbarColor: `${theme.palette.background.accentSecondary} ${theme.palette.background.main}`,
    scrollbarWidth: "thin",

    "-ms-overflow-style": "none",

    "&::-webkit-scrollbar": {
      height: 0,
      backgroundColor: theme.palette.background.main,

      width: "0.78vw",
      borderRadius: "0.93vw",
      "@media(min-width: 1280px)": {
        width: "10px",
        borderRadius: "12px",
      },
      "@media(max-width: 1025px)": {
        width: "1.19vw",
        borderRadius: "1.43vw",
      },
      "@media(max-width: 767px)": {
        width: "2.41vw",
        borderRadius: "2.89vw",
      },
    },

    "&::-webkit-scrollbar-thumb": {
      background: theme.palette.background.accent,

      width: "0.46vw",
      borderRadius: "0.46vw",
      "@media(min-width: 1280px)": {
        width: "6px",
        borderRadius: "6px",
      },
      "@media(max-width: 1025px)": {
        width: "0.71vw",
        borderRadius: "0.71vw",
      },
      "@media(max-width: 767px)": {
        width: "1.44vw",
        borderRadius: "1.44vw",
      },
    },

    "&::-webkit-scrollbar-thumb:hover": {
      cursor: "pointer",
    },
  },
  item: {
    padding: 0,
    display: "flex",
    justifyContent: "flex-start",

    marginBottom: "0.93vw",
    "@media(min-width: 1280px)": {
      marginBottom: "12px",
    },
    "@media(max-width: 1025px)": {
      marginBottom: "1.43vw",
    },
    "@media(max-width: 767px)": {
      marginBottom: "2.89vw",
    },
    "&:last-child": {
      marginBottom: 0,
    },
  },
  check: {
    position: "relative",
    background: theme.palette.background.main,
    flexShrink: 0,
    padding: 0,

    width: "1.25vw",
    height: "1.25vw",
    borderRadius: "0.46vw",
    marginRight: "0.62vw",
    boxShadow: `inset 0 0 0 0.07vw ${theme.palette.background.accentSecondary}`,
    "@media(min-width: 1280px)": {
      width: "16px",
      height: "16px",
      borderRadius: "6px",
      marginRight: "8px",
      boxShadow: `inset 0 0 0 1px ${theme.palette.background.accentSecondary}`,
    },
    "@media(max-width: 1025px)": {
      width: "1.91vw",
      height: "1.91vw",
      borderRadius: "0.71vw",
      marginRight: "0.95vw",
      boxShadow: `inset 0 0 0 0.11vw ${theme.palette.background.accentSecondary}`,
    },
    "@media(max-width: 767px)": {
      width: "3.86vw",
      height: "3.86vw",
      borderRadius: "1.44vw",
      marginRight: "1.93vw",
      boxShadow: `inset 0 0 0 0.24vw ${theme.palette.background.accentSecondary}`,
    },
  },
  active: {
    boxShadow: "none",
    background: theme.palette.background.accent,

    padding: "0.23vw",
    "@media(min-width: 1280px)": {
      padding: "3px",
    },
    "@media(max-width: 1025px)": {
      padding: "0.35vw",
    },
    "@media(max-width: 767px)": {
      padding: "0.72vw",
    },
  },
  text: {
    fontWeight: 400,
    lineHeight: 1.21,

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
  showButton: {
    padding: 0,
    display: "flex",
    justifyContent: "flex-start",

    marginTop: "1.25vw",
    "@media(min-width: 1280px)": {
      marginTop: "16px",
    },
    "@media(max-width: 1025px)": {
      marginTop: "1.91vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "3.86vw",
    },
  },
}))

/**
 * Блок фильтра с множественным выбором
 * @module src/components/filter/blockCheckbox
 * @param {Object} props - объект свойств компонента React
 * @param {String} props.title - название характеристики
 * @param {Object[]} props.set - массив всех возможных вариантов характеристики
 * @param {Object[]} props.selected - массив установленых в фильтр вариантов
 * @param {function} props.setFilter - функция установки массива вариантов в фильтр
 */
export default function BlockCheckbox({
  title,
  set,
  selected,
  setFilter,
  ...other
}) {
  const [show, setShow] = React.useState(false)
  const classes = useStyles({ show })

  function change(value) {
    const index = selected.indexOf(value)
    if (index !== -1) selected.splice(index, 1)
    else selected.push(value)
    setFilter(title, selected)
  }

  const showlist = show ? set : set.slice(0, 6)

  return set.length ? (
    <Wrapper title={title} {...other}>
      <Grid
        container
        direction="column"
        wrap="nowrap"
        className={classes.wrapper}
      >
        {showlist.map(value => (
          <Button
            key={value ?? title}
            onClick={() => change(value)}
            className={classes.item}
            aria-label={value}
          >
            <Grid
              container
              justify="center"
              alignItems="center"
              className={
                classes.check +
                " " +
                (selected?.includes(value) ? classes.active : "")
              }
            >
              {selected?.includes(value) ? <Check /> : null}
            </Grid>
            <Typography align="left" className={classes.text}>
              {value}
            </Typography>
          </Button>
        ))}
      </Grid>
      {set.length > 6 ? (
        <Button onClick={() => setShow(!show)} className={classes.showButton}>
          <Typography variant="body2" className={classes.text}>
            {show ? "Скрыть" : "Показать ещё"}
          </Typography>
        </Button>
      ) : null}
    </Wrapper>
  ) : null
}
