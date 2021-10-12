import React from "react"
import { makeStyles, Grid, Typography, Button } from "@material-ui/core"

import Arrow from "../../../../../static/svg/arrow.svg"

const useStyle = makeStyles(theme => ({
  wrapper: {
    position: "relative",

    marginTop: "1.09vw",
    "@media(min-width: 1280px)": {
      marginTop: 14,
    },
    "@media(max-width: 1025px)": {
      marginTop: "1.67vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "3.38vw",
    },
  },
  select: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    width: "100%",
    background: theme.palette.background.main,
    border: `1px solid ${theme.palette.color.secondaryLight}`,

    padding: "0.85vw 0.93vw",
    borderRadius: "0.46vw",
    "@media(min-width: 1280px)": {
      padding: "11px 12px",
      borderRadius: "6px",
    },
    "@media(max-width: 1025px)": {
      padding: "1.31vw 1.43vw",
      borderRadius: "0.71vw",
    },
    "@media(max-width: 767px)": {
      padding: "2.65vw 2.89vw",
      borderRadius: "1.44vw",
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
  icon: {
    display: "flex",
    position: "relative",
    transform: "rotate(90deg)",
    transition: "transform .3s",

    height: "1.4vw",
    width: "1.64vw",
    "@media(min-width: 1280px)": {
      height: "18px",
      width: "21px",
    },
    "@media(max-width: 1025px)": {
      height: "2.15vw",
      width: "2.51vw",
    },
    "@media(max-width: 767px)": {
      height: "4.34vw",
      width: "5.07vw",
    },

    "& path": {
      fill: theme.palette.color.secondaryLight,
    },
  },
  options: {
    background: theme.palette.background.main,
    border: `1px solid ${theme.palette.color.secondaryLight}`,
    position: "absolute",
    top: "110%",
    left: 0,
    width: "100%",
    zIndex: 2,

    padding: "1.17vw 0.93vw",
    borderRadius: "0.46vw",
    "@media(min-width: 1280px)": {
      padding: "15px 12px",
      borderRadius: "6px",
    },
    "@media(max-width: 1025px)": {
      padding: "1.79vw 1.43vw",
    },
    "@media(max-width: 767px)": {
      padding: "3.62vw 2.89vw",
    },
  },
  option: {
    padding: "0.39vw 0",
    "@media(min-width: 1280px)": {
      padding: "5px 0",
    },
    "@media(max-width: 1025px)": {
      padding: "0.59vw 0",
    },
    "@media(max-width: 767px)": {
      padding: "1.2vw 0",
    },

    "& span": {
      width: "100%",
      display: "block",
      textAlign: "left",
    },

    "&:hover": {
      color: theme.palette.color.accentSecondary,
    },
  },
  rotate180: {
    transform: "rotate(270deg)",
  },
}))

/**
 * Блок выбора категории из выпадающего списка
 * @module src/components/repairPage/selectCategory
 * @param {Object} props - объект свойств компонента React
 * @param {Object[]} props.options - массив всех значений
 * @param {function} props.afterChange - функция установки нового значения
 */
export default function SelectCategory({ options, selectOption, afterChange }) {
  const classes = useStyle()
  const [showOptions, setShowOptions] = React.useState(false)

  const rotate = showOptions ? classes.rotate180 : ""

  function toggleShowOptions() {
    setShowOptions(!showOptions)
  }

  function setGlobalValue(value) {
    toggleShowOptions()
    afterChange(value)
  }

  return (
    <div className={classes.wrapper}>
      <Button
        onClick={toggleShowOptions}
        onBlur={() => setShowOptions(false)}
        className={classes.select}
      >
        <Typography className={classes.text}>{selectOption}</Typography>

        <div className={classes.icon + " " + rotate}>
          <Arrow />
        </div>
      </Button>

      {showOptions ? (
        <Grid container direction="column" className={classes.options}>
          {options.map(option => (
            <Button
              onPointerDown={() => setGlobalValue(option)}
              key={option}
              className={classes.option + " " + classes.text}
            >
              {option}
            </Button>
          ))}
        </Grid>
      ) : null}
    </div>
  )
}
