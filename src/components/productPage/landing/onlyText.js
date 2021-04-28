import React from "react"
import { Grid, makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  wrapper: {
    order: props => (props.order ? props.order : 0),
    width: "46.87vw",
    marginTop: "2.18vw",
    "@media(min-width: 1280px)": {
      width: "600px",
      marginTop: "28px",
    },
    "@media(max-width: 834px)": {
      width: "7.19vw",
      marginTop: "3.35vw",
    },
    "@media(max-width: 414px)": {
      width: "100%",
      marginTop: "6.76vw",
    },
  },
  accentText: {
    color: props => (props.color ? props.color : "#681DE1"),
    background: props =>
      props.color
        ? props.color
        : "linear-gradient(180deg, #291AD5 0%, #681DE1 100%)",
    "-webkit-background-clip": () => "text",
    "-webkit-text-fill-color": "transparent",

    fontWeight: 700,
    fontSize: "2.81vw",
    marginTop: "2.18vw",
    "@media(min-width: 1280px)": {
      fontSize: "36px",
      marginTop: "28px",
    },
    "@media(max-width: 834px)": {
      fontSize: "4.31vw",
      marginTop: "3.35vw",
    },
    "@media(max-width: 414px)": {
      fontSize: "8.69vw",
      marginTop: "6.76vw",
    },
  },
  accentText: {
    color: props => (props.color ? props.color : "#681DE1"),

    fontWeight: 700,
    fontSize: "2.81vw",
    marginTop: "2.18vw",
    "@media(min-width: 1280px)": {
      fontSize: "36px",
      marginTop: "28px",
    },
    "@media(max-width: 834px)": {
      fontSize: "4.31vw",
      marginTop: "3.35vw",
    },
    "@media(max-width: 414px)": {
      fontSize: "8.69vw",
      marginTop: "6.76vw",
    },
  },
}))

export default function OnlyText({ slice }) {
  const accent_text = slice.primary.accent_text ?? false
  const accent_color = slice.primary.accent_color ?? false
  const bold_text = slice.primary.bold_text ?? false
  const normal_text = slice.primary.normal_text ?? false
  const small_text = slice.primary.small_text ?? false
  const order = slice.primary.order ?? false

  const classes = useStyles({ color: accent_color, order: order })

  return (
    <Grid className={classes.wrapper}>
      <Typography
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
