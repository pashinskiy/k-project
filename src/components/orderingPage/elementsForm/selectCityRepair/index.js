import React from "react"
import { makeStyles, Grid, Button, Typography } from "@material-ui/core"

import { OrderingStateContext, OrderingDispatchContext } from "../../context"

const useStyle = makeStyles(theme => ({
  select: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    width: "100%",
    background: theme.palette.background.main,
    border: `1px solid transparent`,
    outline: "none",

    padding: "1.17vw 0.93vw",
    borderRadius: "0.46vw",
    "@media(min-width: 1280px)": {
      padding: "15px 12px",
      borderRadius: "6px",
    },
    "@media(max-width: 1025px)": {
      padding: "1.79vw 1.43vw",
      borderRadius: "0.71vw",
    },
    "@media(max-width: 767px)": {
      border: `1px solid ${theme.palette.color.accentSecondary}`,
      padding: "3.62vw 2.89vw",
      borderRadius: "1.44vw",
    },

    "&:focus": {
      border: `1px solid ${theme.palette.color.accentSecondary}`,
    },
  },
  text: {
    fontWeight: 400,
    lineHeight: 1.21,

    fontSize: "1.09vw",
    "@media(min-width: 1280px)": {
      fontSize: "14px",
    },
    "@media(max-width: 1025px)": {
      fontSize: "1.67vw",
    },
    "@media(max-width: 767px)": {
      fontSize: "3.38vw",
    },
  },
  options: {
    background: theme.palette.background.main,
    boxShadow: `0 0 1px #333`,
    position: "absolute",
    top: "110%",
    left: 0,
    width: "100%",
    zIndex: 2,
    maxHeight: "200px",
    overflow: "auto",

    padding: "1.17vw 0.93vw",
    borderRadius: "0.46vw",
    "@media(min-width: 1280px)": {
      padding: "15px 12px",
      borderRadius: "6px",
    },
    "@media(max-width: 1025px)": {
      padding: "1.79vw 1.43vw",
    },
    "@media(max-width: 767px)": {
      padding: "3.62vw 2.89vw",
    },
  },
  option: {
    padding: "0.39vw 0",
    "@media(min-width: 1280px)": {
      padding: "5px 0",
    },
    "@media(max-width: 1025px)": {
      padding: "0.59vw 0",
    },
    "@media(max-width: 767px)": {
      padding: "1.2vw 0",
    },

    "& span": {
      width: "100%",
      display: "block",
      textAlign: "left",
    },

    "&:hover": {
      color: theme.palette.color.accentSecondary,
    },
  },
  error: {
    border: `1px solid #F1ADAD`,
    "@media(max-width: 767px)": {
      border: `1px solid ${theme.palette.color.accentSecondary}`,
    },
  },
  textError: {
    fontWeight: 400,
    lineHeight: 1.21,
    color: "#FF5B5B",

    marginTop: "0.93vw",
    fontSize: "0.93vw",
    "@media(min-width: 1280px)": {
      marginTop: "12px",
      fontSize: "12px",
    },
    "@media(max-width: 1025px)": {
      marginTop: "1.43vw",
      fontSize: "1.43vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "2.89vw",
      fontSize: "2.89vw",
    },
  },
}))

/**
 * Блок ввода названия города с предложением вариантов
 * @module src/components/orderingPage/elementsForms/selectCityRepair
 */
export default function SelectCityRepair() {
  const classes = useStyle()
  const [showOptions, setShowOptions] = React.useState(false)

  const orderingState = React.useContext(OrderingStateContext)
  const orderingDispatch = React.useContext(OrderingDispatchContext)

  const options = orderingState.repairCity
    ? orderingState.repairCities.filter(city =>
        city.toLowerCase().includes(orderingState.repairCity.toLowerCase())
      )
    : orderingState.repairCities

  function setCity(value) {
    orderingDispatch({ type: "SET_REPAIR_CITY", payload: value })
  }

  function openOptions() {
    setShowOptions(true)
  }

  function setOption(value) {
    setShowOptions(false)
    setCity(value)
  }

  function setValue(e) {
    setCity(e.target.value)
  }

  const error = orderingState.validationRepairCity() ? "" : classes.error

  return (
    <>
      <div style={{ position: "relative" }}>
        <input
          onClick={openOptions}
          onInput={setValue}
          className={classes.select + " " + classes.text + " " + error}
          value={orderingState.repairCity}
          autocomplete="new-password"
        />

        {showOptions && options.length ? (
          <Grid
            container
            direction="column"
            wrap="nowrap"
            className={classes.options}
          >
            {options.map(option => (
              <Button
                onPointerDown={() => setOption(option)}
                key={option}
                className={classes.option + " " + classes.text}
              >
                {option}
              </Button>
            ))}
          </Grid>
        ) : null}
      </div>

      {error && orderingState.repairCity && !orderingState.repairFocusingOnField ? (
        <Typography className={classes.textError}>
          В данный момент ремонт устройств не осуществляется на территории
          выбранного города.
        </Typography>
      ) : null}
    </>
  )
}
