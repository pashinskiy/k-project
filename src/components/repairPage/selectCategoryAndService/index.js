import React from "react"
import { makeStyles, Typography } from "@material-ui/core"

import SelectCategory from "./selectCategory"
import SelectService from "./selectService"

import Trash from "../../../../static/svg/trash.svg"
import Plus from "../../../../static/svg/plus.svg"

const useStyle = makeStyles(theme => ({
  title: {
    fontWeight: 600,
    lineHeight: 1.21,

    marginTop: "1.56vw",
    marginBottom: "1.09vw",
    fontSize: "1.32vw",
    "@media(min-width: 1280px)": {
      marginTop: 20,
      marginBottom: 14,
      fontSize: 17,
    },
    "@media(max-width: 1025px)": {
      marginTop: "2.39vw",
      marginBottom: "1.67vw",
      fontSize: "2.03vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "4.83vw",
      marginBottom: "3.38vw",
      fontSize: "4.1vw",
    },
  },
  addService_wrapper: {
    display: "flex",
    justifyContent: "space-between",

    marginTop: "0.46vw",
    "@media(min-width: 1280px)": {
      marginTop: 6,
    },
    "@media(max-width: 1025px)": {
      marginTop: "0.71vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "1.44vw",
    },
  },
  addService_selectService: {
    width: "90.8%",
    "@media(max-width: 767px)": {
      width: "87.15%",
    },
  },
  addService_delete: {
    minWidth: 0,
    border: "none",
    background: theme.palette.background.accent,
    cursor: "pointer",

    width: "3.28vw",
    height: "3.28vw",
    padding: "0.85vw",
    borderRadius: "0.93vw",
    "@media(min-width: 1280px)": {
      width: 42,
      height: 42,
      padding: 11,
      borderRadius: 12,
    },
    "@media(max-width: 1025px)": {
      width: "5.03vw",
      height: "5.03vw",
      padding: "1.31vw",
      borderRadius: "1.43vw",
    },
    "@media(max-width: 767px)": {
      width: "10.14vw",
      height: "10.14vw",
      padding: "2.65vw",
      borderRadius: "2.89vw",
    },
  },
  buttonAddService: {
    minWidth: 0,
    border: "none",
    padding: 0,
    cursor: "pointer",
    background: theme.palette.background.secondary,

    display: "flex",
    alignItems: "center",

    marginTop: "1.09vw",
    borderRadius: "0.93vw",
    padding: "0.62vw 0.93vw",
    "@media(min-width: 1280px)": {
      marginTop: 14,
      borderRadius: 12,
      padding: "8px 12px",
    },
    "@media(max-width: 1025px)": {
      marginTop: "1.67vw",
      borderRadius: "1.43vw",
      padding: "0.95vw 1.43vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "3.38vw",
      borderRadius: "2.89vw",
      padding: "1.93vw 2.89vw",
    },
  },
  buttonAddService_icon: {
    display: "flex",

    marginRight: "0.62vw",
    width: "0.93vw",
    height: "0.93vw",
    "@media(min-width: 1280px)": {
      marginRight: 8,
      width: 12,
      height: 12,
    },
    "@media(max-width: 1025px)": {
      marginRight: "0.95vw",
      width: "1.43vw",
      height: "1.43vw",
    },
    "@media(max-width: 767px)": {
      marginRight: "1.93vw",
      width: "2.89vw",
      height: "2.89vw",
    },
  },
  buttonAddService_text: {
    fontWeight: 400,
    lineHeight: 1.21,

    fontSize: "1.09vw",
    "@media(min-width: 1280px)": {
      fontSize: 14,
    },
    "@media(max-width: 1025px)": {
      fontSize: "1.67vw",
    },
    "@media(max-width: 767px)": {
      fontSize: "3.38vw",
    },
  },
}))

/**
 * Выбор категории и услуг ремонта
 * @module src/components/repairPage/selectCategoryAndService
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.repairDocs - массив документов ремонта полученный из prismic
 */
export default function SelectCategoryAndService({
  repairDocs,
  data,
  setDoc,
  addService,
  setService,
  deleteService,
}) {
  const classes = useStyle()

  const activeDoc = data.doc
  const options = data.services
  const selectOptions = data.selectServices

  function setCategory(value) {
    if (value === activeDoc.data.category) return

    const newDoc = repairDocs.find(
      repairDoc => repairDoc.data.category === value
    )

    setDoc(newDoc)
  }

  return (
    <>
      <SelectCategory
        options={repairDocs.map(repairDoc => repairDoc.data.category)}
        selectOption={activeDoc.data.category}
        afterChange={setCategory}
      />

      <Typography className={classes.title}>Что требуется?</Typography>

      <SelectService
        options={options}
        selectOption={selectOptions[0]}
        afterChange={value => setService(0, value)}
      />

      {selectOptions.map((_, i) =>
        i === 0 ? null : (
          <div key={`option_${i}`} className={classes.addService_wrapper}>
            <div className={classes.addService_selectService}>
              <SelectService
                options={options}
                selectOption={selectOptions[i]}
                afterChange={value => setService(i, value)}
              />
            </div>

            <button
              onClick={() => deleteService(i)}
              className={classes.addService_delete}
            >
              <Trash />
            </button>
          </div>
        )
      )}

      <button onClick={addService} className={classes.buttonAddService}>
        <div className={classes.buttonAddService_icon}>
          <Plus />
        </div>

        <Typography variant="body2" className={classes.buttonAddService_text}>
          Добавить услугу
        </Typography>
      </button>
    </>
  )
}
