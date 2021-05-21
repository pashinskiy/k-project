import React from "react"
import { Grid, makeStyles } from "@material-ui/core"

import BlockFromTo from "./blockFromTo"
import BlockColors from "./blockColors"
import BlockCheckbox from "./blockCheckbox"
import BlockMax from "./blockMax"
import BlockRatio from "./blockRatio"
import BlockBoolean from "./blockBoolean"

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
}))

export default function Filter({ products, setFilterProducts }) {
  const classes = useStyles()

  // получаем уникальные значения для фильтров по умолчанию
  const prices = new Set()
  const colors = new Set()
  const brands = new Set()
  const stickers = new Set()
  const other = new Map()

  products.forEach(product => {
    prices.add(product.data.price)
    colors.add(product.data.color_name.replace("ё", "е").toLowerCase())
    brands.add(product.data.brand.document.data.name.replace("ё", "е"))
    product.data.body
      .filter(slice => slice.slice_type === "stickers")
      .forEach(slice => {
        slice.items.forEach(item => stickers.add(item.sticker.document.id))
      })
    product.data.body1
      .filter(slice => slice.slice_type === "characteristics")
      .forEach(slice => {
        slice.items.forEach(characteristic => {
          const type = characteristic.characteristic.document.data.variant
          const name = characteristic.characteristic.document.data.name
          const value = characteristic.value
          if (type === "none") return
          if (other.has(name)) {
            const filter = { ...other.get(name) }
            filter.value.add(value)
            other.set(name, filter)
          } else {
            const newFilter = { type, value: new Set([value]) }
            other.set(name, newFilter)
          }
        })
      })
  })

  // фильтр по цене
  const [filterPrice, setFilterPrice] = React.useState([])
  // фильтр по цвету
  const [filterColor, setFilterColor] = React.useState([])
  // фильтр по производителю
  const [filterBrand, setFilterBrand] = React.useState([])
  // фильтр по стикерам
  const [filterSticker, setFilterSticker] = React.useState([])
  // остальные фильтры
  const [filtersOther, setFiltersOther] = React.useState(new Map())

  // установка фильтра от до
  function setFilterFromTo(title, value) {
    if (title === "Цена") setFilterPrice(value)
    else
      setFiltersOther(
        new Map(
          filtersOther.set(title, {
            type: "from to",
            value: value,
          })
        )
      )
  }
  // установка фильтра чекбокса
  function setFilterCheckbox(title, value) {
    if (title === "Производитель") setFilterBrand(value)
    else
      setFiltersOther(
        new Map(
          filtersOther.set(title, {
            type: "checkbox",
            value: value,
          })
        )
      )
  }
  // установка фильтра максимума
  function setFilterMaximum(title, value) {
    setFiltersOther(
      new Map(
        filtersOther.set(title, {
          type: "maximum",
          value: value,
        })
      )
    )
  }
  // установка фильтра ратио
  function setFilterRatio(title, value) {
    setFiltersOther(
      new Map(
        filtersOther.set(title, {
          type: "ratio",
          value: value,
        })
      )
    )
  }
  // установка фильтра да/нет
  function setFilterBoolean(title, value) {
    if (title === "Стикер") {
      const index = filterSticker.indexOf(value)
      if (index === -1) filterSticker.push(value)
      else filterSticker.splice(index, 1)
      setFilterSticker([...filterSticker])
    } else {
      setFiltersOther(
        new Map(
          filtersOther.set(title, {
            type: "boolean",
            value: value,
          })
        )
      )
    }
  }

  return (
    <Grid
      container
      justify="space-between"
      alignContent="flex-start"
      className={classes.wrapper}
    >
      <BlockFromTo
        title="Цена"
        set={[...prices]}
        span={[...filterPrice]}
        setSpan={setFilterFromTo}
        slider={true}
      />
      <BlockColors
        title="Цвет"
        allColors={[...colors]}
        colors={[...filterColor]}
        setColors={setFilterColor}
      />
      <BlockCheckbox
        title="Производитель"
        set={[...brands]}
        selected={[...filterBrand]}
        setFilter={setFilterCheckbox}
      />
      {[...stickers].map(sticker => (
        <BlockBoolean
          key={sticker}
          title="Стикер"
          stickerId={sticker}
          setFilter={setFilterBoolean}
        />
      ))}

      {[...other.entries()].map(item => {
        const title = item[0]
        const type = item[1].type
        const value = item[1].value
        switch (type) {
          case "from to":
            return (
              <BlockFromTo
                key={title}
                title={title}
                set={[...value]}
                span={filtersOther.get(title)?.value}
                setSpan={setFilterFromTo}
              />
            )
          case "checkbox":
            return (
              <BlockCheckbox
                key={title}
                title={title}
                set={[...value]}
                selected={filtersOther.get(title)?.value ?? []}
                setFilter={setFilterCheckbox}
              />
            )
          case "ratio":
            return (
              <BlockRatio
                key={title}
                title={title}
                set={[...value]}
                selected={filtersOther.get(title)?.value}
                setFilter={setFilterRatio}
              />
            )
          case "maximum":
            return (
              <BlockMax
                key={title}
                title={title}
                set={[...value]}
                filtersOther={filtersOther}
                setFilter={setFilterMaximum}
              />
            )
          case "boolean":
            return (
              <BlockBoolean
                key={title}
                title={title}
                valueFilter={!!filtersOther.get(title)?.value}
                setFilter={setFilterBoolean}
              />
            )
          default:
            return null
        }
      })}
    </Grid>
  )
}
