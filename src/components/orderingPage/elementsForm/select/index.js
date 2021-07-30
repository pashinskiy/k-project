import React from "react"
import { makeStyles, Grid, Typography, Button } from "@material-ui/core"

import Arrow from "../../../../../static/svg/arrow.svg"

const useStyle = makeStyles(theme => ({
  select: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    width: "100%",
    background: theme.palette.background.main,
    border: `1px solid transparent`,

    padding: "1.17vw 0.93vw",
    borderRadius: "0.46vw",
    "@media(min-width: 1280px)": {
      padding: "15px 12px",
      borderRadius: "6px",
    },
    "@media(max-width: 1025px)": {
      padding: "1.79vw 1.43vw",
      borderRadius: "0.71vw",
    },
    "@media(max-width: 414px)": {
      border: `1px solid ${theme.palette.color.accentSecondary}`,
      padding: "3.62vw 2.89vw",
      borderRadius: "1.44vw",
    },
  },
  active: {
    border: `1px solid ${theme.palette.color.accentSecondary}`,
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
    "@media(max-width: 414px)": {
      fontSize: "3.38vw",
    },
  },
  icon: {
    display: "flex",
    position: "relative",
    transform: "rotate(90deg)",
    transition: "transform .3s",

    width: "1.4vw",
    height: "1.64vw",
    "@media(min-width: 1280px)": {
      width: "18px",
      height: "21px",
    },
    "@media(max-width: 1025px)": {
      width: "2.15vw",
      height: "2.51vw",
    },
    "@media(max-width: 414px)": {
      width: "4.34vw",
      height: "5.07vw",
    },

    "& path": {
      fill: theme.palette.color.secondaryLight,
    },
  },
  options: {
    background: theme.palette.background.main,
    boxShadow: `0 0 1px #333`,
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
    "@media(max-width: 414px)": {
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
    "@media(max-width: 414px)": {
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

export default function Select({ options, afterChange }) {
  const classes = useStyle()
  const [showOptions, setShowOptions] = React.useState(false)
  const [value, setValue] = React.useState(options[0])

  const rotate = showOptions ? classes.rotate180 : ""
  const active = showOptions ? classes.active : ""

  function toggleShowOptions() {
    setShowOptions(!showOptions)
  }

  function setGlobalValue(value) {
    toggleShowOptions()
    setValue(value)
    afterChange(value)
  }

  return (
    <div style={{ position: "relative" }}>
      <Button
        onClick={toggleShowOptions}
        className={classes.select + " " + active}
      >
        <Typography className={classes.text}>{value}</Typography>
        <div className={classes.icon + " " + rotate}>
          <Arrow />
        </div>
      </Button>

      {showOptions ? (
        <Grid container direction="column" className={classes.options}>
          {options.map(option => (
            <Button
              onClick={() => setGlobalValue(option)}
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
