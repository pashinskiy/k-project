import { useStaticQuery, graphql } from "gatsby"
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

    case "CLEAN_CART":
      return {
        ...state,
        cart: [],
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
    case "UPD_LAST_PRODUCTS": {
      return {
        ...state,
        last_products: [...action.payload],
      }
    }
    default:
      throw new Error("Error action")
  }
}

const GlobalContextProvider = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      allPrismicProduct {
        edges {
          node {
            id
            uid
            data {
              all_product_accessories {
                product_accessories {
                  document {
                    ... on PrismicProduct {
                      uid
                      id
                      data {
                        images {
                          image {
                            localFile {
                              childImageSharp {
                                gatsbyImageData
                              }
                            }
                            alt
                          }
                        }
                        price
                        name
                      }
                    }
                  }
                }
              }
              main_category {
                document {
                  ... on PrismicCategory {
                    id
                    data {
                      name
                    }
                  }
                }
              }
              brand {
                document {
                  ... on PrismicBrand {
                    id
                    data {
                      name
                      popular
                    }
                  }
                }
              }
              name
              price
              old_price
              color
              color_group
              images {
                image {
                  alt
                  localFile {
                    childImageSharp {
                      gatsbyImageData(height: 200)
                    }
                  }
                }
              }
              delivery {
                document {
                  ... on PrismicDelivery {
                    data {
                      body {
                        ... on PrismicDeliveryBodyDeliveryToCities {
                          id
                          items {
                            city_name
                            cost
                            delivery_description
                            timing
                          }
                        }
                      }
                      variants {
                        description
                        name
                      }
                    }
                  }
                }
              }
              credit {
                document {
                  ... on PrismicCredit {
                    data {
                      months_1
                      months_2
                      percent
                    }
                  }
                }
              }
              body {
                ... on PrismicProductBodyStickers {
                  slice_type
                  items {
                    sticker {
                      document {
                        ... on PrismicSticker {
                          id
                          data {
                            image {
                              alt
                              localFile {
                                publicURL
                                childImageSharp {
                                  fluid(maxHeight: 35) {
                                    aspectRatio
                                    src
                                    srcSet
                                    srcSetWebp
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                ... on PrismicProductBodyFeatures {
                  slice_type
                  items {
                    feature
                    image {
                      alt
                      localFile {
                        childImageSharp {
                          gatsbyImageData(height: 30)
                        }
                      }
                    }
                  }
                }
              }
              body1 {
                ... on PrismicProductBody1Characteristics {
                  id
                  slice_type
                  items {
                    characteristic {
                      document {
                        ... on PrismicCharacteristic {
                          id
                          data {
                            name
                            variant
                            order
                          }
                        }
                      }
                    }
                    value
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const initState = {
    favorites: JSON.parse(localStorage.getItem("favorites")) ?? [],
    cart: JSON.parse(localStorage.getItem("cart")) ?? [],
    inCart(id) {
      return this.cart.find(product => product.id === id)?.count ?? 0
    },
    inFavorites(id) {
      return this.favorites.includes(id)
    },
    last_products: JSON.parse(localStorage.getItem("last_products")) ?? [],
    allPrismicProduct: data.allPrismicProduct,
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
