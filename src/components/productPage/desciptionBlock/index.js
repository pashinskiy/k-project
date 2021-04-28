import React from "react"
import { Divider, Typography, useMediaQuery } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import CharacteristicsIcon from "../../../../static/svg/characteristicsIcon.svg"
import DeliveryIcon from "../../../../static/svg/deliveryIcon.svg"

//TODO:
//Поменять fontFamily после установки шрифтов

const useStyles = makeStyles({
  container: {
    padding: "23px 0px 10px 0px",
    display: "flex",
    alignItems: "center",
    "@media (max-width:767px)": {
        padding: "10px 0px 10px 0px"
      },
  },

  title: {
    margin: "0px",
    //fontFamily: "Inter",
    fontSize: 36,
    fontWeight: "700",
    color: "black",
    "@media (max-width:767px)": {
      fontSize: 20,
    },
  },

  icon: {
    marginRight: "10px",
    marginBottom: "0px",
    "@media (max-width:767px)": {
      width: "22.22px",
      height: "24px",
    },
  },

  divider: {
    backgroundColor: "#BDBDC6",
    marginBottom: "23px",
    "@media (max-width:767px)": {
        marginBottom: "0px",
        marginTop: "23px",
      },
  },
})

export default function DescriptionBlock(props) {
  const classes = useStyles()
  const mobile = useMediaQuery("(max-width: 834px)")
  return (
    <>
      <div className={classes.root}>
          {mobile ? <Divider className={classes.divider} /> : null}
        <div className={classes.container}>
          {/* <img src={props.icon} className={classes.icon} /> */}
          {props.title === "Информация о доставке" ? <DeliveryIcon className={classes.icon}/> : null}
          {props.title === "Характеристики и описание" ? <CharacteristicsIcon className={classes.icon}/> : null}
          <Typography className={classes.title}>{props.title}</Typography>
        </div>
        {mobile ? null : <Divider className={classes.divider} />}
      </div>
    </>
  )
}
