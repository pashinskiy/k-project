import React from "react"
import { makeStyles } from "@material-ui/core"
import { navigate } from "gatsby"

const useStyle = makeStyles(theme => ({
  iframe: {
    width: "505px",
    height: "100%",
    overflow: "auto",

    "@media(max-width: 505px)": {
      width: "100%",
    },

    "& iframe": {
      border: "none",
    },
  },
}))

/**
 * Форма оплаты в Mokka
 * @module src/components/mokkaIframePay
 * @param {Object} props - объект свойств компонента React
 * @param {String} url - ссылка на форму Mokka
 */
export default function MokkaIframePay({ url }) {
  const classes = useStyle()

  React.useEffect(() => {
    window.REVO.Form.show(url, "#mokka_pay")
    window.REVO.Form.onClose(() => navigate("/order/"))
  }, [])

  return <div id="mokka_pay" className={classes.iframe}></div>
}
