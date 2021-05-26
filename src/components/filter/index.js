import React from "react"
import {
  Button,
  Grid,
  makeStyles,
  useMediaQuery,
  Typography,
} from "@material-ui/core"
import { navigate } from "gatsby"

import BlockFromTo from "./blockFromTo"
import BlockColors from "./blockColors"
import BlockCheckbox from "./blockCheckbox"
import BlockMax from "./blockMax"
import BlockRatio from "./blockRatio"
import BlockBoolean from "./blockBoolean"

import IconFilter from "../../../static/svg/filter.svg"
import IconBack from "../../../static/svg/breadCrumbs.svg"
import ButtonClean from "./buttonClean"

const useStyles = makeStyles(theme => ({
  button: {
    padding: 0,
    width: "auto",
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    minWidth: 0,
    position: "relative",
  },
  buttonIcon: {
    height: "1.85vw",
    width: "1.85vw",
    marginRight: "0.62vw",
    "@media(min-width: 1280px)": {
      width: "24px",
      height: "24px",
      marginRight: "8px",
    },
    "@media(max-width: 834px)": {
      width: "2.87vw",
      height: "2.87vw",
      marginRight: "0.95vw",
    },
    "@media(max-width: 414px)": {
      width: "5.79vw",
      height: "5.79vw",
      marginRight: "1.93vw",
    },
  },
  buttonText: {
    fontWeight: 400,
    lineHeight: 1.21,

    fontSize: "1.09vw",
    "@media(min-width: 1280px)": {
      fontSize: "14px",
    },
    "@media(max-width: 834px)": {
      fontSize: "1.67vw",
    },
    "@media(max-width: 414px)": {
      fontSize: "3.38vw",
    },
  },
  wrapperFilterBlock: {
    position: "absolute",
    top: "100%",
    right: 0,
    width: "21.87vw",
    marginTop: "4.37vw",
    "@media(min-width: 1280px)": {
      width: "280px",
      marginTop: "56px",
    },
    "@media(max-width: 834px)": {
      position: "static",
      width: "100%",
      marginTop: "3.39vw",
      marginBottom: "11.27vw",
    },
    "@media(max-width: 414px)": {
      marginTop: "4.83vw",
      marginBottom: "22.7vw",
    },
  },
  column: {
    width: "49.22%",
  },
  wrapperButtonFilter: {
    "@media(max-width: 834px)": {
      width: "100%",
      padding: "0.95vw",
      bottom: "7.43vw",
      position: "fixed",
      left: 0,
    },
    "@media(max-width: 414px)": {
      padding: "1.93vw",
      bottom: "14.97vw",
    },
  },
  buttonFilter: {
    background: theme.palette.background.accent,
    color: theme.palette.color.mainContrast,
    fontWeight: 700,
    lineHeight: 1.21,
    width: "100%",

    fontSize: "1.4vw",
    borderRadius: "1.56vw",
    padding: "1.09vw",
    "@media(min-width: 1280px)": {
      fontSize: "18px",
      borderRadius: "20px",
      padding: "14px",
    },
    "@media(max-width: 834px)": {
      fontSize: "2.15vw",
      borderRadius: "2.39vw",
      padding: "1.67vw",
    },
    "@media(max-width: 414px)": {
      fontSize: "4.34vw",
      borderRadius: "4.83vw",
      padding: "3.38vw",
    },
  },
  modal: {
    "@media(max-width: 834px)": {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 10,
      background: theme.palette.background.main,
      overflow: "auto",
      margin: 0,
      display: "flex",
      alignItems: "flex-start",

      paddingTop: "72px",
      paddingBottom: "62px",

      padding: "3.35vw",
    },
    "@media(max-width: 414px)": {
      paddingTop: "72px",
      paddingBottom: "62px",

      padding: "6.76vw",
    },
  },
  modalButtonBack: {
    background: theme.palette.background.secondary,
    "@media(max-width: 834px)": {
      padding: "0.95vw 1.43vw",
      borderRadius: "2.39vw",
      marginTop: "3.35vw",
    },
    "@media(max-width: 414px)": {
      padding: "1.93vw 2.89vw",
      borderRadius: "4.83vw",
      marginTop: "6.76vw",
    },
  },
  modalButtonBackIcon: {
    "@media(max-width: 834px)": {
      width: "0.71vw",
      height: "0.95vw",
      marginRight: "1.07vw",
    },
    "@media(max-width: 414px)": {
      width: "1.44vw",
      height: "2.17vw",
      marginRight: "1.93vw",
    },
  },
  modalTitle: {
    "@media(max-width: 834px)": {
      marginTop: "2.39vw",
    },
    "@media(max-width: 414px)": {
      marginTop: "4.83vw",
    },
  },
  modalTitleText: {
    fontWeight: 700,
    lineHeight: 1.21,

    "@media(max-width: 834px)": {
      fontSize: "3.35vw",
    },
    "@media(max-width: 414px)": {
      fontSize: "6.67vw",
    },
  },
}))

export default function Filter({ products, setFilterProducts }) {
  const classes = useStyles()

  const desktop = useMediaQuery("(min-width: 835px)")
  const second_variant = useMediaQuery(
    "(min-width: 415px) and (max-width: 834px)"
  )
  const [show, setShow] = React.useState(false)

  const fieldsFilter = new Map([
    ["Цена", { type: "from to", value: new Set(), order: 1 }],
    ["Цвет", { type: "color", value: new Set(), order: 2 }],
    ["Производитель", { type: "checkbox", value: new Set(), order: 3 }],
    ["Стикеры", { type: "boolean", value: new Set(), order: 7 }],
  ])

  //идем по продуктам собирая уникальные поля для фильтра
  products.forEach(product => {
    product.data.body1
      .filter(slice => slice.slice_type === "characteristics")
      .forEach(slice => {
        slice.items.forEach(characteristic => {
          const type = characteristic.characteristic.document.data.variant
          const name = characteristic.characteristic.document.data.name
          const value = characteristic.value
          const order = characteristic.characteristic.document.data.order
          if (type === "none") return
          if (fieldsFilter.has(name)) {
            fieldsFilter.get(name).value.add(value)
          } else {
            fieldsFilter.set(name, { type, value: new Set([value]), order })
          }
        })
      })
    fieldsFilter.get("Цена").value.add(product.data.price)
    fieldsFilter
      .get("Цвет")
      .value.add(product.data.color_name.replace("ё", "е").toLowerCase())
    fieldsFilter
      .get("Производитель")
      .value.add(product.data.brand.document.data.name.replace("ё", "е"))
    product.data.body
      .filter(slice => slice.slice_type === "stickers")
      .forEach(slice => {
        slice.items.forEach(item =>
          fieldsFilter.get("Стикеры").value.add(item.sticker.document.id)
        )
      })
  })

  // смотрим адресную строку
  const url = new URL(window.location.href)

  const filtersInUrl = [...url.searchParams]
    .filter(item => fieldsFilter.has(item[0]))
    .map(item => {
      const type = fieldsFilter.get(item[0])?.type
      const value = JSON.parse(item[1])
      return [item[0], { type: type, value: value }]
    })

  const [filters, setFilters] = React.useState(new Map([...filtersInUrl]))

  //счетчик фильтров
  const countFilter = [...filters].reduce((sum, filter) => {
    if (filter[1].type === "checkbox" || filter[1].type === "color")
      return sum + filter[1].value.length
    return ++sum
  }, 0)

  //изменение фильтра
  function updFilter(value) {
    setFilters(new Map([...value].filter(el => !!el[1].value.length)))
  }

  // установка фильтра от до
  function setFilterFromTo(title, value) {
    updFilter(
      filters.set(title, {
        type: "from to",
        value: value,
      })
    )
  }
  // установка цвета
  function setFilterColor(value) {
    updFilter(
      filters.set("Цвет", {
        type: "color",
        value: value,
      })
    )
  }
  // установка фильтра чекбокса
  function setFilterCheckbox(title, value) {
    updFilter(
      filters.set(title, {
        type: "checkbox",
        value: value,
      })
    )
  }
  // установка фильтра максимума
  function setFilterMaximum(title, value) {
    updFilter(
      filters.set(title, {
        type: "maximum",
        value: value,
      })
    )
  }
  // установка фильтра ратио
  function setFilterRatio(title, value) {
    updFilter(
      filters.set(title, {
        type: "ratio",
        value: value,
      })
    )
  }
  // установка фильтра да/нет
  function setFilterBoolean(title, value) {
    if (title === "Стикеры") {
      const index = filters.get(title)?.value.indexOf(value)
      if (index === undefined)
        filters.set(title, {
          type: "boolean",
          value: [value],
        })
      else if (index === -1) filters.get(title).value.push(value)
      else filters.get(title).value.splice(index, 1)
    } else {
      filters.set(title, {
        type: "boolean",
        value: value,
      })
    }
    updFilter(filters)
  }

  // запись в адресную строку
  function setUrl(title, value) {
    if (value.length === 0) url.searchParams.delete(title)
    else url.searchParams.set(title, JSON.stringify(value))
  }

  //фильтрация
  function filtration() {
    // отфильтрованные товары
    const filterProducts = products.filter(product => {
      return [...filters].every(filter => {
        const title = filter[0]
        const type = filter[1].type
        const value = filter[1].value
        //проверка на пустой фильтр
        if (!value.length) return true

        let productParam = product.data.body1
          .filter(slice => slice.slice_type === "characteristics")
          .map(slice => slice.items)
          .flat()
          .find(item => item.characteristic.document.data.name === title)?.value

        if (title === "Цена") productParam = product.data.price
        if (title === "Цвет")
          productParam = product.data.color_name.replace("ё", "е").toLowerCase()
        if (title === "Производитель")
          productParam = product.data.brand.document.data.name.replace("ё", "е")
        if (title === "Стикеры")
          productParam = product.data.body
            .filter(slice => slice.slice_type === "stickers")
            .map(slice => slice.items)
            .flat()
            .map(sticker => sticker.sticker.document.id)

        switch (type) {
          case "from to":
            return value[0] <= +productParam && value[1] >= +productParam
          case "maximum":
            return +value >= +productParam
          case "ratio":
          case "boolean":
            if (title !== "Стикеры") return productParam === value
            return value.every(id => productParam.includes(id))
          case "color":
          case "checkbox":
            return value.includes(productParam)
          default:
            return true
        }
      })
    })
    console.log(filterProducts)
    url.search = ""
    Array.from(filters).forEach(filter => {
      setUrl(filter[0], filter[1].value)
    })

    setShow(false)
    navigate(url.href)
    setFilterProducts(filterProducts)
  }
  //фильтрация при первом рендере
  React.useEffect(() => {
    if (url.search) filtration()
  }, [])
  //очистка фильтра
  function cleanFilter() {
    filters.clear()
    filtration()
  }

  // поля фильтра
  // сортировка блоков фильтра по порядку
  function sortByOrder(a, b) {
    return a[1].order - b[1].order
  }
  // сортировка значений по алфавиту и от меньшего к большему
  function sortValue(value1, value2) {
    const a = typeof value1 === "string" ? value1.toLowerCase() : value1
    const b = typeof value2 === "string" ? value2.toLowerCase() : value2
    return a > b ? 1 : a < b ? -1 : 0
  }
  const fields = [...fieldsFilter.entries()].sort(sortByOrder).map(item => {
    const title = item[0]
    const type = item[1].type
    const value = item[1].value
    const order = item[1].order
    switch (type) {
      case "from to":
        return (
          <BlockFromTo
            key={title}
            style={{ order }}
            title={title}
            set={[...value].sort(sortValue)}
            span={filters.get(title)?.value}
            setSpan={setFilterFromTo}
            slider={title === "Цена"}
          />
        )
      case "color":
        return (
          <BlockColors
            key={title}
            style={{ order }}
            title={title}
            allColors={[...value].sort(sortValue)}
            colors={filters.get(title)?.value ?? []}
            setColors={setFilterColor}
          />
        )
      case "checkbox":
        return (
          <BlockCheckbox
            key={title}
            style={{ order }}
            title={title}
            set={[...value].sort(sortValue)}
            selected={filters.get(title)?.value ?? []}
            setFilter={setFilterCheckbox}
          />
        )
      case "ratio":
        return (
          <BlockRatio
            key={title}
            style={{ order }}
            title={title}
            set={[...value].sort(sortValue)}
            selected={filters.get(title)?.value}
            setFilter={setFilterRatio}
          />
        )
      case "maximum":
        return (
          <BlockMax
            key={title}
            style={{ order }}
            title={title}
            set={[...value].sort(sortValue)}
            valueFilter={filters.get(title)?.value}
            setFilter={setFilterMaximum}
          />
        )
      case "boolean":
        return title === "Стикеры" ? (
          [...value]
            .sort(sortValue)
            .map(sticker => (
              <BlockBoolean
                key={sticker}
                style={{ order }}
                title={title}
                stickerId={sticker}
                setFilter={setFilterBoolean}
              />
            ))
        ) : (
          <BlockBoolean
            key={title}
            style={{ order }}
            title={title}
            valueFilter={!!filters.get(title)?.value}
            setFilter={setFilterBoolean}
          />
        )
      default:
        return null
    }
  })

  return (
    <Grid container style={{ width: "auto", position: "relative" }}>
      <Button onClick={() => setShow(!show)} className={classes.button}>
        <IconFilter className={classes.buttonIcon} />
        <Typography className={classes.buttonText}>Фильтр</Typography>
      </Button>

      <ButtonClean clean={cleanFilter} count={countFilter} />

      {second_variant ? (
        show ? (
          <Grid container className={classes.modal}>
            <Button
              onClick={() => setShow(!show)}
              className={classes.button + " " + classes.modalButtonBack}
            >
              <IconBack className={classes.modalButtonBackIcon} />
              <Typography variant="body2" className={classes.buttonText}>
                Назад
              </Typography>
            </Button>

            <Grid
              container
              justify="space-between"
              className={classes.modalTitle}
            >
              <Typography className={classes.modalTitleText}>
                Фильтер
              </Typography>
              <ButtonClean clean={cleanFilter} count={countFilter} />
            </Grid>

            <Grid
              container
              justify="space-between"
              alignContent="flex-start"
              className={classes.wrapperFilterBlock}
            >
              <Grid container direction="column" className={classes.column}>
                {fields.filter((el, i) => i % 2 === 0)}
              </Grid>
              <Grid container direction="column" className={classes.column}>
                {fields.filter((el, i) => i % 2 === 1)}
              </Grid>

              <Grid className={classes.wrapperButtonFilter}>
                <Button onClick={filtration} className={classes.buttonFilter}>
                  Отфильтровать
                </Button>
              </Grid>
            </Grid>
          </Grid>
        ) : null
      ) : desktop || show ? (
        <Grid container className={classes.modal}>
          {desktop ? null : (
            <>
              <Button
                onClick={() => setShow(!show)}
                className={classes.button + " " + classes.modalButtonBack}
              >
                <IconBack className={classes.modalButtonBackIcon} />
                <Typography variant="body2" className={classes.buttonText}>
                  Назад
                </Typography>
              </Button>

              <Grid
                container
                justify="space-between"
                className={classes.modalTitle}
              >
                <Typography className={classes.modalTitleText}>
                  Фильтер
                </Typography>
                <ButtonClean clean={cleanFilter} count={countFilter} />
              </Grid>
            </>
          )}

          <Grid
            container
            direction="column"
            className={classes.wrapperFilterBlock}
          >
            {fields}

            <Grid className={classes.wrapperButtonFilter}>
              <Button onClick={filtration} className={classes.buttonFilter}>
                Отфильтровать
              </Button>
            </Grid>
          </Grid>
        </Grid>
      ) : null}
    </Grid>
  )
}
