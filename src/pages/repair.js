import React from "react"
import HeaderWithIcon from "../components/headers/headerWithIcon"
import { makeStyles, Typography } from "@material-ui/core"
import { graphql, navigate } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"

import { GlobalDispatchContext } from "../context/GlobalContextProvider"
import Select from "../components/repairPage/select"
import WrapperWithTitle from "../components/repairPage/wrapperWithTitle"
import CheckboxList from "../components/repairPage/checkboxList"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",
  },
}))

const IndexPage = ({ data }) => {
  const classes = useStyles()
  const dispatch = React.useContext(GlobalDispatchContext)

  const repairDocs = data.allPrismicRepair.edges.map(edge => edge.node)
  const [activeDoc, setActiveDoc] = React.useState(repairDocs[0])
  const [services, setServices] = React.useState([])

  const total = services.reduce((sum, service) => sum + service.price, 0)

  function setCategory(value) {
    setActiveDoc(
      repairDocs.find(repairDoc => repairDoc.data.category === value)
    )
  }

  function setService(value) {
    const newServisec = [...services]
    const index = services.findIndex(service => service.name === value.name)

    if (index === -1) newServisec.push(value)
    else newServisec.splice(index, 1)

    setServices(newServisec)
  }

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
    dispatch({
      type: "ADD_PRODUCT_IN_CART",
      payload: {
        id: activeDoc.id + "_" + Date.now(),
        repair: true,
        data: {
          category: activeDoc.data.category,
          price: total,
          services: services,
        },
      },
    })
    navigate("/cart")
  }

  return (
    <Layout>
      <Seo title="Favorites" />
      <HeaderWithIcon title="Ремонт" divider={false} />

      <WrapperWithTitle title="Выберите категорию">
        <Select
          options={repairDocs.map(repairDoc => repairDoc.data.category)}
          afterChange={setCategory}
        />
      </WrapperWithTitle>

      <WrapperWithTitle title="Выберите услуги">
        <CheckboxList
          list={activeDoc.data.services.map(service => ({
            name: service.name,
            price: service.price,
          }))}
          selectServices={services}
          afterChange={setService}
        />
      </WrapperWithTitle>

      <Typography>
        Итого: <b>{priceMod(total) + " ₽"}</b>
      </Typography>

      <button onClick={addCart}>
        <Typography>Добавить</Typography>
      </button>
    </Layout>
  )
}

/**
 * Страница избранного
 * @module src/page/favorites
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.data - объект данных полученый из prismic
 */
export default IndexPage

export const query = graphql`
  query Repair {
    allPrismicRepair {
      edges {
        node {
          id
          data {
            category
            services {
              name
              price
            }
          }
        }
      }
    }
  }
`
