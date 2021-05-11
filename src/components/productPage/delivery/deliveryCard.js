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
    maxWidth: "350px",
    "@media (max-width:414px)": {
      maxWidth: "366px",
    },
    background: "#EFEFF2",
    borderRadius: "12px",
    boxShadow: "none",
  },
  content: {
    padding: "15px 25px 15px 20px",
  },
  description: {
    //fontFamily: "Inter",
    fontSize: 17,
    marginBottom: "15px",
    marginTop: "5px",
    color: "#5A5A5A",
  },
  title: {
    fontSize: 20,
    //fontFamily: "Inter",
    fontWeight: "700",
    marginBottom: "15px",
    marginTop: "5px",
    color: "#000000",
  },
  cost: {
    //fontFamily: "Inter",
    fontSize: 17,
    marginBottom: "15px",
    marginTop: "5px",
    marginLeft: "10px",
    display: "inline-block",
    background: theme.palette.background.accent,
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
  costStatic: {
    display: "inline-block",
    color: "#5A5A5A",
  },
  time: {
    //fontFamily: "Inter",
    fontSize: 17,
    background: theme.palette.background.accent,
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    display: "inline-block",
    marginLeft: "10px",
  },
  timeStatic: {
    display: "inline-block",
    color: "#5A5A5A",
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
