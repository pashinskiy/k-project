import React from "react"
import { makeStyles, Grid, Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  numberText: {
    fontWeight: 700,
    lineHeight: 1.21,

    marginRight: "0.46vw",
    fontSize: "1.4vw",
    "@media(min-width: 1280px)": {
      marginRight: "6px",
      fontSize: "18px",
    },
    "@media(max-width: 1025px)": {
      marginRight: "0.71vw",
      fontSize: "2.15vw",
    },
    "@media(max-width: 767px)": {
      marginRight: "0.72vw",
      fontSize: "3.86vw",
    },
  },
  icon: {
    height: "3.12vw",
    width: "3.12vw",
    marginRight: "0.93vw",
    "@media(min-width: 1280px)": {
      height: "40px",
      width: "40px",
      marginRight: "12px",
    },
    "@media(max-width: 1025px)": {
      height: "4.79vw",
      width: "4.79vw",
      marginRight: "1.43vw",
    },
    "@media(max-width: 767px)": {
      height: "5.79vw",
      width: "5.79vw",
      marginRight: "1.93vw",
    },
  },
  classTitle: {
    color: theme.palette.color.main,
    fontWeight: 700,
    lineHeight: 1.21,

    fontSize: "1.87vw",
    "@media(min-width: 1280px)": {
      fontSize: "24px",
    },
    "@media(max-width: 1025px)": {
      fontSize: "2.87vw",
    },
    "@media(max-width: 767px)": {
      fontSize: "4.34vw",
    },
  },
}))

export default function OrderingHeaderWithIcon({
  icon,
  number,
  title,
  ...other
}) {
  const classes = useStyles()

  return (
    <Grid container alignItems="center" className={classes.wrapper} {...other}>
      {number !== undefined && number !== null ? (
        <Typography variant="body2" className={classes.numberText}>
          {`${number}.`}
        </Typography>
      ) : null}
      {icon ? <Grid className={classes.icon}>{icon}</Grid> : null}
      <Typography className={classes.classTitle}>{title}</Typography>
    </Grid>
  )
}
