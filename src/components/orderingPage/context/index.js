import React from "react"
import { useStaticQuery, graphql } from "gatsby"
export const OrderingStateContext = React.createContext()
export const OrderingDispatchContext = React.createContext()

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_USE_DATA_DELIVERY":
      return {
        ...state,
        useDataDelivery: !state.useDataDelivery,
      }
    case "SET_CITY":
      return {
        ...state,
        city: action.payload,
        variantDelivery: "standart",
      }
    case "SET_REPAIR_CITY":
      return {
        ...state,
        repairCity: action.payload,
        repairVariantDelivery: "courier",
      }
    case "SET_DATE":
      return {
        ...state,
        date: action.payload,
      }
    case "SET_REPAIR_DATE":
      return {
        ...state,
        repairDate: action.payload,
      }
    case "SET_VARIANT_DELIVERY":
      return {
        ...state,
        variantDelivery: action.payload,
      }
    case "SET_REPAIR_VARIANT_DELIVERY":
      return {
        ...state,
        repairVariantDelivery: action.payload,
      }
    case "SET_TIME":
      return {
        ...state,
        time: action.payload,
      }
    case "SET_REPAIR_TIME":
      return {
        ...state,
        repairTime: action.payload,
      }
    case "SET_STREET":
      return {
        ...state,
        street: action.payload,
      }
    case "SET_REPAIR_STREET":
      return {
        ...state,
        repairStreet: action.payload,
      }
    case "SET_HOUSE":
      return {
        ...state,
        house: action.payload,
      }
    case "SET_REPAIR_HOUSE":
      return {
        ...state,
        repairHouse: action.payload,
      }
    case "SET_APARTAMENT":
      return {
        ...state,
        apartment: action.payload,
      }
    case "SET_REPAIR_APARTAMENT":
      return {
        ...state,
        repairApartment: action.payload,
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
    case "SET_EMAIL":
      return {
        ...state,
        email: action.payload,
      }
    case "SET_INN":
      return {
        ...state,
        inn: action.payload,
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
        prismicRepairCities {
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
  const repairCities = data.prismicRepairCities.data.cities.map(
    item => item.city
  )

  const initOrderingState = {
    useDataDelivery: false,

    cities: cities,
    repairCities: repairCities,

    city: "",
    repairCity: "",

    variantDelivery: "standart",
    repairVariantDelivery: "courier",

    date: "",
    repairDate: "",

    time: "",
    repairTime: "",

    street: false,
    repairStreet: false,

    house: false,
    repairHouse: false,

    apartment: false,
    repairApartment: false,

    variantPay: "онлайн",
    name: false,
    phone: "+7",
    email: false,
    inn: false,

    validationCity() {
      if (!this.city) return false
      return this.cities.includes(this.city)
    },
    validationRepairCity() {
      if (!this.repairCity) return false
      return this.repairCities.includes(this.repairCity)
    },
    validationName() {
      if (!this.name) return false
      return /^[a-zа-я\s]+$/i.test(this.name)
    },
    validationPhone() {
      if (!this.phone) return false
      return true
    },
    validationEmail() {
      if (!this.email) return false
      return true
    },
    validationInn() {
      return /^\d{10}$/i.test(this.inn)
    },
    validationAll(legalEntities) {
      if (legalEntities && !this.validationInn()) return false

      return (
        (this.validationCity() || this.validationRepairCity()) &&
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
