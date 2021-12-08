import React from "react"

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

function reducer(state, action) {
  switch (action.type) {
    case "ADD_PRODUCT_IN_CART":
      if (state.inCart(action.payload) !== 0) return { ...state }
      else {
        const cart = [...state.cart]
        cart.push({ product: action.payload, count: 1 })

        localStorage.setItem("cart", JSON.stringify(cart))
        return {
          ...state,
          cart: cart,
        }
      }

    case "ADD_REPAIR_IN_CART":
      if (action.payload.length === 0) return { ...state }

      const cart = [...state.cart]
      action.payload.forEach(repair => {
        if (state.inCart(repair) !== 0) return
        else {
          cart.push({ product: repair, count: 1 })
        }
      })

      localStorage.setItem("cart", JSON.stringify(cart))
      return {
        ...state,
        cart: cart,
      }

    case "DELETE_PRODUCT_FROM_CART":
      if (state.inCart(action.payload) === 0) return { ...state }
      else {
        const cart = [...state.cart]
        const index = cart.findIndex(
          item => item.product.id === action.payload.id
        )
        cart.splice(index, 1)

        localStorage.setItem("cart", JSON.stringify(cart))
        return {
          ...state,
          cart: cart,
        }
      }

    case "CLEAN_CART":
      return {
        ...state,
        cart: [],
      }

    case "INCREMENT_PRODUCT_COUNT":
      if (state.inCart(action.payload) === 99) return { ...state }
      else {
        const cart = [...state.cart]
        cart.find(item => item.product.id === action.payload.id).count++

        localStorage.setItem("cart", JSON.stringify(cart))
        return {
          ...state,
          cart: cart,
        }
      }

    case "DECREMENT_PRODUCT_COUNT":
      if (state.inCart(action.payload) === 1) return { ...state }
      else {
        const cart = [...state.cart]
        cart.find(item => item.product.id === action.payload.id).count--

        localStorage.setItem("cart", JSON.stringify(cart))
        return {
          ...state,
          cart: cart,
        }
      }

    case "ADD_PRODUCT_IN_FAVORITES":
      if (state.inFavorites(action.payload)) return { ...state }
      else {
        const favorites = [...state.favorites]
        favorites.push(action.payload)

        localStorage.setItem("favorites", JSON.stringify(favorites))
        return {
          ...state,
          favorites: favorites,
        }
      }

    case "DELETE_PRODUCT_FROM_FAVORITES":
      if (!state.inFavorites(action.payload)) return { ...state }
      else {
        const favorites = [...state.favorites]
        const index = favorites.findIndex(item => item.id === action.payload.id)
        favorites.splice(index, 1)

        localStorage.setItem("favorites", JSON.stringify(favorites))
        return {
          ...state,
          favorites: favorites,
        }
      }
    case "UPD_LAST_PRODUCTS": {
      return {
        ...state,
        last_products: [...action.payload],
      }
    }
    case "UPD_CART": {
      return {
        ...state,
        cart: action.payload,
      }
    }
    case "UPD_FAVORITES": {
      return {
        ...state,
        favorites: action.payload,
      }
    }
    default:
      throw new Error("Error action")
  }
}

const GlobalContextProvider = ({ children }) => {
  const initState = {
    favorites: JSON.parse(localStorage.getItem("favorites")) ?? [],
    cart: JSON.parse(localStorage.getItem("cart")) ?? [],
    inCart(product) {
      return this.cart.find(item => item.product.id === product.id)?.count ?? 0
    },
    inFavorites(product) {
      return this.favorites.find(item => item.id === product.id)
    },
    last_products: JSON.parse(localStorage.getItem("last_products")) ?? [],
    productAvailable() {
      return this.cart.some(item => !item.product.repair)
    },
    servicesAvailable() {
      return this.cart.some(item => item.product.repair)
    },
  }

  const [state, dispatch] = React.useReducer(reducer, initState)

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

/**
 * Компонент-обертка, содержит основное хранилище данных
 * @module src/context/GlobalContextProvider
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.children - объект с дочерними компонентами
 */
export default GlobalContextProvider
