import React from "react"
import { makeStyles, useMediaQuery } from "@material-ui/core"

import HeaderWithIcon from "../headerWithIcon"

import BankCard from "../../../../static/svg/bankCard.svg"

const useStyle = makeStyles(theme => ({}))

export default function PayData({ prismicCartAndOrder, afterChange }) {
  const classes = useStyle()
  const smartPhoneScreen = useMediaQuery("(max-width: 415px)")

  return (
    <>
      <HeaderWithIcon
        icon={smartPhoneScreen ? null : <BankCard />}
        number={smartPhoneScreen ? 2 : null}
        title="Оплата"
      />
    </>
  )
}
