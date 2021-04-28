import React from "react"
import { Button, makeStyles } from "@material-ui/core"

import Favorites from "../../../../static/svg/favorites.svg"
import NotFavorites from "../../../../static/svg/notFavorites.svg"

const useStyles = makeStyles(theme => ({
  button: {
    width: "3.9vw",
    height: "3.9vw",
    padding: "1.01vw",
    minWidth: 0,
    borderRadius: "0.93vw",
    "@media(min-width: 1280px)": {
      width: "50px",
      height: "50px",
      padding: "13px",
      borderRadius: "12px",
    },
    "@media(max-width: 834px)": {
      width: "5.99%",
      height: "5.99vw",
      padding: "1.55vw",
      borderRadius: "1.43vw",
    },
    "@media(max-width: 414px)": {
      width: "12.07%",
      height: "12.07vw",
      padding: "3.14vw",
      borderRadius: "2.89vw",
    },
  },
  notFavorites: {
    background: "#F1ADAD",
  },
  favorites: {
    background: "#FF5B5B",
  },
}))

export default function ButtonAddFavorites({ product, text, variant }) {
  const classes = useStyles()

  function addToFavorites() {
    alert("add to favorites")
  }

  const favorites = false

  const background = favorites ? classes.favorites : classes.notFavorites
  return (
    <Button
      onClick={addToFavorites}
      className={classes.button + " " + background}
    >
      {favorites ? <Favorites /> : <NotFavorites />}
    </Button>
  )
}
