import React from "react"
import { Grid, makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  wrapper: {
    order: props => (props.order ? props.order : 0),
    width: "46.87vw",
    "@media(min-width: 1280px)": {
      width: "600px",
    },
    "@media(max-width: 1025px)": {
      width: "71.94vw",
    },
    "@media(max-width: 414px)": {
      width: "100%",
    },
  },
  accentText: {
    fontWeight: 700,
    fontSize: "2.81vw",
    marginTop: "2.18vw",
    "@media(min-width: 1280px)": {
      fontSize: "36px",
      marginTop: "28px",
    },
    "@media(max-width: 1025px)": {
      fontSize: "4.31vw",
      marginTop: "3.35vw",
    },
    "@media(max-width: 414px)": {
      fontSize: "8.69vw",
      marginTop: "6.76vw",
    },
  },
  boldText: {
    color: theme.palette.color.main,
    fontWeight: 700,
    fontSize: "1.56vw",
    marginTop: "2.18vw",
    "@media(min-width: 1280px)": {
      fontSize: "20px",
      marginTop: "28px",
    },
    "@media(max-width: 1025px)": {
      fontSize: "2.39vw",
      marginTop: "3.35vw",
    },
    "@media(max-width: 414px)": {
      fontSize: "4.83vw",
      marginTop: "6.76vw",
    },
  },
  normalText: {
    color: theme.palette.color.secondary,
    fontWeight: 400,
    fontSize: "1.32vw",
    marginTop: "2.18vw",
    "@media(min-width: 1280px)": {
      fontSize: "17px",
      marginTop: "28px",
    },
    "@media(max-width: 1025px)": {
      fontSize: "2.03vw",
      marginTop: "3.35vw",
    },
    "@media(max-width: 414px)": {
      fontSize: "4.1vw",
      marginTop: "6.76vw",
    },
  },
  smallText: {
    color: theme.palette.color.secondary,
    fontWeight: 400,
    fontSize: "0.93vw",
    marginTop: "2.18vw",
    "@media(min-width: 1280px)": {
      fontSize: "12px",
      marginTop: "28px",
    },
    "@media(max-width: 1025px)": {
      fontSize: "1.43vw",
      marginTop: "3.35vw",
    },
    "@media(max-width: 414px)": {
      fontSize: "2.89vw",
      marginTop: "6.76vw",
    },
  },
}))

export default function OnlyText({ slice, ...other }) {
  const accent_text = slice.primary.accent_text ?? false
  const bold_text = slice.primary.bold_text ?? false
  const normal_text = slice.primary.normal_text ?? false
  const small_text = slice.primary.small_text ?? false

  const order = slice.primary.order ?? false

  const classes = useStyles({ order: order })

  return (
    <Grid {...other} className={classes.wrapper}>
      <Typography
        variant="body2"
        align="center"
        hidden={!accent_text}
        className={classes.accentText}
      >
        {accent_text}
      </Typography>
      <Typography
        align="center"
        hidden={!bold_text}
        className={classes.boldText}
      >
        {bold_text}
      </Typography>
      <Typography
        align="center"
        hidden={!normal_text}
        className={classes.normalText}
      >
        {normal_text}
      </Typography>
      <Typography
        align="center"
        hidden={!small_text}
        className={classes.smallText}
      >
        {small_text}
      </Typography>
    </Grid>
  )
}
