import React from "react"
import { Helmet } from "react-helmet"
import Logo from "../static/svg/logo.svg"

/**
 * Компонент-обертка, позволяет отображать логотип до загрузки основного содержимого
 * @module src/clientOnly
 */
export default function ClientOnly({ children, ...delegated }) {
  const [hasMounted, setHasMounted] = React.useState(false)
  React.useEffect(() => {
    setHasMounted(true)
  }, [])
  if (!hasMounted) return null
  if (!hasMounted) {
    return (
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          flexWrap: "nowrap",
          alignContent: "center",
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
        }}
      >
        <Logo />
      </div>
    )
  }
  return (
    <div {...delegated}>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script src="https://backend.demo.revoup.ru/javascripts/iframe/v2/revoiframe.js"></script>
      </Helmet>
      {children}
    </div>
  )
}
