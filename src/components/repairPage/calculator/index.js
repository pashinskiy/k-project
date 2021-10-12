import React from "react"
import { navigate } from "gatsby"
import { makeStyles, Typography } from "@material-ui/core"

import { GlobalDispatchContext } from "../../../context/GlobalContextProvider"
import SelectCategoryAndService from "../selectCategoryAndService"

import Plus from "../../../../static/svg/plus.svg"
import Card from "../card"

const useStyle = makeStyles(theme => ({
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",

    background: theme.palette.background.main,

    borderRadius: "0.78vw",
    padding: "3.43vw",
    "@media(min-width: 1280px)": {
      borderRadius: 10,
      padding: 44,
    },
    "@media(max-width: 1025px)": {
      flexDirection: "column",
      alignItems: "center",
      borderRadius: "1.19vw",
      padding: "5.27vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "8.69vw",
      borderRadius: 0,
      padding: 0,
    },
  },
  categoryAndServicesWrapper: {
    width: "39.06vw",
    "@media(min-width: 1280px)": {
      width: 500,
    },
    "@media(max-width: 1025px)": {
      width: "59.95vw",
    },
    "@media(max-width: 767px)": {
      width: "100%",
    },
  },
  title_wrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    marginTop: "3.43vw",
    "@media(min-width: 1280px)": {
      marginTop: 44,
    },
    "@media(max-width: 1025px)": {
      marginTop: "5.27vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "10.62vw",
    },
  },
  title_text: {
    fontWeight: 600,
    lineHeight: 1.21,

    fontSize: "1.32vw",
    "@media(min-width: 1280px)": {
      fontSize: 17,
    },
    "@media(max-width: 1025px)": {
      fontSize: "2.03vw",
    },
    "@media(max-width: 767px)": {
      fontSize: "4.1vw",
    },

    "& font": {
      ...theme.typography.body2,
      fontWeight: 600,
      lineHeight: 1.21,

      fontSize: "1.32vw",
      "@media(min-width: 1280px)": {
        fontSize: 17,
      },
      "@media(max-width: 1025px)": {
        fontSize: "2.03vw",
      },
      "@media(max-width: 767px)": {
        fontSize: "4.1vw",
      },
    },
  },
  title_delete: {
    background: "transparent",
    minWidth: 0,
    padding: 0,
    border: "none",
    cursor: "pointer",

    ...theme.typography.body2,
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
  addRepair: {
    minWidth: 0,
    border: "none",
    padding: 0,
    cursor: "pointer",
    background: theme.palette.background.secondary,

    display: "flex",
    alignItems: "center",

    marginTop: "3.43vw",
    borderRadius: "0.93vw",
    padding: "0.62vw 0.93vw",
    "@media(min-width: 1280px)": {
      marginTop: 44,
      borderRadius: 12,
      padding: "8px 12px",
    },
    "@media(max-width: 1025px)": {
      marginTop: "5.27vw",
      borderRadius: "1.43vw",
      padding: "0.95vw 1.43vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "10.62vw",
      borderRadius: "2.89vw",
      padding: "1.93vw 2.89vw",
    },
  },
  addRepair_icon: {
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
  addRepair_text: {
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
  panelAddCartWrapper: {
    width: "39.06vw",
    "@media(min-width: 1280px)": {
      width: 500,
    },
    "@media(max-width: 1025px)": {
      marginTop: "5.27vw",
      width: "59.95vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "15.94vw",
      width: "100%",
    },
  },
  wrapperTotalPriceBlock: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",

    marginTop: "3.43vw",
    "@media(min-width: 1280px)": {
      marginTop: 44,
    },
    "@media(max-width: 1025px)": {
      marginTop: "5.27vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "15.94vw",
    },
  },
  wrapperTotalPrice: {
    display: "flex",
    alignItems: "flex-end",
  },
  price_text: {
    fontWeight: 400,
    lineHeight: 1.21,

    fontSize: "1.32vw",
    "@media(min-width: 1280px)": {
      fontSize: 17,
    },
    "@media(max-width: 1025px)": {
      fontSize: "2.03vw",
    },
    "@media(max-width: 767px)": {
      fontSize: "4.1vw",
    },
  },
  price_text_accent: {
    ...theme.typography.body2,
    fontWeight: 700,
    lineHeight: 1.21,

    fontSize: "2.18vw",
    "@media(min-width: 1280px)": {
      fontSize: 28,
    },
    "@media(max-width: 1025px)": {
      fontSize: "3.35vw",
    },
    "@media(max-width: 767px)": {
      fontSize: "6.76vw",
    },
  },
  price_text_through: {
    fontWeight: 400,
    lineHeight: 1.21,
    color: "#838383",
    textDecoration: "line-through",

    marginLeft: "0.62vw",
    fontSize: "0.93vw",
    "@media(min-width: 1280px)": {
      marginLeft: 8,
      fontSize: 12,
    },
    "@media(max-width: 1025px)": {
      marginLeft: "0.95vw",
      fontSize: "1.43vw",
    },
    "@media(max-width: 767px)": {
      marginLeft: "1.93vw",
      fontSize: "2.89vw",
    },
  },
  buttonAddCart: {
    width: "100%",
    background: theme.palette.background.accent,
    border: "none",
    cursor: "pointer",

    fontWeight: 700,
    lineHeight: 1.21,
    color: theme.palette.color.mainContrast,

    marginTop: "1.56vw",
    borderRadius: "0.93vw",
    padding: "0.89vw",
    fontSize: "1.09vw",
    "@media(min-width: 1280px)": {
      marginTop: 20,
      borderRadius: 12,
      padding: 11.5,
      fontSize: 14,
    },
    "@media(max-width: 1025px)": {
      marginTop: "2.39vw",
      borderRadius: "1.43vw",
      padding: "1.37vw",
      fontSize: "1.67vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "4.83vw",
      borderRadius: "2.89vw",
      padding: "2.77vw",
      fontSize: "3.38vw",
    },
  },
}))

/**
 * Калькулятор ремонта
 * @module src/components/repairPage/сalculator
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.repairDocs - массив документов ремонта полученный из prismic
 */
export default function Calculator({ repairDocs }) {
  const classes = useStyle()
  const dispatch = React.useContext(GlobalDispatchContext)

  const initDataRepair = React.useMemo(() => {
    const services = repairDocs[0].data.body.filter(
      slice => slice.slice_type === "service"
    )
    return {
      doc: repairDocs[0],
      services,
      selectServices: [services[0]],
      addSelectService() {
        this.selectServices.push(this.services[0])
      },
      deleteSelectService(index) {
        this.selectServices.splice(index, 1)
      },
      setSelectService(index, newValue) {
        this.selectServices[index] = newValue
      },
    }
  }, [])

  const [selectRepairs, setSelectRepairs] = React.useState([
    { ...initDataRepair },
  ])

  function addRepair() {
    const newSelectRepairs = [...selectRepairs]
    newSelectRepairs.push({ ...initDataRepair })
    setSelectRepairs(newSelectRepairs)
  }
  function deleteRepair(index) {
    const newSelectRepairs = [...selectRepairs]
    newSelectRepairs.splice(index, 1)
    setSelectRepairs(newSelectRepairs)
  }

  function setDoc(value, index) {
    if (value.data.category === selectRepairs[index].doc.data.category) return

    const newSelectRepairs = [...selectRepairs]
    const newServices = value.data.body.filter(
      slice => slice.slice_type === "service"
    )

    newSelectRepairs[index] = {
      ...newSelectRepairs[index],
      doc: value,
      services: newServices,
      selectServices: [newServices[0]],
    }

    setSelectRepairs(newSelectRepairs)
  }
  function addService(indexRepair) {
    const newSelectRepairs = [...selectRepairs]
    newSelectRepairs[indexRepair].addSelectService()
    setSelectRepairs(newSelectRepairs)
  }
  function setService(indexRepair, indexService, newValue) {
    const newSelectRepairs = [...selectRepairs]
    newSelectRepairs[indexRepair].setSelectService(indexService, newValue)
    setSelectRepairs(newSelectRepairs)
  }
  function deleteService(indexRepair, indexService) {
    const newSelectRepairs = [...selectRepairs]
    newSelectRepairs[indexRepair].deleteSelectService(indexService)
    setSelectRepairs(newSelectRepairs)
  }

  const totalPrice = React.useMemo(() =>
    selectRepairs.reduce(
      (totalSum, repair) =>
        totalSum +
        repair.selectServices.reduce(
          (sum, service) => sum + service.primary.price,
          0
        ),
      0
    )
  )

  const totalOldPrice = React.useMemo(() =>
    selectRepairs.reduce(
      (totalSum, repair) =>
        totalSum +
        repair.selectServices.reduce(
          (sum, service) => sum + service.primary.old_price,
          0
        ),
      0
    )
  )

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

  function addCart() {
    const payload = selectRepairs.map(repair => {
      let id = ""
      let price = 0
      let oldPrice = 0
      repair.selectServices.forEach(service => {
        id += `/${service.id}`
        price += service.primary.price
        oldPrice += service.primary.old_price ?? 0
      })

      return {
        id: id.slice(1),
        repair: true,
        data: {
          image: repair.doc.data.image,
          category: repair.doc.data.category,
          price: price,
          old_price: oldPrice,
          services: repair.selectServices,
        },
      }
    })

    dispatch({
      type: "ADD_REPAIR_IN_CART",
      payload: payload,
    })
    navigate("/cart")
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.categoryAndServicesWrapper}>
        <Typography className={classes.title_text}>
          Какое устройство нужно починить?
        </Typography>

        <SelectCategoryAndService
          repairDocs={repairDocs}
          data={selectRepairs[0]}
          setDoc={value => setDoc(value, 0)}
          addService={() => addService(0)}
          setService={(indexService, newValue) =>
            setService(0, indexService, newValue)
          }
          deleteService={indexService => deleteService(0, indexService)}
        />

        {selectRepairs.map((repair, i) =>
          i === 0 ? null : (
            <>
              <div className={classes.title_wrapper}>
                <Typography className={classes.title_text}>
                  Какое <font>еще</font> устройство нужно починить?
                </Typography>

                <button
                  onClick={() => deleteRepair(i)}
                  className={classes.title_delete}
                >
                  Удалить
                </button>
              </div>

              <SelectCategoryAndService
                repairDocs={repairDocs}
                data={repair}
                setDoc={value => setDoc(value, i)}
                addService={() => addService(i)}
                setService={(indexService, newValue) =>
                  setService(i, indexService, newValue)
                }
                deleteService={indexService => deleteService(i, indexService)}
              />
            </>
          )
        )}

        <button onClick={addRepair} className={classes.addRepair}>
          <div className={classes.addRepair_icon}>
            <Plus />
          </div>

          <Typography variant="body2" className={classes.addRepair_text}>
            Добавить устройство
          </Typography>
        </button>
      </div>

      <div className={classes.panelAddCartWrapper}>
        {selectRepairs.map(repair => (
          <Card repair={repair} />
        ))}

        <div className={classes.wrapperTotalPriceBlock}>
          <Typography className={classes.price_text}>Итого:</Typography>

          <div className={classes.wrapperTotalPrice}>
            <Typography className={classes.price_text_accent}>
              {priceMod(totalPrice)} ₽
            </Typography>

            <Typography className={classes.price_text_through}>
              {priceMod(totalOldPrice)} ₽
            </Typography>
          </div>
        </div>

        <button onClick={addCart} className={classes.buttonAddCart}>
          В корзину
        </button>
      </div>
    </div>
  )
}
