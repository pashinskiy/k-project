import React from "react"
import { graphql } from "gatsby"
import { makeStyles, Typography, useMediaQuery } from "@material-ui/core"
import { GatsbyImage } from "gatsby-plugin-image"

import Seo from "../components/seo"
import Layout from "../components/layout"

import HeaderWithIcon from "../components/headers/headerWithIcon"

import Resell from "../../static/svg/resell.svg"
import RenderElement from "../components/tradeInPage/renderElement"
import Calculator from "../components/tradeInPage/calculator"

const useStyles = makeStyles(theme => ({
  first_block: {
    overflow: "hidden",

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    background: `
      radial-gradient(84.13% 48.94% at 36.14% 78.21%, #291AD5 0%, rgba(41, 26, 213, 0) 100%),
      radial-gradient(66.6% 38.53% at 67.44% 15.37%, #661DE1 0%, rgba(102, 29, 225, 0) 100%), 
      #EFEFF2
    `,

    marginTop: "2.18vw",
    borderRadius: "1.56vw",
    padding: "1.25vw 0 1.25vw 5.46vw",
    "@media(min-width: 1280px)": {
      marginTop: 28,
      borderRadius: 20,
      padding: "16px 0 16px 70px",
    },
    "@media(max-width: 1025px)": {
      marginTop: "1.91vw",
      borderRadius: "2.39vw",
      padding: "1.19vw 0 1.19vw 3.59vw",
    },
    "@media(max-width: 767px)": {
      flexDirection: "column",

      background: `
        radial-gradient(92.63% 27% at 30.03% 87.35%, #291AD5 0%, rgba(41, 26, 213, 0) 100%), 
        radial-gradient(354.34% 47.28% at 65.22% 32.21%, #661DE1 0%, rgba(102, 29, 225, 0) 100%),
        #EFEFF2
      `,

      marginTop: "3.86vw",
      borderRadius: "4.83vw",
      padding: "9.66vw 7.24vw  2.41vw",
    },
  },
  first_block__content_wrapper: {
    width: "33.04vw",
    "@media(min-width: 1280px)": {
      width: 423,
    },
    "@media(max-width: 1025px)": {
      width: "40.16vw",
    },
    "@media(max-width: 767px)": {
      width: "100%",
    },
  },
  first_block__title: {
    fontWeight: 900,
    lineHeight: 1.2,
    color: theme.palette.color.mainContrast,
    textAlign: "left",

    fontSize: "3.9vw",
    "@media(min-width: 1280px)": {
      fontSize: 50,
    },
    "@media(max-width: 1025px)": {
      fontSize: "4.79vw",
    },
    "@media(max-width: 767px)": {
      textAlign: "center",
      fontSize: "7.24vw",
    },
  },
  first_block__subtitle: {
    fontWeight: 700,
    lineHeight: 1.2,
    color: theme.palette.color.mainContrastLight,
    textAlign: "left",

    marginTop: "2.18vw",
    fontSize: "2.34vw",
    "@media(min-width: 1280px)": {
      marginTop: 28,
      fontSize: 30,
    },
    "@media(max-width: 1025px)": {
      marginTop: "3.35vw",
      fontSize: "3.11vw",
    },
    "@media(max-width: 767px)": {
      textAlign: "center",
      marginTop: "6.76vw",
      fontSize: "4.83vw",
    },
  },
  first_block__image_wrapper: {
    position: "relative",

    width: "46.71vw",
    height: "36.32vw",
    "@media(min-width: 1280px)": {
      width: 598,
      height: 465,
    },
    "@media(max-width: 1025px)": {
      width: "44.96vw",
      height: "42.44vw",
    },
    "@media(max-width: 767px)": {
      alignSelf: "flex-start",

      marginTop: "10.06vw",
      marginLeft: "-4.83vw",
      width: "84.05vw",
      height: "80.43vw",
    },
  },
  first_block__image: {
    position: "absolute",
    right: 0,
    left: 0,
    height: "100%",
  },
  paragraphs_block: {
    background: theme.palette.background.secondary,

    marginTop: "2.18vw",
    borderRadius: "1.56vw",
    padding: "3.12vw 8.04vw",
    "@media(min-width: 1280px)": {
      marginTop: 28,
      borderRadius: 20,
      padding: "40px 103px",
    },
    "@media(max-width: 1025px)": {
      marginTop: "1.91vw",
      borderRadius: "2.39vw",
      padding: "4.79vw 8.87vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "3.86vw",
      borderRadius: "4.83vw",
      padding: "7.24vw",
    },

    "& > *": {
      marginTop: "6.25vw",
      "@media(min-width: 1280px)": {
        marginTop: 80,
      },
      "@media(max-width: 1025px)": {
        marginTop: "9.59vw",
      },
      "@media(max-width: 767px)": {
        marginTop: "19.32vw",
      },

      "&:first-child": {
        marginTop: 0,
      },
    },
  },
  paragraph: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",

    "& > *": {
      flexShrink: 0,
    },
  },
  count: {
    fontWeight: 900,
    lineHeight: 0.8,

    "-webkit-text-stroke": `1px ${theme.palette.color.accentSecondary}`,
    "-webkit-text-fill-color": "transparent",
    color: theme.palette.color.accentSecondary,

    width: "7.96vw",
    fontSize: "7.81vw",
    "@media(min-width: 1280px)": {
      width: 102,
      fontSize: 100,
    },
    "@media(max-width: 1025px)": {
      width: "12.23vw",
      fontSize: "11.99vw",
    },
    "@media(max-width: 767px)": {
      width: "24.63vw",
      fontSize: "24.15vw",
    },
  },
  paragraph__content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",

    width: "100%",
    "@media(max-width: 1025px)": {
      flexDirection: "column",
      width: "58.2vw",
    },
    "@media(max-width: 767px)": {
      width: "100%",
    },

    "& > *": {
      flexShrink: 0,

      "@media(max-width: 1025px)": {
        marginTop: "3.35vw",
      },
      "@media(max-width: 767px)": {
        marginTop: "6.76vw",
      },

      "&:first-child": {
        marginTop: 0,
      },
    },
  },
  paragraph__central_block: {
    width: "37vw",
    "@media(min-width: 1280px)": {
      width: 486,
    },
    "@media(max-width: 1025px)": {
      width: "100%",
    },

    "& > *": {
      marginTop: "2.18vw",
      "@media(min-width: 1280px)": {
        marginTop: 28,
      },
      "@media(max-width: 1025px)": {
        marginTop: "3.35vw",
      },
      "@media(max-width: 767px)": {
        marginTop: "6.76vw",
      },

      "&:first-child": {
        marginTop: 0,
      },
    },
  },
  paragraph__title: {
    fontFamily: "Inter",
    fontWeight: 900,
    lineHeight: 1,

    fontSize: "3.12vw",
    "@media(min-width: 1280px)": {
      fontSize: 40,
    },
    "@media(max-width: 1025px)": {
      fontSize: "4.79vw",
    },
    "@media(max-width: 767px)": {
      fontSize: "7.72vw",
    },

    "& strong": {
      ...theme.typography.body2,
      fontWeight: "inherit",
      lineHeight: "inherit",
      fontSize: "inherit",
    },
  },
  paragraph__subtitle: {
    fontWeight: 400,
    lineHeight: 1.5,
    color: theme.palette.color.secondary,

    width: "28.12vw",
    fontSize: "1.09vw",
    "@media(min-width: 1280px)": {
      width: 360,
      fontSize: 14,
    },
    "@media(max-width: 1025px)": {
      width: "43.16vw",
      fontSize: "1.67vw",
    },
    "@media(max-width: 767px)": {
      width: "100%",
      fontSize: "3.38vw",
    },
  },
  calculator_block: {
    display: "flex",
    justifyContent: "space-between",

    background: `
      radial-gradient(87.16% 46.02% at 32.48% 16.51%, #291AD5 0%, rgba(41, 26, 213, 0) 100%), 
      radial-gradient(70.33% 40.8% at 54.33% 90.84%, #661DE1 0%, rgba(102, 29, 225, 0) 100%), 
      #EFEFF2
    `,

    marginTop: "2.18vw",
    borderRadius: "1.56vw",
    padding: "0.78vw",
    "@media(min-width: 1280px)": {
      marginTop: 28,
      borderRadius: 20,
      padding: 10,
    },
    "@media(max-width: 1025px)": {
      marginTop: "1.91vw",
      borderRadius: "2.39vw",
      padding: "1.19vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "3.86vw",
      borderRadius: "4.83vw",
      padding: "2.41vw",
    },
  },
  calculator_block__left_block: {
    position: "relative",
    width: "44.44%",

    marginLeft: "1.95vw",
    "@media(min-width: 1280px)": {
      marginLeft: 25,
    },
  },
  calculator_block__text: {
    fontWeight: 900,
    lineHeight: 0.97,
    textTransform: "uppercase",
    color: theme.palette.color.mainContrast,
    transform: "matrix(1, -0.16, 0, 0.99, 0, 0)",

    marginTop: "16.79vw",
    marginBottom: "5.15vw",
    fontSize: "6.95vw",
    "@media(min-width: 1280px)": {
      marginTop: 215,
      marginBottom: 66,
      fontSize: 89,
    },

    "&:first-child": {
      position: "relative",
      zIndex: 1,

      marginTop: "5.15vw",
      "@media(min-width: 1280px)": {
        marginTop: 66,
      },
    },

    "&:nth-child(2)": {
      opacity: 0.4,
    },
    "&:nth-child(3)": {
      opacity: 0.1,
    },
  },
  calculator_block__img_phone: {
    position: "absolute",
    objectFit: "contain",

    top: "-11.17vw",
    right: "-18.13vw",
    width: "37.34vw",
    height: "35.07vw",
    "@media(min-width: 1280px)": {
      top: -143,
      right: -232.18,
      width: 478,
      height: 449,
    },
  },
  calculator_block__img_pad: {
    position: "absolute",
    zIndex: 1,
    objectFit: "contain",

    top: "16.53vw",
    left: "-4.92vw",
    width: "37.42vw",
    height: "41.09vw",
    "@media(min-width: 1280px)": {
      top: 211.66,
      left: -63,
      width: 479,
      height: 526,
    },
  },
  calculator_block__img_watch: {
    position: "absolute",
    objectFit: "contain",

    bottom: "-3.07vw",
    right: "-11.29vw",
    width: "21.95vw",
    height: "22.42vw",
    "@media(min-width: 1280px)": {
      bottom: -39.4,
      right: -144.59,
      width: 281,
      height: 287,
    },
  },
}))

const IndexPage = ({ data }) => {
  const classes = useStyles()
  const desktop = useMediaQuery("(min-width: 1025px)")
  const pad = useMediaQuery("(max-width: 1025px) and (min-width: 768px)")

  const image_first_block = data.prismicResell.data.image_first_block

  const paragraphs = React.useMemo(
    () =>
      data.prismicResell.data.body.filter(
        slice =>
          slice.slice_type === "paragraph" ||
          slice.slice_type === "paragraph_with_ref" ||
          slice.slice_type === "paragraph_with_svg"
      ),
    [data]
  )

  return (
    <Layout>
      <Seo title="Resell" />
      <HeaderWithIcon
        icon={<Resell />}
        title={data.prismicResell.data.title}
        divider={false}
      />

      <div className={classes.first_block}>
        <div className={classes.first_block__content_wrapper}>
          <Typography className={classes.first_block__title}>
            {data.prismicResell.data.title_first_block}
          </Typography>

          <Typography className={classes.first_block__subtitle}>
            {data.prismicResell.data.subtitle_first_block}
          </Typography>
        </div>

        <div className={classes.first_block__image_wrapper}>
          <GatsbyImage
            image={image_first_block.localFile.childImageSharp.gatsbyImageData}
            alt={image_first_block.alt ?? "image_first_block"}
            className={classes.first_block__image}
            imgStyle={{ width: "auto", height: "100%" }}
          />
        </div>
      </div>

      <div className={classes.paragraphs_block}>
        {paragraphs.map((paragraph, i) => (
          <div className={classes.paragraph}>
            {pad ? (
              <Typography align="right" className={classes.count}>{`${
                i + 1
              }.`}</Typography>
            ) : null}

            <div className={classes.paragraph__content}>
              {pad ? null : (
                <Typography align="right" className={classes.count}>{`${
                  i + 1
                }.`}</Typography>
              )}

              <div className={classes.paragraph__central_block}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: paragraph.primary.title_paragraph.html,
                  }}
                  className={classes.paragraph__title}
                />

                <RenderElement paragraph={paragraph} />
              </div>

              <Typography className={classes.paragraph__subtitle}>
                {paragraph.primary.subtitle_paragraph}
              </Typography>
            </div>
          </div>
        ))}
      </div>

      <div className={classes.calculator_block}>
        {desktop ? (
          <div className={classes.calculator_block__left_block}>
            <Typography className={classes.calculator_block__text}>
              Продавай старую технику
            </Typography>

            <Typography className={classes.calculator_block__text}>
              Продавай старую технику
            </Typography>

            <img
              src="/image/trade-in-phone.png"
              alt="trade-in-phone"
              className={classes.calculator_block__img_phone}
            />
            <img
              src="/image/trade-in-pad.png"
              alt="trade-in-pad"
              className={classes.calculator_block__img_pad}
            />
            <img
              src="/image/trade-in-watch.png"
              alt="trade-in-watch"
              className={classes.calculator_block__img_watch}
            />
          </div>
        ) : null}

        <Calculator variant="resell" data={data} />
      </div>
    </Layout>
  )
}

/**
 * Страница resell
 * @module src/page/resell
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.data - объект данных полученый из prismic
 */
export default IndexPage

export const query = graphql`
  query Resell {
    prismicResell {
      data {
        title
        title_first_block
        subtitle_first_block
        image_first_block {
          alt
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        body {
          ... on PrismicResellBodyParagraph {
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
          ... on PrismicResellBodyParagraphWithRef {
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
              reference_text_paragraph
            }
          }
          ... on PrismicResellBodyParagraphWithSvg {
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
    allPrismicProduct {
      edges {
        node {
          id
          uid
          data {
            category {
              document {
                ... on PrismicSubcategory {
                  id
                  uid
                }
              }
            }
            name
            price
            old_price
            search_phrases
            brand {
              document {
                ... on PrismicBrand {
                  id
                  data {
                    name
                  }
                }
              }
            }
            images {
              image {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
            tags {
              tag {
                document {
                  ... on PrismicTag {
                    id
                    data {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    allPrismicSubcategory {
      edges {
        node {
          id
          uid
          data {
            name
          }
        }
      }
    }
  }
`
