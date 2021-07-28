import {
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core"
import React from "react"
import HeaderWithIcon from "../../headers/headerWithIcon"
import Characteristics from "./characteristics"
import CharacteristicsIcon from "../../../../static/svg/characteristicsIcon.svg"

const useStyles = makeStyles(theme => ({
  cardDescription: {
    background: theme.palette.background.secondary,
    borderRadius: "12px",
    boxShadow: "none",
    width: "57.8125vw",
    maxWidth: "740px",
    "@media(max-width: 834px)": {
      width: "76.7vw",
      maxWidth: "640px",
    },
    "@media(max-width: 414px)": {
      width: "88.4vw",
      maxWidth: "366px",
    },
  },
  cardText: {
    fontSize: 17,
    "@media(max-width: 414px)": {
      fontSize: 14,
    },
  },
  cardContent: {
    padding: "16px",
    color: theme.palette.color.main,
  },
}))

export default function CharacteristicsBlock(props) {
  const classes = useStyles()
  const description = props.props.data.description ?? null
  
  return (
    <div>
      <HeaderWithIcon
        icon={<CharacteristicsIcon />}
        title="Характеристики и описание"
        divider={true}
      />
      <Grid container wrap="nowrap">
        <Grid item xs={12}>
          {description ? (
            <Card className={classes.cardDescription}>
              <CardContent className={classes.cardContent}>
                <Typography className={classes.cardText}>
                  {description}
                </Typography>
              </CardContent>
            </Card>
          ) : null}
          <Characteristics props={props.props.data} />
        </Grid>
      </Grid>
    </div>
  )
}
