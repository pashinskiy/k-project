import React from "react"
import {
  Card,
  CardActionArea,
  Typography,
  Link,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { GatsbyImage } from "gatsby-plugin-image"

const useStyles = makeStyles(theme => ({
  title: {
    position: "absolute",
    color: theme.palette.color.mainContrast,
    fontWeight: 700,
    fontSize: 17,
    top: "12px",
    left: "12px",
    right: "12px",
    width: "156px",
    "@media(max-width: 834px)": {
      top: "1.438vw",
      left: "1.438vw",
      fontSize: "1.678vw",
      width: "18vw",
    },
    "@media(max-width: 414px)": {
      top: "2.898vw",
      left: "2.898vw",
      fontSize: "3.38vw",
      width: "35vw",
    },
  },
  stretch: {
    width: "100%",
    height: "100%",
  },
  cardRoot: {
    width: "100%",
    height: "100%",
    boxShadow: "none",
    position: "relative",
    "@media(min-width: 1280px)": {
      borderRadius: "12px",
    },
    "@media(max-width: 834px)": {
        borderRadius: "1.438vw",
      },
      "@media(max-width: 414px)": {
        borderRadius: "2.89vw",
      },
  },

}))

//В props передается изображение типа gatsbyImageData и название карточки
//Размер задаётся родительским компонентом

export default function CategoryCard(props) {
  const classes = useStyles()
  return (
      <Card className={classes.cardRoot}>
        <CardActionArea className={classes.stretch}>
          <Link to="#" className={classes.stretch}>
            <GatsbyImage
              image={props.cardImage}
              alt={props.cardTitle}
              className={classes.stretch}
            />
            <Typography className={classes.title}>{props.cardTitle}</Typography>
            {/* </GatsbyImage> */}
          </Link>
        </CardActionArea>
      </Card>
  )
}
