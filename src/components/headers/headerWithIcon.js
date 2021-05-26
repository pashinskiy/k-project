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
    color: theme.palette.color.secondary,
    marginLeft: "12px",

    fontWeight: 700,
    fontSize: "1.328vw",
    "@media(min-width: 1280px)": {
      fontSize: "17px",
    },
    "@media(max-width: 834px)": {
      fontSize: 14,
    },
    "@media(max-width: 414px)": {
      fontSize: 14,
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

  function getTitle() {
    // var check = count % 100
    // switch(check){
    //   case 
    //   case check >= 11 && check <= 19:
    //     return title3

    // }
  }

  return (
    <Grid container direction="column" className={classes.wrapper}>
      <Grid container alignItems="center" className={classes.wrapperTitle}>
        {icon ? <Grid className={classes.icon}>{icon}</Grid> : null}
        <Typography className={classes.classTitle}>{title}</Typography>
        {count ? <Typography className={classes.classCount}>{count} товаров</Typography> : null}

      </Grid>
      {divider ? <Divider /> : null}
    </Grid>
  )
}
