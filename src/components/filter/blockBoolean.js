import React from "react"
import { Button, Grid, makeStyles, Typography } from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Wrapper from "./wrapper"

const useStyles = makeStyles(theme => ({
  buttonWrapper: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 0,
  },
  ratio: {
    background: theme.palette.background.main,

    width: "2.5vw",
    height: "1.4vw",
    padding: "0.23vw",
    marginRight: "0.62vw",
    borderRadius: "0.46vw",
    boxShadow: `inset 0 0 0 0.07vw ${theme.palette.background.accentSecondary}`,
    "@media(min-width: 1280px)": {
      width: "32px",
      height: "18px",
      padding: "3px",
      marginRight: "8px",
      borderRadius: "6px",
      boxShadow: `inset 0 0 0 1px ${theme.palette.background.accentSecondary}`,
    },
    "@media(max-width: 834px)": {
      width: "3.83vw",
      height: "2.15vw",
      padding: "0.35vw",
      marginRight: "0.95vw",
      borderRadius: "0.71vw",
      boxShadow: `inset 0 0 0 0.11vw ${theme.palette.background.accentSecondary}`,
    },
    "@media(max-width: 414px)": {
      width: "7.72vw",
      height: "4.34vw",
      padding: "0.72vw",
      marginRight: "1.93vw",
      borderRadius: "1.44vw",
      boxShadow: `inset 0 0 0 0.24vw ${theme.palette.background.accentSecondary}`,
    },

    "&:before": {
      content: "''",
      display: "block",
      background: theme.palette.background.accentSecondary,

      width: "0.93vw",
      height: "0.93vw",
      borderRadius: "0.31vw",
      "@media(min-width: 1280px)": {
        width: "12px",
        height: "12px",
        borderRadius: "4px",
      },
      "@media(max-width: 834px)": {
        width: "1.43vw",
        height: "1.43vw",
        borderRadius: "0.47vw",
      },
      "@media(max-width: 414px)": {
        width: "2.89vw",
        height: "2.89vw",
        borderRadius: "0.96vw",
      },
    },
  },
  active: {
    background: theme.palette.background.accentSecondary,
    boxShadow: "none",
    "&:before": {
      background: theme.palette.background.main,
      marginLeft: "auto",
    },
  },
  title: {
    fontWeight: 700,
    color: "#131313",
    fontSize: "1.32vw",
    "@media(min-width: 1280px)": {
      fontSize: "17px",
    },
    "@media(max-width: 834px)": {
      fontSize: "2.03vw",
    },
    "@media(max-width: 414px)": {
      fontSize: "4.1vw",
    },
  },
  image: {
    height: "2.65vw",
    "@media(min-width: 1280px)": {
      height: "34px",
    },
    "@media(max-width: 834px)": {
      height: "4.07vw",
    },
    "@media(max-width: 414px)": {
      height: "8.21vw",
    },
  },
}))

export default function BlockBoolean({
  title,
  valueFilter,
  setFilter,
  stickerId,
  ...other
}) {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    {
      allPrismicSticker {
        edges {
          node {
            id
            data {
              image {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const img = data.allPrismicSticker.edges.find(
    edge => edge.node.id === stickerId
  )?.node.data.image

  const [value, setValue] = React.useState(false)

  React.useEffect(() => {
    if (!valueFilter && !img) setValueFilter(false)
  })

  // установка значения в фильтр и состояние
  function setValueFilter(value) {
    let result = value ? "да" : "нет"
    if (img) result = stickerId
    setFilter(title, result)
    setValue(value)
  }

  return (
    <Wrapper {...other}>
      <Button
        onClick={() => setValueFilter(!value)}
        className={classes.buttonWrapper}
      >
        <Grid className={classes.ratio + " " + (value ? classes.active : "")} />
        {img ? (
          <GatsbyImage
            image={img.localFile.childImageSharp.gatsbyImageData}
            alt={img.alt ?? "sticker"}
            className={classes.image}
            imgStyle={{ objectFit: "contain" }}
          />
        ) : (
          <Typography className={classes.title}>{title}</Typography>
        )}
      </Button>
    </Wrapper>
  )
}
