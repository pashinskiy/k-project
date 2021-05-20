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
    "@media(max-width: 834px)": {
      height: "5.75vw",
      padding: "1.43vw",
      borderWidth: "0.11vw",
      borderRadius: "0.71vw",
      fontSize: "1.67vw",
    },
    "@media(max-width: 414px)": {
      height: "11.59vw",
      padding: "2.89vw",
      borderWidth: "0.24vw",
      borderRadius: "1.44vw",
      fontSize: "3.38vw",
    },
  },
}))

export default function BlockMax({ title, set, filtersOther, setFilter }) {
  const classes = useStyles()

  const sortSet = set.sort((a, b) => a - b)
  const valueMax = sortSet[sortSet.length - 1]
  const valueMin = sortSet[0]

  const [value, setValue] = React.useState(valueMax)

  React.useEffect(() => {
    if (!filtersOther.has(title)) setValueFilter()

    const wrapper = document.querySelector("#input")
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
    setFilter(title, result)
    setValue(result)
  }
  // изменение состояния компонента
  function changeValue(e) {
    const newValue = isNaN(+e.target.value) ? value : +e.target.value
    setValue(newValue)
  }

  return set.length ? (
    <Wrapper title={title}>
      <Input
        value={value}
        id="input"
        onChange={changeValue}
        disableUnderline
        className={classes.input}
        aria-label={title}
      />
    </Wrapper>
  ) : null
}
