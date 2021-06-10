import * as React from "react";
import { graphql, Link } from "gatsby";
import { makeStyles, Typography } from "@material-ui/core";
import Layout from "../components/layout";
import Seo from "../components/seo";
import BreadCrumbs from "../components/breadCrumbs";
import DefaultLink from "../components/layout/header/link/default";

const useStyles = makeStyles(theme => ({
    root: {
        padding: '28px 0px 68px 0px',
        boxSizing: 'border-box',
    },
    wrapper: {
        marginTop: 28,
        marginBottom: 40,
        display: 'flex',
        alignItems: 'center',
        '& img': {
            marginRight: 12,
        },
        '& h1': {
            fontSize: 36,
            fontWeight: 600,
        },
    },
    subcategory: {
        marginBottom: 32,
    },
    content: {
        display: 'flex',
    },
    hyper_links: {
        width: 268,
        hight: 'fit-content',
        padding: 28,
        boxSizing: 'border-box',
        background: theme.palette.background.secondary,
        borderRadius: 20,
        '@media (max-width: 1024px)': {
            display: 'none',
        },
    },
    title_subcategory: {
        textDecoration: 'none',
        color: theme.palette.color.accentSecondary,
        fontSize: 17,
        fontWeight: 700,
    },
    all_tags: {
        marginTop: 20,
        '& a': {
            margin: 0,
            marginTop: 12,
            '&:first-child': {
                marginTop: 0,
            },
            fontSize: 14,
        },
    },
}));

const Category = ({ data: { prismicCategory } }) => {
  
    const classes = useStyles();

    return (
        <Layout>
            <Seo title={`Купить ${prismicCategory.data.name} в Krypton`} />
            <div className={classes.root}>
                <BreadCrumbs
                    links={[
                        {
                            title: prismicCategory.data.name,
                            href: `/category/${prismicCategory.uid}`,
                        },
                    ]} />
                <div className={classes.wrapper}>
                    <img src={prismicCategory.data.category_icon.localFile.publicURL + '#gradient'} alt={''} />
                    <Typography variant="h1">{prismicCategory.data.name}</Typography>
                </div>
                <div className={classes.content}>
                    <div className={classes.hyper_links}>
                        {prismicCategory.data.children.map((subcategory, i) => (
                            <div key={`subcategories_category_page ${i}`} className={classes.subcategory}>
                                <Link to={`/`} className={classes.title_subcategory}>{subcategory.child.document?.data?.name}</Link>
                                <nav className={classes.all_tags}>
                                    {subcategory.child.document?.data.tags?.map((tag, i) => (
                                        <DefaultLink name={tag.tag.document.data.name} />
                                    ))}
                                </nav>
                            </div>
                        ))}
                    </div>
                    <div className={classes.content_blocks}>
                        
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Category;

export const pageQuery = graphql`
    query Category($uid: String!) {
        prismicCategory(uid: {eq: $uid}) {
            uid
            data {
                name
                body {
                    ... on PrismicCategoryBodyHorizontalImg {
                        id
                        primary {
                            category_img {
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
                        }
                    }
                }
                category_icon {
                    localFile {
                        publicURL
                    }
                    alt
                }
                children {
                    child {
                        document {
                            ... on PrismicSubcategory {
                                id
                                data {
                                    name
                                    image {
                                        alt
                                        localFile {
                                            childImageSharp {
                                                gatsbyImageData
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
                }
            }
        }
    }  
`;