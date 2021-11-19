import React from "react"
import { LinearProgress, makeStyles, Typography } from "@material-ui/core"
import { Modal } from "@material-ui/core"

const useStyle = makeStyles(theme => ({
  root: {
    background: theme.palette.background.main,
    position: "absolute",
    touchAction: "none",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    width: "27.96vw",
    padding: "2.34vw",
    borderRadius: "1.5625vw",
    "@media(min-width: 1280px)": {
      width: "358px",
      padding: "30px",
      borderRadius: "20px",
    },
    "@media(max-width: 414px)": {
      width: "86.47vw",
      padding: "7.24vw",
      borderRadius: "4.83vw",
    },
  },

  title: {
    fontWeight: 600,
    fontSize: "1.875vw",
    lineHeight: "1.875vw",
    marginBottom: "1.718vw",
    "@media(min-width: 1280px)": {
      fontSize: "24px",
      lineHeight: "24px",
      marginBottom: "22px",
    },
    "@media(max-width: 414px)": {
      fontSize: "5.79vw",
      lineHeight: "5.79vw",
      marginBottom: "5.31vw",
    },
  },

  progressBar: {
    borderRadius: "1.5625vw",
    "@media(min-width: 1280px)": {
      borderRadius: "20px",
    },
    "@media(max-width: 414px)": {
      borderRadius: "4.83vw",
    },
  },
  progressColorPrimary: {
    backgroundColor: theme.palette.color.mainContrastLight,
  },
  progressBarColorPrimary: {
    background: theme.palette.color.accent,
  },
}))

export default function LoadingModal({
  isModalOpen,
  title = "Уже оформляем заказ...",
}) {
  const classes = useStyle()

  return (
    <>
      <Modal style={{touchAction: "none"}} open={isModalOpen}>
        <div className={classes.root}>
          <Typography variant="body2" className={classes.title}>
            {title}
          </Typography>

          <LinearProgress
            classes={{
              colorPrimary: classes.progressColorPrimary,
              barColorPrimary: classes.progressBarColorPrimary,
            }}
            className={classes.progressBar}
          />
        </div>
      </Modal>
    </>
  )
}
