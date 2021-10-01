import React from "react"
import HeaderWithIcon from "../components/headers/headerWithIcon"
import { makeStyles, Typography } from "@material-ui/core"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"

import { GlobalStateContext } from "../context/GlobalContextProvider"
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
  const state = React.useContext(GlobalStateContext)

  const repairDocs = data.allPrismicRepair.edges.map(edge => edge.node)
  const [activeDoc, setActiveDoc] = React.useState(repairDocs[0])

  function setCategory(value) {
    setActiveDoc(
      repairDocs.find(repairDoc => repairDoc.data.category === value)
    )
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
        />
      </WrapperWithTitle>
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
