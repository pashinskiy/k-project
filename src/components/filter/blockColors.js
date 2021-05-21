import React from "react"
import { Button, Grid, makeStyles } from "@material-ui/core"
import palette from "../../templates/colors.json"

import Wrapper from "./wrapper"

const useStyles = makeStyles(theme => ({
  wrapper: {
    marginTop: "1px",
  },
  item: {
    minWidth: 0,
    minHeight: 0,
    padding: 0,
    borderRadius: "100%",

    width: "2.18vw",
    height: "2.18vw",
    margin: "0.3vw 0.78vw 0.93vw 0",
    "&:nth-child(6n)": {
      marginRight: 0,
    },

    "@media(min-width: 1280px)": {
      width: "28px",
      height: "28px",
      margin: "4px 10px 12px 0",
    },
    "@media(max-width: 834px)": {
      width: "3.35vw",
      height: "3.35vw",
      margin: "0.46vw 1.19vw 1.43vw 0",
      "&:nth-child(6n)": {
        marginRight: "1.19vw",
      },
      "&:nth-child(8n)": {
        marginRight: 0,
      },
    },
    "@media(max-width: 414px)": {
      width: "6.76vw",
      height: "6.76vw",
      margin: "0.96vw 2.41vw 2.89vw 0",
      "&:nth-child(6n)": {
        marginRight: "2.41vw",
      },
    },
  },
  active: {
    boxShadow: `0px 0px 0px 0.15vw ${theme.palette.background.secondary}, 0px 0px 0px 0.3vw ${theme.palette.background.accentSecondary}`,
    "@media(min-width: 1280px)": {
      boxShadow: `0px 0px 0px 2px ${theme.palette.background.secondary}, 0px 0px 0px 4px ${theme.palette.background.accentSecondary}`,
    },
    "@media(max-width: 834px)": {
      boxShadow: `0px 0px 0px 0.23vw ${theme.palette.background.secondary}, 0px 0px 0px 0.46vw ${theme.palette.background.accentSecondary}`,
    },
    "@media(max-width: 414px)": {
      boxShadow: `0px 0px 0px 0.48vw ${theme.palette.background.secondary}, 0px 0px 0px 0.96vw ${theme.palette.background.accentSecondary}`,
    },
  },
}))

palette = Object.fromEntries(
  Object.entries(palette).map(color => {
    return [color[0].replace("ё", "е").toLowerCase(), color[1]]
  })
)

export default function BlockColors({
  title,
  allColors,
  colors,
  setColors,
  ...other
}) {
  const classes = useStyles()

  function change(color) {
    const index = colors.indexOf(color)
    if (index !== -1) colors.splice(index, 1)
    else colors.push(color)
    setColors(colors)
  }

  return allColors.length ? (
    <Wrapper title={title} {...other}>
      <Grid container className={classes.wrapper}>
        {allColors.map(color => (
          <Button
            key={color ?? "цвет"}
            onClick={() => change(color)}
            className={
              classes.item +
              " " +
              (colors.includes(color) ? classes.active : "")
            }
            style={{
              background: palette[color] ?? palette["чёрный"],
            }}
            aria-label={color}
          ></Button>
        ))}
      </Grid>
    </Wrapper>
  ) : null
}
