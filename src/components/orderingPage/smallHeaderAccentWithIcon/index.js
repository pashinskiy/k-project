import React from "react"
import { makeStyles, Grid, Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  text: {
    fontWeight: 700,
    lineHeight: 1.21,

    marginRight: "0.46vw",
    fontSize: "1.4vw",
    "@media(min-width: 1280px)": {
      marginRight: "6px",
      fontSize: "18px",
    },
    "@media(max-width: 834px)": {
      marginRight: "0.71vw",
      fontSize: "2.15vw",
    },
    "@media(max-width: 414px)": {
      marginRight: "0.72vw",
      fontSize: "3.86vw",
    },
  },
  icon: {
    height: "1.87vw",
    width: "1.87vw",
    marginRight: "0.78vw",
    "@media(min-width: 1280px)": {
      height: "24px",
      width: "24px",
      marginRight: "10px",
    },
    "@media(max-width: 834px)": {
      height: "2.87vw",
      width: "2.87vw",
      marginRight: "1.19vw",
    },
    "@media(max-width: 414px)": {
      height: "5.79vw",
      width: "5.79vw",
      marginRight: "1.93vw",
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
        <Typography variant="body2" className={classes.text}>
          {`${number}.`}
        </Typography>
      ) : null}
      {icon ? <Grid className={classes.icon}>{icon}</Grid> : null}
      <Typography variant="body2" className={classes.text}>
        {title}
      </Typography>
    </Grid>
  )
}
