import { Grid, Link, makeStyles, Typography } from "@material-ui/core"
import React from "react"
import DocumentIcon from "../../../../static/svg/documentIcon.svg"

const useStyles = makeStyles({
  childTitle: {
    display: "block",
    width: "100%",
    fontFamily: "Inter",
    fontSize: 17,
    color: "#5A5A5A",
    marginRight: ".52vw",
    paddingTop: "0.83vw",
    overflow: "hidden",
    verticalAlign: "bottom",
    "@media(min-width: 1025px)": {
      "&::after": {
        content: "''",
        backgroundColor: "#D6D5DF",
        height: "1px",
        position: "relative",
        verticalAlign: "baseline",
        width: "100%",
        display: "inline-block",
        left: "0.5em",
        marginRight: "-100%",
      },
    },
    "@media(max-width: 834px)": {
      fontSize: 14,
      width: "38.84vw",
      marginRight: "1vw",
      alignItems: "normal",
    },
    "@media(max-width: 414px)": {
      width: "42.7vw",
      maxWidth: "177px",
      fontSize: 14,
      margin: "5px 0 5px 0",
      marginRight: "1.05vw",
    },
  },
  attribValue: {
    width: "20.83vw",
    fontFamily: "Inter",
    display: "flex",
    fontSize: 17,
    color: "#5A5A5A",
    paddingTop: "0.83vw",
    "@media(max-width: 834px)": {
      fontSize: 14,
      width: "38.84vw",
      alignItems: "normal",
    },
    "@media(max-width: 414px)": {
      width: "42.7vw",
      maxWidth: "177px",
      fontSize: 14,
      alignItems: "normal",
      margin: "5px 0 5px 0",
    },
  },
  wrapper: {
    width: "46.875vw",
    "@media(max-width: 834px)": {
      width: "100%",
    },
    "@media(max-width: 414px)": {
      width: "100%",
    },
  },
  characteristicTitle: {
    fontWeight: 700,
    marginTop: "1.8vw",
    marginBottom: ".3vw",
    fontSize: 17,
    "@media(max-width: 834px)": {
      fontSize: 14,
      marginTop: "4vw",
      marginBottom: ".5vw",
    },
    "@media(max-width: 414px)": {
      marginTop: "10vw",
      marginBottom: "1vw",
    },
  },
  documentContainer: {
    width: "290px",
    margin: "0",
    paddingBottom: "25px",
  },
  documentTitle: {
    fontWeight: 700,
    fontSize: 14,
  },
  documentDescrition: {
    fontSize: 14,
    marginTop: "5px",
  },
  documentLink: {
    fontSize: 12,
    textDecoration: "underline",
    position: "absolute",
    bottom: "0px",
  },
  characteristicsContainer: {
    "@media(max-width: 834px)": {
      marginBottom: "10vw",
    },
  },
  wrapperChild: {
    width: "25.52vw",
    display: "flex",
    alignItems: "flex-end",
    "@media(max-width: 1024px)": {
      alignItems: "normal",
    },
  },
  wrapperAttrib: {
    display: "flex",
    alignItems: "flex-end",
    "@media(max-width: 1024px)": {
      alignItems: "normal",
    },
  },
})

export default function Characteristics() {
  const classes = useStyles()
  const charecteristicsData = [
    {
      title: "Общие характеристики",
      attrib: [
        {
          title: "Модель",
          value: "2021 года",
        },
        {
          title: "Возраст",
          value: "для взрослых",
        },
        {
          title: "Тип",
          value: "горный (MTB), кросс-кантри",
        },
        {
          title: "Тип привода",
          value: "цепной",
        },
      ],
    },
    {
      title: "Торможение",
      attrib: [
        {
          title: "Передний тормоз",
          value: "прогулочный / 160mm",
        },
        {
          title: "Тип переднего тормоза",
          value: "дисковый механический",
        },
        {
          title: "Задний тормоз",
          value: "прогулочный / 160mm",
        },
        {
          title: "Тип заднего тормоза",
          value: "дисковый механический",
        },
        {
          title: "Возможность крепления дискового тормоза",
          value: "вилка, рама, втулка",
        },
      ],
    },
    {
      title: "Дополнительно",
      attrib: [
        {
          title: "Срок службы",
          value: "1728 дн.",
        },
        {
          title: "Гарантийный срок",
          value: "12 мес.",
        },
        {
          title: "Страна производства",
          value: "Китай",
        },
        {
          title: "Дополнительная информация",
          value:
            "рабочий диапазон частот 2412-2472 МГц; максимальная выходная мощность 17,41 дБм",
        },
        {
          title: "Экосистема",
          value: "Умный дом Яндекса",
        },
      ],
    },
  ]
  const iconData = [
    {
      title: "Гарантийное обслуживание",
      descript: "Гарантия производителя",
      link: "# ",
    },
    {
      title: "Инструкция пользования",
      descript: "Общий мануал",
      link: "#",
    },
  ]
  const characteristicTitlesArray = charecteristicsData.map(function (
    parentItems
  ) {
    const attribArr = parentItems.attrib.map(function (childTitles) {
      return (
        <Grid container>
          <Grid item className={classes.wrapperChild}>
            <Typography className={classes.childTitle}>
              {childTitles.title}
            </Typography>
          </Grid>
          <Grid item className={classes.wrapperAttrib}>
            <Typography className={classes.attribValue}>
              {childTitles.value}
            </Typography>
          </Grid>
        </Grid>
      )
    })
    return (
      <Grid container className={classes.wrapper}>
        <Typography className={classes.characteristicTitle}>
          {parentItems.title}
        </Typography>
        {attribArr}
      </Grid>
    )
  })
  return (
    <>
      <Grid container justify="space-between">
        <Grid item className={classes.characteristicsContainer}>
          {characteristicTitlesArray}
        </Grid>

        <Grid item style={{ paddingTop: "1.8vw" }}>
          {iconData.length
            ? iconData.map(variant => (
                <Grid
                  container
                  spacing={2}
                  className={classes.documentContainer}
                >
                  <Grid item style={{ padding: "0" }}>
                    <DocumentIcon />
                  </Grid>
                  <Grid
                    item
                    style={{
                      padding: "0 0 0 10px",
                      position: "relative",
                      maxHeight: "70px",
                    }}
                  >
                    <Typography className={classes.documentTitle}>
                      {variant.title}
                    </Typography>
                    <Typography className={classes.documentDescrition}>
                      {variant.descript}
                    </Typography>
                    <Link href={variant.link} className={classes.documentLink}>
                      Скачать
                    </Link>
                  </Grid>
                </Grid>
              ))
            : null}
        </Grid>
      </Grid>
    </>
  )
}
