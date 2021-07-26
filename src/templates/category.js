import * as React from "react";
import { graphql, Link } from "gatsby";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import Seo from "../components/seo";
import BreadCrumbs from "../components/breadCrumbs";
import DefaultLink from "../components/layout/header/link/default";
import StoriesPanel from "../components/widgets/storiesPanel";
import ScrollBar from "../components/categoryPage/scrollBar";
import { GatsbyImage } from "gatsby-plugin-image";
import CardWidget from "../components/widgets/cardWidget";
import FiltersBySticker from "../components/catalog/fastLink/filtersBySticker";
import AllProductsByCategory from "../components/categoryPage/products";

const useStyles = makeStyles(theme => ({
    root: {
        padding: "28px 0px 68px 0px",
        boxSizing: "border-box",
        width: '100%',
        "@media (max-width: 1024px)": {
            paddingTop: 0,
        },
    },
    wrapper: {
        marginTop: 28,
        marginBottom: 40,
        display: "flex",
        alignItems: "center",
        "& img": {
            marginRight: 12,
        },
        "& h1": {
            fontSize: 36,
            fontWeight: 700,
        },
    },
    subcategory: {
        marginBottom: 32,
    },
    content: {
        display: "flex",
        width: '100%',
    },
    content_blocks: {
        width: '100%',
    },
    hyper_links: {
        flexShrink: 0,
        marginRight: 40,
        width: 268,
        height: "fit-content",
        padding: 28,
        boxSizing: "border-box",
        background: theme.palette.background.secondary,
        borderRadius: 20,
        "@media (max-width: 1024px)": {
            display: "none",
        },
    },
    title_subcategory: {
        textDecoration: "none",
        color: theme.palette.color.accentSecondary,
        fontSize: 17,
        fontWeight: 700,
    },
    all_tags: {
        marginTop: 20,
        "& a": {
        margin: 0,
        marginTop: 12,
        "&:first-child": {
            marginTop: 0,
        },
        fontSize: 14,
        },
    },
    banner: {
        width: '100%',
        height: 260,
        background: theme.palette.background.secondary,
        padding: 8,
        borderRadius: 20,
        overflow: "hidden",
        WebkitBackfaceVisibility: 'hidden',
        MozBackfaceVisibility: 'hidden',
        WebkitTransform: 'translate3d(0, 0, 0)',
        MozTransform: 'translate3d(0, 0, 0)',
        marginTop: 48,
        '@media (max-width: 1024px)': {
            marginTop: 28,
        },
        '@media (max-width: 767px)': {
            marginTop: 36,
        },
    },
    img: {
        borderRadius: 12,
        width: '100%',
        height: '100%',
    },
    content_wrapper: {
        marginTop: 40,
        '@media (max-width: 1024px)': {
            marginTop: 28,
        },
        '@media (max-width: 767px)': {
            marginTop: 36,
        },
        width: '100%',
        height: 'fit-content',
        '& h3': {
            fontSize: 28,
            '@media (max-width: 767px)': {
                fontSize: 17,
            },
            fontWeight: 700,
            marginBottom: 20,
        },
    },
    subcategory_content_wrapper: {
        marginTop: 80,
        width: '100%',
        height: 'fit-content',
        '& h3': {
            fontSize: 28,
            fontWeight: 700,
            marginBottom: 20,
        },
    },
    subcategory_card: {
        marginRight: 8,
    },
    brand_card: {
        marginRight: 8,
        width: 140,
        height: 'auto',
    },
}));

const Category = ({ data: { prismicCategory, allPrismicStories, allPrismicProduct } }) => {

    const classes = useStyles();

    return (
        <div>
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
                    <img src={prismicCategory.data.category_icon.localFile.publicURL + "#gradient"} alt={""} />
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
                        <ScrollBar fullScreen buttonNext >
                            <StoriesPanel stories={allPrismicStories.edges.map(edge => edge.node)}/>
                        </ScrollBar>
                        <div className={classes.banner}>
                            <GatsbyImage
                                image={prismicCategory.data.body[0].primary.category_img.localFile.childImageSharp.gatsbyImageData}
                                alt={prismicCategory.data.body[0].primary.category_img.alt}
                                className={classes.img} />
                        </div>
                        <div className={classes.content_wrapper}>
                            <Typography variant="h3">Категории</Typography>
                            <ScrollBar fullScreen buttonNext >
                                {prismicCategory.data.children.map((subcategory, i) => (
                                    <Grid key={`subcategories_cards_category_page ${i}`} className={classes.subcategory_card}>
                                        <CardWidget
                                            variant="category"
                                            cardLink={``}
                                            cardImage={subcategory.child.document?.data?.image.localFile.childImageSharp.gatsbyImageData}
                                            cardTitle={subcategory.child.document?.data?.name} />
                                    </Grid>
                                ))}
                            </ScrollBar>
                        </div>
                        <div className={classes.content_wrapper}>
                            <Typography variant="h3">Специальные предложения</Typography>
                            <ScrollBar fullScreen buttonNext >
                                <FiltersBySticker products={allPrismicProduct.edges.map(edge => edge.node)} />
                            </ScrollBar>
                        </div>
                        <div className={classes.content_wrapper}>
                            <Typography variant="h3">Популярные бренды</Typography>
                            <ScrollBar fullScreen buttonNext >
                                {prismicCategory.data.brands.map((brand, i) => (
                                    <Grid key={`brands_category_page ${i}`} className={classes.brand_card}>
                                        <CardWidget
                                            variant="brand"
                                            cardLink={``}
                                            cardImage={brand.child.document?.data?.body[0].primary.image.localFile.childImageSharp.gatsbyImageData}
                                            cardTitle={brand.child.document?.data?.name} />
                                    </Grid>
                                ))}
                            </ScrollBar>
                        </div>
                        {prismicCategory.data.children.map((subcategory_product, i) => (
                            <div key={`subcategories_nodes_category_page ${i}`} className={classes.subcategory_content_wrapper}>
                                <Typography variant="h3">{subcategory_product.child.document?.data?.name}</Typography>
                                <AllProductsByCategory subcategory_product={subcategory_product} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category

export const pageQuery = graphql`
    query Category($uid: String!) {
        prismicCategory(uid: { eq: $uid }) {
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
                                uid
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
        allPrismicStories(filter: {data: {category: {uid: {eq: $uid}}}}) {
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
                        text {
                            text
                        }
                    }
                }
            }
        }
        allPrismicProduct(filter: { data: { main_category: { uid: { eq: $uid } } } }) {
            edges {
                node {
                    id
                    uid
                    data {
                        body {
                            ... on PrismicProductBodyStickers {
                                slice_type
                                items {
                                    sticker {
                                        document {
                                            ... on PrismicSticker {
                                                id
                                                data {
                                                    image {
                                                        alt
                                                        localFile {
                                                            childImageSharp {
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
                            }
                        }
                    }
                }
            }
        }
    }
`;
