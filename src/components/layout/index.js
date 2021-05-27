import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { makeStyles } from '@material-ui/core';
import Header from './header';
import Footer from './footer';
import MobileMenu from './mobileMenu';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: "border-box",
    width: "100vw",
    padding: "0 2.18vw",
    margin: "0 auto",
    "@media(min-width: 1280px)": {
      maxWidth: 1280,
      width: "100%",
      padding: "0 28px",
    },
    "@media(max-width: 834px)": {
      padding: "0 3.35vw",
    },
    "@media(max-width: 414px)": {
      padding: "0 6.76vw",
    },
  },
  content: {
    flex: 1,
  },
}));

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
                      url
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
                    link {
                      url
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
                      url
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
      allPrismicProduct {
        edges {
          node {
            data {
              name
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
              price
            }
          }
        }
      }
    }
  `);

  const classes = useStyles({ });

  return (
    <main className={classes.root}>
      <Header data={data} />
      <MobileMenu data={data} />
      <div className={classes.content}>
        {children}
      </div>
      <Footer data={data} />
    </main>
  );

};
