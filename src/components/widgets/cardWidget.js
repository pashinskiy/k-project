import React from "react"
import { Link } from "gatsby"
import { Card, CardActionArea, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { GatsbyImage } from "gatsby-plugin-image"

const useStyles = makeStyles(theme => ({
  categoryCardTitle: {
    position: "absolute",
    color: theme.palette.color.mainContrast,
    fontWeight: 700,
    fontSize: 14,
    top: 0,
    left: 0,
    right: 0,
    padding: 12,
    boxSizing: 'border-box',
    '@media(max-width: 1024px)': {
      padding: '0.937vw',
    },
    '@media(max-width: 834px)': {
      padding: '1.438vw',
    },
    '@media(max-width: 787px)': {
      padding: '1.398vw',
    },
    '@media(max-width: 665px)': {
      padding: '1.898vw',
    },
    '@media(max-width: 550px)': {
      padding: '2.898vw',
    },
    '@media(max-width: 418px)': {
      width: "100%",
    },
    '@media(max-width: 353px)': {
      fontSize: '3.8vw',
    },
    width: "78%",
    height: '100%',
    lineHeight: '120%',
    // "@media(max-width: 834px)": {
    //   top: "1.438vw",
    //   left: "1.438vw",
    //   right: "1.438vw",
    //   // fontSize: "1.678vw",
    //   width: "18vw",
    // },
    // "@media(max-width: 414px)": {
    //   top: "2.898vw",
    //   left: "2.898vw",
    //   right: "2.898vw",
    //   // fontSize: "3.38vw",
    //   width: "35vw",
    // },
  },
  stretch: {
    width: "100%",
    height: "100%",
    display: 'block',
  },
  categoryCardRoot: {
    width: "100%",
    height: "100%",
    boxShadow: "none",
    position: "relative",
    borderRadius: "12px",
    // "@media(min-width: 1280px)": {
    //   borderRadius: "12px",
    // },
    // "@media(max-width: 834px)": {
    //   borderRadius: "1.438vw",
    // },
    // "@media(max-width: 414px)": {
    //   borderRadius: "2.89vw",
    // },
  },

  storiesCardRoot: {
    width: "100%",
    height: "100%",
    boxShadow: "none",
    border: `3px solid ${theme.palette.color.accentSecondary}`,
    borderRadius: 24,
    background: "white",
  },

  storiesCardTitle: {
    position: "absolute",
    fontWeight: 700,
    fontSize: 14,
    lineHeight: '120%',
    bottom: 16,
    left: 16,
    right: 16,
    color: theme.palette.color.mainContrast,
    margin: "auto",
    overflowWrap: "break-word",
  },
  storiesImageContainer: {
    width: "calc(100% - 6px)",
    height: "calc(100% - 6px)",
    borderRadius: 18,
    position: "absolute",
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
    margin: "auto",
  },
  brandCardRoot: {
    width: "100%",
  },
  brandContainer: {
    width: "100%",
    height: "auto",
    display: "inline-block",
    position: "relative",
    boxShadow: "none",
    background: theme.palette.background.secondary,
    borderRadius: "20px",
  },
  brandContainerGradient: {
    background: theme.palette.background.accent,
  },
  brandDummy: {
    marginTop: "100%",
  },
  brandElement: {
    width: "71.428%",
    height: "71.428%",
    position: "absolute",
    top: "14.286%",
    bottom: "14.286%",
    left: "14.286%",
    rigth: "14.286%",
    objectFit: "contain",
  },
  brandTitle: {
    fontSize: 14,
    fontWeight: 700,
    textAlign: "center",
    paddingTop: "8px",
    paddingBottom: "8px",
    color: theme.palette.color.main,
  },
  smallCardTitle: {
    color: theme.palette.color.main,
    padding: "0.9375vw",
    "@media(min-width: 1280px)": {
      padding: "12px",
    },
    "@media(max-width: 834px)": {
      padding: "1.199vw",
    },
    "@media(max-width: 414px)": {
      padding: "2.415vw",
    },
  },
  smallCardRoot: {
    boxShadow: "none",
    background: theme.palette.background.secondary,
    borderRadius: "0.9375vw",
    "@media(min-width: 1280px)": {
      borderRadius: "12px",
    },
    "@media(max-width: 834px)": {
      borderRadius: "1.199vw",
    },
    "@media(max-width: 414px)": {
      borderRadius: "2.415vw",
    },
  },

  catSingleRoot: {
    width: "268px",
    background: theme.palette.background.secondary,
    boxShadow: "none",
    borderRadius: "20px",
  },
  catSingleTitle: {
    // paddingBottom: "32px",
    marginBottom: "20px",
    fontSize: 17,
    fontWeight: 700,
  },
  catSingleSubTitle: {
    color: theme.palette.color.secondary,
  },
  catSingleContainer: {
    width: "79.1%",
    padding: "28px 0",
    margin: "auto",
  },
}))

//При вызове компонента указывается только ширина, кроме STORIES

//В props передаётся:
//cardImage - изображение
//cardTitle - текст в компоненте
//cardLink - ссылка куда нужно перейти
//variant - тип необходимой карточки

//Типы:
//category

//stories - минимальный размер для сторис = 120px + padding
//соотношение сторон 1х1
//При вызове для stories высота(height) обязательно должна быть указана!

//brand - для карточки брендов или акций
//нужно передавать только ширину
//можно передавать с текстом или без

//small - только текст

//categoriesSingle - список категорий с подкатегориями на 1 карточке
//передать список категорий

export default function CardWidget({cardImage, cardTitle, cardLink, variant, gradientBack, categoryTitle, subCategoryTitle}) {
  const classes = useStyles()
  const altImage = cardImage
    ? cardImage.images.fallback.src.split("_")[1].replace(".jpg", "")
    : null
  const cardType = () => {
    switch (variant) {
      case "category":
        return (
          <Card className={`${classes.categoryCardRoot} catalog--category`}>
            <CardActionArea className={classes.stretch}>
              {/* TODO: Добавить в поле с ссылкой на страницу категорию */}
              <Link to={cardLink} className={classes.stretch}>
                <GatsbyImage
                  image={cardImage}
                  alt={altImage}
                  className={`${classes.stretch} gatsby--image`}
                />
                <Typography className={classes.categoryCardTitle}>
                  {cardTitle}
                </Typography>
              </Link>
            </CardActionArea>
          </Card>
        )
      case "stories":
        return (
          <Card className={`${classes.storiesCardRoot} catalog--stories`}>
            <CardActionArea className={classes.stretch} style={{borderRadius: "12px"}}>
              <Link to={cardLink} className={`${classes.stretch} strech`}>
                <GatsbyImage
                  image={cardImage}
                  alt={altImage}
                  className={classes.storiesImageContainer}
                />
                <div
                  className={classes.storiesImageContainer}
                  style={{
                    background: "linear-gradient(transparent, #681DE1)",
                    height: "55%",
                    bottom: "3px",
                    top: "auto",
                  }}
                />
                <Typography className={`${classes.storiesCardTitle} card--title`}>
                  {cardTitle}
                </Typography>
              </Link>
            </CardActionArea>
          </Card>
        )
      case "brand":
        return (
          <Link
            to={cardLink}
            className={classes.stretch}
            style={{ textDecoration: "none" }}
          >
            <div className={classes.brandCardRoot}>
              <Card
                className={classes.brandContainer}
                style={
                  (cardTitle
                    ? { borderRadius: "20px" }
                    : { borderRadius: "12px" },
                  gradientBack === true
                    ? {
                        background:
                          "linear-gradient(180deg, #291AD5 0%, #681DE1 100%)",
                      }
                    : { background: "#EFEFF2" })
                }
              >
                <div className={classes.brandDummy} />
                <GatsbyImage
                  image={cardImage}
                  alt={altImage}
                  className={classes.brandElement}
                  imgStyle={{ objectFit: "contain" }}
                />
              </Card>
              {cardTitle ? (
                <Typography className={classes.brandTitle}>
                  {cardTitle}
                </Typography>
              ) : null}
            </div>
          </Link>
        )
      case "small":
        return (
          <Link
            to={cardLink}
            className={classes.stretch}
            style={{ textDecoration: "none" }}
          >
            <Card className={classes.smallCardRoot}>
              <Typography className={classes.smallCardTitle}>
                {cardTitle}
              </Typography>
            </Card>
          </Link>
        )
      case "categoriesSingle":
        return (
          <Card className={classes.catSingleRoot}>
            <div className={classes.catSingleContainer}>
              <Typography className={classes.catSingleTitle} variant="body2">
                {categoryTitle}
              </Typography>
              <Typography className={classes.catSingleSubTitle}>
                {subCategoryTitle}
              </Typography>
            </div>
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
