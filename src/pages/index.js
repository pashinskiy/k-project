import * as React from "react";
import { graphql } from "gatsby";
import { makeStyles } from '@material-ui/core';
import MainPageSlider from "../components/mainPageSlider";
import Seo from "../components/seo";
import Card from "../components/mainPage/dayProduct";
import Categories from "../components/mainPage/categories";
import News from "../components/mainPage/news";
import Advantages from "../components/mainPage/advantages";
import Sales from "../components/mainPage/sales";
import Hot from "../components/mainPage/hot";
import NewProducts from "../components/mainPage/newProducts";
import Popular from "../components/mainPage/popular";
import SocialNetworks from "../components/mainPage/social";

const useStyles = makeStyles(theme => ({
  day_news_categories: {
    display: 'grid',
    gridTemplateColumns: '1fr 854px',
    gap: 40,
    rowGap: 0,
    '& .index--day--product': {
      gridRow: 'span 2',
    },
    '@media (max-width: 1279px)': {
      gap: 22,
      rowGap: 40,
      gridTemplateColumns: '1fr auto',
      '& .index--day--product': {
        gridRow: 2,
      },
    },
    '@media (max-width: 767px)': {
      '& .index--day--product': {
        gridColumn: 'span 2',
      },
    },
  },
}));

const IndexPage = ({ data }) => {

  const classes = useStyles()

  const allSales = data.allPrismicSales.edges.map(edge => edge.node);

  const allPromotionBanners = data.allPrismicPromotionBanner.edges.map(edge => edge.node);

  return (
    <>
      <Seo title="Krypton – интернет-маркетплейс, который вы так долго искали" />
      <div style={{marginBottom: 28,}} />
      <MainPageSlider array={allSales} variant={"sales"} />
      <div style={{marginBottom: 40,}} />
      <div className={classes.day_news_categories}>
        <Card data={data} />
        <News data={data.allPrismicStories} />
        <Categories data={data.allPrismicCategory} />
      </div>
      <Advantages data={data} />
      <Sales data={data} />
      <div style={{marginBottom: 80,}} />
      <Hot data={data} />
      <div style={{marginBottom: 80,}} />
      <MainPageSlider array={allPromotionBanners} variant={"promotionBanner"}/>
      <div style={{marginBottom: 80,}} />
      <NewProducts data={data} />
      <div style={{marginBottom: 80,}} />
      <Popular data={data} />
      <div style={{marginBottom: 100,}} />
      <SocialNetworks data={data} />
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query MainPage {
    allPrismicMainPage {
      edges {
        node {
          data {
            hot {
              hot_product {
                document {
                  ... on PrismicProduct {
                    id
                    data {
                      images {
                        image {
                          localFile {
                            childImageSharp {
                              gatsbyImageData
                            }
                          }
                        }
                      }
                      price
                      name
                    }
                  }
                }
              }
            }
            new {
              new_product {
                document {
                  ... on PrismicProduct {
                    id
                    data {
                      images {
                        image {
                          localFile {
                            childImageSharp {
                              gatsbyImageData
                            }
                          }
                        }
                      }
                      price
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
    allPrismicBrand {
      edges {
        node {
          data {
            name
            body {
              ... on PrismicBrandBodyLogo {
                id
                primary {
                  image {
                    localFile {
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                }
              }
            }
            popular
          }
        }
      }
    }
    allPrismicSale {
      edges {
        node {
          data {
            sale_img {
              alt
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            sale_name {
              raw
            }
            sale_value
            sale_link {
              url
            }
          }
        }
      }
    }
    allPrismicAdvantage(sort: {fields: data___priority}) {
      edges {
        node {
          data {
            adv_img {
              alt
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            adv_title {
              raw
            }
          }
        }
      }
    }
    allPrismicSales {
      edges {
        node {
          uid
          data {
            creationdate
            enddate
            startdate
            previewimage {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
              alt
            }
            previewtext {
              text
            }
            title {
              text
            }
            salestext {
              html
            }
            link {
              text
            }
          }
        }
      }
    }
    allPrismicStories {
      edges {
        node {
          data {
            text {
              text
            }
            image {
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
    allPrismicProduct {
      edges {
        node {
          data {
            name
            price
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
          }
        }
      }
    }
    allPrismicPromotionBanner {
      edges {
        node {
          data {
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
              alt
            }
          }
        }
      }
    }
    allPrismicDayProduct {
      edges {
        node {
          data {
            product {
              document {
                ... on PrismicProduct {
                  id
                  data {
                    name
                    price
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
            sale
          }
        }
      }
    }
    allPrismicCategory(sort: {fields: data___order}) {
      edges {
        node {
          data {
            image {
              alt
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            name
          }
        }
      }
    }
    allPrismicFooterBody2Social {
      edges {
        node {
          primary {
            social_name {
              raw
            }
            social_img_white {
              localFile {
                publicURL
              }
              alt
            }
            link {
              url
            }
          }
        }
      }
    }
  }
`;