import React from "react"
import { Grid, makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  wrapperBlock: {
    background: theme.palette.background.secondary,
    position: "relative",

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
    "@media(max-width: 1025px)": {
      padding: "3.35vw",
      marginBottom: "1.43vw",
      borderRadius: "1.43vw",
    },
    "@media(max-width: 767px)": {
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
    "@media(max-width: 1025px)": {
      fontSize: "2.03vw",
      marginBottom: "1.91vw",
    },
    "@media(max-width: 767px)": {
      fontSize: "4.1vw",
      marginBottom: "3.86vw",
    },
  },
}))

/**
 * Компонент-обертка для блоков фильтра 
 * @module src/components/filter
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.children - объект дочерних компонентов
 * @param {String} props.title - название хорактеристики
 * @param {String} props.key - уникальный ключ среди соседних элементов
 */
export default function Wrapper({ children, title, key, ...other }) {
  const classes = useStyles()

  return (
    <Grid
      container
      direction="column"
      alignContent="flex-start"
      className={classes.wrapperBlock}
      key={key ?? title}
      {...other}
    >
      <Typography hidden={!title} className={classes.title}>
        {title}
      </Typography>
      {children}
    </Grid>
  )
}
