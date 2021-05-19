import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Typography} from "@material-ui/core"
import CategoryCard from "./categoryCard"

const useStyles = makeStyles(theme => ({
  root: {
    margin: "0px",
    width: "100%",
  },
  mainTitle: {
    color: "#131313",
    fontSize: 17,
    fontWeight: 700,
    "@media(max-width: 834px)": {
      fontSize: "2.038vw",
      paddingTop: "4.79vw",
    },
    "@media(max-width: 414px)": {
      fontSize: "4.1vw",
      paddingTop: "9.66vw",
    },
  },
  container: {
    "@media(min-width: 1280px)": {
      width: "199.5px",
      height: "140px",
      padding: "6px",
    },
    "@media(max-width: 834px)": {
      padding: "0.71vw",
      width: "23.325vw",
      height: "15.34vw",
    },
    "@media(max-width: 414px)": {
      padding: "1.449vw 1.2vw",
      width: "43.24vw",
      height: "30.91vw",
    },
  },
}))

export default function CategoryWidget(props) {
  const classes = useStyles()
  // const mobile = useMediaQuery("(max-width: 414px)")
  // const pad = useMediaQuery("(max-width: 834px)")
  const data = props.props.allPrismicCatalog.edges[0].node.data.categories

  return (
    <>
      <Typography className={classes.mainTitle}>Каталог</Typography>
      <Grid container>
        {data.length
          ? data.map((category, i) => (
              <Grid item key={i} className={classes.container}>
                <CategoryCard
                  cardImage={
                    category.category.document.data.image.localFile
                      .childImageSharp.gatsbyImageData
                  }
                  cardTitle={category.category.document.data.name}
                />
              </Grid>
            ))
          : null}
      </Grid>
    </>
  )
}
