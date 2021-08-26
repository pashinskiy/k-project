import React from "react"
import Logo from '../static/svg/logo.svg';

/**
 * Компонент-обертка, позволяет отображать логотип до загрузки основного содержимого
 * @module ./clientOnly
 */
export default function ClientOnly({ children, ...delegated }) {
  const [hasMounted, setHasMounted] = React.useState(false)
  React.useEffect(() => {
    setHasMounted(true)
  }, [])
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
  return <div {...delegated}>{children}</div>
}
