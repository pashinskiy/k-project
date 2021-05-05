import React from "react"
import { Button, makeStyles } from "@material-ui/core"

import Favorites from "../../../../static/svg/favorites.svg"
import NotFavorites from "../../../../static/svg/notFavorites.svg"

const useStyles = makeStyles(theme => ({
  button: {
    minWidth: 0,
    borderRadius: "0.93vw",
    "@media(min-width: 1280px)": {
      borderRadius: "12px",
    },
    "@media(max-width: 834px)": {
      borderRadius: "1.43vw",
    },
    "@media(max-width: 414px)": {
      borderRadius: "2.89vw",
    },
  },
  buttonPage: {
    width: "3.9vw",
    height: "3.9vw",
    padding: "1.01vw",
    "@media(min-width: 1280px)": {
      width: "50px",
      height: "50px",
      padding: "13px",
    },
    "@media(max-width: 834px)": {
      width: "5.99vw",
      height: "5.99vw",
      padding: "1.55vw",
    },
    "@media(max-width: 414px)": {
      width: "12.07vw",
      height: "12.07vw",
      padding: "3.14vw",
    },
  },
  buttonCard: {
    width: "3.12vw",
    height: "3.12vw",
    padding: "0.78vw",
    "@media(min-width: 1280px)": {
      width: "40px",
      height: "40px",
      padding: "10px",
    },
    "@media(max-width: 834px)": {
      width: "4.79VW",
      height: "4.79vw",
      padding: "1.19vw",
    },
    "@media(max-width: 414px)": {
      width: "9.66vw",
      height: "9.66vw",
      padding: "2.41vw",
    },
  },
  notFavorites: {
    background: "#F1ADAD",
  },
  favorites: {
    background: "#FF5B5B",
  },
}))

export default function ButtonAddFavorites({ product, variant }) {
  const classes = useStyles()

  function addToFavorites() {
    alert("add to favorites")
  }

  const favorites = false

  const background = favorites ? classes.favorites : classes.notFavorites

  const classButton =
    variant === "page" ? classes.buttonPage : classes.buttonCard
  return (
    <Button
      onClick={addToFavorites}
      className={classes.button + " " + classButton + " " + background}
    >
      {favorites ? <Favorites /> : <NotFavorites />}
    </Button>
  )
}
