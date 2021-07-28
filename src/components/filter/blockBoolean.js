import React from "react"
import { Button, Grid, makeStyles, Typography } from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"
// import { GatsbyImage } from "gatsby-plugin-image"

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
    borderRadius: "0.46vw",
    boxShadow: `inset 0 0 0 0.07vw ${theme.palette.background.accentSecondary}`,
    "@media(min-width: 1280px)": {
      width: "32px",
      height: "18px",
      padding: "3px",
      borderRadius: "6px",
      boxShadow: `inset 0 0 0 1px ${theme.palette.background.accentSecondary}`,
    },
    "@media(max-width: 834px)": {
      width: "3.83vw",
      height: "2.15vw",
      padding: "0.35vw",
      borderRadius: "0.71vw",
      boxShadow: `inset 0 0 0 0.11vw ${theme.palette.background.accentSecondary}`,
    },
    "@media(max-width: 414px)": {
      width: "7.72vw",
      height: "4.34vw",
      padding: "0.72vw",
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
    marginLeft: "0.62vw",
    "@media(min-width: 1280px)": {
      fontSize: "17px",
      marginLeft: "8px",
    },
    "@media(max-width: 834px)": {
      fontSize: "2.03vw",
      marginLeft: "0.95vw",
    },
    "@media(max-width: 414px)": {
      fontSize: "4.1vw",
      marginLeft: "1.93vw",
    },
  },
  image: {
    height: "2.65vw",
    marginLeft: "0.93vw",
    "@media(min-width: 1280px)": {
      height: "34px",
      marginLeft: "12px",
    },
    "@media(max-width: 834px)": {
      height: "4.07vw",
      marginLeft: "1.43vw",
    },
    "@media(max-width: 414px)": {
      height: "8.21vw",
      marginLeft: "2.89vw",
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
                  publicURL
                  childImageSharp {
                    gatsbyImageData
                    fluid(maxHeight: 35) {
                      aspectRatio
                      src
                      srcSet
                      srcSetWebp
                    }
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

  const [value, setValue] = React.useState(valueFilter)

  // установка значения в фильтр и состояние
  function setValueFilter(value) {
    let result = value ? "да" : []
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
          <div className={classes.image}>
            <img
              src={img.localFile.publicURL}
              style={{ width: "auto", height: "100%" }}
            />
            {/* <picture style={{ display: "flex", width: "100%", height: "100%" }}>
              <source
                srcSet={img.localFile.childImageSharp.fluid.srcSetWebp}
                type="image/webp"
                sizes=""
              />
              <img
                src={img.localFile.childImageSharp.fluid.src}
                srcSet={img?.srcSet}
                alt={img.alt}
                sizes=""
                width={img.localFile.childImageSharp.fluid.aspectRatio}
                height="1"
                style={{ width: "auto", height: "100%" }}
              />
            </picture> */}
          </div>
        ) : (
          // <GatsbyImage
          //   image={img?.localFile?.childImageSharp.gatsbyImageData}
          //   alt={img.alt ?? "sticker"}
          //   className={classes.image}
          //   imgStyle={{ objectFit: "contain" }}
          // />
          <Typography className={classes.title}>{title}</Typography>
        )}
      </Button>
    </Wrapper>
  )
}
