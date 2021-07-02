import React from "react"
import { makeStyles, Grid, Button } from "@material-ui/core"

const useStyle = makeStyles(theme => ({
  wrapper: {
    width: "calc(100% + 0.62vw)",
    marginLeft: "-0.62vw",
    marginTop: "-0.62vw",
    "@media(min-width: 1280px)": {
      width: "calc(100% + 8px)",
      marginLeft: "-8px",
      marginTop: "-8px",
    },
    "@media(max-width: 834px)": {
      width: "calc(100% + 0.95vw)",
      marginLeft: "-0.95vw",
      marginTop: "-0.95vw",
    },
    "@media(max-width: 414px)": {
      width: "calc(100% + 1.93vw)",
      marginLeft: "-1.93vw",
      marginTop: "-1.93vw",
    },
  },
  item: {
    background: theme.palette.background.main,
    border: `1px solid transparent`,

    marginLeft: "0.62vw",
    marginTop: "0.62vw",
    padding: "1.17vw 0.93vw",
    borderRadius: "0.46vw",
    "@media(min-width: 1280px)": {
      marginLeft: "8px",
      marginTop: "8px",
      padding: "15px 12px",
      borderRadius: "6px",
    },
    "@media(max-width: 834px)": {
      marginLeft: "0.95vw",
      marginTop: "0.95vw",
      padding: "1.79vw 1.43vw",
      borderRadius: "0.71vw",
    },
    "@media(max-width: 414px)": {
      marginLeft: "1.93vw",
      marginTop: "1.93vw",
      padding: "3.62vw 2.89vw",
      borderRadius: "1.44vw",
    },
  },
  active: {
    background: "#D2D0E9",
    border: `1px solid ${theme.palette.color.accentSecondary}`,
  },
  text: {
    fontWeight: 400,
    lineHeight: 1.21,

    fontSize: "1.09vw",
    "@media(min-width: 1280px)": {
      fontSize: "14px",
    },
    "@media(max-width: 834px)": {
      fontSize: "1.67vw",
    },
    "@media(max-width: 414px)": {
      fontSize: "3.38vw",
    },
  },
}))

export default function RatioList({ list, afterChange }) {
  const classes = useStyle()
  const [value, setValue] = React.useState(list[0])

  function setGlobalValue(value) {
    setValue(value)
    afterChange(value)
  }

  return (
    <Grid container className={classes.wrapper}>
      {list.map(item => {
        const active = item === value ? classes.active : ""
        return (
          <Button
            onClick={() => setGlobalValue(item)}
            key={item}
            className={classes.item + " " + active}
          >
            {item}
          </Button>
        )
      })}
    </Grid>
  )
}
