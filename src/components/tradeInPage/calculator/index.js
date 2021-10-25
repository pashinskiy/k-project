import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles, Modal, Typography, useMediaQuery } from "@material-ui/core"
import { GatsbyImage } from "gatsby-plugin-image"

import PanelSelectProduct from "../panelSelectProduct"
import SelectCategory from "../selectCategory"

import TradeInDevice from "../../../../static/svg/trade_in_device.svg"
import Arrow from "../../../../static/svg/arrow.svg"
import TradeInAddPhoto from "../../../../static/svg/trade_in_add_photo.svg"
import IconCloseDialog from "../../../../static/svg/iconCloseDialog.svg"

const useStyles = makeStyles(theme => ({
  wrapper: {
    position: "relative",
    zIndex: 1,
    background: theme.palette.background.main,
    overflow: "hidden",

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
  tab_panel__button: {
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
  tab_panel__button__active: {
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
  input_files__label: {
    position: "relative",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    cursor: "pointer",

    border: `1px solid #D6D5DF`,

    borderRadius: "0.46vw",
    padding: "1.87vw",
    "@media(min-width: 1280px)": {
      borderRadius: 6,
      padding: 24,
    },
    "@media(max-width: 1025px)": {
      borderRadius: "0.71vw",
      padding: "2.87vw",
    },
    "@media(max-width: 767px)": {
      borderRadius: "1.44vw",
      padding: "2.41vw",
    },
  },
  input_files__label__focus: {
    outline: `solid ${theme.palette.color.accentSecondary}`,
  },
  input_files__icon: {
    width: "2.18vw",
    height: "2.18vw",
    "@media(min-width: 1280px)": {
      width: 28,
      height: 28,
    },
    "@media(max-width: 1025px)": {
      width: "3.35vw",
      height: "3.35vw",
    },
    "@media(max-width: 767px)": {
      width: "5.79vw",
      height: "5.79vw",
    },
  },
  input_files__text: {
    fontWeight: 400,
    lineHeight: 1.4,
    color: theme.palette.color.secondary,

    marginTop: "0.78vw",
    width: "21.4vw",
    fontSize: "1.09vw",
    "@media(min-width: 1280px)": {
      marginTop: 10,
      width: 274,
      fontSize: 14,
    },
    "@media(max-width: 1025px)": {
      marginTop: "1.19vw",
      width: "32.85vw",
      fontSize: "1.67vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "2.41vw",
      width: "100%",
      fontSize: "3.38vw",
    },
  },
  panel_photo: {
    display: "flex",
    flexWrap: "wrap",

    marginTop: "0.46vw",
    marginLeft: "-0.62vw",
    width: "calc(100% + 0.62vw)",
    "@media(min-width: 1280px)": {
      marginTop: 6,
      marginLeft: -8,
      width: "calc(100% + 8px)",
    },
    "@media(max-width: 1025px)": {
      marginTop: "0.71vw",
      marginLeft: "-0.95vw",
      width: "calc(100% + 0.95vw)",
    },
    "@media(max-width: 767px)": {
      flexWrap: "nowrap",
      overflowX: "scroll",

      scrollbarWidth: "none",
      "-ms-overflow-style": "none",
      "&::-webkit-scrollbar": {
        display: "none",
      },

      marginTop: "1.44vw",
      marginLeft: "-4.83vw",
      width: "calc(100% + 9.66vw)",
    },

    "& *": {
      flexShrink: 0,
    },
  },
  wrapper_photo: {
    position: "relative",

    marginTop: "0.62vw",
    marginLeft: "0.62vw",
    borderRadius: "0.46vw",
    width: "4.68vw",
    height: "4.68vw",
    "@media(min-width: 1280px)": {
      marginTop: 8,
      marginLeft: 8,
      borderRadius: 6,
      width: 60,
      height: 60,
    },
    "@media(max-width: 1025px)": {
      marginTop: "0.95vw",
      marginLeft: "0.95vw",
      borderRadius: "0.71vw",
      width: "7.19vw",
      height: "7.19vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "1.93vw",
      marginLeft: "1.93vw",
      borderRadius: "1.44vw",
      width: "14.49vw",
      height: "14.49vw",

      "&:first-child": {
        marginLeft: "4.83vw",
      },
    },

    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      overflow: "hidden",

      borderRadius: "0.46vw",
      "@media(min-width: 1280px)": {
        borderRadius: 6,
      },
      "@media(max-width: 1025px)": {
        borderRadius: "0.71vw",
      },
      "@media(max-width: 767px)": {
        borderRadius: "1.44vw",
      },
    },

    "& .icon_cross": {
      display: "none",
      position: "absolute",
      top: 0,
      left: 0,

      justifyContent: "center",
      alignItems: "center",

      width: "100%",
      height: "100%",
      background:
        "linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))",

      borderRadius: "0.46vw",
      "@media(min-width: 1280px)": {
        borderRadius: 6,
      },
      "@media(max-width: 1025px)": {
        display: "flex",
        background: theme.palette.background.main,
        border: `1px solid ${theme.palette.color.main}`,
        borderRadius: "100%",
        left: "auto",

        top: "-0.47vw",
        right: "-0.47vw",
        width: "2.39vw",
        height: "2.39vw",
      },
      "@media(max-width: 767px)": {
        top: "-0.96vw",
        right: "-0.96vw",
        width: "4.83vw",
        height: "4.83vw",
      },
    },
    "&:hover .icon_cross": {
      display: "flex",
    },
  },
  iconCloseDialog: {
    display: "flex",

    width: "1.56vw",
    height: "1.56vw",
    "@media(min-width: 1280px)": {
      width: 20,
      height: 20,
    },
    "@media(max-width: 1025px)": {
      "& path": {
        fill: theme.palette.color.main,
      },
      width: "0.95vw",
      height: "0.95vw",
    },
    "@media(max-width: 767px)": {
      width: "1.93vw",
      height: "1.93vw",
    },
  },
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  you_sale_block__text: {
    fontWeight: 400,
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
  you_sale_block__accent_text: {
    fontWeight: 700,
    lineHeight: 1.21,

    marginTop: "0.62vw",
    fontSize: "2.18vw",
    "@media(max-width: 1025px)": {
      marginTop: 8,
      fontSize: 28,
    },
    "@media(max-width: 1025px)": {
      marginTop: "0.95vw",
      fontSize: "3.35vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "1.93vw",
      fontSize: "6.76vw",
    },

    "& big": {
      fontSize: "3.43vw",
      "@media(max-width: 1025px)": {
        fontSize: 44,
      },
      "@media(max-width: 1025px)": {
        fontSize: "5.27vw",
      },
      "@media(max-width: 767px)": {
        fontSize: "10.62vw",
      },
    },
  },
  button_send: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    background: theme.palette.background.accent,

    marginTop: "1.56vw",
    borderRadius: "0.93vw",
    height: "3.12vw",
    "@media(min-width: 1280px)": {
      marginTop: 20,
      borderRadius: 12,
      height: 40,
    },
    "@media(max-width: 1025px)": {
      marginTop: "2.39vw",
      borderRadius: "1.43vw",
      height: "4.79vw",
    },
    "@media(max-width: 767px)": {
      marginTop: "4.83vw",
      borderRadius: "2.89vw",
      height: "9.66vw",
    },
  },
  button_send__text: {
    fontWeight: 700,
    lineHeight: 1.21,
    color: theme.palette.color.mainContrast,

    fontSize: "1.09vw",
    "@media(min-width: 1280px)": {
      fontSize: 14,
    },
    "@media(max-width: 1025px)": {
      fontSize: "1.67vw",
    },
    "@media(max-width: 767px)": {
      fontSize: "3.38vw",
    },
  },
}))

/**
 * Калькулятор trade-in
 * @module src/components/tradeInPage/calculator
 */
export default function Calculator() {
  const classes = useStyles()
  const smartphone = useMediaQuery("(max-width: 767px)")

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
  `)

  const products = React.useMemo(
    () => data.allPrismicProduct.edges.map(edge => edge.node),
    [data]
  )

  // данные и функции блока сдаваемого товара
  const variantsTurnInCategory = ["iPhone", "Watch", "iPad", "Mac"]
  const [turnInCategory, setTurnInCategory] = React.useState(
    variantsTurnInCategory[0]
  )

  const [
    showPanelSelectTurnInProducts,
    setShowPanelSelectTurnInProducts,
  ] = React.useState(false)

  const [turnInProduct, setTurnInProduct] = React.useState(null)
  const variantsTurnInProduct = React.useMemo(() => {
    const newVariantsTurnInProduct = products.filter(product => {
      switch (turnInCategory) {
        case "iPhone":
          return (
            product.data.brand.document?.data.name.toLowerCase() === "apple" &&
            product.data.category.document?.uid === "smartphone"
          )
        case "Watch":
          return (
            product.data.brand.document?.data.name.toLowerCase() === "apple" &&
            product.data.category.document?.uid === "smart-watches"
          )
        case "iPad":
          return (
            product.data.brand.document?.data.name.toLowerCase() === "apple" &&
            product.data.category.document?.uid === "pads"
          )
        case "Mac":
          return (
            product.data.brand.document?.data.name.toLowerCase() === "apple" &&
            product.data.category.document?.uid === "laptops"
          )
      }
    })

    setTurnInProduct(null)

    return newVariantsTurnInProduct
  }, [turnInCategory])

  const [photos, setPhotos] = React.useState([])
  const validExtensions = React.useMemo(() => ({
    jpg: true,
    jpeg: true,
    jp2: true,
    png: true,
    gif: true,
    svg: true,
  }))

  function addPhoto(files) {
    const allPromis = []
    for (let file of files) {
      const fileName = file.name.toLowerCase()
      if (!validExtensions[fileName.slice(fileName.lastIndexOf(".") + 1)])
        continue

      allPromis.push(
        new Promise((resolve, reject) => {
          const reader = new FileReader()
          reader.readAsDataURL(file)
          reader.onload = () => resolve(reader.result)
          reader.onerror = error => reject(error)
        })
      )
    }

    const newPhotos = [...photos]
    Promise.all(allPromis).then(res => {
      newPhotos.push(...res)
      setPhotos(newPhotos)
    })
  }
  function delPhoto(index) {
    const newPhotos = [...photos]
    newPhotos.splice(index, 1)
    setPhotos(newPhotos)
  }
  function handlerInputFiles(e) {
    if (!e.target.files.length) return
    addPhoto(e.target.files)
  }

  const inputFile = React.useRef(null)
  React.useEffect(() => {
    if (!inputFile) return

    function prevent(e) {
      e.preventDefault()
      e.stopPropagation()
    }
    function addClass() {
      inputFile.current.classList.add(classes.input_files__label__focus)
    }
    function removeClass(e) {
      const rect = inputFile.current.getBoundingClientRect()

      let dx = e.pageX - rect.left
      let dy = e.pageY - rect.top
      if (dx < 0 || dx > rect.width || dy < 0 || dy > rect.height) {
        inputFile.current.classList.remove(classes.input_files__label__focus)
      }
    }
    function addFiles(e) {
      removeClass(e)
      addPhoto(e.dataTransfer.files)
    }

    const canceledEvents = [
      "drag",
      "dragstart",
      "dragend",
      "dragover",
      "dragenter",
      "dragleave",
      "drop",
    ]

    canceledEvents.forEach(event =>
      inputFile.current.addEventListener(event, prevent)
    )
    inputFile.current.addEventListener("dragover", addClass)
    inputFile.current.addEventListener("dragenter", addClass)
    inputFile.current.addEventListener("dragleave", removeClass)
    inputFile.current.addEventListener("drop", addFiles)

    return () => {
      canceledEvents.forEach(event =>
        inputFile.current.removeEventListener(event, prevent)
      )
      inputFile.current.removeEventListener("dragover", addClass)
      inputFile.current.removeEventListener("dragenter", addClass)
      inputFile.current.removeEventListener("dragleave", removeClass)
      inputFile.current.removeEventListener("drop", addFiles)
    }
  }, [inputFile])

  // данные и функции блока желаемого товара
  const [category, setCategory] = React.useState(null)

  const [showPanelSelectProducts, setShowPanelSelectProducts] = React.useState(
    false
  )

  const [product, setProduct] = React.useState(null)
  const variantsProduct = React.useMemo(() => {
    if (!category) return products

    setProduct(null)

    return products.filter(
      product => product.data.category.document?.uid === category.uid
    )
  }, [category])

  const sale = turnInProduct ? Math.trunc(turnInProduct.data.price * 0.02) : 0

  // преобразуем цену
  function priceMod(value) {
    let price = "" + value
    let length = price.length
    for (let i = 1; i < length; i++) {
      if (i % 3 === 0) {
        price = price.slice(0, length - i) + " " + price.slice(length - i)
      }
    }
    return price
  }

  function send() {
    console.log("send")
  }

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
                  classes.tab_panel__button +
                  " " +
                  (active ? classes.tab_panel__button__active : "")
                }
                style={{ width: 100 / variantsTurnInCategory.length + "%" }}
              >
                {variant}
              </button>
            )
          })}
        </div>

        <button
          onClick={() => setShowPanelSelectTurnInProducts(true)}
          className={classes.select}
        >
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

        <label
          ref={inputFile}
          onChange={handlerInputFiles}
          className={classes.input_files__label}
        >
          <input
            type="file"
            multiple
            style={{
              position: "absolute",
              width: "0.1px",
              height: " 0.1px",
              opacity: 0,
              zIndex: -10,
            }}
          />

          <p className={classes.input_files__icon}>
            <TradeInAddPhoto />
          </p>

          <Typography align="center" className={classes.input_files__text}>
            {smartphone
              ? "Нажмите, чтобы загрузить фотографии"
              : "Нажмите, чтобы загрузить фотографии, или перетащите их"}
          </Typography>
        </label>

        {photos.length ? (
          <div className={classes.panel_photo}>
            {photos.map((photo, i) => (
              <button
                onClick={() => delPhoto(i)}
                key={photo}
                className={classes.wrapper_photo}
              >
                <img
                  src={photo}
                  alt={`photo_${i + 1}`}
                  width={60}
                  height={60}
                />

                <div className="icon_cross">
                  <div className={classes.iconCloseDialog}>
                    <IconCloseDialog />
                  </div>
                </div>
              </button>
            ))}
          </div>
        ) : null}

        <Modal
          open={showPanelSelectTurnInProducts}
          onClose={() => setShowPanelSelectTurnInProducts(false)}
          className={classes.modal}
          BackdropProps={{
            style: { backgroundColor: "rgba(32, 29, 29, 0.9)" },
          }}
        >
          <PanelSelectProduct
            products={variantsTurnInProduct}
            selectProduct={turnInProduct}
            setProduct={setTurnInProduct}
            close={() => setShowPanelSelectTurnInProducts(false)}
          />
        </Modal>
      </div>

      <div className={classes.device_selection_block}>
        <Typography className={classes.subtitle}>
          На какое устройство вы хотите обменять?
        </Typography>

        <div className={classes.wrapper_select_category}>
          <SelectCategory
            options={data.allPrismicSubcategory.edges}
            afterChange={setCategory}
            selectValue={category}
          />
        </div>

        <button
          onClick={() => setShowPanelSelectProducts(true)}
          className={classes.select}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <p className={classes.select__wrapper_img}>
              {product ? (
                <GatsbyImage
                  image={
                    product.data.images[0].image.localFile.childImageSharp
                      .gatsbyImageData
                  }
                  alt={product.data.images[0].image.alt ?? "photo"}
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
              {product ? product.data.name : "Выберете устройство"}
            </Typography>
          </div>

          <p className={classes.select__icon}>
            <Arrow />
          </p>
        </button>

        <Modal
          open={showPanelSelectProducts}
          onClose={() => setShowPanelSelectProducts(false)}
          className={classes.modal}
          BackdropProps={{
            style: { backgroundColor: "rgba(32, 29, 29, 0.9)" },
          }}
        >
          <PanelSelectProduct
            products={variantsProduct}
            selectProduct={product}
            setProduct={setProduct}
            close={() => setShowPanelSelectProducts(false)}
          />
        </Modal>
      </div>

      <div className={classes.you_sale_block}>
        <Typography align="center" className={classes.you_sale_block__text}>
          Ваша скидка:
        </Typography>

        <Typography
          align="center"
          variant="body2"
          className={classes.you_sale_block__accent_text}
        >
          до
          <big>{` ${priceMod(sale)} ₽`}</big>
        </Typography>

        <button onClick={send} className={classes.button_send}>
          <Typography className={classes.button_send__text}>
            Отправить заявку
          </Typography>
        </button>
      </div>
    </div>
  )
}
