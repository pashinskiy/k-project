import React from "react"
import { makeStyles } from "@material-ui/core"

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
 * Форма регистрации в Mokka
 * @module src/components/mokkaIframeRegistration
 * @param {Object} props - объект свойств компонента React
 * @param {function} onClose - функция вызываемая при закрытии формы
 */
export default function MokkaIframeRegistration({ onClose }) {
  const classes = useStyle()

  React.useEffect(() => {
    fetch("https://admin.krypton.ru/api/mokka/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        redirect_url: window.location.href,
      }),
    })
      .then(res => res.json())
      .then(res => {
        window.REVO.Form.show(res.url, "#mokka_registration")
        window.REVO.Form.onClose(onClose)
      })
  }, [])

  return <div id="mokka_registration" className={classes.iframe}></div>
}
