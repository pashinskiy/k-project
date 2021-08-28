import React from "react"

import Main from "../main"
import SearchPanel from "../searchPanel"
import Subgroup from "../subgroup"

import { FaqStateContext } from "../context"

/**
 * Компонент с логикой отображения компонентов страницы технической поддержки
 * @module src/components/faqPage/showComponent
 */
export default function ShowComponent() {
  const faqState = React.useContext(FaqStateContext)

  switch (faqState.component) {
    case "main":
      return <Main />
    case "search":
      return <SearchPanel />
    default:
      return <Subgroup subgroup={faqState.component} />
  }
}
