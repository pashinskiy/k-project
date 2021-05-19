import React from "react"
import { Grid, makeStyles, Typography } from "@material-ui/core"
import BlockFromTo from "./blockFromTo"

const useStyles = makeStyles(theme => ({
  wrapper: {
    width: "21.87vw",
    marginTop: "2.18vw",
    "@media(min-width: 1280px)": {
      width: "280px",
      marginTop: "28px",
    },
    "@media(max-width: 834px)": {
      width: "100%",
      marginTop: "3.39vw",
    },
    "@media(max-width: 414px)": {
      marginTop: "4.83vw",
    },
  },
  wrapperBlock: {
    background: theme.palette.background.secondary,
    width: "100%",
    padding: "2.18vw",
    marginBottom: "0.93vw",
    borderRadius: "0.93vw",
    "@media(min-width: 1280px)": {
      width: "280px",
      padding: "28px",
      marginBottom: "12px",
      borderRadius: "12px",
    },
    "@media(max-width: 834px)": {
      width: "49.22%",
      padding: "3.35vw",
      marginBottom: "1.43vw",
      borderRadius: "1.43vw",
    },
    "@media(max-width: 414px)": {
      width: "100%",
      padding: "6.76vw",
      marginBottom: "2.89vw",
      borderRadius: "2.89vw",
    },
  },
  title: {
    fontWeight: 700,
    color: "#131313",
    fontSize: "1.32vw",
    marginBottom: "1.25vw",
    "@media(min-width: 1280px)": {
      fontSize: "17px",
      marginBottom: "16px",
    },
    "@media(max-width: 834px)": {
      fontSize: "2.03vw",
      marginBottom: "1.91vw",
    },
    "@media(max-width: 414px)": {
      fontSize: "4.1vw",
      marginBottom: "3.86vw",
    },
  },
}))

export default function Filter({ products, setFilterProducts }) {
  const classes = useStyles()

  // получаем уникальные значения для фильтра
  const price = new Set()
  const colors = new Set()

  products.forEach(product => {
    price.add(product.data.price)
    colors.add(product.data.color.replace("ё", "е"))
  })

  return (
    <Grid
      container
      justify="space-between"
      alignContent="flex-start"
      className={classes.wrapper}
    >
      <BlockFromTo spacing={price} />
      {products.map(product => (
        <Grid key={product.id} className={classes.wrapperBlock}>
          <Typography className={classes.title}>Title</Typography>
        </Grid>
      ))}
    </Grid>
  )
}
