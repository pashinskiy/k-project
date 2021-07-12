import React from "react"

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

function reducer(state, action) {
  switch (action.type) {
    case "ADD_PRODUCT_IN_CART":
      if (state.inCart(action.payload) !== 0) return { ...state }
      else {
        const cart = [...state.cart]
        cart.push({ id: action.payload, count: 1 })

        localStorage.setItem("cart", JSON.stringify(cart))
        return {
          ...state,
          cart: cart,
        }
      }

    case "DELETE_PRODUCT_FROM_CART":
      if (state.inCart(action.payload) === 0) return { ...state }
      else {
        const cart = [...state.cart]
        const index = cart.findIndex(product => product.id === action.payload)
        cart.splice(index, 1)

        // console.log(state.cart)

        localStorage.setItem("cart", JSON.stringify(cart))
        return {
          ...state,
          cart: cart,
        }
      }

    case "INCREMENT_PRODUCT_COUNT":
      if (state.inCart(action.payload) === 99) return { ...state }
      else {
        const cart = [...state.cart]
        cart.find(product => product.id === action.payload).count++

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
        cart.find(product => product.id === action.payload).count--

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
        const index = favorites.indexOf(action.payload)
        favorites.splice(index, 1)

        localStorage.setItem("favorites", JSON.stringify(favorites))
        return {
          ...state,
          favorites: favorites,
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
    inCart(id) {
      return this.cart.find(product => product.id === id)?.count ?? 0
    },
    inFavorites(id) {
      return this.favorites.includes(id)
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

export default GlobalContextProvider
