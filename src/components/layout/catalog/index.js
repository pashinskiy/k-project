import React from 'react';
import { makeStyles, Divider, Typography } from '@material-ui/core';
import Category from './category';
import './catalog.css';
import DefaultLink from '../header/link/default';
import { Link, navigate } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";

const useStyles = makeStyles(theme => ({
    root: {
        position: 'absolute',
        width: '100%',
        height: 'fit-content',
        minHeight: 760,
        zIndex: 1000,
        background: theme.palette.color.mainContrast,
        borderRadius: '0px 0px 40px 40px',
        display: 'flex',
        justifyContent: 'center',
        top: 100,
        left: 0,
        '@media (max-width: 1025px)': {
            top: 70,
        },
        animationName: props => (props.animation === true)
            ? 'catalog_in'
            : 'catalog_out',
        animationDuration: '.15s',
        animationTimingFunction: 'ease-out',
        animationFillMode: 'forwards',
    },
    root_container: {
        padding: 28,
        boxSizing: 'border-box',
        maxWidth: 1280,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
    },
    container: {
        display: 'flex',
        height: 'fit-content',
    },
    catalog: {
        width: 'fit-content',
        marginRight: 12,
        '& h2': {
            marginBottom: 28,
            fontSize: 17,
            fontWeight: 600,
        },
    },
    divider: {
        height: 'auto',
    },
    categories_brands: {
        display: 'flex',
    },
    category: {
        padding: 28,
        boxSizing: 'border-box',
        '& h3': {
            fontSize: 36,
            fontWeight: 600,
        },
    },
    wrapper: {
        textDecoration: "none",
        color: theme.palette.color.main,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        '& img': {
            marginRight: 12,
        },
    },
    sub_categories: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        width: 528,
        height: 'fit-content',
    },
    sub_category: {
        marginTop: 28,
        width: 'calc(50% - 14px)',
        height: 'fit-content',
        '& h4': {
            fontSize: 17,
            fontWeight: 600,
            marginBottom: 20,
        },
        '& a': {
            marginLeft: 0,
            marginTop: 12,
            fontSize: 14,
            '&:first-child': {
                marginTop: 0,
            },
        },
    },
    linkSubCategory: {
        color: theme.palette.color.main,
        textDecoration: "none"
    },
    promo: {
        display: 'flex',
        flexDirection: 'column',
        '& img': {
            borderRadius: 12,
            width: 240,
            height: 340,
            marginBottom: 12,
        },
    },
    brand: {
        marginTop: 8,
        '&:first-child': {
            marginTop: 28,
        },
    },
    brand_wrapper: {
        padding: 12,
        width: 84,
        height: 84,
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        objectFit: 'fit',
        background: theme.palette.background.secondary,
        borderRadius: 12,
        '& img': {
            width: '100%',
            height: 'auto',
        },
    },
    buttonRoot: {
        background: 'none',
        marginTop: 10,
        border: 'none',
        width: 260,
        padding: 10,
        boxSizing: 'border-box',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        color: theme.palette.color.secondary,
        transition: '.15s ease all',
        borderRadius: 8,
        '& h3': {
            fontSize: 14,
            flex: 1,
            textAlign: 'left',
            lineHeight: '150%',
            color: theme.palette.color.accentSecondary,
        },
        '&:hover': {
            background: theme.palette.background.secondary,
        },
    },
}));

export default function Catalog({ data, animation }) {
    
    const [hover, setHover] = React.useState(data.allPrismicCatalog.edges[0].node.data.categories[0].category.document?.data.name);

    const classes = useStyles({ animation });

    return (
        <div id="catalog" className={classes.root}>
            <div className={classes.root_container}>
                <div className={classes.container}>
                    <div className={classes.catalog}>
                        <Typography variant="h2">{data.allPrismicCatalog.edges[0].node.data.catalog_name.text}</Typography>
                        <nav className={classes.menu}>
                            {data.allPrismicCatalog.edges[0].node.data.categories.map((category, i) => (
                                <Category
                                    key={`category ${i}`}
                                    svg={category.category.document?.data.category_icon.localFile?.publicURL + '#fill'}
                                    alt={category.category.document?.data.category_icon.alt ?? "img"}
                                    name={category.category.document?.data.name}
                                    uid={category.category.document?.uid}
                                    setHover={setHover} />
                            ))}
                            <button
                                className={classes.buttonRoot}
                                onClick={() => {navigate(`/discounted-products`)}}>
                                <Typography variant="h3">
                                    Уценённые товары
                                </Typography>
                            </button>
                        </nav>
                    </div>
                    <Divider orientation="vertical" className={classes.divider} />
                    {data.allPrismicCatalog.edges[0].node.data.categories.filter(atr => atr.category.document?.data.name === hover).map((category, i) => (
                        <div className={classes.category} key={`category ${i}`}>
                            <Link to={`/category/${category.category.document?.uid}`} className={classes.wrapper}>
                                <img src={category.category.document?.data.category_icon.localFile?.publicURL + '#gradient'} alt={category.category.document?.data.category_icon ?? "img"} />
                                <Typography variant="h3">{category.category.document?.data.name}</Typography>
                            </Link>
                            <div className={classes.categories_brands}>
                                <div className={classes.sub_categories}>
                                {category.category.document?.data.children.map((sub_category, i) => (
                                    <div className={classes.sub_category} key={`subcategory ${i}`}>
                                        <Link to={`/subcategory/${sub_category.child.document?.uid}`} className={classes.linkSubCategory}>
                                            <Typography variant="h4">
                                                {(sub_category.child.document === null) ? null : sub_category.child.document?.data.name}
                                            </Typography>
                                        </Link>
                                        <nav>
                                            {(sub_category.child.document === null)
                                                ?
                                                    null 
                                                :
                                                    [sub_category.child.document?.data.tags.map((tag, i) => (
                                                        <DefaultLink name={tag.tag.document?.data === null || undefined ? tag.tag.document?.data?.name : null} link={`/subcategory/${sub_category.child.document?.uid}/?group=${tag.tag.document?.data === null || undefined ? tag.tag.document?.data?.name : null}`} key={`tag ${i}`} />
                                                    ))]
                                            }
                                        </nav>
                                    </div>
                                ))}
                                </div>
                                <nav className={classes.brands}>
                                    {category.category.document?.data.brands.map((brand, i) => (
                                        <div className={classes.brand} key={`brand ${i}`}>
                                            {(brand.child.document === null)
                                                ?
                                                    null
                                                :
                                                    <Link to={`/products/?category="${category.category.document?.data.name}"&Производитель=["${brand.child.document?.data.name.replace("ё", "е")}"]`}>
                                                        <div className={classes.brand_wrapper}>
                                                            <GatsbyImage loading="eager" image={brand.child.document?.data.body[0]?.primary?.image.localFile?.childImageSharp?.gatsbyImageData} alt={brand.child.document?.data.body[0]?.primary?.image.alt ?? "img"} />
                                                        </div>
                                                    </Link>
                                            }
                                        </div>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className={classes.promo}>
                    {data.allPrismicCatalog.edges[0].node.data.categories.filter(atr => atr.category.document?.data.name === hover)[0].category.document?.data.body.filter(slice => slice.slice_type === 'vertical_img').map((promo, i) => 
                        (promo.primary?.tumbler_link === true ?
                            <Link to={`${promo.primary?.link}`}>
                                <GatsbyImage loading="eager" image={promo.primary?.catalog_img?.localFile?.childImageSharp.gatsbyImageData} alt={promo.primary?.catalog_img.alt ?? "img"} className={classes.img} key={`images_promo ${i}`} />
                            </Link>
                        : 
                            <a href={`${promo.primary?.link}`} target="_blank" rel="noopener noreferrer">
                                <GatsbyImage loading="eager" image={promo.primary?.catalog_img?.localFile?.childImageSharp.gatsbyImageData} alt={promo.primary?.catalog_img.alt ?? "img"} className={classes.img} key={`images_promo ${i}`} />
                            </a>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};