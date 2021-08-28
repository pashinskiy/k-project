import React from "react"
import { makeStyles, Input } from "@material-ui/core"
import Wrapper from "./wrapper"

const useStyles = makeStyles(theme => ({
  input: {
    width: "100%",
    boxSizing: "box-sizing",
    background: theme.palette.background.main,
    border: "solid",
    borderColor: theme.palette.color.accentSecondary,
    fontWeight: 400,
    lineHeight: 1.21,
    position: "relative",

    height: "3.75vw",
    padding: "0.93vw",
    borderWidth: "0.07vw",
    borderRadius: "0.46vw",
    fontSize: "1.09vw",
    "@media(min-width: 1280px)": {
      height: "48px",
      padding: "12px",
      borderWidth: "1px",
      borderRadius: "6px",
      fontSize: "14px",
    },
    "@media(max-width: 1025px)": {
      height: "5.75vw",
      padding: "1.43vw",
      borderWidth: "0.11vw",
      borderRadius: "0.71vw",
      fontSize: "1.67vw",
    },
    "@media(max-width: 767px)": {
      height: "11.59vw",
      padding: "2.89vw",
      borderWidth: "0.24vw",
      borderRadius: "1.44vw",
      fontSize: "3.38vw",
    },
  },
}))

/**
 * Блок фильтра с выбором максимального значения
 * @module src/components/filter/blockMax
 * @param {Object} props - объект свойств компонента React
 * @param {String} props.title - название характеристики
 * @param {Object[]} props.set - массив всех возможных вариантов характеристики
 * @param {String|Number} props.valueFilter - текущее значение
 * @param {function} props.setFilter - функция установки значения в фильтр
 */
export default function BlockMax({
  title,
  set,
  valueFilter,
  setFilter,
  ...other
}) {
  const classes = useStyles()

  const sortSet = set.sort((a, b) => a - b)
  const valueMax = sortSet[sortSet.length - 1]
  const valueMin = sortSet[0]

  // const [value, setValue] = React.useState(valueMax)
  const value = valueFilter ? +valueFilter : valueMax
  const id =
    "id" +
    title
      .split("")
      .map(char => "_" + char.charCodeAt(0))
      .join("")

  React.useEffect(() => {
    const wrapper = document.querySelector(`#${id}`)
    if (wrapper) {
      wrapper.addEventListener("blur", setValueFilter)
      return () => wrapper.removeEventListener("blur", setValueFilter)
    }
  })

  // установка значения в фильтр и состояние
  function setValueFilter() {
    let result = value
    if (value > valueMax) result = valueMax
    if (value < valueMin) result = valueMin
    setFilter(title, result === valueMax ? [] : `${result}`)
  }
  // изменение состояния компонента
  function changeValue(e) {
    const newValue = isNaN(+e.target.value) ? value : +e.target.value
    setFilter(title, `${newValue}`)
  }

  return set.length ? (
    <Wrapper title={title} {...other}>
      <Input
        value={value}
        id={id}
        onChange={changeValue}
        disableUnderline
        className={classes.input}
        aria-label={title}
      />
    </Wrapper>
  ) : null
}
