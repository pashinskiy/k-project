import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles, Typography } from "@material-ui/core"
import { GatsbyImage } from "gatsby-plugin-image"

import TradeInDevice from "../../../../static/svg/trade_in_device.svg"
import Arrow from "../../../../static/svg/arrow.svg"

const useStyles = makeStyles(theme => ({
  wrapper: {
    position: "relative",
    zIndex: 1,
    background: theme.palette.background.main,

    borderRadius: "0.78vw",
    width: "48.03%",
    padding: "3.43vw",
    "@media(min-width: 1280px)": {
      borderRadius: 10,
      padding: 44,
    },
    "@media(max-width: 1025px)": {
      width: "100%",
      borderRadius: "1.19vw",
      padding: "5.27vw",
    },
    "@media(max-width: 767px)": {
      borderRadius: "2.41vw",
      padding: "4.83vw",
    },

    "& > *": {
      marginTop: "3.43vw",
      "@media(max-width: 1025px)": {
        marginTop: 44,
      },
      "@media(max-width: 1025px)": {
        marginTop: "5.27vw",
      },
      "@media(max-width: 767px)": {
        marginTop: "10.62vw",
      },

      "&:first-child": {
        marginTop: 0,
      },

      "& > *": {
        marginTop: "1.09vw",
        "@media(min-width: 1280px)": {
          marginTop: 14,
        },
        "@media(max-width: 1025px)": {
          marginTop: "1.67vw",
        },
        "@media(max-width: 767px)": {
          marginTop: "3.38vw",
        },

        "&:first-child": {
          marginTop: 0,
        },
      },
    },
  },
  title: {
    fontWeight: 700,
    lineHeight: 1.21,

    fontSize: "2.81vw",
    "@media(max-width: 1025px)": {
      fontSize: 36,
    },
    "@media(max-width: 1025px)": {
      fontSize: "4.31vw",
    },
    "@media(max-width: 767px)": {
      fontSize: "8.69vw",
    },

    "& strong": {
      ...theme.typography.body2,
      fontWeight: "inherit",
      lineHeight: "inherit",
      fontSize: "inherit",
    },
  },
  recipient_data: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  subtitle: {
    fontWeight: 600,
    lineHeight: 1.21,

    fontSize: "1.32vw",
    "@media(max-width: 1025px)": {
      fontSize: 17,
    },
    "@media(max-width: 1025px)": {
      fontSize: "2.03vw",
    },
    "@media(max-width: 767px)": {
      fontSize: "4.1vw",
    },
  },
  recipient_data__label: {
    marginTop: 0,
    width: "18.43vw",
    "@media(min-width: 1280px)": {
      width: 236,
    },
    "@media(max-width: 1025px)": {
      width: "38.48vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "6.76vw",
      width: "100%",

      "&:first-child": {
        marginTop: 0,
      },
    },
  },
  input: {
    width: "100%",

    background: "transparent",
    border: `1px solid #D6D5DF`,
    outline: "none",

    fontWeight: 400,
    lineHeight: 1.21,

    marginTop: "1.09vw",
    padding: "1.21vw 0.93vw",
    borderRadius: "0.46vw",
    fontSize: "1.09vw",
    "@media(min-width: 1280px)": {
      marginTop: 14,
      padding: "15.5px 12px",
      borderRadius: 6,
      fontSize: 14,
    },
    "@media(max-width: 1025px)": {
      marginTop: "1.67vw",
      padding: "1.85vw 1.43vw",
      borderRadius: "0.71vw",
      fontSize: "1.67vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "3.38vw",
      padding: "3.74vw 2.89vw",
      borderRadius: "1.44vw",
      fontSize: "3.38vw",
    },

    "&:focus": {
      border: `1px solid #D6D5DF`,
    },
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    ...theme.typography.body2,
    fontWeight: 400,
    lineHeight: 1.21,

    height: "3.12vw",
    fontSize: "1.09vw",
    "@media(min-width: 1280px)": {
      height: 40,
      fontSize: 14,
    },
    "@media(max-width: 1025px)": {
      height: "4.79vw",
      fontSize: "1.67vw",
    },
    "@media(max-width: 767px)": {
      height: "9.66vw",
      fontSize: "3.38vw",
    },

    "&:first-child": {
      borderRadius: "0.46vw 0 0 0.46vw",
      "@media(min-width: 1280px)": {
        borderRadius: "6px 0 0 6px",
      },
      "@media(max-width: 1025px)": {
        borderRadius: "0.71vw 0 0 0.71vw",
      },
      "@media(max-width: 767px)": {
        borderRadius: "1.44vw 0 0 1.44vw",
      },
    },
    "&:last-child": {
      borderRadius: "0 0.46vw 0.46vw 0",
      "@media(min-width: 1280px)": {
        borderRadius: "0 6px 6px 0",
      },
      "@media(max-width: 1025px)": {
        borderRadius: "0 0.71vw 0.71vw 0",
      },
      "@media(max-width: 767px)": {
        borderRadius: "0 1.44vw 1.44vw 0",
      },
    },
  },
  button__active: {
    "-webkit-background-clip": "border-box",
    backgroundClip: "border-box",
    "-webkit-text-fill-color": theme.palette.color.mainContrast,
    color: theme.palette.color.mainContrast,
  },
  select: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",

    border: `1px solid #D6D5DF`,

    borderRadius: "0.46vw",
    padding: "0.93vw",
    "@media(min-width: 1280px)": {
      borderRadius: 6,
      padding: 12,
    },
    "@media(max-width: 1025px)": {
      borderRadius: "0.71vw",
      padding: "1.43vw",
    },
    "@media(max-width: 767px)": {
      borderRadius: "1.44vw",
      padding: "2.89vw",
    },
  },
  select__wrapper_img: {
    borderRadius: "100%",
    border: `1px solid #D6D5DF`,
    overflow: "hidden",

    width: "12.5vw",
    height: "12.5vw",
    padding: "1.56vw",
    "@media(min-width: 1280px)": {
      width: 160,
      height: 160,
      padding: 20,
    },
    "@media(max-width: 1025px)": {
      width: "19.18vw",
      height: "19.18vw",
      padding: "2.39vw",
    },
    "@media(max-width: 767px)": {
      width: "18.59vw",
      height: "18.59vw",
      padding: "2.32vw",
    },
  },
  name_product: {
    ...theme.typography.body2,
    fontWeight: 400,
    lineHeight: 1.21,

    marginLeft: "0.78vw",
    width: "19.53vw",
    fontSize: "1.09vw",
    "@media(min-width: 1280px)": {
      marginLeft: 10,
      width: 250,
      fontSize: 14,
    },
    "@media(max-width: 1025px)": {
      marginLeft: "1.19vw",
      width: "29.97vw",
      fontSize: "1.67vw",
    },
    "@media(max-width: 767px)": {
      marginLeft: "2.41vw",
      width: "37.92vw",
      fontSize: "3.38vw",
    },
  },
  select__icon: {
    width: "1.4vw",
    height: "1.64vw",
    "@media(min-width: 1280px)": {
      width: 18,
      height: 21,
    },
    "@media(max-width: 1025px)": {
      width: "2.15vw",
      height: "2.51vw",
    },
    "@media(max-width: 767px)": {
      width: "4.34vw",
      height: "5.07vw",
    },

    "& path": {
      fill: theme.palette.color.secondaryLight,
    },
  },
}))

/**
 * Калькулятор trade-in
 * @module src/components/tradeInPage/calculator
 */
export default function Calculator() {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    {
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
            }
          }
        }
      }
    }
  `)

  const variantsTurnInCategory = ["iPhone", "Watch", "iPad", "Mac"]
  const [turnInCategory, setTurnInCategory] = React.useState(
    variantsTurnInCategory[0]
  )

  const [turnInProduct, setTurnInProduct] = React.useState(null)
  const variantsTurnInProduct = React.useMemo(() => {
    const newVariantsTurnInProduct = data.allPrismicProduct.edges
      .filter(edge => {
        switch (turnInCategory) {
          case "iPhone":
            return (
              edge.node.data.brand.document?.data.name.toLowerCase() ===
                "apple" &&
              edge.node.data.category.document?.uid === "smartphone"
            )
          case "Watch":
            return (
              edge.node.data.brand.document?.data.name.toLowerCase() ===
                "apple" &&
              edge.node.data.category.document?.uid === "smart-watches"
            )
          case "iPad":
            return (
              edge.node.data.brand.document?.data.name.toLowerCase() ===
                "apple" && edge.node.data.category.document?.uid === "pads"
            )
          case "Mac":
            return (
              edge.node.data.brand.document?.data.name.toLowerCase() ===
                "apple" && edge.node.data.category.document?.uid === "laptops"
            )
        }
      })
      .map(edge => edge.node)

    setTurnInProduct(null)

    return variantsTurnInProduct
  }, [turnInCategory])

  return (
    <div className={classes.wrapper}>
      <Typography className={classes.title}>
        Узнайте <strong>стоимость</strong>
      </Typography>

      <div className={classes.recipient_data}>
        <label className={classes.recipient_data__label}>
          <Typography className={classes.subtitle}>Имя</Typography>

          <input className={classes.input} />
        </label>

        <label className={classes.recipient_data__label}>
          <Typography className={classes.subtitle}>Телефон</Typography>

          <input className={classes.input} />
        </label>
      </div>

      <div className={classes.turn_in_selection_block}>
        <Typography className={classes.subtitle}>
          Какое устройство хотите сдать?
        </Typography>

        <div style={{ display: "flex" }}>
          {variantsTurnInCategory.map(variant => {
            const active = variant === turnInCategory

            return (
              <button
                onClick={() => setTurnInCategory(variant)}
                className={
                  classes.button + " " + (active ? classes.button__active : "")
                }
                style={{ width: 100 / variantsTurnInCategory.length + "%" }}
              >
                {variant}
              </button>
            )
          })}
        </div>

        <button className={classes.select}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p className={classes.select__wrapper_img}>
              {turnInProduct ? (
                <GatsbyImage
                  image={
                    turnInProduct.data.images[0].image.localFile.childImageSharp
                      .gatsbyImageData
                  }
                  alt={turnInProduct.data.images[0].image.alt ?? "photo"}
                  style={{ width: "100%", height: "100%" }}
                  imgStyle={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              ) : (
                <TradeInDevice />
              )}
            </p>

            <Typography
              variant="body2"
              align="left"
              className={classes.name_product}
            >
              {turnInProduct ? turnInProduct.data.name : "Выберете устройство"}
            </Typography>
          </div>

          <p className={classes.select__icon}>
            <Arrow />
          </p>
        </button>
      </div>

      <div className={classes.device_selection_block}>
        <Typography className={classes.subtitle}>
          На какое устройство вы хотите обменять?
        </Typography>
      </div>
    </div>
  )
}
