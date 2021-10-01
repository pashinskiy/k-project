import React from "react"
import { makeStyles, Typography } from "@material-ui/core"

const useStyle = makeStyles(theme => ({
  wrapper: {
    display: "inline-flex",
    flexDirection: "column",
  },
  item: {
    display: "flex",
    alignItems: "center",

    padding: 0,
    background: "transparent",
    outline: "none",
    minWidth: 0,
    minHeight: 0,
    border: "none",
    cursor: "pointer",

    marginTop: "0.78vw",
    "@media(min-width: 1280px)": {
      marginTop: 10,
    },
    "@media(max-width: 767px)": {
      marginTop: "2.41vw",
    },
  },
  checkbox: {
    background: theme.palette.background.main,
    border: `1px solid ${theme.palette.background.accentSecondary}`,
    borderRadius: "100px",
    flexShrink: 0,

    width: "1.4vw",
    height: "1.4vw",
    "@media(min-width: 1280px)": {
      width: 18,
      height: 18,
    },
    "@media(max-width: 767px)": {
      width: "4.34vw",
      height: "4.34vw",
    },
  },
  active: {
    background: theme.palette.background.accentSecondary,
    boxShadow: `inset 0 0 0 2px ${theme.palette.color.mainContrast}`,
  },
  item_content: {
    width: "100%",

    display: "flex",
    justifyContent: "space-between",

    marginLeft: "1.56vw",
    "@media(min-width: 1280px)": {
      marginLeft: 20,
    },
    "@media(max-width: 767px)": {
      marginLeft: "4.83vw",
    },
  },
  item_content_name: {
    fontWeight: 400,
    lineHeight: 1.21,

    fontSize: "1.09vw",
    "@media(min-width: 1280px)": {
      fontSize: "14px",
    },
    "@media(max-width: 767px)": {
      fontSize: "3.38vw",
    },
  },
  item_content_price: {
    fontWeight: 400,
    lineHeight: 1.21,

    marginLeft: "1.56vw",
    fontSize: "1.09vw",
    "@media(min-width: 1280px)": {
      marginLeft: 20,
      fontSize: "14px",
    },
    "@media(max-width: 767px)": {
      marginLeft: "4.83vw",
    },
  },
}))

/**
 * Блок выбора одного элемента из списка
 * @module src/components/orderingPage/elementsForms/listRatioRect
 * @param {Object} props - объект свойств компонента React
 * @param {Object[]} props.list - массив всех значений
 * @param {function} props.afterChange - функция установки нового значения
 */
export default function CheckboxList({ list, afterChange }) {
  const classes = useStyle()
  const [value, setValue] = React.useState(list[0].name)

  function setGlobalValue(value) {
    setValue(value)
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
      {list.map(item => {
        const active = item.name === value ? classes.active : ""

        return (
          <button
            onClick={() => setGlobalValue(item)}
            key={item}
            className={classes.item}
          >
            <div className={classes.checkbox + " " + active} />

            <div className={classes.item_content}>
              <Typography className={classes.item_content_name}>
                {item.name}
              </Typography>

              <Typography className={classes.item_content_price}>
                {priceMod(item.price) + "₽"}
              </Typography>
            </div>
          </button>
        )
      })}
    </div>
  )
}
