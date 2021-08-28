import React from "react"
import { Grid, makeStyles, Typography } from "@material-ui/core"
import CardWidget from "../../widgets/cardWidget"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "fit-content",
    alignSelf: "end",
    "@media (max-width: 1279px) and (min-width: 768px)": {
      display: "flex",
      flexDirection: "column",
      alignSelf: "start",
    },
    "@media (max-width: 767px)": {
      gridColumn: "span 2",
    },
  },
  h6: {
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 20,
    lineHeight: "24px",
  },
  categories: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
    gap: 8,
    "@media (max-width: 1279px) and (min-width: 768px)": {
      gap: 0,
      display: "flex",
      flexWrap: "wrap",
    },
    "@media (max-width: 767px)": {
      gridTemplateColumns: "1fr 1fr",
    },
  },
  category: {
    "& .category--title": {
      width: "100%",
    },
    "@media (min-width: 1280px)": {
      height: 142,
    },
    "@media (max-width: 1279px) and (min-width: 1025px)": {
      marginRight: 8,
      marginBottom: 8,
      height: "12vw",
      width: "calc(100% / 4 - 8px * 2 + 8px / 3)",
      "&:nth-child(4n)": {
        marginRight: 0,
      },
    },
    "@media (max-width: 1025px) and (min-width: 768px)": {
      marginRight: 8,
      marginBottom: 8,
      height: "12vw",
      alignSelf: "stretch",
      flexGrow: "1",
      width: "calc(100% / 3 - 8px + 8px / 3)",
      "&:nth-child(3n)": {
        marginRight: 0,
      },
      "&:nth-child(7)": {
        width: "calc(50% - 8px / 2)",
      },
      "&:nth-child(8)": {
        marginRight: 0,
        width: "calc(50% - 8px / 2)",
      },
      "&:nth-child(9)": {
        marginRight: 8,
        marginBottom: 0,
        width: "calc(50% - 8px / 2)",
      },
      "&:last-child": {
        marginRight: 0,
        marginBottom: 0,
        width: "calc(50% - 8px / 2)",
      },
    },
  },
}))

/**
 * Панель навигации по категориям
 * @module src/components/mainPage/categories
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.data - объект данных полученый из prismic
 */
export default function Categories(props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography variant="h6" component="h1" className={classes.h6}>
        Категории
      </Typography>
      <nav className={classes.categories}>
        {props.data.edges.map((category, i) => (
          <Grid className={classes.category}>
            <CardWidget
              variant={"category"}
              key={`category ${i}`}
              cardImage={
                category.node.data.image.localFile?.childImageSharp
                  .gatsbyImageData
              }
              cardTitle={category.node.data.name}
              cardLink={`/category/${category.node.uid}/`}
            />
          </Grid>
        ))}
      </nav>
    </div>
  )
}
