import React from "react"
import { useStaticQuery, graphql } from "gatsby"
export const OrderingStateContext = React.createContext()
export const OrderingDispatchContext = React.createContext()

function reducer(state, action) {
  switch (action.type) {
    case "SET_FOCUSING_ON_FIELD":
      return {
        ...state,
        focusingOnField: action.payload,
      }
    case "SET_CITY":
      return {
        ...state,
        city: action.payload,
        variantDelivery: "standart",
      }
    case "SET_DATE":
      return {
        ...state,
        date: action.payload,
      }
    case "SET_VARIANT_DELIVERY":
      return {
        ...state,
        variantDelivery: action.payload,
      }
    case "SET_TIME":
      return {
        ...state,
        time: action.payload,
      }
    case "SET_STREET":
      return {
        ...state,
        street: action.payload,
      }
    case "SET_HOUSE":
      return {
        ...state,
        house: action.payload,
      }
    case "SET_APARTAMENT":
      return {
        ...state,
        apartment: action.payload,
      }
    case "SET_VARIANT_PAY":
      return {
        ...state,
        variantPay: action.payload,
      }
    case "SET_NAME":
      return {
        ...state,
        name: action.payload,
      }
    case "SET_PHONE":
      return {
        ...state,
        phone: action.payload,
      }
    default:
      throw new Error("Error action")
  }
}

/**
 * Компонент-обертка, содержит хранилище данных страницы оформления заказа
 * @module src/components/orderingPage/context
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.children - объект с дочерними компонентами
 */
export default function OrderingContext({ children }) {
  const data = useStaticQuery(
    graphql`
      {
        prismicDeliveryCities {
          data {
            cities {
              city
            }
          }
        }
      }
    `
  )

  const cities = data.prismicDeliveryCities.data.cities.map(item => item.city)

  const initOrderingState = {
    focusingOnField: false,
    cities: cities,
    city: "",
    variantDelivery: "standart",
    date: false,
    time: false,
    street: false,
    house: false,
    apartment: false,
    variantPay: "онлайн",
    name: false,
    phone: "+7",
    validationCity() {
      if (!this.city) return false
      return this.cities.includes(this.city)
    },
    // validationStreet() {
    //   if (!this.street) return false
    //   return /^[0-9a-zа-яё\s]+$/i.test(this.street)
    // },
    // validationHouse() {
    //   if (!this.house) return false
    //   return /^\s*[0-9]+\s*$/.test(this.house)
    // },
    // validationApartament() {
    //   if (!this.apartment) return false
    //   return /^\s*[0-9]+\s*$/.test(this.apartment)
    // },
    validationName() {
      if (!this.name) return false
      return /^[a-zа-я\s]+$/i.test(this.name)
    },
    validationPhone() {
      if (!this.phone) return false
      return /^\s*(\+?[78]-?\(?\d{3}\)?-?)?\d{3}-?\d{2}-?\d{2}\s*$/.test(
        this.phone
      )
    },
    validationAll() {
      return (
        !Object.keys(this).some(
          key => !this[key] && key !== "focusingOnField"
        ) &&
        this.validationCity() &&
        // this.validationStreet() &&
        // this.validationHouse() &&
        // this.validationApartament() &&
        this.validationName() &&
        this.validationPhone()
      )
    },
  }

  const [orderingState, orderingDispatch] = React.useReducer(
    reducer,
    initOrderingState
  )
  return (
    <OrderingStateContext.Provider value={orderingState}>
      <OrderingDispatchContext.Provider value={orderingDispatch}>
        {children}
      </OrderingDispatchContext.Provider>
    </OrderingStateContext.Provider>
  )
}
