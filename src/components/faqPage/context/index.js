import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const FaqStateContext = React.createContext()
export const FaqDispatchContext = React.createContext()

function reducer(state, action) {
  switch (action.type) {
    case "SET_COMPONENT":
      return {
        ...state,
        component: action.payload,
      }
    case "SET_SEARCH":
      return {
        ...state,
        search: action.payload,
      }
    default:
      throw new Error("Error action")
  }
}

/**
 * Компонент с хранилищем данных страницы faq
 * @module components/faqPage/context
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.children - объект с дочерними компонентами
 */
export default function FaqContext({ children }) {
  const data = useStaticQuery(graphql`
    {
      allPrismicGroupQuestion {
        edges {
          node {
            id
            data {
              order
              group_name
              body {
                ... on PrismicGroupQuestionBodyQuestionSubgroup {
                  id
                  slice_type
                  primary {
                    order
                    subgroup_name
                  }
                  items {
                    question {
                      document {
                        ... on PrismicQuestion {
                          id
                          data {
                            question
                            body {
                              ... on PrismicQuestionBodyText {
                                id
                                slice_type
                                primary {
                                  order
                                  text {
                                    text
                                  }
                                }
                              }
                              ... on PrismicQuestionBodyImage {
                                id
                                slice_type
                                primary {
                                  order
                                  image {
                                    alt
                                    localFile {
                                      childImageSharp {
                                        gatsbyImageData
                                      }
                                    }
                                  }
                                }
                              }
                              ... on PrismicQuestionBodyInfo {
                                id
                                slice_type
                                primary {
                                  order
                                  text {
                                    text
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
              }
            }
          }
        }
      }
    }
  `)

  const initFaqState = {
    component: "main",
    search: "",
    groupsQuestions: data.allPrismicGroupQuestion.edges.map(edge => edge.node),
  }

  const [faqState, faqDispatch] = React.useReducer(reducer, initFaqState)

  return (
    <FaqStateContext.Provider value={faqState}>
      <FaqDispatchContext.Provider value={faqDispatch}>
        {children}
      </FaqDispatchContext.Provider>
    </FaqStateContext.Provider>
  )
}
