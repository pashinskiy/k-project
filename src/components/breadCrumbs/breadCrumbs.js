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
    "@media(max-width: 834px)": {
      fontSize: "1.43vw",
      marginRight: "1.19vw",
    },
    "@media(max-width: 414px)": {
      fontSize: "2.89vw",
      marginRight: "2.41vw",
    },
  },
  icon: {
    height: "0.62vw",
    marginRight: "0.78vw",
    "@media(min-width: 1280px)": {
      height: "8px",
      marginRight: "10px",
    },
    "@media(max-width: 834px)": {
      height: "0.95vw",
      marginRight: "1.19vw",
    },
    "@media(max-width: 414px)": {
      height: "1.93vw",
      marginRight: "2.41vw",
    },
  },
}))

export default function BreadCrumbs({ links }) {
  links =
    links !== undefined
      ? links
      : [
          {
            title: "text1",
            href: "href1",
          },
          {
            title: "text2",
            href: "href2",
          },
        ]

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
