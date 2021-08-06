import React from "react"
import { Grid, makeStyles, Typography } from "@material-ui/core"
import { Link } from "gatsby"
import Icon from "../../../static/svg/breadCrumbs.svg"

const useStyles = makeStyles(theme => ({
  wrapper: {
    margin: "1.09vw 0 2.18vw",
    "@media(min-width: 1280px)": {
      margin: "14px 0 28px",
    },
    "@media(max-width: 1025px)": {
      margin: "3.35vw 0",
    },
    "@media(max-width: 767px)": {
      margin: "6.76vw 0",
    },
  },
  link: {
    textDecoration: "none",
  },
  text: {
    marginRight: "0.78vw",
    fontWeight: 300,
    lineHeight: 1.21,
    fontSize: "0.93vw",
    "@media(min-width: 1280px)": {
      marginRight: "10px",
      fontSize: "12px",
    },
    "@media(max-width: 1025px)": {
      fontSize: "1.43vw",
      marginRight: "1.19vw",
    },
    "@media(max-width: 767px)": {
      fontSize: "2.89vw",
      marginRight: "2.41vw",
    },
  },
  icon: {
    width: "0.46vw",
    height: "0.7vw",
    marginRight: "0.78vw",
    "@media(min-width: 1280px)": {
      width: "6px",
      height: "9px",
      marginRight: "10px",
    },
    "@media(max-width: 1025px)": {
      width: "0.71vw",
      height: "1.07vw",
      marginRight: "1.19vw",
    },
    "@media(max-width: 767px)": {
      width: "1.44vw",
      height: "2.17vw",
      marginRight: "2.41vw",
    },
  },
}))

export default function BreadCrumbs({ links }) {
  const classes = useStyles()

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      className={classes.wrapper}
    >
      <Link to="/" className={classes.link}>
        <Typography variant="body2" className={classes.text}>
          Главная
        </Typography>
      </Link>
      {links.map(link => (
        <React.Fragment key={link.title}>
          <Icon className={classes.icon} />
          <Link to={link.href} className={classes.link}>
            <Typography variant="body2" className={classes.text}>
              {link.title}
            </Typography>
          </Link>
        </React.Fragment>
      ))}
    </Grid>
  )
}
