import React from "react"
import { makeStyles, useMediaQuery } from "@material-ui/core"
import Card from "./card"
import ScrollBar from "./scrollBar"

const useStyle = makeStyles(theme => ({
  wrapperCard: {
    marginLeft: "0.78vw",
    "@media(min-width: 1280px)": {
      marginLeft: 10,
    },
    "@media(max-width: 1025px)": {
      marginLeft: "1.19vw",
    },
    "@media(max-width: 767px)": {
      marginLeft: "2.41vw",
    },

    "&:first-child": {
      marginLeft: 0,
    },
  },
}))

/**
 * Блок полулярных ремонтов
 * @module src/components/repairPage/popularRepair
 * @param {Object} props - объект свойств компонента React
 * @param {Object[]} props.repairs - массив объектов ремонта полученый из prismic
 */
export default function PopularRepair({ repairs }) {
  const classes = useStyle()
  const mobile = useMediaQuery("(max-width: 767px)")

  return (
    <ScrollBar buttonNext fullScreen={mobile}>
      {repairs.map(repair => (
        <div key={repair.id} className={classes.wrapperCard}>
          <Card repair={repair} />
        </div>
      ))}
    </ScrollBar>
  )
}
