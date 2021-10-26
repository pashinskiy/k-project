import React from "react"
import { makeStyles, Typography } from "@material-ui/core"
import { graphql } from "gatsby"

import Seo from "../components/seo"
import Layout from "../components/layout"

import HeaderWithIcon from "../components/headers/headerWithIcon"
import Calculator from "../components/repairPage/calculator"

import Hammer from "../../static/svg/hammer.svg"
import PopularRepair from "../components/repairPage/popularRepair"

const useStyles = makeStyles(theme => ({
  grayPanel: {
    overflow: "hidden",
    WebkitBackfaceVisibility: "hidden",
    MozBackfaceVisibility: "hidden",
    WebkitTransform: "translate3d(0, 0, 0)",
    MozTransform: "translate3d(0, 0, 0)",

    width: "100%",
    background: theme.palette.background.secondary,

    borderRadius: "1.56vw",
    padding: "0.78vw",
    "@media(min-width: 1280px)": {
      borderRadius: 20,
      padding: 10,
    },
    "@media(max-width: 1025px)": {
      borderRadius: "2.39vw",
      padding: "1.19vw",
    },
    "@media(max-width: 767px)": {
      overflow: "visible",
      borderRadius: 0,
      padding: 0,
      background: theme.palette.background.main,
    },
  },
  grayPanel_title: {
    fontWeight: 700,
    lineHeight: 1.21,

    marginTop: "2.18vw",
    padding: "0.78vw",
    fontSize: "2.18vw",
    "@media(min-width: 1280px)": {
      marginTop: 28,
      padding: 10,
      fontSize: 28,
    },
    "@media(max-width: 1025px)": {
      marginTop: "3.35vw",
      padding: "1.19vw",
      fontSize: "3.35vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "10.62vw",
      padding: 0,
      fontSize: "5.31vw",
    },
  },
}))

const IndexPage = ({ data }) => {
  const classes = useStyles()

  const popularRepair = React.useMemo(() => {
    const popularRepair = []
    data.allPrismicRepair.edges.forEach(edge =>
      edge.node.data.body.forEach(slice => {
        if (
          slice.slice_type !== "service" ||
          slice?.primary?.popular !== "да"
        ) {
          return
        }
        popularRepair.push({
          id: slice.id,
          repair: true,
          data: {
            image: edge.node.data.image,
            imageForPopular: edge.node.data.imageForPopular,
            category: edge.node.data.category,
            price: slice?.primary?.price,
            old_price: slice?.primary?.old_price,
            services: [slice],
          },
        })
      })
    )
    return popularRepair
  }, [data])

  const [show, setShow] = React.useState(false)

  function open(e) {
    e.preventDefault()
    setShow(e.nativeEvent.ctrlKey)
  }

  return (
    <Layout>
      <Seo title="Favorites" />
      <HeaderWithIcon
        icon={<Hammer />}
        title="Ремонт устройств"
        divider={false}
      />

      {show ? (
        <div className={classes.grayPanel}>
          <PopularRepair repairs={popularRepair} />

          <Typography className={classes.grayPanel_title}>
            У вас что-то сломалось?
          </Typography>

          <Calculator
            repairDocs={data.allPrismicRepair.edges.map(edge => edge.node)}
          />
        </div>
      ) : (
        <Typography onClick={open}>Страница в разработке</Typography>
      )}
    </Layout>
  )
}

/**
 * Страница ремонта
 * @module src/page/repair
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.data - объект данных полученый из prismic
 */
export default IndexPage

export const query = graphql`
  query Repair {
    allPrismicRepair {
      edges {
        node {
          data {
            category
            image {
              alt
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 100)
                }
              }
            }
            imageForPopular: image {
              alt
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 211
                    height: 129
                    transformOptions: { cropFocus: NORTHEAST }
                  )
                }
              }
            }
            body {
              ... on PrismicRepairBodyService {
                id
                slice_type
                primary {
                  name
                  old_price
                  popular
                  price
                }
              }
            }
          }
        }
      }
    }
  }
`
