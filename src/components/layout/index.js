import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { makeStyles } from "@material-ui/core"
import Header from "./header"
import Footer from "./footer"
import MobileMenu from "./mobileMenu"
import Catalog from "./catalog"
import "./layout.css"
import MobileCatalog from "./catalog/mobile"

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    width: "100vw",
    padding: "0 2.18vw",
    margin: "0 auto",
    "@media(min-width: 1280px)": {
      maxWidth: 1280,
      width: "100%",
      padding: "0 28px",
    },
    "@media(max-width: 1025px)": {
      padding: "0 3.35vw",
    },
    "@media(max-width: 767px)": {
      padding: "0 6.76vw",
    },
  },
  content: {
    flex: 1,
  },
  background: {
    background: "rgba(0,0,0,.5)",
    zIndex: 100,
    position: "fixed",
    width: "100vw",
    height: "100vh",
    top: 0,
    left: 0,
    animationName: props => (props.animation === true ? "back_in" : "back_out"),
    animationDuration: ".3s",
    animationTimingFunction: "ease-out",
    animationFillMode: "forwards",
  },
}))

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query Layout {
      allPrismicHeader {
        edges {
          node {
            data {
              cart_img {
                localFile {
                  publicURL
                }
                alt
              }
              body {
                ... on PrismicHeaderBodyLink {
                  id
                  primary {
                    link {
                      document {
                        ... on PrismicDoc {
                          id
                          uid
                        }
                      }
                    }
                    link_name {
                      text
                    }
                  }
                }
              }
              cart_name {
                text
              }
              catalog_img {
                localFile {
                  publicURL
                }
                alt
              }
              catalog_name {
                text
              }
              favorites_img {
                localFile {
                  publicURL
                }
                alt
              }
              favorites_name {
                text
              }
              find_img {
                localFile {
                  publicURL
                }
                alt
              }
              find_name {
                text
              }
              field_example {
                text
              }
              logo_svg {
                localFile {
                  publicURL
                }
                alt
              }
              sale_name {
                text
              }
              catalog_mobile_img {
                alt
                localFile {
                  publicURL
                }
              }
              main_img {
                alt
                localFile {
                  publicURL
                }
              }
              main_name {
                text
              }
            }
          }
        }
      }
      allPrismicCatalog {
        edges {
          node {
            data {
              sales_name {
                text
              }
              all_stories {
                stories {
                  document {
                    ... on PrismicStories {
                      id
                      data {
                        image {
                          localFile {
                            childImageSharp {
                              gatsbyImageData
                            }
                          }
                        }
                        text {
                          text
                        }
                        link
                        tumbler_link
                      }
                    }
                  }
                }
              }
              all_sales {
                sales {
                  document {
                    ... on PrismicSales {
                      uid
                      id
                      data {
                        link {
                          text
                        }
                        title {
                          text
                        }
                        previewtext {
                          text
                        }
                        previewimage {
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
              categories {
                category {
                  document {
                    ... on PrismicCategory {
                      id
                      uid
                      data {
                        brands {
                          child {
                            document {
                              ... on PrismicBrand {
                                id
                                data {
                                  name
                                  body {
                                    ... on PrismicBrandBodyLogo {
                                      id
                                      primary {
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
                          }
                        }
                        body {
                          ... on PrismicCategoryBodyVerticalImg {
                            slice_type
                            id
                            primary {
                              link
                              tumbler_link
                              catalog_img {
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
                        children {
                          child {
                            document {
                              ... on PrismicSubcategory {
                                id
                                uid
                                data {
                                  name
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
                        }
                        name
                        image {
                          localFile {
                            childImageSharp {
                              gatsbyImageData
                            }
                          }
                          alt
                        }
                        category_icon {
                          localFile {
                            publicURL
                          }
                          alt
                        }
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
              catalog_name {
                text
              }
            }
          }
        }
      }
      allPrismicFooter {
        edges {
          node {
            data {
              contact_name {
                text
              }
              about_name {
                text
              }
              copyright {
                text
              }
              menu_name {
                text
              }
              seen_name {
                text
              }
              body {
                ... on PrismicFooterBodyLink {
                  id
                  primary {
                    uid_link {
                      text
                    }
                    link_name {
                      text
                    }
                  }
                }
              }
              body1 {
                ... on PrismicFooterBody1Link {
                  id
                  primary {
                    link {
                      document {
                        ... on PrismicDoc {
                          id
                          uid
                        }
                      }
                    }
                    link_name {
                      text
                    }
                  }
                }
              }
              body2 {
                ... on PrismicFooterBody2Social {
                  id
                  primary {
                    link {
                      url
                    }
                    social_img_white {
                      alt
                      localFile {
                        publicURL
                      }
                    }
                    social_img {
                      alt
                      localFile {
                        publicURL
                      }
                    }
                  }
                  slice_type
                }
                ... on PrismicFooterBody2Contact {
                  id
                  slice_type
                  primary {
                    contact_link {
                      url
                    }
                    contact_link_name {
                      text
                    }
                  }
                }
              }
              body3 {
                ... on PrismicFooterBody3Document {
                  id
                  primary {
                    doc_file {
                      url
                    }
                    doc_name {
                      text
                    }
                  }
                }
              }
            }
          }
        }
      }
      prismicDocs {
        data {
          from_footer {
            doc {
              document {
                ... on PrismicDoc {
                  id
                  uid
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
  `)

  const IsDesktop =
    typeof window !== "undefined" &&
    window.matchMedia("(min-width: 1025px)").matches

  const [catalog, setCatalog] = React.useState(false)

  const [animation, setAnimation] = React.useState(false)

  const choose_catalog = IsDesktop => {
    switch (IsDesktop) {
      case true:
        return <Catalog data={data} animation={animation} />

      default:
        return <MobileCatalog data={data} animation={animation} />
    }
  }

  const button_trigger = catalog => {
    switch (catalog) {
      case true:
        return choose_catalog(IsDesktop)

      default:
        return null
    }
  }

  const back_trigger = catalog => {
    switch (catalog) {
      case true:
        return (
          <div
            role="button"
            aria-label="Background Catalog"
            tabIndex={0}
            className={classes.background}
            // onClick={() => {
            //   if (catalog === true) {
            //     setTimeout(() => {
            //       setCatalog(!catalog)
            //     }, 150)
            //   } else {
            //     setCatalog(!catalog)
            //   }
            //   setAnimation(!animation)
            // }}
            // onKeyDown={() => {
            //   if (catalog === true) {
            //     setTimeout(() => {
            //       setCatalog(!catalog)
            //     }, 150)
            //   } else {
            //     setCatalog(!catalog)
            //   }
            //   setAnimation(!animation)
            // }}
          />
        )

      default:
        return null
    }
  }

  const classes = useStyles({ animation })

  return (
    <main className={classes.root}>
      <Header
        data={data}
        catalog={catalog}
        setCatalog={setCatalog}
        animation={animation}
        setAnimation={setAnimation}
      />
      {button_trigger(catalog)}
      {back_trigger(catalog)}
      <MobileMenu data={data} />
      <div className={classes.content}>{children}</div>
      <Footer data={data} />
    </main>
  )
}
