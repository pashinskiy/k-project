import React from "react"
import { makeStyles, Grid, Typography, Button } from "@material-ui/core"

const useStyle = makeStyles(theme => ({
  wrapper: {
    background: theme.palette.background.secondary,

    "@media(max-width: 414px)": {
      padding: "0.96vw",
      borderRadius: "2.89vw",
    },
  },
  itemWrapper: {
    width: "50%",
    display: "flex",

    "@media(max-width: 414px)": {
      justifyContent: "center",
      borderRadius: "2.17vw",
    },
  },
  activeItem: {
    "@media(max-width: 414px)": {
      background: theme.palette.background.main,
      "&:hover": {
        background: theme.palette.background.main,
      },
    },
  },
  title: {
    fontWeight: 400,
    lineHeight: 1.21,

    fontSize: "1.09vw",
    "@media(min-width: 1280px)": {
      fontSize: "14px",
    },
    "@media(max-width: 834px)": {
      fontSize: "1.67vw",
    },
    "@media(max-width: 414px)": {
      fontSize: "3.38vw",
    },
  },
  description: {
    fontWeight: 400,
    lineHeight: 1.21,

    fontSize: "1.09vw",
    "@media(min-width: 1280px)": {
      fontSize: "14px",
    },
    "@media(max-width: 834px)": {
      fontSize: "1.67vw",
    },
    "@media(max-width: 414px)": {
      fontSize: "3.38vw",
    },
  },
}))

export default function VariantDelivery({ value, setValue }) {
  const classes = useStyle()

  function setStandartDelivery() {
    setValue("standart")
  }

  function setExpressDelivery() {
    setValue("express")
  }

  return (
    <Grid container justify="space-between" className={classes.wrapper}>
      <Button
        onClick={setStandartDelivery}
        className={
          classes.itemWrapper +
          " " +
          (value === "standart" ? classes.activeItem : "")
        }
      >
        Стандартная
      </Button>

      <Button
        onClick={setExpressDelivery}
        className={
          classes.itemWrapper +
          " " +
          (value === "express" ? classes.activeItem : "")
        }
      >
        Экспресс
      </Button>
    </Grid>
  )
}
