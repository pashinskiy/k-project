import React from "react"
import { graphql } from "gatsby"
import { makeStyles, Typography } from "@material-ui/core"
import { GatsbyImage } from "gatsby-plugin-image"

import Seo from "../components/seo"
import Layout from "../components/layout"

import HeaderWithIcon from "../components/headers/headerWithIcon"

import TradeIn from "../../static/svg/tradeIn.svg"

const useStyles = makeStyles(theme => ({
  wrapperFirstAndSecondBlock: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "stretch",

    marginTop: "3.12vw",
    "@media(min-width: 1280px)": {
      marginTop: 40,
    },
    "@media(max-width: 1025px)": {
      marginTop: "4.79vw",
    },
    "@media(max-width: 767px)": {
      flexDirection: "column",
      marginTop: "4.31vw",
    },
  },
  first_block: {
    display: "flex",
    alignItems: "center",

    background: theme.palette.background.secondary,

    width: "48.85%",
    borderRadius: "1.56vw",
    padding: "1.56vw",
    "@media(min-width: 1280px)": {
      width: 598,
      borderRadius: 20,
      padding: 20,
    },
    "@media(max-width: 1025px)": {
      width: "48.97%",
      borderRadius: "2.39vw",
      padding: "2.39vw",
    },
    "@media(max-width: 767px)": {
      width: "100%",
      borderRadius: "4.83vw",
      padding: "4.83vw",
    },
  },
  second_block: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    background: theme.palette.background.secondary,

    width: "48.85%",
    borderRadius: "1.56vw",
    padding: "3.12vw",
    "@media(min-width: 1280px)": {
      width: 598,
      borderRadius: 20,
      padding: 40,
    },
    "@media(max-width: 1025px)": {
      width: "48.97%",
      borderRadius: "2.39vw",
      padding: "3.59vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "3.86vw",
      width: "100%",
      borderRadius: "4.83vw",
      padding: "4.83vw",
    },
  },
  second_block__icon: {
    width: "5.78vw",
    height: "6.06vw",
    "@media(min-width: 1280px)": {
      width: 74.07,
      height: 77.67,
    },
    "@media(max-width: 1025px)": {
      width: "8.88vw",
      height: "9.31vw",
    },
    "@media(max-width: 767px)": {
      width: "17.89vw",
      height: "18.76vw",
    },
  },
  second_block__title: {
    fontFamily: "Inter",
    fontWeight: 900,
    lineHeight: 1,
    textAlign: "center",

    marginTop: "2.27vw",
    fontSize: "4.68vw",
    "@media(min-width: 1280px)": {
      marginTop: 29.17,
      fontSize: 60,
    },
    "@media(max-width: 1025px)": {
      marginTop: "3.49vw",
      fontSize: "4.79vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "7.04vw",
      fontSize: "11.11vw",
    },

    "& strong": {
      ...theme.typography.body2,
      fontWeight: "inherit",
      lineHeight: "inherit",
      fontSize: "inherit",
    },
  },
  second_block__subtitle: {
    fontWeight: 400,
    lineHeight: 1.5,
    color: theme.palette.color.secondary,
    textAlign: "center",

    marginTop: "2.18vw",
    padding: "0 5.07vw",
    fontSize: "1.32w",
    "@media(min-width: 1280px)": {
      marginTop: 28,
      padding: "0 65px",
      fontSize: 17,
    },
    "@media(max-width: 1025px)": {
      marginTop: "3.35vw",
      padding: 0,
      fontSize: "2.03vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "6.76vw",
      fontSize: "4.1vw",
    },
  },
  third_block: {
    background: `
      radial-gradient(84.13% 48.94% at 36.14% 78.21%, #291AD5 0%, rgba(41, 26, 213, 0) 100%),
      radial-gradient(66.6% 38.53% at 67.44% 15.37%, #661DE1 0%, rgba(102, 29, 225, 0) 100%), 
      #EFEFF2
    `,

    marginTop: "2.18vw",
    borderRadius: "1.56vw",
    padding: "5.46vw",
    "@media(min-width: 1280px)": {
      marginTop: 28,
      borderRadius: 20,
      padding: 70,
    },
    "@media(max-width: 1025px)": {
      marginTop: "1.91vw",
      borderRadius: "2.39vw",
      padding: "3.59vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "3.86vw",
      borderRadius: "4.83vw",
      padding: "7.24vw",
    },
  },
  third_block__title: {
    fontFamily: "Inter",
    fontWeight: 900,
    lineHeight: 1,
    textAlign: "center",
    color: theme.palette.color.mainContrast,

    fontSize: "6.25vw",
    "@media(min-width: 1280px)": {
      fontSize: 80,
    },
    "@media(max-width: 1025px)": {
      fontSize: "6.23vw",
    },
    "@media(max-width: 767px)": {
      fontSize: "11.11vw",
    },
  },
}))

const IndexPage = ({ data }) => {
  const classes = useStyles()

  const image_first_block = data.prismicTradeIn.data.image_first_block

  console.log()

  return (
    <Layout>
      <Seo title="Favorites" />
      <HeaderWithIcon
        icon={<TradeIn />}
        title={data.prismicTradeIn.data.title}
        divider={false}
      />

      <div className={classes.wrapperFirstAndSecondBlock}>
        <div className={classes.first_block}>
          <GatsbyImage
            image={image_first_block.localFile.childImageSharp.gatsbyImageData}
            alt={image_first_block.alt ?? "photo"}
            imgStyle={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>

        <div className={classes.second_block}>
          <div className={classes.second_block__icon}>
            <TradeIn />
          </div>

          <div
            dangerouslySetInnerHTML={{
              __html: data.prismicTradeIn.data.title_second_block.html,
            }}
            className={classes.second_block__title}
          />

          <Typography className={classes.second_block__subtitle}>
            {data.prismicTradeIn.data.subtitle_second_block}
          </Typography>
        </div>
      </div>

      <div className={classes.third_block}>
        <Typography className={classes.third_block__title}>
          {data.prismicTradeIn.data.title_third_block}
        </Typography>

        <Typography className={classes.third_block__subtitle}>
          {data.prismicTradeIn.data.subtitle_third_block}
        </Typography>
      </div>
    </Layout>
  )
}

/**
 * Страница trade-in
 * @module src/page/trade-in
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.data - объект данных полученый из prismic
 */
export default IndexPage

export const query = graphql`
  query TradeIn {
    prismicTradeIn {
      data {
        title
        image_first_block {
          alt
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        title_second_block {
          text
          raw
          html
        }
        subtitle_second_block
        title_third_block
        subtitle_third_block
        image_third_block {
          alt
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        body {
          ... on PrismicTradeInBodyParagraph {
            id
            slice_type
            primary {
              title_paragraph {
                html
                raw
                text
              }
              subtitle_paragraph
              text_paragraph
            }
          }
          ... on PrismicTradeInBodyParagraphWithRef {
            id
            slice_type
            primary {
              title_paragraph {
                html
                raw
                text
              }
              subtitle_paragraph
              reference_paragraph
            }
          }
          ... on PrismicTradeInBodyParagraphWithSvg {
            id
            slice_type
            primary {
              title_paragraph {
                html
                raw
                text
              }
              subtitle_paragraph
              svg_paragraph {
                alt
                localFile {
                  publicURL
                }
              }
            }
          }
        }
      }
    }
  }
`
