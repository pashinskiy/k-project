import { Grid } from "@material-ui/core"
import React from "react"
import CardWidget from "./cardWidget"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  wrapper: {
    marginBottom: "3.125vw",
    "@media(min-width: 1280px)": {
      marginBottom: "40px",
    },
    "@media(max-width: 1025px)": {
      marginBottom: "4.796vw",
    },
    "@media(max-width: 767px)": {
      marginBottom: "8.695vw",
    },
  },
  storiesCard: {
    width: "11.5625vw",
    height: "11.5625vw",
    padding: "0.3125vw",
    "@media(min-width: 1280px)": {
      width: "148px",
      height: "148px",
      padding: "4px",
    },
    "@media(max-width: 1025px)": {
      width: "17.745vw",
      height: "17.745vw",
      padding: "0.4796vw",
    },
    "@media(max-width: 767px)": {
      width: "35.748vw",
      height: "35.748vw",
      padding: "0.9661vw",
    },
  },
}))

/**
 * Панель историй
 * @module src/components/widgets/storiesPanel
 * @param {Object} props - объект свойств компонента React
 * @param {Object[]} props.stories - массив объектов историй полученный из prismic
 */
export default function StoriesPanel({ stories }) {
  const classes = useStyles()

  return stories.map(story =>
    story.data.tumbler_link === true ? (
      <Link to={`${story.data.link ?? ""}`}>
        <Grid item className={classes.storiesCard}>
          <CardWidget
            cardImage={
              story.data.image?.localFile?.childImageSharp.gatsbyImageData
            }
            cardTitle={story.data.text.text}
            variant="stories"
          />
        </Grid>
      </Link>
    ) : (
      <a
        href={`${story.data.link ?? ""}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Grid item className={classes.storiesCard}>
          <CardWidget
            cardImage={
              story.data.image?.localFile?.childImageSharp.gatsbyImageData
            }
            cardTitle={story.data.text.text}
            variant="stories"
          />
        </Grid>
      </a>
    )
  )
}
