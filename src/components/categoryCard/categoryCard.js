import React from "react"
import {
  Card,
  CardActionArea,
  Typography,
  Link,
  CardMedia,
  CardContent,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { GatsbyImage } from "gatsby-plugin-image"

const useStyles = makeStyles(theme => ({
  categoryCardTitle: {
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
      right: "1.438vw",
      fontSize: "1.678vw",
      width: "18vw",
    },
    "@media(max-width: 414px)": {
      top: "2.898vw",
      left: "2.898vw",
      right: "2.898vw",
      fontSize: "3.38vw",
      width: "35vw",
    },
  },
  stretch: {
    width: "100%",
    height: "100%",
  },
  categoryCardRoot: {
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

  storiesCardRoot: {
    width: "100%",
    height: "100%",
    boxShadow: "none",
    overflow: "visible",
    position: "relative",
    border: "4px solid transparent",
    borderRadius: "16px",
    background: "white",
    backgroundClip: "padding-box",
    "&::after": {
      position: "absolute",
      top: "-4px; bottom: -4px",
      left: "-4px; right: -4px",
      background: "linear-gradient(#2b28d0, #682cdb)",
      content: "''",
      zIndex: "-1",
      borderRadius: "16px",
    },
  },

  storiesCardTitle: {
    position: "absolute",
    fontWeight: 700,
    fontSize: 14,
    bottom: "20px",
    left: "20px",
    right: "20px",
    color: "white",
    margin: "auto",
    overflowWrap: "break-word",
  },
  storiesImageContainer: {
    width: "calc(100% - 8px)",
    height: "calc(100% - 8px)",
    borderRadius: "10px",
    position: "absolute",
    right: "0",
    left: "0",
    top: "0",
    bottom: "0",
    margin: "auto",
  },
  brand1CardRoot: {
    width: "100%",
    height: "100%",
    boxShadow: "none",
    borderRadius: "12px",
    background: theme.palette.background.secondary,
  },
  brand1Img: {
    width: "71.428%",
    height: "71.428%",
    display: "block",
    margin: "auto",
  },
  brand2CardRoot: {},
  brand2Title: {},
}))

//В props передается изображение типа gatsbyImageData и название карточки

//Размер задаётся родительским компонентом
//Если это Grid, spacing = padding*2 у родителя, item_width = нужный width + padding*2

//В props передаётся строка variant, которая должна содержать вариант карточки

//category - для категорий
//размер карточки задаётся родительским элементом в используемом компоненте

//stories - для сторисов
//в Grid: item_stories_width = нужный размер + padding*2
//минимальный размер для сторис = 120px + padding
//соотношение сторон 1х1

//brand1 - для карточки брендов или акций без текста

//brand2 - для карточки брендов с текстом

export default function CategoryCard(props) {
  const classes = useStyles()
  const cardType = () => {
    switch (props.variant) {
      case "category":
        return (
          <Card className={classes.categoryCardRoot}>
            <CardActionArea className={classes.stretch}>
              {/* TODO: Добавить в призмик поле с ссылкой на страницу категорию */}
              <Link to="#" className={classes.stretch}>
                <GatsbyImage
                  image={props.cardImage}
                  alt={props.cardTitle}
                  className={classes.stretch}
                />
                <Typography className={classes.categoryCardTitle}>
                  {props.cardTitle}
                </Typography>
              </Link>
            </CardActionArea>
          </Card>
        )
      case "stories":
        return (
          <Card className={classes.storiesCardRoot}>
            <CardActionArea className={classes.stretch}>
              <Link to="#" className={classes.stretch}>
                <GatsbyImage
                  image={props.cardImage}
                  alt={props.cardTitle}
                  className={classes.storiesImageContainer}
                />
                <div
                  className={classes.storiesImageContainer}
                  style={{
                    background: "linear-gradient(transparent, #681DE1)",
                    height: "55%",
                    bottom: "4px",
                    top: "auto",
                  }}
                />
                <Typography className={classes.storiesCardTitle}>
                  {props.cardTitle}
                </Typography>
              </Link>
            </CardActionArea>
          </Card>
        )
      case "brand1":
        return (
          <Card className={classes.brand1CardRoot}>
            <CardActionArea className={classes.stretch}>
              <Link to="#" className={classes.stretch}>
                <GatsbyImage
                  image={props.cardImage}
                  alt={props.cardTitle}
                  className={classes.brand1Img}
                />
              </Link>
            </CardActionArea>
          </Card>
        )
      case "brand2":
        return (
          <Card className={classes.brand1CardRoot}>
            <CardActionArea className={classes.stretch}>
              <Link to="#" className={classes.stretch}>
                <CardMedia>
                  <GatsbyImage
                    image={props.cardImage}
                    alt={props.cardTitle}
                    className={classes.brand1Img}
                  />
                </CardMedia>

                <CardContent>
                  <Typography>{props.cardTitle}</Typography>
                </CardContent>
              </Link>
            </CardActionArea>
          </Card>
        )
      default:
        return console.log(
          "Передайте компоненту значение типа карточки (variant)"
        )
    }
  }
  return cardType()
}
