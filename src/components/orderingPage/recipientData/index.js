import React from "react"
import { makeStyles, useMediaQuery } from "@material-ui/core"

import HeaderWithIcon from "..//headerWithIcon"

import RecipientIcon from "../../../../static/svg/recipientIcon.svg"

const useStyle = makeStyles(theme => ({}))

export default function RecipientData({ prismicCartAndOrder, afterChange }) {
  const classes = useStyle()
  const smartPhoneScreen = useMediaQuery("(max-width: 415px)")

  return (
    <>
      <HeaderWithIcon
        icon={smartPhoneScreen ? null : <RecipientIcon />}
        number={smartPhoneScreen ? 3 : null}
        title="Данные получателя"
      />
    </>
  )
}
