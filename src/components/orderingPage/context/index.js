import React from "react"
export const OrderingStateContext = React.createContext()
export const OrderingDispatchContext = React.createContext()

function reducer(state, action) {
  switch (action.type) {
    case "SET_CITY":
      return {
        ...state,
        city: action.payload,
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

const initOrderingState = {
  city: false,
  variantDelivery: "standart",
  date: false,
  time: false,
  street: false,
  house: false,
  apartment: false,
  variantPay: "онлайн",
  name: false,
  phone: false,
  validationStreet() {
    if (!this.street) return false
    return /^[0-9a-zа-я\s]+$/i.test(this.street)
  },
  validationHouse() {
    if (!this.house) return false
    return /^\s*[0-9]+\s*$/.test(this.house)
  },
  validationApartament() {
    if (!this.apartment) return false
    return /^\s*[0-9]+\s*$/.test(this.apartment)
  },
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
      !Object.values(this).some(value => !value) &&
      this.validationHouse() &&
      this.validationApartament() &&
      this.validationPhone() &&
      this.validationPhone()
    )
  },
}

export default function OrderingContext({ children }) {
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
