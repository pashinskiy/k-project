import React from "react"
import { makeStyles, Grid, Typography, useMediaQuery } from "@material-ui/core"

import Arrow from "../../../../../static/svg/arrow.svg"

const useStyle = makeStyles(theme => ({
  wrapper: {
    position: "relative",
  },
  select: {
    cursor: "pointer",

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    width: "100%",
    background: theme.palette.background.main,
    border: `1px solid ${theme.palette.color.secondaryLight}`,

    padding: "0.85vw 0.93vw",
    borderRadius: "0.46vw",
    "@media(min-width: 1280px)": {
      padding: "11px 12px",
      borderRadius: "6px",
    },
    "@media(max-width: 1025px)": {
      padding: "1.31vw 1.43vw",
      borderRadius: "0.71vw",
    },
    "@media(max-width: 767px)": {
      padding: "2.65vw 2.89vw",
      borderRadius: "1.44vw",
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
  wrapperPriceAndIcon: {
    display: "flex",
    alignItems: "flex-end",
  },
  price_text: {
    fontWeight: 600,
    lineHeight: 1.21,

    marginLeft: "0.46vw",
    fontSize: "1.09vw",
    "@media(min-width: 1280px)": {
      marginLeft: 6,
      fontSize: 14,
    },
    "@media(max-width: 1025px)": {
      marginLeft: "0.71vw",
      fontSize: "1.67vw",
    },
    "@media(max-width: 767px)": {
      marginLeft: "1.44vw",
      fontSize: "3.38vw",
    },
  },
  price_text_accent: {
    ...theme.typography.body2,
    fontWeight: 700,
    lineHeight: 1.21,

    marginLeft: "0.46vw",
    fontSize: "1.09vw",
    "@media(min-width: 1280px)": {
      marginLeft: 6,
      fontSize: 14,
    },
    "@media(max-width: 1025px)": {
      marginLeft: "0.71vw",
      fontSize: "1.67vw",
    },
    "@media(max-width: 767px)": {
      marginLeft: "1.44vw",
      fontSize: "3.38vw",
    },
  },
  price_text_through: {
    fontWeight: 400,
    lineHeight: 1.21,
    color: "#838383",
    textDecoration: "line-through",

    marginLeft: "0.31vw",
    fontSize: "0.93vw",
    "@media(min-width: 1280px)": {
      marginLeft: 4,
      fontSize: 12,
    },
    "@media(max-width: 1025px)": {
      marginLeft: "0.47vw",
      fontSize: "1.43vw",
    },
    "@media(max-width: 767px)": {
      marginLeft: "0.96vw",
      fontSize: "2.89vw",
    },
  },
  icon: {
    display: "flex",
    position: "relative",
    transform: "rotate(90deg)",
    transition: "transform .3s",

    marginLeft: "1.56vw",
    width: "1.64vw",
    height: "1.4vw",
    "@media(min-width: 1280px)": {
      marginLeft: 20,
      width: "21px",
      height: "18px",
    },
    "@media(max-width: 1025px)": {
      marginLeft: "2.39vw",
      width: "2.51vw",
      height: "2.15vw",
    },
    "@media(max-width: 767px)": {
      marginLeft: "4.83vw",
      width: "5.07vw",
      height: "4.34vw",
    },

    "& path": {
      fill: theme.palette.color.secondaryLight,
    },
  },
  options: {
    background: theme.palette.background.main,
    border: `1px solid ${theme.palette.color.secondaryLight}`,
    position: "absolute",
    top: "110%",
    left: 0,
    width: "100%",
    zIndex: 2,

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
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    border: "none",
    background: "transparent",
    cursor: "pointer",

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
  rotate180: {
    transform: "rotate(270deg)",
  },
}))

/**
 * Блок выбора услуги из выпадающего списка
 * @module src/components/repairPage/selectService
 * @param {Object} props - объект свойств компонента React
 * @param {Object[]} props.options - массив всех значений
 * @param {function} props.afterChange - функция установки нового значения
 */
export default function SelectService({ options, selectOption, afterChange }) {
  const classes = useStyle()
  const [showOptions, setShowOptions] = React.useState(false)
  const mobile = useMediaQuery("(max-width: 1025px)")

  const rotate = showOptions ? classes.rotate180 : ""

  function toggleShowOptions() {
    setShowOptions(!showOptions)
  }

  function setGlobalValue(value) {
    toggleShowOptions()
    afterChange(value)
  }

  // преобразуем цену
  function priceMod(value) {
    let price = "" + value
    let length = price.length
    for (let i = 1; i < length; i++) {
      if (i % 3 === 0) {
        price = price.slice(0, length - i) + " " + price.slice(length - i)
      }
    }
    return price
  }

  return (
    <div className={classes.wrapper}>
      <button
        onClick={toggleShowOptions}
        onBlur={() => setShowOptions(false)}
        className={classes.select}
      >
        <Typography className={classes.text}>
          {selectOption.primary.name}
        </Typography>

        <div className={classes.wrapperPriceAndIcon}>
          {mobile ? null : (
            <Typography className={classes.price_text}>Стоимость:</Typography>
          )}

          {selectOption.primary.old_price ? (
            <>
              <Typography className={classes.price_text_accent}>
                {priceMod(selectOption.primary.price)} ₽
              </Typography>

              <Typography className={classes.price_text_through}>
                {priceMod(selectOption.primary.old_price)} ₽
              </Typography>
            </>
          ) : (
            <Typography className={classes.price_text}>
              {priceMod(selectOption.primary.price)} ₽
            </Typography>
          )}

          <div className={classes.icon + " " + rotate}>
            <Arrow />
          </div>
        </div>
      </button>

      {showOptions ? (
        <Grid container direction="column" className={classes.options}>
          {options.map(option => (
            <button
              onPointerDown={() => setGlobalValue(option)}
              key={option.id}
              className={classes.option + " " + classes.text}
            >
              <Typography className={classes.text}>
                {option.primary.name}
              </Typography>

              <div className={classes.wrapperPriceAndIcon}>
                <Typography className={classes.price_text}>
                  Стоимость:
                </Typography>

                {option.primary.old_price ? (
                  <>
                    <Typography className={classes.price_text_accent}>
                      {priceMod(option.primary.price)} ₽
                    </Typography>

                    <Typography className={classes.price_text_through}>
                      {priceMod(option.primary.old_price)} ₽
                    </Typography>
                  </>
                ) : (
                  <Typography className={classes.price_text}>
                    {priceMod(option.primary.price)} ₽
                  </Typography>
                )}
              </div>
            </button>
          ))}
        </Grid>
      ) : null}
    </div>
  )
}
