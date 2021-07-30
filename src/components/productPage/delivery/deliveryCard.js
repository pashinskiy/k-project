import React from "react"
import Card from "@material-ui/core/Card"
import { makeStyles } from "@material-ui/core/styles"
import { CardContent, Typography } from "@material-ui/core"

//DeliveryCard создаёт карточку доставки
//В props необходимо передать:
//deliveryCity - город (Title)
//deliveryDescription - описание карточки
//deliveryCost - стоимость доставки
//deliveryTime - время доставки

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.background.secondary,
    boxShadow: "none",
    borderRadius: "0.9375vw",
    marginRight: "2.1875vw",
    marginBottom: "2.3437vw",
    width: "27.343vw",
    "@media(min-width: 1280px)": {
      width: "350px",
      borderRadius: "12px",
      marginRight: "28px",
      marginBottom: "30px",
    },
    "@media(max-width: 1025px)": {
      width: "41.966vw",
      borderRadius: "1.438vw",
      marginRight: "3.357vw",
      marginBottom: "3.597vw",
    },
    "@media(max-width: 414px)": {
      width: "88.405vw",
      borderRadius: "2.898vw",
      marginRight: "6.763vw",
      marginBottom: "7.246vw",
    },
  },
  content: {
    padding: "0",
    margin: "1.171vw 1.953vw 1.171vw 1.5625vw",
    "@media(min-width: 1280px)": {
      margin: "15px 25px 15px 20px",
    },
    "@media(max-width: 1025px)": {
      margin: "1.798vw 2.997vw 1.798vw 2.398vw",
    },
    "@media(max-width: 414px)": {
      margin: "3.623vw 6.038vw 3.623vw 4.83vw",
    },
  },
  description: {
    color: theme.palette.color.secondary,
    fontSize: "1.328vw",
    marginBottom: "1.171vw",
    marginTop: "0.39vw",
    "@media(min-width: 1280px)": {
      fontSize: 17,
      marginBottom: "15px",
      marginTop: "5px",
    },
    "@media(max-width: 1025px)": {
      fontSize: "2.038vw",
      marginBottom: "1.798vw",
      marginTop: "0.599vw",
    },
    "@media(max-width: 414px)": {
      fontSize: "4.106vw",
      marginBottom: "3.623vw",
      marginTop: "1.2077vw",
    },
  },
  title: {
    fontWeight: "700",
    color: theme.palette.color.main,
    fontSize: "1.5625vw",
    marginBottom: "1.171vw",
    marginTop: "0.39vw",
    "@media(min-width: 1280px)": {
      fontSize: 20,
      marginBottom: "15px",
      marginTop: "5px",
    },
    "@media(max-width: 1025px)": {
      fontSize: "2.398vw",
      marginBottom: "1.798vw",
      marginTop: "0.599vw",
    },
    "@media(max-width: 414px)": {
      fontSize: "4.83vw",
      marginBottom: "3.623vw",
      marginTop: "1.2077vw",
    },
  },
  cost: {
    display: "inline-block",
    background: theme.palette.background.accent,
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    fontSize: "1.328vw",
    marginBottom: "1.171vw",
    marginTop: "0.39vw",
    marginLeft: "0.781vw",
    "@media(min-width: 1280px)": {
      fontSize: 17,
      marginBottom: "15px",
      marginTop: "5px",
      marginLeft: "10px",
    },
    "@media(max-width: 1025px)": {
      fontSize: "2.038vw",
      marginBottom: "1.798vw",
      marginTop: "0.599vw",
      marginLeft: "1.199vw",
    },
    "@media(max-width: 414px)": {
      fontSize: "4.106vw",
      marginBottom: "3.623vw",
      marginTop: "1.2077vw",
      marginLeft: "2.415vw",
    },
  },
  costStatic: {
    display: "inline-block",
    color: theme.palette.color.secondary,
    fontSize: "1.328vw",
    "@media(min-width: 1280px)": {
      fontSize: 17,
    },
    "@media(max-width: 1025px)": {
      fontSize: "2.038vw",
    },
    "@media(max-width: 414px)": {
      fontSize: "4.106vw",
    },
  },
  time: {
    background: theme.palette.background.accent,
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    display: "inline-block",

    fontSize: "1.328vw",
    marginLeft: "0.781vw",
    "@media(min-width: 1280px)": {
      fontSize: 17,
      marginLeft: "10px",
    },
    "@media(max-width: 1025px)": {
      fontSize: "2.038vw",
      marginLeft: "1.199vw",
    },
    "@media(max-width: 414px)": {
      fontSize: "4.106vw",
      marginLeft: "2.415vw",
    },
  },
  timeStatic: {
    display: "inline-block",
    color: theme.palette.color.secondary,
    fontSize: "1.328vw",
    "@media(min-width: 1280px)": {
      fontSize: 17,
    },
    "@media(max-width: 1025px)": {
      fontSize: "2.038vw",
    },
    "@media(max-width: 414px)": {
      fontSize: "4.106vw",
    },
  },
}))

export default function DeliveryCard(props) {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Typography variand="body1" className={classes.title}>
          {props.deliveryCity}
        </Typography>
        <Typography className={classes.description}>
          {props.deliveryDescription}
        </Typography>
        <Typography className={classes.costStatic}>Стоимость: </Typography>
        <Typography className={classes.cost}>{props.deliveryCost}</Typography>
        <br />
        <Typography className={classes.timeStatic}>Срок доставки:</Typography>
        <Typography className={classes.time}>{props.deliveryTime}</Typography>
      </CardContent>
    </Card>
  )
}
