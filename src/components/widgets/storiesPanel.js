import { Grid } from "@material-ui/core"
import React from "react"
import CardWidget from "./cardWidget"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  wrapper: {
    marginBottom: "3.125vw",
    "@media(min-width: 1280px)": {
      marginBottom: "40px",
    },
    "@media(max-width: 1025px)": {
      marginBottom: "4.796vw",
    },
    "@media(max-width: 414px)": {
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
    "@media(max-width: 414px)": {
      width: "35.748vw",
      height: "35.748vw",
      padding: "0.9661vw",
    },
  },
}))
export default function StoriesPanel({ stories }) {
  const classes = useStyles()
  // console.log(stories)

  // let duplicateStories = []

  // for (var i = 0; i < stories.length; ++i) {
  //   duplicateStories.push(stories[i])
  //   duplicateStories.push(stories[i])
  //   duplicateStories.push(stories[i])
  //   duplicateStories.push(stories[i])
  // }

  return stories.map(story => (
    <Grid item className={classes.storiesCard}>
      <CardWidget
        cardImage={story.data.image?.localFile?.childImageSharp.gatsbyImageData}
        cardTitle={story.data.text.text}
        variant="stories"
        cardLink=""
      />
    </Grid>
  ))
}
