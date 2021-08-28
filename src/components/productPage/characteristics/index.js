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
    "@media(max-width: 1025px)": {
      width: "76.7vw",
      maxWidth: "640px",
    },
    "@media(max-width: 767px)": {
      width: "88.4vw",
      maxWidth: "366px",
    },
  },
  cardText: {
    fontSize: 17,
    "@media(max-width: 767px)": {
      fontSize: 14,
    },
  },
  cardContent: {
    padding: "16px",
    color: theme.palette.color.main,
  },
}))

/**
 * Блок характеристик на странице продукта
 * @module src/components/productPage/сharacteristics
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.product - объект продукта полученый из prismic
 */
export default function CharacteristicsBlock({product}) {
  const classes = useStyles()
  const description = product.data.description ?? null
  
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
          <Characteristics product={product} />
        </Grid>
      </Grid>
    </div>
  )
}
