import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles, Grid, useMediaQuery } from "@material-ui/core"
import Social from "../layout/footer/social"
import SimilarProduct from "../scrollBar/productsScrollBar"
import CardSimilarProduct from "../scrollBar/productsScrollBar/cardProduct"

const useStyles = makeStyles(theme => ({
  wrapper: {},
  socialsItems: {
    padding: "0.9375vw",
    "@media(min-width: 1280px)": {
      padding: "12px",
    },
    "@media(max-width: 1025px)": {
      padding: "1.438vw",
    },
    "@media(max-width: 767px)": {
      padding: "2.898vw",
      paddingTop: 0,
      paddingBottom: "9.661vw",
    },
  },

  socialContainerOther: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  socialContainerMobile: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },

  productItem: {
    paddingBottom: "3.125vw",
    "@media(min-width: 1280px)": {
      paddingBottom: "40px",
    },
    "@media(max-width: 1025px)": {
      paddingBottom: "4.796vw",
    },
    "&:nth-last-of-type(1)": {
      paddingBottom: 0,
    },
  },
  productItemMobile: {
    paddingBottom: "16.425vw",
  },
  salesText: {
    lineHeight: "1.8",
    width: "53.125vw",
    paddingBottom: "5.3125vw",
    "& > *": {
      fontSize: "1.328vw",
    },
    "& p": {
      marginBlockEnd: "3.125vw",
      marginBlockStart: 0,
    },
    "& strong": {
      fontSize: "1.875vw",
    },
    "& ul": {
      paddingInlineStart: "1.56vw",
    },
    "@media(min-width: 1280px)": {
      width: "680px",
      paddingBottom: "68px",
      "& > *": {
        fontSize: 17,
      },
      "& p": {
      marginBlockEnd: "40px",
      },
      "& strong": {
        fontSize: 24,
      },
      "& ul": {
        paddingInlineStart: "20px",
      },
    },
    "@media(max-width: 1025px)": {
      width: "49.4vw",
      paddingBottom: "8.153vw",
      "& > *": {
        fontSize: "2.038vw",
      },
      "& p": {
      marginBlockEnd: "3.9vw",
      },
      "& strong": {
        fontSize: "2.877vw",
      },
      "& ul": {
        paddingInlineStart: "1.95vw",
      },
    },
    "@media(max-width: 767px)": {
      width: "100%",
      paddingBottom: "9.661vw",
      "& > *": {
        fontSize: "4.1vw",
      },
      "& p": {
      marginBlockEnd: "5.2vw",
      },
      "& strong": {
        fontSize: "5.797vw",
      },
      "& ul": {
        paddingInlineStart: "3.9vw",
      },
    },
    "& :nth-of-type(1)": {
      marginBlockStart: 0,
    },
    "& img": {
      width: "100%",
    },
  },
  strongText: {
    marginBottom: "1.17vw",
    "@media(min-width: 1280px)": {
      marginBottom: "15px",
    },
    "@media(max-width: 1025px)": {
      marginBottom: "1.46vw",
    },
    "@media(max-width: 767px)": {
      marginBottom: "1.95vw"
    },
  },
}))

/**
 * Блок контента на странице акции
 * @module src/components/salesTextPanel
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.sale - объект акции полученый из prismic
 * @param {Object[]} props.socials - массив слайсов соцсетей полученый из prismic
 */
export default function SalesTextPanel({ sale, socials }) {
  const classes = useStyles()
  const mobile = useMediaQuery("(max-width: 767px)")
  const pad = useMediaQuery("(max-width: 1025px)")
  const desktop = useMediaQuery("(min-width: 1280px)")

  const data = useStaticQuery(graphql`
    {
      allPrismicProduct(limit: 10) {
        edges {
          node {
            id
            uid
            data {
              all_product_accessories {
                product_accessories {
                  document {
                    ... on PrismicProduct {
                      id
                      uid
                      data {
                        name
                        price
                        old_price
                        images {
                          image {
                            localFile {
                              childImageSharp {
                                gatsbyImageData
                              }
                            }
                            alt
                          }
                        }
                        delivery {
                          document {
                            ... on PrismicDelivery {
                              data {
                                body {
                                  ... on PrismicDeliveryBodyDeliveryToCities {
                                    id
                                    items {
                                      city_name
                                      cost
                                      delivery_description
                                      timing
                                    }
                                  }
                                }
                                variants {
                                  description
                                  name
                                }
                              }
                            }
                          }
                        }
                        credit {
                          document {
                            ... on PrismicCredit {
                              data {
                                months_1
                                months_2
                                percent
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              name
              price
              old_price
              color
              color_group
              sale_product
              images {
                image {
                  alt
                  localFile {
                    childImageSharp {
                      gatsbyImageData(height: 200)
                    }
                  }
                }
              }
              delivery {
                document {
                  ... on PrismicDelivery {
                    data {
                      body {
                        ... on PrismicDeliveryBodyDeliveryToCities {
                          id
                          items {
                            city_name
                            cost
                            delivery_description
                            timing
                          }
                        }
                      }
                      variants {
                        description
                        name
                      }
                    }
                  }
                }
              }
              credit {
                document {
                  ... on PrismicCredit {
                    data {
                      months_1
                      months_2
                      percent
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
  const saleProducts = sale.data.sales_products[0].product_doc.document
    ? sale.data.sales_products.map(product => product.product_doc.document)
    : data.allPrismicProduct.edges.slice(0, 3).map(edge => edge.node)

    const setRef = React.useCallback(node => {
      if (node !== null) {
        const strongColl = node.getElementsByTagName("strong")
        for(let i=0; i<strongColl.length; i++){
          if (mobile){
            strongColl[i].parentElement.style.marginBlockEnd = "1.95vw"
          }
          else if (pad){
            strongColl[i].parentElement.style.marginBlockEnd = "1.46vw"
          }else if(desktop){
            strongColl[i].parentElement.style.marginBlockEnd = "15px"
          }
          else {
            strongColl[i].parentElement.style.marginBlockEnd = "1.17vw"
          }
        }
      }
    })

  return (
    <Grid container justify="space-between">
      <Grid
        item
        className={
          mobile ? classes.socialContainerMobile : classes.socialContainerOther
        }
      >
        {socials.map(icon => (
          <div className={classes.socialsItems}>
            <Social
              icon={icon.primary.social_img.localFile?.publicURL}
              alt={icon.primary.social_img.alt ?? "img"}
              link={icon.primary.link.url}
              key={icon.id}
            />
          </div>
        ))}
      </Grid>
      <Grid item>
        <div
          ref={setRef}
          className={classes.salesText}
          dangerouslySetInnerHTML={{ __html: sale.data.salestext.html }}
        ></div>
      </Grid>
      <Grid item>
        {mobile ? (
          <div className={classes.productItemMobile}>
            <SimilarProduct products={saleProducts} withoutHeader={true} />
          </div>
        ) : (
          saleProducts.map(function (mapProduct, i) {
            return (
              <div
                className={classes.productItem}
                key={"product-" + mapProduct.uid + "-" + i}
              >
                <CardSimilarProduct product={mapProduct} />
              </div>
            )
          })
        )}
      </Grid>
    </Grid>
  )
}
