import React from "react"
import { Grid, Divider, makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  wrapper: {
    margin: "3.12vw 0 2.18vw",
    "@media(min-width: 1280px)": {
      margin: "40px 0 28px",
    },
    "@media(max-width: 834px)": {
      marginBottom: "4.79vw 0 3.35vw",
    },
    "@media(max-width: 414px)": {
      margin: "6.76vw 0 0",
    },
  },
  wrapperTitle: {
    margin: "2.18vw 0",
    "@media(min-width: 1280px)": {
      margin: "28px 0",
    },
    "@media(max-width: 834px)": {
      marginBottom: "3.35vw 0",
    },
    "@media(max-width: 414px)": {
      margin: "6.76vw 0",
      order: 1,
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
    "@media(max-width: 834px)": {
      height: "4.79vw",
      width: "4.79vw",
      marginRight: "1.43vw",
    },
    "@media(max-width: 414px)": {
      height: "5.79vw",
      width: "5.79vw",
      marginRight: "1.93vw",
    },
  },
  classTitle: {
    color: theme.palette.color.main,
    fontWeight: 700,
    lineHeight: 1.21,

    fontSize: "2.81vw",
    "@media(min-width: 1280px)": {
      fontSize: "36px",
    },
    "@media(max-width: 834px)": {
      fontSize: "4.31vw",
    },
    "@media(max-width: 414px)": {
      fontSize: "4.83vw",
    },
  },
  classCount: {
    color: theme.palette.color.secondaryLight,
    fontWeight: 700,
    marginLeft: "0.9375vw",
    fontSize: "1.328vw",
    "@media(min-width: 1280px)": {
      fontSize: "17px",
      marginLeft: "12px",
    },
    "@media(max-width: 834px)": {
      fontSize: "1.678vw",
      marginLeft: "1.199vw",
    },
    "@media(max-width: 414px)": {
      fontSize: "3.381vw",
      marginLeft: "2.415vw",
    },
  },
}))

export default function HeaderWithIcon({ icon, title, divider, count }) {
  const classes = useStyles()
  const goodsTitle = {
    title1: "товар",
    title2: "товара",
    title3: "товаров",
  }

  const getTitle = () => {
    if (count % 100 >= 11 && count % 100 <= 19) return goodsTitle.title3
    if (count % 10 >= 2 && count % 10 <= 4) return goodsTitle.title2
    if (count === 1) return goodsTitle.title1
    return goodsTitle.title3
  }

  return divider ? (
    <Grid container direction="column" className={classes.wrapper}>
      <Grid container alignItems="center" className={classes.wrapperTitle}>
        {icon ? <Grid className={classes.icon}>{icon}</Grid> : null}
        <Typography className={classes.classTitle}>{title}</Typography>
        {count ? (
          <Typography className={classes.classCount}>
            {count} {getTitle()}
          </Typography>
        ) : null}
      </Grid>
      <Divider />
    </Grid>
  ) : (
    <Grid container alignItems="center" className={classes.wrapperTitle}>
      {icon ? <Grid className={classes.icon}>{icon}</Grid> : null}
      <Typography className={classes.classTitle}>{title}</Typography>
      {count ? (
        <Typography className={classes.classCount}>
          {count} {getTitle()}
        </Typography>
      ) : null}
    </Grid>
  )
}
